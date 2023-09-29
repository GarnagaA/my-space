import React from "react";
import { useState } from "react";

import classes from "./index.module.scss";

import Input from "../../components/Input";
import Button from "../../components/Button";
import PostList from "../../components/PostList";
import ButtonDelete from "../../components/ButtonDelete";
import Select from "../../components/Select";
import ToDoListContext from "./context";

const ToDoList = () => {
  const [posts, setPosts] = useState([]); // хранилище постов
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  const [selectedSort, setSelectedSort] = useState(""); // сортировка через <select>
  const createPost = (e) => {
    e.preventDefault();
    setPosts([...posts, { ...formData, id: Date.now() }]);
    setFormData({ title: "", body: "" });
  };

  const deletePost = (id) => {
    console.log(id);
    setPosts((prev) => [...prev].filter((el) => el.id !== id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    if (posts.length) {
      setPosts((prev) =>
        [...prev].sort((a, b) => a[sort].localeCompare(b[sort])),
      );
    }
  };

  return (
    <ToDoListContext.Provider
      value={{ createPost, deletePost, posts, setPosts }}
    >
      <div className={classes.wrapperToDoList}>
        <form>
          <div className={classes.wrapperInputs}>
            <Input
              value={formData.title}
              style={{ height: "2rem" }}
              type="text"
              placeholder="Название поста"
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            >
              <ButtonDelete
                style={{ width: "5%" }}
                onClick={() => setFormData({ ...formData, title: "" })}
              />
            </Input>
            <div style={{ height: "0.4rem" }}></div>
            <Input
              value={formData.body}
              style={{ height: "2rem" }}
              type="text"
              placeholder="Описание поста"
              onChange={(e) =>
                setFormData({ ...formData, body: e.target.value })
              }
            >
              <ButtonDelete
                style={{ width: "5%" }}
                onClick={() => setFormData({ ...formData, body: "" })}
              />
            </Input>
          </div>

          <div className={classes.wrapperButton}>
            <Button onClick={createPost} children>
              Добавить
            </Button>
          </div>
        </form>
        {posts.length ? (
          <div className={classes.wrapperPostList}>
            <div className={classes.wrapperSelect}>
              <Select
                value={selectedSort}
                onChange={sortPosts}
                defaultValue="Сортировка ..."
                style={{ width: "20%" }}
                options={[
                  { value: "title", name: "По названию" },
                  { value: "body", name: "По описанию" },
                ]}
              />
              <h2>Список постов</h2>
            </div>
            <PostList posts={posts} />
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
