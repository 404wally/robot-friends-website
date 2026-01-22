/**
 * Navbar Component
 * Robot Friends Design System
 *
 * SPEC: Light mode - bg rgba(255, 249, 240, 0.9), border #EBE5DC
 * SPEC: Dark mode - bg rgba(30, 42, 74, 0.9), border rgba(61,78,122,0.5)
 * SPEC: Light mode links hover to #2B3A67
 * SPEC: Dark mode links hover to #FFE66D (yellow)
 * SPEC: Wordmark emoticon follows theme colors
 */

import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import { Emoticon, Button, ThemeToggle } from '../ui'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { isDark } = useTheme()

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-[400ms]"
      style={{
        background: isDark ? 'rgba(30, 42, 74, 0.9)' : 'rgba(255, 249, 240, 0.9)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: isDark ? '1px solid rgba(61, 78, 122, 0.5)' : '1px solid #EBE5DC',
      }}
    >
      <div className="content-wrapper">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - wordmark only */}
          <Link
            to="/"
            className="font-fraunces font-bold text-xl hover:opacity-80 transition-opacity"
            style={{ color: isDark ? '#FFFFFF' : '#2B3A67' }}
          >
            robot friends <Emoticon size="md" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-medium transition-colors"
                style={{
                  color: isActive(link.path)
                    ? (isDark ? '#FFFFFF' : '#2B3A67')
                    : (isDark ? 'rgba(255,255,255,0.7)' : '#666666')
                }}
                onMouseEnter={(e) => {
                  if (!isActive(link.path)) {
                    e.target.style.color = isDark ? '#FFE66D' : '#2B3A67'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(link.path)) {
                    e.target.style.color = isDark ? 'rgba(255,255,255,0.7)' : '#666666'
                  }
                }}
              >
                {link.name}
              </Link>
            ))}

            <ThemeToggle />

            <Button to="/contact" size="sm">
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            style={{ color: isDark ? '#FFFFFF' : '#2B3A67' }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className="md:hidden py-4"
            style={{ borderTop: isDark ? '1px solid rgba(61, 78, 122, 0.5)' : '1px solid #EBE5DC' }}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium py-2"
                  style={{
                    color: isActive(link.path)
                      ? (isDark ? '#FFFFFF' : '#2B3A67')
                      : (isDark ? 'rgba(255,255,255,0.7)' : '#666666')
                  }}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-2">
                <ThemeToggle />
                <Button to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Let's Talk
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
