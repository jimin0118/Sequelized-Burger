$('#submitBtn').click((event) => {
    event.preventDefault();
    const burger_name = $('#burger_name').val()
    
    $.ajax({
        type: 'POST',
        url: '/',
        data: {burger_name: burger_name}
    }).then(function(){ 
        location.reload()
    })
})

$('.devour-btn').click((event) => {
    event.preventDefault();
    console.log('clicked!')
    const id = $(event.currentTarget).attr('data-id')
    console.log(id)

    $.ajax({
        type: 'PUT',
        url: '/',
        data: {id: id}
    }).then(function(){ 
        location.reload()
    })
})