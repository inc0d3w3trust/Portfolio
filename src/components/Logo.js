import React, { useEffect } from 'react';
import './styles/Logo.css';

function Logo() {
    const typingTextEffect = (strContext, id, colors) => {
        if(colors === undefined) {
            colors = ['#fff'];
        }

        let visible = true;
        const consoleElem = document.getElementById('console');
        let letterCount = 1;
        let x = 1;
        let waiting = false;

        const targetElem = document.getElementById(id);
        targetElem.setAttribute('style', 'color:' + colors[0]);

        setInterval(function() {
          if( letterCount === 0 && waiting === false ) {
            waiting = true;
            targetElem.innerHTML = strContext[0].substring(0, letterCount);
            setTimeout(() => {
              const usedColor = colors.shift();
              colors.push(usedColor);
              const usedWords = strContext.shift();
              strContext.push(usedWords);
              x = 1;
              targetElem.setAttribute('style', 'color:' + colors[0]);
              letterCount += x;
              waiting = false;
            }, 1000);
          }
          else if(letterCount === strContext[0].length + 1 && waiting === false) {
            waiting = false;
            setTimeout(() => {
              x = -1;
              letterCount += x;
              waiting = false;
            }, 3000);
          }
          if(waiting === false) {
            targetElem.innerHTML = strContext[0].substring(0, letterCount);
            letterCount += x
          }
        }, 120);

        setInterval(function() {
          if(visible === true) {
            consoleElem.className = 'console-underscore hidden';
            visible = false;
          }
          else {
            consoleElem.className = 'console-underscore';
            visible = true;
          }
        }, 400);
    }

    useEffect(() => {
      typingTextEffect(['DEV-PORTFOLIO'], 'text');
    }, []);

    return (
        <div className='console-container'>
            <span id='text'></span>
            <div className='console-underscore' id='console'>
                &#95;
            </div>
        </div>
    );
}

export default Logo;