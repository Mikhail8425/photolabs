import React from "react";
import TopicListItem from './TopicListItem'

import "../styles/TopicList.scss";

const TopicList = function(props) {
  const topics = props.topics && props.topics.map((topic) => <TopicListItem key={topic.id} topic={topic} fetchPhotosByTopic={props.fetchPhotosByTopic}/>)

  return (
    <div className="top-nav-bar__topic-list">
      {topics}
    </div>
  );
};

export default TopicList;