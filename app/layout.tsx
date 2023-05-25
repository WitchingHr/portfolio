import './globals.css'

import Navbar from './components/navbar/Navbar';

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar
          page="home"
        />
        {children}
      </body>
    </html>
  );
}
