import { Box, Map } from "react-feather"

export type Props = {
	title?: string;
}

export function Navbar({ title }: Props) {

	return <div className="flex items-center justify-between">
		<p className="text-2xl font-bold gap-2 flex items-center">
			<Box className="text-emerald-500" />
			<span className="text-2xl font-bold">
				Rooted
			</span>
			{
				title && <>
					<span className="text-2xl font-extralight opacity-20">
						/
					</span>
					<span className="text-2xl font-light">
						{title}
					</span>
				</>
			}
		</p>
		<div className="px-3 py-1 border rounded-full border-emerald-300 text-sm flex items-center gap-2">
			<p>
				Lusaka
			</p>
			<Map size={16} className="text-emerald-700" />
		</div>
	</div>
}