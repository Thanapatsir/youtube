// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function showSearch() {
  document.getElementById("change").innerHTML = "Search result";
}


function search(){
        gapi.client.setApiKey('AIzaSyBhha-BY_LXjAmXxCHHXDS9wUWdYOwKAIc');
        gapi.client.load('youtube', 'v3', function() {
                makeRequest();
        });
}
    function makeRequest() {
        var q = $('#query').val();
        var request = gapi.client.youtube.search.list({
                q: q,
                part: 'snippet',
                maxResults: 5
        });

        request.execute(function(response)  {
                $('#results').empty()
                var srchItems = response.result.items;
                $.each(srchItems, function(index, item) {
                vidTitle = item.snippet.title;
                vidThumburl =  item.snippet.thumbnails.default.url;
                vidThumbimg = '<pre><img id="thumb" src="'+vidThumburl+'" alt="No  Image Available." style="width:204px;height:128px"></pre>';
                vidUrl = 'http://www.youtube.com/v/' + item.id.videoId;
                $('#results').append('<a href="'+vidUrl+'">' + vidTitle + vidThumbimg +  '</a>');
        })
    })
}
