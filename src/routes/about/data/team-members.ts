import type { TeamMember } from '../types/TeamMember';
const ceoImg = '/images/ceo.jpg';

export const teamMembers: TeamMember[] = [
	{
		id: 1,
		img: ceoImg,
		name: 'René Reyes',
		role: 'CEO',
		bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryapos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
	},
	{
		id: 2,
		img: ceoImg,
		name: 'Pompilio Fiore',
		role: 'ROLE',
		bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryapos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
	},
	{
		id: 3,
		img: ceoImg,
		name: 'Manuel Miranda',
		role: 'Director of Engineering',
		bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryapos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
	}
];
