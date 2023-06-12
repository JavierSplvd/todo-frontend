import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

type CreateModalProps = {
  onSubmit: (body: { title: string; done: boolean }) => void;
  isOpen: boolean;
  onClose: () => void;
};

export const CreateModal: React.FC<CreateModalProps> = (props) => {
  const [input, setInput] = useState("");

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit item</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text marginBottom="0.5rem">Title</Text>
          <Input
            width="100%"
            placeholder="Add a new task"
            onChange={(ev) => {
              const newValue = ev.currentTarget.value;
              setInput(newValue);
            }}
          />
        </ModalBody>

        <ModalFooter>
          <Button mr={3} onClick={props.onClose}>
            Close
          </Button>
          <Button
            colorScheme="green"
            onClick={() => {
              props.onSubmit({
                title: input,
                done: false,
              });
              props.onClose();
            }}
          >
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
