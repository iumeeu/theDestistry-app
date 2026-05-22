export const metadata = {
  title: "The Dentistry",
  description:
    "The Dentistry คลินิกทันตกรรมครบวงจร พร้อมเทคโนโลยี CBCT และ iTero ดูแลโดยแพทย์เฉพาะทางทุกสาขา",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
