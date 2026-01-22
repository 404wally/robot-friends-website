/**
 * Services Page
 * Robot Friends Website
 */

import { Button, Card, SectionLabel, Emoticon } from '../components/ui'
import { useTheme } from '../hooks/useTheme'

export default function Services() {
  const { isDark } = useTheme()
  const services = [
    {
      name: 'Workshop',
      price: '$1,500 - $3,500',
      description: 'Half/full day hands-on AI session. Leave with 3 opportunities identified and 1 quick win built.',
      features: [
        'Half or full day session',
        '3 opportunities identified',
        '1 quick win built on the spot',
        'Immediate, tangible results',
      ],
      cta: 'The lowest-risk way to experience the transformation',
      color: 'yellow',
    },
    {
      name: 'Guided Build',
      price: '$8,000 - $25,000',
      description: '6-8 weeks of coaching. You build your first production system WITH us.',
      features: [
        '6-8 weeks of coaching',
        'Weekly calls + async support',
        'Build a production system',
        'Graduate with skills to evolve it',
      ],
      cta: 'Graduate with a working system and the skills to evolve it',
      color: 'coral',
    },
    {
      name: 'Advisory',
      price: '$2,000 - $5,000/mo',
      description: 'Ongoing coaching retainer. Monthly strategy + async access + architecture reviews.',
      features: [
        'Monthly strategy sessions',
        'Async access for questions',
        'Architecture reviews',
        'Ongoing guidance',
      ],
      cta: 'A robot friend on speed dial',
      color: 'sage',
    },
    {
      name: 'Team Program',
      price: '$25,000 - $75,000',
      description: '3-6 month transformation for 5-15 people. Custom curriculum + multiple builds.',
      features: [
        '3-6 month transformation',
        '5-15 people trained',
        'Custom curriculum',
        'Internal champions developed',
      ],
      cta: "Transform your entire team's capability",
      color: 'navy',
    },
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
            How We Work
          </h1>
          <p
            className="text-xl max-w-xl"
            style={{ color: isDark ? 'rgba(255,255,255,0.7)' : '#666666' }}
          >
            From first spark to full independence.
          </p>
        </div>
      </section>

      {/* Services Grid - White in light, Surface in dark */}
      <section
        className="pb-20 md:pb-28"
        style={{ background: isDark ? '#1E2A4A' : '#FFFFFF' }}
      >
        <div className="content-wrapper">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <Card key={i} className="p-8 hover-lift" withGrid>
                <div className="flex justify-between items-start mb-4">
                  <h2 style={{ color: isDark ? '#FFFFFF' : '#2B3A67' }}>{service.name}</h2>
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

          {/* CTA */}
          <div className="mt-16 text-center">
            <Card variant="postit" color="yellow" rotation={-1} className="inline-block p-8">
              <p className="text-[#2B3A67] font-medium mb-4">
                Not sure where to start?
              </p>
              <Button to="/contact">
                Book a Workshop <Emoticon size="sm" color={isDark ? 'navy' : 'white'} />
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
