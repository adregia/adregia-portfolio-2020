import PropTypes from 'prop-types';
import { Button } from 'antd';
import { DownloadOutlined, LinkOutlined } from '@ant-design/icons';
import Fade from 'react-reveal/Fade';

import styles from 'styles/experience.module.css';

export default function Experience({ id }) {
  return (
    <div className={styles.container} id={id}>
      <h1>Experience</h1>
      <Fade left>
        <div className={styles.experienceBadgeContainer}>
          <div>
            <div className={styles.experienceBadge}>
              <img width={165} src="/images/trd.png" alt="" />
            </div>
            <h2 className={styles.textBounds}>TRD USA</h2>
            <h3>
              <a href="https://www.trdusa.com" target="_blank" rel="noreferrer">
                Website
                {' '}
                <LinkOutlined />
              </a>
            </h3>
            <h3 className={styles.textBounds}>Full-stack Software Engineer</h3>
            <h3 className={styles.textBounds}>09/2019 - Present</h3>
          </div>
          <div>
            <div>
              <img width={165} src="/images/yapi.png" alt="" />
            </div>
            <h2>YAPI</h2>
            <h3>
              <a href="https://www.yapiapp.com" target="_blank" rel="noreferrer">
                Website
                {' '}
                <LinkOutlined />
              </a>
            </h3>
            <h3 className={styles.textBounds}>Software Engineer/Lead</h3>
            <h3 className={styles.textBounds}>01/2018 - 09/2019</h3>
          </div>
          <div>
            <div
              style={{
                alignItems: 'center',
              }}
            >
              <img width={120} src="/images/fit-recruiters.png" alt="" style={{ marginLeft: 3 }} />
            </div>
            <h2>FitRecruiters</h2>
            <h3>
              <a href="https://www.fitrecruiters.com" target="_blank" rel="noreferrer">
                Website
                {' '}
                <LinkOutlined />
              </a>
            </h3>
            <h3 className={styles.textBounds}>Co-founder & Software Architect</h3>
            <h3 className={styles.textBounds}>07/2020 - Present</h3>
          </div>
        </div>
        <div className={styles.downloadButton}>
          <a
            href="https://adregia-file-store.s3-us-west-1.amazonaws.com/Ahmed-Resume-2020.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <Button type="primary" shape="round" size="large" icon={<DownloadOutlined />}>
              Download Full Resumé
            </Button>
          </a>
        </div>
      </Fade>
    </div>
  );
}

Experience.propTypes = {
  id: PropTypes.string.isRequired,
};
