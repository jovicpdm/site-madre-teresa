import React from 'react';
import {
  Box,
  Heading,
  HStack,
  Img,
  Show,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';

import { googleDriveView } from './../utils/const';
import ColorPalette from '../styles/colorPalette';
import CustomLink from '../components/customLink';

const Header = () => {
  return (
    <SimpleGrid
      columns={[1, 2]}
      bg={ColorPalette.primaryDark}
      padding={['12px', '16px']}
    >
      <Box display="flex" mt={2} alignItems="center">
        <Img
          marginRight={8}
          height={[16, 24]}
          borderRadius="full"
          src={googleDriveView + '1MFe-8FOEEbimz5fgPO4NHSuKaDPwYJhV'}
        />
        <Box textAlign={['center', 'left']} flexDirection="row">
          <Heading fontSize={['20px', '36px']} color="#F7F8F8">
            Instituto Madre Teresa
          </Heading>
          <Text
            fontSize={['12px', '20px']}
            fontWeight={'medium'}
            color="#f7f7f7"
          >
            Um novo conceito em gestão de saúde
          </Text>
        </Box>
      </Box>
      <Box>
        <Show above="sm">
          <HStack spacing={'8'}>
            <CustomLink href="#sobre">Sobre</CustomLink>
            <CustomLink href="#acoesSociais">Ações Sociais</CustomLink>
            <CustomLink href="#localizacao">Localização</CustomLink>
            <CustomLink href="#equipe">Equipe</CustomLink>
            <CustomLink href="#locaisDePrestacao">
              Locais de Prestação
            </CustomLink>
            {/* <CustomLink href="#transparencia">Transparencia</CustomLink> */}
          </HStack>
        </Show>
      </Box>
    </SimpleGrid>
  );
};

export default Header;
