import Message from "./Message";
import ListGroup from "./Components/ListGroup";

function App() {
  let items: string[] = [
      "New York",
      "San Francisco",
      "Tokyo",
      "London",
      "Paris",
    ];
  return (
    <div>
      <>ListGroup items = {items} heading = "Cities" </>
      <Message />
      <ListGroup /> 
    
    </div>
  );
}

export default App;

//or self closing syntax  brac messge / brac
//export default App;

// or self closing syntax  brac messge / brac
