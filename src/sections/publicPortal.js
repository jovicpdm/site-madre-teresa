import { Box, Stack } from '@chakra-ui/react';
import React from 'react';
import SectionTitle from '../components/sectionTitle';

const PublicPortal = () => {
  return (
    <Stack
      id="public"
      padding={[8, 16]}
      display="flex"
      flexDirection="column"
      justifyContent={'center'}
    >
      <SectionTitle>Publicações </SectionTitle>
    </Stack>
  );
};

export default PublicPortal;
