import { Navbar } from "../components/Navbar";


export default function InfoPage() {
	return <main className="flex flex-col py-6 px-4">
		<Navbar title="Dashboard" />

		<div className="flex flex-col gap-8 py-12">

			<div className="flex flex-col gap-1 items-center">
				<p className="text-sm opacity-50 ">This month, you have planted</p>
				<p className="text-5xl font-bold text-emerald-600">1 224</p>
				<p className="text-sm opacity-50 ">trees in total</p>
			</div>

			<div className="flex justify-evenly">
				<div className="flex flex-col items-center gap-1">
					<p className="text-sm opacity-50 ">Today</p>
					<p className="text-xl font-medium text-emerald-600">39</p>
				</div>
				<div className="flex flex-col items-center gap-1">
					<p className="text-sm opacity-50 ">This week</p>
					<p className="text-xl font-medium text-emerald-600">101</p>
				</div>
				<div className="flex flex-col items-center gap-1">
					<p className="text-sm opacity-50 ">This year</p>
					<p className="text-xl font-medium text-emerald-600">6 542</p>
				</div>
				<div className="flex flex-col items-center gap-1">
					<p className="text-sm opacity-50 ">All time</p>
					<p className="text-xl font-medium text-emerald-600">9 912</p>
				</div>
			</div>

			<div className="border-b" />

			<div className="flex flex-col gap-4">
				<p className="text-xl font-medium">Lusaka</p>

				<div className="flex flex-col gap-2">
					<div className="flex items-center justify-between">
						<p className="text-sm opacity-70 ">Monthly goal</p>
						<p className="text-sm opacity-70 ">38 %</p>
					</div>
					<div className="relative h-2 w-full rounded-full overflow-hidden">
						<div className="absolute bg-slate-100 inset-0 rounded-full" />
						<div className="absolute bg-emerald-500 inset-0 w-[38%] rounded-full" />
					</div>
					<div className="flex items-center justify-between">
						<p className="text-sm opacity-70 ">19 204 trees</p>
						<p className="text-sm opacity-70 ">50 000 trees</p>
					</div>
				</div>

				<div className="border-b" />

				<div className="flex flex-col gap-2">
					<div className="flex items-center justify-between">
						<p className="text-sm opacity-70 ">Today</p>
						<p className="text-sm opacity-70 ">559 trees</p>
					</div>
					<div className="flex items-center justify-between">
						<p className="text-sm opacity-70 ">This week</p>
						<p className="text-sm opacity-70 ">6 123 trees</p>
					</div>
					<div className="flex items-center justify-between">
						<p className="text-sm opacity-70 ">This year</p>
						<p className="text-sm opacity-70 ">91 435 trees</p>
					</div>
					<div className="flex items-center justify-between">
						<p className="text-sm opacity-70 ">All time</p>
						<p className="text-sm opacity-70 ">122 465 trees</p>
					</div>
				</div>

			</div>

			<div className="border-b" />

			<div className="flex flex-col gap-4">
				<div className="flex items-center justify-between">
					<p className="text-xl font-medium">Leaderboards</p>
					<p className="opacity-70">Lusaka Top 10</p>
				</div>

				<div className="flex items-center gap-4">
					<div className="text-black/80 border rounded-full px-3 py-1">Day</div>
					<div className="text-black/80 border rounded-full px-3 py-1">Week</div>
					<div className="text-emerald-800 border border-emerald-400 rounded-full px-3 py-1">Month</div>
					<div className="text-black/80 border rounded-full px-3 py-1">Year</div>
					<div className="text-black/80 border rounded-full px-3 py-1">All</div>
				</div>

				<div className="flex flex-col gap-2">
					<div className="flex gap-4 items-center">
						<span className="w-4 text-sm">🥇</span>
						<span className="opacity-70">Annie Benthon</span>
						<span className="ml-auto font-medium text-emerald-600">2 010</span>
					</div>
					<div className="flex gap-4 items-center">
						<span className="w-4 text-sm">🥈</span>
						<span className="opacity-70">Eugene Elliott</span>
						<span className="ml-auto font-medium text-emerald-600">1 954</span>
					</div>
					<div className="flex gap-4 items-center">
						<span className="w-4 text-sm">🥉</span>
						<span className="opacity-70">Jason Motes</span>
						<span className="ml-auto font-medium text-emerald-600">1 885</span>
					</div>
					<div className="flex gap-4 items-center">
						<span className="w-4 text-sm opacity-50">4</span>
						<span className="opacity-70">Elise Mize</span>
						<span className="ml-auto font-medium text-emerald-600">1 765</span>
					</div>
					<div className="flex gap-4 items-center">
						<span className="w-4 text-sm opacity-50">5</span>
						<span className="opacity-70">Carroll Whidden</span>
						<span className="ml-auto font-medium text-emerald-600">1 764</span>
					</div>
					<div className="flex gap-4 items-center">
						<span className="w-4 text-sm opacity-50">6</span>
						<span className="opacity-70">Manuel Burke</span>
						<span className="ml-auto font-medium text-emerald-600">1 489</span>
					</div>
					<div className="flex gap-4 items-center">
						<span className="w-4 text-sm opacity-50">7</span>
						<span className="opacity-70">Scott Salas</span>
						<span className="ml-auto font-medium text-emerald-600">1 348</span>
					</div>
					<div className="flex gap-4 items-center">
						<span className="w-4 text-sm opacity-50">8</span>
						<span className="opacity-70">Henry Smith</span>
						<span className="ml-auto font-medium text-emerald-600">1 346</span>
					</div>
					<div className="flex gap-4 items-center">
						<span className="w-4 text-sm opacity-50">9</span>
						<span className="opacity-70">Pauline Pippin</span>
						<span className="ml-auto font-medium text-emerald-600">1 320</span>
					</div>
					<div className="flex gap-4 items-center">
						<span className="w-4 text-sm opacity-50">10</span>
						<span className="opacity-70">Peggy Merrill</span>
						<span className="ml-auto font-medium text-emerald-600">1 267</span>
					</div>
					<div className="flex gap-4 items-center mt-4">
						<span className="w-4 text-sm opacity-50">19</span>
						<span className="opacity-70">You</span>
						<span className="ml-auto font-medium text-emerald-600">1 224</span>
					</div>
				</div>

			</div>

		</div>
	</main>
}