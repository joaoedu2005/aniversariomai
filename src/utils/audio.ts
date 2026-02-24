// Simple synth for UI sounds
const createOscillator = (type: OscillatorType, freq: number, duration: number, vol: number = 0.1) => {
  const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
  if (!AudioContext) return;
  
  const ctx = new AudioContext();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(freq, ctx.currentTime);
  
  gain.gain.setValueAtTime(vol, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + duration);
};

export const playClickSound = () => createOscillator('square', 400, 0.1, 0.05);
export const playTypeSound = () => createOscillator('sine', 800, 0.05, 0.02);
export const playJumpSound = () => createOscillator('square', 300, 0.2, 0.1);
export const playCollectSound = () => createOscillator('sine', 1200, 0.1, 0.1);
export const playHitSound = () => createOscillator('sawtooth', 100, 0.3, 0.1);
export const playHoverSound = () => createOscillator('triangle', 600, 0.05, 0.01);
