import { cn } from "@/shared/lib/utils"
import Image from "next/image"

export default function Home() {
	return (
		<main className={`bg-blue-600`}>
			<Image src={"./logo.svg"} alt='Logo' width={100} height={100} />
		</main>
	)
}

