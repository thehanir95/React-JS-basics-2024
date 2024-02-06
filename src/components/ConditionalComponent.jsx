import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponent() {
    const display = true;
    let msg = ''
    if(display) {
        msg = <h1>This is msg1</h1>
    } else{
        msg = <h1>This is msg2</h1>
    }
    return msg
} 