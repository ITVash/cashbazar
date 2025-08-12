import { AppSidebar } from "@/shared/components/shared/main-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/shared/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}