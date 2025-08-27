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
	LogOut,
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
import { Button } from "../ui/button"
import Link from "next/link"

export function AppSidebar() {
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
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton asChild>
							<Link href='/'>
								<Image src={"./logo.svg"} alt='Logo' height={40} width={40} />{" "}
								<span className='text-2xl'>CashBazar</span>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent className=''>
						<SidebarMenu>
							{
								<SidebarMenuItem key={"User Edit"}>
									<SidebarMenuButton asChild>
										<Link href={"/profile"}>
											<User />
											<span>Профиль</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							}
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
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton asChild>
							<Button>
								<LogOut /> <span>Выход</span>
							</Button>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	)
}
