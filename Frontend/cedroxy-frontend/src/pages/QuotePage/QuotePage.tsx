import "./QuotePage.css";
import React from "react";

//component
import Foot from "../../components/footer/Foot";
import Header from "../../components/header/Header";
import ProductsComponent from "../../components/productsComponent/ProductsComponent";
import ShopPageSideBar from "../../components/shopPage/ShopPageSideBar/ShopPageSideBar";

//Material UI
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

//pics
import ChessBoardPic from "../../assets/products/Product2.png";

function QuotePage() {
  //UseState:
  //Shape drop down list
  const [shape, setShape] = React.useState("");
  const handleShapeChange = (event: SelectChangeEvent) => {
    setShape(event.target.value as string);
  };
  //Leg drop down list
  const [leg, setLeg] = React.useState("");
  const handleLegChange = (event: SelectChangeEvent) => {
    setLeg(event.target.value as string);
  };
  //wood species drop down list
  const [woodSpecies, setWoodSpecies] = React.useState("");
  const handleWoodSpeciesChange = (event: SelectChangeEvent) => {
    setWoodSpecies(event.target.value as string);
  };
  //product drop down list
  const [product, setProduct] = React.useState("");
  const handleProductChange = (event: SelectChangeEvent) => {
    setProduct(event.target.value as string);
  };

  return (
    <div>
      <Header />
      <div className="quote-container">
        <ShopPageSideBar />
        <div className="quote-dashboard">
          {/* selected product */}
          <ProductsComponent
            name="Chess Board"
            description=" consists of 64 squares, 
          8 rows by 8 columns, on which the chess pieces are placed. 
          It is square in shape and uses two colors of squares,
          one light and one dark, in a chequered patter"
            image={ChessBoardPic}
          />

          {/* Product list */}
          <Grid className="main-grid" container spacing={2}>
            <Grid item xs={6} md={6} lg={6}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select Your Product
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={product}
                    label="Product"
                    onChange={handleProductChange}
                  >
                    <MenuItem value={10}>Tables</MenuItem>
                    <MenuItem value={20}>ChessBoard</MenuItem>
                    <MenuItem value={30}>Wall Clocks</MenuItem>
                    <MenuItem value={40}>Bar</MenuItem>
                    <MenuItem value={50}>Trays</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            {/* Height */}
            <Grid item xs={6} md={6} lg={6}>
              <TextField
                onChange={() => {}}
                label="Height"
                fullWidth
              ></TextField>
            </Grid>

            {/* Width */}
            <Grid item xs={6} md={6} lg={6}>
              <TextField
                onChange={() => {}}
                label="Width"
                fullWidth
              ></TextField>
            </Grid>

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
                    <MenuItem value={10}>Circular</MenuItem>
                    <MenuItem value={20}>Rectangular</MenuItem>
                    <MenuItem value={30}>square</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            {/* leg Selector */}
            <Grid item xs={6} md={6} lg={6}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Legs</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={leg}
                    label="Legs"
                    onChange={handleLegChange}
                  >
                    <MenuItem value={10}>Circular</MenuItem>
                    <MenuItem value={20}>Rectangular</MenuItem>
                    <MenuItem value={30}>square</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            {/* wood species Selector */}
            <Grid item xs={6} md={6} lg={6}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Wood Species
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={woodSpecies}
                    label="Wood Species"
                    onChange={handleWoodSpeciesChange}
                  >
                    <MenuItem value={10}>Circular</MenuItem>
                    <MenuItem value={20}>Rectangular</MenuItem>
                    <MenuItem value={30}>square</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            {/* price viewer */}
            <Grid item xs={6} md={6} lg={6}>
              <TextField
                onChange={() => {}}
                label="Price"
                fullWidth
                disabled
              ></TextField>
            </Grid>
          </Grid>
        </div>
      </div>
      <Foot />
    </div>
  );
}

export default QuotePage;
