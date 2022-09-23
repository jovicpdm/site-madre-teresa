import { Link } from '@chakra-ui/react';
import React from 'react';
import Pallete from '../styles/pallete';

const CustomLink = props => {
  return (
    <Link href={props.href} color={Pallete.secondary} fontSize="1rem">
      {props.children}
    </Link>
  );
};

export default CustomLink;
