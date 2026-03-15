type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23 48c0-13.8 11.2-25 25-25h7c10.5 0 19 8.5 19 19S65.5 61 55 61H39"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M39 61c-9.4 0-17 7.6-17 17"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M58 23c11 1.2 19.5 10.4 19.5 21.7 0 2-.3 4-1 5.8 7.1-2 12.5-8.5 12.5-16.3 0-9.4-7.6-17-17-17-5.7 0-10.7 2.8-13.8 7.1Z"
        fill="currentColor"
        opacity="0.32"
      />
      <circle cx="38.5" cy="61.5" r="7.5" fill="currentColor" opacity="0.18" />
    </svg>
  );
}
