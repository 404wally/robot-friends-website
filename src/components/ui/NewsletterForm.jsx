/**
 * Newsletter Signup Form
 * Robot Friends Design System
 *
 * WALLY-003: Newsletter Capture
 * Placeholder submission - will connect to Amazon SES via Jon's system
 */

import { useState } from 'react'
import { useTheme } from '../../hooks/useTheme'
import Emoticon from './Emoticon'

export default function NewsletterForm({ variant = 'default', className = '' }) {
  const { isDark } = useTheme()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email || !email.includes('@')) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }

    setStatus('loading')

    // TODO: Connect to actual endpoint when Jon's SES system is ready
    // For now, simulate a successful submission
    await new Promise((resolve) => setTimeout(resolve, 800))

    // Mock success - replace with actual API call
    console.log('Newsletter signup:', email)
    setStatus('success')
    setMessage("You're in! We'll be in touch soon.")
    setEmail('')

    // Reset after 5 seconds
    setTimeout(() => {
      setStatus('idle')
      setMessage('')
    }, 5000)
  }

  // Compact variant for footer
  if (variant === 'compact') {
    return (
      <div className={className}>
        <h4 className="font-semibold mb-3 text-white">Stay in the Loop</h4>
        {status === 'success' ? (
          <p className="text-sm text-[#95BF8F]">
            {message} <Emoticon size="xs" color="yellow" />
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              disabled={status === 'loading'}
              className="flex-1 px-3 py-2 text-sm rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#FFE66D] transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-4 py-2 text-sm font-semibold rounded-lg bg-[#FF6B6B] text-white hover:bg-[#ff5252] transition-colors disabled:opacity-50"
            >
              {status === 'loading' ? '...' : 'Join'}
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className="text-xs text-[#FF6B6B] mt-2">{message}</p>
        )}
      </div>
    )
  }

  // Default variant for homepage section
  return (
    <div className={`max-w-md mx-auto ${className}`}>
      {status === 'success' ? (
        <div
          className="text-center p-6 rounded-2xl"
          style={{ background: isDark ? 'rgba(149, 191, 143, 0.1)' : 'rgba(149, 191, 143, 0.15)' }}
        >
          <p
            className="text-lg font-medium"
            style={{ color: isDark ? '#95BF8F' : '#2B3A67' }}
          >
            {message} <Emoticon size="sm" color={isDark ? 'yellow' : 'coral'} />
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            disabled={status === 'loading'}
            className="flex-1 px-5 py-3 rounded-xl text-base border-2 transition-colors focus:outline-none disabled:opacity-50"
            style={{
              background: isDark ? 'rgba(255,255,255,0.05)' : '#FFFFFF',
              borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(43, 58, 103, 0.1)',
              color: isDark ? '#FFFFFF' : '#2B3A67',
            }}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-3 font-semibold rounded-xl bg-[#FF6B6B] text-white hover:bg-[#ff5252] transition-colors disabled:opacity-50 whitespace-nowrap"
          >
            {status === 'loading' ? 'Joining...' : 'Get Updates'}
          </button>
        </form>
      )}
      {status === 'error' && (
        <p className="text-sm text-[#FF6B6B] mt-3 text-center">{message}</p>
      )}
    </div>
  )
}
