import imgNosotros from "/img/nosotros.jpg";
import "../styles/nosotros.css";

const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imgNosotros} alt="Imagen sobre nosotros" />

        <div>
          <p>
            Ut hendrerit rutrum urna a auctor. Fusce eget neque rutrum, faucibus
            felis in, pharetra purus. Sed elementum aliquet nulla at vehicula.
            Phasellus ac felis leo. Nulla non aliquam felis, a placerat velit.
            Curabitur auctor enim tortor, sed convallis diam egestas in. Nullam
            ac urna vitae tortor iaculis facilisis. Cras ut scelerisque arcu, ac
            euismod nunc. Proin imperdiet tristique sapien, eget facilisis purus
            luctus in.
          </p>

          <p>
            Ut hendrerit rutrum urna a auctor. Fusce eget neque rutrum, faucibus
            felis in, pharetra purus. Sed elementum aliquet nulla at vehicula.
            Phasellus ac felis leo. Nulla non aliquam felis, a placerat velit.
            Curabitur auctor enim tortor, sed convallis diam egestas in. Nullam
            ac urna vitae tortor iaculis facilisis. Cras ut scelerisque arcu, ac
            euismod nunc. Proin imperdiet tristique sapien, eget facilisis purus
            luctus in.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Nosotros;
