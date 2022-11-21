import React from 'react';

function LinkText(props) {
  return (
    <a href={props.to || '#'} className={props.className || ''} target='_blank' title={props.title || ''} rel='noreferrer'>
        {props.children}
    </a>
  )
}

export default LinkText;