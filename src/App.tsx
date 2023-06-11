import {
  ChakraProvider,
  Flex,
  Image,
  Text,
  theme,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { deleteItem } from "./api/deleteItem";
import { getItems } from "./api/getItems";
import { postItem } from "./api/postItem";
import { CreateInput } from "./components/CreateInput";
import { ItemList } from "./components/ItemList";
import { Item } from "./entities/Item";
import { editItem } from "./api/editItem";

export const App = () => {
  const [items, setItems] = useState<Item[]>([]);
  const toast = useToast();

  useEffect(() => {
    getItems().then((res) => {
      if (res) setItems(res);
    });
  }, []);

  const onDelete = (id: string) => {
    deleteItem(id).then((res) => {
      if (res === 200) {
        toast({
          title: "Item deleted.",
          status: "success",
          duration: 2000,
          isClosable: false,
        });
        getItems().then((res) => {
          if (res) setItems(res);
        });
      } else {
        toast({
          title: "Error.",
          status: "error",
          duration: 2000,
          isClosable: false,
        });
      }
    });
    return;
  };

  const onCreate = (body: { title: string }) => {
    postItem(body).then((res) => {
      if (res === 200) {
        toast({
          title: "Item created.",
          status: "success",
          duration: 2000,
          isClosable: false,
        });
        getItems().then((res) => {
          if (res) setItems(res);
        });
      } else {
        toast({
          title: "Error.",
          status: "error",
          duration: 2000,
          isClosable: false,
        });
      }
    });
    return;
  };

  const onEdit = (id: string, title: string) => {
    editItem({ id, title }).then((res) => {
      if (res === 200) {
        toast({
          title: "Item created.",
          status: "success",
          duration: 2000,
          isClosable: false,
        });
        getItems().then((res) => {
          if (res) setItems(res);
        });
      } else {
        toast({
          title: "Error.",
          status: "error",
          duration: 2000,
          isClosable: false,
        });
      }
    });
    return;
  };

  return (
    <ChakraProvider theme={theme}>
      <Flex p="3rem" minH="100vh" flexDirection="column" alignItems="center">
        <ColorModeSwitcher
          justifySelf="flex-end"
          position="absolute"
          top="1rem"
          right="1rem"
        />
        <Flex
          backgroundColor="white"
          flexDirection="column"
          alignItems="center"
          gap="1rem"
          width="100%"
          maxWidth="45rem"
        >
          <Image height="4rem" width="4rem" src="android-chrome-512x512.png" />
          <Text fontSize="2xl">Your tasks:</Text>
          <CreateInput onSubmit={onCreate} />
          <ItemList items={items} onDelete={onDelete} editItem={onEdit} />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};
