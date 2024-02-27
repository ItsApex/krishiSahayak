"use client";
import React from "react";
import TextField from "@mui/material/TextField";
import MapCard from "../components/Map/map";
import { Button } from "@mui/material";

function Mappage() {
  const [coordinates, setCoordinates] = useState([]);

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

  const [names, setNames] = useState(["", "", "", ""]); // Initialize state for 4 names

  const handleNameChange = (index, value) => {
    // Update the name at the specified index in the state array
    setNames((prevNames) => {
      const updatedNames = [...prevNames];
      updatedNames[index] = value;
      return updatedNames;
    });
  };

  const handleSend = () => {
    // Call your API with the data in the text fields
    const dataToSend = {
      names: names.filter((name) => name.trim() !== ""), // Remove empty names
    };
    // Replace the console.log with your API call
    console.log("Data to send:", dataToSend);
  };

  return (
    <div className="h-screen bg-green-300 flex flex-row ">
      <div className="w-1/2 flex flex-col  justify-center items-center  gap-5 h-full bg-red-100">
        <TextField
          id="demo-helper-text-aligned"
          label="Name"
          sx={{
            width: "400px",
          }}
        />
        <TextField
          id="demo-helper-text-aligned"
          label="Name"
          sx={{
            width: "400px",
          }}
        />
        <TextField
          id="demo-helper-text-aligned"
          label="Name"
          sx={{
            width: "400px",
          }}
        />
        <div>
          <h2>Coordinates:</h2>
          <ul>
            {coordinates.map((coordinate, index) => (
              <li key={index}>{JSON.stringify(coordinate)}</li>
            ))}
          </ul>
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
