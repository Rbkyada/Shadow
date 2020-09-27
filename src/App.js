import React,{ useState, useEffect } from 'react';
import Shades from './components/Shades';
import ShadeSearch from './components/ShadeSearch';
import randomColor from 'randomcolor'
import { Route, Switch } from 'react-router-dom';
import Shadow from './components/Shadow';

function App() {

  const [ color, setColor] = useState("red")

  useEffect(() =>{ 
    setColor(randomColor());
  },[])

  const onInputChange = (value) => {
    setColor(value)
  }

  return (
  <>
    <div className="App">
    <Switch> 
      <Route exact path="/shadow" component={Shadow} />
      <Route render={() => 
          <>
            <ShadeSearch color={color} onInputChange={onInputChange} />
            <Shades color={color} />
          </>
        } />
    </Switch>
    </div>
  </>
  );
}

export default App;



{/* <Shades color={color} /> */}