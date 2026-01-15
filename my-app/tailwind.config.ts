import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A0840',
          hover: '#050426',
        },
        secondary: {
          DEFAULT: '#251973',
        },
        accent: {
          DEFAULT: '#705FD9',
          hover: '#403BBF',
        },
        background: {
          DEFAULT: '#FFFFFF',
        },
        text: {
          DEFAULT: '#050426',
          muted: '#403BBF',
        },
      },
    },
  },
  plugins: [],
}

export default config
