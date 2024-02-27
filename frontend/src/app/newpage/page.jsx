"use client";
import React from "react";
import TextField from "@mui/material/TextField";
import firebase from "firebase/app";
import "firebase/auth";
import MapCard from "../components/Map/map";
import { Button } from "@mui/material";

function Mappage() {
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
      </div>
      <div className="flex flex-row justify-center items-center h-full w-1/2">
        <MapCard />
      </div>
    </div>
  );
}

export default Mappage;
