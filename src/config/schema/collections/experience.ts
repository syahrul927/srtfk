import { collection, fields } from "@keystatic/core"

const ExperienceCollection = collection({
	label: "Experiences",
	slugField: "title",
	path: "src/content/experience/*",
	format: { contentField: "description" },
	schema: {
		title: fields.slug({
			name: {
				label: "Title",
			},
		}),
		place: fields.text({
			label: "Place",
		}),
		from: fields.date({
			label: "From",
		}),
		to: fields.conditional(
			fields.checkbox({
				label: "I'm currently work here",
				defaultValue: false,
			}),
			{
				true: fields.empty(),
				false: fields.date({
					label: "To",
				}),
			}
		),
		description: fields.markdoc({
			label: "Description",
			options: {
				image: {
					directory: "public/images/experience/",
					publicPath: "/images/experience/",
				},
			},
			components: {
				// ↓↓↓↓ Custom Component React Markdoc
				// ImageLeftTextRight: TextImage,
			},
		}),
		skills: fields.array(
			fields.text({
				label: "Skills",
			}),
			{
				label: "Skills",
				itemLabel: (props) => props.value,
			}
		),
	},
})
export default ExperienceCollection
