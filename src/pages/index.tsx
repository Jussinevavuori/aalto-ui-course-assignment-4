import { Navbar } from "../components/Navbar";
import { Delete } from "react-feather";
import { useState } from "react";
import { useSetAtom } from "jotai";
import { historyAtom, notificationAtom } from "../state";
import shortid from "shortid"

export default function HomePage() {
	const [input, setInput] = useState("");
	const setNotification = useSetAtom(notificationAtom);

	const setHistory = useSetAtom(historyAtom);

	const handleSubmit = () => {
		const number = parseInt(input);
		if (number > 0) {
			setHistory(h => [{ number, time: new Date(), id: shortid() }, ...h]);
			setInput("");
			setNotification({ time: Date.now(), message: `Succesfully recorded ${number} trees` })
		}
	}

	return <main className="flex flex-col justify-between h-full py-6 px-4">
		<Navbar />
		<div className="flex flex-col gap-4">
			<p className="text-center opacity-50">
				Enter number of trees planted
			</p>
			<div aria-invalid={!input} className="h-18 mt-4 border-b mb-12 text-center text-6xl font-extralight pb-4 aria-[invalid='true']:text-black/10">
				{input || "0"}
			</div>
			<div>
				<div
					className="grid grid-rows-4 grid-cols-3 gap-2"
				>
					<div onClick={() => setInput(_ => _ + "1")} className="text-slate-700 text-lg py-3 flex items-center justify-center rounded-lg bg-slate-100">1</div>
					<div onClick={() => setInput(_ => _ + "2")} className="text-slate-700 text-lg py-3 flex items-center justify-center rounded-lg bg-slate-100">2</div>
					<div onClick={() => setInput(_ => _ + "3")} className="text-slate-700 text-lg py-3 flex items-center justify-center rounded-lg bg-slate-100">3</div>
					<div onClick={() => setInput(_ => _ + "4")} className="text-slate-700 text-lg py-3 flex items-center justify-center rounded-lg bg-slate-100">4</div>
					<div onClick={() => setInput(_ => _ + "5")} className="text-slate-700 text-lg py-3 flex items-center justify-center rounded-lg bg-slate-100">5</div>
					<div onClick={() => setInput(_ => _ + "6")} className="text-slate-700 text-lg py-3 flex items-center justify-center rounded-lg bg-slate-100">6</div>
					<div onClick={() => setInput(_ => _ + "7")} className="text-slate-700 text-lg py-3 flex items-center justify-center rounded-lg bg-slate-100">7</div>
					<div onClick={() => setInput(_ => _ + "8")} className="text-slate-700 text-lg py-3 flex items-center justify-center rounded-lg bg-slate-100">8</div>
					<div onClick={() => setInput(_ => _ + "9")} className="text-slate-700 text-lg py-3 flex items-center justify-center rounded-lg bg-slate-100">9</div>
					<div onClick={() => setInput(_ => _.substring(0, _.length - 1))} className="text-rose-700 text-lg py-3 flex items-center justify-center rounded-lg bg-rose-50">
						<Delete />
					</div>
					<div onClick={() => setInput(_ => _ + "0")} className="text-slate-700 text-lg py-3 flex items-center justify-center rounded-lg bg-slate-100">0</div>
					<div className="text-slate-700 text-lg py-3 flex items-center justify-center rounded-lg bg-slate-50"></div>
				</div>
			</div>
			<div onClick={handleSubmit} className="relative bg-emerald-400 rounded-lg w-full py-3 flex items-center justify-center text-white font-medium">
				Submit
			</div>
		</div>
	</main >
}
