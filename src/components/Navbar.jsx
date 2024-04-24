import {
  Box,
  Flex,
  Text,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  scaleFadeConfig,
  transition,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { Link } from "react-scroll";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const navigationArray = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Git-Stats",
    "Contact",
  ];
  return (
    <Box
      position={"fixed"}
      w={"100%"}
      zIndex={5}
      bg={"black"}
      borderRadius={"0 0 1.5rem 1.5rem"}
      borderBottom={"2px solid #689775"}
      p={"0.4rem"}
    >
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        w={"90%"}
        maxW={"1350px"}
        m={"auto"}
      >
        <Box>
          <Text
            as="h1"
            fontFamily={"Satisfy"}
            fontSize={"2rem"}
            color={"#C7493A"}
            ml={"2rem"}
          >
            Mihir
          </Text>
        </Box>
        <Flex
          gap={{ md: "1.1rem", lg: "1.5rem" }}
          fontSize={"1.2rem"}
          display={{ base: "none", md: "flex" }}
        >
          {navigationArray.map((ele) => (
            <Box color={"#A33327"} position={"relative"} _hover={{ color: "#917164", bottom: "0.3rem"}} >
              <Link
                to={ele.toLowerCase()}
                spy={true}
                smooth={true}
                offset={20}
                duration={500}
              >
                {ele}
              </Link>
            </Box>
          ))}
          <Box>
            <Text color={"#C7493A"} position={"relative"} _hover={{ color: "#AD8174", bottom: "0.3rem" }} >
              Resume
            </Text>
          </Box>
        </Flex>
        <Button
          bg={"#C7493A"}
          _hover={{bg: "#A33327"}}
          display={{ md: "none" }}
          ref={btnRef}
          onClick={onOpen}
        >
          <HamburgerIcon cursor={"pointer"} boxSize={6} color="Black" />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent
            bg={"black"}
            style={{ width: "15rem" }}
            borderLeft={"2px solid #689775"}
          >
            <DrawerCloseButton color={"#689775"} />
            <DrawerHeader></DrawerHeader>
            <DrawerBody>
              <Flex flexDirection={"column"} gap={"1rem"}>
                {navigationArray.map((ele) => (
                  <Box
                    color={"#A33327"}
                    p={"0.2rem 1rem"}
                    border={"1px solid transparent"}
                    _hover={{ color: "#917164", border: "1px solid #689775"}}
                    fontSize={"1.4rem"}
                    onClick={onClose}
                  >
                    <Link
                      to={ele.toLowerCase()}
                      spy={true}
                      smooth={true}
                      offset={20}
                      duration={500}
                      onClick={onClose}
                    >
                      {ele}
                    </Link>
                  </Box>
                ))}
                <Box onClick={onClose} p={"0.2rem 1rem"} fontSize={"1.4rem"} border={"1px solid transparent"} _hover={{border: "1px solid #689775"}}>
                  <Text color={"#A33327"} _hover={{ color: "#917164" }}>Resume</Text>
                </Box>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
};

export default Navbar;
