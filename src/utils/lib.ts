import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import moment from "moment"
import "moment/locale/id"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}
export function localDate(date: Date) {
	const formatted = moment(date)
	return formatted.locale("id").format("LL")
}
export function localMonthYear(date: Date) {
	const formatted = moment(date)
	return formatted.locale("id").format("MMMM YYYY")
}
