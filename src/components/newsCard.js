import React from 'react';
import { Box, Image, Stack, Text } from '@chakra-ui/react';

import { googleDriveView } from './../utils/consts';
import Carousel from 'better-react-carousel';

const NewsCard = ({ title, description, imgs }) => {

  return (
    <Box padding={4} shadow="xl" borderRadius="16px">
      <Stack spacing={8}>
        <Text fontSize={[16, 24]} fontWeight="medium" textAlign="center">{title}</Text>
        <Text fontSize={[12, 16]}>{description}</Text>
        <Carousel cols={[3]} rows={1} gap={10} loop>
          {imgs.map(img => {
            return (
              <Carousel.Item width={'30%'} allowFullScreen={true}>
                <Image src={googleDriveView + img} />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Stack>
    </Box>
  );
};

export default NewsCard;
