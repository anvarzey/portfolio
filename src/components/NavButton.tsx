import type { ReactNode } from "react";
import { Button } from "./ui/button";

interface Props {
    children: ReactNode
    href: string
}

export default function NavButton({ children, href }: Props) {
    const handleNavigation = () => {
        document.getElementById(href)?.scrollIntoView({ behavior: "smooth" })
    }
    return (
        <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground hover:bg-accent-blue/10"
            onClick={handleNavigation}
        >
            {children}
        </Button>
    )
}
