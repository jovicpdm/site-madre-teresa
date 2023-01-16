import { Button, Link } from '@chakra-ui/react';
import React from 'react';

const ScaleButton = (props) => {
  return (
    <Link href={props.href}>
      <Button></Button>
    </Link>
  );
};

export default ScaleButton;
