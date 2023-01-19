import { Link } from '@chakra-ui/react';
import React from 'react';
import ColorPalette from '../styles/colorPalette';

const CustomLink = props => {
  return (
    <Link href={props.href} color={ColorPalette.primaryLight} fontSize="12px">
      {props.children}
    </Link>
  );
};

export default CustomLink;
