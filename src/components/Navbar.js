import React, { useRef, useState, useEffect } from 'react';
import { Link as LinkAnchor } from 'react-scroll/modules';
import { useTranslation } from 'react-i18next';
import { MenuOutline, CloseOutline } from 'react-ionicons';
import { useWidth } from '../hooks/useWidth';
import Logo from './Logo';
import Localization from './Localization';
import './styles/Navbar.css';

function DesktopMenu() {
    const {t} = useTranslation();
    const [navbarStyle, setNavbarStyle] = useState('navbar-container top navbar--active');
    const showNavbarRef = useRef(true);

    const scrollPositionRef = useRef(0);

    const handleScroll = () => {
        const scrollTop = document.body.getBoundingClientRect().top;
        let navbarStyleContainer = 'navbar-container';

        let setNavbarBackground = false;
        if(scrollTop !== 0 && scrollTop < -70) {
            setNavbarBackground = true;
        }

        if(setNavbarBackground) {
            navbarStyleContainer = navbarStyleContainer.concat(' scroll');
        }
        else {
            navbarStyleContainer = navbarStyleContainer.concat(' top');
        }

        if(scrollTop !== 0 && scrollTop < -150) {
            const showNavBarOnScroll = scrollTop > scrollPositionRef.current;
            showNavbarRef.current = showNavBarOnScroll;
            scrollPositionRef.current = scrollTop;
            
            if(showNavBarOnScroll) {
                navbarStyleContainer = navbarStyleContainer.concat(' navbar--active');
            }
            else if(!showNavBarOnScroll) {
                navbarStyleContainer = navbarStyleContainer.concat(' navbar--hidden');
            }
        }
        else {
            navbarStyleContainer = navbarStyleContainer.concat(' navbar--active');
        }

        setNavbarStyle(navbarStyleContainer);
    }

    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <nav className={navbarStyle}>
            <div className='navbar-logo'>
                <Logo />       
            </div>
            <ul className='navbar-list'> 
                <li>
                    <LinkAnchor className='navbar-item' activeClass='navbar-item-active' to="home" spy={true} smooth={true} offset={20} duration={500}>
                        { t('navbar_home') }
                    </LinkAnchor>
                </li>
                <li>
                    <LinkAnchor className='navbar-item' activeClass='navbar-item-active' to="edication" spy={true} smooth={true} offset={20} duration={500}>
                        { t('navbar_experience') }
                    </LinkAnchor>
                </li>
                <li>
                    <LinkAnchor className='navbar-item' activeClass='navbar-item-active' to="projects" spy={true} smooth={true} offset={20} duration={500}>
                        { t('navbar_projects') }
                    </LinkAnchor>
                </li>
                <li>
                    <LinkAnchor className='navbar-item' activeClass='navbar-item-active' to="aboutme" spy={true} smooth={true} offset={20} duration={500}>
                        { t('navbar_about') }
                    </LinkAnchor>
                </li>
            </ul>
            <div className='navbar-localization'>
                <Localization />
            </div>
        </nav>
    );
}

const MenuOutlineOverwrite = () => {
    const [onMouseEnter, setMouseEnter] = useState(false);

    useEffect(() => {
        setMouseEnter(false);
    }, []);

    return (
        <div
            onMouseEnter={() => setMouseEnter(true)}
            onMouseLeave={() => setMouseEnter(false)}
        >
            { !onMouseEnter ? <MenuOutline color={'#ffffff'} height='35px' width='35px'/> : <MenuOutline beat color={'#ffffff'} height='35px' width='35px'/>  }
        </div>
    );    
}

const CloseOutlineOverwrite = () => {
    const [onMouseEnter, setMouseEnter] = useState(false);

    useEffect(() => {
        setMouseEnter(false);
    }, []);

    return (
        <div
            onMouseEnter={() => setMouseEnter(true)}
            onMouseLeave={() => setMouseEnter(false)}
        >
            { !onMouseEnter ? <CloseOutline color={'#ffffff'} height='35px' width='35px' /> : <CloseOutline rotate color={'#ffffff'} height='35px' width='35px' /> }
        </div>
    );
}

