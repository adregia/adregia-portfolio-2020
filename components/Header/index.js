import { Layout, Menu, Dropdown } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

import styles from 'styles/header.module.css';

export default function Header() {
  const navigate = ({ key }) => {
    document.getElementById(key).scrollIntoView();
  };

  const menu = (
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
  );

  return (
    <Layout.Header className={styles.header}>
      <Dropdown overlay={menu} trigger={['click']} className={styles.dropdown}>
        <MenuOutlined style={{ color: 'white' }} />
      </Dropdown>
      <Menu
        theme="dark"
        selectedKeys={[]}
        mode="horizontal"
        className={[styles.menu, styles.horizontalMenu].join(' ')}
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
