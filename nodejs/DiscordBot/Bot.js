const Discord = require("discord.js");
const client = new Discord.Client();
client.login("NTEzNjE0MzI2NTY1OTYxNzI5.DtKwAw._vBNEBF47vUrOk-oY2geNOafS5M");

console.log('Бот запущен');

var prefix1 = '++'



client.on('message', (message) =>{
if(message.content == "")
{
message.channel.send("");
}
}
);


client.on('message', (message) =>{
if(message.content == prefix1 + "TEST")
{
message.channel.send("Тест удался!");
}
}
);

client.on('message', (message) =>{
if(message.content == prefix1)
{
message.channel.send("Я ебу собак");
message.channel.send("Всегда готов");
message.channel.send("Трахнуть сразу несколько котов");
}
}
);





client.on('message', (message) =>{
if(message.content == "SPAM-BOT")
{
message.channel.send("SPAM-BOT");
}
}
);

client.on('message', (message) =>{
if(message.content == "Привет")
{
message.channel.send("Привет. А выпить нет?");
}
}
);


client.on('message', (message) =>{
if(message.content == "Да")
{
message.channel.send("Пизда");
}
}
);


client.on('message', (message) =>{
if(message.content == "Нет")
{
message.channel.send("Пидора ответ");
}
}
);


client.on('message', (message) =>{
if(message.content == "Что?")
{
message.channel.send("Хуй через плечо");
}
}
);

client.on('message', (message) =>{
if(message.content == "300")
{
message.channel.send("Отсаси у тракториста");
}
}
);