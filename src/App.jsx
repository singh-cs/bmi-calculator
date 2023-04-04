import { useState } from 'react'
import './App.css'
import Result from './components/Result'

function App() {
    const [sliderValues, setSliderValues] = useState({ "Weight":'50',"Height":'150'})

    function handleChange(_event){
       setSliderValues(old => ({
        ...old,[_event.target.name]:_event.target.value
       }))
    }

    return (
        <div className="App">
            <h1>Project 7: BMI CALCULATOR</h1>
            <div className='container'>
                <div className='ranges'>
                    <label htmlFor={'weight'}>Weight : <span>{sliderValues["Weight"]}</span> Kg</label><br />
                    <input 
                        type="range" 
                        name="Weight"
                        id='weight'
                        min={40}
                        max={220}
                        step={1}
                        defaultValue={50}
                        onChange={_event => handleChange(_event)}
                    />
                    <br />
                    <label htmlFor={'height'}>Height : <span>{sliderValues["Height"]}</span> cm</label><br />
                    <input 
                        type="range" 
                        name="Height"
                        id='height'
                        min={140}
                        max={220}
                        step={1}
                        defaultValue={150}
                        onChange={_event => handleChange(_event)}
                    />
                </div>
                <Result 
                    weight={sliderValues["Weight"]}
                    height={sliderValues["Height"]}
                />
        </div>
    </div>
    )
}

export default App