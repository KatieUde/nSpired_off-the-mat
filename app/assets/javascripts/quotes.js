$(document).ready(function(){

  searchQuote();
  receiveQuoteOfDay();
  displayImage();
});

function searchQuote() {
  $("#nSpire-quote.ui.floating.dropdown.labeled.search.icon.button").dropdown({
    action: 'activate',
    onChange: function(value, text, $selectedItem) {
      $("#api-quoteSearch-container").html("");
      $("#like").css("display", "")
      $("#img-hide").css("display", "")
      console.log($selectedItem[0].innerHTML);
      var category = $selectedItem[0].innerHTML;
      console.log(category);
      var getQuoteCategories = {
        type: 'get',
        url: 'http://quotes.rest/quote.json?category='+category+'&api_key=OCkgYvFtihssB_3SP894SQeF',
        length: 500,
        dataType: 'json',
        success: function(data) {
          console.log('Pulled from API!!');
          console.log(data.contents.quote);
          console.log(data.contents.author);
          var quoteSearchText = data.contents.quote;
          var quoteSearchAuthor = data.contents.author;
          $("#api-quoteSearch-container").append(quoteSearchText + '    - ' + quoteSearchAuthor);
          $("#likeQuoteText").val(quoteSearchText);
          $("#likeQuoteAuthor").val(quoteSearchAuthor);
          $("#like").css("display", "");
        },
        error: function(error) {
          console.log('Something did not happen as intended');
        },
      }
      $.ajax(getQuoteCategories);
    }
  })
  // receiveQuoteOfDay();
};



function displayImage() {
      var apiKey = '1941579-53462b4963e207ebcf4432c42';
      var imageCategory = 'landscape';
      var findQuoteImages = {
      type: 'get',
      url: 'https://www.pixabay.com/api/?key='+apiKey+'&q='+imageCategory+'&image_type=photo',
      dataType: 'jsonp',
      success: function(data) {
        console.log('Pulled from API!!');
        console.log(data);
        console.log(data.hits[Math.floor(Math.random()*20)].webformatURL);
        var quoteSearchImage = data.hits[Math.floor(Math.random()*20)].webformatURL;
        $("#api-quoteSearch-image").prop("src", quoteSearchImage);
      },
      error: function(error) {
        console.log('Something did not happen as intended')
        }
      }
      $.ajax(findQuoteImages);
    }



function receiveQuoteOfDay() {
  $("#qod-search.ui.floating.dropdown.labeled.search.icon.button").dropdown({
    action: 'activate',
    onChange: function(value, text, $selectedItem) {
      $("#qod-container").html("")
      $("#api-qod-image").html("");
      console.log($selectedItem[0].innerHTML);
      var qodCategory = $selectedItem[0].innerHTML;
      console.log(qodCategory);
      var getQodOptions = {
        type: 'get',
        url: 'http://quotes.rest/qod.json?category='+qodCategory+'&api_key=OCkgYvFtihssB_3SP894SQeF',
        length: 500,
        dataType: 'json',
        success: function(data) {
          console.log('Pulled from API!!');
          console.log(data.contents.quotes[0]);
          var qodImage = data.contents.quotes[0].background;
          var qodQuote = data.contents.quotes[0].quote;
          var qodAuthor = data.contents.quotes[0].author;
          $("#qod-container").append(qodQuote + '    - ' + qodAuthor)
          $("#api-qod-image").prop("src", qodImage);
        },
        error: function(error) {
          console.log('Something did not happen as intended');
        }
      };
      $.ajax(getQodOptions);
    }
  })
};



// function pickQuote() {
//   $('.item.active.selected').click(function() {
//   console.log('I picked a mood!');
//   });
// }

// var Quote = React.createClass({
//   render: function(){
//     return (
//       <article class="quote-view">
//         <div>
//           <img src={this.props.pic}/>
//         </div>
//       </article>
//     )
//   }
// })
//
//
// var generateQuote = React.createClass({
//   getInitialState: function(){
//     return { data: [] }
//   },
//
//   componentDidMount: function(){
//     $.ajax({
//       url: this.props.url,
//       dataType: 'json',
//       cache: false,
//       success: function(data){
//         this.setState({ data: data });
//       }.bind(this),
//       error: function(xhr, status, error){
//         console.log('error');
//         console.log(status);
//       }.bind(this)
//     })
//   },
//   render: function() {
//     console.log(this.props);
//     console.log(this.state.data);
//       var quoteData = this.state.data.map(function(quote) {
//         return (
//           <Quote pic={quote.contents.qimage.download_uri} />
//         );
//       });
//     return (
//       <section>{quoteData}</section>
//     )
//   }
// });
//
// ReactDOM.render(
//   <generateQuote url="http://quotes.rest/quote/image.json?category=love&api_key=OCkgYvFtihssB_3SP894SQeF" />,
//   document.getElementById('find-my-quote')
// );
