let countValue = 0

document.getElementById('count').innerHTML = countValue

$('#up').on('click', () => {
    countValue = countValue+1
    document.getElementById('count').innerHTML = countValue
})

$('#down').on('click', () => {
    countValue = countValue-1
    document.getElementById('count').innerHTML = countValue
})