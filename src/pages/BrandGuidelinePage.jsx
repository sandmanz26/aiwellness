import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  BackIcon,
  BoltIcon,
  ChevronDown,
  ChevronRight,
  CloseIcon,
  CoinIcon,
  ExploreIcon,
  LayersIcon,
  MenuIcon,
  MicIcon,
  MinusIcon,
  MoreIcon,
  PauseIcon,
  PeopleIcon,
  PlayIcon,
  PlusIcon,
  SendIcon,
  SessionsIcon,
  SlidersIcon,
  SparkleIcon,
  TargetIcon,
  TrendingIcon,
  WellnessIcon,
} from '../components/icons'
import '../components/QuickActions.css'
import '../components/MessageBubble.css'
import '../components/ChatComposer.css'
import '../components/RecommendationDeck.css'
import '../components/SettingsSheet.css'
import './BrandGuidelinePage.css'

// Primitives: raw palette. Never consumed directly by components —
// only the semantic layer below aliases into these.
const PRIMITIVE_COLORS = [
  {
    title: 'Amber',
    tokens: ['--color-amber-100', '--color-amber-200', '--color-amber-300', '--color-amber-400', '--color-amber-500', '--color-amber-600'],
  },
  {
    title: 'Stone',
    tokens: [
      '--color-stone-0',
      '--color-stone-50',
      '--color-stone-100',
      '--color-stone-200',
      '--color-stone-300',
      '--color-stone-400',
      '--color-stone-600',
      '--color-stone-900',
    ],
  },
  { title: 'Green', tokens: ['--color-green-100', '--color-green-600'] },
]

// Semantic: named by purpose, each aliased to one primitive above —
// this is the layer component CSS actually consumes.
const SEMANTIC_COLOR_GROUPS = [
  {
    title: 'Surface',
    tokens: [
      { name: '--color-bg-canvas', alias: 'stone-100', note: 'App background' },
      { name: '--color-bg-subtle', alias: 'stone-50', note: 'Muted panels, icon chips' },
      { name: '--color-bg-surface', alias: 'stone-0', note: 'Cards, sheets, header pills' },
      { name: '--color-bg-backdrop', alias: 'stone-300', note: 'Desktop margin behind the app' },
      { name: '--color-border-default', alias: 'stone-200', note: 'Hairlines, dividers' },
    ],
  },
  {
    title: 'Text',
    tokens: [
      { name: '--color-text-primary', alias: 'stone-900', note: 'Primary text' },
      { name: '--color-text-secondary', alias: 'stone-600', note: 'Secondary text' },
      { name: '--color-text-tertiary', alias: 'stone-400', note: 'Placeholders, meta' },
    ],
  },
  {
    title: 'Action',
    tokens: [
      { name: '--color-action-primary', alias: 'amber-400', note: 'Highlights' },
      { name: '--color-action-primary-strong', alias: 'amber-600', note: 'CTA text, links' },
      { name: '--color-action-primary-subtle', alias: 'amber-100', note: 'Chip fills' },
    ],
  },
  {
    title: 'Feedback',
    tokens: [
      { name: '--color-feedback-success', alias: 'green-600', note: 'Score improvements' },
      { name: '--color-feedback-success-bg', alias: 'green-100', note: 'Success pill fill' },
    ],
  },
  {
    title: 'Chat',
    tokens: [{ name: '--color-chat-user-bubble', alias: 'amber-300', note: "User's message bubble" }],
  },
  {
    title: 'Inverse',
    tokens: [
      { name: '--color-text-inverse', alias: 'stone-0', note: 'Text/icons on colored or dark fills' },
      { name: '--color-bg-inverse', alias: 'stone-900', note: 'Toast, composer send button' },
    ],
  },
]

const ALL_COLOR_TOKENS = [
  ...PRIMITIVE_COLORS.flatMap((g) => g.tokens),
  ...SEMANTIC_COLOR_GROUPS.flatMap((g) => g.tokens.map((t) => t.name)),
]

// Typography primitives
const FONT_FAMILIES = [
  { name: '--font-family-serif', tag: 'Fraunces', sample: 'Aa' },
  { name: '--font-family-sans', tag: 'Inter', sample: 'Aa' },
]

const FONT_WEIGHTS = ['--font-weight-regular', '--font-weight-medium', '--font-weight-semibold', '--font-weight-bold']

