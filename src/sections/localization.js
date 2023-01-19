import React from 'react';
import { Container, Img, Stack, Text } from '@chakra-ui/react';
import CustomContainer from '../components/customContainer';
import ColorPalette from '../styles/colorPalette';
import Address from '../images/undraw_map.svg';
import LocationCard from '../components/locationCard';

const Localization = () => {
  return (
    <CustomContainer bg={ColorPalette.primaryLight} id="localizacao">
      <Stack direction="row">
        <Img src={Address} />
      </Stack>
      <Stack direction="column" align="center" padding={['12px', null]}>
        <Container
          bg={'white'}
          padding={['8px', '16px']}
          boxShadow="2xl"
          borderRadius={'16px'}
        >
          <Text
            fontWeight={'bold'}
            fontSize={['16px', '20px']}
            textAlign="center"
          >
            Estamos localizados em duas cidades
          </Text>
          <LocationCard
            city="Xinguara - PA"
            address="Rua Guajajaras, nº 55, centro"
          />
          <LocationCard
            city="Marabá - PA"
            address="Folha 26, Quadra 05 - Lote 15, Nova Marabá"
          />
        </Container>
      </Stack>
    </CustomContainer>
  );
};

export default Localization;
