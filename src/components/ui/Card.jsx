/**
 * Card Component
 * Robot Friends Design System
 *
 * Variants:
 * - default: Theme-aware card with proper shadow/border
 * - paper: Construction paper style with texture
 * - postit: Post-it note style (yellow by default)
 * - taped: Card with tape strip that extends beyond card
 *
 * Theme exploration specs:
 * Light: bg-cream-100, border-navy-100, shadow navy-tinted
 * Dark: bg-navy-800, border-navy-600/50, shadow black-tinted
 */

import { TAPE_POSITIONS } from '../../utils/tactile'
import { useTheme } from '../../hooks/useTheme'

export default function Card({
  children,
  variant = 'default',
  color = 'white',
  rotation = 0,
  offset = 0,
  tapePosition = 'topCenter',
  tapeColor = 'yellow',
  className = '',
  withGrid = false,
  withTexture = false,
  ...props
}) {
  const { isDark } = useTheme()

  // Taped cards need overflow-visible for tape to extend beyond
  const baseStyles = variant === 'taped' ? 'relative overflow-visible' : 'relative overflow-hidden'

  // Theme-aware shadow colors
  const shadowLight = '0 4px 12px rgba(43, 58, 103, 0.08)'
  const shadowDark = '0 4px 12px rgba(0, 0, 0, 0.3)'

  // SPEC: Light border = #EBE5DC, Dark border = rgba(61,78,122,0.5)
  const variants = {
    default: isDark
      ? `bg-[#1E2A4A] rounded-xl p-8 border border-[rgba(61,78,122,0.5)]`
      : `bg-white rounded-xl p-8 border border-[#EBE5DC]`,
    paper: `
      rounded-sm p-6
      shadow-[3px_3px_0_rgba(0,0,0,0.1)]
    `,
    postit: `
      rounded-sm p-6
      shadow-[2px_2px_4px_rgba(0,0,0,0.1),inset_0_-40px_40px_-40px_rgba(0,0,0,0.05)]
    `,
    taped: isDark
      ? `bg-[#1E2A4A] rounded-xl p-8 border border-[rgba(61,78,122,0.5)]`
      : `bg-white rounded-xl p-8 border border-[#EBE5DC]`,
  }

  const colors = {
    white: isDark ? 'bg-[#1E2A4A]' : 'bg-white',
    cream: isDark ? 'bg-[#2B3A67]' : 'bg-[#FFF9F0]',
    yellow: 'bg-[#FFE66D]',
    coral: 'bg-[#FF6B6B] text-white',
    navy: 'bg-[#2B3A67] text-white',
    sage: 'bg-[#95BF8F]',
  }

  const tapeColors = {
    yellow: 'bg-sunshine-yellow/80',
    coral: 'bg-warm-coral/70',
    sage: 'bg-calm-sage/70',
  }

  // Extended tape positions - tape extends beyond card edge
  const extendedTapePositions = {
    topCenter: {
      top: '-14px',
      left: '50%',
      transform: 'translateX(-50%) rotate(-2deg)',
      width: '100px',
      height: '28px',
    },
    topLeft: {
      top: '-16px',
      left: '-12px',
      transform: 'rotate(-18deg)',
      width: '90px',
      height: '26px',
    },
    topRight: {
      top: '-16px',
      right: '-12px',
      transform: 'rotate(15deg)',
      width: '90px',
      height: '26px',
    },
    cornerTopRight: {
      top: '-10px',
      right: '-20px',
      transform: 'rotate(38deg)',
      width: '100px',
      height: '26px',
    },
    cornerTopLeft: {
      top: '-10px',
      left: '-20px',
      transform: 'rotate(-38deg)',
      width: '100px',
      height: '26px',
    },
  }

  // Get color class based on variant
  const getColorClass = () => {
    if (variant === 'default') return ''
    if (variant === 'postit' && color === 'white') return colors.yellow // Default postit color
    return colors[color] || ''
  }

  // Build transform style for rotation and offset
  const transformStyle = {
    transform: `rotate(${rotation}deg)${offset ? ` translateY(${offset}px)` : ''}`,
  }

  // Get tape position styles - use extended positions for natural look
  const tapeStyle = extendedTapePositions[tapePosition] || extendedTapePositions.topCenter

  // Get shadow based on theme
  const getShadowStyle = () => {
    if (variant === 'postit' || variant === 'paper') return {}
    return { boxShadow: isDark ? shadowDark : shadowLight }
  }

  return (
    <div
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${getColorClass()}
        ${className}
      `}
      style={{ ...transformStyle, ...getShadowStyle() }}
      {...props}
    >
      {/* Paper texture overlay for paper and postit variants */}
      {(withTexture || variant === 'paper') && (
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03] rounded-inherit"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      )}

      {/* Workshop grid overlay */}
      {withGrid && (
        <div
          className="absolute inset-0 pointer-events-none rounded-inherit"
          style={{
            backgroundImage: `
              linear-gradient(rgba(43, 58, 103, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(43, 58, 103, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '16px 16px',
          }}
        />
      )}

      {/* Tape strip for taped variant - extends beyond card */}
      {variant === 'taped' && (
        <div
          className={`absolute ${tapeColors[tapeColor] || tapeColors.yellow} shadow-sm z-10`}
          style={{
            ...tapeStyle,
            // Tape texture effect
            backgroundImage: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
          }}
        />
      )}

      {/* Post-it corner fold */}
      {variant === 'postit' && (
        <div
          className="absolute bottom-0 right-0 w-10 h-10"
          style={{
            background: 'linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.03) 50%)',
          }}
        />
      )}

      <div className="relative z-[1]">{children}</div>
    </div>
  )
}
