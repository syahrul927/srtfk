import { collection, fields } from "@keystatic/core"

const PostCollection = collection({
	label: "Works",
	slugField: "title",
	path: "src/content/works/*",
	format: { contentField: "content" },
	entryLayout: "content",
	schema: {
		title: fields.slug({ name: { label: "Title" } }),
		hero: fields.image({
			label: "Hero Image",
			directory: "public/images/article/",
			publicPath: "/images/article/",
		}),
		content: fields.markdoc({
			label: "Content",
			description: "Write your content here",
			options: {
				image: {
					directory: "public/images/article/",
					publicPath: "/images/article/",
				},
			},
			components: {
				// ↓↓↓↓ Custom Component React Markdoc
				// ImageLeftTextRight: TextImage,
			},
		}),
		publishDate: fields.date({
			label: "Publish Date",
			defaultValue: { kind: "today" },
		}),
		tags: fields.array(fields.text({ label: "Tag" }), {
			label: "Tag",
			itemLabel: (props) => props.value,
		}),
	},
})

export default PostCollection
