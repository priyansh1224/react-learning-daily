// const element = React.createElement("h1",{},"Hello Coder Army");
// const element2=React.createElement("h2",{},"i am the best");
// const li1=React.createElement("li",{},"chai");
// const li2=React.createElement("li",{},"biscuit");
// const li3=React.createElement("li",{},"samosa");



// // ReactDOM.render(element,document.getElementById('root'));
// // element : 50 card pade hue hai

// const list=React.createElement('ul',{}[li1,li2,li3]);

// const conatiner=React.createElement('div',{},[element,element2,list]);

// const Reactroot = ReactDOM.createRoot(document.getElementById('root'));

// // React root container: is
// Reactroot.render(conatiner);

const element = React.createElement("h1", {}, "Hello Coder Army");
const element2 = React.createElement("h2", {}, "i am the best");
const li1 = React.createElement("li", {}, "chai");
const li2 = React.createElement("li", {}, "biscuit");
const li3 = React.createElement("li", {}, "samosa");

// Create a list containing all li items
const list = React.createElement("ul", {}, [li1, li2, li3]);

// Create a container div that holds all elements
const container = React.createElement("div", {}, [element, element2, list]);

const Reactroot = ReactDOM.createRoot(document.getElementById('root'));

// Render the container that includes all elements
Reactroot.render(container);

const menuData = {
    "Beverages": ["Chai", "Coffee", "Juice"],
    "Snacks": ["Biscuit", "Samosa", "Chips"],
    "Desserts": ["Ice Cream", "Cake", "Pastry"]
  };
  
// const Menu = () => (
//     <div>
//       {Object.entries(menuData).map(([category, items]) => (
//         <div key={category}>
//           <h2>{category}</h2>
//           <ul>
//             {items.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
  
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(<Menu />);



