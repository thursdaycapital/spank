const IMPACT_THRESHOLD = 0.05;
const SPANK_THRESHOLD = 0.3;
const DEMO_VERSION = 'github-direct-edit';

const demoEvents = [
  { label: 'light tap', amplitude: 0.08, source: 'trackpad corner' },
  { label: 'desk wobble', amplitude: 0.18, source: 'left palm rest' },
  { label: 'proper slap', amplitude: 0.42, source: 'lid flex zone' },
  { label: 'victory bonk', amplitude: 0.64, source: 'demo finale' },
  { label: 'keyboard sneeze', amplitude: 0.03, source: 'chaos gremlin' },
];

function classifyImpact(event) {
  if (event.amplitude >= SPANK_THRESHOLD) return 'SPANK DETECTED';
  if (event.amplitude >= IMPACT_THRESHOLD) return 'tap noticed';
  return 'ignored';
}

function impactEmoji(event) {
  if (event.amplitude >= SPANK_THRESHOLD) return '💥';
  if (event.amplitude >= IMPACT_THRESHOLD) return '👋';
  return '🤫';
}

function renderSummary(events) {
  return events
    .map((event) => {
      const loudness = `${Math.round(event.amplitude * 100)}%`.padStart(3);
      return `${impactEmoji(event)} ${event.label.padEnd(16)} → ${classifyImpact(event).padEnd(14)} · ${loudness} · ${event.source}`;
    })
    .join('\n');
}

if (typeof document !== 'undefined') {
  const output = document.querySelector('[data-demo-output]');
  const counter = document.querySelector('[data-demo-count]');
  if (output) output.textContent = renderSummary(demoEvents);
  if (counter) counter.textContent = `${demoEvents.length} sample impacts · ${DEMO_VERSION}`;
}

if (typeof console !== 'undefined') {
  console.log(renderSummary(demoEvents));
}
