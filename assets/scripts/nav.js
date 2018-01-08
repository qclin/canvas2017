var projectKey = location.pathname.split('/')[2]

function openNav() {
    $('nav').css('width', '250px');
    $(`[data-key=${projectKey}]`).eq(0).addClass('highlight');

}

function closeNav() {
    $('nav').css('width', '0px');
}
