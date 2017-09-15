/*document.addEventListener('DOMContentLoaded', function() {
	var checkPageButton = document.getElementById('copyLink');
	checkPageButton.addEventListener('click', function() {
		chrome.tabs.getSelected(null, function(tab) {
			d = document;
			var f = d.createElement('form');
			f.action = 'http://www.flvto.biz/';
			f.method = 'post';
			var i = d.createElement('input');
			i.type = 'hidden';
			i.name = 'url';
			i.value = tab.url;
			f.appendChild(i);
			d.body.appendChild(f);
			f.submit();
		});
	}, false);
}, false);*/

/*
function update() {
	var video_id = window.location.search.split('v=')[1];
	var ampersandPosition = video_id.indexOf('&');
	if (ampersandPosition != -1)
	{
		video_id = video_id.substring(0, ampersandPosition);
	}
	alert(video_id);
	//document.getElementById('myIframe').setAttribute('src', "https://www.yt-download.org/api-console/audio/" + video_id);
	document.getElementById('myIframe').src = "https://www.yt-download.org/api-console/audio/" + video_id;
}*/
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


