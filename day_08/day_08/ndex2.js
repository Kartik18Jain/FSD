function Child(props) {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <p>Email: {props.email}</p>
            <p>Section: {props.section}</p>
            <hr />
        </div>
    );
}

function Parent() {
    return (
        <div>
            <Child
                name="Harshit Kumar"
                email="harshit@gmail.com"
                section="CSE-18"
            />

            <Child
                name="xyz"
                email="xyz@gmail.com"
                section="CSE-18"
            />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Parent />);