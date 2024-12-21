$(document).ready(function () {
  $(".toggle-icon").click(function () {
    $(".mobile-links").toggle();
  });

  $(".nav-links li a").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("scroll")).offset().top,
      },
      1000
    );
  });
});

function updateProgress(selector, percent, label) {
  $(selector)
    .find(".progress-circle")
    .css("background", `conic-gradient(#6c63ff ${percent}%, #d3d3d3 0%)`);
  $(selector).find(".inner-circle span").text(`${percent}%`);
  $(selector).find(".progress-text").text(label);
}

// Example usage
updateProgress(".progress-item:nth-child(1)", 95); // Updates the first circle and text
updateProgress(".progress-item:nth-child(2)", 80); // Updates the second circle and text

// counter

$(document).ready(function () {
  $(".counter").each(function () {
    let $this = $(this),
      target = +$this.data("target"),
      current = 0;
    let interval = setInterval(
      () =>
        $this.text(
          (current += Math.ceil(target / 90)) >= target
            ? (clearInterval(interval), target + "+")
            : current + "+"
        ),
      20
    );
  });
});

$(document).ready(function () {
  $(".testimonials-card .star").on("click", function () {
    const $card = $(this).closest(".testimonials-card");

    const rating = $(this).data("rating");
    $card.find(".star").removeClass("active");

    $card.find(".star").each(function () {
      if ($(this).data("rating") <= rating) {
        $(this).addClass("active");
      }
    });
  });
});

$(window).on("scroll", function () {
  $("#scrollToTop").toggleClass("show", $(this).scrollTop() > 800);
});

$("#scrollToTop").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, "smooth");
});
