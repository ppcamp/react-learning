import "./Person.css";

const person = (props) => {
  // return <p>I'm {props.name} </p>;
  const {pos, click, name, children} = props;
  let fox = '🦊'.repeat(pos);

  return (
    <div>
      <p onClick={() => click(pos,fox)}> I'm {name} </p>
      {/* The code bellow only works when u pass a children element */}
      {children &&
        <p> {name} -&gt; {children}
        </p>
      }
      <hr />
    </div>
  )
}

export default person;