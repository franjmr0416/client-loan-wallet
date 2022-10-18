import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Box,
  Icon,
  Button,
  Text,
} from '@chakra-ui/react';
import { FaBars, FaWallet, FaUserCog, FaSignOutAlt } from 'react-icons/fa';

const Nav = () => {
  return (
    <Box bg="white" px={4} boxShadow={'sm'} w={'100%'}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Flex>
          <Stack direction={'row'} alignItems={'center'}>
            <Icon as={FaWallet} boxSize={'2em'} color={'teal.400'} />
            <Text fontSize={'lg'} as={'b'}>
              Loan Wallet
            </Text>
          </Stack>
        </Flex>

        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}
            >
              <Icon as={FaBars} boxSize={'2em'} color={'gray.500'} />
            </MenuButton>
            <MenuList alignItems={'center'}>
              <MenuItem>
                <Icon as={FaWallet} mr={'2'} />
                Loan list
              </MenuItem>
              <MenuItem>
                <Icon as={FaUserCog} mr={'2'} />
                Account Settings
              </MenuItem>
              <MenuItem>
                <Icon as={FaSignOutAlt} mr={'2'} />
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
};
export default Nav;
