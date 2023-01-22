import { Box, Button, Input, Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { edit, getdata } from "../Redux/ProductMgt/action";
import styles from "../CSS/editPage.css";
import { getData } from "../Redux/Sorting/action";

const Edit = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => {
    return store.Sortingreducer.data;
  });
  const { id } = useParams();
  const data = products.filter((i) => i.id === +id);
  //console.log(id, data, products);
  const [product, setProduct] = useState({
    id: data[0].id,
    
    title: data[0].title,
    brand: data[0].brand,
    
    price: data[0].price,
    img1: data[0].img1,
    img2: data[0].img2,
    img3: data[0].img3,
    available: true
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(edit(id, product)).then(() =>{
      dispatch(getData());
    });
    navigate("/admin");
  };
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  return (
    <Box>
        <h3 style={{marginBottom:"40px"}}>Edit Page</h3>
       <Box w="100%" display={{ md: "flex" }} justifyContent="space-around">
        <Box W="50%">
          <div className={styles.form_element_div}>
            <Input
              placeholder="title"
              type="text"
              name={""}
              value={product.title}
              className={styles.form_Input}
              onChange={(event) =>
                setProduct({ ...product, title: event.target.value })
              }
            />
          </div>
          <div className={styles.form_element_div}>
            <Input
              type="text"
              value={product.brand}
              name={""}
              onChange={(event) =>
                setProduct({ ...product, brand: event.target.value })
              }
              placeholder="brand name"
            />
          </div>
          <div className={styles.form_element_div}>
            <Input
              type="number"
              value={product.price}
              name={""}
              onChange={(event) =>
                setProduct({ ...product, price: event.target.value })
              }
              placeholder="enter price"
            />
          </div>

          {/* <div>
            <Select
              name="option"
              value={product.option}
              onChange={(event) =>
                setProduct({ ...product, option: event.target.value })
              }
            >
              <option value="">Select option</option>
              <option value="Chicken">Chicken</option>
              <option value="Biryani">Biryani</option>
              <option value="exclusivedeal">exclusivedeal</option>
              <option value="newlaunch">newlaunch</option>
              <option value="boxmeal">boxmeal</option>
              <option value="burger">burger</option>
              <option value="snacks">snacks</option>
              <option value="stayhomespecial">stayhomespecial</option>
              <option value="beverages">beverages</option>
            </Select>
          </div> */}

          {/* <div>
            <Select
              name="category"
              value={product.category}
              onChange={(event) =>
                setProduct({ ...product, category: event.target.value })
              }
            >
              <option value="">Select Category</option>
              <option value="veg">veg</option>
              <option value="non-veg">non-veg</option>
            </Select>
          </div> */}

          <div>
            <Input
              type="URL"
              placeholder="Img1 url"
              value={product.img1}
              name={""}
              onChange={(event) =>
                setProduct({ ...product, img1: event.target.value })
              }
            />
          </div>
          <div>
            <Input
              type="URL"
              placeholder="Img2 url"
              value={product.img2}
              name={""}
              onChange={(event) =>
                setProduct({ ...product, img2: event.target.value })
              }
            />
          </div>
          <div>
            <Input
              type="URL"
              placeholder="Img3 url"
              value={product.img3}
              name={""}
              onChange={(event) =>
                setProduct({ ...product, img3: event.target.value })
              }
            />
          </div>
          
          <div style={{ textAlign: "center" }}>
            <Button onClick={(e) => handleSubmit(e)}>Add Product</Button>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default Edit;
