export default function Fruit(props){
    return <div>
        <li>
        {props.emoji} {props.name} {props.price}
        </li>
    </div>
}