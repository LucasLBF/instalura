import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../../commons/Menu';
import Box from '../../layout/Box';
import RegisterForm from '../../pattern/RegisterForm';
import Modal from '../../commons/Modal';
import Grid from '../../layout/Grid';
import Text from '../../foundation/Text';
import Footer from '../../commons/Footer';

export default function FAQScreen({ faqCategories }) {
  const [isModalOpen, setModal] = React.useState(false);
  return (
    <Box
      display="flex"
      flexDirection="column"
      flex="1"
    >
      <Modal isOpen={isModalOpen} onClose={setModal}>
        {(modalProps) => <RegisterForm modalProps={modalProps} />}
      </Modal>
      <Menu
        onRegisterClick={() => {
          setModal(true);
        }}
      />
      <Grid.Container style={{ flex: 1 }}>
        <Grid.Row
          marginTop={{ xs: '32px', md: '112px' }}
          marginBottom={{ xs: '32px', md: '100px' }}
          justifyContent="center"
        >
          <Grid.Col
            value={{ xs: 12, md: 12 }}
            flex="1"
          >
            <Text
              variant="title"
              tag="h2"
              color="tertiary.main"
              textAlign="center"
            >
              Como podemos te ajudar?
            </Text>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row
          alignItems="flex-start"
          justifyContent="center"
          flex={1}
        >
          {
            faqCategories && faqCategories.map((category) => (
              <Grid.Col
                value={{ xs: 12, md: 3 }}
                flex={1}
                key={category.title}
              >
                <Box
                  width="100%"
                >
                  <Text
                    tag="h2"
                    variant="subTitle"
                    color="tertiary.main"
                    marginBottom="24px"
                  >
                    {category.title}
                  </Text>
                </Box>
                <Box
                  as="ul"
                  padding="0"
                  listStyle="none"
                >
                  {
                    category.questions.map((question) => (
                      <li key={question.title}>
                        <Text
                          tag="h2"
                          variant="paragraph1"
                          color="tertiary.light"
                          href={`/faq/${question.slug}`}
                        >
                          {question.title}
                        </Text>
                      </li>
                    ))
                  }
                </Box>
              </Grid.Col>
            ))
          }
        </Grid.Row>
      </Grid.Container>
      <Footer />
    </Box>
  );
}

FAQScreen.propTypes = {
  faqCategories: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    slug: PropTypes.string,
    questions: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      slug: PropTypes.string,
      description: PropTypes.string,
    })),
  })).isRequired,
};
