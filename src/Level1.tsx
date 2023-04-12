import Level2 from "./Level2";
import {useContext} from "react";
import {AuthContext} from "./AuthContextProvider";


export default function Level1() {

    const {user, exampleFunction} = useContext(AuthContext)

    return (
        <div>
            <p>Level 1</p>
            <input value={user} onChange={(event) => {exampleFunction(event.target.value)}}/>
            <Level2/>
        </div>
    )
}
