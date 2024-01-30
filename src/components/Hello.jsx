const name = "thehani";

function displayName(){
    return 'wow';
}

function Hello({persons}) {
  return (
    <div>
      <h1>{persons.msg} {persons.emoji} {persons.name} {persons.seatNumbers}</h1>
      <h2>{10 + 20}</h2>
      <h3>{displayName()}</h3>
    </div>
  );
}

export default Hello;
