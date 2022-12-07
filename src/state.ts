import { atom } from "jotai";
import shortid from "shortid"

export type TreeRecord = {
	time: Date;
	number: number;
	id :string;
}

export const userAtom = atom<undefined | string>(undefined);
export const historyAtom = atom<TreeRecord[]>(generateHistory())

function generateHistory() {
	const history: TreeRecord[] =[];
	for (let i = 0; i < 40; i++) {
		const number = 7 + Math.floor(60 * Math.random())
		const time = new Date(Date.now() - 30 * 24* 60*60*1000 * Math.random())
		history.push({number,time, id: shortid()})
	}
	return history.sort((a,b)=>b.time.getTime()-a.time.getTime())
}