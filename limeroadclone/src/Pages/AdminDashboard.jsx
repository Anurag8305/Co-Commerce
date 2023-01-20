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
 // import DisplayProducts from "../Components/DisplayProducts";
 // import Sorting from "../Components/Sorting";
  import "../CSS/admin.css";
  import { getData } from "../Redux/Sorting/actiontype";
  import { useState, useEffect } from "react";
 // import ProductManagement from "../Components/ProductManagement";
  import { UserAuth } from "./Context/UserAuthContext";
  import { useNavigate, useSearchParams } from "react-router-dom";
  import { useLocation } from "react-router-dom";
  import { store } from "../Redux/store";
  
  function AdminDashboard() {
    const { user, logOut } = UserAuth();
    const location = useLocation();
    const [flag, setflag] = useState(false);
    const navigate = useNavigate();
    const [searchParams,setSearchParams]=useSearchParams();
   // console.log(store.getState());
    // console.log(user);
   // const data = useSelector((state) => state.Sortingreducer.data);
    // console.log(data)
    const [Data, setData] = useState([]);
    // console.log(Data)
  
    const handleLogout = async () => {
      try {
        await logOut;
        navigate("/");
      } catch (error) {
        console.log(error.message);
      }
    };
  

   
  
   
  
    return (
      //display sales status on daily, weekly and monthly bases
      <>
        <div id="admin_display" style={{position:"fixed", width:"100%",backgroundColor:"silver"}}>
          <div>
          <h3 style={{color:"green"}}>{user && "WELCOME TO ADMIN PAGE"} </h3>
          </div>
          <div>
            <h3>Sold 15 products this week</h3>
          </div>
          <div>
            <h3>Sold 150 products this month</h3>
          </div>
          <div>
            
            <h3>Sold 2 products today</h3>
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
        {/* <Grid templateColumns="repeat(2, 1fr)"> */}
      
      </>
    );
  }
  
  export default AdminDashboard;
  