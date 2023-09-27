import React from "react";
import { useState } from "react";

import classes from "./index.module.scss";

import Input from "../../components/Input";
import Button from "../../components/Button";
import PostList from "../../components/PostList";
import ButtonDelete from "../../components/ButtonDelete";
import ToDoListContext from "./context";

const ToDoList = () => {
  const [posts, setPosts] = useState([]); // хранилище постов
  const [formData, setFormData] = useState({
    title: "",
    text: "",
  });

  const createPost = (e) => {
    e.preventDefault();
    setPosts([...posts, { ...formData, id: Date.now() }]);
    setFormData({ title: "", text: "" });
    console.log(posts);
  };

  const deletePost = (id) => {
    console.log(id);
    setPosts((prev) => [...prev].filter((el) => el.id !== id));
    console.log(posts);
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
              value={formData.text}
              style={{ height: "2rem" }}
              type="text"
              placeholder="Описание поста"
              onChange={(e) =>
                setFormData({ ...formData, text: e.target.value })
              }
            >
              <ButtonDelete
                style={{ width: "5%" }}
                onClick={() => setFormData({ ...formData, text: "" })}
              />
            </Input>
          </div>

          <div className={classes.wrapperButton}>
            <Button onClick={createPost} children>
              Добавить
            </Button>
          </div>
        </form>
        {!!posts.length ? (
          <div className={classes.wrapperPostList}>
            <PostList posts={posts} />
          </div>
        ) : (
          <div className={classes.emptyList}>
            <h2>Список дел пуст!</h2>
          </div>
        )}
      </div>
    </ToDoListContext.Provider>
  );
};

export default ToDoList;