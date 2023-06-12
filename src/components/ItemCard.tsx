import {
  Box,
  Button,
  Divider,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Item } from "../entities/Item";
import { EditModal } from "./EditModal";

type ItemProps = {
  item: Item;
  onDelete: (id: string) => void;
  editItem: (body: { id: string; title: string; done: boolean }) => void;
};

export const ItemCard: React.FC<ItemProps> = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex alignItems="center" height="3rem" justifyContent="space-between">
        <Text>{props.item.title}</Text>
        <Box>
          <Button
            size="xs"
            marginRight="1rem"
            colorScheme="green"
            onClick={onOpen}
          >
            edit
          </Button>
          <Button size="xs" onClick={() => props.onDelete(props.item.id)}>
            delete
          </Button>
        </Box>
      </Flex>
      <EditModal
        item={props.item}
        isOpen={isOpen}
        onClose={onClose}
        editItem={props.editItem}
      />
      <Divider />
    </>
  );
};
