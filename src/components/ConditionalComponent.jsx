import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponent() {
    const display = false;
    let msg1 = <h1>This is msg1</h1>
    let msg2 = <h1>This is msg2</h1>
    if(display) {
        return msg1
    } else{
        return msg2
    }
} 