//import { useAuth } from "./_Authprovider";
import { NavLink } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export default function AuthStatus() {
  const auth = useAuth();

  if (!auth.isLoggedIn()) {
    return (
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    );
  } else {
    return (
      <li>
        <NavLink to="/logout">Logout (Logged in as {auth.username})</NavLink>
      </li>
    );
  }

  //TODO: Replace with code to switch between login and logout
  return (
    <li>
      <NavLink to="/login">Login</NavLink>
    </li>
  );
}
