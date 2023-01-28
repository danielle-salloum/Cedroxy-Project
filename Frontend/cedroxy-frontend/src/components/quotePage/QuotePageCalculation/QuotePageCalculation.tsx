import React, { useEffect, useState } from "react";
import "./QuotePageCalculation.css";

//data
import data from "../../../Data.json";
import { useParams } from "react-router-dom";
function QuotePageCalculation() {
  //GET ID FROM URL
  const urlcategoryId = useParams();
  let { categoryId } = urlcategoryId;

  //USE STATE
  //height:
  const [height, setHeight] = useState("");
  //width:
  const [width, setWidth] = useState("");
  //diameter:
  const [diameter, setDiameter] = useState("");
  //length:
  const [length, setLength] = useState("");
  //price:
  const [price, setPrice] = useState("");
  //Shape drop down list
  const [shape, setShape] = React.useState("");
  // const handleShapeChange = (event: SelectChangeEvent) => {
  //   setShape(event.target.value as string);
  // };

  //get shapes
  const shapeList = data.shapes;
  //get categories
  const categoryList = data.categories;
  //FILTERING THE CATEGORY LIST ACCORDING TO THE URL CATEGORY ID
  const filtered = categoryList.find(
    (category: any) => category.categoryId === categoryId
  );
  const selected_category = filtered?.name as string;

  //validator:
  const [isCalculateButtonDisabled, setCalculateButtonDisabled] =
    useState(false);
  const validator = () => {
    if (shape === "Circular") {
      //circular shape
      setHeight("0");
      setLength("0");
      if (width === "" || diameter === "") {
        setCalculateButtonDisabled(true);
      } else {
        setCalculateButtonDisabled(false);
      }
    } else {
      //rectangular shape
      setDiameter("0");
      setWidth("0");
      if (length === "" || height === "") {
        setCalculateButtonDisabled(true);
      } else {
        setCalculateButtonDisabled(false);
      }
    }
  };

  //MATHEMATICAL ALGORITHM
  function mathematical_algorithm(
    h: string,
    w: string,
    l: string,
    d: string,
    s: string,
    c: string
  ) {
    let height = Number(h);
    let width = Number(w);
    let length = Number(l);
    let diameter = Number(d);
    //let area1 = length * width;
    let area2 = length * height;
    let price = 15;
    // console.log("shape:", s);
    // console.log("height:", height);
    // console.log("width:", width);
    // console.log("length:", length);
    // console.log("diameter:", diameter);
    // console.log("area1: length * width:", area1);
    // console.log("area2: length * height:", area2);
    // console.log("category: ", c);
    if (s === "Circular") {
      //circular
      //F(W)
      if (diameter < 80) {
        price = price + 40;
      } else {
        if (diameter >= 80 && diameter < 120) {
          price = price + 80;
        } else {
          price = price + 130;
        }
      }
      //F(E)
      let epoxy =
        Math.PI *
        Math.pow(diameter / 2, 2) *
        width *
        1.1 *
        0.5 *
        17 *
        Math.pow(10, -3);
      //F(F):
      let finishing =
        ((Math.PI * Math.pow(diameter / 2, 2)) / 11) *
        (2 * 17 * Math.pow(10, -3));
      //F(CNC)
      if (diameter <= 60) {
        price = price + 30;
      } else {
        if (diameter > 60 && diameter <= 120) {
          price = price + 50;
        } else {
          price = price + 70;
        }
      }
      //F(C):
      let color =
        Math.PI *
        Math.pow(diameter / 2, 2) *
        width *
        1.1 *
        0.5 *
        (Math.pow(10, -3) / (6 * 2));
      price = price + epoxy + finishing + color;
    } else {
      //rectangular
      //F(W)
      if (area2 < 3600) {
        price = price + 40;
      } else {
        if (area2 >= 3600 && area2 < 12000) {
          price = price + 100;
        } else {
          price = price + 150;
        }
      }
      //F(E)
      let epoxy = length * height * width * 1.1 * 0.5 * 17 * Math.pow(10, -3);
      //F(F):
      let finishing = (area2 / 11) * (2 * 17 * Math.pow(10, -3));
      //F(C):
      let color =
        length * width * height * 1.1 * 0.5 * (Math.pow(10, -3) / (6 * 2));
      price = price + epoxy + finishing + color;
      //F(CNC)
      if (area2 <= 3600) {
        price = price + 30;
      } else {
        if (area2 > 3600 || area2 <= 12000) {
          price = price + 50;
        } else {
          price = price + 70;
        }
      }
    }
    if (c === "Tables") {
      //F(L)
      if (area2 <= 3600) {
        price = price + 50;
      } else {
        if (area2 > 3600 && area2 <= 12000) {
          price = price + 100;
        } else {
          price = price + 150;
        }
      }
    } else {
      price = price + 0;
    }
    return setPrice(String(price * 2.2));
  }

  useEffect(() => {
    validator();
  }, [shape]);
  return (
    <div>
      <form className="form">
        <div className="form-section">
          <div>
            <select
              id="demo-simple-select"
              value={shape}
              className="shape-section"
              onChange={(e) => setShape(e.target.value)}
              placeholder="Shape"
            >
              {shapeList && shapeList.length > 0
                ? shapeList.map((shape: any, index: any) => (
                    <option key={index} value={shape.name}>
                      {shape.name}
                    </option>
                  ))
                : "No shapes Found"}
            </select>
          </div>
          <div className="text-fields">
            <div className="inputs">
              <div>
                <input
                  className="height-section"
                  type="text"
                  placeholder="Height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  disabled={shape === "Circular" ? true : false}
                />
                <input
                  className="length-section"
                  type="text"
                  value={length}
                  placeholder="Length"
                  onChange={(e) => setLength(e.target.value)}
                  disabled={shape === "Circular" ? true : false}
                />
              </div>
              <div>
                <input
                  className="width-section"
                  type="text"
                  value={width}
                  placeholder="Width"
                  onChange={(e) => setWidth(e.target.value)}
                  disabled={shape !== "Circular" ? true : false}
                />
                <input
                  className="diameter-section"
                  type="text"
                  value={diameter}
                  placeholder="Diameter"
                  onChange={(e) => setDiameter(e.target.value)}
                  disabled={shape !== "Circular" ? true : false}
                />
              </div>
            </div>
            <div className="price">
              <input
                className="price-section"
                disabled
                id="outlined-disabled"
                value={price}
                placeholder="Price in $"
              />
              <button
                type="submit"
                className="cal-button"
                disabled={isCalculateButtonDisabled}
                onClick={(e) => {
                  e.preventDefault();
                  mathematical_algorithm(
                    height,
                    width,
                    length,
                    diameter,
                    shape,
                    selected_category
                  );
                }}
              >
                Calculate
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default QuotePageCalculation;
