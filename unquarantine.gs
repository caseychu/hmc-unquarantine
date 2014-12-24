function unquarantine() {
	var threads = GmailApp.search('is:inbox from:noreply+spam@g.hmc.edu');
	var links = [];
	
	threads.forEach(function (thread) {
		thread.getMessages().forEach(function (message) {
			var regex = /<a href="([^"]*)" target="_blank">Release<\/a>/g;
			var body = message.getBody();
			var match;
			while (match = regex.exec(body))
				links.push(match[1].replace(/&amp;/g, '&'));
		});
	});
	
	links.forEach(function (url) { UrlFetchApp.fetch(url); });
	GmailApp.moveThreadsToTrash(threads);
}