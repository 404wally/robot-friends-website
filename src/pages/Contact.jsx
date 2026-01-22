/**
 * Contact Page
 * Robot Friends Website
 *
 * SPEC: Section alternation pattern
 * Light Mode: Canvas gradient → White
 * Dark Mode: Canvas gradient → Surface
 */

import { useState } from 'react'
import { Button, Card, SectionLabel, Emoticon } from '../components/ui'
import { useTheme } from '../hooks/useTheme'

export default function Contact() {
  const { isDark } = useTheme()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    // For now, we'll use a mailto fallback
    // In production, connect to Formspree or similar
    const mailtoLink = `mailto:contact@robobffs.com?subject=New inquiry from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`
    )}`

    window.location.href = mailtoLink
    setStatus('success')
  }

  // Theme-aware input styles - using spec colors
  // Light: border #EBE5DC, Dark: border rgba(61,78,122,0.5)
  const inputBaseStyles = 'w-full px-4 py-3 rounded-lg border-2 outline-none transition-colors'

  const getInputStyle = () => {
    if (isDark) {
      return {
        backgroundColor: '#151D38',
        borderColor: 'rgba(61, 78, 122, 0.5)',
        color: '#FFFFFF',
      }
    }
    return {
      backgroundColor: '#FFFFFF',
      borderColor: '#EBE5DC',
      color: '#2B3A67',
    }
  }

  return (
    <div>
      {/* Hero - Canvas gradient */}
      <section className="py-20 md:py-28">
        <div className="content-wrapper">
          <SectionLabel className="mb-4">Contact</SectionLabel>
          <h1
            className="mb-6"
            style={{ color: isDark ? '#FFFFFF' : '#2B3A67' }}
          >
            Let's Talk
          </h1>
          <p
            className="text-xl max-w-xl"
            style={{ color: isDark ? 'rgba(255,255,255,0.7)' : '#666666' }}
          >
            Hey there! Tell us what you're working on. <Emoticon />
          </p>
        </div>
      </section>

      {/* Contact Form - White in light, Surface in dark */}
      <section
        className="pb-20 md:pb-28"
        style={{ background: isDark ? '#1E2A4A' : '#FFFFFF' }}
      >
        <div className="content-wrapper">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
            {/* Form */}
            <Card className="p-8" withGrid>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                    style={{ color: isDark ? '#FFFFFF' : '#2B3A67' }}
                  >
                    Name <span style={{ color: isDark ? '#FFE66D' : '#FF6B6B' }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={inputBaseStyles}
                    style={getInputStyle()}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                    style={{ color: isDark ? '#FFFFFF' : '#2B3A67' }}
                  >
                    Email <span style={{ color: isDark ? '#FFE66D' : '#FF6B6B' }}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={inputBaseStyles}
                    style={getInputStyle()}
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium mb-2"
                    style={{ color: isDark ? '#FFFFFF' : '#2B3A67' }}
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={inputBaseStyles}
                    style={getInputStyle()}
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                    style={{ color: isDark ? '#FFFFFF' : '#2B3A67' }}
                  >
                    What are you hoping to build? <span style={{ color: isDark ? '#FFE66D' : '#FF6B6B' }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputBaseStyles} resize-none`}
                    style={getInputStyle()}
                    placeholder="Tell us about your goals, challenges, or what you're excited about..."
                  />
                </div>

                <Button type="submit" className="w-full" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </Button>

                {status === 'success' && (
                  <p className="text-[#95BF8F] text-sm text-center">
                    Opening your email client... <Emoticon size="sm" color="sage" />
                  </p>
                )}
              </form>
            </Card>

            {/* Side Info */}
            <div className="space-y-8">
              <Card variant="postit" color="yellow" rotation={-2}>
                <h3 className="text-[#2B3A67] mb-2">Prefer email?</h3>
                <a
                  href="mailto:contact@robobffs.com"
                  className="text-[#2B3A67] font-mono hover:text-[#FF6B6B] transition-colors"
                >
                  contact@robobffs.com
                </a>
              </Card>

              <Card variant="postit" color="cream" rotation={1}>
                <h3 className="text-[#2B3A67] mb-2">What happens next?</h3>
                <ol className="text-[#666666] text-sm space-y-2">
                  <li>1. We'll read your message (actually read it)</li>
                  <li>2. We'll respond within 48 hours</li>
                  <li>3. If it's a fit, we'll schedule a call</li>
                  <li>4. No pressure, no hard sell</li>
                </ol>
              </Card>

              <p
                className="text-sm"
                style={{ color: isDark ? 'rgba(255,255,255,0.5)' : '#808080' }}
              >
                That's what friends are for. <Emoticon size="sm" />
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
