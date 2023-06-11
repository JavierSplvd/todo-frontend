import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import { Item } from "../entities/Item";

type ItemProps = {
  item: Item;
  onDelete: (id: string) => void;
};

export const ItemCard: React.FC<ItemProps> = (props) => {
  return (
    <>
      <Flex alignItems="center" height="3rem" justifyContent="space-between">
        <Text>{props.item.title}</Text>
        <Box>
          <Button size="xs" marginRight="1rem" colorScheme="green">
            edit
          </Button>
          <Button size="xs" onClick={() => props.onDelete(props.item.id)}>
            delete
          </Button>
        </Box>
      </Flex>
      <Divider />
    </>
  );
};
