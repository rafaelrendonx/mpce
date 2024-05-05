export interface Project {
	id: number;
	name: string;
	shortDescription: string;
	description: string;
	address: string;
	lat: string | number;
	lng: string | number;
	images: string; // comma separated string (url1,url2,url3)
	slug: string;
}
