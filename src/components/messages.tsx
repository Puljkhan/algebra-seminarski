//@ts-nocheck

import { MemberType, MessagesType } from "../data/types";

const Messages = ({ currentMember, messages }) => {
  return (
    <ul className="messages">
      {messages.map((message, index) => {
        const messageFromMe = message.member.id === currentMember.id;
        const className = messageFromMe && "currentMember";

        return (
          <li className={`messages__message ${className}`} key={index}>
            <span
              className="messages__message__avatar"
              style={{
                backgroundColor: messageFromMe
                  ? currentMember.color
                  : message.member.clientData.color,
              }}
            />
            <div className={`messages__message__content ${className}`}>
              <div className="messages__message__content__username">
                {messageFromMe
                  ? currentMember.username
                  : message.member.clientData.username}
              </div>
              <div className={`messages__message__content__text ${className}`}>
                {message.text}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Messages;
