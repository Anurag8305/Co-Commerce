import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
const CartPage = () => {
  const toast = useToast();
  const { userData } = useSelector((store) => {
    console.log("store", store);
    return store.authReducer;
  });

  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("userdata", userData);
    if (!userData || JSON.stringify(userData) === "{}") {
      navigateTo("/login");
      toast({
        title: "Please SignIn First.",

        status: "success",
        duration: 6000,
        isClosable: true,
      });
      return;
    }
  }, [userData]);
  return <div>CartPage</div>;
};

export default CartPage;
