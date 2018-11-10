## LUIS Applications ##

### Why LUIS instead of SharePoint query rules? ###


- Easy to manage for power users .They don't have to deal with complex SharePoint concepts. With LUIS, they can manage and refine the model more easily in a friendly comprehensive interface.
- Real time monitoring. Power users can review utterances submitted by end users and what keywords are entered. They can add new terms as synonyms automatically from the utterances.
- Extensible with custom intents mapped to predefined well know SharePoint search queries (ex: "what are the BNC vacation dates").
- Able to plug in the Bing Spell checker automatically to correct mispeleld words and get a clean query

### Intents ###

| Intent | Description
| ------ | -----------
| PnP.SearchByKeywords | The default intent for the search query. Used to improve free text searches for SharePoint (90% of users queries in the portal).
| None | Needed to avoid unrelevant query such as noise words, trolling or insulting words

### Entities ###

| Entity | Type | Description | Recognition method |
| ------ | ---- | ----------- | ------------ |
| keyPhrase | Builtin | This prebuilt enity catches important keywords in the phrase. In this case, we treat these values as a "free" keyword which will be matched with all relevant SharePoint search managed properties. | Machine Learning
