import './App.css'
import Topbar from "./components/Topbar";
import Bottombar from "./components/Bottombar";
import { Outlet } from "react-router-dom";



function App() {
 
  return (
   <main className="flex h-screen">
     
   <div className=" h-full w-full">
      <Topbar/>
      <section className='flex flex-1  '>
      <Outlet/>
      </section>
      <Bottombar/>
    </div> 
   
   </main>
  )
}

export default App
