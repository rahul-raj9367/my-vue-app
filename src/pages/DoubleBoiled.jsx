import { Box, Center, Grid, Heading,Text,GridItem, Image, Flex,Divider,Select,Input,Tabs,TabList,Tab,TabPanels,TabPanel,List, ListItem,ListIcon  } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { IconButton,Button } from "@chakra-ui/react";
import { ArrowBackIcon,ChevronRightIcon } from "@chakra-ui/icons";
import { Tooltip } from '@chakra-ui/react'
import { useState } from "react";
import React, { useEffect } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import {  CheckCircleIcon } from '@chakra-ui/icons'

export default function DoubleBoiled() {
  const [count,setcount]=useState(0);

  const Reset =()=>{
    setcount(0);
  }

  const [selectedOption, setSelectedOption] = useState(''); // Initialize with an empty string

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    document.title = 'Double Boiled-VV RiceMill';
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
        display={["none","none","none","none","flex"]}
        icon={<ArrowBackIcon  boxSize={8}  color="blue.900" />}
        ></IconButton></a>
        </Box>
      </Tooltip>
    
      <Box mt={["100px","150px"]} ml={["20px","30px","80px","120px"]}>
          <Text as='cite' size='xs' color="blue.900">VV Rice 
          <ChevronRightIcon boxSize={5} color="red.500" /><b> Double Boiled </b></Text>
      </Box>

      <Box mt="20px">
        <Grid templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)']} gap={[6,'','',4,]}>
          <GridItem w='100%' h='100%' >
            <Flex alignItems="center" justifyContent={["","flex-end","center","flex-end","flex-end"]} >
              <Image  src='images/boiled.jpg' alt='Chengalpattu Rice' ml={["","","","30px"]} height={["320px","500px"]} width={["100vw","100vw","600px","600px"]} />
            </Flex>
          </GridItem>
          <GridItem w='100%' h='100%'>
            <Box ml={["19px","","90px","50px"]}>
              <Button color="blue.900"  _hover={{ bg: 'blue.900', color: 'white' }}> In Stock</Button>
              <Heading mt="8px" color="blue.900">Double Boiled</Heading>
              <Heading size='md' mt="8px" fontWeight="500"  color="blue.900">₹230.00 – ₹4,600.00</Heading>
              <Box height={["100%",150]} width={["90vw","","80vw",400]}alignContent="center" mt="18px">
                {/* <Text lineHeight={7} color="blue.900">Rice is the most central and important food crop in the world. Amongst, Chengalpattu rice turns out to be very aromatic and flavorful. These carefully handpicked paddy is mostly from the farm lands of river tamirabarani belt. This type is especially known for Kanyakumari regional use. 
                This category rice is best for both home consumption and commercial purpose.</Text> */}
                <List spacing={2}>
                  <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Cooking method involving two stages of boiling
                  </ListItem>
                  <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Often used for rice and starchy dishes
                  </ListItem>
                  <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Enhances flavor and texture
                  </ListItem>
                  <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Improves digestibility and nutrient absorption
                  </ListItem>
                  <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Health benefits
                  </ListItem>
                  <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Grown in Tamil Nadu and Kerala
                  </ListItem>
                </List>
                <Box style={{ position: "relative" }}>
                <Divider
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  zIndex="0"
                  borderColor="blue.900"
                  mt="18px"
                />
              </Box>
              </Box>
              <Box mt={["35px","65px"]}>
                <form action="">
                  <Flex>
                    <Box mr={["10px","20px"]}>
                    <Text color="blue.900" mb="10px"><b>Quantity :</b></Text>
                    <Flex>
                      <Button onClick={() =>setcount(count-1)} isDisabled={count === 0} color="white" bg="blue.900" _hover={{ bg: 'blue.900', color: 'white' }}>-</Button>
                      <Text mr={["10px","20px"]} ml={["10px","20px"]} as="p" color="blue.900" mt="5px" textAlign="center">{count >= 0 ? count : 0}</Text>
                      <Button onClick={() =>setcount(count+1)}  color="white" bg="blue.900" _hover={{ bg: 'blue.900', color: 'white' }}>+</Button>
                    </Flex>
                    </Box>
                    <Box>
                      <Text color="blue.900" mb="10px"><b>In Stock</b></Text>
                      <Select placeholder='In Stock' value={selectedOption} onChange={handleSelectChange}  htmlSize={3} width='auto'>
                        <option value='5'>5 kg</option>
                        <option value='10'>10 kg</option>
                        <option value='25'>25 kg</option>
                        <option value='50'>50 kg</option>
                        <option value='100'>100 kg</option>
                      </Select>
                    </Box>
                    <Box mt="33.5px" ml={["4px","10px"]}>
                      <Input type="reset" htmlSize={3} width='auto' color="white" bg="blue.900" onClick={Reset} />
                      {/* <Input  type="submit" /> */}
                    </Box>
                  </Flex>
                  </form>
                  <Box style={{ position: "relative" }} width={["90vw","","80vw",400]} mt="7px">
                    <Divider
                      position="absolute"
                      top="0"
                      left="0"
                      right="0"
                      zIndex="0"
                      borderColor="blue.900"
                      mt="18px"
                    />
                  </Box>
                  
                  <Box mt={["40px"]}>
                    <Heading color="blue.900" size="md"><b>Price</b></Heading>
                    <Heading color="blue.900" as="b">₹ {count*(selectedOption*46)}.00</Heading>
                  </Box>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>


      <Box mt="100px">
      <Tabs borderColor="transparent"  >
      <TabList >
        <Tab as="b" color="blue.900" cursor="pointer" ml={["10px","10px","10px","10px","120px",]} mr="20px">Description</Tab>
        <Tab as="b" color="blue.900" cursor="pointer">Additional information</Tab>
      </TabList>

      <TabPanels >
        <TabPanel  bg="gray.50">
         <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)']} gap={[0,6]}>
          <GridItem w='100%' h='100%'>
            {/* <Center> */}
            <Box ml={["10px","10px","10px","10px","120px"]}>
              <Heading color="blue.900" size='md' mt="20px" mb="20px">Specifications:</Heading>
              {/* <Text height={['100%','100%','100%','100%','100%',150]} width={['100%','100%','100%','100%',540]} color="blue.900" lineHeight={1.8}>Rice is the most central and important food crop in the world. Amongst, Chengalpattu rice turns out to be very aromatic and flavorful. These carefully handpicked paddy is mostly from the farm lands of river tamirabarani belt. This type is especially known for Kanyakumari regional use. This category rice is best for both home consumption and commercial purpose.</Text> */}
              <List spacing={2}>
                  <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Cooking method involving two stages of boiling
                  </ListItem>
                  <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Often used for rice and starchy dishes
                  </ListItem>
                  <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Enhances flavor and texture
                  </ListItem>
                  <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Improves digestibility and nutrient absorption
                  </ListItem>
                  <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Health benefits
                  </ListItem>
                  <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Grown in Tamil Nadu and Kerala
                  </ListItem>
                </List>
            </Box>
            {/* </Center> */}
          </GridItem>
          <GridItem w='100%' h='100%'>
            <Box>
              <Heading  ml={["10px","0px"]} color="blue.900" size='md'  mt="20px" mb="20px">Care & Maintenance:</Heading>
              <Text ml={["10px","0px"]} height={['100%','100%','100%','100%',150]} width={['100%','100%','100%','100%',540]} color="blue.900" lineHeight={1.8}>Main Required Content Required Content Required Content Required Content Required Content Required Content Required Content Required Content Required Content Required Content Required </Text>
            </Box>
          </GridItem>
         </Grid>
         <Center>
          <Image src='images/wholesales.png' alt='Chengalpattu Rice'  height={[100,200]} width={[100,200]}/>
         </Center>
        </TabPanel>
        <TabPanel  bg="gray.50">
        <TableContainer>
          <Table variant='smiple' ml={["0px","0px","0px","0px","100px"]} width={[200,600]} bg="gray.50">
            <Thead>
              <Tr>
                <Th  color="blue.900"><b>Weight</b> </Th>
                <Th  color="blue.900"><b>In Stock</b> </Th>
              </Tr>
            </Thead>
            <Tbody >
              <Tr>
                <Td color="blue.900">Kg</Td>
                <Td color="blue.900" >5Kg, 10Kg, 25Kg, 50Kg, 100Kg</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        </TabPanel>
      </TabPanels>
    </Tabs>
      </Box>
    </>
    
  )
}
