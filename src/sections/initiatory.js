import { Center, Img, Text } from '@chakra-ui/react';
import React from 'react';
import CustomContainer from '../components/customContainer';

import MedicineFigure from '../images/undraw_medicine.svg';

const Initiatory = () => {
  return (
    <CustomContainer id="initiatory">
      <Center margin={['12px', '24px']}>
        <Text
          textAlign="center"
          maxW="300px"
          fontSize={['16px', '2xl']}
          fontWeight="medium"
        >
          Um novo jeito de levar saúde a quem precisa. Estamos comprometidos com
          a saúde e com o bem estar da população.
        </Text>
      </Center>
      <Img src={MedicineFigure} margin={['1rem 0', '1.5rem 0']}></Img>
    </CustomContainer>
  );
};

export default Initiatory;
