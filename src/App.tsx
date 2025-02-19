// import Message from "./Message";
// import ListGroup from "./Components/ListGroup";

import Alert from "./Components/Alert";

function App(){
  return(
    <div>
      <Alert text = "Hello World" />
    </div>
  )
}

// function App() {
//   let items: string[] = [
//     "New York",
//     "San Francisco",
//     "Tokyo",
//     "London",
//     "Paris",
//   ];
//   return (
//     <div>
//       <ListGroup items={items}
//        heading="Cities"
//        onSelectedItem={(item) => console.log("Selected item:", item)} // ✅ Ensure required prop is passed
//       />
//       {/* <ListGroup items = {items} heading = "Cities"> */}
//       <Message />
//     </div>
//   );
// }

export default App;

//or self closing syntax  brac messge / brac
//export default App;

// or self closing syntax  brac messge / brac
