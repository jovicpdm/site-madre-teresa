import { Button, Link } from '@chakra-ui/react';
import React from 'react';
import Pallete from '../styles/pallete';

const PortalButton = props => {
  return (
    <Link
      href={props.href}
      textDecoration="none"
      _hover={{
        textDecoration: 'none',
      }}
    >
      <Button
        width={[260, '1xl']}
        bgColor={Pallete.primaryDark}
        color="white"
        _hover={{
          backgroundColor: "#f7f7f7",
          color: Pallete.primaryDark,
        }}
      >
        {props.children}
      </Button>
    </Link>
  );
};

export default PortalButton;
