$(document).ready(function() {
    var txt = $('.content')[0].textContent,
    wordCount = txt.replace( /[^\w ]/g, "" ).split( /\s+/ ).length;

    var readingTimeInMinutes = Math.floor(wordCount / 250) + 1;
    var readingTimeAsString = readingTimeInMinutes + " min";
    $('article .reading-time').html(readingTimeAsString);
});