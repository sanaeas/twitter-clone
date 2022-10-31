import { Avatar } from "@mui/material";
import React from "react";
import "./Feed.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import UploadIcon from '@mui/icons-material/Upload';

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={ avatar } />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__header--text">
            <h3>
              { displayName }{" "}
              <span className="post__header--special">
                {verified && <VerifiedIcon className="post__badge" />} @{ username }
              </span>
            </h3>
          </div>
          <div className="post__header--description">
            <p>{ text }</p>
          </div>
        </div>
        <img className="post__image" src={ image } />
        <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <UploadIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
