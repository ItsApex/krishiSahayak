"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MapCard from "../components/Map/map";
import { Button } from "@mui/material";

function Mappage() {
  const [coordinates, setCoordinates] = useState([]);
  const [names, setNames] = useState(["", "", "", ""]); // Initialize state for 4 names

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
      coordinates: coordinates,
    };

    // Send data to backend (replace console.log with actual API call)
    console.log("Data to send:", dataToSend);

    // Reset names after sending data
    setNames(["", "", "", ""]);
  };

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
