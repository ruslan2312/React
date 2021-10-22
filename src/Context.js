import React from "react";


let ContextComponent = React.createContext(null);

export const Provider = (props) => {
    return (
        <ContextComponent.Provider value={props.store}>
                {props.children}
        </ContextComponent.Provider>
    )
}

export default ContextComponent;