import { cn } from "@/shared/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import SearchForm from "./search-form";
interface HeaderProps {
  className?: string
}
export function Header({className}: HeaderProps) {
  return <div className={cn("flex justify-between items-center h-12 w-[100%] px-2", className)}>
    <div className="flex-3/4 m-auto w-full"><SearchForm className="m-auto" /></div>
    <div>
      <Avatar className="rounded-2xl h-9 w-9 block">   
        <AvatarImage className="rounded-2xl" src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
</div>
}