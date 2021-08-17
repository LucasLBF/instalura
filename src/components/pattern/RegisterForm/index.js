import React from 'react';
import PropTypes from 'prop-types';
import { Lottie } from '@crello/react-lottie';
import errorAnimation from './animations/error.json';
import successAnimation from './animations/success.json';
import Grid from '../../layout/Grid';
import Box from '../../layout/Box';
import Button from '../../commons/Button';
import Text from '../../foundation/Text';
import TextField from '../../forms/TextField';

const formState = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function FormContent() {
  const [isFormSubmitted, setIsFormSubmitted] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState(formState.DEFAULT);
  const [userInfo, setUserInfo] = React.useState({
    username: '',
    name: '',
  });
  const isFormInvalid = userInfo.username.length === 0 || userInfo.name.length === 0;

  const handleChange = (e) => {
    const fieldName = e.target.getAttribute('name');
    setUserInfo({ ...userInfo, [fieldName]: e.target.value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setIsFormSubmitted(true);
        const userDTO = {
          username: userInfo.username,
          name: userInfo.name,
        };

        fetch('https://instalura-api.vercel.app/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userDTO),
        })
          .then((resp) => {
            if (resp.ok) {
              return resp.json();
            }
            throw new Error('Não foi possível fazer seu cadastro :(');
          })
          .then((respBody) => {
            setSubmissionStatus(formState.DONE);
            // eslint-disable-next-line no-console
            console.log(respBody);
          })
          .catch((err) => {
            setSubmissionStatus(formState.ERROR);
            // eslint-disable-next-line no-console
            console.log(err);
          });
      }}
    >
      <Text
        variant="title"
        tag="h1"
        color="tertiary.main"
      >
        Pronto para saber da vida dos outros?
      </Text>
      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
        marginBottom="32px"
      >
        Você está a um passo de saber tudoo que está
        rolando no bairro, complete seu cadastro agora!
      </Text>
      <div>
        <TextField
          name="username"
          placeholder="Usuário"
          value={userInfo.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          name="name"
          placeholder="Nome"
          value={userInfo.name}
          onChange={handleChange}
        />
      </div>
      <Button
        variant="primary.main"
        type="submit"
        fullWidth
        disabled={isFormInvalid}
      >
        Cadastrar
      </Button>

      {isFormSubmitted && submissionStatus === formState.DONE && (
        <Box
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="150px"
            height="150px"
            config={{ animationData: successAnimation, loop: false, autoplay: true }}
          />
        </Box>
      )}

      {isFormSubmitted && submissionStatus === formState.ERROR && (
        <Box
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="150px"
            height="150px"
            config={{ animationData: errorAnimation, loop: false, autoplay: true }}
          />
        </Box>
      )}
    </form>
  );
}

export default function RegisterForm({ modalProps }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent="flex-end"
    >
      <Grid.Col
        display="flex"
        paddingRight={{ md: '0' }}
        flex={1}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: '16px',
            md: '85px',
          }}
          backgroundColor="white"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...modalProps}
        >
          <FormContent />
        </Box>

      </Grid.Col>
    </Grid.Row>
  );
}

RegisterForm.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  modalProps: PropTypes.object.isRequired,
};
