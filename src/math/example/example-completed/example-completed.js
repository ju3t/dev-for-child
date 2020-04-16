import React from 'react';

const ExampleCompleted = ({answer}) => {
    return (
        <React.Fragment>
            <span className="example-answer">{answer}</span>
            <span className="example-completed">Правильно!</span>
        </React.Fragment>
    )
}

export default ExampleCompleted;