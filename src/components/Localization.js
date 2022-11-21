import React, { useState } from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import jsCookie from 'js-cookie';
import { ArrowBackOutline, LanguageOutline } from 'react-ionicons';
import './styles/Localization.css';
import 'flag-icon-css/css/flag-icons.min.css';

const languagesList = [
  {
      code: 'en',
      name: 'English',
      countryCode: 'us'
  },
  {
      code: 'ru',
      name: 'Русский',
      countryCode: 'ru'
  }
];

function Localization({mobileMode}) {
  const {t} = useTranslation();
  const currentLangCode = jsCookie.get('i18next') || 'en';
  const [toggleList, setToggleList] = useState(false);

  const handleToggleList = () => {
    setToggleList((prevState) => !prevState);
  }

  const handleChangeLanguage = (code) => {
    i18next.changeLanguage(code); 
    handleToggleList();
  }

  if(mobileMode) {
    return(
      <div className='localize-container'>
        <button className='localize-btn btn--outline' onClick={handleToggleList} >
          <LanguageOutline
            color={'#fff'} 
            height="35px"
            width="35px"
          />          
        </button>
        <ul className={toggleList ? 'localize-list-mobile active' : 'localize-list-mobile'}>
            <li className='localize-title-item'>
              <button className='localize-btn btn--outline' onClick={handleToggleList}>
                <ArrowBackOutline
                  color={'#fff'} 
                  height="35px"
                  width="35px"
                />
              </button>
              <span>{ t('portal_back') }</span>              
            </li>
        { languagesList.map(({code, name, countryCode}) => (
            <li key={countryCode} className={(code === currentLangCode) ? 'localize-item-mobile-disabled' : 'localize-item-mobile' }>
                <div className='localize-link-mobile'>
                  <button className={(code === currentLangCode) ? 'localize-btn-disabled' : 'localize-btn' }
                    onClick={ (code === currentLangCode) ? null : () => { handleChangeLanguage(code) } }
                    disabled={(code === currentLangCode)} 
                  >
                    <span className={`flag-icon flag-icon-${countryCode}`} style={{marginRight: '15px', opacity: (code === currentLangCode) ? 0.5 : 1 }} ></span>
                    <span>{name}</span>
                  </button>
                </div>
            </li>
        )) }
        </ul>
      </div>
    );
  }
  return (
    <>
      <div className='localize-container'>
        <button className='localize-btn btn--outline' onClick={handleToggleList} >
          <LanguageOutline
            color={'#fff'} 
            height="35px"
            width="35px"
          />          
        </button>
        
        <ul className={toggleList ? 'localize-list-active' : 'localize-list'}>
        { languagesList.map(({code, name, countryCode}) => (
            <li key={countryCode} className={(code === currentLangCode) ? 'localize-item-disabled' : 'localize-item' }>
                <button className={(code === currentLangCode) ? 'localize-btn-disabled' : 'localize-btn' }
                  onClick={ (code === currentLangCode) ? null : () => { handleChangeLanguage(code) } }
                  disabled={(code === currentLangCode)} 
                >
                  <span className={`flag-icon flag-icon-${countryCode}`} style={{marginRight: '15px', opacity: (code === currentLangCode) ? 0.5 : 1 }} ></span>
                  <span>{name}</span>
                </button>
            </li>
        )) }
        </ul>
      </div>
    </>
  );
}

export default Localization;