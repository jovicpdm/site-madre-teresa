import { Button, Link } from '@chakra-ui/react';
import React from 'react';
import ColorPalette from '../styles/colorPalette';

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
        bgColor={ColorPalette.primaryDark}
        color="white"
        _hover={{
          backgroundColor: '#f7f7f7',
          color: ColorPalette.primaryDark,
        }}
      >
        {props.children}
      </Button>
    </Link>
  );
};

export default PortalButton;
