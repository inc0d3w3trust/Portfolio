import React from 'react';
import Portal from './Portal/Portal';
import Button from './Button';
import { useTranslation } from 'react-i18next';
import './styles/CookieConsent.css';

function CookieConsent({ children, onClose, isOpen }) {
    const {t} = useTranslation();

    if(!isOpen) {
        return null;
    }

    return (
        <Portal>
            <div className='cookie-consent-container'>
                <h3 className='text-center cookie-consent-title'>{ t('cookie_consent_title') }</h3>
                <div className='cookie-consent-grid'>
                    <p>{ t('cookie_consent_text') }</p>
                    <div>
                        <Button buttonStyle='btn--outline' onClick={onClose} >{ t('cookie_consent_button') }</Button>
                    </div>
                </div>
            </div>
        </Portal>        
    )
}

export default CookieConsent;