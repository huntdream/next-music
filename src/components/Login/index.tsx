import React, { useEffect, useId, useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as stylex from '@stylexjs/stylex';
import Input from '../Input';
import { flex } from '@/app/tokens.stylex';
import Button from '../Button';
import request from '@/utils/fetch';

interface LoginForm {
  phone: string;
  captcha: string;
}

interface Props {
  onSuccess?: () => void;
}

const styles = stylex.create({
  form: {},
  captcha: {
    alignItems: 'flex-end',
  },
  captchatInput: {
    flex: 1,
  },
  captchatButton: {
    margin: '0 0 16px 16px',
  },
  submit: {
    margin: '20px 0',
  },
});

const Login: React.FC<Props> = ({ onSuccess }) => {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    setSubmitting(true);
    request(
      `/login/cellphone?phone=${data.phone}&captcha=${data.captcha}`
    ).finally(() => {
      setSubmitting(false);
    });
  };

  const phoneNumber = watch('phone');

  const handleSend = () => {
    if (phoneNumber) {
      request(`/captcha/sent?phone=${phoneNumber}`).then((res) => {});
    }
  };

  console.log(errors, 'error');

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label='Phone'
          {...register('phone', {
            required: true,
            maxLength: 11,
            minLength: 11,
          })}
        />
        <div {...stylex.props(flex.row, styles.captcha)}>
          <Input
            label='Captcha'
            style={styles.captchatInput}
            {...register('captcha', { required: true })}
          />
          <Button
            disabled={!phoneNumber}
            style={styles.captchatButton}
            onClick={handleSend}
          >
            Send
          </Button>
        </div>
        <div {...stylex.props(styles.submit)}>
          <Button wide type='submit' disabled={submitting}>
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
