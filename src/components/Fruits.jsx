import Fruit from "./Fruit";
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
      <ul>
        {fruits.map((fruit) => (
          <Fruit key={fruit.name} name={fruit.name} price={fruit.price} emoji={fruit.img}/>
        ))}
      </ul>
    </div>
  );
}
