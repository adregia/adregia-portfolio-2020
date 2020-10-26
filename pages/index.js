import Head from 'next/head';
import { Layout } from 'antd';

import Header from 'components/Header';
import Banner from 'components/Banner';
import About from 'components/About';
import Experience from 'components/Experience';
import Portfolio from 'components/Portfolio';
import Contact from 'components/Contact';
import Footer from 'components/Footer';

import styles from 'styles/page.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ahmed Dregia | Portfolio</title>
        <meta
          name="description"
          content="An avid engineer with a thirst for learning and problems to solve."
        />
      </Head>
      <Layout className={styles.content}>
        <Header />
        <Layout.Content>
          <Banner id="home" />
          <About id="about" />
          <Experience id="experience" />
          <Portfolio id="projects" />
          <Contact id="contact" />
        </Layout.Content>
        <Footer />
      </Layout>
    </>
  );
}
