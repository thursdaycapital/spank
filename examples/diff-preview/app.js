const demoEvents = [
  { label: 'light tap', amplitude: 0.08 },
  { label: 'proper slap', amplitude: 0.42 },
  { label: 'keyboard sneeze', amplitude: 0.03 },
];

function classifyImpact(event) {
  if (event.amplitude >= 0.3) return 'SPANK DETECTED';
  if (event.amplitude >= 0.05) return 'tap noticed';
  return 'ignored';
}

function renderSummary(events) {
  return events
    .map((event) => `${event.label.padEnd(16)} → ${classifyImpact(event)}`)
    .join('\n');
}

if (typeof document !== 'undefined') {
  const output = document.querySelector('[data-demo-output]');
  if (output) output.textContent = renderSummary(demoEvents);
}

if (typeof console !== 'undefined') {
  console.log(renderSummary(demoEvents));
}
