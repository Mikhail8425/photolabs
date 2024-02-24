import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  return (
    <div className="topic-list__item">
      <span onClick={() =>props.fetchPhotosByTopic(props.topic.id)} className="topic-list__item">{props.topic.title}</span>
    </div>
  );
};

export default TopicListItem;