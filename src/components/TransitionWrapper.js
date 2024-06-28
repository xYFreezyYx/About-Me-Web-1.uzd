import React from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import './TransitionWrapper.css';

const TransitionWrapper = ({ children }) => {
  const location = useLocation();

  return (
    <SwitchTransition>
      <CSSTransition
        key={location.pathname}
        classNames="slide"
        timeout={600}
      >
        {children}
      </CSSTransition>
    </SwitchTransition>
  );
};

export default TransitionWrapper;
