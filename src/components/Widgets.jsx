import React from 'react';
import './Widgets.css';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
import SearchIcon from '@mui/icons-material/Search';
function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__search-icon" />
        <input type="text" placeholder='Search Twitter' />
      </div>
      <div className="widgets__container">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={'1587076687824420864'} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="ossia"
          options={{ height: 700}}
        />
        <TwitterShareButton
          options={{text: "reactJS is awesome", via: "Sanae"}}
        />
      </div>
    </div>
  );
}

export default Widgets;