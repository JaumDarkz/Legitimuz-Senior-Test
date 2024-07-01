import Image from 'next/image';

type MessageProps = {
  children?: React.ReactNode;
  className?: string;
  align: 'left' | 'self-start' | 'self-end';
  avatar?: string;
  received?: boolean;
  senderName?: string;
};

const Message = ({
  children,
  className = '',
  align = 'left',
  avatar,
  received = false,
  senderName,
}: MessageProps) => (
  <div
    className={`flex flex-col items-${
      align === 'left' ? 'start' : 'end'
    } gap-1 my-2`}
  >
    {senderName && (
      <p className="text-sm text-[#e4644c] flex justify-end">{senderName}</p>
    )}
    <div
      className={`flex items-center justify-between w-full gap-4 ${
        align === 'left' ? 'self-start' : 'self-end'
      }`}
    >
      {avatar && (
        <Image
          alt="Avatar"
          src={avatar}
          width={30}
          height={30}
          className="object-cover border border-solid border-[#e4644c] rounded-full"
        />
      )}
      <div
        className={`rounded-lg p-4 text-sm max-w-[85%] break-words ${
          received
            ? 'border border-solid border-[#e4644c]'
            : 'border border-solid border-[#e4644c]'
        } ${className}`}
      >
        {children}
      </div>
    </div>
  </div>
);

export default Message;
