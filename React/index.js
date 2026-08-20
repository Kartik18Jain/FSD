// const div = document.createElement('root');
// const h1 = document.createElement('h1');
// h1.innerText = "WELCOME TO FSD CLASS";
// div.appendChild(h1);


// Create React root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Create nested elements using React.createElement
const h1 = React.createElement(
  'div',
  {},
  React.createElement(
    'div',
    {},
    React.createElement('div', {}, '1')
  )
);

// Render to DOM
root.render(h1);