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

const COLOR_GROUPS = [
  {
    title: 'Background & surface',
    tokens: [
      { name: '--bg', note: 'App background' },
      { name: '--bg-alt', note: 'Muted panels, icon chips' },
      { name: '--surface', note: 'Cards, sheets, header pills' },
      { name: '--border', note: 'Hairlines, dividers' },
    ],
  },
  {
    title: 'Text',
    tokens: [
      { name: '--text', note: 'Primary text' },
      { name: '--text-soft', note: 'Secondary text' },
      { name: '--text-faint', note: 'Placeholders, meta' },
    ],
  },
  {
    title: 'Accent',
    tokens: [
      { name: '--accent', note: 'Highlights' },
      { name: '--accent-strong', note: 'CTA text, links' },
      { name: '--accent-soft', note: 'Chip fills' },
    ],
  },
  {
    title: 'Semantic',
    tokens: [
      { name: '--success', note: 'Score improvements' },
      { name: '--success-bg', note: 'Success pill fill' },
    ],
  },
  {
    title: 'Chat',
    tokens: [{ name: '--user-bubble', note: "User's message bubble" }],
  },
]

const ALL_TOKENS = COLOR_GROUPS.flatMap((g) => g.tokens.map((t) => t.name))

const TYPE_SCALE = [
  { label: 'Display · stat value', family: 'var(--font-serif)', tag: 'Fraunces', size: '26px', weight: 500, sample: '2,521' },
  { label: 'Wordmark', family: 'var(--font-serif)', tag: 'Fraunces', size: '21px', weight: 400, sample: 'aurelia' },
  {
    label: 'AI message',
    family: 'var(--font-serif)',
    tag: 'Fraunces',
    size: '19px',
    weight: 400,
    sample: 'How did you find the sleep meditation we created?',
  },
  { label: 'Section heading', family: 'var(--font-serif)', tag: 'Fraunces', size: '18px', weight: 500, sample: 'Increase yellow' },
  { label: 'List title', family: 'var(--font-sans)', tag: 'Inter', size: '15px', weight: 600, sample: 'Improve my sleep.' },
  { label: 'Body / input', family: 'var(--font-sans)', tag: 'Inter', size: '14.5px', weight: 600, sample: 'It was good, but it was to short.' },
  { label: 'Item title', family: 'var(--font-sans)', tag: 'Inter', size: '14px', weight: 700, sample: 'Sleep meditation' },
  { label: 'Subtitle', family: 'var(--font-sans)', tag: 'Inter', size: '13.5px', weight: 600, sample: 'Sleep meditation v1' },
  { label: 'Body small', family: 'var(--font-sans)', tag: 'Inter', size: '13px', weight: 400, sample: 'Helps bring joy, aligned with your goal' },
  { label: 'Caption / chip', family: 'var(--font-sans)', tag: 'Inter', size: '12.5px', weight: 600, sample: 'Apply new changes (3)' },
  { label: 'Label', family: 'var(--font-sans)', tag: 'Inter', size: '12px', weight: 400, sample: 'Improve score' },
  { label: 'Micro badge', family: 'var(--font-sans)', tag: 'Inter', size: '11.5px', weight: 700, sample: '+10' },
]

const RADII = [
  { name: '--radius-sm', value: '10px', label: 'Small' },
  { name: '--radius-md', value: '16px', label: 'Cards' },
  { name: '--radius-lg', value: '24px', label: 'Recommendation cards' },
  { name: '--radius-xl', value: '32px', label: 'Sheets' },
  { name: '999px', value: '999px', label: 'Pills / buttons' },
  { name: '50%', value: '50%', label: 'Avatars / icon buttons' },
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
  const resolved = useResolvedTokens(ALL_TOKENS)

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
            Tokens live in <code>src/index.css</code> as CSS custom properties. Swatches below read{' '}
            <code>var(--token)</code> directly, so this page can never drift from the real palette.
          </p>

          {COLOR_GROUPS.map((group) => (
            <div className="bg-color-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="bg-swatch-grid">
                {group.tokens.map((t) => (
                  <div className="bg-swatch" key={t.name}>
                    <div className="bg-swatch-chip" style={{ background: `var(${t.name})` }} />
                    <div className="bg-swatch-meta">
                      <code>{t.name}</code>
                      <span>{resolved[t.name] || '…'}</span>
                      <span className="bg-swatch-note">{t.note}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-color-group">
            <h3>Gradient</h3>
            <div className="bg-swatch-grid">
              <div className="bg-swatch">
                <div className="bg-swatch-chip" style={{ background: 'var(--gradient-accent)' }} />
                <div className="bg-swatch-meta">
                  <code>--gradient-accent</code>
                  <span>Primary buttons, badges, logo mark</span>
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
            Two families: <strong>Fraunces</strong> (serif) for display moments — the wordmark, AI messages,
            section headings — and <strong>Inter</strong> (sans) for interface text.
          </p>
          <div className="bg-type-scale">
            {TYPE_SCALE.map((t) => (
              <div className="bg-type-row" key={t.label}>
                <div className="bg-type-meta">
                  <span className="bg-type-label">{t.label}</span>
                  <span className="bg-type-specs">
                    {t.tag} · {t.size} · {t.weight}
                  </span>
                </div>
                <div
                  className="bg-type-sample"
                  style={{ fontFamily: t.family, fontSize: t.size, fontWeight: t.weight }}
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
                    <div className="bg-radius-box" style={{ borderRadius: r.value }} />
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
