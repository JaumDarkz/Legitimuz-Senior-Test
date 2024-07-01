'use client';

import React, { useState } from 'react';
import Image from 'next/image';

type IntroductionProps = {
  onStartChat: (name: string, avatar: string, reason: string) => void;
};

const Introduction = ({ onStartChat }: IntroductionProps) => {
  const [name, setName] = useState('');
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [reason, setReason] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Por favor, selecione um arquivo de imagem válido.');
        return;
      }

      // Verifica se o tamanho do arquiv é aceitável (até 2MB)
      if (file.size > 2 * 1024 * 1024) {
        alert('O tamanho do arquivo excede o limite máximo permitido (2MB).');
        return;
      }

      setAvatarFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleStartChat = () => {
    // Verifica se todos os campos necessários foram preenchidos antes de iniciar o chat
    if (name && avatarFile && reason) {
      // Simulação de upload seguro - normalmente enviaríamos o arquivo para o servidor aqui
      const avatarUrl = avatarPreview || '';
      onStartChat(name, avatarUrl, reason);
    } else {
      alert('Por favor, preencha todos os campos antes de iniciar o chat.');
    }
  };

  return (
    <div className="w-[320px] h-[430px] bg-white flex border border-solid border-[#e4644c] flex-col w-full max-w-sm rounded-xl overflow-hidden">
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">
          Chatbot <span className="text-[#e4644c]">Legitimuz</span>
        </h1>
        <form className="flex flex-col gap-4">
          <label className="flex flex-col">
            <span className="text-sm mb-1">Seu nome:</span>
            <input
              type="text"
              className="border outline-none border-[#e4644c] rounded-md px-3 py-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label className="flex flex-col">
            <label className="hover:bg-customHover transition duration-300 cursor-pointer bg-[#e4644c] text-white rounded-md px-3 py-3 inline-block">
              Escolha uma boa foto :)
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
                required
              />
            </label>
            {avatarPreview && (
              <div className="absolute right-7 mt-[9px]">
                <Image
                  alt="Preview"
                  src={avatarPreview}
                  width={30}
                  height={30}
                  className="border border-white object-cover rounded-full"
                />
              </div>
            )}
          </label>
          <label className="flex flex-col">
            <span className="text-sm mb-1">Motivo da conversa:</span>
            <textarea
              className="border outline-none border-[#e4644c] rounded-md px-3 py-2 h-20"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
            />
          </label>
          <button
            type="button"
            className="bg-[#e4644c] text-white rounded-md px-4 py-2 mt-11 transition duration-300 hover:bg-customHover"
            onClick={handleStartChat}
          >
            Iniciar Chat
          </button>
        </form>
      </div>
    </div>
  );
};

export default Introduction;
