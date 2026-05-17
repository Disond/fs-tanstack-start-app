import { Moon, Sun } from 'lucide-react'
import { useTheme } from './theme-provider'
import { Button } from './button'

export function ThemeToggleModed() {
    const { setTheme, theme } = useTheme()

    const modedToggle = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={modedToggle}
            className="rounded-lg h-9 w-9 cursor-pointer" // Dodao sam zaobljene ivice da prati tvoj stil dugmadi
        >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
