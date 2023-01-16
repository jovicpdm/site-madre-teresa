import { Button, Link } from '@chakra-ui/react';
import React from 'react';

const PortalButton = props => {
  return (
    <Link href={props.href}>
      <Button>{props.children}</Button>
    </Link>
  );
};

export default PortalButton;
