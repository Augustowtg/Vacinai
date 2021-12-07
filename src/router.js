import React from "react";
import { Routes ,Route, BrowserRouter } from 'react-router-dom';
import history from "./historys";

// Import Components
import Home from "./core/pages/Home";
import NotFound from "./core/pages/NotFound";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="*" component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
