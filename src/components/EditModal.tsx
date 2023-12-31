import {
  Button,
  Checkbox,
  Flex,
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
  editItem: (body: { id: string; title: string; done: boolean }) => void;
};

export const EditModal: React.FC<EditModalProps> = (props) => {
  const [input, setInput] = useState(props.item.title);
  const [isDone, setIsDone] = useState(props.item.done);

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
            onChange={(ev) => {
              const newValue = ev.currentTarget.value;
              setInput(newValue);
            }}
            defaultValue={props.item.title}
            marginBottom="2rem"
          />
          <Flex justifyContent="space-between">
            <Text>Mark as done</Text>
            <Checkbox
              onChange={(ev) => {
                const newValue = Boolean(ev.currentTarget.checked);
                console.log("newvalue", newValue, ev.currentTarget.checked);
                setIsDone(newValue);
              }}
              defaultChecked={props.item.done}
              marginBottom="2rem"
            />
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button mr={3} onClick={props.onClose}>
            Close
          </Button>
          <Button
            colorScheme="green"
            onClick={() => {
              props.editItem({
                id: props.item.id,
                title: input,
                done: isDone,
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
