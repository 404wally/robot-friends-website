/**
 * Layout Component
 * Robot Friends Design System
 *
 * Main layout wrapper with:
 * - Theme-aware background (Cream-300 light, Navy-800/900 dark)
 * - Workshop grid overlay (Navy lines light, Yellow lines dark)
 * - Navbar
 * - Main content area
 * - Footer
 *
 * Light: "Notebook waiting for ideas"
 * Dark: "Late night in the workshop"
 */

import { Outlet } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  const { isDark } = useTheme()

  // Grid colors from theme exploration
  // Light: navy sketch lines | Dark: golden glow lines
  const gridColor = isDark
    ? 'rgba(255, 230, 109, 0.04)' // Yellow-500 at 4% opacity
    : 'rgba(43, 58, 103, 0.03)'   // Navy-700 at 3% opacity

  // Background gradients per theme
  const bgGradient = isDark
    ? 'linear-gradient(135deg, #2B3A67 0%, #1E2A4A 50%, #151D38 100%)' // Navy gradient
    : 'linear-gradient(135deg, #FFF9F0 0%, #FFFDF8 50%, #ffffff 100%)' // Cream gradient

  return (
    <div
      className="relative min-h-screen flex flex-col transition-colors duration-[400ms]"
      style={{ background: bgGradient }}
    >
      {/* Workshop grid overlay - signature brand element */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(${gridColor} 1px, transparent 1px),
            linear-gradient(90deg, ${gridColor} 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      <Navbar />

      {/* Main content with padding for fixed navbar */}
      <main className="flex-1 pt-16 md:pt-20 relative z-[1]">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
