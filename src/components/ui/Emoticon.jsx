/**
 * Emoticon Component
 * Robot Friends Design System
 *
 * The :) emoticon - the heart of the brand.
 * "A smile in code - the simplest expression of friendship"
 *
 * SPEC: Always render in JetBrains Mono 500
 * SPEC: Light mode = Coral (#FF6B6B), Dark mode = Yellow (#FFE66D)
 */

import { useTheme } from '../../hooks/useTheme'

export default function Emoticon({
  size = 'md',
  color, // If not specified, uses theme-aware default
  className = '',
}) {
  const { isDark } = useTheme()

  const sizes = {
    xs: 'text-sm',
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl',
    xl: 'text-3xl',
    '2xl': 'text-4xl',
    '3xl': 'text-5xl',
  }

  // Get color - if specified use it, otherwise use theme-aware default
  const getColorStyle = () => {
    if (color) {
      const colors = {
        coral: '#FF6B6B',
        yellow: '#FFE66D',
        white: '#FFFFFF',
        navy: '#2B3A67',
      }
      return colors[color] || colors.coral
    }
    // Theme-aware default: Coral in light, Yellow in dark
    return isDark ? '#FFE66D' : '#FF6B6B'
  }

  return (
    <span
      className={`font-mono font-medium ${sizes[size]} ${className}`}
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontWeight: 500,
        color: getColorStyle()
      }}
    >
      :)
    </span>
  )
}
