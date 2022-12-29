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

//Hooks
import { useState } from "react";

//data
import data from "../../../Data.json";

//components
import ProductsComponent from "../../productsComponent/ProductsComponent";

//Image
import logo from "../../../assets/CedroxyLogo.png";
import { useParams } from "react-router";
import React from "react";

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
  //price:
  const [price, setPrice] = useState("");

  //get
  //categories
  const categoryList = data.categories;
  //shapes
  const shapeList = data.shapes;
  //category id from url
  const urlcategoryId = useParams();
  console.log("category id from URL: ", urlcategoryId);

  //FILTERING THE CATEGORY LIST ACCORDING TO THE URL CATEGORY ID
  const filtered = categoryList.find(
    (category: any) => category.categoryId === urlcategoryId
  );
  console.log("categories", categoryList);
  console.log("filtered", filtered);

  //MATHEMATICAL ALGORITHM
  // function mathematical_algorithm() {
  //   let height = document.getElementById("height-text-field");
  //   let width = document.getElementById("width-text-field");
  //   if (shape === "Rectangle") {
  //     setPrice =
  //   }
  // }
  return (
    <div className="quote-dashboard">
      {/* selected product */}
      {urlcategoryId != null ? (
        filtered ? (
          <ProductsComponent name={filtered.name} image={filtered.image} />
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
            onChange={(e) => setWidth(e.target.value)}
            label="Diameter"
            fullWidth
          ></TextField>
        </Grid>

        {/* price viewer */}
        <Grid item xs={6} md={6} lg={6}>
          <TextField label={price} fullWidth disabled></TextField>
        </Grid>
      </Grid>
    </div>
  );
}

export default QuotePageDashboard;