function MobileMenu() {
    const {t} = useTranslation();
    const [click, setClick] = useState(false);
    const [navbarStyle, setNavbarStyle] = useState('navbar-container-mobile top navbar--active');

    const showNavbarRef = useRef(true);
    const scrollPositionRef = useRef(0);

    const handleScroll = () => {
        const scrollTop = document.body.getBoundingClientRect().top;
        let navbarStyleContainer = 'navbar-container-mobile';

        let setNavbarBackground = false;
        if(scrollTop !== 0 && scrollTop < -52) {
            setNavbarBackground = true;
        }

        if(setNavbarBackground) {
            navbarStyleContainer = navbarStyleContainer.concat(' scroll');
        }
        else {
            navbarStyleContainer = navbarStyleContainer.concat(' top');
        }

        if(scrollTop !== 0 && scrollTop < -150) {
            const showNavBarOnScroll = scrollTop > scrollPositionRef.current;
            showNavbarRef.current = showNavBarOnScroll;
            scrollPositionRef.current = scrollTop;
            
            if(showNavBarOnScroll) {
                navbarStyleContainer = navbarStyleContainer.concat(' navbar--active');
            }
            else if(!showNavBarOnScroll) {
                navbarStyleContainer = navbarStyleContainer.concat(' navbar--hidden');
                closeMobileMenu();
            }
        }
        else {
            navbarStyleContainer = navbarStyleContainer.concat(' navbar--active');
        }

        setNavbarStyle(navbarStyleContainer);

    }

    const closeMobileMenu = () => {
        setClick(false);
    }

    const handleClick = () => {
        setClick(!click);
    }

    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <nav className={navbarStyle}>
                <div className='navbar-logo'>
                    <Logo />       
                </div>
                <div className='menu-icon' onClick={handleClick} >
                    { click ? <CloseOutlineOverwrite /> : <MenuOutlineOverwrite /> }
                </div>


                <ul className={ click ? 'nav-menu-mobile active' : 'nav-menu-mobile' }  > 
                    <li className='nav-item-mobile'>
                        <LinkAnchor className='nav-links-mobile' onClick={closeMobileMenu} activeClass='nav-links-mobile-active' to="home" spy={true} smooth={true} offset={20} duration={500}>
                            { t('navbar_home') }
                        </LinkAnchor>
                    </li>
                    <li className='nav-item-mobile'>
                        <LinkAnchor className='nav-links-mobile' onClick={closeMobileMenu} activeClass='nav-links-mobile-active' to="edication" spy={true} smooth={true} offset={20} duration={500}>
                            { t('navbar_experience') }
                        </LinkAnchor>
                    </li>
                    <li className='nav-item-mobile'>
                        <LinkAnchor className='nav-links-mobile' onClick={closeMobileMenu} activeClass='nav-links-mobile-active' to="projects" spy={true} smooth={true} offset={20} duration={500}>
                            { t('navbar_projects') }                        
                        </LinkAnchor>
                    </li>
                    <li className='nav-item-mobile'>
                        <LinkAnchor className='nav-links-mobile' onClick={closeMobileMenu} activeClass='nav-links-mobile-active' to="aboutme" spy={true} smooth={true} offset={20} duration={500}>
                            { t('navbar_about') }
                        </LinkAnchor>
                    </li>
                    <li className='nav-item-mobile'>
                        <div className='nav-button-mobile'>
                            <Localization mobileMode={true} />
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    );
}

function Navbar() {
    const [navbarDesktop, setNavbarDesktop] = useState(true);
    const headerRefElem = useRef(null);
    const [navbarWidth] = useWidth(headerRefElem);

    const handleNavbarWidth = () => {
        if(navbarWidth < 870) {
            setNavbarDesktop(false);
        }
        else {
            setNavbarDesktop(true);
        }
    }

    useEffect(() => {
        handleNavbarWidth();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navbarWidth]);

    return (
        <>
            <header ref={headerRefElem}></header>
            { navbarDesktop ? <DesktopMenu /> :  <MobileMenu /> }
        </>
    );
}

export default Navbar;