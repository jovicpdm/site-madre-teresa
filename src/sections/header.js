import React from 'react';
import {
  Box,
  Heading,
  HStack,
  Show,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import Pallete from '../styles/pallete';
import CustomLink from '../components/customLink';

const Header = () => {
  return (
    <SimpleGrid
      columns={[1, 2]}
      bg={Pallete.primaryLight}
      padding={['12px', '24px']}
    >
      <Box>
        <Box textAlign={['center', 'left']}>
          <Heading color="#3CACA5">Instituto Madre Teresa</Heading>
          <Text
            fontSize={['16px', '20px']}
            fontWeight={'medium'}
            color={Pallete.primary}
          >
            Um novo conceito em gestão de saúde
          </Text>
        </Box>
      </Box>
      <Box>
        <Show above="sm">
          <HStack spacing={'8'}>
            <CustomLink href="#about">Quem somos</CustomLink>
            <CustomLink href="#socialActions">Ações Sociais</CustomLink>
            <CustomLink href="#localization">Onde estamos</CustomLink>
            <CustomLink href="#hall">Equipe</CustomLink>
            <CustomLink href="#cities">Locais de Prestação</CustomLink>
          </HStack>
        </Show>
      </Box>
    </SimpleGrid>
  );
};

export default Header;
