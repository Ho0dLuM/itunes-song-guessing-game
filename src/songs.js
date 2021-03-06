var songIds = ["995535015", "966411602", "823593456", "956689796", "943946671",
                "982388023", "907242704", "201281527", "656801339", "910038357",
                "250038575", "878000348",  "794095205",  "1645339",  "400835962",
                "325618",  "169003415",  "51958108",
                "192688540", "684811768", "344799464", "217633921",
                "192811017", "71068886", "640047583", "517438248",
               "656479859", "310237", "991390352", "901614155",
                "344799727", "162337613", "121695005", "159293848", "305118379" ];


$(function() {
//console.log('sanity check')
var randomSongId = getRandomSongId(songIds)
getItunesData(randomSongId);

function getItunesData(songId) {
  $.ajax({
     url: 'https:itunes.apple.com/lookup?id=' + songId,
     dataType: "jsonp",
  }).done(function(data) {
     var musicObject = data.results[0];
     var html = '<audio id="audio-preview" src="' + musicObject.previewUrl + '" autoplay="true"</audio>'
     $('body').append(html)
     $('#answer').attr('value', musicObject.trackName)
  });
  }
});
function getRandomSongId(songArray) {
    return songArray[Math.floor(Math.random()*songArray.length)]
}

$('form').on('submit', function(event) {
  event.preventDefault();
  var songTitle = $('#song-title').val();
  var songTitleAnswer = $('#answer').val();
if (songTitle === songTitleAnswer) {
   $('#response').text('yay!')
} else {
   $('#response').text('boooooooo')
}
});
