const name = "thehani";

function displayName(){
    return 'wow';
}

function Hello(props) {
    const { name, msg } = props
  return (
    <div>
      <h1>{msg} {name}</h1>
      <h2>{10 + 20}</h2>
      <h3>{displayName()}</h3>
    </div>
  );
}

export default Hello;
