import React, { useState } from 'react';
import '../css/Card.css'

const SocialCard = ({like,view,comment}) => {
  const [likes, setLikes] = useState(like);
  const [views, setViews] = useState(view);
  const [comments, setComments] = useState(comment);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleView = () => {
    setViews(views + 1);
  };

  const handleComment = () => {
    setComments(comments + 1);
  };

  return (
    <div className="Scard">
      <div className="Scard-interactions">
        <button onClick={handleLike}>
          <div role="img" aria-label="Like">👍</div> ({likes})
        </button>
        <button onClick={handleView}>
          <div role="img" aria-label="View">👁️</div> ({views})
        </button>
        <button onClick={handleComment}>
          <div role="img" aria-label="Comment">💬</div> ({comments})
        </button>
      </div>
    </div>
  );
};

export default SocialCard;


