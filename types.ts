
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


export interface Artist {
  id: string;
  name: string;
  genre: string;
  image: string;
  detailImage?: string;
  day: string; // Utilitzat per l'empresa / client
  year?: string; // Camp per la data del projecte
  description: string;
}

export type Language = 'en' | 'es' | 'ca';

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
