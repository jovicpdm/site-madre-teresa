import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';

const CustomContainer = props => {
  return (
    <SimpleGrid id={props.id}
      columns={[1, 2]}
      bg={props.bg}
      padding={['12px', '24px']}
      alignItems='center'
    >
      {props.children}
    </SimpleGrid>
  );
};

export default CustomContainer;
