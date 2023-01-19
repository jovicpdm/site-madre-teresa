import React from 'react';
import { Box, Stack } from '@chakra-ui/react';

import SectionTitle from '../components/sectionTitle';
import CustomText from '../components/customText';
import CardSocialAction from '../components/cardSocialAction';

const SocialActions = () => {
  return (
    <Stack
      alignItems="center"
      padding={['12px', '24px']}
      marginBottom={['12px', '24px']}
      id="acoesSociais"
    >
      <Box textAlign="center" marginBottom={['12px', '24px']}>
        <SectionTitle>Compromisso com a sociedade</SectionTitle>
        <CustomText>
          Nos preocupamos com o bem estar do cidadão e acreditamos em um mundo
          fraterno. Pensando nisso temos dois projetos sociais para ajudar nesse
          processo
        </CustomText>
      </Box>
      <Box>
        <Stack direction={['column', 'row']}>
          <CardSocialAction
            img="https://jnkpsgcgjfgothmxgbue.supabase.co/storage/v1/object/sign/imt/20220914_194235.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbXQvMjAyMjA5MTRfMTk0MjM1LmpwZyIsInRyYW5zZm9ybWF0aW9ucyI6IiIsImlhdCI6MTY3MjE2ODg0MywiZXhwIjoxOTg3NTI4ODQzfQ.HtpJ1u619PHlZaT9QYHBAe_X244Bg7SA1_rs--hp2lY"
            title="Projeto Social Ação do Bem - Apoio Familiar"
            desc="Um auxilio financeiro para famílias carentes para uso exclusivo de compra de alimento em supermercados parceiros"
          />
          <CardSocialAction
            img="https://drive.google.com/uc?export=view&id=1MCxE1K5gI39RQecXt6eY84n8kerDKEpl"
            title="Projeto Realizando Sonhos, Resgatando e Formando Cidadãos"
            desc="Projeto de ensino de Jiu Jitsu para as crianças e adolescentes do município de Itupiranga e na Vila Cajazeiras"
          />
        </Stack>
      </Box>
    </Stack>
  );
};

export default SocialActions;
