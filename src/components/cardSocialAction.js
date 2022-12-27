import React from 'react';
import { Box, Center, Heading, Image, Text } from '@chakra-ui/react';
import Pallete from '../styles/pallete';

const CardSocialAction = props => {
  return (
    <Center
      p={[5, 8]}
      shadow="md"
      borderWidth="1px"
      maxWidth={['md', 'lg']}
      borderRadius={'16px'}
      textAlign="center"
      flexDirection={'column'}
    >
      <Image src={props.img} borderRadius="8" marginBottom={8} height="300" alignSelf={"ce"}/>
      <Heading fontSize={['16px', '24px']} color={Pallete.secondary}>
        {props.title}
      </Heading>
      <Text mt={4} fontSize={['12px', '20px']}>
        {props.desc}
      </Text>
    </Center>
  );
};

export default CardSocialAction;
