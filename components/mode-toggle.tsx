import { Moon, Sun } from 'lucide-react' 
import { useTheme } from '@/components/theme-provider'

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <span onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')} className=' cursor-pointer p-3 border rounded-full'>
      {theme == 'light' ? (
        <Sun
          className={`h-[1.2rem] w-[1.2rem]  rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0`}
        />
      ) : (
        <Moon className='  h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
      )}
    </span>
  )
}
