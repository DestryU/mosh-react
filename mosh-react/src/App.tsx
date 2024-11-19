import ListGroup from "./components/ListGroup";

let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

function App() {

  const handleSelectItem = (item: string) => {
    console.log(item);
    
  }

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
    </div>
  );
}

export default App;
