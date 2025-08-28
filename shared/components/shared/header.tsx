import { cn } from "@/shared/lib/utils";
import { SearchForm } from "./search-form"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
interface HeaderProps {
  className?: string
}
export const Header = ({ className }: HeaderProps) => {
	return (
		<div
			className={cn(
				"flex justify-between items-center h-12 w-[100%] px-2",
				className,
			)}>
			<div className='flex-3/4 m-auto w-full'>
				<SearchForm className='m-auto' />
			</div>
			<div>
				<Avatar className='h-9 w-9 block'>
					<AvatarImage src='https://github.com/shadcn.png' />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</div>
		</div>
	)
}