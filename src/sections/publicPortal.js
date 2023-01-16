import { Box, Button, Stack } from '@chakra-ui/react';
import React from 'react';
import PortalButton from '../components/portalButton';
import SectionTitle from '../components/sectionTitle';
import Pallete from '../styles/pallete';

const PublicPortal = () => {
  return (
    <Stack
      id="public"
      padding={[8, 16]}
      display="flex"
      flexDirection="column"
      justifyContent={'center'}
      alignItems="center"
    >
      <SectionTitle>Publicações </SectionTitle>
      <PortalButton href="/noticias">Ações Sociais</PortalButton>
      <PortalButton href="/public">Escalas</PortalButton>
    </Stack>
  );
};

export default PublicPortal;
