import Image from "next/image";

type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <div className={className}>
      <Image
        src="/leafyknots-logo.jpeg"
        alt="Leafy Knots logo"
        width={763}
        height={735}
        className="h-full w-full object-contain"
        priority
      />
    </div>
  );
}
