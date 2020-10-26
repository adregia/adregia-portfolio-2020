import { useState } from 'react';
import { Button, Layout, Modal } from 'antd';
import { BulbFilled, CodeFilled, LinkedinFilled, FileFilled, GithubFilled, InfoCircleFilled } from '@ant-design/icons';

import styles from 'styles/footer.module.css';

export default function Footer() {
  const [open, setOpen] = useState(false);
  const handleOk = () => {
    setOpen(false);
  };

  const openModal = () => {
    setOpen(true);
  };

  return (
    <Layout.Footer className={styles.footer}>
      <Modal
        title="About"
        visible={open}
        onOk={handleOk}
        onCancel={handleOk}
        footer={[
          <Button key="back" onClick={handleOk}>
            Ok
          </Button>,
        ]}
      >
        <p className={styles.modal}>
          <CodeFilled />
          {' '}
          Site built with
          {' '}
          <a href="https://www.nextjs.org" target="_blank" rel="noreferrer">
            Next.js
          </a>
          {' '}
          and
          {' '}
          <a href="https://ant.design" target="_blank" rel="noreferrer">
            Ant Design
          </a>
          .
        </p>
        <p className={styles.modal}>
          <GithubFilled />
          {' '}
          <a href="https://github.com/adregia/adregia-portfolio-2020">Github</a>
        </p>
        <p className={styles.modal}>
          <BulbFilled />
          {' '}
          Tip: Try changing your device&apos;s dark/light mode setting.
        </p>
      </Modal>

      <div>
        <a className={styles.icon} href="https://www.linkedin.com/in/ahmed-dregia" target="_blank" rel="noreferrer">
          <LinkedinFilled />
        </a>

        <a
          className={[styles.iconMargin, styles.icon].join(' ')}
          href="https://adregia-file-store.s3-us-west-1.amazonaws.com/Ahmed-Resume-2020.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <FileFilled />
        </a>

        <a
          className={styles.icon}
          href="https://github.com/adregia/adregia-portfolio-2020"
          target="_blank"
          rel="noreferrer"
        >
          <GithubFilled />
        </a>
      </div>
      <div>
        <InfoCircleFilled className={styles.icon} onClick={openModal} />
      </div>
    </Layout.Footer>
  );
}
