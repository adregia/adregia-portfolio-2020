import PropTypes from 'prop-types';
import '../styles/globals.css';
import '../styles/antd.less';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.any,
};

MyApp.defaultProps = {
  pageProps: {},
};

export default MyApp;
