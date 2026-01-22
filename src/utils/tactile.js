/**
 * Tactile Utilities
 * Robot Friends Design System
 *
 * Utilities for creating organic, "hand-placed" visual effects.
 * Avoids predictable patterns - embrace the mess a little.
 */

// Pre-defined rotation sets for different "feels"
const ROTATION_SETS = {
  // Subtle - for professional sections
  subtle: [-1.5, -0.5, 0.5, 1, -1, 1.5],
  // Playful - for testimonials, methodology
  playful: [-3, -1.5, 2, -2.5, 1, 3, -2, 2.5],
  // Dynamic - for hero elements, featured content
  dynamic: [-4, -2, 3, -3.5, 2.5, 4, -1.5, 3.5],
}

// Offset sets for translate effects
const OFFSET_SETS = {
  subtle: [0, 2, -2, 1, -1],
  playful: [0, 4, -3, 2, -4, 3],
  dynamic: [0, 6, -5, 3, -6, 4, -2],
}

/**
 * Get a rotation value based on index and style
 * Uses modulo to cycle through values unpredictably
 */
export function getRotation(index, style = 'playful') {
  const rotations = ROTATION_SETS[style] || ROTATION_SETS.playful
  // Use a prime number multiplier to avoid obvious patterns
  const primeIndex = (index * 7 + 3) % rotations.length
  return rotations[primeIndex]
}

/**
 * Get an offset value for translate effects
 */
export function getOffset(index, style = 'subtle') {
  const offsets = OFFSET_SETS[style] || OFFSET_SETS.subtle
  const primeIndex = (index * 5 + 2) % offsets.length
  return offsets[primeIndex]
}

/**
 * Get combined transform styles for a "hand-placed" element
 */
export function getHandPlacedStyle(index, options = {}) {
  const {
    rotationStyle = 'playful',
    includeOffset = false,
    offsetStyle = 'subtle',
  } = options

  const rotation = getRotation(index, rotationStyle)
  const offset = includeOffset ? getOffset(index, offsetStyle) : 0

  return {
    transform: `rotate(${rotation}deg)${offset ? ` translateY(${offset}px)` : ''}`,
  }
}

/**
 * Pre-computed variations for common layouts
 * Use these for consistent but organic-feeling grids
 */
export const GRID_VARIATIONS = {
  // For 2-column layouts
  twoCol: [
    { rotation: -2, offset: 0 },
    { rotation: 1.5, offset: 2 },
  ],
  // For 3-column layouts
  threeCol: [
    { rotation: -2.5, offset: 0 },
    { rotation: 1, offset: -2 },
    { rotation: 2, offset: 1 },
  ],
  // For 4-column layouts (like methodology)
  fourCol: [
    { rotation: -2, offset: 0 },
    { rotation: 2.5, offset: -3 },
    { rotation: -1.5, offset: 2 },
    { rotation: 3, offset: -1 },
  ],
  // For scattered/collage layouts
  scattered: [
    { rotation: -3.5, offset: 4 },
    { rotation: 2, offset: -2 },
    { rotation: -1, offset: 6 },
    { rotation: 4, offset: -4 },
    { rotation: -2.5, offset: 1 },
    { rotation: 1.5, offset: -3 },
  ],
}

/**
 * Get variation for a specific position in a grid
 */
export function getGridVariation(index, layout = 'fourCol') {
  const variations = GRID_VARIATIONS[layout] || GRID_VARIATIONS.fourCol
  return variations[index % variations.length]
}

/**
 * Tape position presets
 */
export const TAPE_POSITIONS = {
  topCenter: { top: '-12px', left: '50%', transform: 'translateX(-50%) rotate(-3deg)' },
  topLeft: { top: '-8px', left: '20px', transform: 'rotate(-15deg)' },
  topRight: { top: '-8px', right: '20px', transform: 'rotate(12deg)' },
  cornerTopRight: { top: '-6px', right: '15px', transform: 'rotate(35deg)' },
  cornerTopLeft: { top: '-6px', left: '15px', transform: 'rotate(-35deg)' },
}

/**
 * Get a tape position based on index for variety
 */
export function getTapePosition(index) {
  const positions = Object.values(TAPE_POSITIONS)
  const primeIndex = (index * 3 + 1) % positions.length
  return positions[primeIndex]
}
