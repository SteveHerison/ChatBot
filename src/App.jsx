import Componente from "./components";
import { ChatProvider } from "./contexts/chatContext/ChatContext";
import { UserProvider } from "./contexts/userContext/UserContext";

const App = () => {
  return (
    <div className=" h-full w-full container m-auto">
      <UserProvider>
        <ChatProvider>
          <Componente />
        </ChatProvider>
      </UserProvider>
    </div>
  );
};

export default App;
