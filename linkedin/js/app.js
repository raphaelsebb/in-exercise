chrome.tabs.getSelected(null, function(tab) {
    var url = tab.url;
    $('#link').html("link: " + url);

    $.ajax({
        url : 'http://localhost:3000/process_get',
        type : 'GET',
        data : 'url=' + tab.url,
        dataType : 'html'
    });
});
