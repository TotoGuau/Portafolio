$(document).ready(function () {
    $('#copyBtn').on('click', function () {
        navigator.clipboard.writeText('hectorsolo.04@gmail.com')
        .then( function(){
            $('#copyBtn').text('Copiado!');
            setTimeout(() => {
                $('#copyBtn').text('Copiar')
            }, 1000);
        });  
    });
    $('#navBtn1').on('click', function () {
        $('#view').load('/views/about.html');
    });
    $('#navBtn2').on('click', function () {
        $('#view').load('/views/projects.html');
    });
    $('#navBtn3').on('click', function () {
        $('#view').load('/views/abilities.html');
    });
});