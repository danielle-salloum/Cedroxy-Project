import "./QuotePageDashboard.css";

//mui
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { Button } from "react-bootstrap";

//Hooks
import React, { useState } from "react";
import { useParams } from "react-router";

//data
import data from "../../../Data.json";

//components
import ProductsComponent from "../../productsComponent/ProductsComponent";

//Image
import logo from "../../../assets/TransparentCedroxyLogo.png";

function QuotePageDashboard() {
  //USE STATE
  //height:
  const [height, setHeight] = useState("");
  //width:
  const [width, setWidth] = useState("");
  //radius:
  const [diameter, setDiameter] = useState("");
  //radius:
  const [length, setLength] = useState("");
  //Shape drop down list
  const [shape, setShape] = React.useState("");
  const handleShapeChange = (event: SelectChangeEvent) => {
    setShape(event.target.value as string);
  };
  //user_email
  const [userEmail, setUserEmail] = useState("");
  //price:
  const [price, setPrice] = useState("");

  //get
  //categories
  const categoryList = data.categories;
  //shapes
  const shapeList = data.shapes;
  //category id from url
  const urlcategoryId = useParams();
  let { categoryId } = urlcategoryId;
  console.log("category id from URL: ", urlcategoryId);
  console.log(" id from URL: ", categoryId);

  //FILTERING THE CATEGORY LIST ACCORDING TO THE URL CATEGORY ID
  const filtered = categoryList.find(
    (category: any) => category.categoryId === categoryId
  );
  console.log("categories", categoryList);
  console.log("filtered", filtered);

  //MATHEMATICAL ALGORITHM
  //function mathematical_algorithm() {
  // let height = Number(document.getElementById("height-text-field"));
  // let width = Number(document.getElementById("width-text-field"));
  // let length = Number(document.getElementById("length-text-field"));
  // let diameter = Number(document.getElementById("diameter-text-field"));
  //   let height = 5;
  //   let length = 80;
  //   let width = 50;
  //   let shape = "Rectangle";
  //   let diameter = 80;
  //   let area1 = length * width;
  //   let area2 = length * height;
  //   let price = 15;
  //   if (shape === "Circular") {
  //     //F(E):
  //     let epoxy =
  //       Math.PI *
  //       Math.pow(diameter / 2, 2) *
  //       width *
  //       1.1 *
  //       0.5 *
  //       17 *
  //       Math.pow(10, -3);
  //     //F(F):
  //     let finishing =
  //       (Math.PI * Math.pow(diameter / 2, 2)) /
  //       (11 * 2 * 17 * Math.pow(10, -3));
  //     //F(C):
  //     let color =
  //       Math.PI *
  //       Math.pow(diameter / 2, 2) *
  //       width *
  //       1.1 *
  //       0.5 *
  //       (Math.pow(10, -3) / (6 * 2));
  //     price = price + epoxy + finishing + color;
  //     //F(W):
  //     if (diameter < 80) {
  //       price = price + 40;
  //     } else {
  //       if (diameter >= 80 && diameter < 120) {
  //         price = price + 80;
  //       } else {
  //         price = price + 130;
  //       }
  //     }
  //     //F(CNC)
  //     if (diameter <= 60) {
  //       price = price + 30;
  //     } else {
  //       if (diameter > 60 && diameter <= 120) {
  //         price = price + 50;
  //       } else {
  //         price = price + 70;
  //       }
  //     }
  //     //F(L)
  //   } else {
  //     //Rectangular shape
  //     //F(E):
  //     let epoxy = length * width * height * 1.1 * 0.5 * 17 * Math.pow(10, -3);
  //     //F(F):
  //     let finishing = ((length * width) / 11) * 2 * 17 * Math.pow(10, -3);
  //     //F(C):
  //     let color =
  //       length * height * width * 1.1 * 0.5 * (Math.pow(10, -3) / (6 * 2));
  //     price = price + epoxy + finishing + color;
  //     //F(W):
  //     if (area1 < 3600) {
  //       price = price + 40;
  //     } else {
  //       if (area1 >= 3600 && area1 < 120000) {
  //         price = price + 100;
  //       } else {
  //         price = price + 150;
  //       }
  //     }
  //     //F(CNC)
  //     if (area2 <= 3600) {
  //       price = price + 30;
  //     } else {
  //       if (area1 > 3600 && area1 <= 120000) {
  //         price = price + 50;
  //       } else {
  //         price = price + 70;
  //       }
  //     }
  //   }
  //   return setPrice(String(price * 2.2));
  // }
  //TEST IF CATEGORY IS TABLE OR CLOCK
  //    if (urlcategoryId == "1") {
  //    if (diameter <= 60) {
  //        price = price + 50;
  //      } else {
  //        price = price + 100;
  //      }
  //    } else {
  //     return setPrice(price * 2.2);
  //    }
  //  }
  function ValidateEmail(mail: string) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }

  return (
    <div className="quote-dashboard">
      {/* selected product */}
      {urlcategoryId != null ? (
        filtered ? (
          <ProductsComponent name={filtered.name} image={filtered.image[0]} />
        ) : (
          <ProductsComponent name="Choose Your Category" image={logo} />
        )
      ) : (
        "No Categories Found"
      )}

      <Grid className="main-grid" container spacing={2}>
        {/* Shape Selector */}
        <Grid item xs={6} md={6} lg={6}>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Shape</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={shape}
                label="Shape"
                onChange={handleShapeChange}
              >
                {shapeList && shapeList.length > 0
                  ? shapeList.map((shape: any, index: any) => (
                      <MenuItem key={index} value={index}>
                        {shape.name}
                      </MenuItem>
                    ))
                  : "No shapes Found"}
              </Select>
            </FormControl>
          </Box>
        </Grid>

        {/* Height */}
        <Grid item xs={6} md={6} lg={6}>
          <TextField
            id="height-text-field"
            onChange={(e) => setHeight(e.target.value)}
            label="Height"
            fullWidth
          ></TextField>
        </Grid>

        {/* Length */}
        <Grid item xs={6} md={6} lg={6}>
          <TextField
            id="length-text-field"
            onChange={(e) => setLength(e.target.value)}
            label="length"
            fullWidth
          ></TextField>
        </Grid>

        {/* Width */}
        <Grid item xs={6} md={6} lg={6}>
          <TextField
            id="width-text-field"
            onChange={(e) => setWidth(e.target.value)}
            label="Width"
            fullWidth
          ></TextField>
        </Grid>

        {/* Diameter */}
        <Grid item xs={6} md={6} lg={6}>
          <TextField
            onChange={(e) => setDiameter(e.target.value)}
            label="Diameter"
            fullWidth
          ></TextField>
        </Grid>

        {/* price viewer */}
        <Grid item xs={6} md={6} lg={6}>
          <TextField disabled id="outlined-disabled" label={price} />
        </Grid>

        {/* <Button
          onClick={() => console.log("price: ", mathematical_algorithm())}
        >
          Calculate
        </Button> */}
        <Grid className="main-grid" container spacing={2}>
          <p>For more info, Subscribe!!</p>
          <Grid item xs={6} md={6} lg={6}>
            <TextField
              helperText="Please enter your Email"
              id="demo-helper-text-misaligned"
              label="Email"
              name="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <Grid item xs={6} md={6} lg={6}>
              <Button
                color="primary"
                variant="contained"
                type="submit"
                onClick={() => {}}
                className="subscribe-btn"
              >
                Subscribe
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default QuotePageDashboard;
