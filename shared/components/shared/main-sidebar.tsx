"use client"
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "../ui/sidebar"
import { Settings, Folder, Search, LogOut, X, User } from "lucide-react"
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
			title: "Профиль",
			url: "#",
			icon: User,
		},
		{
			title: "Административный раздел",
			icon: Settings,
			children: [
				{
					title: "Тест",
					url: "#",
				},
			],
		},
		{
			title: "Справочники",
			url: "#",
			icon: Folder,
		},
	]
	return (
		<Sidebar collapsible='offcanvas'>
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
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<a href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<Button>
					<LogOut /> Выход
				</Button>
			</SidebarFooter>
		</Sidebar>
	)
}
