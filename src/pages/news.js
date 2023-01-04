import { Box, Button, Center, Heading, Text } from '@chakra-ui/react';

import database from './../databases/conhecaNossoProjeto.json';
import ListTitle from '../components/listTitle';
import Pallete from '../styles/pallete';

const News = () => {
  return (
    <Box>
      <Box bg={Pallete.primaryDark} padding={[4, 8]} textAlign="center">
        <Heading textAlign={'center'} color={'whiteAlpha.900'}>
          Central de Notícias
        </Heading>
        <Text color={Pallete.primaryLight}>Confira aqui nossas ações</Text>
      </Box>
      <Center>
      </Center>
    </Box>
  );
};

export default News;
