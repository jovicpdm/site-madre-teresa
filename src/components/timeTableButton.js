import { DownloadIcon } from '@chakra-ui/icons';
import { Button, Link } from '@chakra-ui/react';
import React from 'react';
import Pallete from '../styles/pallete';

const TimeTableButton = ({ href, title }) => {
  return (
    <Link
      href={href}
      isExternal
      _hover={{
        textDecoration: 'none',
      }}
    >
      <Button
        bgColor={Pallete.primary}
        minWidth={370}
        color={'white'}
        _hover={{ backgroundColor: '#f7f7f7', color: Pallete.primary }}
        rightIcon={<DownloadIcon />}
      >
        {title}
      </Button>
    </Link>
  );
};

export default TimeTableButton;
