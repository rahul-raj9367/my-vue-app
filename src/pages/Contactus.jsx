import { Box,Center,Heading,Text ,AspectRatio,Tooltip,IconButton } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react';
import { ArrowBackIcon } from "@chakra-ui/icons";

export default function Contactus() {

  useEffect(() => {
    document.title = 'Contact Us-VV RiceMill';
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
        display={["none","none","none","none","flex","flex"]}
        icon={<ArrowBackIcon  boxSize={8}  color="blue.900" />}
        ></IconButton></a>
        </Box>
      </Tooltip>
      
     <Box height="500px" bg="blue.300">
        <Box>
          <Center><Heading mt="250px" size="2xl" color="blue.900">CONTACT US</Heading></Center>
          <Center><Text color="blue.900" mt="50px" size="xl" as="cite" fontWeight="bold">Mr.VelMurugan</Text></Center>
          <Center><Text color="blue.900" size="md"as="cite"mt="10px" fontWeight="bold"><a href="tel:+919585589855" cursor="pointer">Phone : +91 95855 89855</a></Text></Center>
        </Box>
    </Box>

    {/* <Box mt="100px" mb="100px">
      <Center><Heading size="xl" color="blue.900" mb="100px">OUR LOCATION</Heading></Center>
      <Center>
        <Box border="4px" borderColor="#f7f7f7">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15768.479774706631!2d77.5215583!3d8.8684248!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b042235fe9e386b%3A0x526738dadd325558!2sSri%20Seenivasan%20Rice%20Mill!5e0!3m2!1sen!2sin!4v1696707221586!5m2!1sen!2sin" allowfullscreen="" 
        width="800" height="500" loading="eager" frameborder="0" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Box>
      </Center>
    </Box> */}

    <Box mt="100px" mb="100px">
    <Center><Heading size="xl" color="blue.900" mb="100px">OUR LOCATION</Heading></Center>
      <Center>
        <AspectRatio height={[500,500]} width={['90%',800]} border="4px" borderColor="#f7f7f7">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15768.479774706631!2d77.5215583!3d8.8684248!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b042235fe9e386b%3A0x526738dadd325558!2sSri%20Seenivasan%20Rice%20Mill!5e0!3m2!1sen!2sin!4v1696707221586!5m2!1sen!2sin" 
        />
        </AspectRatio>
      </Center>
      </Box>
    </>
   
   
    
  )
}
