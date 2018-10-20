$(function () {
    $(document.body).click(function(e) {
        $(".drop-down-menu").removeClass("open");
    });
    $(".drop-down-menu").each(function() {
        var $title = $(this).find(".title");
        $(this).click(function(e) {
            e.stopPropagation();
            var hasClass = $(this).hasClass("open");
            $(".drop-down-menu").removeClass("open");
            if(!hasClass) {
                $(this).addClass("open");
            }
        });
        $(this).find("li").click(function() {
            $title.text($(this).text());
        });
    });

    $(".randomize-button").click(function() {

        genre = $("#genre .title").text().toLowerCase();
        year = $("#year .title").text().toLowerCase();
        rating = $("#rating .title").text().toLowerCase();

        items = [];
        $('.anime').each(function() {

          if (genre != 'genre' && genre != $(this).attr("genre")) {
            return true;
          }
          if (year != 'year' && year != $(this).attr("year")) {
            return true;
          }
          if (rating != 'rating' && rating != $(this).attr("rating") ) {
            return true;
          }
          var index = $(this).index() + 1;
          if(index != 16) {
            items.push(index);
          }

          });
        console.log(items);
        if(items.length == 0) {
          item = 16;
        } else {
          item = items[Math.floor(Math.random() * items.length)];
        }
        console.log(item);

        $('.anirandom .anime').removeClass('show');
        $(".anirandom .anime:nth-child(" + item + ")").addClass("show");
      });
});
