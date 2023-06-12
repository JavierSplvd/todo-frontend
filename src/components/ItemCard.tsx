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
import { DeleteModal } from "./DeleteModal";

type ItemProps = {
  item: Item;
  onDelete: (id: string) => void;
  editItem: (body: { id: string; title: string; done: boolean }) => void;
};

export const ItemCard: React.FC<ItemProps> = (props) => {
  const {
    isOpen: isOpenEdit,
    onOpen: onOpenEdit,
    onClose: onCloseEdit,
  } = useDisclosure();
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();

  return (
    <>
      <Flex alignItems="center" height="3rem" justifyContent="space-between">
        <Text>
          {props.item.title} {props.item.done ? <span>&#10004;</span> : <></>}
        </Text>
        <Box>
          <Button size="xs" marginRight="1rem" onClick={onOpenEdit}>
            edit
          </Button>
          <Button variant="ghost" size="xs" onClick={onOpenDelete}>
            delete
          </Button>
        </Box>
      </Flex>
      <DeleteModal
        id={props.item.id}
        isOpen={isOpenDelete}
        onClose={onCloseDelete}
        onDelete={props.onDelete}
      />
      <EditModal
        item={props.item}
        isOpen={isOpenEdit}
        onClose={onCloseEdit}
        editItem={props.editItem}
      />
      <Divider />
    </>
  );
};
