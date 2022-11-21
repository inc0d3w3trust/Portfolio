import React, { useRef } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import useOnScreen from '../../hooks/useOnScreen';
import LinkText from '../LinkText';
import '../styles/Projects.scss';

function Projects() {
  const {t} = useTranslation();
  const pageRef = useRef(null);
  
  const isOnScreen = useOnScreen(pageRef);

  if(isOnScreen) {
    document.title = t('navbar_projects');
  }
  
  const aoilink = 'http://www.vitechnology.com/products/automated-optical-inspection/';
  const laserlink = 'https://osai-as.com/en/neomark-easy';
  
  return (
    <section ref={pageRef} id='projects' className='projects--section'>
        <div className='projects-container'>
          <div>
            <h2 className='text-center'>{ t('projects_title') }</h2>
          </div>
          <div>
            <div className="postcard dark blue">
              <span className="postcard__img_link">
                <img className="postcard__img" src="/assets/images/icons/backup-restore.png" alt="Backup & Restore" />
              </span>
              <div className="postcard__text">
                <h1 className="postcard__title blue">{ t('projects_card-1-title') }</h1>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  <p>
                    <Trans i18nKey={'projects_card-1-context-1'} components={{ link1: <LinkText className='postcard__contextlink' to={aoilink} /> }} />
                  </p>
                  <p>{ t('projects_card-1-context-2') }</p>
                  <ul className='context-list'>
                    <li>{ t('projects_card-1-context-2-sublist-1') }</li>
                    <li>{ t('projects_card-1-context-2-sublist-2') }</li>
                    <li>{ t('projects_card-1-context-2-sublist-3') }</li>
                    <li>{ t('projects_card-1-context-2-sublist-4') }</li>
                    <li>{ t('projects_card-1-context-2-sublist-5') }</li>
                  </ul>
                  <p>{ t('projects_card-1-context-3') }</p>
                </div>
                <ul className="postcard__tagbox">
                  <li className="tag__icon"><img src='https://img.shields.io/badge/java-1.7%20%2B-blue' alt='Java v1.8+' /> </li>
                  <li className="tag__icon">
                    <a href='https://github.com/inc0d3w3trust/FilesBackupTool' target={'_blank'} rel='noreferrer'>
                      <img src='https://img.shields.io/badge/Github-000000?style=for-the-badge&logo=github&logoColor=white' alt='github' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="postcard dark red">
              <span className="postcard__img_link">
                <img className="postcard__img" src="/assets/images/icons/pen-on-spreadsheet-paper-with-graph.jpg" alt="Log combiner" />	
              </span>
              <div className="postcard__text">
                <h1 className="postcard__title red">{ t('projects_card-2-title') }</h1>
                <div className="postcard__subtitle small">
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  <p>
                    <Trans i18nKey={'projects_card-2-context-1'} components={{ link1: <LinkText className='postcard__contextlink' to={aoilink} /> }} />
                  </p>
                </div>
                <ul className="postcard__tagbox">
                  <li className="tag__icon"><img src='https://img.shields.io/badge/java-1.7%20%2B-blue' alt='Java v1.8+' /> </li>
                  <li className="tag__icon">
                    <a href='https://github.com/inc0d3w3trust/AOI-Log-Combiner' target={'_blank'} rel='noreferrer'>
                      <img src='https://img.shields.io/badge/Github-000000?style=for-the-badge&logo=github&logoColor=white' alt='github' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="postcard dark yellow">
              <span className="postcard__img_link">
                <img className="postcard__img" src="/assets/images/icons/neomark-easy-machine.jpg" alt="Trace cunter" />
              </span>
              <div className="postcard__text">
                <h1 className="postcard__title yellow">{ t('projects_card-3-title') }</h1>
                <div className="postcard__subtitle small">
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  <p>{ t('projects_card-3-context-1') }</p>
                  <p>
                    <Trans i18nKey={'projects_card-3-context-2'} components={{ link2: <LinkText className='postcard__contextlink' to={laserlink} /> }} />
                  </p>
                  <p>{ t('projects_card-3-context-3') }</p>
                  <p>{ t('projects_card-3-context-4') }</p>
                  <ul className='context-list'>
                    <li>{ t('projects_card-3-context-4-sublist-1') }</li>
                    <li>{ t('projects_card-3-context-4-sublist-2') }</li>
                    <li>{ t('projects_card-3-context-4-sublist-3') }</li>
                    <li>{ t('projects_card-3-context-4-sublist-4') }</li>
                    <li>{ t('projects_card-3-context-4-sublist-5') }</li>
                    <li>{ t('projects_card-3-context-4-sublist-6') }</li>
                  </ul>
                </div>
                <ul className="postcard__tagbox">
                <li className="tag__icon"><img src='https://img.shields.io/badge/NodeJS-339933?logo=nodedotjs&logoColor=white' alt='NodeJS' /></li>
                <li className="tag__icon"><img src='https://img.shields.io/badge/Redis-DC382D?logo=Redis&logoColor=white' alt='redis' /></li>
                <li className="tag__icon">
                  <a href='https://github.com/inc0d3w3trust/TraceFilesCounter' target={'_blank'} rel='noreferrer'>
                    <img src='https://img.shields.io/badge/Github-000000?style=for-the-badge&logo=github&logoColor=white' alt='github' />
                  </a>
                </li>
                </ul>
              </div>
            </div>

            {/* light content */}
            <div className="postcard light blue">
              <span className="postcard__img_link">
                <img className="postcard__img" src="/assets/images/icons/CMS-development.jpg" alt="CMS development" />
              </span>
              <div className="postcard__text t-dark">
                <h1 className="postcard__title blue">{ t('projects_card-4-title') }</h1>
                <div className="postcard__subtitle small">
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  <p>{ t('projects_card-4-context-1') }</p>
                  <p>{ t('projects_card-4-context-2') }</p>
                </div>
                <ul className="postcard__tagbox">
                  <li className="tag__icon"><img src='https://img.shields.io/badge/WordPress-21759B?logo=wordpress&logoColor=white' alt='WordPress' /></li>
                  <li className="tag__icon">
                    <a href='https://inforkom.ee' target={'_blank'} rel='noreferrer'>
                      <img src='https://img.shields.io/badge/Demo-000000?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TtaIVETuIOGSoThZERRy1CkWoEGqFVh1MLv0QmjQkKS6OgmvBwY/FqoOLs64OroIg+AHi6OSk6CIl/i8ptIjx4Lgf7+497t4BQq3ENKttDNB020wl4mImuyKGXtENAR3oQ0xmljErSUn4jq97BPh6F+NZ/uf+HD1qzmJAQCSeYYZpE68TT23aBud94ggryirxOfGoSRckfuS64vEb54LLAs+MmOnUHHGEWCy0sNLCrGhqxJPEUVXTKV/IeKxy3uKslSqscU/+wnBOX17iOs0hJLCARUgQoaCCDZRgI0arToqFFO3HffyDrl8il0KuDTByzKMMDbLrB/+D391a+YlxLykcB9pfHOdjGAjtAvWq43wfO079BAg+A1d601+uAdOfpFebWvQI6N0GLq6bmrIHXO4AA0+GbMquFKQp5PPA+xl9UxbovwW6Vr3eGvs4fQDS1FXyBjg4BEYKlL3m8+7O1t7+PdPo7wc5WHKQS/uOZQAAAAZiS0dEANsAHgAmw9P+sAAAAAlwSFlzAAAN1wAADdcBQiibeAAAAAd0SU1FB+YLAgo4GjZ6a/IAAAFoSURBVEjHrZY9TsNAFIQngiqJUoBEQZGEggLuYOcCFNwFUSAiwg2g5QBcACEKhIgEdwgyBfnhADSmI3w0i1it1t51zEiW7PXsvFm/WdvSigBawAjI+MMEOAKaqgOgD8woRgb06ojPCSMDmmtVxSU9Sepaw9+SHiS9S+pb45uSPuo6/wRSizNw7k+qiC+cyTmQeLhjm7QeuYCOpENzvi3pQNJ1o9F4rpuWjoniq9O8M6Dt4afA0ubWieIU2LD4iemJjWGdKF464rnHQCu2oUvgxhxL4CLgfG4iHR3FxOLsBpwvysRLowjsOQ39V+dXwJd5TLdOWkqdtzxpyT3iZfA7N5PPA867gUTNCsWNQOakJfVw2mZzZc6GG3mj6Ey2cVfASYBjYMdcbwH7sa8DG48F4rnnmfdiC2TO5MFKUSwpcOpp3Bi4j45ioEATeIv4BM4ri1tFeoEi05XFnZWcmF+PX7wAw2AUS/AD5wsxh3unWCEAAAAASUVORK5CYII=' alt='Demo' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="postcard light red">
              <span className="postcard__img_link">
                <img className="postcard__img" src="/assets/images/icons/WEB-development.jpg" alt="Trap" />
              </span>
              <div className="postcard__text t-dark">
                <h1 className="postcard__title blue">{ t('projects_card-5-title') }</h1>
                <div className="postcard__subtitle small">
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  <p>{ t('projects_card-5-context-1') }</p>
                  <p>{ t('projects_card-5-context-2') }</p>
                </div>
                <ul className="postcard__tagbox">
                  <li className="tag__icon"><img src='https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=white' alt='JavaScript' /></li>
                  <li className="tag__icon"><img src='https://img.shields.io/badge/JSON-000000?logo=json&logoColor=white' alt='JSON' /></li>
                  <li className="tag__icon">
                    <a href='http://tarp.ee' target={'_blank'} rel='noreferrer'>
                      <img src='https://img.shields.io/badge/Demo-000000?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TtaIVETuIOGSoThZERRy1CkWoEGqFVh1MLv0QmjQkKS6OgmvBwY/FqoOLs64OroIg+AHi6OSk6CIl/i8ptIjx4Lgf7+497t4BQq3ENKttDNB020wl4mImuyKGXtENAR3oQ0xmljErSUn4jq97BPh6F+NZ/uf+HD1qzmJAQCSeYYZpE68TT23aBud94ggryirxOfGoSRckfuS64vEb54LLAs+MmOnUHHGEWCy0sNLCrGhqxJPEUVXTKV/IeKxy3uKslSqscU/+wnBOX17iOs0hJLCARUgQoaCCDZRgI0arToqFFO3HffyDrl8il0KuDTByzKMMDbLrB/+D391a+YlxLykcB9pfHOdjGAjtAvWq43wfO079BAg+A1d601+uAdOfpFebWvQI6N0GLq6bmrIHXO4AA0+GbMquFKQp5PPA+xl9UxbovwW6Vr3eGvs4fQDS1FXyBjg4BEYKlL3m8+7O1t7+PdPo7wc5WHKQS/uOZQAAAAZiS0dEANsAHgAmw9P+sAAAAAlwSFlzAAAN1wAADdcBQiibeAAAAAd0SU1FB+YLAgo4GjZ6a/IAAAFoSURBVEjHrZY9TsNAFIQngiqJUoBEQZGEggLuYOcCFNwFUSAiwg2g5QBcACEKhIgEdwgyBfnhADSmI3w0i1it1t51zEiW7PXsvFm/WdvSigBawAjI+MMEOAKaqgOgD8woRgb06ojPCSMDmmtVxSU9Sepaw9+SHiS9S+pb45uSPuo6/wRSizNw7k+qiC+cyTmQeLhjm7QeuYCOpENzvi3pQNJ1o9F4rpuWjoniq9O8M6Dt4afA0ubWieIU2LD4iemJjWGdKF464rnHQCu2oUvgxhxL4CLgfG4iHR3FxOLsBpwvysRLowjsOQ39V+dXwJd5TLdOWkqdtzxpyT3iZfA7N5PPA867gUTNCsWNQOakJfVw2mZzZc6GG3mj6Ey2cVfASYBjYMdcbwH7sa8DG48F4rnnmfdiC2TO5MFKUSwpcOpp3Bi4j45ioEATeIv4BM4ri1tFeoEi05XFnZWcmF+PX7wAw2AUS/AD5wsxh3unWCEAAAAASUVORK5CYII=' alt='Demo' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="postcard light yellow">
              <span className="postcard__img_link">
                <img className="postcard__img" src="/assets/images/icons/HTML5-templates.jpg" alt="Stroyka" />
              </span>
              <div className="postcard__text t-dark">
                <h1 className="postcard__title blue">{ t('projects_card-6-title') }</h1>
                <div className="postcard__subtitle small">
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  <p>{ t('projects_card-6-context-1') }</p>
                  <p>{ t('projects_card-6-context-2') }</p>
                </div>
                <ul className="postcard__tagbox">
                  <li className="tag__icon"><img src='https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white' alt='HTML5' /></li>
                  <li className="tag__icon"><img src='https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white' alt='JSON' /></li>
                  <li className="tag__icon">
                    <a href='https://stonest.eu' target={'_blank'} rel='noreferrer'>
                      <img src='https://img.shields.io/badge/Demo-000000?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TtaIVETuIOGSoThZERRy1CkWoEGqFVh1MLv0QmjQkKS6OgmvBwY/FqoOLs64OroIg+AHi6OSk6CIl/i8ptIjx4Lgf7+497t4BQq3ENKttDNB020wl4mImuyKGXtENAR3oQ0xmljErSUn4jq97BPh6F+NZ/uf+HD1qzmJAQCSeYYZpE68TT23aBud94ggryirxOfGoSRckfuS64vEb54LLAs+MmOnUHHGEWCy0sNLCrGhqxJPEUVXTKV/IeKxy3uKslSqscU/+wnBOX17iOs0hJLCARUgQoaCCDZRgI0arToqFFO3HffyDrl8il0KuDTByzKMMDbLrB/+D391a+YlxLykcB9pfHOdjGAjtAvWq43wfO079BAg+A1d601+uAdOfpFebWvQI6N0GLq6bmrIHXO4AA0+GbMquFKQp5PPA+xl9UxbovwW6Vr3eGvs4fQDS1FXyBjg4BEYKlL3m8+7O1t7+PdPo7wc5WHKQS/uOZQAAAAZiS0dEANsAHgAmw9P+sAAAAAlwSFlzAAAN1wAADdcBQiibeAAAAAd0SU1FB+YLAgo4GjZ6a/IAAAFoSURBVEjHrZY9TsNAFIQngiqJUoBEQZGEggLuYOcCFNwFUSAiwg2g5QBcACEKhIgEdwgyBfnhADSmI3w0i1it1t51zEiW7PXsvFm/WdvSigBawAjI+MMEOAKaqgOgD8woRgb06ojPCSMDmmtVxSU9Sepaw9+SHiS9S+pb45uSPuo6/wRSizNw7k+qiC+cyTmQeLhjm7QeuYCOpENzvi3pQNJ1o9F4rpuWjoniq9O8M6Dt4afA0ubWieIU2LD4iemJjWGdKF464rnHQCu2oUvgxhxL4CLgfG4iHR3FxOLsBpwvysRLowjsOQ39V+dXwJd5TLdOWkqdtzxpyT3iZfA7N5PPA867gUTNCsWNQOakJfVw2mZzZc6GG3mj6Ey2cVfASYBjYMdcbwH7sa8DG48F4rnnmfdiC2TO5MFKUSwpcOpp3Bi4j45ioEATeIv4BM4ri1tFeoEi05XFnZWcmF+PX7wAw2AUS/AD5wsxh3unWCEAAAAASUVORK5CYII=' alt='Demo' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
                        
        </div>
      </div>
    </section>
  );
}

export default Projects;