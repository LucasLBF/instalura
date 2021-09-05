/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../layout/Box';
import SEO from '../SEO';
import Modal from '../Modal';
import RegisterForm from '../../pattern/RegisterForm';
import Menu from '../Menu';
import Footer from '../Footer';

export const WebSiteContext = React.createContext({
  toggleRegisterModal: () => {},
});

export default function WebSiteWrapper({
  children,
  seoProps,
  pageBoxProps,
  menuProps,
}) {
  const [isModalOpen, setModal] = React.useState(false);

  return (
    <WebSiteContext.Provider
      value={{
        toggleRegisterModal: () => {
          setModal(!isModalOpen);
        },
      }}
    >
      <SEO {...seoProps} />
      <Box
        flex="1"
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        {...pageBoxProps}
      >
        <Modal isOpen={isModalOpen} onClose={setModal}>
          {(modalProps) => <RegisterForm modalProps={modalProps} />}
        </Modal>
        {menuProps.display && (
          <Menu
            onRegisterClick={() => {
              setModal(true);
            }}
          />
        )}
        {children}
        <Footer />
      </Box>
    </WebSiteContext.Provider>
  );
}

WebSiteWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
  menuProps: {
    display: true,
  },
};

WebSiteWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  pageBoxProps: PropTypes.shape({
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};
