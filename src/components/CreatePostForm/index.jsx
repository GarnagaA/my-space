import React, { useState } from "react";
import classes from "./index.module.scss";

import Input from "../Input";
import Button from "../Button";
import ButtonClean from "../ButtonClean";

const CreatePostForm = ({ posts, setPosts, ...props }) => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  const createPost = (e) => {
    e.preventDefault();
    if (!!formData.title.trim() && !!formData.body.trim()) {
      setPosts([
        ...posts,
        {
          ...formData,
          id: Date.now(),
        },
      ]);
      setFormData({ title: "", body: "" });
    }

    // const checkValueInputs = () => {
    //   if (!formData.title.trim() && !formData.body.trim()) {
    //     return false;
    //   }
    // };
  };
  return (
    <form {...props}>
      <div className={classes.wrapperInputs}>
        <Input
          value={formData.title}
          style={{ height: "2rem" }}
          type="text"
          placeholder="Название поста"
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        >
          <ButtonClean
            style={{ position: "absolute", right: 5 }}
            onClick={() => setFormData({ ...formData, title: "" })}
          />
        </Input>
        <div style={{ height: "0.4rem" }}></div>
        <Input
          value={formData.body}
          style={{ height: "2rem" }}
          type="text"
          placeholder="Описание поста"
          onChange={(e) => setFormData({ ...formData, body: e.target.value })}
        >
          <ButtonClean
            style={{ position: "absolute", right: 5 }}
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
  );
};

export default CreatePostForm;
