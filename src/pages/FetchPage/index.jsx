import React, { useEffect, useMemo, useState } from "react";
import PostsFilter from "../../components/PostsFilter";
import PostService from "../../API/PostService";
import PostList from "../../components/PostList";

const FetchPage = () => {
  const [posts, setPosts] = useState([]); // хранилище постов
  const [filter, setFilter] = useState({
    selected: "",
    query: "",
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await PostService.getAll();
    setPosts([...response]);
    console.log(posts);
  };

  const sortedList = useMemo(() => {
    console.log("отработало useMemo");
    if (filter.selected) {
      return [...posts].sort((a, b) =>
        a[filter.selected].localeCompare(b[filter.selected]),
      );
    }
    return posts;
  }, [filter.selected, posts]);

  const filteredList = useMemo(() => {
    return sortedList.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase()),
    );
  }, [filter.query, sortedList]);

  return (
    <div>
      <PostsFilter filter={filter} setFilter={setFilter} />
      <PostList posts={posts} animationType="opacity" />
    </div>
  );
};
export default FetchPage;
