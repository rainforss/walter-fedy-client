import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Flex } from "@chakra-ui/layout";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormHelperText,
} from "@chakra-ui/react";
import * as React from "react";

interface ITextInputProps {
  label: string;
  value?: string;
  writable?: boolean;
}

const TextInput: React.FunctionComponent<ITextInputProps> = ({
  label,
  value,
  writable,
}) => {
  return (
    <FormControl my={4}>
      <Flex align="center" justify="space-between">
        <FormLabel mx={4} my={1} whiteSpace="nowrap" fontWeight="normal">
          {label}
        </FormLabel>
        <NumberInput w="120px" value={value} isDisabled={!writable}>
          <NumberInputField value={value} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Flex>
      <FormHelperText hidden={writable} mx={4} fontSize="0.6rem">
        This field is read only
      </FormHelperText>
    </FormControl>
  );
};

export default TextInput;
