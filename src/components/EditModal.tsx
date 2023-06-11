import {
  Button,
  Input,
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
import { Item } from "../entities/Item";

type EditModalProps = {
  item: Item;
  isOpen: boolean;
  onClose: () => void;
  editItem: (id: string, title: string) => void;
};

export const EditModal: React.FC<EditModalProps> = (props) => {
  const [input, setInput] = useState("");

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit item</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Title</Text>
          <Input
            width="100%"
            onChange={(ev) => {
              const newValue = ev.currentTarget.value;
              setInput(newValue);
            }}
            defaultValue={props.item.title}
          />
        </ModalBody>

        <ModalFooter>
          <Button mr={3} onClick={props.onClose}>
            Close
          </Button>
          <Button
            colorScheme="green"
            onClick={() => {
              props.editItem(props.item.id, input);
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
