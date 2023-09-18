import React, { useEffect, useState } from "react";

const Index = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    try {
      fetch("https://jsonplaceholder.typicode.com/posts/")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setPost([json]);
        });
    } catch (e) {
      console.log(e);
    }
  }, []);
  return <ul>lol</ul>;
};

export default Index;
