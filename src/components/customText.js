import { Text } from '@chakra-ui/react';
import React from 'react';

const CustomText = props => {
  return <Text maxW={'2xl'} textAlign={'center'} fontSize={['0.8rem', '1.2rem']}>{props.children}</Text>;
};

export default CustomText;
