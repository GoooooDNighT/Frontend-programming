/* Burger */
document.getElementById('burger').onclick = function () {
    document.getElementById('header-menu').classList.add('open');
}
document.querySelectorAll('#header-menu > *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('header-menu').classList.remove('open');
    }
})

$(function () {
    let header = $("#header")
    let headerContainerH = $("#header-container").innerHeight();
    let scrollOffset = $(window).scrollTop();

    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if(scrollOffset >= headerContainerH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* Smooth scroll */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let $this = $(this);
        let blockId = $this.data('scroll');
        let blockOffset = $(blockId).offset().top;

        $("#header-menu a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });
});


let button = document.querySelectorAll(".order");
button.forEach(function(button) {
    button.addEventListener("click", function() {
        swal({
        title: "Отличный выбор!",
        text: "Ожидайте заказ",
        icon: "success",
        button: "OK",
    });
    })
});

