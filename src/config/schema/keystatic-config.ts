import { config, type GitHubConfig, type LocalConfig } from "@keystatic/core"
import PostCollection from "~/config/schema/collections/post"
import ExperienceCollection from "./collections/experience"
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
	ui: {
		brand: {
			name: "srtfk content",
		},
	},
	collections: {
		posts: PostCollection,
		experiences: ExperienceCollection,
	},
})
export default KeystaticConfig
