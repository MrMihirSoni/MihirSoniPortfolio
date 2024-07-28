import {
  Box,
  Text,
  Flex,
  Textarea,
  Button,
  Center,
  useToast,
} from "@chakra-ui/react";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { SpinnerIcon } from "@chakra-ui/icons";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null)
  const form = useRef();
  const toast = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update visibility state when element is at least 50% in the viewport
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
      }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    toast({
      title: "Sending Email...",
      description: "Your message is being sending...",
      variant: "subtle",
      status: "info",
      duration: 3000,
      isClosable: false,
      colorScheme: "blue",
      icon: <SpinnerIcon />
    });
    emailjs
      .sendForm(
        "service_qd5z0sm",
        "template_issrx1f",
        form.current,
        "0zDzKrX_j_Esh7sdc"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          toast({
            title: "Email sent!",
            description: "Your message is sent to Mihir",
            status: "success",
            duration: 3000,
            isClosable: false,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box
      ref={contactRef}
      id="contact"
      w={"90%"}
      maxW={"1350px"}
      m={"auto"}
      mt={"3rem"}
      pt={"2rem"}
      pb={"3rem"}
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
          Contact
        </Text>
      </Box>
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        maxW={{ base: "600px", lg: "fit-content" }}
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
        <Flex
          flexDir={{ base: "column-reverse", lg: "column" }}
          justifyContent={"space-between"}
          gap={"2rem"}
        >
          <Flex flexDir={"column"} gap={"1.5rem"} mt={{ base: 0, lg: "4rem" }}>
            <Box
              _hover={{ border: "1px solid #689775" }}
              border={"1px solid transparent"}
              p={"0.6rem 1rem"}
              borderRadius={"0.4rem"}
              onClick={() => {
                navigator.clipboard.writeText("+918340504980");
                toast({
                  title: "Copied!",
                  description: "Phone number is copied to clipboard.",
                  status: "success",
                  duration: 2000,
                  isClosable: false,
                });
              }}
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
              onClick={() => {
                navigator.clipboard.writeText("ms6711534@gmail.com")
                toast({
                  title: "Copied!",
                  description: "Email is copied to clipboard.",
                  status: "success",
                  duration: 2000,
                  isClosable: false,
                });
              }
              }
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
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/place/Chapra,+Bihar/@25.7805724,84.6636231,12z/data=!3m1!4b1!4m6!3m5!1s0x3992bb17fdf6ea1f:0xe3bbfac01f4ab27a!8m2!3d25.7811397!4d84.7543413!16zL20vMDVwbnM4?entry=ttu",
                  "_blank"
                )
              }
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
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/mihir-13-soni",
                  "_blank"
                )
              }
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
              onClick={() =>
                window.open("https://github.com/MrMihirSoni", "_blank")
              }
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
              onClick={() =>
                window.open("https://twitter.com/_mihir_soni", "_blank")
              }
            >
              <Text as={"p"} fontSize={"1.6rem"}>
                <i className="bx bxl-twitter"></i>
              </Text>
            </Box>
          </Flex>
        </Flex>
        <Flex flexDir={"column"} gap={"1.5rem"}>
          <form className="form" ref={form} onSubmit={sendEmail}>
            <div>
              <label>Name :</label>
              <div>
                <i className="bx bx-user"></i>
                <input
                  placeholder="Your Name"
                  type="text"
                  name="userName"
                  required
                />
              </div>
            </div>
            <div>
              <label>Email :</label>
              <div>
                <i className="bx bxl-gmail"></i>
                <input
                  placeholder="Your Email"
                  type="email"
                  name="userEmail"
                  required
                />
              </div>
            </div>
            <div>
              <label>Message :</label>
              <div>
                <textarea placeholder="Your Message" name="message" required />
              </div>
            </div>
            <input
              style={{
                width: "100%",
                cursor: "pointer",
              }}
              className="submit"
              type="submit"
              value="Send"
            />
          </form>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Contact;
