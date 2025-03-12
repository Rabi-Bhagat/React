import First from "./first"; // Importing First component

function App() {  // Changed function name to avoid conflict
  return (
    <>
      <First /> {/* Using imported component */}
      <h1>skldjffkj</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Saepe minus repellendus eveniet!
      </p>
    </>
  );
}

export default App; // Exporting with a different name
