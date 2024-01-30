const name = "thehani";

function displayName(){
    return 'wow';
}

function Hello(props) {
  return (
    <div>
      <h1>{props.person.msg} {props.person.emoji} {props.person.name} {props.person.seatNumbers}</h1>
      <h2>{10 + 20}</h2>
      <h3>{displayName()}</h3>
    </div>
  );
}

export default Hello;
