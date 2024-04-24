import {
  Box,
  Text,
  Flex,
  Textarea,
  Input,
  Button,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Center,
} from "@chakra-ui/react";
import React from "react";

const Contact = () => {
  return (
    <Box
      id="contact"
      w={"90%"}
      maxW={"1350px"}
      m={"auto"}
      mt={"3rem"}
      pt={"3rem"}
      pb={"3rem"}
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
          Contact
        </Text>
      </Box>
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        maxW={{base:"600px", lg:"fit-content"}}
        gap={"2rem"}
        m={"auto"}
        mt={"4rem"}
        p={"1.4rem"}
        borderRadius={"1.4rem"}
        bg={"rgb(255, 255, 255, 0.1)"}
        _hover={{
          boxShadow: "rgba(200, 200, 200, 0.3) 0 0 15px 15px",
          transition: "box-shadow 0.3s ease-in-out",
        }}
        transition="box-shadow 0.5s ease-in-out"
      >
        <Flex flexDir={{base:"column-reverse", lg:"column"}} justifyContent={"space-between"} gap={"2rem"}>
          <Flex flexDir={"column"} gap={"1.5rem"} mt={{base:0, lg:"4rem"}}>
            <Box
              _hover={{ border: "1px solid #689775" }}
              border={"1px solid transparent"}
              p={"0.6rem 1rem"}
              borderRadius={"0.4rem"}
            >
              <Text as={"p"} color={"#AD8174"}>
                <i className="bx bxs-phone"></i> +91-8340504980
              </Text>
            </Box>
            <Box
              _hover={{ border: "1px solid #689775" }}
              border={"1px solid transparent"}
              p={"0.6rem 1rem"}
              borderRadius={"0.4rem"}
            >
              <Text as={"p"} color={"#AD8174"}>
                <i className="bx bxl-gmail"></i> ms6711534@gmail.com
              </Text>
            </Box>
            <Box
              _hover={{ border: "1px solid #689775" }}
              border={"1px solid transparent"}
              p={"0.6rem 1rem"}
              borderRadius={"0.4rem"}
            >
              <Text as={"p"} color={"#AD8174"}>
                <i className="bx bxs-map"></i> Chapra, India
              </Text>
            </Box>
          </Flex>
          <Flex justifyContent={"space-around"}>
            <Center
              p={"0.2rem 0.6rem"}
              borderRadius={"50%"}
              color={"#689775"}
              _hover={{ bg: "#689775", color: "rgb(0,0,6)" }}
            >
              <Text as={"p"} fontSize={"1.6rem"}>
                <i className="bx bxl-linkedin"></i>
              </Text>
            </Center>
            <Box
              p={"0.2rem 0.6rem"}
              borderRadius={"50%"}
              color={"#689775"}
              _hover={{ bg: "#689775", color: "rgb(0,0,6)" }}
            >
              <Text as={"p"} fontSize={"1.6rem"}>
                <i className="bx bxl-github"></i>
              </Text>
            </Box>
            <Box
              p={"0.2rem 0.6rem"}
              borderRadius={"50%"}
              color={"#689775"}
              _hover={{ bg: "#689775", color: "rgb(0,0,6)" }}
            >
              <Text as={"p"} fontSize={"1.6rem"}>
                <i className="bx bxl-twitter"></i>
              </Text>
            </Box>
          </Flex>
        </Flex>
        <Flex flexDir={"column"} gap={"1.5rem"}>
          <FormControl id="contact">
            <FormLabel fontSize={"1.4rem"} color={"#AD8174"}>Your Name</FormLabel>
            <InputGroup borderColor={"#689775"} color={"#A33327"}>
              <InputLeftElement pointerEvents="none">
              <i className='bx bx-user' ></i>
              </InputLeftElement>
              <Input type="text" />
            </InputGroup>
          </FormControl>
          <FormControl id="contact">
            <FormLabel fontSize={"1.4rem"} color={"#AD8174"}>Mail</FormLabel>
            <InputGroup borderColor={"#689775"} color={"#A33327"}>
              <InputLeftElement pointerEvents="none">
                <i className="bx bxl-gmail"></i>
              </InputLeftElement>
              <Input type="email" />
            </InputGroup>
          </FormControl>
          <FormControl id="contact">
            <FormLabel fontSize={"1.4rem"} color={"#AD8174"}>Message</FormLabel>
            <Textarea placeholder="message" borderColor={"#689775"} color={"#A33327"}/>
          </FormControl>
          <FormControl id="contact">
            <Button w={"100%"} bg={"#689775"}>Send Message</Button>
          </FormControl>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Contact;
