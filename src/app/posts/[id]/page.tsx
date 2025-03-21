async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.org/posts/${id}`);
  return res.json();
}

export default async function posts({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}