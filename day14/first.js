import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux";
import stores from "./stores";
import Counting from "./counting";

function App(){
    return (
        <Provider store={stores}>
            <Counting></Counting>
        </Provider>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);