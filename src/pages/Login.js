import { Heading, VStack, Text, Divider, Box } from '@chakra-ui/react';
import ButtonCustom from '../components/ButtonCustom';
import PageContainer from '../layouts/PageContainer';
import Footer from '../layouts/Footer';
import FormControlCustom from '../components/FormControlCustom';
import Nav from '../layouts/Nav';

const Login = () => {
  return (
    <PageContainer>
      <Nav />
      <Box bg="white" rounded="lg" p={5} m={5} boxShadow="lg">
        <Heading marginBottom={'1.5rem'}>Login</Heading>
        <form>
          <VStack>
            <FormControlCustom
              identifier="email"
              labelText="Email Address"
              inputType="email"
              placeholder="name@example.com"
              iconFA="FaUser"
            />

            <FormControlCustom
              identifier="password"
              labelText="Password"
              inputType="password"
              placeholder="Enter your password"
              iconFA="FaLock"
            />

            <ButtonCustom width="100%">Sign in</ButtonCustom>

            <Divider pt={4} />
            <Text>Don't have an account?</Text>
            <ButtonCustom width="100%" variant="outline">
              Sign up
            </ButtonCustom>
          </VStack>
        </form>
      </Box>
      <Footer />
    </PageContainer>
  );
};
export default Login;
