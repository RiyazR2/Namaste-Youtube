const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        className="h-6"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <span className="font-semibold px-2 text-sm">{name}:</span>
      <span>{message}</span>
    </div>
  );
};
export default ChatMessage;
