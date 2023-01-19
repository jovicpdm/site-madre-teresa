import React from 'react';
import {  Center, Img, Text } from '@chakra-ui/react';

import CustomContainer from '../components/customContainer';
import MedicineFigure from '../images/undraw_medicine.svg';
import { googleDriveView } from '../utils/consts';

const Initiatory = () => {
  return (
    <CustomContainer id="initiatory">
      <Center margin={['12px', '24px']} display="flex" flexDirection={'column'}>
        <iframe
          style={{
            borderRadius: 8,
          }}
          height="300"
          src={googleDriveView + '1Es5M0Wx3ompp77jdX5igReiX9923gssq'}
          title="Apresentação "
          frameborder="2"
          allowFullScreen
        ></iframe>
        <Text
          marginTop={[2, 4]}
          textAlign="center"
          maxW="300px"
          fontSize={['14px', '1xl']}
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
