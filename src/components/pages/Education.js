import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import useOnScreen from '../../hooks/useOnScreen';

function Education() {
    const {t} = useTranslation();
    const pageRef = useRef(null);

    const isOnScreen = useOnScreen(pageRef);
    if(isOnScreen) {
        document.title = t('experience_context_title');
    }

    return (
        <section ref={pageRef} id='edication' className='education--section'>
            <div className='education--container'>
                <div>
                    <h1 className='text-center'>{ t('experience_context_title') }</h1>
                    <p>{ t('experience_context_article_subitem-1') }</p>
                    <p>{ t('experience_context_article_subitem-2') }</p>
                    <p>{ t('experience_context_article_subitem-3') }</p>
                    <p>{ t('experience_context_article_subitem-4') }</p>
                </div>

                <div className='cards-grid'>
                    <div className='card'>
                        <h3 className='text-center card-title'>{ t('education_card_title-1') }</h3>

                        <div className='card-column-center'>
                            <a href='https://git-scm.com/' target={'_blank'} rel='noreferrer'>
                                <img className='card-image' src='/assets/images/icons/GIT-415x175.png' alt='git' />
                            </a>
                            <a href='https://www.atlassian.com/software/jira' target={'_blank'} rel='noreferrer'>
                                <img className='card-image' src='/assets/images/icons/JIRA-229x90.png' alt='jira' />
                            </a>
                            <a href='https://mantisbt.org/' target={'_blank'} rel='noreferrer'>
                                <img className='card-image' src='/assets/images/icons/mantis_logo_262x90.png' alt='mantis' />
                            </a>
                        </div>
                    </div>
                    <div className='card grid-col-span-2'>
                        <h3 className='text-center card-title'>{ t('education_card_title-2') }</h3>

                        <div className='card-icon-grid-3'>
                            <a href='https://www.postgresql.org/' target={'_blank'} rel='noreferrer'>
                                <img className='card-image' src='/assets/images/icons/Postgresql-176x175.png' alt='PostreSQL' />
                            </a>
                            <a href='https://www.microsoft.com/en-us/sql-server/sql-server-2019' target={'_blank'} rel='noreferrer'>
                                <img className='card-image' src='/assets/images/icons/MicrosoftSQL-218x175.png' alt='MicrosoftSQL' />
                            </a>
                            <a href='https://www.mysql.com/' target={'_blank'} rel='noreferrer'>
                                <img className='card-image' src='/assets/images/icons/MySQL-177x175.png' alt='MySQL' />
                            </a>
                            <a href='https://redis.io/' target={'_blank'} rel='noreferrer'>
                                <img className='card-image' src='/assets/images/icons/Redis-282x90.png' alt='Redis' />
                            </a>
                            <a href='https://mariadb.org/' target={'_blank'} rel='noreferrer'>
                                <img className='card-image' src='/assets/images/icons/MariaDB-236x175.png' alt='MariaDB' />
                            </a>
                            <a href='https://www.mongodb.com/' target={'_blank'} rel='noreferrer'>
                                <img className='card-image' src='/assets/images/icons/mongodb-259x175.png' alt='MongoDB' />
                            </a>
                        </div>
                    </div>
                    <div className='card'>
                        <h3 className='text-center card-title'>{ t('education_card_title-3') }</h3>

                        <div className='card-row-center'>
                            <a href='https://tomcat.apache.org/' target={'_blank'} rel='noreferrer'> 
                                <img className='card-image-small' src='/assets/images/icons/Tomcat-155x175.png' alt='Tomcat server' />
                            </a>
                            <a href='https://www.docker.com/' target={'_blank'} rel='noreferrer'>
                                <img className='card-image-small' src='/assets/images/icons/Docker-211x175.png' alt='Docker' />
                            </a>
                            <a href='https://httpd.apache.org/' target={'_blank'} rel='noreferrer'>
                                <img className='card-image-bigger' src='/assets/images/icons/Apache-247x100.png' alt='Apache HTTP server' />
                            </a>
                            <a href='https://nginx.org/' target={'_blank'} rel='noreferrer'>
                                <img className='card-image-small' src='/assets/images/icons/NGINX-233x175.png' alt='NGINX' />
                            </a>
                        </div>
                    </div>
                    <div className='card'>
                        <h3 className='text-center card-title'>{ t('education_card_title-4') }</h3>
                        <div className='card-row-center'>
                            <a href='https://www.java.com' target={'_blank'} rel='noreferrer'>
                                <img className='card-image' src='/assets/images/icons/Java-300x175.png' alt='Java' />
                            </a>
                            <a href='https://www.php.net/' target={'_blank'} rel='noreferrer'>
                                <img className='card-image-small' src='/assets/images/icons/PHP-345x175.png' alt='PHP' />
                            </a>
                            <a href='https://www.w3schools.com/js/default.asp' target={'_blank'} rel='noreferrer'>
                                <img className='card-image-small' src='/assets/images/icons/JS-124x175.png' alt='JavaScript' />
                            </a>
                            <a href='https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics' target={'_blank'} rel='noreferrer'>
                                <img className='card-image-small' src='/assets/images/icons/HTML-124x175.png' alt='HTML' />
                            </a>
                            <a href='https://developer.mozilla.org/en-US/docs/Web/CSS' target={'_blank'} rel='noreferrer'>
                                <img className='card-image-small' src='/assets/images/icons/CSS-124x175.png' alt='CSS' />
                            </a>
                            <a href='https://www.w3schools.com/sql/' target={'_blank'} rel='noreferrer'>
                                <img className='card-image-small' src='/assets/images/icons/SQL-127x175.png' alt='SQL' />
                            </a>
                            <a href='https://linuxconfig.org/bash-scripting-tutorial-for-beginners' target={'_blank'} rel='noreferrer'>
                                <img className='card-image-bigger' src='/assets/images/icons/BashScript-415x175.png' alt='BASH script' />
                            </a>
                        </div>
                    </div>
                    <div className='card grid-col-span-2'>
                        <h3 className='text-center card-title'>{ t('education_card_title-5') }</h3>
                        <div className='card-icon-grid-4'>
                            <div className='grid-col-span-2'>
                                <a href='https://www.apollographql.com/' target={'_blank'} rel='noreferrer'>
                                    <img className='card-image-big' src='/assets/images/icons/Apollo-595x175.png' alt='Apollo' />
                                </a>
                            </div>
                            <div className='grid-col-span-2'>
                                <a href='https://www.apollographql.com/' target={'_blank'} rel='noreferrer'>
                                    <img className='card-image-big' src='/assets/images/icons/GraphQL-618x175.png' alt='GraphQL' />
                                </a>
                            </div>
                            <div className='grid-col-span-4 grid-inner-row'>
                                <a href='https://nodejs.org/' target={'_blank'} rel='noreferrer'>
                                    <img className='card-image' src='/assets/images/icons/NodeJS-286x175.png' alt='NodeJS' />
                                </a>
                                <a href='https://reactjs.org/' target={'_blank'} rel='noreferrer'>
                                    <img className='card-image-small' src='/assets/images/icons/ReactText-143x175.png' alt='React' />
                                </a>
                                <a href='https://redux.js.org/' target={'_blank'} rel='noreferrer'>
                                    <img className='card-image-small' src='/assets/images/icons/Redux-136x175.png' alt='Redux' />
                                </a>
                                <a href='https://jquery.com/' target={'_blank'} rel='noreferrer'>
                                    <img className='card-image-small' src='/assets/images/icons/JQuery-165x175.png' alt='JQuery' />
                                </a>
                                <a href='https://www.selenium.dev/' target={'_blank'} rel='noreferrer'>
                                    <img className='card-image-small' src='/assets/images/icons/Selenium-171x175.png' alt='Selenium' />
                                </a>
                            </div>
                            <div className='grid-col-span-2'>
                                <a href='http://expressjs.com/' target={'_blank'} rel='noreferrer'>
                                    <img className='card-image-big' src='/assets/images/icons/ExpressJS-779x175.png' alt='ExpressJS' />
                                </a>
                            </div>
                            <div className='grid-col-span-2'>
                                <a href='https://webpack.js.org/' target={'_blank'} rel='noreferrer'>
                                    <img className='card-image-big' src='/assets/images/icons/webpack-604x175.png' alt='Webpack' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <h3 className='text-center card-title'>{ t('education_card_title-6') }</h3>
                        <div className='card-row-center'>
                            <a href='https://www.debian.org/' target={'_blank'} rel='noreferrer'>
                                <img className='card-image' src='/assets/images/icons/Debian-354x175.png' alt='Debian' />
                            </a>
                            <a href='https://www.kali.org/' target={'_blank'} rel='noreferrer'>
                                <img className='card-image-bigger' src='/assets/images/icons/Kali-216x175.png' alt='Kali Linux' />
                            </a>
                            <a href='https://eclipseide.org/' target={'_blank'} rel='noreferrer'>
                                <img className='card-image-bigger' src='/assets/images/icons/eclipse-738x175.png' alt='Eclipse ISE' />
                            </a>
                            <a href='https://code.visualstudio.com/' target={'_blank'} rel='noreferrer'>
                                <img className='card-image-bigger' src='/assets/images/icons/VSCode-370x175.png' alt='VSCode' />
                            </a>
                            <a href='https://www.gimp.org/' target={'_blank'} rel='noreferrer'>
                                <img className='card-image-small' src='/assets/images/icons/GIMP-175x175.png' alt='GIMP' />
                            </a>
                            <a href='https://www.figma.com/' target={'_blank'} rel='noreferrer'>
                                <img className='card-image-small' src='/assets/images/icons/Figma-175x175.png' alt='Figma' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;