import ContainerQueriesPlugin from '@tailwindcss/container-queries'
import type {Config} from 'tailwindcss'


export default {
  content: ['./index.php', './app/**/*.php', './resources/**/*.{php,jsx,tsx}'],
  corePlugins: {preflight: true},
  plugins: [ContainerQueriesPlugin],
} satisfies Config
