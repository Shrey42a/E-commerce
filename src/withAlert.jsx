import React, { useContext } from "react"
import { AlertContext } from "./Contexts"

function withAlert(IncomingComponent) {
    function OutgoingComponent(props) {
        const contextData = useContext(AlertContext);
        return <IncomingComponent {...props} {...contextData} />;
    }
    return OutgoingComponent;
}
export default withAlert;