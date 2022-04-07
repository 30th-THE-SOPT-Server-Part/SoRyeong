// OB 인듯 YB인듯 하는 애들 막기 위해 key 제한
interface StatusKey {
	OB: string;
	YB: string;
}

type Status = keyof StatusKey;

interface Member {
	name: string;
	status: Status;
}

interface Organize {
	member: Member[];
	shuffle: (member: Member[]) => Member[];
	getResult: (member: Member[]) => void;
}

const member: Member[] = [
	{
		name: '정아',
		status: 'OB'
	},
	{
		name: '효식',
		status: 'OB'
	},
	{
		name: '서현',
		status: 'OB'
	},
	{
		name: '소령',
		status: 'OB'
	},
	{
		name: '루희',
		status: 'OB'
	},
	{
		name: '정훈',
		status: 'OB'
	},
	{
		name: '현지',
		status: 'OB'
	},
	{
		name: '건모',
		status: 'OB'
	},
	{
		name: '세훈',
		status: 'OB'
	},
	{
		name: '지윤',
		status: 'OB'
	},
	{
		name: '승헌',
		status: 'OB'
	},
	{
		name: '정무',
		status: 'OB'
	},
	{
		name: '지원',
		status: 'OB'
	},
	{
		name: '유정',
		status: 'OB'
	},
	{
		name: '호영',
		status: 'OB'
	},
	{
		name: '희빈',
		status: 'OB'
	},
	{
		name: '연주',
		status: 'OB'
	},
	{
		name: '현우',
		status: 'OB'
	},
	{
		name: '진수',
		status: 'OB'
	},
	{
		name: '민재',
		status: 'YB'
	},
	{
		name: '혁준',
		status: 'YB'
	},
	{
		name: '경린',
		status: 'YB'
	},
	{
		name: '동재',
		status: 'YB'
	},
	{
		name: '민욱',
		status: 'YB'
	},
	{
		name: '소현',
		status: 'YB'
	},
	{
		name: '시연',
		status: 'YB'
	},
	{
		name: '채은',
		status: 'YB'
	},
	{
		name: '혜정',
		status: 'YB'
	},
	{
		name: '진형',
		status: 'YB'
	},
	{
		name: '송경',
		status: 'YB'
	},
	{
		name: '동현',
		status: 'YB'
	},
	{
		name: '서우',
		status: 'YB'
	},
	{
		name: '우진',
		status: 'YB'
	},
	{
		name: '승하',
		status: 'YB'
	},
	{
		name: '서희',
		status: 'YB'
	},
	{
		name: '승빈',
		status: 'YB'
	},
	{
		name: '서연',
		status: 'YB'
	},
	{
		name: '서경',
		status: 'YB'
	},
];

function shuffle(memberList: Member[]): Member[] {
	memberList.sort(() => Math.random() - 0.5);

	return memberList;
}

function getResult(memberList: Member[]): void {
	const shuffledMemberList: Member[] = shuffle(memberList);

	const ob = shuffledMemberList.filter(member => member.status === 'OB');
	const yb = shuffledMemberList.filter(member => member.status === 'YB');

	const result = [];
	result.push(ob[Math.floor(Math.random() * ob.length)].name);
	result.push(yb[Math.floor(Math.random() * yb.length)].name);

	console.log('✨-----✨-----✨-----✨-----✨-----✨-----✨-----✨-----✨-----✨-----✨');
	console.log(`오늘 저녁 식사 멤버로 선정된 OB${result[0]}님과 YB${result[1]}님 축하드립니다!`)
	console.log('✨-----✨-----✨-----✨-----✨-----✨-----✨-----✨-----✨-----✨-----✨');
};

const organize: Organize = {
	member, shuffle, getResult
};

organize.getResult(organize.member);