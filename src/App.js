import './App.css';
import { ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID="b0affe7e-639a-418e-bc46-d30b08f6a5c2"
      userName="akshad5054"
      userSecret="Akshad@123"
      renderChatFeed= {(chatAppProps) => <ChatFeed { ...chatAppProps} />}
    />
  );
}

export default App;
