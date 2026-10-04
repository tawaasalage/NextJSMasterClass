import { SignJWT, jwtVerify } from "jose";

function secret() {
  return new TextEncoder().encode(process.env.AUTH_SECRET);
}

export async function createToken(user: {
  name: string;
  email: string;
  role: string;
}) {
  return new SignJWT({ name: user.name, email: user.email, role: user.role })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("1h")
    .sign(secret());
}

export async function getTokenUser(token: string) {
  try {
    const { payload } = await jwtVerify(token, secret(), {
      algorithms: ["HS256"],
      requiredClaims: ["exp"],
    });
    return {
      name: payload.name as string,
      email: payload.email as string,
      role: payload.role as string,
    };
  } catch (error) {
    return null;
  }
}
