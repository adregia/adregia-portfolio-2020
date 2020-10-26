import PropTypes from 'prop-types';
import { PhoneFilled, MailFilled, ShopFilled } from '@ant-design/icons';
import Fade from 'react-reveal/Fade';

import styles from 'styles/banner.module.css';

export default function Banner({ id }) {
  return (
    <div className={styles.container} id={id}>
      <Fade>
        <div className={styles.shape} />
        <div className={styles.row}>
          <img
            height={265}
            src="/images/ahmed.jpg"
            alt=""
            className={styles.img}
          />
          <div className={styles.text}>
            <h2>Hi, I&apos;m</h2>
            <h1>Ahmed Dregia,</h1>
            <h2>
              a full-stack
              {' '}
              <br />
              Software Engineer.
            </h2>
            <h3>
              <PhoneFilled />
              {' '}
              (949) 648-6227
            </h3>
            <h3>
              <MailFilled />
              {' '}
              ahmeddregia@gmail.com
            </h3>
            <h3>
              <ShopFilled />
              {' '}
              ahmed.dregia@fitrecruiters.com
            </h3>
          </div>
        </div>
      </Fade>
    </div>
  );
}

Banner.propTypes = {
  id: PropTypes.string.isRequired,
};
