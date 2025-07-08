// src/lib/utils.ts
import { Vector3 } from "three";

// Particle configuration
const MIN_RADIUS = 7.5;
const MAX_RADIUS = 15;
const DEPTH = 2;
const LEFT_COLOR = "4f46e5";
const RIGHT_COLOR = "7c3aed";
const NUM_POINTS = 2500;

// Gradient calculation function
const getGradientStop = (ratio: number) => {
  ratio = ratio > 1 ? 1 : ratio < 0 ? 0 : ratio;
  
  const c0 = LEFT_COLOR.match(/.{1,2}/g)!.map(
    (oct) => parseInt(oct, 16) * (1 - ratio)
  );
  const c1 = RIGHT_COLOR.match(/.{1,2}/g)!.map(
    (oct) => parseInt(oct, 16) * ratio
  );
  const ci = [0, 1, 2].map((i) => Math.min(Math.round(c0[i] + c1[i]), 255));
  const color = ci
    .reduce((a, v) => (a << 8) + v, 0)
    .toString(16)
    .padStart(6, "0");

  return `#${color}`;
};

// Calculate color based on position
const calculateColor = (x: number) => {
  const maxDiff = MAX_RADIUS * 2;
  const distance = x + MAX_RADIUS;
  const ratio = distance / maxDiff;
  return getGradientStop(ratio);
};

// Random value generator
const randomFromInterval = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

// Point generator functions
export const pointsInner = Array.from(
  { length: NUM_POINTS },
  (_, i) => i + 1
).map((num) => {
  const randomRadius = randomFromInterval(MIN_RADIUS, MAX_RADIUS);
  const randomAngle = Math.random() * Math.PI * 2;

  const x = Math.cos(randomAngle) * randomRadius;
  const y = Math.sin(randomAngle) * randomRadius;
  const z = randomFromInterval(-DEPTH, DEPTH);

  return {
    idx: `inner-${num}`,
    position: [x, y, z] as [number, number, number],
    color: calculateColor(x),
  };
});

export const pointsOuter = Array.from(
  { length: NUM_POINTS / 4 },
  (_, i) => i + 1
).map((num) => {
  const randomRadius = randomFromInterval(MIN_RADIUS / 2, MAX_RADIUS * 2);
  const angle = Math.random() * Math.PI * 2;

  const x = Math.cos(angle) * randomRadius;
  const y = Math.sin(angle) * randomRadius;
  const z = randomFromInterval(-DEPTH * 10, DEPTH * 10);

  return {
    idx: `outer-${num}`,
    position: [x, y, z] as [number, number, number],
    color: calculateColor(x),
  };
});

// Type definition for points
export type PointType = {
  idx: string;
  position: [number, number, number];
  color: string;
};

// Class name utility function
export function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}