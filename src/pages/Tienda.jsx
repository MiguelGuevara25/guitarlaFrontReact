import useDataGuitarras from "../hooks/useDataGuitarras";
import Guitarra from "../components/Guitarra";
import "../styles/guitarras.css";

const Tienda = () => {
  const { datosGuitarra } = useDataGuitarras();

  return (
    <main className="contenedor">
      <h2 className="heading">Nuestra Colección</h2>
      {datosGuitarra.length === 0 ? (
        "Cargando Guitarras..."
      ) : (
        <div className="guitarras-grid">
          {datosGuitarra.map((guitarra) => (
            <Guitarra key={guitarra.id} guitarra={guitarra?.attributes} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Tienda;
