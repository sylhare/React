import React from 'react';
import { Box, Flex, HStack, VStack } from '@chakra-ui/react';

export const ExampleAligned = (): React.JSX.Element => {

  return (
    <>
      <Box margin={4} padding={4} border="1px solid lightgray">
        <HStack spacing={4}>
          <Box w="100px" h="10" bg="yellow.200"/>
          <Box w="100px" h="10" bg="teal.200"/>
          <Box w="100px" h="10" bg="pink.200"/>
        </HStack>
      </Box>
      <Box margin={4} padding={4} border="1px solid lightgray">
        <VStack spacing={4}>
          <Box w="100px" h="10" bg="blue.200"/>
          <Box w="100px" h="10" bg="green.200"/>
          <Box w="100px" h="10" bg="red.200"/>
        </VStack>
      </Box>
      <Box margin={4} padding={4} border="1px solid lightgray">
        <Flex direction="row" justify="space-between" align="center">
          <Box w="100px" h="50px" bg="tomato"/>
          <Box w="100px" h="50px" bg="dodgerblue"/>
          <Box w="100px" h="50px" bg="orange"/>
        </Flex>
      </Box>
    </>
  );
};