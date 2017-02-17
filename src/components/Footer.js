import React from 'react';

function Footer(props) {
    
  return (
    <div className="App-footer">
            <h2>Footer {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default Footer;