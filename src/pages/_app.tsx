import { type AppType } from "next/dist/shared/lib/utils";
import Link from "next/link";
import { useRouter } from "next/router";
import { Home, Info, List, User } from "react-feather"

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
	const router = useRouter();
	console.log(router.pathname)

	return <div className="flex flex-col items-stretch h-screen max-h-screen">
		<div className="flex-1 overflow-scroll">
			<Component {...pageProps} />
		</div>
		<nav className="h-12 bg-slate-50 border-t flex">
			<Link href="/" aria-checked={router.pathname === "/"} className="flex-1 flex items-center justify-center text-slate-500 aria-checked:text-emerald-600 aria-checked:border-b-2 border-emerald-500">
				<Home />
			</Link>
			<Link href="/info" aria-checked={router.pathname === "/info"} className="flex-1 flex items-center justify-center text-slate-500 aria-checked:text-emerald-600 aria-checked:border-b-2 border-emerald-500">
				<Info />
			</Link>
			<Link href="/history" aria-checked={router.pathname === "/history"} className="flex-1 flex items-center justify-center text-slate-500 aria-checked:text-emerald-600 aria-checked:border-b-2 border-emerald-500">
				<List />
			</Link>
			<Link href="/settings" aria-checked={router.pathname === "/settings"} className="flex-1 flex items-center justify-center text-slate-500 aria-checked:text-emerald-600 aria-checked:border-b-2 border-emerald-500">
				<User />
			</Link>
		</nav >
	</div>
};

export default MyApp;
