import { useEffect, useState } from "react";

const useDataGuitarras = () => {
  const [datosGuitarra, setDatosGuitarra] = useState([]);

  const getGuitarras = async () => {
    const url = "http://localhost:1337/api/guitarras?populate=imagen";
    const res = await fetch(url);
    const data = await res.json();
    setDatosGuitarra(data.data);
  };

  useEffect(() => {
    getGuitarras();
  }, []);

  return {
    getGuitarras,
    datosGuitarra,
  };
};

export default useDataGuitarras;

