import { Box, Button, Center, Heading, Text } from '@chakra-ui/react';

import database from '../databases/conhecaNossoProjeto.json';
import ListTitle from '../components/listTitle';
import Pallete from '../styles/pallete';
import HeadPage from '../components/headPage';

const News = () => {
  return (
    <Box>
      <HeadPage 
        title="Portal de Notícias"
        description="Veja aqui as notícias das ações sociais do Instituto"
      />
      <Center>
      </Center>
    </Box>
  );
};

export default News;
