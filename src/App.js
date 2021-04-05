import IndexPage from "./components/pages/IndexPage";
import Header from "./components/ui/Header";
import LogoHeader from "./components/ui/LogoHeader";
import {BrowserRouter, Route, Switch} from 'react-router-dom'




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <LogoHeader />

        <Switch>
          <Route exact path="/" component={IndexPage}/>
        </Switch>

      </div>
    </BrowserRouter>
    
  );
}

export default App;
