import React, { useState, useEffect } from 'react';
import ReactDOM  from 'react-dom';
import { CSSTransition } from 'react-transition-group'; 

import './SideDrawer.css';

const SideDrawer = props => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    if (props.show) {
      const content = (
        <CSSTransition in={props.show} 
          timeout={200} 
          classNames='slide-in-left' 
          mountOnEnter 
          unmountOnExit
        > 
          <aside className='side-drawer' onClick={props.onClick}>{props.children}</aside>
        </CSSTransition>
      );
      setContent(content);
    } else {
      setContent(null);
    }
  }, [props.show]);

  return (
    ReactDOM.createPortal(content, document.getElementById('drawer-hook'))
  );
};

export default SideDrawer;