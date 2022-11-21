import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import useOnScreen from '../../hooks/useOnScreen';

function Home() {
    const {t} = useTranslation();
    const pageRef = useRef(null);

    const isOnScreen = useOnScreen(pageRef);
    if(isOnScreen) {
        document.title = t('navbar_home');
    }

    return (
        <section ref={pageRef} id='home' className='home--section'>
            <div className='home-container'>
                <div className='flex-container'>
                    <div className='flex-item--title'>
                        <h1>{ t('homepage_context_title') }</h1>
                    </div>
                    <div className='flex-item--text'>
                        <p>{ t('homepage_context_line1') }</p>
                        <p>{ t('homepage_context_line2') }</p>
                        <p>{ t('homepage_context_line3') }</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;