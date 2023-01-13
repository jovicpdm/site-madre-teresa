import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from '../sections/header';
import Initiatory from '../sections/initiatory';
import About from '../sections/about';
import SocialActions from '../sections/socialActions';
import Localization from '../sections/localization';
import Hall from '../sections/hall';
import Cities from '../sections/cities';
import PublicPortal from '../sections/publicPortal';
function App() {
  return (
    <Box>
      <Header />
      <Initiatory />
      <About />
      <SocialActions />
      <Localization />
      <Hall />
      <Cities />
      <PublicPortal />
    </Box>
  );
}

export default App;
