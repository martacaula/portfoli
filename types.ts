
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


export interface Artist {
  id: string;
  name: string;
  genre: string;
  image: string;
  day: string; // Utilitzat per l'empresa / client
  year?: string; // Camp per la data del projecte
  description: string;
}

export interface MultilangWork extends Artist {
  longDescription: { en: string; es: string; ca: string };
  subtitle?: { en: string; es: string; ca: string };
  challenge: { en: string; es: string; ca: string };
  outcome: { en: string; es: string; ca: string };
  problem?: { en: string; es: string; ca: string };
  persona?: { en: string; es: string; ca: string };
  solution?: { en: string; es: string; ca: string };
  task?: { en: string; es: string; ca: string };
  takeOn?: { en: string; es: string; ca: string };
  metrics?: { en: string; es: string; ca: string };
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum Section {
  HERO = 'hero',
  LINEUP = 'lineup',
  EXPERIENCE = 'experience',
  TICKETS = 'tickets',
}
