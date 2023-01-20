import React, { useEffect, useState } from "react";

const Payment = () => {
  const [payableAmount, setPayableAmount] = useState(0);
  useEffect(() => {
    setPayableAmount(localStorage.getItem("payableAmount") || 0);
    // cleanup
    return () => {
      localStorage.removeItem("payableAmount");
    };
  }, []);
  return <div>Payable Amount - Rs. {payableAmount}</div>;
};

export default Payment;
