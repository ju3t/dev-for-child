import React, { useState } from 'react';
import './math.css';
import ExampleSum from './example/example-sum/example-sum';
import ExamplePoints from './example/example-points/example-points';


const Math = () => {
    
    const [ points, setPoints ] = useState(0);
    
    return(
        <div className="container">
            <h2 className="mt-5 mb-5">Математические примеры:</h2>
            <ExampleSum setPoints={setPoints} sum={true}/>
            <ExampleSum setPoints={setPoints}/>
            <ExampleSum setPoints={setPoints} sum={true}/>
            <ExampleSum setPoints={setPoints}/>
            <ExampleSum setPoints={setPoints} sum={true}/>
            <ExampleSum setPoints={setPoints}/>
            <ExamplePoints points={points}/>
        </div>
    )
}

export default Math;