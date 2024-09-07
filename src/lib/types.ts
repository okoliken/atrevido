export interface Work {
	duration: string;
	role: string;
	companyName: string;
	description: string;
	stacks: string[];
	growth?:string[];
	url: string;
}
export interface Project {	
	description: string;
	title: string;
	stacks: string[];
	growth?:string[];
	url: string;
	image:string;
	is_comming?:boolean
}