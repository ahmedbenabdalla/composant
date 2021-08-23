import logo from './logo.svg';
import './App.css';
import Image from "./Component/Profile/ProfilePhoto"
import FullName  from './Component/Profile/FullName';
import Adress from './Component/Profile/Adress';
// function App() {
//   return (
//    <>
//    <Image/>
//    <FullName/>
//    <Adress/>
//    </>
//   );
// }
// const App = () => (
//   <div>
//     <Welcome name="Sara" />
//   </div>
//  );
//  const Welcome = props =>{
//   console.log(`props:`,props)
//    return (
//      <h1> welcome{props.name} </h1>
//    )
//   }
// const App = () => {
//   const alertMyInput = name => alert(name);
//   return (
//     <div>
//       <Welcome  alertMyInput={alertMyInput} />
//     </div>
//   );
//  };
//  const Welcome = props => {
//   console.log(`props:`, props.name);
//   return (
//     <button onClick={() => props.alertMyInput(`My name is James Brown `)}>
//       ClickMe
//     </button>
//   );
//  };
const Restaurant = props => {
  return <span>{props.food} </span>;
};

// The App component 

const App = () => (
  <div>
      <Restaurant food="Sandwich" />
      <Restaurant food="Pizza" />
      <Restaurant food="Salad" />
  </div>
)
export default App;
