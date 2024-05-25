import { motion } from "framer-motion"
import { useState } from "react"
import { useMediaQuery } from "~/utils/use-media-query"

const menu = [
	{
		label: "work",
		url: "/work",
	},
	{
		label: "about",
		url: "/about",
	},

	{
		label: "whatsapp",
		url: "https://api.whatsapp.com/send?phone=62895333302590",
	},
	{
		label: "linkedin",
		url: "https://linkedin.com/in/srtfk",
	},
	{
		label: "upwork",
		url: "/upwork",
	},
]
const MobileHeader = () => {
	const matches = useMediaQuery("(min-width: 768px)")
	const [toggle, setToggle] = useState(false)
	return (
		<div className="block md:hidden">
			{toggle && !matches && (
				<motion.div
					animate={{
						opacity: 1,
						x: 0,
					}}
					initial={{
						opacity: 0,
						x: -4,
					}}
					className="w-full bg-white h-screen absolute top-0 left-0 flex justify-center items-center"
				>
					<div className="flex divide-y flex-col">
						{menu.map((item) => (
							<Link url={item.url} label={item.label} />
						))}
					</div>
				</motion.div>
			)}
			<button
				className="cursor-pointer space-y-1.5"
				onClick={() => setToggle(!toggle)}
			>
				<motion.span
					animate={{
						rotateZ: toggle ? 45 : 0,
						y: toggle ? 8 : 0,
						width: toggle ? 32 : 24,
					}}
					className="block h-0.5 w-6 bg-black"
				/>
				<motion.span
					animate={{ width: toggle ? 0 : 16 }}
					className="block h-0.5 w-4 bg-black"
				/>
				<motion.span
					animate={{
						rotateZ: toggle ? -45 : 0,
						width: toggle ? 32 : 8,
						y: toggle ? -8 : 0,
					}}
					className="block h-0.5 w-2 bg-black"
				/>
			</button>
		</div>
	)
}
export default MobileHeader

const Link = (props: { url: string; label: string }) => {
	return (
		<a
			href={props.url}
			className={
				"hover:text-accent justify-center px-12 flex gap-1 items-center group-first:first:font-semibold group-first:first:animate-pulse group-first:first:lexend transition-all hover:-translate-y-0.5 py-4"
			}
		>
			{props.label}
		</a>
	)
}
