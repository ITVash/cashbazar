import { cn } from "@/shared/lib/utils"
import Image from "next/image"
import Logo from "@/public/logo.svg"

export default function Home() {
	return (
		<main className={cn("flex h-full w-full justify-center items-center")}>
			<Image src={Logo} alt='Логотип предприятия' />
		</main>
	)
}

