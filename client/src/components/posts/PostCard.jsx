import React, { useState } from "react";	
import useFetchPosts from "../../hooks/useFetchPosts";

const PostCard = ({ initialLimit = 999, maxLimit = 1000 }) => {
  const [visiblePosts, setVisiblePosts] = useState(initialLimit);
  const [order, setOrder] = useState("asc");
  const posts = useFetchPosts(maxLimit, order);

  const handleLoadMore = () => {
    setVisiblePosts((prev) => Math.min(prev + 12, maxLimit));
  };

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  return (
    <div className="post-card"
        style={{backgroundImage: `url(${posts[0]?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || ""})`}}
    >
      {posts.slice(0, visiblePosts).map((post) => (
        <>
          <div className="post-info-container" key={post.id}>
            <h3 className="post-title">{post.title.rendered}</h3>
            <p className="post-excerpt">{truncateText(post.excerpt.rendered.replace(/<[^>]+>/g, ''), 100)}</p>
            <a>Saber más</a>
          </div>
          <div className="footer-post-card">          
            <h3>{post.title.rendered}</h3>
          </div>
        </>
      ))}
    </div>
  );
};

export default PostCard;
