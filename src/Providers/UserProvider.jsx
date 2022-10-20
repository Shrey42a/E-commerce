import axios from "axios";
import React, { useEffect, useState } from "react";
import { UserContext } from "../Contexts";

function UserProvider({children}) {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true)
    const token = localStorage.getItem("token");
    
  useEffect(() => {
    if (token) {
      axios.get("https://myeasykart.codeyogi.io/me", {
        headers: {
          Authorization: token,
        },
      }).then((response) => {
        setUser(response.data);
        setLoading(false);
      }).catch(() => {
        localStorage.removeItem("token");
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [])
    
   if (loading) {
    return (
      <>
        <div className="flex items-center justify-center h-screen p-4 grow bg-slate-200">
          <div className="loader2"></div>
        </div>
      </>
    );
  }
    return (
        <>
            <UserContext.Provider value={{ isLoggedin: !!token, user, setUser }}>
                {children}
            </UserContext.Provider>
        </>
    );
}

export default UserProvider;