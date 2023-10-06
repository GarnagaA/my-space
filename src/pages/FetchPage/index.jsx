import React, { useEffect, useMemo, useState } from "react";
import PostsFilter from "../../components/PostsFilter";
import PostService from "../../API/PostService";
import PostList from "../../components/PostList";
import cl from "./index.module.scss";
import BlackHole from "../../components/Animations/BlackHole";
import { useFetching } from "../../hooks/useFetching";
import ErrorPage from "../ErrorPage";

const FetchPage = () => {
  const [fetchData, isLoading, error] = useFetching(async () => {
    const response = await PostService.getAll();
    setPosts([...response]);
  });
  const [posts, setPosts] = useState([]); // хранилище постов
  const [filter, setFilter] = useState({
    selected: "",
    query: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

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
    <div className={cl.FetchPage}>
      <div className={cl.wrapperFilter}>
        <PostsFilter filter={filter} setFilter={setFilter} />
      </div>
      {error && <ErrorPage />}
      {isLoading ? (
        <div className={cl.wrapperAnimation}>
          <BlackHole style={{ width: 400 }} />
        </div>
      ) : (
        <PostList posts={filteredList} animationType="opacity" />
      )}
    </div>
  );
};
export default FetchPage;
