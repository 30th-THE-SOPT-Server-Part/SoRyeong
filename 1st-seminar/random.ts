import { Member, member } from "./soptData";

interface Organize {
	member: Member[];
	shuffle: (member: Member[]) => Member[];
	getResult: (member: Member[]) => string[];
}

function shuffle(memberList: Member[]): Member[] {
	memberList.sort(() => Math.random() - 0.5);

	return memberList;
}

function getResult(memberList: Member[]): string[] {
	const shuffledMemberList: Member[] = shuffle(memberList);

	const ob = shuffledMemberList.filter(member => member.status === 'OB');
	const yb = shuffledMemberList.filter(member => member.status === 'YB');

	const result = [];
	result.push(ob[Math.floor(Math.random() * ob.length)].name);
	result.push(yb[Math.floor(Math.random() * yb.length)].name);

	return result
};

const organize: Organize = {
	member, shuffle, getResult
};

const organizedResult = organize.getResult(organize.member);

console.log('✨-----✨-----✨-----✨-----✨-----✨-----✨-----✨-----✨-----✨-----✨');
console.log(`오늘 저녁 식사 멤버로 선정된 OB${organizedResult[0]}님과 YB${organizedResult[1]}님 축하드립니다!`)
console.log('✨-----✨-----✨-----✨-----✨-----✨-----✨-----✨-----✨-----✨-----✨');