import type { Metadata } from "next"
import "./globals.css"
import localFont from "next/font/local"
import Header from "@/src/shared/components/layouts/site-layout"

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
}

const myFont = localFont({
    src: "../public/fonts/iranyekanwebbold.woff2",
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="fa" dir="rtl">
            <body className={myFont.className}>
                <Header />
                <main>{children}</main>
            </body>
        </html>
    )
}
