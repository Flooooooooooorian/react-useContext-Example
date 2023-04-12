import {useContext} from "react";
import {AuthContext} from "./AuthContextProvider";


export default function Level3() {

    // Mit useContext können wir auf contexte zugreifen. Hier greifen wir auf den AuthContext zu
    const {user} = useContext(AuthContext)

    return (
        <div>
            <p>Level 3</p>
            <p>{user}</p>
        </div>
    )
}
