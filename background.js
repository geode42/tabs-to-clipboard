browser.browserAction.onClicked.addListener(() => {
	browser.tabs.query({currentWindow: true}).then((tabs, _) => {
		navigator.clipboard.writeText(tabs.map(tab => {return tab.url}).join('\n'))
	})
})