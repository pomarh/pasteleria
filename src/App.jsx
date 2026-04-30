import Home from "./pages/Home";

function App() {
    console.log("ENV:", import.meta.env);
    return (
        <>
            <Home />
        </>
    );
}

export default App;
