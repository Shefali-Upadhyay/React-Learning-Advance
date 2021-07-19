import React from "react";

//here we are setting a default value,if the provider is not declared
const UserContext = React.createContext("world");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;