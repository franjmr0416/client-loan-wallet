import { Button } from '@chakra-ui/react';

const ButtonCustom = props => {
  const { leftIcon, variant } = props;
  return (
    <Button
      leftIcon={leftIcon}
      variant={variant}
      colorScheme="teal"
      {...props}
    />
  );
};
export default ButtonCustom;
