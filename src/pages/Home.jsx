/**
 * Home Page
 * Robot Friends Website
 *
 * SPEC: Section alternation pattern
 * Light Mode: Canvas gradient → White → Cream → White → Cream → Dark Footer
 * Dark Mode: Canvas gradient → Surface → Alt → Surface → Alt → Deep Footer
 *
 * SPEC: Dark mode section titles (h2) use #FFE66D yellow
 */

import { Button, Card, SectionLabel, Emoticon, NewsletterForm } from '../components/ui'
import { GRID_VARIATIONS } from '../utils/tactile'
import { useTheme } from '../hooks/useTheme'

export default function Home() {
  const { isDark } = useTheme()
  const methodologyVariations = GRID_VARIATIONS.fourCol

  return (
    <div>
      {/* Hero Section - uses canvas gradient (NOT always dark) */}
      <section className="py-20 md:py-32">
        <div className="content-wrapper">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className="mb-6"
              style={{ color: isDark ? '#FFFFFF' : '#2B3A67' }}
            >
              From Chaos to <span style={{ color: isDark ? '#FFE66D' : '#FF6B6B' }}>Clockwork</span> <Emoticon size="xl" />
            </h1>

            <p
              className="text-xl md:text-2xl mb-10 leading-relaxed"
              style={{ color: isDark ? 'rgba(255,255,255,0.7)' : '#666666' }}
            >
              We build the systems that make your business run itself.<br />
              Less firefighting. More freedom.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contact" size="lg">
                Book a Strategy Call
              </Button>
              <Button to="/services" variant="secondary" size="lg">
                See How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - White in light, Surface (#1E2A4A) in dark */}
      <section
        className="py-20 md:py-28"
        style={{ background: isDark ? '#1E2A4A' : '#FFFFFF' }}
      >
        <div className="content-wrapper">
          <SectionLabel className="mb-4">Sound Familiar?</SectionLabel>
          <h2
            className="mb-12 max-w-2xl"
            style={{ color: isDark ? '#FFE66D' : '#2B3A67' }}
          >
            You're good at what you do. The admin is killing you.
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before Card */}
            <Card
              variant="taped"
              rotation={-1.5}
              tapePosition="topCenter"
            >
              <div className="mb-2">
                <span
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: isDark ? 'rgba(255,255,255,0.5)' : '#999999' }}
                >
                  Before
                </span>
              </div>
              <p
                className="text-lg italic"
                style={{ color: isDark ? 'rgba(255,255,255,0.7)' : '#4D4D4D' }}
              >
                "Leads slip through the cracks. Follow-ups get forgotten. I'm working IN the business instead of ON it."
              </p>
            </Card>

            {/* After Card */}
            <Card
              variant="postit"
              color="yellow"
              rotation={2}
              withTexture
            >
              <div className="mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#2B3A67]/60">After</span>
              </div>
              <p className="text-lg text-[#2B3A67] font-medium">
                "Inquiries get answered automatically. Clients get nurtured. I focus on the work I actually love."
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Who We Help Section - Cream in light (#FFF9F0), Alt (#151D38) in dark */}
      <section
        className="py-20 md:py-28"
        style={{ background: isDark ? '#151D38' : '#FFF9F0' }}
      >
        <div className="content-wrapper">
          <SectionLabel className="mb-4">Built For</SectionLabel>
          <h2
            className="mb-12 max-w-2xl"
            style={{ color: isDark ? '#FFE66D' : '#2B3A67' }}
          >
            Businesses that run on expertise
          </h2>

          <div className="max-w-2xl mx-auto">
            <Card withGrid>
              <ul className="space-y-4">
                {[
                  'Solo practitioners and small teams',
                  'Service businesses — trades, consultants, agencies',
                  'Professional practices — legal, accounting, medical',
                  'Anyone great at their craft but stretched thin on operations',
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3"
                    style={{ color: isDark ? 'rgba(255,255,255,0.7)' : '#4D4D4D' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#95BF8F] mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Build - White in light, Surface (#1E2A4A) in dark */}
      <section
        className="py-20 md:py-28"
        style={{ background: isDark ? '#1E2A4A' : '#FFFFFF' }}
      >
        <div className="content-wrapper">
          <SectionLabel className="mb-4">What We Build</SectionLabel>
          <h2
            className="mb-12 max-w-2xl"
            style={{ color: isDark ? '#FFE66D' : '#2B3A67' }}
          >
            Systems that work while you sleep
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Lead Capture', desc: 'Never miss an inquiry. Web forms, calls, and messages all land in one place.' },
              { name: 'Follow-Up Engine', desc: 'Automatic nurture sequences that turn leads into booked appointments.' },
              { name: 'Operations Hub', desc: 'Scheduling, invoicing, client management. One dashboard, zero chaos.' },
              { name: 'Custom Builds', desc: 'Your specific workflow, automated. If you do it repeatedly, we can systematize it.' },
            ].map((service, i) => (
              <Card key={i} className="hover-lift">
                <h3
                  className="mb-3"
                  style={{ color: isDark ? '#FFFFFF' : '#2B3A67' }}
                >
                  {service.name}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: isDark ? 'rgba(255,255,255,0.7)' : '#666666' }}
                >
                  {service.desc}
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button to="/services" variant="secondary">
              See Our Packages
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works - Cream in light (#FFF9F0), Alt (#151D38) in dark */}
      <section
        className="py-20 md:py-28"
        style={{ background: isDark ? '#151D38' : '#FFF9F0' }}
      >
        <div className="content-wrapper">
          <SectionLabel className="mb-4">How It Works</SectionLabel>
          <h2
            className="mb-12 max-w-2xl"
            style={{ color: isDark ? '#FFE66D' : '#2B3A67' }}
          >
            From first call to full system
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Strategy Call', desc: "We map your current chaos. What's falling through the cracks? What's eating your time?" },
              { num: '02', title: 'System Design', desc: 'We blueprint your automation. You approve before we build.' },
              { num: '03', title: 'Build & Launch', desc: 'We build it with you (not just for you). You understand how it works.' },
              { num: '04', title: 'Handoff & Support', desc: "You own it. We're here when you need us." },
            ].map((step, i) => {
              const variation = methodologyVariations[i]
              return (
                <Card
                  key={i}
                  variant="postit"
                  color="cream"
                  rotation={variation.rotation}
                  offset={variation.offset}
                  withTexture
                >
                  <span
                    className="font-mono text-sm"
                    style={{ color: isDark ? '#FFE66D' : '#FF6B6B' }}
                  >
                    {step.num}
                  </span>
                  <h3
                    className="mt-2 mb-2"
                    style={{ color: isDark ? '#FFFFFF' : '#2B3A67' }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: isDark ? 'rgba(255,255,255,0.7)' : '#666666' }}
                  >
                    {step.desc}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonial - White in light, Surface (#1E2A4A) in dark */}
      <section
        className="py-20 md:py-28"
        style={{ background: isDark ? '#1E2A4A' : '#FFFFFF' }}
      >
        <div className="content-wrapper">
          <div className="max-w-3xl mx-auto">
            <Card
              variant="postit"
              color="yellow"
              rotation={-1.5}
              withTexture
              className="p-8 md:p-12"
            >
              <blockquote className="text-lg md:text-xl text-[#2B3A67] leading-relaxed mb-6">
                "Alberto — sales director, 30 years in the game. He was spending half his week chasing follow-ups. Now his nurture sequence runs on autopilot. He focuses on closing, not chasing."
              </blockquote>
              <div className="flex items-center gap-2">
                <Emoticon color="navy" />
                <span className="text-[#2B3A67]/60 text-sm">That's what friends are for.</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Us - Cream in light (#FFF9F0), Alt (#151D38) in dark */}
      <section
        className="py-20 md:py-28"
        style={{ background: isDark ? '#151D38' : '#FFF9F0' }}
      >
        <div className="content-wrapper">
          <SectionLabel className="mb-4">Why Robot Friends</SectionLabel>
          <h2
            className="mb-12 max-w-2xl"
            style={{ color: isDark ? '#FFE66D' : '#2B3A67' }}
          >
            We've been in your shoes
          </h2>

          {/* Centered grid */}
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              "We're operators who learned to build (not developers who learned business)",
              "We build WITH you so you understand your systems",
              "No vendor lock-in — you own everything we create",
              "Enterprise capability, small business heart",
            ].map((item, i) => (
              <Card
                key={i}
                variant="taped"
                rotation={0}
                tapePosition="topCenter"
                tapeColor="yellow"
              >
                <p style={{ color: isDark ? 'rgba(255,255,255,0.7)' : '#4D4D4D' }}>{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section - White in light, Surface (#1E2A4A) in dark */}
      <section
        className="py-20 md:py-28"
        style={{ background: isDark ? '#1E2A4A' : '#FFFFFF' }}
      >
        <div className="content-wrapper">
          <div className="max-w-2xl mx-auto text-center">
            <SectionLabel className="mb-4">Stay in the Loop</SectionLabel>
            <h2
              className="mb-4"
              style={{ color: isDark ? '#FFE66D' : '#2B3A67' }}
            >
              Get automation tips that actually work
            </h2>
            <p
              className="text-lg mb-8"
              style={{ color: isDark ? 'rgba(255,255,255,0.7)' : '#666666' }}
            >
              No fluff. Just practical systems for busy business owners. Unsubscribe anytime.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>

      {/* CTA Section - Cream in light (#FFF9F0), Alt (#151D38) in dark */}
      <section
        className="py-20 md:py-28"
        style={{ background: isDark ? '#151D38' : '#FFF9F0' }}
      >
        <div className="content-wrapper">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              className="mb-4"
              style={{ color: isDark ? '#FFE66D' : '#2B3A67' }}
            >
              Ready to stop firefighting?
            </h2>
            <p
              className="text-xl mb-8"
              style={{ color: isDark ? 'rgba(255,255,255,0.7)' : '#666666' }}
            >
              Book a free strategy call. We'll map your chaos and show you what's possible.
            </p>
            <Button to="/contact" size="lg">
              Book a Strategy Call <Emoticon size="sm" color={isDark ? 'navy' : 'white'} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
