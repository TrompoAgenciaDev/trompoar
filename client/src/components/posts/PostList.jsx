import React, { useState } from "react";	
import useFetchPosts from "../../hooks/useFetchPosts";

const PostsList = ({ initialLimit = 12, maxLimit = 100 }) => {
  const [visiblePosts, setVisiblePosts] = useState(initialLimit);
  const [order, setOrder] = useState("desc");
  const posts = useFetchPosts(maxLimit, order);

  const handleLoadMore = () => {
    setVisiblePosts((prev) => Math.min(prev + 12, maxLimit));
  };

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Últimos Posts</h2>
        <select
          className="border p-2 rounded"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
        >
          <option value="desc">Más recientes</option>
          <option value="asc">Más antiguos</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.slice(0, visiblePosts).map((post) => (
          <div key={post.id} className="border rounded-lg p-4 shadow-lg">
            <img
              src={post._embedded["wp:featuredmedia"][0].source_url}
              alt={post.title.rendered}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-2">{post.title.rendered}</h3>
            <p className="text-gray-600 text-sm mt-1">{truncateText(post.excerpt.rendered.replace(/<[^>]+>/g, ''), 100)}</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">Saber más</button>
          </div>
        ))}
      </div>
      {visiblePosts < posts.length && (
        <div className="text-center mt-4">
          <button
            onClick={handleLoadMore}
            className="bg-gray-700 text-white px-6 py-2 rounded-md"
          >
            Cargar más
          </button>
        </div>
      )}
    </div>
  );
};

export default PostsList;