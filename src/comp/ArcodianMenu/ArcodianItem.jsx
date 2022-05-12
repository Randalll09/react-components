import React, { useState, useRef } from 'react';

const ArcodianItem = ({
  title = {
    title: '',
    link: '#',
  },
  content = [
    {
      title: '',
      link: '#',
    },
  ],
}) => {
  const [clicked, setClicked] = useState(false);
  const el = useRef();
  const handleToggle = () => {
    setClicked((prev) => !prev);
  };
  return (
    <li>
      <a href={title.link}>{title.title}</a>
      <button
        onClick={handleToggle}
        style={
          clicked
            ? { transform: 'rotate(180deg)' }
            : { transform: 'rotate(0deg)' }
        }
      >
        V
      </button>
      <div
        ref={el}
        style={
          clicked ? { height: el.current.scrollHeight } : { height: '0px' }
        }
      >
        <ul>
          {content.map((item, index) => (
            <li key={index}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default ArcodianItem;
