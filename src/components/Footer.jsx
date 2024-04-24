import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box p={"0.5rem"}borderTop={"2px solid #689775"} borderRadius={"1.5rem 1.5rem 0 0"}>
      <Text as={"p"} fontSize={"0.8rem"} color={"#43ad61"} textAlign={"center"}>
        Designed and build by Mihir Soni, 2024. <i className="bx bxs-heart"></i>
      </Text>
    </Box>
  );
};

export default Footer;
