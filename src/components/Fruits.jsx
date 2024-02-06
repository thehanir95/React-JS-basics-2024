import Fruit from "./Fruit";
export default function Fruits() {
  const fruits = [
    { name: "Apple", price: 10, img: "🍎", soldout: false },
    { name: "Orange", price: 5, img: "🍊", soldout: false },
    { name: "Grapes", price: 2, img: "🍇", soldout: true },
    { name: "Mango", price: 7, img: "🥭", soldout: false },
    { name: "Banana", price: 1, img: "🍌", soldout: true },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit key={fruit.name} name={fruit.name} price={fruit.price} emoji={fruit.img} soldout={fruit.soldout}/>
        ))}
      </ul>
    </div>
  );
}
