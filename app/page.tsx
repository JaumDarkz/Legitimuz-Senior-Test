'use client';

import React, { useState } from 'react';
import Introduction from '../components/chatbot/Introduction';
import Chat from '../components/chatbot/Chat';
import Image from 'next/image';

const Home = () => {
  const [chatState, setChatState] = useState<'introduction' | '' | 'chat'>(
    ''
  );
  const [senderName, setSenderName] = useState('');
  const [senderAvatar, setSenderAvatar] = useState('');

  const handleStartChat = (name: string, avatar: string, reason: string) => {
    setSenderName(name);
    setSenderAvatar(avatar);
    setChatState('chat');
  };

  const handleCloseChat = () => {
    setChatState('');
  };

  return (
    <div className="h-screen w-full">
      {chatState === '' && (
        <Image
          alt="Chatbot"
          src={'/assets/brand/logo.png'}
          width={64}
          height={64}
          onClick={() => setChatState('introduction')} 
          className="cursor-pointer absolute bottom-4 right-4 bg-white text-white p-4 rounded-full shadow-xl z-10 transition duration-200"
        ></Image>
      )}

      {/* Chatbot */}
      {chatState && (
        <div className="absolute bottom-5 bg-white right-5 mb-6 w-[320px] h-[400px] border border-gray-300 rounded-lg shadow-lg z-20 transition duration-300">
          {senderName && senderAvatar ? (
            <Chat
              name="Legitimuz Chatbot"
              avatar="/assets/brand/logo.png"
              initialMessage="Esse aqui é um exemplo de Chatbot, aqui onde você inciará o seu teste."
              clientName="Mateus"
              senderName={senderName}
              senderAvatar={senderAvatar}
            />
          ) : (
            <Introduction onStartChat={handleStartChat} />
          )}
          <button
            onClick={handleCloseChat}
            className="absolute top-5 cursor-pointer right-4 text-orange-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#e4644c]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>

          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
