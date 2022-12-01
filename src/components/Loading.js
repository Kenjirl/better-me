import React from "react";
import '../styles/components/loading.css';

export default function Loading() {
  return (
    <div className="loading-wrapper">
      <div className="circle">
        <div className="square-one"></div>
        <div className="square-two"></div>
      </div>
      <span>Loading</span>
    </div>
  )
}
