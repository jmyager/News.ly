// Grab the articles as a json
$.getJSON("/articles", function (data) {
  // For each one
  for (var i = 0; i < data.length; i++) {
    // Display the apropos information on the page
    $("#articles").append(
      `
    <div class='card'>
      <div class='card-body'>
        <h5 class='card-title'>${data[i].title}</h5>
        <a data-id='${data[i]._id}' class='card-text' src='${data[i].link}'><button>Read More</button></a>
        <button data-id='${data[i]._id}' id="save">Save Article</button>
      </div>
    </div>
    `)
  }
});


$(document).on("click", "#save", function() {
  console.log("button registered");
  var thisId = $(this).attr("data-id");

  $.ajax({
    method: "POST",
    url: "/save-article/" + thisId,
    data: {
      saved: false
    }
  })
    // With that done
    .then(function (data) {
      // Log the response
      console.log(data);
      // Empty the notes section
    });
});




