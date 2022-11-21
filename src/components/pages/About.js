import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import useOnScreen from '../../hooks/useOnScreen';

function About() {
  const {t} = useTranslation();
  const pageRef = useRef(null);
  
  const isOnScreen = useOnScreen(pageRef);

  if(isOnScreen) {
    document.title = t('navbar_about');
  }

  return (
    <section ref={pageRef} id='aboutme' className='about--section'>
        <div className='about--container'>
          <h2 className='text-center'>{ t('about_content_title') }</h2>
          <section className='about-context-grid'>
            <div className='about-context'>
              <p>{ t('about_content_text1') }</p>
            </div>
            <div className='about-context'>
              <p>{ t('about_content_text3') }</p>
            </div>
            <div className='about-context'>
              <p>{ t('about_content_text2') }</p>
            </div>
            <div className='about-context'>
              <ul>
                <li>{ t('about_content_text4-sublist-1') }</li>  
                <li>{ t('about_content_text4-sublist-2') }</li>  
                <li>{ t('about_content_text4-sublist-3') }</li>  
                <li>{ t('about_content_text4-sublist-4') }</li>  
              </ul>
            </div>

          </section>
        </div>
    </section>
  );
}

export default About;