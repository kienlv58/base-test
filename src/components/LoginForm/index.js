import React from 'react';
import { func } from 'prop-types';
import { Button, View } from 'react-native';
import { useStatus, LOADING } from '@rootstrap/redux-tools';

import { login } from 'actions/userActions';
import Input from 'components/common/Input';
import useForm from 'hooks/useForm';
import useValidation from 'hooks/useValidation';
import loginValidations from 'validations/loginValidations';
import ErrorView from 'components/common/ErrorView';
import useTextInputProps from 'hooks/useTextInputProps';
import strings from 'locale';
import styles from './styles';

const FIELDS = {
  username: 'username',
  password: 'password',
};

const LoginForm = ({ onSubmit }) => {
  const { error, status } = useStatus(login);
  // const validator = useValidation(loginValidations);
  const { values, errors, handleValueChange, handleSubmit, handleBlur } = useForm(
    {
      onSubmit,
      // validator,
      validateOnBlur: true,
      validateOnChange: true,
    },
    [onSubmit],
  );

  const inputProps = useTextInputProps(handleValueChange, handleBlur, values);

  return (
    <>
      <Input
        label={strings.SIGN_IN.email}
        autoCapitalize="none"
        testID="email-input"
        {...inputProps(FIELDS.username)}
      />
      <Input
        label={strings.SIGN_IN.password}
        testID="password-input"
        secureTextEntry
        {...inputProps(FIELDS.password)}
      />
      <ErrorView errors={{ ...errors, error }} />
      <View style={styles.button}>
        <Button
          testID="login-submit-button"
          title={status === LOADING ? strings.COMMON.loading : strings.SIGN_IN.button}
          onPress={handleSubmit}
        />
      </View>
    </>
  );
};

LoginForm.propTypes = {
  onSubmit: func.isRequired,
};

export default LoginForm;
