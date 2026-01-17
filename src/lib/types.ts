import type { Component } from 'svelte';
import type { Icon } from 'lucide-svelte';

export interface Technology {
	name: string;
	// This allows for a Lucide icon component or a string (emoji/path)
	logo?: Component<Icon> | string;
	bgColor?: string;
	textColor?: string;
	borderColor?: string;
	tooltip?: string;
}
export interface Experience {
	orientation: 'left' | 'right';
	title: string;
	subtitle: string;
	content: string[];
	image?: string;
	technologies?: Technology[];
	bgColor?: string;
	borderColor?: string;
}
