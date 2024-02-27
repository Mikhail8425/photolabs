import React, { useCallback, useState } from 'react';

function LightSwitchButton(props) {
  const { light, switchLight } = props;

  const handleClick = () => {
    switchLight();
  };

  return (
    <button onClick={handleClick} className="LightSwitchButton">
      {light === 'on' && <span><i>💡</i> I am on!</span>}
      {light === 'off' && <span className="off"><i>💡</i> I am off!</span>}
    </button>
  );
}

export default LightSwitchButton;