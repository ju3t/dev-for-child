import React, {useState, useEffect} from 'react';
import './example-sum.css';
import ExampleCompleted from '../example-completed/example-completed';
import ExampleError from '../example-error/example-error';

const ExampleSum = ({ setPoints, sum }) => {

    const [ onCompleted, setCompleted ] = useState(null);
    const [ amout, setAmout ] = useState({
        randomNum1: 0,
        randomNum2: 0,
    });

    const hundleInput = ({ target }) => {
        const val = target.value;
        const answer = target.getAttribute('data-answer')
        if (val === answer) {
            setCompleted(true);
            setPoints((p) => p += 1);
        } else if(val !== answer && answer < 10 ) {
            setCompleted(false);
        } else if((val > answer || val < answer) && val > 10) {
            setCompleted(false);
        }
    }

    const getRandomArbitrary = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    useEffect(() =>  {
        setAmout((amout) => {
            return {
                num1: getRandomArbitrary(1, 10),
                num2: getRandomArbitrary(1, 10),
            }
        })
    }, [])

    const renderAnswer = () => {
        const { num1, num2 } = amout;
        const dec = num1 < num2 ? num2 - num1 : num1 - num2;
        const inc = num1 + num2;

        if(sum) {
            return inc;
        }
        return dec;
    }

    const renderExampleText = () => {
        const { num1, num2 } = amout;
        const dec = num1 < num2 ? `${num2} - ${num1}` : `${num1} - ${num2}`;
        const inc = `${num1} + ${num2}`;

        if(sum) {
            return inc;
        }
        return dec;
    }
    const answer = renderAnswer();
    const exampleText = renderExampleText();

    const exampleCompleted = onCompleted && <ExampleCompleted answer={answer} />;
    const exampleError = (!onCompleted && onCompleted !== null) && <ExampleError/>;

    return (
        <React.Fragment>
            <form className="example">
                <label>
                    <span className="example-text">{exampleText}<span>=</span></span>
                    <input 
                        className="example-value"
                        type="number" 
                        data-answer={answer} 
                        onInput={hundleInput} 
                        style={{display: onCompleted && 'none'}}/>
                    {exampleCompleted}
                    {exampleError}
                </label>
            </form>
        <hr/>
        </React.Fragment>
    )
}

export default ExampleSum;