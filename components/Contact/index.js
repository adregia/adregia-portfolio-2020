/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, Divider, Spin } from 'antd';
import { LoadingOutlined, CheckOutlined } from '@ant-design/icons';
import Fade from 'react-reveal/Fade';

import styles from 'styles/contact.module.css';

export default function Contact({ id }) {
  const [state, setState] = useState({ email: '', name: '', inquiry: '' });
  const [loading, setLoading] = useState(false);
  const [finished, setFinished] = useState(false);

  const handleChange = (key) => (event) => {
    setState({ ...state, [key]: event.target.value });
  };

  const handleFinish = async () => {
    setLoading(true);
    await fetch('https://formcarry.com/s/IIH093lICj', {
      method: 'POST',
      body: JSON.stringify(state),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    setLoading(false);
    setFinished(true);
  };

  return (
    <div className={styles.container} id={id}>
      <h1>Contact</h1>
      {finished && (
        <div className={styles.finished}>
          <CheckOutlined />
          <h1>Thank you!</h1>
          <h2>I&apos;ll get back to you as soon as possible.</h2>
        </div>
      )}
      {loading && !finished && (
        <div className={styles.spinner}>
          <Spin indicator={<LoadingOutlined className={styles.spinnerSize} spin />} />
        </div>
      )}
      <Fade bottom>
        {!loading && !finished ? (
          <Form
            method="POST"
            acceptCharset="UTF-8"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 15 }}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={handleFinish}
            onFinishFailed={() => null}
          >
            <Form.Item
              label={<label>Name</label>}
              name="Name"
              rules={[{ required: true, message: 'Please enter your name.' }]}
            >
              <Input value={state.name} onChange={handleChange('name')} />
            </Form.Item>

            <Form.Item
              label={<label>Email</label>}
              name="email"
              rules={[{ required: true, message: 'Please enter a valid email.' }]}
            >
              <Input type="email" value={state.email} onChange={handleChange('email')} />
            </Form.Item>

            <Form.Item
              label={<label>Inquiry</label>}
              name="inquiry"
              rules={[{ required: true, message: 'Please describe what you are inquiring about.' }]}
            >
              <Input.TextArea value={state.inquiry} onChange={handleChange('inquiry')} />
            </Form.Item>
            <div className={styles.submit}>
              <Button type="primary" shape="round" size="large" htmlType="submit">
                Submit
              </Button>
            </div>
          </Form>
        ) : (
          <></>
        )}
        <Divider />
        <h2>Prefer engaging elsewhere? Find me on other platforms via the footer below!</h2>
      </Fade>
    </div>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
};
