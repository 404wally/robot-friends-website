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
    interest: '',
    teamSize: '',
    timeline: '',
    referralSource: '',
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
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nInterest: ${formData.interest}\nTeam Size: ${formData.teamSize}\nTimeline: ${formData.timeline}\nHow they found us: ${formData.referralSource}\n\nMessage:\n${formData.message}`
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

  const getSelectStyle = () => {
    const base = getInputStyle()
    return {
      ...base,
      appearance: 'none',
      backgroundImage: isDark
        ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23FFFFFF' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`
        : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%232B3A67' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 1rem center',
      paddingRight: '2.5rem',
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
            Tell us what you're working on. We'll figure out the rest together. <Emoticon />
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
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
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

                {/* Email */}
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

                {/* Company */}
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

                {/* Interest - Dropdown */}
                <div>
                  <label
                    htmlFor="interest"
                    className="block text-sm font-medium mb-2"
                    style={{ color: isDark ? '#FFFFFF' : '#2B3A67' }}
                  >
                    What are you interested in?
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className={inputBaseStyles}
                    style={getSelectStyle()}
                  >
                    <option value="">Select an option</option>
                    <option value="Quick Win Sprint">Quick Win Sprint ($1.5k - $3.5k)</option>
                    <option value="Full System Build">Full System Build ($8k - $25k)</option>
                    <option value="Ongoing Support">Ongoing Support ($2k - $5k/mo)</option>
                    <option value="Team Rollout">Team Rollout ($25k - $75k)</option>
                    <option value="A la carte service">A la carte service</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>

                {/* Team Size - Dropdown */}
                <div>
                  <label
                    htmlFor="teamSize"
                    className="block text-sm font-medium mb-2"
                    style={{ color: isDark ? '#FFFFFF' : '#2B3A67' }}
                  >
                    Team size
                  </label>
                  <select
                    id="teamSize"
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    className={inputBaseStyles}
                    style={getSelectStyle()}
                  >
                    <option value="">Select an option</option>
                    <option value="Just me">Just me</option>
                    <option value="2-5 people">2-5 people</option>
                    <option value="6-15 people">6-15 people</option>
                    <option value="16-50 people">16-50 people</option>
                    <option value="50+ people">50+ people</option>
                  </select>
                </div>

                {/* Timeline - Dropdown */}
                <div>
                  <label
                    htmlFor="timeline"
                    className="block text-sm font-medium mb-2"
                    style={{ color: isDark ? '#FFFFFF' : '#2B3A67' }}
                  >
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className={inputBaseStyles}
                    style={getSelectStyle()}
                  >
                    <option value="">Select an option</option>
                    <option value="ASAP">ASAP</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="Just exploring">Just exploring</option>
                  </select>
                </div>

                {/* How did you hear about us - Dropdown */}
                <div>
                  <label
                    htmlFor="referralSource"
                    className="block text-sm font-medium mb-2"
                    style={{ color: isDark ? '#FFFFFF' : '#2B3A67' }}
                  >
                    How did you hear about us?
                  </label>
                  <select
                    id="referralSource"
                    name="referralSource"
                    value={formData.referralSource}
                    onChange={handleChange}
                    className={inputBaseStyles}
                    style={getSelectStyle()}
                  >
                    <option value="">Select an option</option>
                    <option value="Referral">Referral</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Google search">Google search</option>
                    <option value="Social media">Social media</option>
                    <option value="Podcast">Podcast</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message - Free text */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                    style={{ color: isDark ? '#FFFFFF' : '#2B3A67' }}
                  >
                    Anything else you'd like to share?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputBaseStyles} resize-none`}
                    style={getInputStyle()}
                    placeholder="Tell us about your goals, challenges, or questions..."
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
