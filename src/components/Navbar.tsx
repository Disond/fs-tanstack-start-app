import { Link } from '@tanstack/react-router'
import { ClipboardPenLine, Loader2, Zap } from 'lucide-react'
import { Button } from './ui/button'
import { ModeToggle } from './ui/mode-toggle'
import { SingOutButton } from './singOutButton'
import { authClient } from '#/lib/auth-client'

export default function Navbar() {
    const { data: session, isPending } = authClient.useSession()

    return (
        <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-transparent">
            <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                <Link to="/">
                    <div className="group flex items-center gap-2">
                        <div className="bg-primary flex h-7 w-7 items-center justify-center rounded-sm transition-transform duration-200 group-hover:scale-110">
                            <Zap
                                size={14}
                                className="text-black"
                                strokeWidth={2}
                                fill="black"
                            />
                        </div>

                        <span className="font-bold tracking-tight">
                            Team<span className="text-primary">System</span>
                        </span>
                    </div>
                </Link>

                <div className="flex items-center gap-2">
                    <ModeToggle />

                    {isPending ? (
                        <Loader2 className="h-5 w-5 animate-spin text-primary" />
                    ) : session ? (
                        <>
                            <Button asChild className="px-5 py-2 text-sm">
                                <Link to="/signin">
                                    <ClipboardPenLine /> Dashboard
                                </Link>
                            </Button>
                            <SingOutButton />
                        </>
                    ) : (
                        <>
                            <Button asChild className="px-5 py-2 text-sm">
                                <Link to="/signin">Login</Link>
                            </Button>

                            <Button asChild className="px-5 py-2 text-sm">
                                <Link to="/signup">Get Started</Link>
                            </Button>
                        </>
                    )}

                    {/* <Button asChild className="px-5 py-2 text-sm">
                        <Link to="/signup">Get Started</Link>
                    </Button>
                    <SingOutButton /> */}
                </div>
            </nav>
        </header>
    )
}
