import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import moment from "moment"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}
export function localDate(date: Date) {
	const formatted = moment(date)
	return formatted.format("LL")
}
export function localMonthYear(date: Date) {
	const formatted = moment(date)
	return formatted.format("MMMM YYYY")
}
