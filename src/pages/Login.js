import {
  Heading,
  VStack,
  Text,
  Divider,
  Box,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Icon,
  Input,
} from '@chakra-ui/react';
import ButtonCustom from '../components/ButtonCustom';
import PageContainer from '../layouts/PageContainer';
import { FaRegEnvelope, FaLock } from 'react-icons/fa';

const Login = () => {
  return (
    <PageContainer>
      <Box bg="white" rounded="lg" p={5} m={5} boxShadow="lg">
        <Heading marginBottom={'1.5rem'}>Login</Heading>
        <form>
          <VStack>
            <FormControl>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <InputGroup>
                <InputLeftElement children={<Icon as={FaRegEnvelope} />} />
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@example.com"
                  focusBorderColor="teal.400"
                />
              </InputGroup>
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <InputGroup>
                <InputLeftElement children={<Icon as={FaLock} />} />
                <Input
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  focusBorderColor="teal.400"
                />
              </InputGroup>
            </FormControl>
            <ButtonCustom width="100%">Sign in</ButtonCustom>

            <Divider pt={4} />
            <Text>Don't have an account?</Text>
            <ButtonCustom width="100%" variant="outline">
              Sign up
            </ButtonCustom>
          </VStack>
        </form>
      </Box>
    </PageContainer>
  );
};
export default Login;
