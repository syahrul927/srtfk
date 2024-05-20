import { config, type GitHubConfig, type LocalConfig } from "@keystatic/core"
import PostCollection from "~/config/schema/collections/post"
const storage: LocalConfig["storage"] | GitHubConfig["storage"] =
	process.env.NODE_ENV === "development"
		? {
				kind: "local",
		  }
		: {
				kind: "github",
				repo: {
					owner: "syahrul927",
					name: "srtfk",
				},
		  }
const KeystaticConfig = config({
	storage,
	collections: {
		posts: PostCollection,
	},
})
export default KeystaticConfig
