chrome.extension.sendMessage({}, function (response) {
    var readyStateCheckInterval = setInterval(function () {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);

            $("input,textarea").each(function (index) {
                var html="<div class='wordcount' id=charactercount"+index+"></div>";
                $(this).after(html);
            });
            $("input,textarea").on('keyup', function (e) {

                var charCount = $(this).val().trim().length;
                var dynamicId=$(this).next().attr('id')
                console.log(dynamicId)
                $("#"+dynamicId).text("Word: "+charCount)
                //$(this).after(charCount)


            });


        }
    }, 10);
});