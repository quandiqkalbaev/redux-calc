import AppRoute from "./routes/route";
import Header from "./components/header/header";
import "./assets/css/style.css"

function App() {
  return (

    <div className="App">
        <Header/>
        <AppRoute/>
    </div>
  );
}

export default App;
