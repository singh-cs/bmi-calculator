import React from "react";

export default function Result({weight, height}){
    const bmi = Math.round(((weight*10000)/Math.pow(height,2))*100)/100
    return(
        <div className="result">
            <p>Your BMI is</p>
            <button>{bmi}</button>
        </div>  
    )
}