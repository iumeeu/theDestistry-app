export function IconToothPlus({
  size = 72,
  color = "white",
  stroke = 1.2,
}: {
  size?: number;
  color?: string;
  stroke?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Tooth body */}
      <path
        d="M22 18C22 18 14 20 14 30C14 37 17 42 19 50C20 55 21 58 24 58C27 58 28 54 29 50C30 46 30 44 36 44C42 44 42 46 43 50C44 54 45 58 48 58C51 58 52 55 53 50C55 42 58 37 58 30C58 20 50 18 50 18C46 16 42 14 36 14C30 14 26 16 22 18Z"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Sparkle left */}
      <path
        d="M16 14L16 10M16 14L12 14M16 14L20 14M16 14L16 18"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
      />
      {/* Sparkle top-right */}
      <path
        d="M54 12L54 9M54 12L51 12M54 12L57 12M54 12L54 15"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
      />
      {/* Plus badge circle */}
      <circle cx="52" cy="26" r="8" stroke={color} strokeWidth={stroke} />
      {/* Plus sign */}
      <path
        d="M52 22V30M48 26H56"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
      />
    </svg>
  );
}