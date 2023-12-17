import React from 'react';

function Mainform(props) {
  return (
    <div>
      <h1 className="text-4xl font-semibold">{props.activeTab.tabName}</h1>
      <p className="font-light">{props.activeTab.tabDescription}</p>
    </div>
  );
}

export default Mainform;
