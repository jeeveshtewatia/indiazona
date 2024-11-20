import React from "react";
import PermanentDrawerLeft from "../components/SideBar";
import SideNavigation from "../components/SideNavigation";
import { useSearchParams } from "react-router-dom";
import AddNewProduct from "../components/AddNewProduct";
import BulkListing from "../components/BulkListing";

const Home = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  return (
    <div>
      <PermanentDrawerLeft />
    </div>
  );
};

export default Home;
