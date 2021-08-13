import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../../layout/Grid';
import Box from '../../layout/Box';
import Button from '../../commons/Button';
import Text from '../../foundation/Text';
import TextField from '../../forms/TextField';

function FormContent() {
  const [userInfo, setUserInfo] = React.useState({
    email: '',
    user: '',
  });
  const isFormInvalid = userInfo.email.length === 0 || userInfo.user.length === 0;

  const handleChange = (e) => {
    const fieldName = e.target.getAttribute('name');
    setUserInfo({ ...userInfo, [fieldName]: e.target.value });
  };

  return (
    <form>
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
          name="email"
          placeholder="Email"
          value={userInfo.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          name="user"
          placeholder="Usuário"
          value={userInfo.user}
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
