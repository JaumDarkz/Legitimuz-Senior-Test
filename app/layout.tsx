import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legitimuz Chatbot',
  description: 'Legitimuz Chatbot test developed by João Vinícius AKA @joaovinicius.code',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="bg-gray-300">{children}</body>
    </html>
  );
}
