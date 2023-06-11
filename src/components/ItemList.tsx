import { Box } from "@chakra-ui/react";
import { Item } from "../entities/Item";
import { ItemCard } from "./ItemCard";

type ItemListProps = {
  items: Item[];
  onDelete: (id: string) => void;
};

export const ItemList: React.FC<ItemListProps> = (props) => {
  console.log(props);
  return (
    <Box width="100%">
      {props.items.map((it, index) => (
        <ItemCard key={index} item={it} onDelete={props.onDelete} />
      ))}
    </Box>
  );
};
