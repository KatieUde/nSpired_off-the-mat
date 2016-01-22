$(document).ready(function(){

  searchQuote();

});

function searchQuote() {
  $(".ui.floating.dropdown.labeled.search.icon.button").dropdown({
    action: 'activate',
    onChange: function(value, text, $selectedItem) {
      console.log($selectedItem[0].innerHTML);
      var category = $selectedItem[0].innerHTML;
      console.log(category);
      var getQuoteCategories = {
        type: 'get',
        url: 'http://quotes.rest/quote/image.json?category='+category+'&api_key=OCkgYvFtihssB_3SP894SQeF',
        length: 500,
        dataType: 'json',
        success: function(data) {
          console.log('Pulled from API!!');
          console.log(data.contents.qimage.download_uri);
          var quoteImage = data.contents.qimage.download_uri;
          $("#api-quote").prop("src", quoteImage);
        },
        error: function(error) {
          console.log('Something did not happen as intended');
        }
      };
      $.ajax(getQuoteCategories);
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
