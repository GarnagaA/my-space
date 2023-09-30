import classes from "./index.module.scss";
import Select from "../Select";
import Input from "../Input";
import React from "react";

const PostsFilter = ({ filter, setFilter, ...props }) => {
  return (
    <div className={classes.wrapperSearch} {...props}>
      <div className={classes.wrapperSelect}>
        <Select
          value={filter.selected}
          onChange={(e) => setFilter({ ...filter, selected: e })}
          defaultValue="Сортировка ..."
          options={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" },
          ]}
        />
      </div>
      <div className={classes.wrapperInput}>
        <Input
          value={filter.query}
          onChange={(e) => setFilter({ ...filter, query: e.target.value })}
          placeholder="Поиск ..."
        />
      </div>
    </div>
  );
};

export default PostsFilter;
