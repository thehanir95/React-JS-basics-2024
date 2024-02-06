import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponent() {
    const display = false;
    return display ? <h1>Msg1</h1> : <h1>Msg2</h1>
} 