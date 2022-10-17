import { Container, Icon, Link, Stack, Text } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <Container
      maxW="container.lg"
      marginTop="auto"
      paddingTop="1.5rem"
      paddingBottom="1.5rem"
    >
      <Stack
        flexDirection={['column', 'row']}
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack isInline fontWeight="500" fontSize="sm">
          <Text>&copy; 2022</Text>
          <Link href="#" fontWeight="bold">
            Loan Wallet
          </Link>
          <Text>&mdash; All rights reserved</Text>
        </Stack>
        <Stack isInline fontWeight="500" fontSize="sm">
          <Link href="#">Private Policy</Link>
          <Link
            href="https://github.com/franjmr0416/client-loan-wallet"
            isExternal
          >
            <Icon as={FaGithub} marginRight="0.2rem" verticalAlign="middle" />
            Github repository
          </Link>
          <Link href="https://linkedin.com/in/francisco-jmr" isExternal>
            <Icon as={FaLinkedin} marginRight="0.2rem" verticalAlign="middle" />
            Contact
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
};
export default Footer;
