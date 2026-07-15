export const user = {
  name: 'Adam',
  fullName: 'Adam Nilson',
  avatar: 'A',
  coins: 1323,
}

export const initialMessages = [
  {
    id: 'm1',
    role: 'ai',
    text: "Good morning, Adam.\n\nLooks like you had a good sleep last night, score improved by **7%** due to increased REM sleep.\n\nHow did you find the sleep meditation we created?",
  },
  {
    id: 'm2',
    role: 'user',
    text: 'It was good, but it was to short, I had to repeat it multiple times.',
  },
  {
    id: 'm3',
    role: 'ai',
    text: "Based on the diagnosis and your feedback, this is what I'd would recommend:",
    deck: true,
  },
]

export const aiReplies = [
  "Got it, I'll fold that into your next session and keep tuning it from your feedback.",
  "Noted — I'll adjust the next version and check in tomorrow on how it felt.",
  "Thanks for the detail, that helps me personalize the next track a lot more.",
  "I'll take that into account. Anything else feel off about last night's session?",
]

export const recommendationDeck = [
  {
    id: 'r1',
    title: 'Increase yellow',
    description: 'Helps bring joy, aligned with your goal',
    scoreDelta: 3,
    swatch: 'linear-gradient(135deg, #FBC94C 0%, #E88B2E 100%)',
    icon: 'bloom',
  },
  {
    id: 'r2',
    title: 'Less movement',
    description: 'Reduced movement helps your nervous system to calm down',
    scoreDelta: 6,
    swatch: 'linear-gradient(135deg, #CFE3E8 0%, #9DBAC4 100%)',
    icon: 'water',
  },
  {
    id: 'r3',
    title: '432 Hz frequency',
    description: 'This frequency seems to reduce your negative reactivity to stress',
    scoreDelta: 4,
    swatch: 'linear-gradient(135deg, #E4D9F2 0%, #B9A6D4 100%)',
    icon: 'wave',
  },
]

export const quickActions = [
  { id: 'qa1', label: 'Apply new changes', count: 3 },
  { id: 'qa2', label: 'Add more white noise' },
  { id: 'qa3', label: 'Make it longer' },
]

export const latestSessions = [
  { id: 's1', title: 'Sleep meditation', author: 'Adam Nilson', gradient: 'linear-gradient(135deg, #F6A6C1 0%, #7C6FE0 100%)' },
  { id: 's2', title: 'Morning mindfulness', author: 'Adam Nilson', gradient: 'linear-gradient(135deg, #2B2B3D 0%, #4C6B8A 100%)' },
  { id: 's3', title: 'Stress relief techniques', author: 'Marcus Lee', gradient: 'linear-gradient(135deg, #F5D48A 0%, #E8875A 100%)' },
]

export const drawerNav = [
  { id: 'explore', label: 'Explore', icon: 'explore' },
  { id: 'sessions', label: 'Sessions', icon: 'sessions', badge: true },
  { id: 'wellness', label: 'My wellness', icon: 'wellness' },
  { id: 'profile', label: 'Profile', icon: 'profile' },
]

export const versions = [
  {
    id: 'v1',
    title: 'Sleep meditation v1',
    author: 'Adam Nilson',
    duration: '2:22',
    delta: 8,
    gradient: 'linear-gradient(135deg, #F6A6C1 0%, #7C6FE0 100%)',
    subtitle: 'The Off-Switch (Cognitive Declutter)',
    description:
      "This track uses decelerating musical tempos and chaotic word patterns to mimic the brain's natural pre-sleep state. It gently nudges your mind away from linear daytime thinking into a state of relaxed distraction.",
  },
  {
    id: 'v2',
    title: 'Sleep meditation v2',
    author: 'Adam Nilson',
    duration: '2:22',
    delta: 12,
    gradient: 'linear-gradient(135deg, #1D2430 0%, #3E5670 100%)',
    subtitle: 'Deep Anchor (Body Scan)',
    description:
      'A slow, weighted body scan paired with low binaural tones designed to release residual tension before sleep onset.',
  },
  {
    id: 'v3',
    title: 'Sleep meditation v3',
    author: 'Adam Nilson',
    duration: '2:22',
    delta: 3,
    gradient: 'linear-gradient(135deg, #F5D48A 0%, #E8875A 100%)',
    subtitle: 'Warm Static (Ambient Drift)',
    description:
      'Warm ambient textures layered with soft white noise to ease repeat listens without breaking focus.',
  },
]

export const socialStats = {
  earnings: 2521,
  timesPlayed: 12313,
  recreated: 24,
}

export const communityActivity = [
  { id: 'c1', name: 'Dolores', action: 'improved her sleep today using your session', when: 'Today', points: 10 },
  { id: 'c2', name: 'Hanna', action: 'recreated her own version using your session', when: 'Yesterday', points: 25 },
  { id: 'c3', name: 'Marcus', action: 'improved his focus today using your session', when: '2 days ago', points: 10 },
]

export const lineageTree = [
  { id: 'l1', title: 'Sleep meditation', creator: 'Adam Nilson', date: '2026.2.23' },
  { id: 'l2', title: 'Sleep meditation', creator: 'Hanna Nala', date: '2026.6.21' },
  { id: 'l3', title: 'Sleep meditation', creator: 'Dolores Ray', date: '2026.7.02' },
]
