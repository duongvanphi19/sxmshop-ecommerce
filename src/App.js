import React from "react";
import {Route, Routes} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import {Header} from "./components";
const App = () => {
   return (
      <AnimatePresence>
      <div className="w-screen h-auto flex flex-col">
         <Header/>
         <main className="mt-24 p-8 w-full">
            
         </main>
      </div>
      </AnimatePresence>
   );

}
export default App;
