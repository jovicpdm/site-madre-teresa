import React from 'react';
import { Box, Stack } from '@chakra-ui/react';

import SectionTitle from '../components/sectionTitle';
import CustomText from '../components/customText';
import CardSocialAction from '../components/cardSocialAction';
import { googleDriveView } from '../utils/const';

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
            img={googleDriveView + "1jxKO-56_rNC-_NBrdOE9I9C3bw4wYFJo"}
            title="Projeto Social Ação do Bem - Apoio Familiar"
            desc="Um auxilio financeiro para famílias carentes para uso exclusivo de compra de alimento em supermercados parceiros"
          />
          <CardSocialAction
            img={googleDriveView + '15RPYdoDwHLWOKGlKxNyInnT3-o3eh-Px'}
            title="Projeto Realizando Sonhos, Resgatando e Formando Cidadãos"
            desc="Projeto de ensino de Jiu Jitsu para as crianças e adolescentes do município de Itupiranga e na Vila Cajazeiras"
          />
        </Stack>
      </Box>
    </Stack>
  );
};

export default SocialActions;
