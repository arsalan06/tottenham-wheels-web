import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../../pages/Index";
import Tyres from "../../pages/Tyres";
import Wheels from "../../pages/Wheels";
import Accessories from "../../pages/Accessories";
import Services from "../../pages/Services";
import About from "../../pages/About";
import ProductDetail from "../../pages/ProductDetail";
import NotFound from "../../pages/NotFound";
import { wheelService } from "../../services/wheelService";
import { tyreService } from "../../services/tyreService";
import { useDispatch } from "react-redux";
import {
  addTyresStock,
  addWheelsStock,
} from "../../redux/slice/productStockSlice";
import Contact from "../../pages/Contact";

const Router = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const wheelsData = await wheelService.getWheels();
        const tyresData = await tyreService.getTyres();
        dispatch(addTyresStock(tyresData));
        dispatch(addWheelsStock(wheelsData));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/tyres" element={<Tyres />} />
      <Route path="/wheels" element={<Wheels />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
