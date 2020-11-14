import { StatusBar } from 'expo-status-bar';
import React from 'react';
import LandingPage from './src/FirstPart';



export default function App() {
  return (
    <>
      <LandingPage/>
      <StatusBar style="auto" />
    </>
  );
}

