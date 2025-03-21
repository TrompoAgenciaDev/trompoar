import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Posts from "../json/posts.json";


import '../assets/styles/single-post.css'


const SinglePost = () => {
  const { slug } = useParams(); // Obtenemos el slug de la URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Buscar el post por su slug
    const foundPost = Posts.find(post => post.slug === slug);
    setPost(foundPost);
  }, [slug]); // Se vuelve a ejecutar cada vez que el slug cambia

  if (!post) {
    return <p>Post no encontrado</p>; // Mensaje si no se encuentra el post
  }

  return (
    <div className="single-post-container">
      <div className="post-card">
        <h1 className="title">{post.title}</h1>
        <img className="featured-image" src={post.featured_image} alt="" />
        <p className="content">{post.long_description}</p>
        {/* Aquí puedes agregar más detalles del post, como la fecha, categorías, etc. */}
      </div>
    </div>
  );
};

export default SinglePost;
