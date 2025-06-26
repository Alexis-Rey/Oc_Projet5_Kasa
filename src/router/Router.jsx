import React from "react";
import {Routes, Route} from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

function Router() {
    return <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/*" element={<NotFound />} />
        </Route>
    </Routes>
};

export default Router;