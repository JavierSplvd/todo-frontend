import { Box } from "@chakra-ui/react";
import { Item } from "../entities/Item";
import { ItemCard } from "./ItemCard";

type ItemListProps = {
  items: Item[];
  onDelete: (id: string) => void;
  editItem: (id: string, title: string) => void;
};

export const ItemList: React.FC<ItemListProps> = (props) => {
  console.log(props);
  return (
    <Box height="calc(100vh - 20rem)" width="100%" overflowY="auto">
      {props.items.map((it, index) => (
        <ItemCard
          key={index}
          item={it}
          onDelete={props.onDelete}
          editItem={props.editItem}
        />
      ))}
    </Box>
  );
};
