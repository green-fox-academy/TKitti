'use strict';

export function add(a: number, b: number): number {
  return a+b;
}

export function maxOfThree(a: number, b: number, c: number): number {
  return Math.max(a, b, c);
};

export function median(pool: number[]): number {
  let sortedPool = pool.sort();
  let half = Math.floor(sortedPool.length / 2);
  
  if (sortedPool.length % 2 !== 0) {
    return sortedPool[half];
  } else if (sortedPool.length % 2 === 0) {
    return (sortedPool[half-1] + sortedPool[half]) / 2;
  } else if (sortedPool.length === 0) {
    return 0;
  }
}

export function isVowel(character: string): boolean {
  return ['a', 'u', 'o', 'e', 'i'].some(vowel => vowel === character);
}

export function translate(hungarian: string): string {
  let teve = hungarian;
  let length = teve.length;

  for (let i = 0; i < length; i++) {
    let c = teve[i];
    if (isVowel(c)) {
      teve = teve.split(c).join(`${c}v${c}`);
      i += 2;
      length += 2;
    }
  }
  return teve;
}