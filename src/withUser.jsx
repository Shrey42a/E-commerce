import React, { useContext } from "react";
import { UserContext } from "./Contexts";

 function withUser(IncomingComponent) {
    function OutgoingComponent(props) {
        const contextData = useContext(UserContext);
        return <IncomingComponent {...props} {...contextData} />;
    }
    return OutgoingComponent;
}
export default withUser;