import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'

const font = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Buildo',
  description: 'All in one Agency Solution',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en" suppressHydrationWarning>
    <body className={font.className}>
      <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      >
      {children}
      </ThemeProvider>
      </body>
    </html>
  )
}
