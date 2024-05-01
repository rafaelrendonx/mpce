import type { Project } from '@/interfaces';

export const isProjectType = (obj: any): obj is Project => {
	return (
		obj.id !== undefined &&
		obj.name !== undefined &&
		obj.shortDescription !== undefined &&
		obj.address !== undefined &&
		obj.lat !== undefined &&
		obj.lng !== undefined
	);
};
