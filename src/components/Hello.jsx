const name = "thehani";

function displayName(){
    return 'wow';
}

function Hello() {
  return (
    <div>
      <h1>Hello component {name}</h1>
      <h2>{10 + 20}</h2>
      <h3>{displayName()}</h3>
    </div>
  );
}

export default Hello;
