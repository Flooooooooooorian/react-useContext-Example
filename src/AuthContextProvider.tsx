import {createContext, useState} from "react";

//Type für den Inhalt den wir im Context speichern wollen
type AuthContextType = {
    user?: string
    exampleFunction: (user: string) => void
}

//Anlegen des Context, mit default Werten
export const AuthContext = createContext<AuthContextType>({
    user: undefined,
    exampleFunction: () => {}
})


//React Komponente zum füllen und verwalten des Context
type Props = {
    children: any
}
export default function AuthProvider(props: Props) {

    const [user, setUser] = useState<string>()

    function exampleFunction(value: string) {
        console.log("This is an example", value)
        setUser(value)
    }

    return (
        // Context Provider um den Context zu veröffentlichen, alle children Komponenten können auf den Context zugreifen
        <AuthContext.Provider value={{user, exampleFunction}}>
            {props.children}
        </AuthContext.Provider>
    )
}
