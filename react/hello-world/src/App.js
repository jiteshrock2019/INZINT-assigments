import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Messge from './components/Message';
import MyS from './components/MyS';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Task from './components/Task';

function App() {
  return (                  
    <div className="App">
      {/* <ParentComponent /> */}
      <Task />
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
     
      {/* <EventBind /> */}
      {/* <ClassClick /> */}
      {/* <FunctionClick />
       
      <Counter />
      <MyS /> */}

      {/* <Messge /> */}
      {/* <Greet name='REACT' location='Delhi'>
        <button> click me please</button>
      </Greet>
      <Greet name='ANGULAR' location='Banglore'>
        <p> hello to all the angular developers over there in our small team </p>
      </Greet>
      <Greet name='VUE' location='Noida'/>
      <Greet name='NODE' location='Gurgaon' />
     
      {/* welcome is the class component  */}

      {/* <Welcome name='REACT' location='Delhi' />   
      <Welcome name='ANGULAR' location='Banglore' />
      <Welcome name='VUE' location='Noida'/> */} 

      {/* <Hello /> */}
    </div>
  );
}

export default App;
