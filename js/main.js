// GET the current Year of the copyright
$("#year").text(new Date().getFullYear());

// INIT SCROLL SPY
$("body").scrollspy({
    target: "#main-nav"
});

// SMOOTH SCROLLING
$("#main-nav a").on("click", function(event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top
            },
            800,
            function() {
                window.location.hash = hash;
            }
        );
    }
});
