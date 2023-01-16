import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import Pallete from '../styles/pallete';

const HeadPage = (props) => {
  return (
    <Box bg={Pallete.primaryDark} padding={[4, 8]} textAlign="center">
      <Heading textAlign={'center'} color={'whiteAlpha.900'}>
        {props.title}
      </Heading>
      <Text color={"white"}>{props.description}</Text>
    </Box>
  );
};

export default HeadPage;
