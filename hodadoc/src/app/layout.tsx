import "styles/globals.css";
import Header from '@layout/Header';
import SideBar from '@layout/SideBar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SideBar />
        <Header />
        {children}
      </body>
    </html>
  );
}
