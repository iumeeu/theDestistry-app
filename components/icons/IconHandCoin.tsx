export function IconHandCoin({
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
      {/* Coin circle */}
      <circle cx="36" cy="22" r="12" stroke={color} strokeWidth={stroke} />
      {/* Dollar sign */}
      <path
        d="M36 16V28M33 19C33 19 33 17 36 17C39 17 39 19.5 36 21C33 22.5 33 25 36 25C39 25 39 27 39 27"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
      />
      {/* Coin rays */}
      <path d="M36 8V6" stroke={color} strokeWidth={stroke} strokeLinecap="round" />
      <path d="M36 38V36" stroke={color} strokeWidth={stroke} strokeLinecap="round" />
      <path d="M22 22H20" stroke={color} strokeWidth={stroke} strokeLinecap="round" />
      <path d="M52 22H50" stroke={color} strokeWidth={stroke} strokeLinecap="round" />
      {/* Hand / palm */}
      <path
        d="M14 52C14 52 16 46 24 46L34 47C34 47 38 48 42 46L52 43C54 42 56 43 56 45C56 47 54 48 52 49L42 52"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 52L18 58C18 58 24 62 32 60L50 55C52 54 58 52 58 48"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}