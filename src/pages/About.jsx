/**
 * About Page
 * Robot Friends Website
 *
 * SPEC: Section alternation pattern
 * Light Mode: Canvas gradient → White → Cream → White
 * Dark Mode: Canvas gradient → Surface → Alt → Surface
 */

import { Card, SectionLabel, Emoticon, IconMark } from '../components/ui'
import { useTheme } from '../hooks/useTheme'

export default function About() {
  const { isDark } = useTheme()

  return (
    <div>
      {/* Hero - Canvas gradient */}
      <section className="py-20 md:py-28">
        <div className="content-wrapper">
          <SectionLabel className="mb-4">About</SectionLabel>
          <h1
            className="mb-6 max-w-2xl"
            style={{ color: isDark ? '#FFFFFF' : '#2B3A67' }}
          >
            Your Robot Friends
          </h1>
          <p
            className="text-xl max-w-xl"
            style={{ color: isDark ? 'rgba(255,255,255,0.7)' : '#666666' }}
          >
            Technical enough to trust. Human enough to love.
          </p>
        </div>
      </section>

      {/* The Story - White in light, Surface in dark */}
      <section
        className="py-20 md:py-28"
        style={{ background: isDark ? '#1E2A4A' : '#FFFFFF' }}
      >
        <div className="content-wrapper">
          <div className="max-w-3xl">
            <Card className="p-8 md:p-12 mb-12" withGrid>
              <blockquote
                className="text-lg md:text-xl leading-relaxed"
                style={{ color: isDark ? '#FFFFFF' : '#2B3A67' }}
              >
                "Robot Friends exists because expertise deserves tools, not gatekeepers. Every domain expert who understands AI becomes less dependent on vendors, consultants, and black-box solutions. That independence is what we build."
              </blockquote>
            </Card>

            {/* Philosophy */}
            <SectionLabel className="mb-6">Our Philosophy</SectionLabel>
            <h2
              className="mb-8"
              style={{ color: isDark ? '#FFE66D' : '#2B3A67' }}
            >
              What we believe
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 mb-16">
              {[
                { title: 'Independence over dependency', desc: 'We succeed when you no longer need us.' },
                { title: 'Understanding over black boxes', desc: "You should know how your tools work." },
                { title: 'Capability over transactions', desc: "We're building skills, not selling services." },
                { title: 'Building YOU', desc: "We don't build for you. We build YOU." },
              ].map((item, i) => (
                <Card key={i} variant="postit" color="cream" rotation={i % 2 === 0 ? -1 : 1}>
                  <h3 className="text-[#2B3A67] mb-2">{item.title}</h3>
                  <p className="text-[#666666] text-sm">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story - Cream in light, Alt in dark */}
      <section
        className="py-20 md:py-28"
        style={{ background: isDark ? '#151D38' : '#FFF9F0' }}
      >
        <div className="content-wrapper">
          <div className="max-w-3xl">
            <SectionLabel className="mb-6">The Name & The Logo</SectionLabel>
            <h2
              className="mb-12"
              style={{ color: isDark ? '#FFE66D' : '#2B3A67' }}
            >
              Why "Robot Friends"?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card withGrid>
                <h3
                  className="mb-4"
                  style={{ color: isDark ? '#FFFFFF' : '#2B3A67' }}
                >
                  The Name
                </h3>
                <p
                  className="mb-4"
                  style={{ color: isDark ? 'rgba(255,255,255,0.7)' : '#666666' }}
                >
                  "Robot" signals technology, AI, automation - the future. "Friends" signals warmth, partnership, being on your side.
                </p>
                <p style={{ color: isDark ? 'rgba(255,255,255,0.7)' : '#666666' }}>
                  Put them together and you get something unexpected: approachable AI education. Most AI companies lean cold and corporate. We lean warm and human.
                </p>
              </Card>

              <Card withGrid>
                <div className="flex justify-center mb-6">
                  <IconMark size="2xl" variant={isDark ? 'dark' : 'default'} />
                </div>
                <h3
                  className="mb-4 text-center"
                  style={{ color: isDark ? '#FFFFFF' : '#2B3A67' }}
                >
                  The <Emoticon /> Emoticon
                </h3>
                <p
                  className="text-center"
                  style={{ color: isDark ? 'rgba(255,255,255,0.7)' : '#666666' }}
                >
                  A smile in code - the simplest expression of friendship, rendered in the language of technology. Before emoji, developers communicated warmth with text. It says "we speak your language" while radiating approachability.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline - White in light, Surface in dark */}
      <section
        className="py-20 md:py-28"
        style={{ background: isDark ? '#1E2A4A' : '#FFFFFF' }}
      >
        <div className="content-wrapper">
          <div className="max-w-3xl mx-auto text-center">
            <p
              className="text-3xl md:text-4xl font-fraunces font-bold leading-tight"
              style={{ color: isDark ? '#FFFFFF' : '#2B3A67' }}
            >
              We don't build for you.
              <br />
              We build <span style={{ color: isDark ? '#FFE66D' : '#FF6B6B' }}>YOU</span>.
            </p>
            <div className="mt-8">
              <Emoticon size="2xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
