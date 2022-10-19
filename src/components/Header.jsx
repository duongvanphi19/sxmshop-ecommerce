import React from "react";
import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {app} from "../firebase.config";
import {motion} from "framer-motion";
import {IoMdCart} from "react-icons/io";
import Avatar from "./img/avatar.png";
const Header = () => {
   const firebaseAuth = getAuth(app);
   const authProvider = new GoogleAuthProvider();

   const login = async () => {
      const response = await signInWithPopup(firebaseAuth, authProvider);
      alert(JSON.stringify(response, null, 3));
   }
   return (
      <header className="fixed z-50 w-screen p-6 px-16">
         <div className="hidden md:flex h-full w-full">
            <div className="flex items-center gap-2">
               <p className="font-bold text-xl">SXM</p>
            </div>
            <ul className="flex items-center gap-8 ml-auto">
               <li className="text-base">Home</li>
               <li className="text-base">Features</li>
               <li className="text-base">About</li>
               <li className="text-base">Services</li>
            </ul>
            <div className="relative flex items-center ml-8">
               <IoMdCart className="relative" size={24} />
               <div className="absolute w-5 h-5 -top-2 -right-2 rounded-full bg-slate-500 flex items-center justify-center">
                  <p className="text-xs text-white font-semibold">10</p>
               </div>
            </div>
            <div className="relative">
               <motion.img
                  whileTap={{scale: 0.6}}
                  className="ml-6 w-10 h-10 min-w[40]" src={Avatar} 
                  alt="userprofile"
                  onClick={login}
               />
            </div>
         </div>
         {/*mobile*/}
         <div className="flex md:hidden h-full w-full">
            <p className="text-headingColor font-xl font-bold">SXM            </p>
         </div>

      </header>
   );
}

export default Header;
