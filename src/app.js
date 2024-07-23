import { Canvas } from '@react-three/fiber';
import React, { Suspense, useState } from 'react';
import {Experience} from './component/Experience';
import './app.css'

const App = () => {
 return <Canvas>
  <Suspense fallback = {null} >

  <Experience/>
  </Suspense>
 </Canvas>
};

export default App;
