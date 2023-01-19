import React from 'react';
import { Text } from '@chakra-ui/react';
import ColorPalette from '../styles/colorPalette';

const ListTitle = props => {
  return (
    <Text
      marginY={['8px', '12px']}
      fontSize={['1rem', '1.7rem']}
      fontWeight="bold"
      color={ColorPalette.secondary}
    >
      {props.children}
    </Text>
  );
};

export default ListTitle;
