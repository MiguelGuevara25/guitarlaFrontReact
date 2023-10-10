import { useEffect, useState } from "react";

const useBlog = () => {
  const [blogGuitar, setBlogGuitar] = useState([]);

  const getPosts = async () => {
    const url = "http://localhost:1337/api/posts?populate=imagen";
    const res = await fetch(url);
    const data = await res.json();
    setBlogGuitar(data.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return {blogGuitar};
};

export default useBlog;
