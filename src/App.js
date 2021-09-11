import './App.css';
import NavBar from './component/NavBar';
import NewsCont from './component/NewsCont';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import React,{useState} from 'react'


function App() {
    const [progress, setProgress] = useState(0)

  return (
    <Router>
        <NavBar/>
        <LoadingBar
            color='#f11946'
            progress={progress}
            onLoaderFinished={() => setProgress(100)}
        />
        <Switch>
            <Route exact path="/">
                <NewsCont key="gen" category="general" setProgress={setProgress} />
            </Route>
            <Route exact path="/general">
                <NewsCont key="general" category="general" setProgress={setProgress} />
            </Route>
            <Route exact path="/entertainment">
                <NewsCont key="entertainment" category="entertainment" setProgress={setProgress} />
            </Route>
            <Route exact path="/business">
                <NewsCont key="business" category="business" setProgress={setProgress} />
            </Route>
            <Route exact path="/health">
                <NewsCont key="{health}" category="health" setProgress={setProgress} />
            </Route>
            <Route exact path="/science">
                <NewsCont key="science" category="science" setProgress={setProgress} />
            </Route>
            <Route exact path="/sports">
                <NewsCont key="sports" category="sports" setProgress={setProgress} />
            </Route>
            <Route exact path="/technology">
                <NewsCont key="technology" category="technology" setProgress={setProgress} />
            </Route>
          </Switch>
      </Router>
  );
}

export default App;
