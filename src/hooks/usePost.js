import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const usePost = () => {
  const { url } = useParams();
  const [posts, setPosts] = useState([]);

  const getPost = async (urlData) => {
    const url = `http://localhost:1337/api/posts?filters[url]=${urlData}&populate=imagen`;
    const res = await fetch(url);
    const data = await res.json();

    setPosts(data.data[0].attributes);
  };

  useEffect(() => {
    getPost(url);
  }, [url]);

  return { posts };
};

export default usePost;
