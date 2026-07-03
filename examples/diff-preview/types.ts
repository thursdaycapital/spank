export type ImpactLabel = 'ignored' | 'tap noticed' | 'SPANK DETECTED';

export interface ImpactSample {
  label: string;
  amplitude: number;
  timestampMs: number;
}

export interface DemoMode {
  name: 'pain' | 'sexy' | 'halo' | 'custom';
  description: string;
  threshold: number;
}

export const demoModes: DemoMode[] = [
  { name: 'pain', description: 'Default ow-style responses', threshold: 0.05 },
  { name: 'sexy', description: 'Escalating responses for repeat impacts', threshold: 0.05 },
  { name: 'halo', description: 'Halo death sounds for dramatic laptop bonks', threshold: 0.05 },
  { name: 'custom', description: 'User-provided MP3 responses', threshold: 0.05 },
];

export function classifySample(sample: ImpactSample, threshold = 0.05): ImpactLabel {
  if (sample.amplitude < threshold) return 'ignored';
  if (sample.amplitude < 0.3) return 'tap noticed';
  return 'SPANK DETECTED';
}
