import { Box, Flex, Image, Text, Button, calc } from "@chakra-ui/react";
import React from "react";
import DP from "../assets/DP.png";
import HandWaveEmoji from "../assets/HandWaveEmoji.gif";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import Mihir_Soni_Resume from "../assets/Mihir-Soni-Resume.pdf"

const Home = () => {
  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1bV1Ic1J7XXfdNCD4Cx9C52xfMctyFWO1/view?usp=sharing",
      "_blank"
    );
  };
  return (
    <>
      <Box
        id="home"
        w={{ base: "90%", md: "100%" }}
        maxW={"1350px"}
        m={"auto"}
        pt={{ base: "6rem", md: "10rem" }}
      >
        <Flex
          justifyContent={"space-between"}
          w={{ base: "auto", md: "90%", xl: "75%" }}
          m={"auto"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box>
            <Image
              width={{ base: "15rem", md: "22rem", xl: "28rem" }}
              borderRadius={"50%"}
              border={"2px solid #A33327"}
              src={DP}
              display={"block"}
              margin={"auto"}
              _hover={{
                boxShadow: "rgba(200, 200, 200, 0.3) 0 0 15px 15px",
                transition: "box-shadow 0.3s ease-in-out",
              }}
              transition="box-shadow 0.5s ease-in-out"
            />
          </Box>
          <Box pl={{ base: "2rem", md: "0" }} m={{ base: "auto", md: "0" }}>
            <Box w={{ base: "15rem", md: "20rem", xl: "26rem" }}>
              <Flex gap={"1rem"}>
                <Text
                  mt={{ base: "4rem", md: "2rem", xl: "4rem" }}
                  color={"#AD8174"}
                  fontSize={{ base: "1.2rem", md: "1.8rem", xl: "2.4rem" }}
                  as={"p"}
                >
                  Hello!
                </Text>
                <Image
                  mt={{ base: "4rem", md: "2rem", xl: "4rem" }}
                  src={HandWaveEmoji}
                  h={{ base: "1.4rem", md: "1.8rem", xl: "2.4rem" }}
                />
              </Flex>
              <Text
                as={"h3"}
                color={"#AD8174"}
                fontSize={{ base: "1.6rem", md: "2.4rem", xl: "3.5rem" }}
              >
                I am{" "}
                <Text as={"span"} color={"#C7493A"} fontWeight={"bold"}>
                  Mihir Soni
                </Text>
              </Text>
              <Text
                mb={"2rem"}
                fontSize={{ base: "1.2rem", md: "1.8rem", xl: "2.4rem" }}
                color={"#AD8174"}
                as={"p"}
              >
                Expert in{" "}
                <Text color={"#689775"} as={"span"}>
                  <Typewriter
                    words={[
                      "Express",
                      "Mongoose",
                      "MongoDB",
                      "React",
                      "NodeJS",
                    ]}
                    loop={true}
                    cursor
                    cursorColor="#917164"
                    typeSpeed={50}
                    deleteSpeed={90}
                    delaySpeed={1000}
                    color="#689775"
                  />
                </Text>
              </Text>
              <Button
                bg={"#C7493A"}
                _hover={{ bg: "#A33327" }}
                _active={{ bg: "#917164" }}
                fontSize={{ base: "1rem", md: "1.2rem", xl: "1.6rem" }}
                p={{ base: "1rem", md: "1.2rem", xl: "1.6rem" }}
                borderRadius={"1rem"}
                onClick={handleResumeClick}
              >
                <a
                  href={Mihir_Soni_Resume}
                  target="_blank"
                  download="Mihir-Soni-Resume"
                >
                  Resume
                </a>
              </Button>
              <Box display={{ base: "block", md: "none" }}>
                <Text
                  as={"p"}
                  fontSize={"1.2rem"}
                  color={"#AD8174"}
                  mt={"3rem"}
                >
                  Follow me -&gt;
                </Text>
                <Flex gap={"2rem"} mt={"1rem"}>
                  <Button
                    borderRadius={"50%"}
                    p={0}
                    fontSize={"1.5rem"}
                    bg={"#C7493A"}
                    _hover={{ bg: "#A33327" }}
                    _active={{ bg: "#917164" }}
                    onClick={() =>
                      window.open("https://github.com/MrMihirSoni", "_blank")
                    }
                  >
                    <i
                      className="bx bxl-github"
                      onClick={() =>
                        window.open("https://github.com/MrMihirSoni", "_blank")
                      }
                    ></i>
                  </Button>
                  <Button
                    borderRadius={"50%"}
                    p={0}
                    fontSize={"1.5rem"}
                    bg={"#C7493A"}
                    _hover={{ bg: "#A33327" }}
                    _active={{ bg: "#917164" }}
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/mihir-13-soni",
                        "_blank"
                      )
                    }
                  >
                    <i
                      class="bx bxl-linkedin"
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/mihir-13-soni",
                          "_blank"
                        )
                      }
                    ></i>
                  </Button>
                </Flex>
              </Box>
            </Box>
          </Box>
        </Flex>
        <Box display={{ base: "none", md: "block" }}>
          <Text
            as={"p"}
            fontSize={"1.2rem"}
            color={"#AD8174"}
            textAlign={"center"}
          >
            Follow me -&gt;
          </Text>
          <Flex gap={"2rem"} mt={"1rem"} justifyContent={"center"}>
            <Button
              borderRadius={"50%"}
              p={0}
              fontSize={"1.5rem"}
              bg={"#C7493A"}
              _hover={{ bg: "#A33327" }}
              _active={{ bg: "#917164" }}
              onClick={() =>
                window.open("https://github.com/MrMihirSoni", "_blank")
              }
            >
              <i
                className="bx bxl-github"
                onClick={() =>
                  window.open("https://github.com/MrMihirSoni", "_blank")
                }
                style={{ cursor: "pointer" }}
              ></i>
            </Button>
            <Button
              borderRadius={"50%"}
              p={0}
              fontSize={"1.5rem"}
              bg={"#C7493A"}
              _hover={{ bg: "#A33327" }}
              _active={{ bg: "#917164" }}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/mihir-13-soni",
                  "_blank"
                )
              }
            >
              <i
                class="bx bxl-linkedin"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/mihir-13-soni",
                    "_blank"
                  )
                }
                style={{ cursor: "pointer" }}
              ></i>
            </Button>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Home;
