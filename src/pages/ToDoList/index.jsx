import React from "react";
import { useState, useMemo } from "react";

import classes from "./index.module.scss";
import ToDoListContext from "./context";

import PostList from "../../components/PostList";
import PostsFilter from "../../components/PostsFilter";
import CreatePostForm from "../../components/CreatePostForm";

const ToDoList = () => {
  const [posts, setPosts] = useState([]); // хранилище постов
  const [filter, setFilter] = useState({
    selected: "",
    query: "",
  });
  const deletePost = (id) => {
    console.log(id);
    setPosts([...posts].filter((el) => el.id !== id));
  };

  const sortedPosts = useMemo(() => {
    console.log("отработало useMemo");
    if (filter.selected) {
      return [...posts].sort((a, b) =>
        a[filter.selected].localeCompare(b[filter.selected]),
      );
    }
    return posts;
  }, [filter.selected, posts]);

  const filteredPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase()),
    );
  }, [filter.query, sortedPosts]);

  return (
    <ToDoListContext.Provider value={{ deletePost, posts, setPosts }}>
      <div className={classes.wrapperToDoList}>
        <CreatePostForm posts={posts} setPosts={setPosts} />
        {posts.length ? (
          <div className={classes.wrapperPostList}>
            <PostsFilter filter={filter} setFilter={setFilter} />
            <h2 className={classes.postListTitle}>Список постов</h2>

            {filteredPosts.length ? (
              <PostList posts={filteredPosts} />
            ) : (
              <h3>Ничего на найдено...</h3>
            )}
          </div>
        ) : (
          <div className={classes.emptyList}>
            <h2>Список дел пуст!</h2>
            <div className={classes.emptyImg}>
              <img
                src={require("../../assets/png/space-cats.png")}
                alt="Cats in space"
              />
            </div>
          </div>
        )}
      </div>
    </ToDoListContext.Provider>
  );
};

export default ToDoList;
