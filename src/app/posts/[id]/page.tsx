import Link from "next/link";
async function getpost(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return response.json();
}

export default async function postpage({ params }: { params: { id: string } }) {
  const post = await getpost(params.id);

  return (
    <div>
      <Link href="/posts" className="underline underline-offset-1 text-blue-600">
         Go Back
     </Link>
       
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}