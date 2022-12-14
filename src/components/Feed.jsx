import React, { useEffect, useState } from 'react';
import './Feed.css';
import Post from './Post';
import TweetBox from './TweetBox';
import db from '../firebase';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => (
        setPosts(snapshot.docs.map(doc => doc.data()))
    ))
  }, []);

  console.log(posts);
  return (
    <div className='feed'>
        <div className="feed__header">
            <h2>Home</h2>
        </div>
        
        <TweetBox />

        {posts.map((post, index) => 
            <Post
                key={index}
                avatar={post.avatar}
                displayName={post.displayName}
                username={post.username}
                verified={post.verified}
                text={post.text}
                image={post.image}
            />
        )}
    </div>
  );
}

export default Feed;