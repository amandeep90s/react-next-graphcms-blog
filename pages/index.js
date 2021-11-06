import Head from "next/head";
import { Categories, PostCard, PostWidget } from "../components";

const posts = [
  {
    title: "Hello Next.js",
    excerpt:
      "This is my first blog post. I will be learning how to write blog posts soon.",
  },
  {
    title: "Hello Tailwindcss",
    excerpt:
      "This is my second blog post. I will be learning how to write blog posts soon.",
  },
];

export default function Home() {
  return (
    <div className="container px-10 mx-auto mb-8">
      <Head>
        <title>Graph CMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>

        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}
