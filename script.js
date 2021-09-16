document.getElementById('send').addEventListener('click', () => {
    var phone = document.getElementById('phone').value
    var message = document.getElementById('message').value
    console.log('Enviando...')

    sendSMS('teste', '021966767962')
    // sendSMS(message, phone)
})

function sendSMS(message, number) {
    let APIkey = 'akFGa1dQVEk0R0tvZW5SYjZJTkJiMWlHbm1nRWxoUGg='
    let BaseURL = "https://api.nvoip.com.br/v2/sms"

    let URL = BaseURL + "?napikey=" + APIkey

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    var bodyParameters = {
        numberPhone: number,
        message: message,
        flashSms: false,
    }

    var parameters = { method: 'POST', headers: headers, body: JSON.stringify(bodyParameters)}

    fetch(URL, parameters)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
}