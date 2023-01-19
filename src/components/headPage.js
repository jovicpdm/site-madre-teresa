import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import ColorPalette from '../styles/colorPalette';

const HeadPage = props => {
  return (
    <Box
      bg={ColorPalette.primaryDark}
      padding={[4, 8]}
      textAlign="center"
      width={'100%'}
    >
      <Heading
        textAlign={'center'}
        fontSize={[20, 32]}
        color={'whiteAlpha.900'}
      >
        {props.title}
      </Heading>
      <Text color={'white'} fontSize={[10, 14]}>
        {props.description}
      </Text>
    </Box>
  );
};

export default HeadPage;
