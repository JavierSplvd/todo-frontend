import {
  Button,
  ChakraProvider,
  Flex,
  Image,
  Input,
  Text,
  theme,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { deleteItem } from "./api/deleteItem";
import { postItem } from "./api/postItem";
import { CreateModal } from "./components/CreateModal";
import { ItemList } from "./components/ItemList";
import { Item } from "./entities/Item";
import { editItem } from "./api/editItem";
import { getItemsWithFilter } from "./api/getItemsWithFilter";

export const App = () => {
  const [items, setItems] = useState<Item[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  useEffect(() => {
    getItemsWithFilter().then((res) => {
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
        getItemsWithFilter().then((res) => {
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

  const onCreate = (body: { title: string; done: boolean }) => {
    postItem(body).then((res) => {
      if (res === 200) {
        toast({
          title: "Item created.",
          status: "success",
          duration: 2000,
          isClosable: false,
        });
        getItemsWithFilter().then((res) => {
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

  const onEdit = (body: { id: string; title: string; done: boolean }) => {
    editItem(body).then((res) => {
      if (res === 200) {
        toast({
          title: "Item edited.",
          status: "success",
          duration: 2000,
          isClosable: false,
        });
        getItemsWithFilter().then((res) => {
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
          flexDirection="column"
          alignItems="center"
          gap="1rem"
          width="100%"
          maxWidth="45rem"
        >
          <Image height="4rem" width="4rem" src="android-chrome-512x512.png" />
          <Flex width="100%" justifyContent="space-between">
            <Text fontSize="2xl">Your tasks:</Text>
            <Button onClick={onOpen}>Add task</Button>
          </Flex>
          <Input
            placeholder="Search"
            onChange={(ev) => {
              const newValue = ev.currentTarget.value;
              getItemsWithFilter(newValue === "" ? undefined : newValue).then(
                (res) => {
                  if (res) setItems(res);
                }
              );
            }}
          ></Input>
          <CreateModal isOpen={isOpen} onClose={onClose} onSubmit={onCreate} />
          <ItemList items={items} onDelete={onDelete} editItem={onEdit} />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};
