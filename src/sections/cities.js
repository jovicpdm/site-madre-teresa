import { Box, Center, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import CityAccordion from '../components/cityAccordion';
import SectionTitle from '../components/sectionTitle';
import Pallete from '../styles/pallete';

const Cities = () => {
  return (
    <Box
      alignItems="center"
      textAlign={'center'}
      bg={Pallete.primaryLight}
      padding={['12px', '24px']}
      id="cities"
    >
      <SectionTitle>Cidades onde atuamos</SectionTitle>
      <Center flexDirection={['column', 'row']}>
        <SimpleGrid maxWidth="400px" minWidth={['90%', '400px']}>
          <CityAccordion
            city="Marabá"
            hospitals={[
              {
                name: 'Hospital Municipal de Marabá',
                address: 'Folha 17, Quadra Especial - Nova Marabá',
              },
              {
                name: 'Hospital Materno de Marabá',
                address: 'R. Cinco de Abril - Velha Marabá',
              },
            ]}
          />
          <CityAccordion
            city="Nova Ipixuna"
            hospitals={[
              {
                name: 'Hospital Municipal de Nova Ipixuna',
                address:
                  'Jerusalem - Cachoeira da Fumaça, S/n, Nova Ipixuna - PA, 68585-000',
              },
            ]}
          />
          <CityAccordion
            city="Brasil Novo"
            hospitals={[
              {
                name: 'Hospital Municipal Maria Jose Biancardi',
                address:
                  'Tv. Vinte e Oito de Abril, 110-212, Brasil Novo - PA, 68148-000',
              },
            ]}
          />
          <CityAccordion
            city="Medicilândia"
            hospitals={[
              {
                name: 'Hospital Municipal de Medicilândia',
                address: 'Tv. Cassandro Silvério - Medicilândia, PA, 68145-000',
              },
            ]}
          />
          <CityAccordion
            city="Uruará"
            hospitals={[
              {
                name: 'Hospital Municipal de Uruará',
                address: 'Av. Pará - Val-de-Caes, Uruará - PA, 68140-000',
              },
            ]}
          />
        </SimpleGrid>
      </Center>
    </Box>
  );
};

export default Cities;
