import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-900 transition-colors">
        {children}
      </body>
    </html>
  );
}
