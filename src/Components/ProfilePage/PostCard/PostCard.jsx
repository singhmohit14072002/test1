import React from 'react';
import "./PostCard.css";

function PostCard() {
  return (
    <div>
    <div className="PostCardForm">
    <span className="formHeading">Add More Content</span>
      <form>
        <input type="text" placeholder="Add"/>
        <input type="text" placeholder="How was your experience!" />
        <input type="date" />
        <button type="submit"> Add </button>
      </form>
      </div>
    </div>
  )
}

export default PostCard;
