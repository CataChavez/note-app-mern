import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from './containers/navBar/NavBar.js';
import NoteList from './components/NoteList';
import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser';


function App() {
  return (
   <div className="">
     <Router>
        <NavBar />
        <Route path="/" exact component={NoteList}></Route>
        <Route path="/edit/:id" component={CreateNote}></Route>
        <Route path="/create" component={CreateNote}></Route>
        <Route path="/user" component={CreateUser}></Route>


     </Router>

   </div>
  );
}

export default App;
