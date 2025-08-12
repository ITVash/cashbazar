import { Button } from "@/shared/components/ui/button"
import { Input } from "@/shared/components/ui/input"
import { cn } from "@/shared/lib/utils"
import Image from "next/image"

export default function Home() {
	return (
		<main className={cn("mx-6 mt-2")}>
			<Image src={"./logo.svg"} alt='Logo' height={100} width={100} />{" "}
			<h1 className='mt-2'>CashBazar</h1>
			<Input placeholder='текст' />
			<Button variant='default'>Кнопка</Button>
		</main>
	)
}

