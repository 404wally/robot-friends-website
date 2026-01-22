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

import { Button, Card, SectionLabel, Emoticon } from '../components/ui'
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
              We Build <span style={{ color: isDark ? '#FFE66D' : '#FF6B6B' }}>YOU</span> <Emoticon size="xl" />
            </h1>

            <p
              className="text-xl md:text-2xl mb-10 leading-relaxed"
              style={{ color: isDark ? 'rgba(255,255,255,0.7)' : '#666666' }}
            >
              Transform your expertise into AI capability through hands-on coaching.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contact" size="lg">
                Get Started
              </Button>
              <Button to="/services" variant="secondary" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Section - White in light, Surface (#1E2A4A) in dark */}
      <section
        className="py-20 md:py-28"
        style={{ background: isDark ? '#1E2A4A' : '#FFFFFF' }}
      >
        <div className="content-wrapper">
          <SectionLabel className="mb-4">The Transformation</SectionLabel>
          <h2
            className="mb-12 max-w-2xl"
            style={{ color: isDark ? '#FFE66D' : '#2B3A67' }}
          >
            From vendor dependency to building your own solutions
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
                "I need to hire a developer every time I want something built."
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
                "I built our lead scoring system myself in 6 weeks."
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
          <SectionLabel className="mb-4">Who We Help</SectionLabel>
          <h2
            className="mb-12 max-w-2xl"
            style={{ color: isDark ? '#FFE66D' : '#2B3A67' }}
          >
            Is this for you?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Fit Column */}
            <Card withGrid>
              <h3
                className="mb-6 flex items-center gap-2"
                style={{ color: isDark ? '#FFFFFF' : '#2B3A67' }}
              >
                <span className="w-6 h-6 rounded-full bg-[#95BF8F] text-white flex items-center justify-center text-sm">✓</span>
                You're a fit if...
              </h3>
              <ul className="space-y-4">
                {[
                  'You want to understand AI, not just use it',
                  'You have deep domain expertise',
                  'You want independence from vendors',
                  "You're willing to invest time in learning",
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

            {/* Not Fit Column */}
            <Card withGrid>
              <h3
                className="mb-6 flex items-center gap-2"
                style={{ color: isDark ? '#FFFFFF' : '#2B3A67' }}
              >
                <span className="w-6 h-6 rounded-full bg-[#FF6B6B] text-white flex items-center justify-center text-sm">×</span>
                You're NOT a fit if...
              </h3>
              <ul className="space-y-4">
                {[
                  'You just want someone to handle it',
                  'You need a quick fix, not transformation',
                  'You prefer ongoing vendor relationships',
                  'You have zero bandwidth to participate',
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3"
                    style={{ color: isDark ? 'rgba(255,255,255,0.7)' : '#4D4D4D' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B6B] mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <p
            className="text-center"
            style={{ color: isDark ? 'rgba(255,255,255,0.5)' : '#808080' }}
          >
            <strong style={{ color: isDark ? '#FFFFFF' : '#2B3A67' }}>Ideal clients:</strong> Founders, ops leaders, department heads, domain experts with 10+ years experience who want to multiply their capabilities.
          </p>
        </div>
      </section>

      {/* Services Preview - White in light, Surface (#1E2A4A) in dark */}
      <section
        className="py-20 md:py-28"
        style={{ background: isDark ? '#1E2A4A' : '#FFFFFF' }}
      >
        <div className="content-wrapper">
          <SectionLabel className="mb-4">How We Work</SectionLabel>
          <h2
            className="mb-12 max-w-2xl"
            style={{ color: isDark ? '#FFE66D' : '#2B3A67' }}
          >
            From first spark to full independence
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Workshop', price: '$1,500 - $3,500', desc: 'Half/full day hands-on AI session' },
              { name: 'Guided Build', price: '$8,000 - $25,000', desc: '6-8 weeks of coaching' },
              { name: 'Advisory', price: '$2,000 - $5,000/mo', desc: 'Ongoing coaching retainer' },
              { name: 'Team Program', price: '$25,000 - $75,000', desc: '3-6 month transformation' },
            ].map((service, i) => (
              <Card key={i} className="hover-lift">
                <h3
                  className="mb-2"
                  style={{ color: isDark ? '#FFFFFF' : '#2B3A67' }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-mono text-sm mb-3"
                  style={{ color: isDark ? '#FFE66D' : '#FF6B6B' }}
                >
                  {service.price}
                </p>
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
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Methodology - Cream in light (#FFF9F0), Alt (#151D38) in dark */}
      <section
        className="py-20 md:py-28"
        style={{ background: isDark ? '#151D38' : '#FFF9F0' }}
      >
        <div className="content-wrapper">
          <SectionLabel className="mb-4">Our Methodology</SectionLabel>
          <h2
            className="mb-12 max-w-2xl"
            style={{ color: isDark ? '#FFE66D' : '#2B3A67' }}
          >
            How we get you there
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Start simple', desc: 'Notion + built-in AI, not code' },
              { num: '02', title: 'Instant gratification', desc: 'See results immediately, spark the "aha moment"' },
              { num: '03', title: 'Build real things', desc: 'Not theory, actual working systems' },
              { num: '04', title: 'Transfer ownership', desc: 'You maintain it, you evolve it, you own it' },
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
                "Alberto - Sales director, 30 years experience, traditional methods. After one coaching session, the light bulb went on. Now he's proactively building tools for his team. The shift: showing him what HE could build, not building FOR him."
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
          <SectionLabel className="mb-4">Why Us</SectionLabel>
          <h2
            className="mb-12 max-w-2xl"
            style={{ color: isDark ? '#FFE66D' : '#2B3A67' }}
          >
            Technical enough to trust. Human enough to love.
          </h2>

          {/* Centered grid */}
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              "We've been where you are (domain experts who learned to build)",
              "We understand both business AND technical sides",
              "We're incentivized by your independence, not your dependency",
              "Enterprise experience, startup energy",
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

      {/* CTA Section - White in light, Surface (#1E2A4A) in dark */}
      <section
        className="py-20 md:py-28"
        style={{ background: isDark ? '#1E2A4A' : '#FFFFFF' }}
      >
        <div className="content-wrapper">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              className="mb-4"
              style={{ color: isDark ? '#FFE66D' : '#2B3A67' }}
            >
              Book a Workshop
            </h2>
            <p
              className="text-xl mb-8"
              style={{ color: isDark ? 'rgba(255,255,255,0.7)' : '#666666' }}
            >
              One day. Hands-on. Leave with something working.
            </p>
            <p
              className="mb-10"
              style={{ color: isDark ? 'rgba(255,255,255,0.5)' : '#808080' }}
            >
              The lowest-risk way to experience the transformation.
            </p>
            <Button to="/contact" size="lg">
              Let's Talk <Emoticon size="sm" color={isDark ? 'navy' : 'white'} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
