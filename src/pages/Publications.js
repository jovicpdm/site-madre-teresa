import { Box, Center, SimpleGrid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import HeadPage from '../components/headPage';
import TextCaption from '../components/textCaption';
import TimeTableButton from '../components/timeTableButton';

const Publications = () => {
  const [timeTable, setTimeTable] = useState([]);

  useEffect(() => {
    fetch('./escalasHMM.json', {
      headers: {
        Accept: 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => setTimeTable(res.timeTable));
  }, []);

  console.log(timeTable);

  return (
    <Box>
      <HeadPage
        title="Escalas"
        description="Veja aqui as escalas previstas e executadas dos hospitais que prestamos serviços"
      />
      <Center padding={[4, 8]} display="flex" flexDirection="column">
        <TextCaption>Hospital Municipal de Marabá</TextCaption>
        <SimpleGrid paddingY={[4, 8]} columns={[1, 3]} spacing={[4, 8]}>
          {timeTable.map((scale, index) => {
            return (
              <TimeTableButton
                key={index}
                href={scale.doc}
                title={scale.title}
              />
            );
          })}
        </SimpleGrid>
      </Center>
    </Box>
  );
};

export default Publications;
