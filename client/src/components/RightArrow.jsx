import React from 'react';

let RightArrow = function(props) {
  let clickHandler = function() {
    props.arrowClickHandler(false);
  };
  return (
    <div onClick={clickHandler} id='rightArrow'>
      <svg viewBox='-42 -31 110 110' preserveAspectRatio="xMidYMid meet"><g>	<path d="M3.9,0c0.3,0.3,0.5,0.4,0.7,0.7c7.1,7.1,14.1,14.1,21.2,21.1c0.6,0.6,0.7,1,0,1.7c-6.1,6.1-12.2,12.2-18.3,18.3
		c-1,1-2,2-3,3c-0.5,0.5-0.8,0.5-1.3,0c-0.8-0.9-1.7-1.7-2.6-2.6c-0.9-0.9-0.9-0.9,0-1.8c2.7-2.7,5.3-5.3,8-8c3-3,5.9-5.9,8.9-8.9
		c0.6-0.6,0.7-1,0-1.7C11.9,16.2,6.3,10.6,0.7,5c-1-1-1-1,0-1.9c0.8-0.8,1.7-1.7,2.5-2.5C3.4,0.3,3.7,0.2,3.9,0z"/></g></svg>
    </div>
  );
};
export default RightArrow;