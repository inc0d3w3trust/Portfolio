import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { CopyOutline } from 'react-ionicons';
import accessEnv from '../../hooks/accessEnv';
import '../styles/Footer.css';

function Footer() {

    const {t} = useTranslation();

    const phoneStr = t('footer_prefix_tel').concat(' ' + accessEnv('REACT_APP_FOOTER_CONTENT_PHONE', '112'));
    const emailStr = t('footer_prefix_email').concat(' ' + accessEnv('REACT_APP_FOOTER_CONTENT_EMAIL', 'mail@mail.com'));

    const generateImageText = (imageElemId, text, width, height) => {
        const canvasElement = document.createElement('canvas');
        
        canvasElement.width = width;
        canvasElement.height = height;
        const canvas = canvasElement.getContext('2d');
        canvas.font = "1.3125rem 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif";
        canvas.textAlign = 'center';
        canvas.textBaseline = 'middle';
        canvas.fillStyle = '#fff';
        canvas.fillText(text, Math.ceil(canvasElement.width / 2), Math.ceil(canvasElement.height / 2));

        const imagePhone = document.getElementById(imageElemId);
        imagePhone.src = canvas.canvas.toDataURL();
    }

    const copyToClipboard = async (text, tooltipId = null) => {
        try {
            // navigator clipboard api needs a secure context (https)
            if(navigator.clipboard && window.isSecureContext) {
                console.log('navigator.clipboard Rejected');
                navigator.clipboard.writeText(text)
                .then(() => {
                    /* Resolved */
                    if(tooltipId) {
                        const tooltipElem = document.getElementById(tooltipId);
                        const defaultClass = tooltipElem.getAttribute('class');
                        const activeClass = defaultClass.concat(' active')
                        tooltipElem.setAttribute('class', activeClass);

                        setTimeout(() => {
                            tooltipElem.setAttribute('class', defaultClass);
                        }, 1500);
                    }
                },
                () => {
                    /* Rejected */
                });
            }
            else {
                // text area approach
                let textAreaElem = document.createElement('textarea');
                textAreaElem.value = text;
                textAreaElem.style.position = 'fixed';
                textAreaElem.style.left = '-999999px';
                textAreaElem.style.top = '-999999px';
                document.body.appendChild(textAreaElem);
                textAreaElem.focus();
                textAreaElem.select();

                return new Promise((resolve, reject) => {
                    // here the magic happen
                    document.execCommand('copy') ? resolve() : reject();
                    if(tooltipId) {
                         const tooltipElem = document.getElementById(tooltipId);
                         const defaultClass = tooltipElem.getAttribute('class');
                         const activeClass = defaultClass.concat(' active')
                         tooltipElem.setAttribute('class', activeClass);

                         setTimeout(() => {
                             tooltipElem.setAttribute('class', defaultClass);
                         }, 1500);
                     }
                     textAreaElem.remove();
                });
            }

        }
        catch(err) {
            console.log('Failed to copy:', err);

        }
    }

    useEffect(() => {
        generateImageText('imagePhone', phoneStr, 200, 30);
        generateImageText('imageEmail', emailStr, 320, 30);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='footer--section'>
            <div className='footer--container'>
                <div className='footer--container-flex'>
                    <div className='footer--centent-center'>
                        <div>
                            <span className='footer--link-btn' onClick={() => copyToClipboard(accessEnv('REACT_APP_FOOTER_CONTENT_PHONE', '112'), 'rightTooltip')}>
                                <span id="rightTooltip" className='footer-data-tooltip' data-tooltip={ t('footer_clipboard_saved') }>
                                {/* data-tooltip-location="right" */}
                                    <img id='imagePhone' src='' alt='Phone number' />
                                </span>
                                <CopyOutline
                                    cssClasses={'footer--copy-icon'}
                                    color={'#fff'}
                                    title={t('footer_clipboard_copy')}
                                    height="20px"
                                    width="20px"
                                />
                            </span>
                        </div>
                    </div>
                    <div className='footer--centent-center'>
                        <a href='https://github.com/inc0d3w3trust/' className='footer__list-icon' target={'_blank'} rel='noreferrer'>
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                        </a>
                    </div>
                    <div className='footer--centent-center'>
                        <span className='footer--link-btn' onClick={() => copyToClipboard(accessEnv('REACT_APP_FOOTER_CONTENT_EMAIL', 'mail@mail.com'), 'leftTooltip')}>
                            <span id="leftTooltip" className='footer-data-tooltip' data-tooltip={ t('footer_clipboard_saved') }>
                            {/* data-tooltip-location="left" */}
                                <img id='imageEmail' src='' alt='Email'/>
                            </span>
                            <CopyOutline
                                    cssClasses={'footer--copy-icon'}
                                    color={'#fff'}
                                    title={t('footer_clipboard_copy')}
                                    height="20px"
                                    width="20px"
                                />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;