import { Box, Button, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import CustomContainer from '../components/customContainer';
import Pallete from '../styles/pallete';

const News = () => {

  return (
    <Box>
      <Heading
        bg={Pallete.primaryDark}
        p={['8px', '12px']}
        textAlign={'center'}
        alignSelf=""
        color={'whiteAlpha.900'}
      >
        Central de Notícias
      </Heading>
      <Box padding={['16px', '24px']}>
      </Box>
    </Box>
  );
};

export default News;
