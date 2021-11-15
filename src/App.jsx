import { Fragment } from 'react';
import NavBar from './components/Header/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemCount from './components/ItemCount/ItemCount.jsx';

const App = () => {

  return (
    <Fragment>
      <NavBar />
      <ItemListContainer greeting = "¡Bienvenidos a Alima!" />
      <ItemCount stock = {15} inicial = {0} />
    </Fragment>
  );
}

export default App;
