import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from '../src/presentation/pages/homepage.jsx'
import {Routes,Route} from "react-router-dom"

export default function App(){
  return(
    <div>
      <Homepage />
    </div>
   
  );
  
}