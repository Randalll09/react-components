import React from 'react';
import styles from './arcodian.module.scss';
import ArcodianItem from './ArcodianItem';

const ArcodianMenu = () => {
  return (
    <ul className={styles.ArcodianMenu}>
      <ArcodianItem
        title={{ title: 'title1', link: '#' }}
        content={[
          { title: 'sub-1-1', link: '#' },
          { title: 'sub-1-2', link: '#' },
        ]}
      />
      <ArcodianItem
        title={{ title: 'title2', link: '#' }}
        content={[
          { title: 'sub-2-1', link: '#' },
          { title: 'sub-2-2', link: '#' },
        ]}
      />
    </ul>
  );
};

export default ArcodianMenu;
