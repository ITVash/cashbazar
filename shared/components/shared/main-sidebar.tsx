"use client"
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "../ui/sidebar"
import {
	Settings,
	Folder,
	Search,
	LogOut,
	X,
	User,
	ShoppingBag,
	Users,
	Map,
	BriefcaseBusiness,
	BadgeDollarSign,
	CreditCard,
	CardSim,
} from "lucide-react"
import Image from "next/image"
import { Input } from "../ui/input"
import React, { ChangeEvent } from "react"
import { Button } from "../ui/button"

export function AppSidebar() {
	const [search, setSearch] = React.useState<string>("")
	const SearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value)
	}
	const ClearSearchHandler = (): void => {
		setSearch("")
	}
	const items = [
		{
			title: "Административный раздел",
			icon: Settings,
			children: [
				{
					title: "Компании",
					url: "#",
					icon: ShoppingBag,
				},
				{
					title: "Пользователи",
					url: "#",
					icon: User,
				},
				{
					title: "Группы пользователей",
					url: "#",
					icon: Users,
				},
			],
		},
		{
			title: "Справочники",
			url: "#",
			icon: Folder,
			children: [
				{
					title: "Регион",
					url: "#",
					icon: Map,
				},
				{
					title: "ОКВЭД",
					url: "#",
					icon: BriefcaseBusiness,
				},
				{
					title: "НДС",
					url: "#",
					icon: BadgeDollarSign,
				},
				{
					title: "Назначение платежа",
					url: "#",
					icon: CreditCard,
				},
				{
					title: "Группа товаров/услуга",
					url: "#",
					icon: CardSim,
				},
			],
		},
	]
	return (
		<Sidebar collapsible='icon'>
			<SidebarHeader className='flex items-center w-full flex-row border-b-2 rounded-none'>
				<Image src={"./logo.svg"} alt='Logo' height={50} width={50} />{" "}
				<span className='text-2xl pl-4'>CashBazar</span>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent className=''>
						<SidebarMenu>
							<SidebarMenuItem key={"Search input"}>
								<SidebarMenuButton asChild>
									<div className='relative'>
										<Search className='absolute left-3' />{" "}
										<Input
											placeholder='Поиск'
											className='h-7 pl-6 pr-6'
											value={search}
											onChange={SearchHandler}
										/>
										{search.length > 0 && (
											<X
												className='absolute right-3 cursor-pointer'
												onClick={ClearSearchHandler}
											/>
										)}
									</div>
								</SidebarMenuButton>
							</SidebarMenuItem>
							{items.map((item, id) => (
								<>
									<SidebarGroupLabel key={id}>
										<item.icon />
										<span className='text-[14px] pl-1.5'>{item.title}</span>
									</SidebarGroupLabel>
									{item.children?.map((c, idx) => (
										<SidebarMenuItem key={c.title + idx} className='ml-2.5'>
											<SidebarMenuButton asChild>
												<a href={c.url}>
													<c.icon />
													<span>{c.title}</span>
												</a>
											</SidebarMenuButton>
										</SidebarMenuItem>
									))}
								</>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<Button>
					<LogOut /> <span>Выход</span>
				</Button>
			</SidebarFooter>
		</Sidebar>
	)
}
