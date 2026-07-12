type Props = { params: { slug: any } };

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;

  return <div>This is the blog page for {slug}</div>;
}
