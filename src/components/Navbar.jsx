import { Flex ,Box, Text,Spacer, Avatar, Container,Image, LightMode} from "@chakra-ui/react";
import { List, ListItem ,IconButton} from "@chakra-ui/react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'
  import { HamburgerIcon, CloseIcon} from "@chakra-ui/icons"
import { NavLink,Link } from "react-router-dom";
import { useState ,useEffect} from "react";

export default function Navbar() {
 const [display,ChangeDisplay]=useState('none')
 const [scrollingDown, setScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        const scrollTop = window.pageYOffset;
  
        if (scrollTop > 100) {
          setScrollingDown(true);
        } else {
          setScrollingDown(false);
        }
      };
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const navStyle = {
        backgroundColor: scrollingDown ? 'white' : 'transparent',
        transition: 'background-color 0.3s ease-in-out',
    };
  return (
    <>
    <Box as="div" position={["fixed"]} top="0" left="0" alignItems="center"  justifyContent="center" zIndex={99}>
        <Flex as="nav" style={navStyle}  width="100vw" >
            <IconButton
            mt="13px"
            ml="10px"
            aria-label="Open Menu"
            size="lg"
            icon={<HamburgerIcon />}
            display={['flex','flex','none','none']}
            color="black"  bg="transparent" _hover={{ bg: 'transparent' }}
            onClick={()=>ChangeDisplay('flex')}/>
            <a href='/my-vue-app/'>
                {/* <Avatar name='Dan Abrahmov'   size={['lg','lg','xl','xl']} ml={['10px','10px','30px']} mt="0px" /> */}
                <Image borderRadius='full' boxSize={['60px','60px','80px','80px']}  src='images/vv1.png' alt='VV Rice Mill' ml={["8px","15px"]} />
            </a>
         
        <Spacer/>

        {/*Mobile View  */}
        <Flex
            w="85vw"
            h="100vh"
            bgColor="gray.50"
            position="fixed"
            top="0"
            left="0"
            zIndex={20}
            overflowY="auto"
            flexDir="column"
            display={display}
        >
            <Flex justifyContent="flex-start">
                <IconButton
                mt="13px"
                ml="10px"
                aria-label="Close Menu"
                size="lg"
                icon={<CloseIcon />}
                color="black" bg="transparent" _hover={{ bg: 'transparent' }}
                onClick={()=>ChangeDisplay('none')}></IconButton>
            </Flex>
                <Flex 
                flexDir="column"
                justifyContent="center"
                ml="22px"
                >
                <List  mt="40px" ml="20px">
                        <ListItem mr="40px"  mb="40px">
                            <NavLink>
                            <Menu>
                                <MenuButton as={Link}  color="blue.900">
                                    <Text fontSize='lg' as='cite' color="blue.900">Our Products</Text>
                                </MenuButton>
                                <MenuList >
                                    <Link to="/ChengalpattuRice" onClick={()=>ChangeDisplay('none')}><MenuItem><Text  ml="3px" fontSize='sm' as='cite' color="blue.900">Chengalpattu Rice</Text></MenuItem></Link>
                                    <Link to="/PoniRice" onClick={()=>ChangeDisplay('none')}><MenuItem><Text ml="3px" fontSize='sm' as='cite' color="blue.900">Ponni Rice</Text></MenuItem></Link>
                                    <Link to="/IdlyRice" onClick={()=>ChangeDisplay('none')}><MenuItem><Text ml="3px" fontSize='sm' as='cite' color="blue.900">Idly Rice</Text></MenuItem></Link>
                                    <Link to="/DoubleBoiled" onClick={()=>ChangeDisplay('none')}><MenuItem><Text ml="3px" fontSize='sm' as='cite' color="blue.900">Double Boiled</Text></MenuItem></Link>
                                </MenuList>
                                </Menu>
                            </NavLink>
                        </ListItem>
                        <ListItem  mr="40px" mb="40px">
                            <NavLink >
                            <Link to="/About" onClick={()=>ChangeDisplay('none')}><Text fontSize='lg' as='cite' color="blue.900">About</Text></Link>
                            </NavLink>
                        </ListItem>
                        <ListItem  mr="40px"  mb="40px">
                            <NavLink >
                            <Link to="/ContactUs" onClick={()=>ChangeDisplay('none')}><Text fontSize='lg' as='cite' color="blue.900">Contact Us</Text></Link>
                            </NavLink>
                        </ListItem>
                    </List>

                </Flex>
        </Flex>
        {/*Mobile View  */}
        
        {/* DeskTop View  */}
       <Container mr={{sm:"0px",lg:"10px",xl:"170px"}} pr="0px"  display="flex" alignItems="center"  justifyContent={['none','none',"flex-end","flex-end"]}>
            <List display={['none','none','flex','flex']}  alignItems={['none','none',"center","center"]} justifyContent={['none','none',"flex-end","flex-end"]}>
                <ListItem mr="40px">
                    <NavLink >
                    <Menu>
                        <MenuButton as="h2">
                            <Text fontSize='lg' as='cite' color="blue.900">Our Products</Text>
                        </MenuButton>
                        <MenuList >
                        <Link to="/ChengalpattuRice" onClick={()=>ChangeDisplay('none')}><MenuItem><Text fontSize='sm' as='cite' color="blue.900">Chengalpattu Rice</Text></MenuItem></Link>
                        <Link to="/PoniRice" onClick={()=>ChangeDisplay('none')}><MenuItem><Text fontSize='sm' as='cite' color="blue.900">Ponni Rice</Text></MenuItem></Link>
                        <Link to="/IdlyRice" onClick={()=>ChangeDisplay('none')}><MenuItem><Text fontSize='sm' as='cite' color="blue.900">Idly Rice</Text></MenuItem></Link>
                        <Link to="/DoubleBoiled" onClick={()=>ChangeDisplay('none')}><MenuItem><Text fontSize='sm' as='cite' color="blue.900">Double Boiled</Text></MenuItem></Link>
                        </MenuList>
                        </Menu>
                    </NavLink>
                </ListItem>
                <ListItem  mr="40px">
                    <NavLink>
                    <Link to="/About" onClick={()=>ChangeDisplay('none')}><Text fontSize='lg' as='cite' color="blue.900">About</Text></Link>
                    </NavLink>
                </ListItem>
                <ListItem  mr="40px">
                    <NavLink >
                    <Link to="/ContactUs" onClick={()=>ChangeDisplay('none')}><Text fontSize='lg' as='cite' color="blue.900">Contact Us</Text></Link>
                    </NavLink>
                </ListItem>
            </List>
        </Container>
        </Flex>
    </Box>
    </>
    
   
  )
}
