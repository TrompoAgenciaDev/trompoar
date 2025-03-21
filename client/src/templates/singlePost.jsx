import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Posts from "../json/posts.json";  // Suponiendo que tienes un JSON con los posts

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
      <h1>{post.title}</h1>
      <p>{post.long_description}</p>
      {/* Aquí puedes agregar más detalles del post, como la fecha, categorías, etc. */}
    </div>
  );
};

export default SinglePost;
