/** @type {import('tailwindcss').Config} */
module.exports = {
  // Arquivos que o Tailwind deve escanear para classes
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],

  // Modo escuro baseado na classe 'dark'
  darkMode: 'class', // ou 'media' para usar preferência do sistema

  theme: {
    // Sobrescreve as configurações padrão
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },

    colors: {
      teste: {
        100: "#ff00eeff"
      },
      black: {
        100: "#000000"
      }
    },

    // Fontes personalizadas
    fontFamily: {
      space: ['Space Grotesk', 'system-ui', 'sans-serif']
    },

    // Tamanhos de fonte customizados
    fontSize: {
      'xs': ['0.75rem', { lineHeight: '1rem' }],
      'sm': ['0.875rem', { lineHeight: '1.25rem' }],
      'base': ['1rem', { lineHeight: '1.5rem' }],
      'lg': ['1.125rem', { lineHeight: '1.75rem' }],
      'xl': ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },

    // Espaçamentos personalizados
    spacing: {
      '18': '4.5rem',
      '88': '22rem',
      '100': '25rem',
      '128': '32rem',
    },

    // Larguras máximas customizadas
    maxWidth: {
      '8xl': '88rem',
      '9xl': '96rem',
      'screen-3xl': '1920px',
    },

    // Bordas arredondadas
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'xl': '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      'full': '9999px',
    },

    // Sombras personalizadas
    boxShadow: {
      'soft': '0 2px 15px 0 rgba(0, 0, 0, 0.05)',
      'medium': '0 4px 25px 0 rgba(0, 0, 0, 0.1)',
      'hard': '0 10px 40px 0 rgba(0, 0, 0, 0.15)',
      'glow': '0 0 20px rgba(59, 130, 246, 0.15)',
      'glow-lg': '0 0 40px rgba(59, 130, 246, 0.25)',
    },

    // Animações personalizadas
    animation: {
      'fade-in': 'fadeIn 0.5s ease-in-out',
      'fade-out': 'fadeOut 0.5s ease-in-out',
      'slide-up': 'slideUp 0.3s ease-out',
      'slide-down': 'slideDown 0.3s ease-out',
      'pulse-slow': 'pulse 3s infinite',
      'bounce-gentle': 'bounceGentle 2s infinite',
      'float': 'float 6s ease-in-out infinite',
    },

    // Keyframes para as animações
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      fadeOut: {
        '0%': { opacity: '1' },
        '100%': { opacity: '0' },
      },
      slideUp: {
        '0%': { transform: 'translateY(100%)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
      },
      slideDown: {
        '0%': { transform: 'translateY(-100%)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
      },
      bounceGentle: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-10px)' },
      },
      float: {
        '0%, 100%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(-20px)' },
      },
    },

    // Durações de transição customizadas
    transitionDuration: {
      '400': '400ms',
      '600': '600ms',
      '800': '800ms',
      '900': '900ms',
    },

    // Filtros de backdrop
    backdropBlur: {
      'xs': '2px',
      '3xl': '64px',
    },

    // Gradientes customizados
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      'hero-pattern': "url('/images/hero-bg.svg')",
      'mesh-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },

    // Z-index customizados
    zIndex: {
      '60': '60',
      '70': '70',
      '80': '80',
      '90': '90',
      '100': '100',
    },

    // Aspect ratios personalizados
    aspectRatio: {
      '4/3': '4 / 3',
      '3/2': '3 / 2',
      '2/3': '2 / 3',
      '9/16': '9 / 16',
    },
  },

  // Plugins adicionais
  plugins: [
    // Plugin para formulários
    require('@tailwindcss/forms'),
    
    // Plugin para tipografia
    require('@tailwindcss/typography'),
    
    // Plugin para aspect-ratio (se usando versão antiga do Tailwind)
    require('@tailwindcss/aspect-ratio'),
    
    // Plugin para line-clamp
    require('@tailwindcss/line-clamp'),

    // Plugin personalizado para utilitários customizados
    function({ addUtilities, addComponents, theme }) {
      // Utilitários customizados
      const newUtilities = {
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        },
        '.text-gradient': {
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
      }

      // Componentes customizados
      const newComponents = {
        '.btn': {
          padding: theme('spacing.2') + ' ' + theme('spacing.4'),
          borderRadius: theme('borderRadius.md'),
          fontWeight: theme('fontWeight.medium'),
          transition: 'all ' + theme('transitionDuration.200'),
          '&:focus': {
            outline: '2px solid transparent',
            'outline-offset': '2px',
            '--tw-ring-offset-shadow': 'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
            '--tw-ring-shadow': 'var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
            'box-shadow': 'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
            '--tw-ring-color': theme('colors.brand.500'),
          },
        },
        '.btn-primary': {
          backgroundColor: theme('colors.brand.500'),
          color: theme('colors.white'),
          '&:hover': {
            backgroundColor: theme('colors.brand.600'),
          },
        },
        '.btn-secondary': {
          backgroundColor: theme('colors.gray.100'),
          color: theme('colors.gray.900'),
          '&:hover': {
            backgroundColor: theme('colors.gray.200'),
          },
        },
        '.card': {
          backgroundColor: theme('colors.white'),
          borderRadius: theme('borderRadius.lg'),
          padding: theme('spacing.6'),
          boxShadow: theme('boxShadow.soft'),
          border: '1px solid ' + theme('colors.gray.200'),
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
      addComponents(newComponents)
    },
  ],

  // Conteúdo de segurança - classes que nunca devem ser removidas
  safelist: [
    'bg-brand-500',
    'text-white',
    'hover:bg-brand-600',
    // Adicione classes que são geradas dinamicamente
  ],
}