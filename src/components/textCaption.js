import { Text } from '@chakra-ui/react';
import React from 'react';

const TextCaption = (props) => {
  return <Text textAlign={'center'}>{props.children}</Text>;
};

export default TextCaption;
