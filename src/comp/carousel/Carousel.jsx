import React, { useState, useRef, useEffect } from 'react';
import styles from './carousel.module.scss';

function useInterval(callback, delay) {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Carousel = () => {
  let SLIDES = [
    {
      img: 'https://loremflickr.com/640/360',
    },
    {
      img: 'https://loremflickr.com/640/460',
    },
    {
      img: 'https://loremflickr.com/640/560',
    },
    {
      img: 'https://loremflickr.com/740/360',
    },
    {
      img: 'https://loremflickr.com/840/360',
    },
  ];

  const itemSize = SLIDES.length;
  const transitionTime = 500;
  const transitionStyle = `transform ${transitionTime}ms ease 0s`;
  const [mouseOver, setMouseOver] = useState(false);
  const [slideIndex, setSlideIndex] = useState(2);
  const [transition, setTransition] = useState(transitionStyle);

  let slides = setSlides();

  function setSlides() {
    let addedFront = [];
    let addedLast = [];
    var index = 0;
    while (index < 2) {
      addedLast.push(SLIDES[0]);
      addedFront.unshift(SLIDES[SLIDES.length - 1]);
      index++;
    }
    return [...addedFront, ...SLIDES, ...addedLast];
  }

  useInterval(
    () => {
      handleSlide(slideIndex + 1);
    },
    mouseOver ? null : 3000
  );

  const replaceSlide = (index) => {
    setTimeout(() => {
      setTransition('');
      setSlideIndex(index);
    }, transitionTime);
  };
  const handleSlide = (index) => {
    setSlideIndex(index);
    if (index - 1 <= 0) {
      index += itemSize;
      replaceSlide(index);
    } else if (index >= itemSize + 1) {
      index -= itemSize;
      replaceSlide(index);
    }
    setTransition(transitionStyle);
  };
  const handleSwipe = (direction) => {
    handleSlide(slideIndex + direction);
  };

  return (
    <main
      className={styles.mainbanner}
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      <button onClick={() => handleSwipe(-1)}>&lt;</button>
      <button onClick={() => handleSwipe(1)}>&gt;</button>
      <p>
        {slideIndex - 1 === 0 ? itemSize : slideIndex - 1}/{SLIDES.length}
      </p>
      <ul
        style={{
          transform: `translateX(calc(${
            (-100 / slides.length) * slideIndex
          }%))`,
          transition: transition,
        }}
      >
        {slides.map((slide, index) => {
          return (
            <li key={index}>
              <img src={slide.img} alt="banner" />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Carousel;
