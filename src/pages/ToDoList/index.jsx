import React from "react";
import { useState, useMemo } from "react";

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

  const [selectedSort, setSelectedSort] = useState(""); // сортировка через <Select/>
  const [searchQuery, setSearchQuery] = useState(""); // сортировка через <Input/>

  const createPost = (e) => {
    e.preventDefault();
    setPosts([
      ...posts,
      {
        ...formData,
        id: Date.now(),
      },
    ]);
    setFormData({ title: "", body: "" });
  };
  const deletePost = (id) => {
    console.log(id);
    setPosts([...posts].filter((el) => el.id !== id));
  };

  const sortedPosts = useMemo(() => {
    console.log("отработало useMemo");
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort]),
      );
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase().trim()),
    );
  }, [searchQuery, sortedPosts]);

  // const sortPosts = (sort) => {
  // setSelectedSort(sort)
  // };

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
        {posts.length ? ( // !!!!!!!!!!!!!!
          <div className={classes.wrapperPostList}>
            <div className={classes.wrapperSearch}>
              <div className={classes.wrapperSelect}>
                <Select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e)}
                  defaultValue="Сортировка ..."
                  options={[
                    { value: "title", name: "По названию" },
                    { value: "body", name: "По описанию" },
                  ]}
                />
              </div>
              <div className={classes.wrapperInput}>
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Поиск ..."
                />
              </div>
            </div>
            <h2 className={classes.postListTitle}>Список постов</h2>

            {sortedAndSearchedPosts.length ? (
              <PostList posts={sortedAndSearchedPosts} />
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
