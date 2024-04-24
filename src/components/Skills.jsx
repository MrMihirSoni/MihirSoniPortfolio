import { Box, Flex, Grid, Text, Image } from "@chakra-ui/react";
import React from "react";
import js from "../assets/JavaScript-logo.png";
import python from "../assets/python-logo.png";
import react from "../assets/React-logo.png";
import chakra from "../assets/chakra-ui-logo.png";
import html from "../assets/HTML_logo.png";
import css from "../assets/CSS-logo.png";
import node from "../assets/nodejs-logo.png";
import express from "../assets/express-logo.png";
import mongoose from "../assets/mongoose-logo.png";
import mongoDb from "../assets/Mongodb-logo.png";
import git from "../assets/git-logo.png";
import vsCode from "../assets/GitHub-logo.png";
import gitHub from "../assets/vsCode-logo.png";
import postman from "../assets/postman-logo.png";
import java from "../assets/java-logo.png";

const Skills = () => {
  return (
    <Box
      id="skills"
      w={"90%"}
      maxW={"1350px"}
      m={"auto"}
      pt={"6rem"}
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
          Skills
        </Text>
      </Box>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        mt={"3rem"}
        p={"2rem"}
        borderRadius={"2rem"}
        bg={"rgb(255,255,255,0.1)"}
        gap={{ base: "3rem", lg: "1rem" }}
      >
        <Flex
          flexDir={"column"}
          alignItems={"center"}
          gap={"2rem"}
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 0px 4px 4px"}
          borderRadius={{ base: "1.4rem", lg: "1rem" }}
        >
          <Text
            as={"h4"}
            color={"#C7493A"}
            fontSize={{ base: "1.4rem", md: "2rem" }}
          >
            Languages
          </Text>
          <Grid templateColumns={"repeat(2, 70px)"} gap={"2rem"}>
            <Image h={"70px"} src={js} />
            <Image h={"70px"} src={python} />
            <Image h={"70px"} src={java} />
          </Grid>
          <Box>
            <Text as={"p"} color={"#AD8174"} textAlign={"center"}>
              My favorite languages for software engineering.
            </Text>
          </Box>
        </Flex>
        <Flex
          flexDir={"column"}
          alignItems={"center"}
          gap={"2rem"}
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 0px 4px 4px"}
          borderRadius={{ base: "1.4rem", lg: "1rem" }}
        >
          <Text
            as={"h4"}
            color={"#C7493A"}
            fontSize={{ base: "1.4rem", md: "2rem" }}
          >
            Front-End
          </Text>
          <Grid templateColumns={"repeat(2, 70px)"} gap={"2rem"}>
            <Image h={"70px"} src={react} />
            <Image h={"70px"} src={chakra} />
            <Image h={"70px"} src={html} />
            <Image h={"70px"} src={css} />
          </Grid>
          <Box>
            <Text as={"p"} color={"#AD8174"} textAlign={"center"}>
              My preferred technologies for front-end web development and
              component design.
            </Text>
          </Box>
        </Flex>
        <Flex
          flexDir={"column"}
          alignItems={"center"}
          gap={"2rem"}
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 0px 4px 4px"}
          borderRadius={{ base: "1.4rem", lg: "1rem" }}
        >
          <Text
            as={"h4"}
            color={"#C7493A"}
            fontSize={{ base: "1.4rem", md: "2rem" }}
          >
            Back-End
          </Text>
          <Grid templateColumns={"repeat(2, 70px)"} gap={"2rem"}>
            <Image h={"70px"} src={node} />
            <Image h={"70px"} src={express} />
            <Image h={"70px"} src={mongoose} />
            <Image h={"70px"} src={mongoDb} />
          </Grid>
          <Box>
            <Text as={"p"} color={"#AD8174"} textAlign={"center"}>
              My preferred technologies for back-end web programming and
              database architecture.
            </Text>
          </Box>
        </Flex>
        <Flex
          flexDir={"column"}
          alignItems={"center"}
          gap={"2rem"}
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 0px 4px 4px"}
          borderRadius={{ base: "1.4rem", lg: "1rem" }}
        >
          <Text
            as={"h4"}
            color={"#C7493A"}
            fontSize={{ base: "1.4rem", md: "2rem" }}
          >
            Tools
          </Text>
          <Grid templateColumns={"repeat(2, 70px)"} gap={"2rem"}>
            <Image h={"70px"} src={git} />
            <Image h={"70px"} src={vsCode} />
            <Image h={"70px"} src={gitHub} />
            <Image h={"70px"} src={postman} />
          </Grid>
          <Box>
            <Text as={"p"} color={"#AD8174"} textAlign={"center"}>
              My favorite tools for version control, code editing, and container
              orchestration.
            </Text>
          </Box>
        </Flex>
      </Grid>
    </Box>
  );
};

export default Skills;
