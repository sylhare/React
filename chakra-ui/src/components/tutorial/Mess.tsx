import React from 'react';
//import useBoolean from './../../hooks/useBoolean';
import { Box, Button, Text } from '@chakra-ui/react';
import useBoolean from '@_hooks/useBoolean';


export const Mess = () => {
  const { value: isToggled, setTrue, setFalse } = useBoolean();

  return (
    <Box>
      <Text pb={2}>The toggle is <Box as='span' fontWeight={'semibold'}>{isToggled ? 'ON 💡' : 'OFF 💤'}</Box></Text>
      <Button m={1} variant={'solid'} onClick={setTrue}>Turn ON</Button>
      <Button m={1} variant={'outline'} onClick={setFalse}>Turn Off</Button>
    </Box>
  );
}