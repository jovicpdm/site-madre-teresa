import React from 'react';
import { Img, Center, Button, Link } from '@chakra-ui/react';
import { BsInstagram } from 'react-icons/bs';

import Pallete from '../styles/pallete';
import Question from '../images/undraw_questions.svg';
import SectionTitle from '../components/sectionTitle';
import CustomText from '../components/customText';
import CustomContainer from '../components/customContainer';

const About = () => {
  return (
    <CustomContainer bg={Pallete.primaryLight} id="sobre">
      <Img src={Question} margin={['1rem 0', '1.5rem 0']} />
      <Center flexDirection={'column'}>
        <SectionTitle>Sobre nós</SectionTitle>
        <CustomText>
          Nós somos uma organização social <b>sem fins lucrativos</b> que atua
          no segmento de gestão em saúde.
          <br />
          <br />
          Fundado em 16 de Dezembro de 2015. Realizamos a gestão compartilhada
          com o Poder Público, na área de saúde nas esferar municipal, estadual
          e federal.
          <br />
          <br />
          Atuamos em todo o território nacional desenvolvendo projetos com foco
          na pesquisa e inovação de práticas de gestão de saúde de forma
          complementar. Trabalhamos pela qualidade da operacionalização dos
          serviços de atendimento.
          <br />
          <br />
          Com base nos princípios que norteiam nossa atuação, como a humanização
          do atendimento, e ética e a quelidade do serviço prestrado, promovemos
          ações em saúde.
        </CustomText>

        <Link
          href="https://www.instagram.com/institutomadretereza/"
          isExternal
          textDecoration={'none'}
        >
          <Button
            marginY={8}
            color={'whiteAlpha.900'}
            bg={Pallete.secondary}
            leftIcon={<BsInstagram />}
            _hover={{
              bg: '#f7f7f7',
              color: '#8653B2',
            }}
            fontSize={[12, 16]}
          >
            Conheça nossa página oficial
          </Button>
        </Link>
      </Center>
    </CustomContainer>
  );
};

export default About;
