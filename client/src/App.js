import ModelsList from "./components/ModelsList/ModelsList";
import InstancesList from "./components/InstancesList/InstancesList";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchInitModelsAc } from "./redux/ActionCreators/modelsAC";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchInitModelsAc());
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <ModelsList />
        </Route>

        <Route path="/:id">
          <InstancesList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
