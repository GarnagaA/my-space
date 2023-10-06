import React, { useEffect, useMemo, useState } from "react";
import { useFetching } from "../../hooks/useFetching";
import { getPageCount } from "../../utils/pages";

import PostsFilter from "../../components/PostsFilter";
import PostList from "../../components/PostList";
import BlackHole from "../../components/Animations/BlackHole";
import ErrorPage from "../ErrorPage";

import PostService from "../../API/PostService";
import cl from "./index.module.scss";
import Pagination from "../../components/Pagination";

const FetchPage = () => {
  const [posts, setPosts] = useState([]); // хранилище постов
  const [filter, setFilter] = useState({
    selected: "",
    query: "",
  });

  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchData, isLoading, error] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...response.data]);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    fetchData();
  }, [page]);

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
          <BlackHole style={{ marginTop: 200, width: 400 }} />
        </div>
      ) : (
        <PostList posts={filteredList} animationType="opacity" />
      )}
      <Pagination totalPages={totalPages} page={page} setPage={setPage} />
    </div>
  );
};
export default FetchPage;
