"use client";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import MapCard from "../components/Map/map";
import { Button } from "@mui/material";
import { useRouter } from 'next/navigation'
function Mappage() {
  const [coordinates, setCoordinates] = useState([]);
  const [names, setNames] = useState(["", "", "", ""]); // Initialize state for 4 names
  const [firstcall, setfirstcall] = useState(false);
  const [secCall, setsecCall] = useState(false);

  const [forecastData, setForecastData] = useState(null);
  const [currentData, setCurrentData] = useState(null);
  
  const router = useRouter()
  // Function to handle adding coordinates
  const handleAddCoordinate = (coordinate) => {
    if (coordinates.length < 4) {
      setCoordinates([...coordinates, coordinate]);
    }
  };

  // Function to handle removing coordinates
  const handleRemoveCoordinate = () => {
    setCoordinates([]);
  };

  // Function to handle changes in name text fields
  const handleNameChange = (index, value) => {
    setNames((prevNames) => {
      const updatedNames = [...prevNames];
      updatedNames[index] = value;
      return updatedNames;
    });
  };

  // Function to send data to backend
  const handleSend = () => {
    // Filter out empty names
    const filteredNames = names.filter((name) => name.trim() !== "");

    // Prepare data to send to backend
    const dataToSend = {
      names: filteredNames,
      coordinates: coordinates.map((coord) => ({
        lat: coord.lat,
        lon: coord.lon,
      })),
    };

    const points = [
      { lat: coordinates[0][0], lon: coordinates[0][1] },
      { lat: coordinates[1][0], lon: coordinates[1][1] },
      { lat: coordinates[2][0], lon: coordinates[2][1] },
      { lat: coordinates[3][0], lon: coordinates[3][1] },
    ];
    const pointreq = { lat: coordinates[0][0], lon: coordinates[0][1] };

    console.log(
      JSON.stringify({
        pointreq,
      })
    );

    // Send data to backend
    fetch("http://127.0.0.1:2000/curr_loc_data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        points,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        setfirstcall(true);
        return response.json();
      })
      .then((data) => {
        console.log("Response received:", data);

        // save it to local storage
        localStorage.setItem("currentData", JSON.stringify(data));
        setCurrentData(data);
        // Reset names after sending data
        setNames(["", "", "", ""]);
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
      });

    // Send data to backend
    fetch("http://127.0.0.1:2000/seven_day_forecast", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pointreq,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        setsecCall(true);
        return response.json();
      })
      .then((data) => {
        console.log("Response received:", data);

        // save it to local storage
        localStorage.setItem("forecastData", JSON.stringify(data));
        setForecastData(data)
        // Reset names after sending data
        setNames(["", "", "", ""]);
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
      });
  };


  useEffect(() => {
    if(firstcall == true && secCall == true){

      router.push('/home')
    }
  },[firstcall, secCall])
  return (
    <div className="h-screen bg-green-300 flex flex-row ">
      <div className="w-1/2 flex flex-col justify-center items-center gap-5 h-full bg-red-100">
        {/* Render TextFields for names */}
        {/* {names.map((name, index) => (
          <TextField
            key={index}
            id={`name-${index}`}
            label={`Name ${index + 1}`}
            value={name}
            onChange={(e) => handleNameChange(index, e.target.value)}
            sx={{
              width: "400px",
            }}
          />
        ))} */}

        {/* Render TextFields for coordinates */}
        {coordinates.map((coordinate, index) => (
          <TextField
            key={index}
            id={`coordinate-${index}`}
            label={`Coordinate ${index + 1}`}
            value={JSON.stringify(coordinate)}
            sx={{
              width: "400px",
            }}
            disabled // Disable editing
          />
        ))}

        <div>
          {coordinates.length === 4 && (
            <Button
              onClick={handleRemoveCoordinate}
              variant="outlined"
              color="secondary"
            >
              Remove All
            </Button>
          )}
        </div>
        <button onClick={handleSend} className="bg-black p-4 rounded">
          Send
        </button>
      </div>

      <div className="flex flex-row justify-center items-center h-full w-1/2">
        <MapCard
          onCoordinateClick={handleAddCoordinate}
          coordinates={coordinates}
        />
      </div>
    </div>
  );
}

export default Mappage;
