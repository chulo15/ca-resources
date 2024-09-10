"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"

export default function ModeToggle() {
	const { setTheme, theme } = useTheme()

	return (
		<>
			<div className="flex rounded-full border border-border w-fit">
				{/* System */}
				<div
					onClick={() => setTheme("system")}
					className={`border flex items-center justify-center p-2 rounded-full cursor-pointer hover:text-neutral-700 dark:hover:text-neutral-300 ${
						theme === "system"
							? "text-foreground border-stone-600"
							: "text-muted-foreground border-transparent"
					}`}
				>
					<svg
						className="size-4"
						height="16"
						width="16"
						strokeLinejoin="round"
						viewBox="0 0 16 16"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M1 3.25C1 1.45507 2.45507 0 4.25 0H11.75C13.5449 0 15 1.45507 15 3.25V15.25V16H14.25H1.75H1V15.25V3.25ZM4.25 1.5C3.2835 1.5 2.5 2.2835 2.5 3.25V14.5H13.5V3.25C13.5 2.2835 12.7165 1.5 11.75 1.5H4.25ZM4 4C4 3.44772 4.44772 3 5 3H11C11.5523 3 12 3.44772 12 4V10H4V4ZM9 13H12V11.5H9V13Z"
							fill="currentColor"
						></path>
					</svg>
				</div>
				{/* Light */}
				<div
					className={`border flex items-center justify-center p-2 rounded-full cursor-pointer hover:text-neutral-700 dark:hover:text-neutral-300 ${
						theme === "light"
							? "text-foreground border-stone-600"
							: "text-muted-foreground border-transparent"
					}`}
					onClick={() => setTheme("light")}
				>
					<span className="sr-only">light</span>
					<SunIcon className="size-4" />
				</div>
				{/* Dark */}
				<div
					onClick={() => setTheme("dark")}
					className={`border flex items-center justify-center p-2 rounded-full cursor-pointer hover:text-neutral-700 dark:hover:text-neutral-300 ${
						theme === "dark"
							? "text-foreground border-stone-600"
							: "text-muted-foreground border-transparent"
					}`}
				>
					<span className="sr-only">dark</span>
					<MoonIcon className="size-4" />
				</div>
			</div>
		</>
	)
}
