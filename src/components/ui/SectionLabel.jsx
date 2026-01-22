/**
 * SectionLabel Component
 * Robot Friends Design System
 *
 * Used for section numbering and category labels
 * e.g., "01 / SERVICES" or "THE TRANSFORMATION"
 *
 * Theme-aware: Coral in light mode, Yellow in dark mode
 */

import { useTheme } from '../../hooks/useTheme'

export default function SectionLabel({
  children,
  number,
  color,
  className = '',
}) {
  const { isDark } = useTheme()

  // If no color specified, use theme-aware default
  const getColorClass = () => {
    if (color) {
      const colors = {
        coral: 'text-[#FF6B6B]',
        yellow: 'text-[#FFE66D]',
        navy: 'text-[#2B3A67]',
        white: 'text-white',
        muted: 'text-[#808080]',
      }
      return colors[color] || colors.coral
    }
    // Theme-aware default: Coral for light, Yellow for dark
    return isDark ? 'text-[#FFE66D]' : 'text-[#FF6B6B]'
  }

  return (
    <div
      className={`
        text-xs font-semibold uppercase tracking-[0.2em]
        ${getColorClass()}
        ${className}
      `}
    >
      {number && (
        <span className="mr-2">{number.toString().padStart(2, '0')}</span>
      )}
      {number && <span className="mr-2">/</span>}
      {children}
    </div>
  )
}
