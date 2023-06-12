import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text
} from "@chakra-ui/react";

type DeleteModalProps = {
  id: string;
  isOpen: boolean;
  onClose: () => void;
  onDelete: (id: string) => void;
};

export const DeleteModal: React.FC<DeleteModalProps> = (props) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit item</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text marginBottom="0.5rem">Do you want to delete this task?</Text>
        </ModalBody>

        <ModalFooter>
          <Button mr={3} onClick={props.onClose}>
            Close
          </Button>
          <Button
            colorScheme="red"
            onClick={() => {
              props.onDelete(props.id);
              props.onClose();
            }}
          >
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
