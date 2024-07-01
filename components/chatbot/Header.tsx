import Image from "next/image";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => (
  <header className="flex items-center p-4 border-b">
  <div className="flex items-center space-x-4">
    <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
      <Image
        alt="Logo"
        src="/assets/brand/logo.png"
        width={40}
        height={40}
        className="object-cover"
      />
    </span>
    <h1 className="text-xl font-bold">{title}</h1>
  </div>
</header>
);