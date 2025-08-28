import { cn } from "@/shared/lib/utils"
import { ReactNode } from "react"

interface Props {
  className?: string
  children: ReactNode
}
export const Container: React.FC<Props> = ({className, children}) => {
  return <div className={cn("flex px-3 py-2 h-full", className)}>{children}</div>
}