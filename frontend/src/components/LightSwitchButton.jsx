import React, { useCallback, useState } from 'react';

function LightSwitchButton(props) {
  // console.log('LightSwitchButton props', props);
  const { light, switchLight } = props;

  const handleClick = () => {
    console.log('props.light', props.light)
    switchLight();
  };

  return (
    <button onClick={handleClick} className="LightSwitchButton">
      {light === 'on' && <span><i>💡</i> Lights on!</span>}
      {light === 'off' && <span className="off"><i>💡</i> Lights off!</span>}
    </button>
  );
}

export default LightSwitchButton;