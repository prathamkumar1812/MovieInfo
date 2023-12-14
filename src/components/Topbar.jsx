import React, { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Input} from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";




export default function Topbar() {
  const navigate=useNavigate();
  const searchHandlar=(e)=>{
    e.preventDefault()
       navigate(`/search/${search}`)

  }
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [search ,setSearch]=useState('');
  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Upcoming", link: "/upcoming" },
    { name: "Playing", link: "/playing" },
  ];
  

  return (
    <Navbar isBordered shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
         
          <p className="  lg:text-5xl md:text-3xl text-primary font-bold text-inherit">MovieInfo</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem >
         <NavLink to={'/'} className={({isActive})=>` py-2 pr-4 pl-3 ${isActive?'text-primary ':'text-gray-700'} hover:text-primary-500`}>
           Home
         </NavLink>
        </NavbarItem>
        <NavbarItem  >
        <NavLink to={'/upcoming'} className={({isActive})=>` py-2 pr-4 pl-3  ${isActive?'text-primary':'text-gray-700'} hover:text-primary-500`}>
           Upcoming
         </NavLink>
        </NavbarItem>
        <NavbarItem>
        <NavLink to={'/playing'} className={({isActive})=>` py-2 pr-4 pl-3 ${isActive?'text-primary':'text-gray-700'} hover:text-primary-500`}>
           Playing
         </NavLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <form onSubmit={(e)=>searchHandlar(e)} className="flex flex-row gap-2 items-center justify-center"  >
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[20rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="lg"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          type="search"
        />
        <Button  className="hidden md:block lg:block" type="submit" >Submit</Button>
        </form>
      
       
      </NavbarContent>
      <NavbarMenu >
        {menuItems.map(({name,link}) => (
          <NavbarMenuItem key={name} >
           <NavLink to={link} onClick={()=>setIsMenuOpen(prev=>!prev)} className={({isActive})=>` py-2 pr-4 pl-3 ${isActive?'text-primary ':'text-gray-700'} hover:text-primary-500`}>
            {name}
         </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
