import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const ListComponent = props => {
  return (
    <Box marginY={['8px', '12px']}>
      <Text fontWeight="medium" fontSize={['16px', '20px']}>
        {props.name}
      </Text>
      <Text fontSize={['12px', '14px']}>{props.office}</Text>
    </Box>
  );
};

export default ListComponent;
