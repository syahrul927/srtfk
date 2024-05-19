import { config } from "@keystatic/core"
import PostCollection from "~/config/schema/collections/post"

const KeystaticConfig = config({
	storage: {
		kind: "local",
	},
	collections: {
		posts: PostCollection,
	},
})
export default KeystaticConfig
