"use client";

import React, { useState, useEffect, useRef } from "react";

import {
  Grid,
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import BB from "../assets/BeautyBebo.png";
import MihirAi from "../assets/MihirAI.png"

export default function () {
  const [isVisible, setIsVisible] = useState(false);
  const projectRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update visibility state when element is at least 20% in the viewport
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Trigger when 20% of the element is visible
      }
    );

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, []);

  return (
    <Box
      ref={projectRef}
      w={"90%"}
      maxW={"1350px"}
      m={"auto"}
      mt={"1rem"}
      pt={"2rem"}
      pb={"3rem"}
      id="projects"
      opacity={isVisible ? 1 : 0}
      transition="opacity 0.5s ease-in-out"
    >
      <Box>
        <Text
          as={"h3"}
          w={"fit-content"}
          m={"auto"}
          fontSize={{base: "2rem", sm: "2rem", smd: "3rem", md: "4rem"}}
          color={"#689775"}
          _hover={{ color: "#43ad61" }}
          textAlign={"center"}
        >
          My Projects
        </Text>
      </Box>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", xl: "repeat(2, 1fr)" }}
        gap={"2rem"}
      >
        <Center py={6}>
          <Stack
            borderRadius="1rem"
            w={{ base: "100%", sm: "100%",smd: "80%", md: "520px", lg: "680px", xl: "100%" }}
            direction={{ base: "column", lg: "row" }}
            padding={4}
            bg={"rgb(255,255,255,0.1)"}
            _hover={{
              boxShadow: "rgba(200, 200, 200, 0.3) 0 0 15px 15px",
              transition: "box-shadow 0.3s ease-in-out",
            }}
            transition="box-shadow 0.5s ease-in-out"
          >
            <Flex flex={1}>
              <Image objectFit="cover" boxSize="100%" src={BB} alt="#" />
            </Flex>
            <Stack
              flex={1}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              p={1}
              pt={2}
            >
              <Heading
                fontSize={"2xl"}
                fontFamily={"body"}
                color={"#689775"}
                _hover={{ color: "#43ad61" }}
              >
                Beauty Bebo Clone
              </Heading>
              <Text textAlign={"center"} color={"#AD8174"} px={3}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
                autem, commodi excepturi ipsam magni eveniet. Fuga perspiciatis
                asperiores quam autem nesciunt culpa reiciendis corrupti eaque?
                Commodi amet tempora laborum reprehenderit, neque iste saepe
                aliquam.
              </Text>
              <Stack
                align={"center"}
                justify={"center"}
                direction={"row"}
                mt={6}
                flex={1}
                flexWrap={"wrap"}
              >
                <Badge px={2} py={1} bg={"#689775"} fontWeight={"400"}>
                  #React
                </Badge>
                <Badge px={2} py={1} bg={"#689775"} fontWeight={"400"}>
                  #MongoDb
                </Badge>
                <Badge px={2} py={1} bg={"#689775"} fontWeight={"400"}>
                  #Express
                </Badge>
                <Badge px={2} py={1} bg={"#689775"} fontWeight={"400"}>
                  #NodeJS
                </Badge>
              </Stack>

              <Stack
                width={"100%"}
                mt={"2rem"}
                direction={"row"}
                padding={2}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Button
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  bg={"#C7493A"}
                  _hover={{ bg: "#A33327" }}
                  onClick={()=>window.open("https://github.com/MrMihirSoni/BeautyBeboFrontend", "_blank")}
                >
                  GitHub
                </Button>
                <Button
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  bg={"#C7493A"}
                  _hover={{ bg: "#A33327" }}
                  boxShadow={
                    "0px 1px 25px -5px rgb(70 173 99 / 48%), 0 10px 10px -5px rgb(70 173 99 / 43%)"
                  }
                  onClick={()=>window.open("https://mihirsoni-beautybebo.netlify.app", "_blank")}
                >
                  Live
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Center>
        <Center py={6}>
          <Stack
            borderRadius="1rem"
            w={{ base: "100%", sm: "100%",smd: "80%", md: "520px", lg: "680px", xl: "100%" }}
            direction={{ base: "column", lg: "row" }}
            padding={4}
            bg={"rgb(255,255,255,0.1)"}
            _hover={{
              boxShadow: "rgba(200, 200, 200, 0.3) 0 0 15px 15px",
              transition: "box-shadow 0.3s ease-in-out",
            }}
            transition="box-shadow 0.5s ease-in-out"
          >
            <Flex flex={1}>
              <Image objectFit="cover" boxSize="100%" src={MihirAi} alt="#" />
            </Flex>
            <Stack
              flex={1}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              p={1}
              pt={2}
            >
              <Heading
                fontSize={"2xl"}
                fontFamily={"body"}
                color={"#689775"}
                _hover={{ color: "#43ad61" }}
              >
                Mihir's AI
              </Heading>
              <Text textAlign={"center"} color={"#AD8174"} px={3}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
                autem, commodi excepturi ipsam magni eveniet. Fuga perspiciatis
                asperiores quam autem nesciunt culpa reiciendis corrupti eaque?
                Commodi amet tempora laborum reprehenderit, neque iste saepe
                aliquam.
              </Text>
              <Stack
                align={"center"}
                justify={"center"}
                direction={"row"}
                mt={6}
                flex={1}
                flexWrap={"wrap"}
              >
                <Badge px={2} py={1} bg={"#689775"} fontWeight={"400"}>
                  #React
                </Badge>
                <Badge px={2} py={1} bg={"#689775"} fontWeight={"400"}>
                  #MongoDb
                </Badge>
                <Badge px={2} py={1} bg={"#689775"} fontWeight={"400"}>
                  #Express
                </Badge>
                <Badge px={2} py={1} bg={"#689775"} fontWeight={"400"}>
                  #NodeJS
                </Badge>
              </Stack>

              <Stack
                width={"100%"}
                mt={"2rem"}
                direction={"row"}
                padding={2}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Button
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  bg={"#C7493A"}
                  _hover={{ bg: "#A33327" }}
                  onClick={()=>window.open("https://github.com/MrMihirSoni/Mihir-s-AI", "_blank")}
                >
                  GitHub
                </Button>
                <Button
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  bg={"#C7493A"}
                  _hover={{ bg: "#A33327" }}
                  boxShadow={
                    "0px 1px 25px -5px rgb(70 173 99 / 48%), 0 10px 10px -5px rgb(70 173 99 / 43%)"
                  }
                  onClick={()=>window.open("https://mihir-ai.netlify.app", "_blank")}
                >
                  Live
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Center>

      </Grid>
    </Box>
  );
}
