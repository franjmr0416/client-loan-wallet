import { Flex } from '@chakra-ui/react';

const PageContainer = props => {
  return (
    <Flex
      minHeight={'100vh'}
      width="100%"
      alignItems={'center'}
      justifyContent="top"
      flexDirection={'column'}
      bg="gray.100"
    >
      {props.children}
    </Flex>
  );
};
export default PageContainer;
