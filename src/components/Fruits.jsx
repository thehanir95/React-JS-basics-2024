export default function Fruits() {
  const fruits = [
    { name: "Apple", price: 10, img: "🍎" },
    { name: "Orange", price: 20, img: "🍊" },
    { name: "Grapes", price: 10, img: "🍇" },
    { name: "Mango", price: 10, img: "🥭" },
    { name: "Banana", price: 10, img: "🍌" },
  ];
  return (
    <div>
      {fruits.map((fruit) => (
        <li key={fruit.name}>
            {fruit.name}
            {fruit.img}
            </li>
      ))}
    </div>
  );
}
