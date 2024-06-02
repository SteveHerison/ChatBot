import Componente from "./components";

import { UserProvider } from "./contexts/userContext/UserContext";

const App = () => {
  return (
    <div className=" h-full w-full container m-auto">
      <UserProvider>
        <Componente />
      </UserProvider>
    </div>
  );
};

export default App;
