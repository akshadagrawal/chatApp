import MyMessage from './MyMessage';
import MessageForm from './MessageForm';
import TheirMessage from './TheirMessage';

const ChatFeed = (props) => {
    const {chats, activeChat, userName, messages} = props;

    const chat= chats&& chts[activeChat];
    return ( 
        <div>Chat</div>
     );
}
 
export default ChatFeed;