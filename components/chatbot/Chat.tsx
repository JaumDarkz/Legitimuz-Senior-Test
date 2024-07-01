import React, { useEffect } from 'react';
import Message from './Message';
import { Header } from './Header';
import { Form } from './Form';

const icons = {
  Mateus: '/assets/profiles/boy.png',
  Joao: '/assets/profiles/man.png',
  Maria: '/assets/profiles/woman.png',
};

type MessageType = {
  text: string;
  align: 'left' | 'self-end';
  avatar?: string;
  senderName?: string;
  senderAvatar?: string;
};

type ChatProps = {
  name: string;
  avatar: string;
  initialMessage: string;
  clientName: 'Mateus' | 'Joao' | 'Maria';
  senderName: string;
  senderAvatar: string;
};

const Chat = ({
  name,
  avatar,
  initialMessage,
  clientName,
  senderName,
  senderAvatar,
}: ChatProps) => {
  const localStorageKey = 'chatMessages';

  const [messages, setMessages] = React.useState<MessageType[]>(() => {
    const savedMessages = localStorage.getItem(localStorageKey);
    return savedMessages
      ? JSON.parse(savedMessages)
      : [{ text: initialMessage, align: 'left' }];
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(messages));
  }, [messages]);

  const handleSendMessage = (text: string) => {
    const newMessage: MessageType = {
      text,
      align: 'self-end',
      avatar: icons[clientName],
      senderName,
      senderAvatar,
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <div className="w-[320px] h-[430px] bg-white flex border border-solid border-[#e4644c] flex-col w-full max-w-sm rounded-xl overflow-hidden">
      <Header title={name} />
      <div className="flex flex-col flex-grow p-4 overflow-y-auto border-t border-solid border-[#e4644c]">
        {messages.map((message, index) => (
          <Message
            key={index}
            align={message.align}
            avatar={message.avatar}
            received={message.align === 'left'}
            senderName={message.senderName}
          >
            {message.text}
          </Message>
        ))}
      </div>
      <div className="bg-gray-100 border-t border-solid border-[#e4644c]">
        <Form onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default Chat;
