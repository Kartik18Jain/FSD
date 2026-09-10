function Child(props) {
    return <h1>Hello {props.name}</h1>;
}

function Parent() {
    return <Child name="Kartik" />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Parent />);