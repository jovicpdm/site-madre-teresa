import { Box, Button, Heading } from '@chakra-ui/react';
import Pallete from '../styles/pallete';

const News = () => {
  return (
    <Box>
      <Heading
        bg={Pallete.primaryDark}
        p={['8px', '12px']}
        textAlign={'center'}
        color={'whiteAlpha.900'}
      >
        Central de Notícias
      </Heading>
      <Box padding={['16px', '24px']}></Box>
    </Box>
  );
};

export default News;
