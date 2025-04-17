// src/data/client-section/index.ts
export interface ClientSectionDataProps {
  logos: string[];
  logoAltTexts?: string[];
}

export const ClientSectionData: ClientSectionDataProps = {
  logos: [
    '/assets/images/clients/coma.png',
    '/assets/images/clients/comb.png',
    '/assets/images/clients/comc.png',
    '/assets/images/clients/comd.png',
    '/assets/images/clients/come.png',
  ],
  logoAltTexts: [
    'Client Company A',
    'Client Company B',
    'Client Company C',
    'Client Company D',
    'Client Company E',
  ],
};
