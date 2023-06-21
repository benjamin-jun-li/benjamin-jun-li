import './globals.css'
import { Inter } from 'next/font/google'
import NavFoot from "@/components/nav-foot";
import NavHead from "@/components/nav-head";
import { Suspense } from 'react';
import Loading from "./loading";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Benjamin Jun Li's Portfolio" ,
  description: 'By next using typescript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}><NavHead /><Suspense fallback={<Loading />}>{children}</Suspense><NavFoot /></body>
    </html>
  )
}
