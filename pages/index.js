import React from 'react';
import Menu from '../src/components/commons/Menu';
import Footer from '../src/components/commons/Footer';
import Text from '../src/components/foundation/Text';
import Button from '../src/components/commons/Button';
import Grid from '../src/components/layout/Grid';
import Box from '../src/components/layout/Box';
import Modal from '../src/components/commons/Modal';

export default function Home() {
  const [isModalOpen, setModal] = React.useState(false);
  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      backgroundImage="url(/images/bubbles.svg)"
      backgroundPosition="bottom right"
      backgroundRepeat="no-repeat"
    >
      <Menu />
      <Modal isOpen={isModalOpen} onClose={setModal}>
        {(props) => (
          <Box
            backgroundColor="white"
            data-modal-safe-area="true"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
          >
            Hello World
          </Box>
        )}
      </Modal>
      <Grid.Container marginTop={{ xs: '32px', md: '75px' }}>
        <Grid.Row>
          <Grid.Col
            offset={{ xs: 0, md: 1 }}
            value={{ xs: 12, md: 5 }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Text
              variant="title"
              tag="h1"
              color="tertiary.main"
              // textAlign="center"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Compartilhe momentos e conecte-se com amigos
            </Text>
            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.light"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s.
            </Text>
            <Button
              variant="primary.main"
              alignSelf={{
                md: 'flex-start',
              }}
              margin={{
                xs: 'auto',
                md: 'initial',
              }}
              display="block"
              onClick={() => {
                setModal(!isModalOpen);
              }}
            >
              Cadastrar
            </Button>
          </Grid.Col>
          <Grid.Col value={{ xs: 12, md: 6 }}>
            <img
              alt="Imagem de celular com páginas internas do projeto com o perfil do Cage"
              style={{ display: 'block', margin: 'auto' }}
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
      <Footer />
    </Box>
  );
}
