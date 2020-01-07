import React from 'react';
// import PropTypes from 'prop-types';

import styles from './styles';

const Home = () => {
  const name = 'Home';

  return (
    <div style={styles.container}>
      {name}
    </div>
  );
};

Home.propTypes = {
};

Home.defaultProps = {
};

export default Home;
