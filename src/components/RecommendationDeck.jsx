import { motion, AnimatePresence } from 'framer-motion'
import { MinusIcon, TrendingIcon } from './icons'
import './RecommendationDeck.css'

const SWATCH_ICON = {
  bloom: '❀',
  water: '≈',
  wave: '∿',
}

const STACK_OFFSET = [
  { x: 0, y: 46, rotate: -3, scale: 1 },
  { x: 30, y: 22, rotate: 5, scale: 0.97 },
  { x: 54, y: 2, rotate: 11, scale: 0.94 },
]

const spring = { type: 'spring', stiffness: 300, damping: 34, mass: 0.9 }
const fade = { duration: 0.3, ease: [0.22, 1, 0.36, 1] }

export default function RecommendationDeck({ cards, expanded, onToggle, onRemove, onApply }) {
  if (cards.length === 0) {
    return (
      <div className="deck-empty">
        <span className="deck-empty-dot" />
        All recommendations reviewed
      </div>
    )
  }

  return (
    <div className="deck-wrap">
      <motion.div
        layout
        className={`deck ${expanded ? 'deck--expanded' : 'deck--collapsed'}`}
        onClick={!expanded ? onToggle : undefined}
        role={!expanded ? 'button' : undefined}
        tabIndex={!expanded ? 0 : undefined}
      >
        <AnimatePresence>
          {!expanded && (
            <motion.div
              layout
              className="deck-badge"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={spring}
            >
              {cards.length}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence initial={false} mode="popLayout">
          {cards.map((card, i) => {
            const offset = STACK_OFFSET[i] || STACK_OFFSET[STACK_OFFSET.length - 1]
            return (
              <motion.div
                key={card.id}
                layout
                layoutId={card.id}
                className="rec-card"
                initial={false}
                animate={
                  expanded
                    ? { x: 0, y: 0, rotate: 0, scale: 1 }
                    : { x: offset.x, y: offset.y, rotate: offset.rotate, scale: offset.scale }
                }
                exit={{ opacity: 0, scale: 0.85, y: -12 }}
                transition={spring}
                style={{
                  zIndex: expanded ? 1 : cards.length - i,
                  position: expanded ? 'relative' : 'absolute',
                }}
              >
                <div className="rec-card-top">
                  <motion.div layout className="rec-swatch" style={{ background: card.swatch }}>
                    <span aria-hidden="true">{SWATCH_ICON[card.icon] || '✦'}</span>
                  </motion.div>
                  <motion.h3 layout className="rec-title">
                    {card.title}
                  </motion.h3>
                </div>

                <AnimatePresence>
                  {expanded && (
                    <motion.div
                      className="rec-card-details"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ ...fade, delay: i * 0.04 }}
                    >
                      <p className="rec-desc">{card.description}</p>
                      <div className="rec-score">
                        <span className="rec-score-label">Improve score</span>
                        <span className="rec-score-pill">
                          <TrendingIcon width={12} height={12} />
                          {card.scoreDelta}%
                        </span>
                      </div>
                      <button
                        type="button"
                        className="rec-remove"
                        onClick={(e) => {
                          e.stopPropagation()
                          onRemove(card.id)
                        }}
                      >
                        <MinusIcon /> Remove
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.div>

      {!expanded && (
        <p className="deck-hint" onClick={onToggle}>
          Tap to review {cards.length} suggestion{cards.length > 1 ? 's' : ''}
        </p>
      )}

      {expanded && (
        <div className="deck-actions">
          <button type="button" className="deck-collapse" onClick={onToggle}>
            Collapse
          </button>
          <button type="button" className="deck-apply" onClick={onApply}>
            Apply all
          </button>
        </div>
      )}
    </div>
  )
}
