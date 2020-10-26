import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

import styles from 'styles/about.module.css';

export default function About({ id }) {
  return (
    <div className={styles.container} id={id}>
      <Fade>
        <h1>About</h1>
        <p>
          I’ve been passionate about tech for as long as I can remember. Tearing down PC’s and scripting game hacks was
          my idea of a good time back in grade school.
        </p>
        <p>
          At age 22, I continue to sculpt my skillset each and every day, both professionally and as an ever-eggheaded
          hobbyist. I have been very lucky to have been granted great opportunities which have allowed me to employ and
          monetize my passions to the fullest.
        </p>
        I played a key role in growing the software development and testing team from scratch during my tenure at my
        first company, a small startup.
        <p>
          Today, I work on the software development team at Toyota Racing Development, where we work on software to
          enhance the productivity of engineers, racers, and crew on and off the track. In addition to my professional
          pursuits, I devote much of my spare time to further self-enrichment in the realms of software engineering,
          dev-ops, and networking.
        </p>
        <p>
          I owe my continued success to unmatchable passion and an unrelenting work ethic imbued upon me through the
          pursuit of fitness and strength sport. Lessons of growth from transforming beyond obesity in my teenage years
          carry over to every facet of my life.
        </p>
      </Fade>
    </div>
  );
}

About.propTypes = {
  id: PropTypes.string.isRequired,
};
