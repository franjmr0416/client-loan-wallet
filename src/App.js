import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import Login from './pages/Login';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center">
        <Login />
      </Box>
    </ChakraProvider>
  );
}

export default App;
