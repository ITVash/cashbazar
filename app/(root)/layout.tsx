import { Header } from "@/shared/components/shared/header"
import { AppSidebar } from "@/shared/components/shared/main-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/shared/components/ui/sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<main className='flex justify-between w-[100%] flex-col'>
				<div className='flex justify-between items-center w-[100%] border-b-2'>
					<SidebarTrigger />
					<Header className='flex-1/2' />
				</div>
				<div className='h-full'>{children}</div>
			</main>
		</SidebarProvider>
	)
}
