import { Box, Text, Image, Flex } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const GitStats = () => {
  const gitURLs = [
    "https://github-readme-stats.vercel.app/api/top-langs?username=mrmihirsoni&theme=transparent&hide_border=true&show_icons=true&locale=en",
    "https://github-readme-stats.vercel.app/api?username=mrmihirsoni&theme=transparent&hide_border=true&show_icons=true&locale=en",
    "https://github-readme-streak-stats.herokuapp.com/?user=mrmihirsoni&theme=transparent&hide_border=true&show_icons=true&locale=en",
  ];
  return (
    <Box
      id="git-stats"
      w={"90%"}
      maxW={"1350px"}
      m={"auto"}
      mt={"1rem"}
      pt={"5rem"}
      pb={"3rem"}
    >
      <Box>
        <Text
          as={"h3"}
          fontSize={"4rem"}
          color={"#689775"}
          _hover={{ color: "#43ad61" }}
          textAlign={"center"}
        >
          Git-Stats
        </Text>
        <Flex flexDir={"column"} gap={"2rem"} pt={"3rem"}>
          <Flex justifyContent={"center"}>
            <Box
              width={"fit-content"}
              p={"1rem 2rem"}
              borderRadius={"1rem"}
              bg={"rgb(255,255,255,0.1)"}
              _hover={{
                boxShadow: "rgba(200, 200, 200, 0.3) 0 0 15px 15px",
                transition: "box-shadow 0.3s ease-in-out",
              }}
              transition="box-shadow 0.5s ease-in-out"
              overflow={"hidden"}
            >
              <GitHubCalendar
                username="MrMihirSoni"
                style={{ color: "#AD8174"}}
              />
            </Box>
          </Flex>
          <Flex gap={"1rem"} flexWrap={"wrap"} justifyContent={"center"}>
            {gitURLs.map((ele) => (
              <Box
                minW={"280px"}
                maxW={"420px"}
                bg={"rgb(255,255,255,0.1)"}
                p={"1rem"}
                borderRadius={"1rem"}
                _hover={{
                  boxShadow: "rgba(200, 200, 200, 0.3) 0 0 15px 15px",
                  transition: "box-shadow 0.3s ease-in-out",
                }}
                transition="box-shadow 0.5s ease-in-out"
              >
                <Image src={ele} />
              </Box>
            ))}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default GitStats;
