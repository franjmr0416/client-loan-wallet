import {
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
} from '@chakra-ui/react';
import * as icons from 'react-icons/fa';

const FormControlCustom = props => {
  const { identifier, labelText, inputType, placeholder, iconFA } = props;

  return (
    <FormControl>
      <FormLabel htmlFor={identifier}>{labelText}</FormLabel>
      <InputGroup>
        <InputLeftElement children={<Icon as={icons[iconFA]} />} />
        <Input
          type={inputType}
          name={identifier}
          id={identifier}
          placeholder={placeholder}
          focusBorderColor="teal.400"
        />
      </InputGroup>
    </FormControl>
  );
};
export default FormControlCustom;
