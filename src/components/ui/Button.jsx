/**
 * Button Component
 * Robot Friends Design System
 *
 * Variants:
 * - primary: Theme-aware (Coral in light, Yellow in dark)
 * - secondary: Ghost button with theme border
 * - ghost: Text only with hover state
 *
 * The 3% Rule: Accent swap between modes
 */

import { Link } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  className = '',
  ...props
}) {
  const { isDark } = useTheme()

  const baseStyles = `
    inline-flex items-center justify-center
    font-general font-medium
    rounded-lg
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `

  // Theme-aware variant styles
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return isDark
          ? `bg-[#FFE66D] text-[#151D38] hover:bg-[#E8CC42] hover:-translate-y-0.5 focus:ring-[#FFE66D] shadow-sm hover:shadow-md font-semibold`
          : `bg-[#FF6B6B] text-white hover:bg-[#E85555] hover:-translate-y-0.5 focus:ring-[#FF6B6B] shadow-sm hover:shadow-md`

      case 'secondary':
        return isDark
          ? `bg-transparent text-white border-2 border-white/50 hover:bg-white/10 hover:border-white focus:ring-white/50`
          : `bg-transparent text-[#2B3A67] border-2 border-[#2B3A67] hover:bg-[#2B3A67] hover:text-white focus:ring-[#2B3A67]`

      case 'ghost':
        return isDark
          ? `bg-transparent text-white/80 hover:text-white hover:bg-white/5 focus:ring-white/30`
          : `bg-transparent text-[#2B3A67] hover:bg-[#2B3A67]/5 focus:ring-[#2B3A67]`

      default:
        return ''
    }
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = `${baseStyles} ${getVariantStyles()} ${sizes[size]} ${className}`.trim()

  // External link
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  // Internal link (React Router)
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  // Regular button
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
