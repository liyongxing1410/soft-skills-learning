import React from "react";
import classes from "./AddContent.module.css";

export const AddContent = (props) => {
  return (
    <div>
      <div className={classes["add-pic"]} onClick={props.onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Thêm nội dung</span>
      </div>
    </div>
  );
};
