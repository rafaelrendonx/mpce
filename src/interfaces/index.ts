export interface Project {
	id: number;
	name: string;
	shortDescription: string;
  address: string;
	lat: string | number;
	lng: string | number;
	images?: string[];
}
