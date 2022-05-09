import React from "react";
import { useHistory } from "react-router-dom";
import useRequest from "../../services/RequestContext";
import useUser from "../../services/UserContext";

export default function HomeNew() {
  const { updateToken } = useRequest();
  const { setUser } = useUser();

  const history = useHistory();
  const logout = async () => {
    await updateToken();
    setUser({});

    history.push("/signin");
  };

  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
