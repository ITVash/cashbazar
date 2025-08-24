'use client'
import { cn } from "@/shared/lib/utils"
import { Input } from "../ui/input"
import { Search, X } from "lucide-react"
import React from "react"

interface SearchFormProps {
  className?: string
}
const SearchForm: React.FC<SearchFormProps> = ({className}) => {
  const [search, setSearch] = React.useState<string>("")
const SearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value)
	}
	const ClearSearchHandler = (): void => {
		setSearch("")
	}
  return <div className={cn("w-[80%] relative flex items-center", className)}>
    <Search className='absolute left-2 h-5 w-5' />{" "}
    <Input placeholder="Поиск" className='h-7 pl-8 pr-8' value={search} onChange={SearchHandler} />
    {search.length > 0 && (
			<X className='absolute right-2 cursor-pointer' onClick={ClearSearchHandler}	/>
		)}
  </div>
}
 export default SearchForm