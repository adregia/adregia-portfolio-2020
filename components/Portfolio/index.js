import PropTypes from 'prop-types';
import { Carousel } from 'antd';

import styles from 'styles/portfolio.module.css';

export default function Portfolio({ id }) {
  return (
    <div className={styles.container} id={id}>
      <h1>Projects</h1>
      <Carousel effect="fade" style={{ zIndex: 0 }}>
        <div>
          <div className={styles.carouselItem}>
            <iframe
              title="video"
              src="//vplayer.nbcsports.com/p/BxmELC/nbcsports_embed/select/media/__G0cmZVRG08"
              width="100%"
              height="60%"
              allow="autoplay"
              frameBorder="0"
              allowFullScreen
              style={{ flexGrow: 1 }}
            >
              Your browser does not support iframes.
            </iframe>
            <div className={styles.carouselLabel} style={{ marginTop: -5 }}>
              <h2>Athena V2 (Click thumbnail to play video)</h2>
              <h3>Toyota Racing Development</h3>
              <p>Live, interactive dashboard for streaming, collating, and assessing race data in realtime.</p>
              <p className={styles.technologiesLabel}>
                Node.js, React, AWS Serverless Services (Lambda, DynamoDB, etc.)
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.carouselItem}>
            <div className={styles.carouselImageBackground}>
              <img height="100%" src="/images/pop.png" alt="" />
            </div>
            <div className={styles.carouselLabel}>
              <h2>Practice Online Portal</h2>
              <h3>YAPI</h3>
              <p>Remote access software for dental practice data managementm, email campaigns, and more.</p>
              <p className={styles.technologiesLabel}>React, Node.js, PHP, Twilio, MailChimp</p>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.carouselItem}>
            <div className={styles.carouselImageBackground}>
              <img height="100%" src="/images/job-board.png" alt="" />
            </div>
            <div className={styles.carouselLabel}>
              <h2>FitRecruiters</h2>
              <h3>Fit Recruiters LLC</h3>
              <p>Fitness-oriented job-board with the ability to list/apply to jobs and create profiles.</p>
              <p className={styles.technologiesLabel}>Next.js, Firebase, Algolia</p>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.carouselItem}>
            <div className={styles.carouselImageBackground}>
              <img height="100%" src="/images/diced.png" alt="" />
            </div>
            <div className={styles.carouselLabel}>
              <h2>Diced</h2>
              <h3>Personal Project</h3>
              <p>Intelligent nutrition tracking application that adjusts macronutrient targets over time.</p>
              <p className={styles.technologiesLabel}>Flutter, Firebase</p>
            </div>
          </div>
        </div>
      </Carousel>
      <div style={{ fontStyle: 'italic' }}>
        * Various projects cannot be displayed due to non-disclosure agreements.
      </div>
    </div>
  );
}

Portfolio.propTypes = {
  id: PropTypes.string.isRequired,
};
