import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import "./Feed.css";
import db from '../firebase';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      displayName: 'John',
      username: 'doe',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://i.pinimg.com/originals/49/3f/a0/493fa0f13970ab3ef29375669f670451.jpg"
    });

    setTweetMessage('');
    setTweetImage('');
  };


  return (
    <div className="tweet-box">
      <form>
        <div className="tweet-box__input">
          <Avatar src="https://as1.ftcdn.net/v2/jpg/01/16/24/44/1000_F_116244459_pywR1e0T3H7FPk3LTMjG6jsL3UchDpht.jpg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            type="text"
            placeholder="What's happening?"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweet-box__input--image"
          type="text"
          placeholder="Optional: Enter image URL"
        />
        <Button onClick={sendTweet} type="submit" className="tweet-box__btn">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
