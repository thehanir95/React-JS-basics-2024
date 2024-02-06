export default function Fruit(props){
    return (
            (<li>{props.emoji} {props.name} {props.price} {props.soldout ? 'soldout' : ''}</li>) 
            
    )
        // {/* {props.emoji} {props.name} {props.price} */}

        
    
}