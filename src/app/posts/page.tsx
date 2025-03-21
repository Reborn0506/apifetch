import Link from 'next/link';

async function getpost() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
}

export default async function postpage() {
  const posts = await getpost();

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`} 
            className="underline underline-offset-1 text-blue-600">
              {post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

