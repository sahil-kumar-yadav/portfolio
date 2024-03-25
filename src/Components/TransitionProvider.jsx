"use client";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";

const TransitionProvider = ({ children }) => {
    return (
        <AnimatePresence>
            <div className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100 ">
                <div className="h-24">
                    <Navbar/>
                </div>
            </div>

            <div className="h-[calc(100vh-6rem)]">
                {children}
            </div>
        </AnimatePresence>
    );
}

export default TransitionProvider;