
import React, {useState} from 'react';

const ExamplePoints = ({points}) => {

    const renderPointsColor = () => {
        switch (points) {
            case 3:
                return '#ff9f00'
            case 4:
                return '#e4ff00'
            case 5: 
                return '#0cff00'
            default:
                return '#ff0000'
            break;
        }
    }

    const style = {
        color: renderPointsColor(),
    }

    return (
        <React.Fragment>
            <div className="example-points">Баллы: <span style={{color: style.color}}>{points}</span></div>
        </React.Fragment>
    )
}

export default ExamplePoints;