import { Box, Text, Image, Flex } from "@chakra-ui/react";
import React from "react";
import RobotImage from "../assets/About.png";
import { color } from "framer-motion";

const About = () => {
  return (
    <Box id="about" w={"90%"} maxW={"1350px"} m={"auto"} mt={"1rem"} pt={"6rem"} pb={"3rem"}>
      <Text as={"h3"} w={"fit-content"} m={"auto"} fontSize={"4rem"} color={"#689775"} _hover={{color:"#43ad61"}} textAlign={"center"}>
        About
      </Text>
      <Flex mt={"4rem"} justifyContent={"space-between"} flexDir={{base: "column", lg: "row"}}>
        <Box>
          <Image display={{base:"block", lg: "inline"}} m={{base: "auto", lg: 0}} src={RobotImage} w={{base:"280px", md: "320px", xl: "400px"}} />
        </Box>
        <Box>
          <Flex m={"auto"} fontSize={{base: "1rem", md: "1.2rem", xl: "1.4rem"}} gap={"1.5rem"} width={{base: "90%",lg: "500px", xl: "600px"}} flexDir={"column"}>
            <Text color={"#AD8174"} as={"p"}><i className='bx bxs-chevrons-right' style={{color: "#689775"}}></i> Hello, my name is Mihir Soni, and I enjoy creating things that live on the internet.</Text>
            <Text color={"#AD8174"} as={"p"}><i className='bx bxs-chevrons-right' style={{color: "#689775"}}></i> Quick learner and having experience in full-stack web development with core knowledge of MERN stack technology.</Text>
            <Text color={"#AD8174"} as={"p"}><i className='bx bxs-chevrons-right' style={{color: "#689775"}}></i> Hands on experience in building React Web App. Works efficiently both in frontend as well as backend and is proficient in Data Structure and Algorithms.</Text>
            <Text color={"#AD8174"} as={"p"}><i className='bx bxs-chevrons-right' style={{color: "#689775"}}></i> After honing my skills through years of rigorous experience, I am now actively seeking opportunities as a Full Stack web developer, eager to bring my expertise to innovative projects and contribute to their success.</Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
