import Guitarra from "../components/Guitarra";
import Post from "../components/Post";
import useBlog from "../hooks/useBlog";
import useDataGuitarras from "../hooks/useDataGuitarras";

const Home = () => {
  const { datosGuitarra } = useDataGuitarras();
  const { blogGuitar } = useBlog();

  return (
    <>
      <main className="contenedor">
        <h2 className="heading">Nuestra Colección</h2>
        {datosGuitarra.length && (
          <div className="guitarras-grid">
            {datosGuitarra.map((guitarra) => (
              <Guitarra key={guitarra.id} guitarra={guitarra?.attributes} />
            ))}
          </div>
        )}

        <h2 className="heading">Blog</h2>
        <div className="blog">
          {blogGuitar.length &&
            blogGuitar.map((post) => (
              <Post key={post.id} post={post?.attributes} />
            ))}
        </div>
      </main>
    </>
  );
};

export default Home;
