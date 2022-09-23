import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const CityAccordion = props => {
  return (
    <Accordion
      alignItems={'center'}
      bg="white"
      allowToggle
      allowMultiple
      margin={['8px', '12px']}
      maxWidth="400px"
      minWidth={['90%', '400px']}
      borderRadius="16px"
    >
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box textAlign="center" flex="1">
              <Text fontSize={['16px', '20px']}>{props.city}</Text>
            </Box>
            <AccordionIcon animation="alternate" />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {props.hospitals.map(hospital => (
            <>
              <Text fontSize={['16px', '16px']} fontWeight="medium">
                {hospital.name}
              </Text>
              <Text fontSize="14px" fontWeight="light">
                {hospital.address}
              </Text>
            </>
          ))}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default CityAccordion;
