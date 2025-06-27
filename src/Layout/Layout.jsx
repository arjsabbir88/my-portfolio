"use client";
import React from "react";
import { BackgroundBeams } from "./Background-Bems";
import { Outlet } from "react-router";
import CustomCursor from "../Component/Cursor";
import NavBar from "@/Component/NavBar/NavBar";

export default function layout() {
  return (
    <div className="w-full bg-[#000000] antialiased h-screen">
      <div>
        <CustomCursor></CustomCursor>

        <div>
          <div className="max-w-full">
            <NavBar></NavBar>
          </div>
          <div>
            <Outlet></Outlet>
          </div>
        </div>

        {/* <BackgroundBeams /> */}
      </div>
    </div>
  );
}
