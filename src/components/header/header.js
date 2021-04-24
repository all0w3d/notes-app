import React from "react";
import post from "../../icon/post.png";

const Header = (props) => {
  return (
    <header>
      <div>
        <img alt="logo" src={post}></img> <span>Notes Application</span>
      </div>
      <div>
        <span>{props.notesQ}</span> notes
      </div>
    </header>
  );
};

export default Header;
