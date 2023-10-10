import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useOnlyDataGuitarra = () => {
  const { url } = useParams();
  const [guitarDetails, setGuitarDetails] = useState([]);

  const getGuitarra = async (urlData) => {
    const url = `http://localhost:1337/api/guitarras?filters[url]=${urlData}&populate=imagen`;
    const res = await fetch(url);
    const data = await res.json();
    setGuitarDetails(data.data[0].attributes);
  };

  useEffect(() => {
    getGuitarra(url);
  }, [url]);

  return { guitarDetails };
};

export default useOnlyDataGuitarra;
