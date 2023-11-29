import { Box,Center,Image,Heading ,Text,Tooltip,IconButton} from '@chakra-ui/react'
import React, { useEffect } from 'react';
import { ArrowBackIcon } from "@chakra-ui/icons";

export default function PageError() {

  useEffect(() => {
    document.title = '404 Page Not Found-VV RiceMill';
  }, []);
  return (
    <>
    <Tooltip hasArrow label='Home' bg='gray.100' color="blue.900">
      <Box position="fixed" left="30px" top="130px" cursor="pointer"  zIndex="1">
        <a href="/my-vue-app/"><IconButton 
        boxSize={10}
        p="20px"
        borderRadius="50%"
        bg="gray.100"
        display={["none","none","none","none","flex","none"]}
        icon={<ArrowBackIcon  boxSize={8}  color="blue.900" />}
        ></IconButton></a>
        </Box>
      </Tooltip>


    <Box mt="100px">
      <Center> <Image  src='images/oops.jpg' alt='404 Page Error' height={["400","500"]} width={["500"]} /></Center>
      <Center><Heading color="black" mt="15px">This page doesn’t exist</Heading></Center>
      <Center><Text mt="15px" mb="50px" color="blue.900" as="b">Please check your URL or return to home.</Text></Center>
    </Box>
    </>
    
  )
}

