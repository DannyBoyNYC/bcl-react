import React, { Component } from "react";

class Overlay extends Component {
  render() {
    return (
      <div className='overlay gallery-lightbox gallery-lightbox--open'>
        <div className='gallery-lightbox__sidebar'>
          <div className='gallery-lightbox__btn gallery-lightbox__btn--close'>
            <button className='gallery-lightbox__btn-body'>
              <i />close
            </button>
          </div>

          <div className='popover-tools__progress gallery-lightbox__progress--sidebar'>
            <span className='gallery-lightbox__index js-gallery-index'>2</span>
            <span className='gallery-lightbox__progress-separator' />
            <span className='gallery-lightbox__count js-gallery-count'>2</span>
          </div>

          <div className='gallery-lightbox__btn gallery-lightbox__btn--next'>
            <button className='gallery-lightbox__btn-body'>
              <i />next
            </button>
          </div>

          <div className='gallery-lightbox__btn gallery-lightbox__btn--prev js-gallery-prev'>
            <button className='gallery-lightbox__btn-body'>
              <i />previous
            </button>
          </div>
          <div className='gallery-lightbox__btn gallery-lightbox__btn--info-button'>
            <button className='gallery-lightbox__btn-body'>
              <i />info
            </button>
          </div>
        </div>
        {/* container  */}
        <div className='gallery-lightbox__swipe-container'>
          <ul className='gallery-lightbox__content'>
            <li className='gallery-lightbox__item gallery-lightbox__item--img'>
              {/* image  */}
              <div className='gallery-lightbox__img-container'>
                <img
                  className='gallery-lightbox__img'
                  src='img/nomophobia.png'
                />
              </div>
              {/* info  */}
              <div className='gallery-lightbox__info'>
                <div className='gallery-lightbox__img-header'>
                  Figure 1. Vallourec commercial paper issuance
                  averyveryverylongpieceoftextthatshouldntbreakthelayout.
                </div>
                <div className='gallery-lightbox__img-caption'>
                  Caption commercial paper
                  averyveryverylongpieceoftextthatshouldntbreakthelayout.
                </div>
                <div className='gallery-lightbox__img-credit'>
                  Source: Banque de France
                </div>
              </div>
            </li>
          </ul>
          {/* end container  */}
        </div>
        {/* end overlay  */}
      </div>
    );
  }
}
export default Overlay;
