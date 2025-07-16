import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"

const nunito = Nunito({
	variable: "--font-nunito",
	subsets: ["cyrillic"],
	weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
	title: "CashBazar",
	description: "Приложение для внутреннего использования!",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru' suppressHydrationWarning>
			<body className={nunito.className} suppressHydrationWarning>
				{children}
			</body>
		</html>
	)
}

