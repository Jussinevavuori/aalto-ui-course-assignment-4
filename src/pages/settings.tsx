import { Navbar } from "../components/Navbar";
import { Edit, Globe, Eye, Bell, Info, ChevronRight, LogOut } from "react-feather"
import { useSetAtom } from "jotai";
import { userAtom } from "../state";

export default function SettingsPage() {

	const setUser = useSetAtom(userAtom);

	return <main className="flex flex-col h-full py-6 px-4">
		<Navbar title="Settings" />
		<div className="py-12">
			<p className="uppercase font-medium text-sm opacity-70 pb-4">
				Profile
			</p>
			<div className="flex flex-col items-center gap-6">
				<img src="/image.jpeg" alt="Fake person" className="w-28 h-28 rounded-full" />
				<div className="flex flex-col items-center gap-1">
					<p className="font-medium text-xl">
						Patricia Hawkins
					</p>
					<p className="opacity-60">
						p.hawkins@gmail.com
					</p>
				</div>
				<div className="flex border border-emerald-500 rounded-full px-3 py-1 items-center gap-2">
					<Edit size={16} className="text-emerald-700" />
					<p className="text-emerald-900">
						Edit profile
					</p>
				</div>
			</div>
			<div className="my-12 border-b" />
			<p className="uppercase font-medium text-sm opacity-70 pb-4">
				Preferences
			</p>
			<div className="flex flex-col">
				<div className="flex items-center gap-2 py-4">
					<Globe size={20} className="text-emerald-500" />
					<p>Language</p>
					<p className="text-sm opacity-70 ml-auto">English</p>
					<ChevronRight className="text-emerald-500" />
				</div>
				<div className="border-b" />
				<div className="flex items-center gap-2 py-4">
					<Eye size={20} className="text-emerald-500" />
					<p>Appearance</p>
					<p className="text-sm opacity-70 ml-auto">Light</p>
					<ChevronRight className="text-emerald-500" />
				</div>
				<div className="border-b" />
				<div className="flex items-center gap-2 py-4">
					<Bell size={20} className="text-emerald-500" />
					<p>Notifications</p>
					<p className="text-sm opacity-70 ml-auto">All</p>
					<ChevronRight className="text-emerald-500" />
				</div>
				<div className="border-b" />
				<div className="flex items-center gap-2 py-4">
					<Info size={20} className="text-emerald-500" />
					<p>About</p>
					<p className="text-sm opacity-70 ml-auto"></p>
					<ChevronRight className="text-emerald-500" />
				</div>
				<div className="border-b" />
				<button className="flex items-center gap-2 py-4" onClick={() => setUser(false)}>
					<LogOut size={20} className="text-rose-500" />
					<p>Sign out</p>
					<p className="text-sm opacity-70 ml-auto"></p>
				</button>
			</div>
		</div>
	</main>
}