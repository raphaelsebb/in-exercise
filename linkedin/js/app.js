chrome.tabs.getSelected(null, function(tab) {
    var root = tab.url;
    var path = "#ember7764 > div.pv-top-card-section__body > div.pv-top-card-section__information.mt3 > h1"
    $('#link').html("link: "+root);

    $.ajax({
        url : 'http://localhost:3000/process_get',
        type : 'GET',
        data : 'url=' + tab.url,
        dataType : 'html'
    });
});
