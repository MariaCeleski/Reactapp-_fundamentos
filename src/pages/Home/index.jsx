import React, { useState } from "react";
import './style.css'
import { Card } from '../../components/Card'

export function Home() {
  const [studentName, setStudentName] = useState("");
  return (
    <div className="container">
    <h1>Nome: {studentName}</h1>
    <input type="text" placeholder="Digite o nome..."
    onChange={(e) => setStudentName(e.target.value)} />
    <button type="button">Adicionar</button>
    
    <Card name="Rodrigo" time="10:55:25" />
    <Card name="João" time="11:00:10"/>
    <Card name="Ana" time="12:55:25" />
    <Card name="Joaquim" time="21:00:10"/>
    

    </div>
  )
}


