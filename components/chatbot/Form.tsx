'use client';

import { FormEvent, FormEventHandler, useState } from 'react';
import Image from 'next/image';

type FormProps = {
  onSendMessage: (text: string) => void;
};

export const Form = ({ onSendMessage }: FormProps) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form
      className="flex items-center gap-4 border-t p-4"
      onSubmit={handleSubmit}
    >
      <input
        className="flex outline-none h-10 w-full rounded-md border border-input bg-background placeholder-[#e4644c] px-3 py-2 text-sm"
        placeholder="Digite sua mensagem aqui..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium"
        type="submit"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 transform rotate-180 text-[#e4644c]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    </form>
  );
};

export default Form;
