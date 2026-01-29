/**
 * Services Page
 * Robot Friends Website
 */

import { Button, Card, SectionLabel, Emoticon } from '../components/ui'
import { useTheme } from '../hooks/useTheme'

export default function Services() {
  const { isDark } = useTheme()

  const packages = [
    {
      name: 'Quick Win Sprint',
      price: '$1,500 - $3,500',
      description: 'One system, one week. Pick your biggest pain point — we fix it.',
      features: [
        'Single focused automation',
        'One week turnaround',
        'You pick the problem',
        'Immediate relief',
      ],
      cta: 'The fastest way to see what\'s possible',
      color: 'yellow',
    },
    {
      name: 'Full System Build',
      price: '$8,000 - $25,000',
      description: 'Complete automation package. Lead capture → follow-up → operations. 6-8 weeks.',
      features: [
        'End-to-end system',
        '6-8 week build',
        'Built with you, not just for you',
        'Full training included',
      ],
      cta: 'From chaos to clockwork in under two months',
      color: 'coral',
    },
    {
      name: 'Ongoing Support',
      price: '$2,000 - $5,000/mo',
      description: 'Monthly optimization + new builds as your business evolves.',
      features: [
        'Monthly strategy calls',
        'System tweaks and improvements',
        'New automations as needed',
        'Priority support',
      ],
      cta: 'A robot friend on speed dial',
      color: 'sage',
    },
    {
      name: 'Team Rollout',
      price: '$25,000 - $75,000',
      description: 'Multi-location or multi-department. Custom systems + training for your whole team.',
      features: [
        'Enterprise-scale systems',
        'Team training included',
        'Custom workflows per role',
        'Rollout support',
      ],
      cta: 'Scale your operations without scaling your headcount',
      color: 'navy',
    },
  ]

  const alaCarteServices = [
    { name: 'Lead capture form setup', price: 'from $500' },
    { name: 'Email automation sequence', price: 'from $750' },
    { name: 'CRM setup & configuration', price: 'from $1,000' },
    { name: 'Scheduling/calendar integration', price: 'from $500' },
    { name: 'Invoice & payment automation', price: 'from $750' },
    { name: 'Client onboarding workflow', price: 'from $1,000' },
    { name: 'Custom workflow automation', price: 'from $1,500' },
    { name: 'Data migration & cleanup', price: 'from $1,000' },
    { name: 'Training session (2 hours)', price: '$500' },
  ]

  return (
    <div>
      {/* Hero - Canvas gradient */}
      <section className="py-20 md:py-28">
        <div className="content-wrapper">
          <SectionLabel className="mb-4">Services</SectionLabel>
          <h1
            className="mb-6 max-w-2xl"
            style={{ color: isDark ? '#FFFFFF' : '#2B3A67' }}
          >
            What We Build
          </h1>
          <p
            className="text-xl max-w-xl"
            style={{ color: isDark ? 'rgba(255,255,255,0.7)' : '#666666' }}
          >
            Systems that give you your time back.
          </p>
        </div>
      </section>

      {/* Packages Grid - White in light, Surface in dark */}
      <section
        className="pb-16 md:pb-20"
        style={{ background: isDark ? '#1E2A4A' : '#FFFFFF' }}
      >
        <div className="content-wrapper">
          <div className="flex items-center justify-between mb-8">
            <h2
              className="text-2xl"
              style={{ color: isDark ? '#FFE66D' : '#2B3A67' }}
            >
              Packages
            </h2>
            <p
              className="text-sm"
              style={{ color: isDark ? 'rgba(255,255,255,0.5)' : '#808080' }}
            >
              All pricing is a starting estimate — every project is custom quoted.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {packages.map((service, i) => (
              <Card key={i} className="p-8 hover-lift" withGrid>
                <div className="flex justify-between items-start mb-4">
                  <h3 style={{ color: isDark ? '#FFFFFF' : '#2B3A67' }}>{service.name}</h3>
                  <span
                    className="font-mono text-sm"
                    style={{ color: isDark ? '#FFE66D' : '#FF6B6B' }}
                  >
                    {service.price}
                  </span>
                </div>

                <p
                  className="mb-6"
                  style={{ color: isDark ? 'rgba(255,255,255,0.7)' : '#666666' }}
                >
                  {service.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm"
                      style={{ color: isDark ? 'rgba(255,255,255,0.7)' : '#4D4D4D' }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#95BF8F] mt-1.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <p
                  className="text-sm italic pt-4"
                  style={{
                    borderTop: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #EBE5DC',
                    color: isDark ? 'rgba(255,255,255,0.5)' : '#808080'
                  }}
                >
                  "{service.cta}"
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* A La Carte Section - Cream in light, Alt in dark */}
      <section
        className="py-16 md:py-20"
        style={{ background: isDark ? '#151D38' : '#FFF9F0' }}
      >
        <div className="content-wrapper">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2
                className="text-2xl mb-2"
                style={{ color: isDark ? '#FFE66D' : '#2B3A67' }}
              >
                A La Carte
              </h2>
              <p
                className="text-sm"
                style={{ color: isDark ? 'rgba(255,255,255,0.5)' : '#808080' }}
              >
                Need something specific? Pick what you need.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {alaCarteServices.map((service, i) => (
              <Card key={i} className="p-5 hover-lift">
                <div className="flex justify-between items-center">
                  <span style={{ color: isDark ? '#FFFFFF' : '#2B3A67' }}>
                    {service.name}
                  </span>
                  <span
                    className="font-mono text-sm ml-4 flex-shrink-0"
                    style={{ color: isDark ? '#FFE66D' : '#FF6B6B' }}
                  >
                    {service.price}
                  </span>
                </div>
              </Card>
            ))}
          </div>

          <p
            className="text-center text-sm mt-8"
            style={{ color: isDark ? 'rgba(255,255,255,0.5)' : '#808080' }}
          >
            All services are bespoke. We'll scope your specific needs and provide a custom quote.
          </p>
        </div>
      </section>

      {/* CTA - White in light, Surface in dark */}
      <section
        className="py-16 md:py-20"
        style={{ background: isDark ? '#1E2A4A' : '#FFFFFF' }}
      >
        <div className="content-wrapper">
          <div className="text-center">
            <Card variant="postit" color="yellow" rotation={-1} className="inline-block p-8">
              <p className="text-[#2B3A67] font-medium mb-4">
                Not sure what you need?
              </p>
              <Button to="/contact">
                Book a Free Consult <Emoticon size="sm" color={isDark ? 'navy' : 'white'} />
              </Button>
              <p className="text-[#2B3A67]/60 text-sm mt-3">
                We'll figure it out together.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
