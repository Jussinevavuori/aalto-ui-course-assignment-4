import { useAtom } from "jotai"
import React from "react";
import { userAtom } from "../state"
import { Navbar } from "./Navbar";

export function AuthWrapper({ children }: React.PropsWithChildren) {

	const [loggedIn, setLoggedIn] = useAtom(userAtom);

	if (loggedIn) return <>{children}</>

	return <main className="flex flex-col justify-between h-full py-6 px-4">
		<Navbar title="Login" hideLocation />
		<div className="pt-12 pb-4 flex flex-col gap-4">
			<p className="text-center opacity-50 pb-4">
				Get started by signing in
			</p>
			<button onClick={() => setLoggedIn(true)} className="px-4 py-2 rounded-lg w-full font-medium bg-[#ea4335] text-white">
				Sign in with Google
			</button>
			<button onClick={() => setLoggedIn(true)} className="px-4 py-2 rounded-lg w-full font-medium bg-[#1877f2] text-white">
				Sign in with Facebook
			</button>
			<button onClick={() => setLoggedIn(true)} className="border border-emerald-400 text-emerald-900 px-4 py-2 rounded-lg w-full font-medium">
				Sign in with email and password
			</button>
			<div className="border-b my-4" />
			<div className="flex gap-4">
				<button onClick={() => setLoggedIn(true)} className="border px-4 py-2 rounded-lg w-full font-medium">
					Create account
				</button>
				<button onClick={() => setLoggedIn(true)} className="border px-4 py-2 rounded-lg w-full font-medium">
					Forgot password
				</button>
			</div>
		</div>
	</main>

}