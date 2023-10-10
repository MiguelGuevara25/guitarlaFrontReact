import "../styles/blog.css";
import Post from "../components/Post";
import useBlog from "../hooks/useBlog";

const Blog = () => {
  const { blogGuitar } = useBlog();

  return (
    <main className="contenedor">
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {blogGuitar.length === 0
          ? "Cargando contenido..."
          : blogGuitar.map((post) => (
              <Post key={post.id} post={post?.attributes} />
            ))}
      </div>
    </main>
  );
};

export default Blog;
