import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              color: theme('colors.foreground'),
              fontSize: '2.25rem',
              fontWeight: '700',
              marginBottom: '1rem',
            },
            h2: {
              color: theme('colors.foreground'),
              fontSize: '1.875rem',
              fontWeight: '700',
              marginBottom: '0.75rem',
            },
            ul: {
              listStyleType: 'disc',
              paddingLeft: '1.5rem',
              li: {
                marginBottom: '0.5rem',
              },
            },
            a: {
              textDecoration: 'none', // 下線を削除
              '&:hover': {
                textDecoration: 'underline', // ホバー時に下線を追加（必要に応じて）
              },
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.300'),
              color: theme('colors.gray.700'),
              paddingLeft: '1rem',
            },
            table: {
              width: '100%',
              borderCollapse: 'collapse',
              th: {
                borderBottomWidth: '2px',
                borderBottomColor: theme('colors.gray.300'),
                padding: '0.5rem',
                textAlign: 'left',
              },
              td: {
                borderBottomWidth: '1px',
                borderBottomColor: theme('colors.gray.200'),
                padding: '0.5rem',
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};
