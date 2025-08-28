import { Metadata } from "next"

export const metadata: Metadata = {
	title: "CashBazar - Профиль пользователя",
	description: "Главная страница приложения.",
}
export default function LayoutProfile({
	children,
}: {
	children: React.ReactNode
}) {
	return <>{children}</>
}
