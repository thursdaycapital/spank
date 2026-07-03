export type ImpactLabel = 'ignored' | 'tap noticed' | 'SPANK DETECTED';
export type ImpactSeverity = 'quiet' | 'medium' | 'maximum-drama';
export type ImpactEmoji = '🤫' | '👋' | '💥';

export interface ImpactSample {
  label: string;
  amplitude: number;
  timestampMs: number;
  source?: string;
  emoji?: ImpactEmoji;
}

export interface DemoMode {
  name: 'pain' | 'sexy' | 'halo' | 'custom';
  description: string;
  threshold: number;
  accent: string;
}

export const demoModes: DemoMode[] = [
  { name: 'pain', description: 'Default ow-style responses', threshold: 0.05, accent: '#fdba74' },
  { name: 'sexy', description: 'Escalating responses for repeat impacts', threshold: 0.05, accent: '#f472b6' },
  { name: 'halo', description: 'Halo death sounds for dramatic laptop bonks', threshold: 0.05, accent: '#60a5fa' },
  { name: 'custom', description: 'User-provided MP3 responses', threshold: 0.05, accent: '#a78bfa' },
];

export function classifySample(sample: ImpactSample, threshold = 0.05): ImpactLabel {
  if (sample.amplitude < threshold) return 'ignored';
  if (sample.amplitude < 0.3) return 'tap noticed';
  return 'SPANK DETECTED';
}

export function impactSeverity(sample: ImpactSample): ImpactSeverity {
  if (sample.amplitude >= 0.3) return 'maximum-drama';
  if (sample.amplitude >= 0.05) return 'medium';
  return 'quiet';
}

export function impactEmoji(sample: ImpactSample): ImpactEmoji {
  if (sample.amplitude >= 0.3) return '💥';
  if (sample.amplitude >= 0.05) return '👋';
  return '🤫';
}
