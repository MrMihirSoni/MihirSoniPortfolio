import {
  Link,
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
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Mihir_Soni_Resume from "../assets/Mihir-Soni-Resume.pdf";

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
  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1bV1Ic1J7XXfdNCD4Cx9C52xfMctyFWO1/view?usp=sharing",
      "_blank"
    );
  };

  const handleNavigation = (sectionId) => {
    const section = document.getElementById(sectionId.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    onClose();
  };

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
            <Box
              key={ele} // Add a key prop
              color={"#A33327"}
              position={"relative"}
              _hover={{ color: "#917164", bottom: "0.3rem" }}
            >
              <Link as="a" href={`#${ele.toLowerCase()}`}>
                {ele}
              </Link>
            </Box>
          ))}
          <Box>
            <Text
              color={"#C7493A"}
              position={"relative"}
              _hover={{ color: "#AD8174", bottom: "0.3rem" }}
              onClick={handleResumeClick}
            >
              <a
                href={Mihir_Soni_Resume}
                target="_blank"
                download="Mihir-Soni-Resume"
              >
                Resume
              </a>
            </Text>
          </Box>
        </Flex>
        <Button
          bg={"#C7493A"}
          _hover={{ bg: "#A33327" }}
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
                    key={ele} // Add a key prop
                    as="a"
                    color={"#A33327"}
                    p={"0.2rem 1rem"}
                    border={"1px solid transparent"}
                    _hover={{ color: "#917164", border: "1px solid #689775" }}
                    fontSize={"1.4rem"}
                    onClick={() => handleNavigation(ele)}
                  >
                    <Text as="p">{ele}</Text>
                  </Box>
                ))}
                <Box
                  onClick={onClose}
                  p={"0.2rem 1rem"}
                  fontSize={"1.4rem"}
                  border={"1px solid transparent"}
                  _hover={{ border: "1px solid #689775" }}
                >
                  <Text
                    color={"#A33327"}
                    _hover={{ color: "#917164" }}
                    onClick={handleResumeClick}
                    fontWeight={"bold"}
                  >
                    <a
                      href={Mihir_Soni_Resume}
                      target="_blank"
                      download="Mihir-Soni-Resume"
                    >
                      Resume
                    </a>
                  </Text>
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
