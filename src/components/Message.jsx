export default function Message(){
    function handleClick() {
        console.log('click btn');
    }
    return(
        <div>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}