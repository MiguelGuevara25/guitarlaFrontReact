import { formatearFecha } from "../helpers/helpers";
import usePost from "../hooks/usePost";

const DetallePost = () => {
  const { posts } = usePost();
  const { titulo, contenido, imagen, createdAt } = posts;

  return (
    <article className="post mt-3">
      <img
        className="imagen"
        src={imagen?.data?.attributes?.url}
        alt={`Imagen blog ${titulo}`}
      />

      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(createdAt)}</p>
        <p className="text">{contenido}</p>
      </div>
    </article>
  );
};

export default DetallePost;
