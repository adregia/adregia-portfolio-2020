import { Layout, Menu } from 'antd';

import styles from 'styles/header.module.css';

export default function Header() {
  const navigate = ({ key }) => {
    document.getElementById(key).scrollIntoView();
  };

  return (
    <Layout.Header className={styles.header}>
      <Menu
        theme="dark"
        selectedKeys={[]}
        mode="horizontal"
        className={styles.menu}
        onClick={navigate}
        style={{ backgroundColor: 'transparent' }}
      >
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item key="about">About</Menu.Item>
        <Menu.Item key="experience">Experience</Menu.Item>
        <Menu.Item key="projects">Projects</Menu.Item>
        <Menu.Item key="contact">Contact</Menu.Item>
      </Menu>
    </Layout.Header>
  );
}
