import { Link } from '@tanstack/react-router'
import { ModeToggle } from './ui/mode-toggle'

export default function Navbar2() {
    return (
        <div>
            <header className="fixed top-0 left-0 right-0 z-50 w-full">
                <div className="max-w-7xl mx-auto w-full px-4 py-4 sm:px-6">
                    <nav className="w-full flex items-center justify-between gap-3 p-2.5 bg-background/60 backdrop-blur-lg border border-border/40 shadow-2xl shadow-primary/5 rounded-full">
                        <Link
                            to="/"
                            className="pl-4 font-bold text-xl tracking-tight"
                        >
                            Logo
                        </Link>
                        <div>
                            {/* <NavigationMenu className="max-lg:hidden bg-muted p-0.5 rounded-full">
                                <NavigationMenuList className="flex gap-0">
                                    {navigationData.map((navItem) => (
                                        <NavigationMenuItem key={navItem.title}>
                                            <NavigationMenuLink
                                                href={navItem.href}
                                                className="px-2 lg:px-4 py-2 text-sm font-medium rounded-full text-muted-foreground hover:text-foreground hover:bg-background outline outline-transparent hover:outline-border hover:shadow-xs transition tracking-normal"
                                            >
                                                {navItem.title}
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    ))}
                                </NavigationMenuList>
                            </NavigationMenu> */}
                        </div>

                        <div className="hidden lg:flex flex-1 justify-center">
                            <div className="flex items-center gap-1 bg-muted/50 p-1 rounded-full border border-border-20">
                                <div className="px-4 py-1.5 text-sm font-medium hover:bg-background rounded-full transition-all cursor-pointer">
                                    Nav Item
                                </div>
                                <div className="px-4 py-1.5 text-sm font-medium hover:bg-background rounded-full transition-all cursor-pointer">
                                    Nav Item
                                </div>
                                <div className="px-4 py-1.5 text-sm font-medium hover:bg-background rounded-full transition-all cursor-pointer">
                                    Nav Item
                                </div>
                                <div className="px-4 py-1.5 text-sm font-medium hover:bg-background rounded-full transition-all cursor-pointer">
                                    Nav Item
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center pr-2">
                            <ModeToggle />
                        </div>

                        <div className="lg:hidden">
                            {/* <DropdownMenu
                                open={isOpen}
                                onOpenChange={setIsOpen}
                            >
                                <DropdownMenuTrigger className="rounded-full bg-background border border-border p-2 outline-none flex items-center justify-center cursor-pointer transition-colors">
                                    <TextAlignJustify size={20} />
                                    <span className="sr-only">Menu</span>
                                </DropdownMenuTrigger>

                                <DropdownMenuContent
                                    align="end"
                                    className="w-56 mt-2"
                                >
                                    {navigationData.map((item) => (
                                        <DropdownMenuItem key={item.title}>
                                            <a
                                                href={item.href}
                                                className="w-full cursor-pointer text-sm font-medium"
                                            >
                                                {item.title}
                                            </a>
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu> */}
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}