const FONT_SIZES = [
  '--font-size-11',
  '--font-size-11-5',
  '--font-size-12',
  '--font-size-12-5',
  '--font-size-13',
  '--font-size-13-5',
  '--font-size-14',
  '--font-size-14-5',
  '--font-size-15',
  '--font-size-18',
  '--font-size-19',
  '--font-size-21',
  '--font-size-26',
]

// Semantic type roles: family + size + weight bundles component CSS
// consumes by name (e.g. var(--type-heading-size)). Line-height is
// deliberately excluded — it's set per component since it depends on
// measure, not on the role itself.
const TYPE_ROLES = [
  { name: '--type-display', tag: 'Fraunces', label: 'Display', usage: 'Stat value', sample: '2,521' },
  { name: '--type-display-sm', tag: 'Fraunces', label: 'Display · small', usage: 'Stat value, secondary', sample: '12,313' },
  { name: '--type-wordmark', tag: 'Fraunces', label: 'Wordmark', usage: 'Brand name', sample: 'aurelia' },
  {
    name: '--type-message',
    tag: 'Fraunces',
    label: 'Message',
    usage: 'AI chat message',
    sample: 'How did you find the sleep meditation we created?',
  },
  { name: '--type-heading', tag: 'Fraunces', label: 'Heading', usage: 'Section / card headings', sample: 'Increase yellow' },
  { name: '--type-body', tag: 'Inter', label: 'Body', usage: 'Composer input, user bubble', sample: 'It was good, but it was to short.' },
  { name: '--type-label-strong', tag: 'Inter', label: 'Label · strong', usage: 'List titles, objective value', sample: 'Improve my sleep.' },
]

const ALL_TYPE_TOKENS = [
  ...FONT_WEIGHTS,
  ...FONT_SIZES,
  ...TYPE_ROLES.flatMap((r) => [`${r.name}-size`, `${r.name}-weight`]),
]

const RADII = [
  { name: '--radius-sm', label: 'Small' },
  { name: '--radius-md', label: 'Cards' },
  { name: '--radius-lg', label: 'Recommendation cards' },
  { name: '--radius-xl', label: 'Sheets' },
  { name: '--radius-pill', label: 'Pills / buttons' },
  { name: '--radius-circle', label: 'Avatars / icon buttons' },
]

const SHADOWS = ['--shadow-sm', '--shadow-md', '--shadow-lg']

const ICONS = [
  ['Menu', MenuIcon],
  ['Coin', CoinIcon],
  ['Trending', TrendingIcon],
  ['Sliders', SlidersIcon],
  ['Back', BackIcon],
  ['More', MoreIcon],
  ['Chevron down', ChevronDown],
  ['Chevron right', ChevronRight],
  ['Plus', PlusIcon],
  ['Minus', MinusIcon],
  ['Mic', MicIcon],
  ['Send', SendIcon],
  ['Play', PlayIcon],
  ['Pause', PauseIcon],
  ['Sparkle', SparkleIcon],
  ['Explore', ExploreIcon],
  ['Sessions', SessionsIcon],
  ['Wellness', WellnessIcon],
  ['Close', CloseIcon],
  ['People', PeopleIcon],
  ['Layers', LayersIcon],
  ['Target', TargetIcon],
  ['Bolt', BoltIcon],
]

