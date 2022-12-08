import { useAtom } from "jotai"
import { useEffect } from "react";
import { Check } from "react-feather";
import { notificationAtom } from "../state"

export function Notification() {

	const [notification, setNotification] = useAtom(notificationAtom)

	useEffect(() => {
		if (!notification) return
		const timeout = setTimeout(() => setNotification(undefined), 3000);
		return () => clearTimeout(timeout);
	}, [notification, setNotification])

	if (!notification) return null;

	return <div className="flex items-center gap-4 animate_notification fixed top-4 left-4 right-4 bg-white rounded-lg p-4 border text-emerald-700">
		<Check />{notification.message}
	</div>
}