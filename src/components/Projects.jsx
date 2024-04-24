"use client";

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
  useColorModeValue,
  ScaleFade,
} from "@chakra-ui/react";
import BB from "../assets/BeautyBebo.png";

export default function () {
  return (
    <Box
      w={"90%"}
      maxW={"1350px"}
      m={"auto"}
      mt={"1rem"}
      pt={"5rem"}
      pb={"3rem"}
      id="projects"
    >
      <Box>
        <Text
          as={"h3"}
          w={"fit-content"}
          m={"auto"}
          fontSize={"4rem"}
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
            w={{
              sm: "100%",
              smd: "420px",
              md: "520px",
              lg: "680px",
              xl: "100%",
            }}
            direction={{ base: "column", md: "row" }}
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
              >
                <Badge px={2} py={1} bg={"#689775"} fontWeight={"400"}>
                  #React
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  bg={"#689775"}
                  fontWeight={"400"}
                >
                  #MongoDb
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  bg={"#689775"}
                  fontWeight={"400"}
                >
                  #Express
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  bg={"#689775"}
                  fontWeight={"400"}
                >
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
            w={{
              sm: "100%",
              smd: "420px",
              md: "520px",
              lg: "680px",
              xl: "100%",
            }}
            direction={{ base: "column", md: "row" }}
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
              >
                <Badge px={2} py={1} bg={"#689775"} fontWeight={"400"}>
                  #React
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  bg={"#689775"}
                  fontWeight={"400"}
                >
                  #MongoDb
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  bg={"#689775"}
                  fontWeight={"400"}
                >
                  #Express
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  bg={"#689775"}
                  fontWeight={"400"}
                >
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
            w={{
              sm: "100%",
              smd: "420px",
              md: "520px",
              lg: "680px",
              xl: "100%",
            }}
            direction={{ base: "column", md: "row" }}
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
              >
                <Badge px={2} py={1} bg={"#689775"} fontWeight={"400"}>
                  #React
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  bg={"#689775"}
                  fontWeight={"400"}
                >
                  #MongoDb
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  bg={"#689775"}
                  fontWeight={"400"}
                >
                  #Express
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  bg={"#689775"}
                  fontWeight={"400"}
                >
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
            w={{
              sm: "100%",
              smd: "420px",
              md: "520px",
              lg: "680px",
              xl: "100%",
            }}
            direction={{ base: "column", md: "row" }}
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
              >
                <Badge px={2} py={1} bg={"#689775"} fontWeight={"400"}>
                  #React
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  bg={"#689775"}
                  fontWeight={"400"}
                >
                  #MongoDb
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  bg={"#689775"}
                  fontWeight={"400"}
                >
                  #Express
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  bg={"#689775"}
                  fontWeight={"400"}
                >
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
