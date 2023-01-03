import React from 'react';
import { Img, List, Stack } from '@chakra-ui/react';

import TeamSpirit from '../images/undraw_team_spirit.svg';
import ListTitle from '../components/listTitle';
import ListComponent from '../components/listComponent';
import SectionTitle from '../components/sectionTitle';

const Hall = () => {
  return (
    <>
      <Stack direction={'column'} align='center' id='hall'>
        <SectionTitle>Hall de membros</SectionTitle>
        <Stack direction={['column-reverse', 'row']}>
          <List padding={'12px'} textAlign="center">
            <ListTitle>Histórico de Presidentes</ListTitle>
            <ListComponent
              name="John Lennon Sousa de Oliveira"
              office="1º Presidente"
            />
            <ListComponent
              name="Emanuella Ramabir Carvalho Cunha Gomes Abrantes"
              office="2º Presidente"
            />
            <ListComponent name="Bruna" office="3º Presidente" />
            <ListComponent
              name="Anna Rayssa Lopes da Silveira "
              office="4º Presidente (atual)"
            />
            <ListTitle>Equipe Atual</ListTitle>
            <ListComponent
              name="Enf. Anna Rayssa Lopes da Silveira"
              office="Presidente"
            />
            <ListComponent
              name="Servidora Maria Cândida Ferreira de Sousa"
              office="Departamento Financeiro"
            />
            <ListComponent
              name="Contabilista Santino Rodrigues"
              office="Consultor Administrativo"
            />
            {/* <ListComponent
              name="Médico Dr. Rodrigo Carvalho Gundim"
              office="Responsável Técnico junto ao CRM-PA"
            /> */}
            <ListComponent
              name="Robson Carneiro"
              office="Supervisor Operacional"
            />
            <ListComponent
              name="João Victor Morais"
              office="Desenvolvedor de Software"
            />
          </List>
          <Img src={TeamSpirit} />
        </Stack>
      </Stack>
    </>
  );
};

export default Hall;
