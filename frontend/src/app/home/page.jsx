"use client";
import React, { useState, useEffect } from "react";
import Weathercomp from "../components/Weather/weather";
import Bento from "./Bento";
import Navbar from "../components/Hero/Navbar";
import MapCard from "../components/Map/map";
import Navbar_Home from "./Navbar_home";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function Weather() {
  const [chemicals, setChemicals] = useState(true);
  const [age, setAge] = React.useState("");
  
  const [selectedCrop, setSelectedCrop] = useState("apple");
  const [formData, setFormData] = useState({
    N: "",
    P: "",
    K: "",
    pH: "",
    temperature: "",
    humidity: "",
    rainfall: ""
  });


  const [runs, setRuns] = useState(0);  // get data from localstorage currentData
  const [currData, setCurrData] = useState(null);
  const [currForecast, setCurrForecast] = useState([]);
  const [selectcrop , setselectcrop] = useState([])
  useEffect(() => {
    if (runs < 2) {
      console.log(`Running useEffect for the ${runs + 1} time`);
      console.log("fetching from local storage"); 
      const curr = localStorage.getItem('currentData');
      const forecast = localStorage.getItem('forecastData');

      setCurrData(curr);
      setCurrForecast(JSON.parse(forecast))    //parsing the data and rhen savingit 
      // setCurrForecast(forecast); 
      console.log('daata is ', forecast)

      

      console.log("fetched from localstorage");
      console.log("currdata is:", curr);
      console.log("forecast is:", forecast);

      setRuns(runs + 1);
    }
  }, [runs]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleChangeR = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Submit form data using fetch
    fetch("http://127.0.0.1:2000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Prediction response:", data.crop);
        // Handle response as needed
        setChemicals(false);
        setselectcrop( data.crop )

      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
      });
  };

  const chemical = () => {
    console.log("chemical ");
    setChemicals(false);
  };
  return (
    <div className=" h-screen">
      <Navbar_Home />
      <div className="flex flex-row justify-center items-center bg-white h-[80vh]">
        <div className="text-black flex flex-col w-[50vw] justify-center items-center ">
          <div className="w-3/5  flex flex-wrap  justify-center items-center  gap-10 ">
            {chemicals ? (
              <div className="flex flex-row justify-evenly items-center w-full">
                <TextField
                  name="N"
                  id="demo-helper-text-aligned"
                  label="N"
                  onChange={handleChangeR}
                />
                <TextField
                  name="P"
                  id="demo-helper-text-aligned"
                  label="P"
                  onChange={handleChangeR}
                />
                <TextField
                  name="K"
                  id="demo-helper-text-aligned"
                  label="K"
                  onChange={handleChangeR}
                />
                <TextField
                  name="ph"
                  id="demo-helper-text-aligned"
                  label="pH"
                  onChange={handleChangeR}
                />
                <TextField
                  name="temperature"
                  id="demo-helper-text-aligned"
                  label="Temperature"
                  onChange={handleChangeR}
                />
                <TextField
                  name="humidity"
                  id="demo-helper-text-aligned"
                  label="Humidity"
                  onChange={handleChangeR}
                />
                <TextField
                  name="rainfall"
                  label="Rainfall"
                  value={formData.rainfall}
                  onChange={handleChange}
                />

                <button
                  className="bg-black text-white p-2 mb-5 rounded-md"
                  onClick={handleSubmit}
                >
                  Send
                </button>
              </div>
            ) : (
              <div className="flex flex-row justify-center items-center w-full">
              <Select
                labelId="crop-select-label"
                id="crop-select"
                onChange={handleChange}
                
                value={selectedCrop}
                label="Select Crop"
                sx={{ width: "60%" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {selectcrop.map((crop, index) => (
                  <MenuItem key={index} value={crop}>
                    {crop}
                  </MenuItem>
                ))}
              </Select>
            </div>
            )}
          {
  selectedCrop ? (
    <div className="flex flex-wrap gap-5 justify-center items-center w-full">
      <Bento
        heading={"Avg Duration"}
        subs={cropData[selectedCrop].avgDuration + " days"}
      />
      <Bento
        heading={"Benifits"}
        subs={cropData[selectedCrop].benefits.join(", ")}
      />
      <Bento heading={"Best Crop After this"} subs={cropData[selectedCrop].bestCrop} />
      <Bento heading={"Benifits"} subs={cropData[selectedCrop].benefits}/>
    </div>
  ) : (
    <div></div>
  )
  }
          </div>
        </div>
        <div className="w-2/5 h-full  flex flex-row justify-center items-center">
          <div className="bg-green-800 w-[90%] rounded-xl h-4/5">
            <MapCard zoom={15} />
          </div>
        </div>
      </div>
      <div className=" h-[20vh] bg-white text-black w-full flex flex-row justify-start gap-2 items-center overflow-x-scroll p-2">
        <Weathercomp />
        <Weathercomp />
        <Weathercomp />
        <Weathercomp />
        <Weathercomp />
        <Weathercomp />
        <Weathercomp />
        {/* <Weathercomp />
        <Weathercomp />
        <Weathercomp />
        <Weathercomp />
        <Weathercomp />
        <Weathercomp />
        <Weathercomp />
        <Weathercomp /> */}
        
        {/* {currForecast.list.map((item, index) => (
          <Weathercomp
            key={index}
            date={item.dt_txt}
            temperature={item.main.temp}
            humidity={item.main.humidity}
            weatherDescription={item.weather[0].description}
            // Pass other relevant data as props
          />
        ))} */}
        {/* {currForecast && currForecast.list && currForecast.list.length > 0 && (
          currForecast.list.map((item, index) => (
            <Weathercomp
              key={index}
              date={item.dt_txt}
              temperature={item.main.temp}
              humidity={item.main.humidity}
              weatherDescription={item.weather[0].description}
              // Pass other relevant data as props
            />
          ))
        )} */}
        
         {/* {currForecast.map((forecast, index) => (
          <Weathercomp key={index} forecast={forecast} />
        ))}  */}
      </div>
    </div>
  );
}

const cropData = {
  'rice': {
    marketProfits: 50000, // Market Profits in INR
    avgDuration: 120, // Average duration to grow in days
    bestCrop: 'maize', // Best crop to grow after rice
    benefits: ['High in carbohydrates', 'Versatile usage'] // Benefits of rice
  },
  'maize': {
    marketProfits: 60000,
    avgDuration: 90,
    bestCrop: 'chickpea',
    benefits: ['Used as food and feed', 'High nutritional value']
  },
  'chickpea': {
    marketProfits: 55000,
    avgDuration: 100,
    bestCrop: 'kidneybeans',
    benefits: ['Rich in protein', 'Improves soil fertility']
  },
  'kidneybeans': {
    marketProfits: 70000,
    avgDuration: 80,
    bestCrop: 'pigeonpeas',
    benefits: ['High in fiber', 'Fixes nitrogen in soil']
  },
  'pigeonpeas': {
    marketProfits: 65000,
    avgDuration: 110,
    bestCrop: 'mothbeans',
    benefits: ['Good source of protein', 'Drought tolerant']
  },
  'mothbeans': {
    marketProfits: 60000,
    avgDuration: 75,
    bestCrop: 'mungbean',
    benefits: ['High in protein', 'Improves soil fertility']
  },
  'mungbean': {
    marketProfits: 58000,
    avgDuration: 70,
    bestCrop: 'blackgram',
    benefits: ['Good source of nutrients', 'Short duration crop']
  },
  'blackgram': {
    marketProfits: 62000,
    avgDuration: 75,
    bestCrop: 'lentil',
    benefits: ['High in protein', 'Improves soil fertility']
  },
  'lentil': {
    marketProfits: 59000,
    avgDuration: 80,
    bestCrop: 'pomegranate',
    benefits: ['Rich in protein', 'Improves soil fertility']
  },
  'pomegranate': {
    marketProfits: 90000,
    avgDuration: 150,
    bestCrop: 'banana',
    benefits: ['Rich in antioxidants', 'Highly nutritious']
  },
  'banana': {
    marketProfits: 80000,
    avgDuration: 180,
    bestCrop: 'mango',
    benefits: ['High in potassium', 'Good for digestion']
  },
  'mango': {
    marketProfits: 85000,
    avgDuration: 200,
    bestCrop: 'grapes',
    benefits: ['Rich in vitamins', 'Improves immunity']
  },
  'grapes': {
    marketProfits: 75000,
    avgDuration: 150,
    bestCrop: 'watermelon',
    benefits: ['Rich in antioxidants', 'Hydrating']
  },
  'watermelon': {
    marketProfits: 70000,
    avgDuration: 100,
    bestCrop: 'muskmelon',
    benefits: ['Hydrating', 'Low in calories']
  },
  'muskmelon': {
    marketProfits: 65000,
    avgDuration: 95,
    bestCrop: 'apple',
    benefits: ['High in vitamins', 'Refreshing']
  },
  'apple': {
    marketProfits: 85000,
    avgDuration: 180,
    bestCrop: 'orange',
    benefits: ['Rich in antioxidants', 'Improves heart health']
  },
  'orange': {
    marketProfits: 80000,
    avgDuration: 160,
    bestCrop: 'papaya',
    benefits: ['Rich in vitamin C', 'Boosts immunity']
  },
  'papaya': {
    marketProfits: 75000,
    avgDuration: 120,
    bestCrop: 'coconut',
    benefits: ['Rich in vitamins', 'Improves digestion']
  },
  'coconut': {
    marketProfits: 70000,
    avgDuration: 200,
    bestCrop: 'cotton',
    benefits: ['Versatile usage', 'Highly nutritious']
  },
  'cotton': {
    marketProfits: 60000,
    avgDuration: 180,
    bestCrop: 'jute',
    benefits: ['Used in textile industry', 'Drought tolerant']
  },
  'jute': {
    marketProfits: 65000,
    avgDuration: 150,
    bestCrop: 'coffee',
    benefits: ['Eco-friendly', 'Highly renewable']
  },
  'coffee': {
    marketProfits: 90000,
    avgDuration: 365,
    bestCrop: null, // Assuming coffee has no specific best crop to grow after
    benefits: ['Stimulating', 'Source of antioxidants']
  }
};


export default Weather;
