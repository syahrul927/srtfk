// keystatic.config.ts
import { config, fields, collection } from "@keystatic/core"

export default config({
	storage: {
		kind: "local",
	},
	collections: {
		posts: collection({
			label: "Works",
			slugField: "title",
			path: "src/content/works/*",
			format: { contentField: "content" },
			schema: {
				title: fields.slug({ name: { label: "Title" } }),
				content: fields.document({
					label: "Content",
					formatting: true,
					dividers: true,
					links: true,
					images: true,
				}),
			},
		}),
	},
})
