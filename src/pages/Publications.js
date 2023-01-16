import { Box, Link, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import HeadPage from '../components/headPage';

const Publications = () => {
  const [scales, setScales] = useState([]);

  useEffect(() => {
    fetch('./database.json', {
      headers: {
        Accept: 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => setScales(res.scales));
  }, []);

  console.log(scales);

  return (
    <Box>
      <HeadPage
        title="Escalas"
        description="Veja aqui as escalas previstas e executadas dos hospitais que prestamos serviços"
      />
      <SimpleGrid padding={[4, 8]} columns={[1, 3]}>
        {scales.map(scale => {
          return (
            <Link href={scale.doc} isExternal>
              {scale.title}
            </Link>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Publications;
