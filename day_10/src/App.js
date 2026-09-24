import React from 'react';

const App = () => {

    const [count, setCount] = React.useState(0);

    const decrement = () => {
        setCount(count - 1);
        console.log(count - 1);
    };

    const reset = () => {
        setCount(0);
        console.log(0);
    };

    const increment = () => {
        setCount(count + 1);
        console.log(count + 1);
    };

    return (
        <div
            style={{
                textAlign: "center"
            }}
        >

            <h1
                style={{
                    backgroundColor: "#4a5568",
                    color: "white",
                    padding: "20px",
                    margin: "0"
                }}
            >
                Counter App
            </h1>

            <div style={{ marginTop: "50px" }}>
                <h2>{count}</h2>
            </div>

            <div>
                <button onClick={decrement}>-</button>

                <button onClick={reset}>RESET</button>

                <button onClick={increment}>+</button>
            </div>

        </div>
    );
};

export default App;