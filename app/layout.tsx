// app/layout.tsx
import './styles/globals.css';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
