import './App.css';
import { useState } from "react";
import Person from "components/Person/Person";

const App = props => {
  // States
  const [persons, set_persons] = useState([
    {name:'Pedro', child:''},
    {name:'Carlos', child: 'Some html code'},
    {name:'Outro', child:''}
  ]);

  // Methods
  const changePerson = () => {
    const edit_persons = persons.map(person => {
      return {
        name: '🦊' + person.name,
        child: person.child
      }});
    set_persons(edit_persons);
  }
  const switchName = (pos, name) => {
    const edit_persons = [...persons];
    console.log("🚀 -> switchName -> edit_persons", edit_persons);
    const old_name = edit_persons[pos].name;
    edit_persons[pos].name = name + old_name;
    set_persons(edit_persons);
  }

  // Render
  return (
    <div className="App">
      <button onClick={changePerson}>Button</button>
      {persons.map((person, index) =>  <Person click={switchName} pos={index} key={index} name={person.name}/> )}
      <Person click={switchName} pos={0} name={"Example"}>Some content inside this element </Person>
    </div>
  );
}

export default App;
