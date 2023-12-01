import React, { useEffect } from "react";
import { Tweet } from 'react-tweet'


// const tweetWidget = (tid) => {
//   return <Tweet id={tid} />
// }

const tweetWidget = () => {
  return (
    <div id="tweetMain">
      <Tweet id="1730173217892073490" />
    </div>
  )
};


export default tweetWidget;