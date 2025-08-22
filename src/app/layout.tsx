import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import { Logo } from '@/components/logo'
import { Navigation } from '@/components/navigation'
import './globals.css'

const quickSand = Quicksand({
  variable: '--font-quick-sand',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'André Brandão',
  description: 'Desenvolvedor e Músico',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quickSand.className} antialiased`}>
        <div className="grid grid-rows-[auto_1fr_auto] min-h-dvh">
          <header className="p-4 border-b border-white/10">
            <Logo />
          </header>
          
          <main className="overflow-auto p-4">
            <Navigation />
            {children}
          </main>
    
          <footer className="text-center p-4 border-t border-white/10">
            <p className="text-xs">Created with next.js</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
