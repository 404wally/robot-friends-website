/**
 * Footer Component
 * Robot Friends Design System
 *
 * SPEC: Footer is ALWAYS dark, even in Light Mode
 * SPEC: Light mode footer = #2B3A67 (Friendly Navy)
 * SPEC: Dark mode footer = #0D1221 (Deepest dark)
 * SPEC: Emoticon always yellow (#FFE66D) in footer
 * SPEC: Has yellow grid overlay
 */

import { Link } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import { Emoticon, NewsletterForm } from '../ui'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { isDark } = useTheme()

  const footerLinks = [
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  // Footer background: Navy in light mode, deepest dark in dark mode
  const footerBg = isDark ? '#0D1221' : '#2B3A67'

  return (
    <footer
      className="relative overflow-hidden transition-colors duration-[400ms]"
      style={{ background: footerBg }}
    >
      {/* Yellow grid overlay - always present on footer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 230, 109, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 230, 109, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="content-wrapper py-12 md:py-16 relative z-[1]">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block font-fraunces font-bold text-lg mb-4 text-white">
              robot friends <Emoticon size="sm" color="yellow" />
            </Link>
            <p className="text-sm leading-relaxed text-white/60">
              We don't build for you. We build YOU.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm transition-colors text-white/60 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <NewsletterForm variant="compact" />
            <a
              href="mailto:contact@robobffs.com"
              className="text-sm transition-colors text-white/60 hover:text-white block mt-4"
            >
              contact@robobffs.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/40">
              &copy; {currentYear} Robot Friends. A DBA of 404 Not Found LLC.
            </p>
            <p className="text-xs text-white/40">
              That's what friends are for. <Emoticon size="xs" color="yellow" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
