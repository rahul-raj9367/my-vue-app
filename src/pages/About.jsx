import { Box,Center,Heading,Text ,AspectRatio,Tooltip,IconButton ,Image,Grid,GridItem,Flex} from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react';
import '../style.css'
import { ArrowBackIcon } from "@chakra-ui/icons";

export default function About() {

  useEffect(() => {
    document.title = 'About-VV RiceMill';
  }, []);

  
  return (
    <>
    <Box  >
      
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

      <Box bg="blue.300">
      <Box height="500px" className='NAV' >
        <Box>
          <Center><Heading mt="250px" size="2xl" color="blue.900">ABOUT VV RICE MILL</Heading></Center>
        </Box>
      </Box>
      </Box>

      <Box pt="100px" pb="100px"  className='NAV'>
        <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)',,'repeat(2, 1fr)']}>
          <GridItem w='100%' h='100%'>
            <Flex alignItems="center" justifyContent={["center","","",""]} >
              <Image src='images/rice.jpeg' ml={["","","","20px",""]}alt="++"  height={["300px","500px"]} width={["300px","500px"]} boxShadow={['xl','dark-lg']} rounded='md' />
            </Flex>
          </GridItem>
          <GridItem w='100%' h='100%' >
            <Box   height={["510px","","","400px","500px"]} ml={["","","","25px","",""]}>
              <Flex alignItems="center" justifyContent={["space-evenly","center","center","normal"]}>
              <Heading pt={["40px","0px"]} color="blue.900" >About Us</Heading>

              </Flex>
            <Flex alignItems="center" justifyContent={["center","center","center","flex-start"]} >
              
            <Heading color="blue.900" mt="20px" size="lg" as="cite" lineHeight={["35px","50px"]} width={['85vw','80vw','80vw','50vw','550px']}> Sri Seenivasan Traders Established in 2013.Which include only hulling section.
               Later developed into a boiler modern unit was opened in the year 2017 Named SRI SEENIVASAN MODERN RICE MILL. Our Product Brand is VV Rice .
               Under the administration at the property <br />Mr. V. Velmurugan</Heading>
            </Flex>
            </Box>
          </GridItem>

        </Grid>
        
      </Box>
      </Box>

    </>
  )
}
