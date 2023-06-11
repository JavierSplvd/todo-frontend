import { useState } from "react";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

type CreateInputProps = {
  onSubmit: (body: { title: string }) => void;
};

export const CreateInput: React.FC<CreateInputProps> = (props) => {
  const [input, setInput] = useState("");

  return (
    <InputGroup>
      <Input
        width="100%"
        placeholder="Add a new task"
        onChange={(ev) => {
          const newValue = ev.currentTarget.value;
          setInput(newValue);
        }}
      />
      <InputRightElement width="5rem">
        <Button
          colorScheme="blue"
          borderTopLeftRadius="0"
          borderBottomLeftRadius="0"
          width="100%"
          onClick={() => props.onSubmit({ title: input })}
        >
          Add
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};
