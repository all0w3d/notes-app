import React from "react";
import post from "../../icon/post.png";

const Header = (props) => {
  return (
    <header>
      <div onClick={() => {window.location.reload()}}>
        <img alt="logo" src={post}></img> <span>Notes Application</span>
      </div>
      <div>
        <span>{props.notesQ}</span> {props.notesQ === 1 ? 'note' : 'notes'} 
      </div>
    </header>
  );
};

export default Header;
