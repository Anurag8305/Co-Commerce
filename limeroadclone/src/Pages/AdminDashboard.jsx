import {
  Box,
  Flex,
  Grid,
  GridItem,
  Select,
  VStack,
  HStack,
  Button,
  useTimeout,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";


import { getData } from "../Redux/Sorting/action";
import { useState, useEffect } from "react";


import { useNavigate, useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { store } from "../Redux/store";
import DisplayProducts from "../Components/DisplayProducts";
import ProductManagement from "../Components/ProductManagement";

function AdminDashboard() {
 const dispatch=useDispatch()
  const location = useLocation();
  const [flag, setflag] = useState(false);
  const navigate = useNavigate();
  const [Data,setData]=useState(false)
  const data=useSelector((store)=>store.Sortingreducer.data)

  const handleSort = (e) => {
    e.preventDefault();

    if (e.target.value == "High") {
      data.sort((a, b) => {
       
        return b.price - a.price;
      });
    } else {
      data.sort((a, b) => {
       
        return a.price - b.price;
      });
    }

    setflag(!flag);

    setData(data);
  };

 


  const handleLogout = async () => {
    try {
      await 
      navigate("/");
    } catch (error) {

    }
  };
  
  const [count,setcount]=useState(0)
  

  return (
    //display sales status on daily, weekly and monthly bases
    <>
      <div  style={{display:"flex",paddingTop:"10px", justifyContent:"space-evenly",  width:"100%",backgroundColor:"silver",margin: ".0rem",position:"fixed"}}>
        <div>
        <h3 style={{color:"green"}}>{ "WELCOME TO ADMIN PAGE"} </h3>
        </div>
        <div>
          <h3>Sold 15 products this week</h3>
        </div>
        <div>
          <h3>Sold 150 products this month</h3>
        </div>
        <div>
          
          <h3>Total Product:  {data.length}</h3>
        </div>
        <div>
          <Button
            colorScheme="teal"
            size="sm"
            style={{ borderRadius: "10px", margin: ".2rem" }}
            onClick={handleLogout}
          >
            signOut
          </Button>
        </div>
      </div>
      
    
    <HStack id="filteri_ng">
      <VStack position="fixed" top="50px">
        {/* <Sorting /> */}
        <Select
          w={"200px"}
          color="black"
          bg={"grey"}
           onChange={(e) => handleSort(e)}
          placeholder="Sort By Price"
        >
          <option value="High">High</option> 
          <option value="Low">Low</option>
        </Select>

        <ProductManagement />
      </VStack>

      {/* <GridItem marginTop="70px" h={"auto"} ml="25%" > */}

      <DisplayProducts data={data == [] ? Data : data} />
      {/* </GridItem> */}
      
    </HStack>
    </>
  );
}

export default AdminDashboard;