function useResolvedTokens(tokens) {
  const [resolved, setResolved] = useState({})

  useEffect(() => {
    const styles = getComputedStyle(document.documentElement)
    const next = {}
    for (const name of tokens) {
      next[name] = styles.getPropertyValue(name).trim()
    }
    setResolved(next)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return resolved
}

export default function BrandGuidelinePage() {
  const resolvedColors = useResolvedTokens(ALL_COLOR_TOKENS)
  const resolvedType = useResolvedTokens(ALL_TYPE_TOKENS)

  return (
    <div className="bg-page">
      <header className="bg-topbar">
        <div className="bg-container bg-topbar-inner">
          <Link to="/" className="bg-back">
            <BackIcon width={18} height={18} /> Back to app
          </Link>
          <span className="bg-topbar-label">Design system</span>
        </div>
      </header>

      <section className="bg-hero">
        <div className="bg-container">
          <div className="bg-hero-mark">a</div>
          <h1>aurelia</h1>
          <p className="bg-hero-sub">
            Brand guideline — a living reference generated straight from the app's own CSS tokens and
            components, not a separate mockup. Every swatch, type sample and control below renders with the
            exact classes and custom properties used across the product.
          </p>
        </div>
      </section>

      <section className="bg-section" id="color">
        <div className="bg-container">
          <h2>Color</h2>
          <p className="bg-section-intro">
            Two tiers, mirroring how a Figma Variables setup would be structured: a{' '}
            <strong>Primitives</strong> collection with the raw palette, and a <strong>Semantic</strong>{' '}
            collection that aliases into it by purpose. Component CSS only ever consumes semantic tokens —
            swap what a primitive points to and every consumer updates. Both tiers read{' '}
            <code>var(--token)</code> live from <code>src/index.css</code>, so this page can't drift from the
            real palette.
          </p>

          <p className="bg-tier-label">Primitives</p>
          {PRIMITIVE_COLORS.map((group) => (
            <div className="bg-color-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="bg-swatch-grid">
                {group.tokens.map((name) => (
                  <div className="bg-swatch" key={name}>
                    <div className="bg-swatch-chip" style={{ background: `var(${name})` }} />
                    <div className="bg-swatch-meta">
                      <code>{name}</code>
                      <span>{resolvedColors[name] || '…'}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <p className="bg-tier-label bg-tier-label--semantic">Semantic — aliased to primitives</p>
          {SEMANTIC_COLOR_GROUPS.map((group) => (
            <div className="bg-color-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="bg-swatch-grid">
                {group.tokens.map((t) => (
                  <div className="bg-swatch" key={t.name}>
                    <div className="bg-swatch-chip" style={{ background: `var(${t.name})` }} />
                    <div className="bg-swatch-meta">
                      <code>{t.name}</code>
                      <span className="bg-swatch-alias">→ {t.alias}</span>
                      <span className="bg-swatch-note">{t.note}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-color-group">
            <h3>Gradient &amp; overlay</h3>
            <div className="bg-swatch-grid">
              <div className="bg-swatch">
                <div className="bg-swatch-chip" style={{ background: 'var(--color-action-gradient)' }} />
                <div className="bg-swatch-meta">
                  <code>--color-action-gradient</code>
                  <span className="bg-swatch-alias">→ amber-200 · amber-500</span>
                  <span className="bg-swatch-note">Primary buttons, badges, logo mark</span>
                </div>
              </div>
              <div className="bg-swatch">
                <div className="bg-swatch-chip" style={{ background: 'var(--color-scrim)' }} />
                <div className="bg-swatch-meta">
                  <code>--color-scrim</code>
                  <span className="bg-swatch-alias">raw value</span>
                  <span className="bg-swatch-note">Drawer &amp; sheet backdrop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-section" id="type">
        <div className="bg-container">
          <h2>Typography</h2>
          <p className="bg-section-intro">
            Same two-tier idea as color. <strong>Fraunces</strong> (serif) carries display moments — the
            wordmark, AI messages, section headings — <strong>Inter</strong> (sans) carries interface text.
            Sizes are named by value rather than a t-shirt scale, since the existing scale is bespoke, not a
            clean ratio.
          </p>

          <p className="bg-tier-label">Primitives</p>
          <div className="bg-type-primitive-row">
            {FONT_FAMILIES.map((f) => (
              <div className="bg-font-family-card" key={f.name}>
                <span className="bg-font-family-sample" style={{ fontFamily: `var(${f.name})` }}>
                  {f.sample}
                </span>
                <code>{f.name}</code>
                <span>{f.tag}</span>
              </div>
            ))}
          </div>
          <div className="bg-token-chip-row">
            {FONT_WEIGHTS.map((w) => (
              <div className="bg-token-chip" key={w}>
                <span style={{ fontWeight: `var(${w})` }}>Aa</span>
                <code>{w}</code>
                <span>{resolvedType[w] || '…'}</span>
              </div>
            ))}
          </div>
          <div className="bg-token-chip-row">
            {FONT_SIZES.map((s) => (
              <div className="bg-token-chip" key={s}>
                <span style={{ fontSize: `var(${s})` }}>Aa</span>
                <code>{s}</code>
                <span>{resolvedType[s] || '…'}</span>
              </div>
            ))}
          </div>

          <p className="bg-tier-label bg-tier-label--semantic">Semantic roles — family + size + weight</p>
          <div className="bg-type-scale">
            {TYPE_ROLES.map((t) => (
              <div className="bg-type-row" key={t.name}>
                <div className="bg-type-meta">
                  <span className="bg-type-label">{t.label}</span>
                  <code className="bg-type-token">{t.name}</code>
                  <span className="bg-type-specs">
                    {t.tag} · {resolvedType[`${t.name}-size`] || '…'} · {resolvedType[`${t.name}-weight`] || '…'}
                  </span>
                  <span className="bg-type-usage">{t.usage}</span>
                </div>
                <div
                  className="bg-type-sample"
                  style={{
                    fontFamily: `var(${t.name}-family)`,
                    fontSize: `var(${t.name}-size)`,
                    fontWeight: `var(${t.name}-weight)`,
                  }}
                >
                  {t.sample}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-section" id="shape">
        <div className="bg-container">
          <h2>Shape & elevation</h2>
          <div className="bg-two-col">
            <div>
              <h3>Radius</h3>
              <div className="bg-radius-grid">
                {RADII.map((r) => (
                  <div className="bg-radius-item" key={r.name}>
                    <div className="bg-radius-box" style={{ borderRadius: `var(${r.name})` }} />
                    <code>{r.name}</code>
                    <span>{r.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3>Shadow</h3>
              <div className="bg-shadow-grid">
                {SHADOWS.map((s) => (
                  <div className="bg-shadow-item" key={s}>
                    <div className="bg-shadow-box" style={{ boxShadow: `var(${s})` }} />
                    <code>{s}</code>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-section" id="components">
        <div className="bg-container">
          <h2>Components</h2>

          <h3>Buttons &amp; chips</h3>
          <p className="bg-component-note">Live classes from RecommendationDeck.css and QuickActions.css.</p>
          <div className="bg-live-row">
            <button type="button" className="quick-chip">
              <SparkleIcon /> Apply new changes (3)
            </button>
            <button type="button" className="deck-apply" style={{ width: 140 }}>
              Apply all
            </button>
            <button type="button" className="deck-collapse" style={{ width: 140 }}>
              Collapse
            </button>
            <button type="button" className="rec-remove" style={{ width: 140 }}>
              <MinusIcon /> Remove
            </button>
          </div>

          <h3>Chat bubbles</h3>
          <p className="bg-component-note">Live classes from MessageBubble.css.</p>
          <div className="bg-live-column">
            <p className="msg-ai" style={{ margin: 0 }}>
              How did you find the sleep meditation we created?
            </p>
            <div className="bubble--user" style={{ maxWidth: 360 }}>
              It was good, but it was to short, I had to repeat it multiple times.
            </div>
          </div>

          <h3>Coin pill &amp; badges</h3>
          <p className="bg-component-note">Live classes from ChatHeader.css and RecommendationDeck.css.</p>
          <div className="bg-live-row">
            <div className="coin-pill">
              <CoinIcon />
              <span>1,323</span>
            </div>
            <span className="rec-score-pill">
              <TrendingIcon width={12} height={12} /> 6%
            </span>
            <div className="bg-badge-holder">
              <span className="deck-badge" style={{ position: 'static' }}>
                3
              </span>
            </div>
          </div>

          <h3>Toggle switch</h3>
          <p className="bg-component-note">Live classes from SettingsSheet.css.</p>
          <div className="bg-live-row">
            <span className="switch switch--on">
              <span className="switch-knob" />
            </span>
            <span className="switch">
              <span className="switch-knob" />
            </span>
          </div>

          <h3>Cards</h3>
          <p className="bg-component-note">Live classes from RecommendationDeck.css.</p>
          <div className="bg-live-row">
            <div className="rec-card" style={{ width: 240, cursor: 'default' }}>
              <div className="rec-card-top">
                <div className="rec-swatch" style={{ background: 'linear-gradient(135deg, #FBC94C 0%, #E88B2E 100%)' }}>
                  ❀
                </div>
                <h4 className="rec-title" style={{ margin: 0 }}>
                  Increase yellow
                </h4>
              </div>
              <p className="rec-desc">Helps bring joy, aligned with your goal</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-section" id="icons">
        <div className="bg-container">
          <h2>Iconography</h2>
          <p className="bg-section-intro">
            Custom 1.7px stroke line icons, 24×24 viewbox, defined in <code>src/components/icons.jsx</code>.
          </p>
          <div className="bg-icon-grid">
            {ICONS.map(([name, Icon]) => (
              <div className="bg-icon-item" key={name}>
                <span className="bg-icon-box">
                  <Icon width={20} height={20} />
                </span>
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-footer">
        <div className="bg-container">
          Generated from the live aurelia codebase — update the tokens in <code>src/index.css</code> and this
          page updates with them.
        </div>
      </footer>
    </div>
  )
}
