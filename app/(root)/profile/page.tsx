import { Container } from "@/shared/components/shared"
import Image from "next/image"
import { metadata } from "../layout"

export default function Profile() {
	metadata.title = "CashBazar - Профиль пользователя"
	return (
		<Container>
			<div className='w-[100%] lg:w-[350px] xl:w-[500px]'>
				<Image
					src='https://github.com/shadcn.png'
					alt='Профиль'
					width={700}
					height={700}
				/>
			</div>
		</Container>
	)
}
