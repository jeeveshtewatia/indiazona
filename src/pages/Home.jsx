import React from "react";
import PermanentDrawerLeft from "../components/SideBar";
import { useSearchParams } from "react-router-dom";

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
