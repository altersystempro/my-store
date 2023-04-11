import React from "react";
import logo from "./logo.jpeg";
//import { useSession  } from 'next-auth/react';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";
//import { Link } from "react-router-dom";

//import { useCheckAuth } from "../../hooks";
//import { useSelector } from "react-redux";

function Header() {
  //const session = useSession();
  //console.log({session});

  const status = false;

  //const { status, displayName } = useSelector( state => state.auth );

  return (
    <header>
      {/* Top nav */}
      <div className="flex items-center bg-teal-900 p-1 flex-grow py-2">
        <div className="flex items-center flex-grow sm:flex-grow-0 cursor-pointer ml-6">
          <Link href="/">
            <Image src={logo} alt="logo" width={35} height={4} />
          </Link>
          <Link href="/">
            <span className="px-1 mr-6 text-yellow-500">
              Editorial Renanteck
            </span>
          </Link>
        </div>
        {/* Search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow bg-yellow-400 hover:bg-yellow-500">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          />
          <span className="p-4 cursor-pointer">
            <SearchOutlinedIcon className="h-14 w-4" />
          </span>
        </div>
        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          {status ? (
            <div className="link">
              <p>displayName</p>
              <p className="font-extrabold md:text-sm">Login</p>
            </div>
          ) : (
            <div className="link">
              <Link href={"/auth/login"}>
                <p> displayName </p>
                <p className="font-extrabold md:text-sm">Acoount & Lists </p>
              </Link>
            </div>
          )}

          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="relative link flex items-center">
            <Link href={"/carrito"}>
              <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
                0
              </span>
              <ShoppingCartIcon className="h-10" />
              <p className="hidden md:inline font-extrabold md:text-sm mt-2">
                Carrito
              </p>
            </Link>
          </div>
        </div>
      </div>
      {/* Buttom nav */}
      <div className="flex items-center space-x-3 py-2 pl-6 bg-slate-400 text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 ml-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today`s Deals</p>
        <p className="link hidden lg:inline-flex">Electronic</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
