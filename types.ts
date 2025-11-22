import React from 'react';

export enum Page {
    HOME = 'HOME',
    ABOUT = 'ABOUT',
    ANALYSIS = 'ANALYSIS',
    STRATEGY = 'STRATEGY',
    CHAT = 'CHAT',
    CONTACT = 'CONTACT'
}

export interface NavItem {
    id: Page;
    label: string;
    icon: React.ReactNode;
}

export interface SWOTItem {
    title: string;
    items: string[];
    type: 'strength' | 'weakness' | 'opportunity' | 'threat';
}