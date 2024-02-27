"use client";
import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import firebase from "firebase/app";
import "firebase/auth";
import MapCard from "../components/Map/map";
import { Button } from "@mui/material";

function Mappage() {
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
        {/* <TextField
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

        <TextField
          id="demo-helper-text-aligned"
          label="Name"
          sx={{
            width: "400px",
          }}
        /> */}
        {[0, 1, 2, 3].map((index) => (
          <TextField
            key={index}
            id={`name-${index}`}
            label={`Name ${index + 1}`}
            value={names[index]}
            onChange={(e) => handleNameChange(index, e.target.value)}
            sx={{
              width: "400px",
            }}
          />
        ))}
        <button className="mt-4 bg-black text-white p-4 rounded">Send</button>
      </div>

      <div className="flex flex-row justify-center items-center h-full w-1/2">
        <MapCard />
      </div>
    </div>
  );
}

export default Mappage;
