$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#button-cancel').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const endereçoNovaImg = $('#endereço-img-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${endereçoNovaImg}" />`).appendTo(novoItem);
        $(`
            <div clas="overlay-imagem-link"> 
            <a href="${endereçoNovaImg}" target="_blank" title="ver imagem em tamanho real">
                Ver imagem em tamanho real
                </a>
            </div>`
        ).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn();
        $('#endereço-img-nova').val('');
    })
})