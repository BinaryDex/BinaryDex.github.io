let message = {
    messages: [
        '4ever undetected ', 
        'forever destroying project delta ', 
        'octohook best scwipt >_< ', 
        'destroying ars since release ', 
        'https://www.youtube.com/watch?v=78i0lQRMLqg    ', 
        '#1 project delta script since 2021 ',
        'best femboys ever :3 ', 
        'ice was here ', 
        'forever unhittable ', 
        'grrrrrrrrr ', 
        'octohook > all ', 
        'femboys >>> '
    ],
    up: true,
    index: 0,
    count: 0,
    start: function() {
        message.interval = setInterval(() => {
            if (message.count == message.messages[message.index].length) {
                message.up = false
                clearInterval(message.interval)
                setTimeout(message.start, 750)
            } else if (message.count == 1) {
                message.up = true
                message.index = message.index == message.messages.length -1 ? 0 : ++message.index
            }

            message.count = message.up ? ++message.count : --message.count
            document.getElementById('index_message').textContent = message.messages[message.index].slice(0, message.count)
        }, 75);
    }
}

message.start()
