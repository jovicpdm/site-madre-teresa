import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import Pallete from '../styles/pallete';

const CardSocialAction = props => {
  return (
    <Box
      p={[5, 8]}
      shadow="md"
      borderWidth="1px"
      maxWidth={['md', 'lg']}
      borderRadius={'16px'}
      textAlign="center"
    >
      <Heading fontSize={['16px', '24px']} color={Pallete.secondary}>
        {props.title}
      </Heading>
      <Text mt={4} fontSize={['12px', '20px']}>
        {props.desc}
      </Text>
    </Box>
  );
};

export default CardSocialAction;
