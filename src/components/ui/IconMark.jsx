/**
 * IconMark Component
 * Robot Friends Design System
 *
 * The :) emoticon in a rounded square container.
 * "Navy background with Sunshine Yellow emoticon - trust plus possibility"
 */

export default function IconMark({
  size = 'md',
  variant = 'primary',
  className = '',
}) {
  const sizes = {
    xs: 'w-6 h-6 text-xs rounded-md',
    sm: 'w-8 h-8 text-sm rounded-lg',
    md: 'w-10 h-10 text-base rounded-xl',
    lg: 'w-14 h-14 text-xl rounded-2xl',
    xl: 'w-20 h-20 text-3xl rounded-[22px]',
    '2xl': 'w-24 h-24 text-4xl rounded-[26px]',
  }

  const variants = {
    // Light mode default: Navy bg, yellow emoticon
    primary: 'bg-friendly-navy text-sunshine-yellow',
    // Dark mode: Coral bg, white emoticon
    dark: 'bg-warm-coral text-white',
    // Outline variant
    outline: 'bg-transparent border-2 border-friendly-navy text-friendly-navy',
  }

  return (
    <div
      className={`
        inline-flex items-center justify-center
        font-mono font-semibold
        ${sizes[size]}
        ${variants[variant]}
        ${className}
      `}
    >
      :)
    </div>
  )
}
