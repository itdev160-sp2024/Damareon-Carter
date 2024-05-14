var messages = [];
var messageType = {
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message'
};
var data = [
    {
        type: messageType.out,
        user: 'John',
        message: 'Hey, Im at the store. You need anything?'
    },
    {
        type: messageType.in,
        user: 'Kyle',
        message: 'Just some doritos'
    },
    {
        type: messageType.out,
        user: 'John',
        message: 'Alright'
    }
];

function Message(type, user, message)
{
    this.type = type;
    this.user = user;
    this.message = message;
}
function createMessageElement(message)
{
    var messageText = document.createTextNode(
        message.user + ': ' + message.message
    );
    var messageElement = document.createElement('div');

    messageElement.appendChild(messageText);
    messageElement.className = message.type;

    return messageElement;
}
function addMessageHandler(event)
{
    var user, type;
    var messageInput = document.getElementById('message-input');
    var messageContainerElement = document.getElementById('message-container');

    switch (event.target.id)
    {
        case 'send-button':
            user = 'John';
            type = messageType.out;
            break;
        case 'reply-button':
            user = 'Kyle';
            type = messageType.in;
            break;
        default:
            user = 'unknown';
            type = messageType.unknown;
    }

    if (messageInput.value != '')
    {
        var message = new Message(type, user, messageInput.value);
        messages.push(message);

        var element = createMessageElement(message);
        messageContainerElement.appendChild(element);

        messageInput.value = '';
    }
}

function loadSeedData()
{
    for (var i = 0; i < data.length; i++)
    {
        var message = new Message(data[i].type, data[i].user, data[i].message);
        messages.push(message);
    }

    var messageContainerElement = document.getElementById('message-container');

    for (var i = 0; i < messages.length; i++)
    {
        var message = messages[i];
        var element = createMessageElement(message);
        messageContainerElement.appendChild(element);
    }
}

var init = function()
{
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;
    loadSeedData();
}

init();