import { useAtom, useSetAtom } from "jotai";
import { useMemo } from "react";
import { X } from "react-feather";
import { Navbar } from "../components/Navbar";
import type { TreeRecord } from "../state";
import { notificationAtom } from "../state";
import { historyAtom } from "../state";

export default function HistoryPage() {
	const [history, setHistory] = useAtom(historyAtom)
	const setNotification = useSetAtom(notificationAtom);

	const historyPerDay = useMemo(() => history.reduce<Record<string, TreeRecord[]>>((groups, record) => {
		const date = record.time.toISOString().substring(0, 10)
		if (!groups[date]) groups[date] = []
		groups[date]!.push(record);
		return groups;
	}, {}), [history])

	const handleUndo = (id: string) => () => {
		const record = history.find(_ => _.id === id);
		setHistory(prev => prev.filter(record => record.id !== id))
		setNotification({ time: Date.now(), message: `Succesfully undid ${record?.number} trees` })
	}

	return <main className="flex flex-col justify-between h-full py-6 px-4">
		<Navbar title="History" />
		<ul className="py-12">
			{
				Object.entries(historyPerDay).map(([date, records]) => (
					<li key={date} className="border-b pb-8 mb-8">
						<p className="pb-2 text-sm opacity-70">
							{date.split("-").map(x => parseInt(x)).filter(x => x !== 2022).reverse().join(".")}
						</p>
						<ul className="flex flex-col gap-4">
							{
								records.map((record, i, arr) => (
									<li key={record.time.toISOString()} className="relative flex items-center gap-4">
										<div className="flex">
											{i !== arr.length - 1 && <span className="absolute h-full border-l left-2 top-1/2 translate-y-2 -translate-x-px -z-10" />}
											<span className="w-4 h-4 rounded-full border-2 bg-white border-emerald-400" />
										</div>
										<div className="flex flex-col items-start">
											<span className="text-xs opacity-50">{record.time.toISOString().substring(11, 16)}</span>
											<span>
												<span className="pr-2 font-medium text-lg text-emerald-600">{record.number}</span>
												<span className="text-sm opacity-50">trees planted</span>
											</span>
										</div>
										<button onClick={handleUndo(record.id)} className="border rounded-full p-2 border-red-100 ml-auto">
											<X className="text-red-700" size={20} />
										</button>
									</li>
								))
							}
						</ul>
					</li>
				))
			}
		</ul>
	</main>
}