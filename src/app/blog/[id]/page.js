// src/pages/blog/[id].js
import Link from "next/link";
// import { useRouter } from "next/router";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = ({ params }) => {
  // const router = useRouter();
  const { id } = params;

  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <p>Blog post not found.</p>;
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold mb-4">{post.title}</h2>
        <p className="text-gray-500 mb-6">{post.date}</p>
        <img
          src={post.image || "/default-thumbnail.png"}
          alt={post.title}
          className="w-full max-h-96 object-cover rounded-lg mb-6"
        />
        <div className="text-gray-700 leading-relaxed mb-6">
          <p>{post.content}</p>
        </div>
        {/* Back to Blog or Home */}
        <div className="flex space-x-4">
          <Link href="/#blog" className="text-blue-600 hover:underline">
            Back to Blog
          </Link>
          <Link href="/" className="text-blue-600 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
