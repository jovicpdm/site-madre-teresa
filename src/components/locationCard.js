import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Pallete from '../styles/pallete';

const LocationCard = props => {
  return (
    <Box textAlign={'center'} marginTop={['12px', '24px']}>
      <Text fontSize={['16px', '20px']} color={Pallete.primary}>
        {props.city}
      </Text>
      <Text fontSize={['12px', '16px']}>{props.address}</Text>
    </Box>
  );
};

export default LocationCard;
