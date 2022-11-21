import React, { useEffect, useState } from 'react';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import jsCookie from 'js-cookie';
import CookieConsent from './CookieConsent';
import Navbar from './Navbar';
import Home from './pages/Home';
import Education from './pages/Education';
import './styles/RootComponent.css';
import './styles/Pages.css';
import Projects from './pages/Projects';
import About from './pages/About';
import LoadingSpinner from './pages/LoadingSpinner';
import ScrollToTop from './ScrollToTop';
import Footer from './pages/Footer';

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        supportedLngs: ['en', 'ru'],
        fallbackLng: 'en',
        detection: {
            // order and from where user language should be detected
            order: ['cookie', 'htmlTag', 'localStorage', 'sessionStorage', 'navigator', 'path', 'subdomain'],

            // cache user language on
            caches: ['cookie'],
        },
        backend: {
            loadPath: '/assets/localization/{{lng}}/translation.json',
        },
        react: { useSuspense: false }
    });


function RootComponent() {
    const jsCookieConsent = jsCookie.get('cookieConsent') || false;
    const [cookieConsent, setCookieConsent] = useState(jsCookieConsent);
    const [isLoading, setIsLoading] = useState(false);

    const handleCookieConsentAccept = () => {
        console.log('handleCookieConsentAccept');

        jsCookie.set('cookieConsent', true, {
            path: '/',
            sameSite: 'Strict'
        });
        setCookieConsent(true);
    }

    useEffect(() => {
      setIsLoading(true);
    
      const timer = setTimeout(() => {
          setIsLoading(false);
      }, 2500);

      return () => {
        clearTimeout(timer);
      }
    }, [])

    if(isLoading) {
        return (
            <LoadingSpinner />
        );
    }

    return (
        <>
            <Navbar />
            <Home />
            {/* <div style={{background: '#003366', width:'100%', height: '5px'}}></div> */}
            <Education />
            {/* <div style={{background: '#003366', width:'100%', height: '5px'}}></div> */}
            <Projects />
            {/* <div style={{background: '#003366', width:'100%', height: '5px'}}></div> */}
            <About />
            <div style={{background: '#003366', width:'100%', height: '5px'}}></div>
            <Footer />
            <ScrollToTop />
            <CookieConsent isOpen={!cookieConsent} onClose={handleCookieConsentAccept} />
        </>
    );
}

export default RootComponent;