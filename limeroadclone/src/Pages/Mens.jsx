import React, { useRef } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Stack,
  Radio,
  RadioGroup,
  Flex,
  Text,
  useMediaQuery,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  Grid,
  GridItem,
  Card,
  CardBody,
  Heading,
  Image,
} from "@chakra-ui/react";
import "./Mens.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/Mens/action";
import { Link, useLocation, useSearchParams } from "react-router-dom";
const Mens = () => {
  const dispatch = useDispatch();
  const Mens = useSelector((store) => store.MensReducer.Mens);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [isLargerThan768] = useMediaQuery("(min-width: 485px)");
  const [ismaxThan768] = useMediaQuery("(min-width: 485px)");
  const [sortValue, setsortValue] = useState("1");
  const [FilterVal, setFilterVal] = useState("1");
  const [Discount, setDiscount] = useState("1");
  const [Brand, setBrand] = useState("1");
  const [Size, setSize] = useState("1");
  const [Category, setCategory] = useState("1");
  const [noofElements, setnoofElements] = useState(6);
  const loaction = useLocation();
  console.log(loaction);
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSort = searchParams.getAll("sort");
  const [sort, setSort] = useState(initialSort[0] || "");

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  const slice = Mens.slice(0, noofElements);
  const loadMore = () => {
    setnoofElements(noofElements + 3);
  };
  useEffect(() => {
    let params = {};
    sort && (params.sort = sort);
    setSearchParams(params);
    if (loaction || Mens.length === 0) {
      const sortBy = searchParams.get("sort");
      const getMensParams = {
        params: {
          _sort: sortBy && "price",
          _order: sortBy,
        },
      };
      console.log("random");
      dispatch(getData(getMensParams));
      console.log("random2");
    }
  }, [loaction.search, sort, setSearchParams]);

  return (
    <div>
      <Box p={1}>
        <Flex>
          {!isLargerThan768 ? (
            <div>
              {!isLargerThan768 ? (
                <div>
                  <Box p={5}>
                    <GiHamburgerMenu
                      ref={btnRef}
                      colorScheme="teal"
                      onClick={onOpen}
                    >
                      Open
                    </GiHamburgerMenu>
                  </Box>
                  <Drawer
                    isOpen={isOpen}
                    placement="left"
                    onClose={onClose}
                    finalFocusRef={btnRef}
                  >
                    <DrawerOverlay />
                    <DrawerContent>
                      <DrawerCloseButton />
                      <DrawerHeader> FILTER & SORT</DrawerHeader>

                      <DrawerBody>
                        <Box
                          className="filter"
                          textAlign="left"
                          mt={5}
                          pt={3}
                          pl={2}
                          width="100%"
                          height="100%"
                        >
                          <Text fontSize={15} as="b">
                            FILTER & SORT
                          </Text>
                          <Accordion allowMultiple>
                            <AccordionItem>
                              <h2>
                                <AccordionButton>
                                  <Box as="span" flex="1" textAlign="left">
                                    Sort By
                                  </Box>
                                  <AccordionIcon />
                                </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                                <RadioGroup
                                  onChange={setsortValue}
                                  value={sortValue}
                                >
                                  <Stack>
                                    <Radio value="1">trending</Radio>
                                    <Radio value="2">New</Radio>
                                    <Radio value="3">Discounts</Radio>
                                    <div onChange={handleSort}>
                                      <Radio
                                        value="desc"
                                        name="sortBy"
                                        defaultChecked={sort === "desc"}
                                      >
                                        High Price
                                      </Radio>
                                      <br />
                                      <Radio
                                        value="asc"
                                        name="sortBy"
                                        defaultChecked={sort === "asc"}
                                      >
                                        Low Price
                                      </Radio>
                                    </div>
                                  </Stack>
                                </RadioGroup>
                              </AccordionPanel>
                            </AccordionItem>
                          </Accordion>
                          <Accordion allowMultiple>
                            <AccordionItem>
                              <h2>
                                <AccordionButton>
                                  <Box as="span" flex="1" textAlign="left">
                                    Price
                                  </Box>
                                  <AccordionIcon />
                                </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                                <RadioGroup
                                  onChange={setFilterVal}
                                  value={FilterVal}
                                >
                                  <Stack>
                                    <Radio value="1">0 To 499</Radio>
                                    <Radio value="2">500 To 999</Radio>
                                    <Radio value="3">1000 To 1499</Radio>
                                    <Radio value="4">1500 To 2499</Radio>
                                    <Radio value="5">2500 To 29499</Radio>
                                  </Stack>
                                </RadioGroup>
                              </AccordionPanel>
                            </AccordionItem>
                          </Accordion>
                          <Accordion allowMultiple>
                            <AccordionItem>
                              <h2>
                                <AccordionButton>
                                  <Box as="span" flex="1" textAlign="left">
                                    Discount
                                  </Box>
                                  <AccordionIcon />
                                </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                                <RadioGroup
                                  onChange={setDiscount}
                                  value={Discount}
                                >
                                  <Stack>
                                    <Radio value="1">1% To 20%</Radio>
                                    <Radio value="2">21% To 40%</Radio>
                                    <Radio value="3">41% To 60%</Radio>
                                    <Radio value="4">61% To 80%</Radio>
                                    <Radio value="5">81% To 100%</Radio>
                                  </Stack>
                                </RadioGroup>
                              </AccordionPanel>
                            </AccordionItem>
                          </Accordion>
                          <Accordion allowMultiple>
                            <AccordionItem>
                              <h2>
                                <AccordionButton>
                                  <Box as="span" flex="1" textAlign="left">
                                    Size
                                  </Box>
                                  <AccordionIcon />
                                </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                                <RadioGroup onChange={setSize} value={Size}>
                                  <Stack>
                                    <Radio value="1">SM</Radio>
                                    <Radio value="2">M</Radio>
                                    <Radio value="3">L</Radio>
                                    <Radio value="4">Xl</Radio>
                                    <Radio value="5">XXL</Radio>
                                  </Stack>
                                </RadioGroup>
                              </AccordionPanel>
                            </AccordionItem>
                          </Accordion>
                          <Accordion allowMultiple>
                            <AccordionItem>
                              <h2>
                                <AccordionButton>
                                  <Box as="span" flex="1" textAlign="left">
                                    Brand
                                  </Box>
                                  <AccordionIcon />
                                </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                                <RadioGroup onChange={setBrand} value={Brand}>
                                  <Stack>
                                    <Radio value="1">100 Dreams</Radio>
                                    <Radio value="2">109F</Radio>
                                    <Radio value="3">3Buddy Fashion</Radio>
                                    <Radio value="4">3PIN</Radio>
                                    <Radio value="5">4u Fashion</Radio>
                                  </Stack>
                                </RadioGroup>
                              </AccordionPanel>
                            </AccordionItem>
                          </Accordion>
                          <Accordion allowMultiple>
                            <AccordionItem>
                              <h2>
                                <AccordionButton>
                                  <Box as="span" flex="1" textAlign="left">
                                    Category
                                  </Box>
                                  <AccordionIcon />
                                </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                                <RadioGroup
                                  onChange={setCategory}
                                  value={Category}
                                >
                                  <Stack>
                                    <Radio value="1">sarees</Radio>
                                    <Radio value="2">Sets</Radio>
                                    <Radio value="3">lehengas</Radio>
                                    <Radio value="4">Ethnic Dresses</Radio>
                                    <Radio value="5">blouses</Radio>
                                  </Stack>
                                </RadioGroup>
                              </AccordionPanel>
                            </AccordionItem>
                          </Accordion>
                        </Box>
                      </DrawerBody>

                      <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={onClose}>
                          Cancel
                        </Button>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>
                </div>
              ) : null}
            </div>
          ) : null}
          {!ismaxThan768 ? null : (
            <Box
              position="fixed"
              width={["40%", "40%", "30%", "23%"]}
              h="700vh"
            >
              <Box
                className="sideHead"
                textAlign="left"
                pt={1}
                pl={2}
                w="100%"
                h="70px"
              >
                <Text fontSize={15} as="b">
                  Clothing
                </Text>
                <Text fontSize={15}>148578 products</Text>
              </Box>
              <Box
                className="filter"
                textAlign="left"
                mt={5}
                pt={3}
                pl={2}
                width="100%"
                height="100%"
              >
                <Text fontSize={15} as="b">
                  FILTER & SORT
                </Text>
                <Accordion allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Sort By
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <RadioGroup onChange={setsortValue} value={sortValue}>
                        <Stack>
                          <Radio value="1">trending</Radio>
                          <Radio value="2">New</Radio>
                          <Radio value="3">Discounts</Radio>
                          <div onChange={handleSort}>
                            <Radio
                              value="desc"
                              name="sortBy"
                              defaultChecked={sort === "desc"}
                            >
                              High Price
                            </Radio>
                            <br />
                            <Radio
                              value="asc"
                              name="sortBy"
                              defaultChecked={sort === "asc"}
                            >
                              Low Price
                            </Radio>
                          </div>
                        </Stack>
                      </RadioGroup>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Accordion allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Price
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <RadioGroup onChange={setFilterVal} value={FilterVal}>
                        <Stack>
                          <Radio value="1">0 To 499</Radio>
                          <Radio value="2">500 To 999</Radio>
                          <Radio value="3">1000 To 1499</Radio>
                          <Radio value="4">1500 To 2499</Radio>
                          <Radio value="5">2500 To 29499</Radio>
                        </Stack>
                      </RadioGroup>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Accordion allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Discount
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <RadioGroup onChange={setDiscount} value={Discount}>
                        <Stack>
                          <Radio value="1">1% To 20%</Radio>
                          <Radio value="2">21% To 40%</Radio>
                          <Radio value="3">41% To 60%</Radio>
                          <Radio value="4">61% To 80%</Radio>
                          <Radio value="5">81% To 100%</Radio>
                        </Stack>
                      </RadioGroup>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Accordion allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Size
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <RadioGroup onChange={setSize} value={Size}>
                        <Stack>
                          <Radio value="1">SM</Radio>
                          <Radio value="2">M</Radio>
                          <Radio value="3">L</Radio>
                          <Radio value="4">Xl</Radio>
                          <Radio value="5">XXL</Radio>
                        </Stack>
                      </RadioGroup>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Accordion allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Brand
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <RadioGroup onChange={setBrand} value={Brand}>
                        <Stack>
                          <Radio value="1">100 Dreams</Radio>
                          <Radio value="2">109F</Radio>
                          <Radio value="3">3Buddy Fashion</Radio>
                          <Radio value="4">3PIN</Radio>
                          <Radio value="5">4u Fashion</Radio>
                        </Stack>
                      </RadioGroup>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Accordion allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Category
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <RadioGroup onChange={setCategory} value={Category}>
                        <Stack>
                          <Radio value="1">sarees</Radio>
                          <Radio value="2">Sets</Radio>
                          <Radio value="3">lehengas</Radio>
                          <Radio value="4">Ethnic Dresses</Radio>
                          <Radio value="5">blouses</Radio>
                        </Stack>
                      </RadioGroup>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
            </Box>
          )}

          <Box ml={[0, 300, 300, 350]} width={["60%", "60%", "70%", "77%"]}>
            <Grid
              ml="50px"
              mt="10"
              gap={5}
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
              ]}
            >
              {slice.length > 0 &&
                slice.map((item) => (
                  <GridItem>
                    {   item.available ?(
                      <Link to={`/singleproduct/${item.id}`}>
                     
                    <Card maxW="sm">
                      <CardBody>
                        <Image
                          src={item.img1}
                          alt="Green double couch with wooden legs"
                          borderRadius="lg"
                        />
                        <Stack mt="6" spacing="3">
                          <Heading size="md">{item.title}</Heading>
                          <Text color="gray">Rs.{item.price}</Text>
                        </Stack>
                      </CardBody>
                    </Card>
                    </Link>
                     ):
                     (
                     
                      
                      <Card maxW="sm">
                      <CardBody>
                        <Image
                          src={item.img1}
                          alt="Green double couch with wooden legs"
                          borderRadius="lg"
                          
                        />
                        <Stack mt="6" spacing="3">
                          <Heading size="md" color="red">Not Available</Heading>
                          <Text color="gray"></Text>
                        </Stack>
                      </CardBody>
                    </Card>
                    
                     )
                    }                     


                    
                  </GridItem>
                ))}
            </Grid>
            <Box align="center" p={10}>
              <Button
                onClick={() => loadMore()}
                _hover={{ bg: "RGBA(0, 0, 0, 0.24)" }}
                size="lg"
                h={50}
                variant="outline"
                color="black"
                bg="RGBA(0, 0, 0, 0.04)"
              >
                Load more
              </Button>
            </Box>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Mens;
