import './App.css';
import Cards from './components/Cards/Cards';
import Titulo from './components/Titulo/Titulo';

function App() {
  return (
    <div>
      	<Titulo/>
      		<div className="container p-5">
       			<Cards/>
      		</div>
  	</div>
  );
}

export default App;
