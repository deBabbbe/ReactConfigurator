import { FileConfigEntry } from './DataTypes/ConfigEntries'
import Configurator from './Components/Configurator'
import React, { useEffect, useState } from 'react'
import './App.scss'

let loadedConfigs: FileConfigEntry[] = []

export default function App() {
  const [isInitialized, setIsInitialized] = useState(false)
  useEffect(() => {
    loadedConfigs = require('./loadedConfigs.json') as FileConfigEntry[]
    if (loadedConfigs) setIsInitialized(true)
  }, [])

  if (isInitialized) {
    return <Configurator loadedConfigs={loadedConfigs} ></Configurator>
  }
  return <></>
}