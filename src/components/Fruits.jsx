export default function Fruits() {
  const fruits = ["apple", "mango", "banana"];
  return (
    <div>
      {fruits.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </div>
  );
} 
