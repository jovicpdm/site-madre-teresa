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
import Pallete from '../styles/pallete';
import CustomLink from '../components/customLink';

const Header = () => {
  return (
    <SimpleGrid
      columns={[1, 2]}
      bg={Pallete.primaryLight}
      padding={['12px', '24px']}
    >
      <Box display="flex" mt={2} alignItems="center">
        <Img
          marginRight={8}
          height={[24]}
          borderRadius="full"
          src="https://jnkpsgcgjfgothmxgbue.supabase.co/storage/v1/object/sign/imt/Instagram%20post%20-%201.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbXQvSW5zdGFncmFtIHBvc3QgLSAxLnBuZyIsInRyYW5zZm9ybWF0aW9ucyI6IiIsImlhdCI6MTY3MjE2NzAzOSwiZXhwIjoxOTg3NTI3MDM5fQ.2ZIxUzzE9FPYWgwEKjtjcg0Stz1tagWu9MbBVrP_Nvo"
        />
        <Box textAlign={['center', 'left']} flexDirection="row">
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
