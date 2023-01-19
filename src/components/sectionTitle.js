import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import ColorPalette from '../styles/colorPalette';

const SectionTitle = props => {
  return (
    <Box marginBottom={'1rem'}>
      <Text
        fontSize={['1.5rem', '2rem']}
        color={ColorPalette.primaryDark}
        fontWeight="bold"
        textAlign={"center"}
      >
        {props.children}
      </Text>
    </Box>
  );
};

export default SectionTitle;
