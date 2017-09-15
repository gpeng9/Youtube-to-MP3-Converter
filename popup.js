function update()
{
	chrome.tabs.getSelected(null, function(tab) {
		var url = tab.url;
		var videoid = url.match(/(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
		if(videoid != null) {
			document.getElementById("myIframe").src = "https://www.yt-download.org/api-console/audio/" + videoid[1];
		} else { 
			alert("Error!");
		}
	});
}

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById("myButton").addEventListener("click", update, false);
});


