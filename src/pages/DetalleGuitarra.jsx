import useOnlyDataGuitarra from "../hooks/useOnlyDataGuitarra";
import "../styles/guitarras.css";

const DetalleGuitarra = () => {
  const { guitarDetails } = useOnlyDataGuitarra();
  const { descripcion, imagen, precio, nombre } = guitarDetails;

  return (
    <main className="contenedor guitarra">
      <img
        className="imagen"
        src={imagen?.data.attributes.url}
        alt={`Imagen de la guitarra ${nombre}`}
      />

      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">${precio}</p>
      </div>
    </main>
  );
};

export default DetalleGuitarra;
