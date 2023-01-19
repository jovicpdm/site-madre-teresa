import { DownloadIcon } from '@chakra-ui/icons';
import { Button, Link } from '@chakra-ui/react';
import React from 'react';
import ColorPalette from '../styles/colorPalette';

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
        bgColor={ColorPalette.primary}
        minWidth={370}
        color={'white'}
        _hover={{ backgroundColor: '#f7f7f7', color: ColorPalette.primary }}
        rightIcon={<DownloadIcon />}
      >
        {title}
      </Button>
    </Link>
  );
};

export default TimeTableButton;
