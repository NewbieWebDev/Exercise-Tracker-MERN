import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Navbar from './components/navbar'
import ExercisesList from './components/exercises-list'
import EditExercise from './components/editExercises'
import CreateExercise from './components/createExercise'
import CreateUser from './components/createUser'
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Router>
    <div className='container'>
      <Navbar/>
      <br/>
      <Route path='/' exact component={ExercisesList}/>
      <Route path='/edit/:id' component={EditExercise}/>
      <Route path='/create' component={CreateExercise}/>
      <Route path='/user' component={CreateUser}/>
      </div>
    </Router>
  );
}

export default App;
