export function animatedScroll() {
    $('a[href *= \\#]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $("[name = '+this.hash.slice(1) + ']");
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html, body').animate({
                    scrollTop: targetOffset - 80
                }, 1000);
            }
        }
    });


}

export function showSpanModelTrained() {
    var $train_model_span = $('#train-model').find('span');
    $train_model_span.css('display', 'block');
    setTimeout(function() {
        $train_model_span.css('display', 'none');
    }, 3000);
}