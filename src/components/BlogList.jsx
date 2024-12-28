// src/components/BlogList.jsx
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";


const BlogList = () => {
  return (
    <section id="blog" className="py-16 bg-gray-100 text-teal-600">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold mb-6 text-center">Blog</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
               {/* Image */}
                <img
                  src={post.image || "/default-thumbnail.png"}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-500 mb-4">{post.date}</p>
                  <p className="text-gray-700 mb-4">
                    {post.excerpt || "Read more about this topic..."}
                  </p>
                  <Link href={`/blog/${post.id}`} className="text-blue-500 hover:underline">Read More</Link>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
