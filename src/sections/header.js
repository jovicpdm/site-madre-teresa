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
      bg={Pallete.primaryDark}
      padding={['12px', '16px']}
      // bgImage={googleDriveView + "1YvZ-KS7x1RsDlhmgnGxapceWu2GmtAzH"}
    >
      <Box display="flex" mt={2} alignItems="center">
        <Img
          marginRight={8}
          height={[16, 24]}
          borderRadius="full"
          src="https://jnkpsgcgjfgothmxgbue.supabase.co/storage/v1/object/sign/imt/Instagram%20post%20-%201.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbXQvSW5zdGFncmFtIHBvc3QgLSAxLnBuZyIsInRyYW5zZm9ybWF0aW9ucyI6IiIsImlhdCI6MTY3MjE2NzAzOSwiZXhwIjoxOTg3NTI3MDM5fQ.2ZIxUzzE9FPYWgwEKjtjcg0Stz1tagWu9MbBVrP_Nvo"
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
            <CustomLink href="#locaisDePrestacao">Locais de Prestação</CustomLink>
            <CustomLink href="#transparencia">Transparencia</CustomLink>
          </HStack>
        </Show>
      </Box>
    </SimpleGrid>
  );
};

export default Header;
