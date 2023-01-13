import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Pallete from '../styles/pallete';

const SectionTitle = props => {
  return (
    <Box marginBottom={'1rem 0'}>
      <Text
        fontSize={['1rem', '2rem']}
        color={Pallete.primaryDark}
        fontWeight="bold"
        textAlign={"center"}
      >
        {props.children}
      </Text>
    </Box>
  );
};

export default SectionTitle;
