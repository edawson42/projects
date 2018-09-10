$(document).ready(function() {
  
    var quote;
    var author;
    
    function getNewQuote() {
      $.ajax({
        url: 'https://api.forismatic.com/api/1.0/',
        jsonp: 'jsonp',
        dataType: 'jsonp',
        data: {
          method: 'getQuote',
          lang: 'en',
          format: 'jsonp'
        },
        success: function(response) {
          quote = response.quoteText;
          author = response.quoteAuthor;
          $('#text').html("<h2 id='text'>" + '"' + quote + '"' + "</h2>");
          if (author) {
            $('#author').html("<h2 id='author'>" + "~ " + author + "</h2>");
          } else {
            $('#author').html("<h2 id='author'>" + "~ Unknown" + "</h2>");
          }
        }
      });
    }
    $('#new-quote').on('click', function(event) {
      event.preventDefault();
      console.log('HEY!!')
      getNewQuote();
    });
    $('#tweet-quote').on('click', function(event) {
    event.preventDefault();
    if (quote) {
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + '~ ' + author));
    } else {
      window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent("Life is what happens while you're busy making other plans. ~ John Lennon"));
    };
    });
  });