import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./components/home";
import Details from "./components/details";

const RouterComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/:id" element={<Details />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterComponent