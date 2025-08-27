const webhooks = ["discord_webhook"]; // Link Webhook discord

const title = "your_title"; // Title
const avatarImage = "your_image"; // Image
const shortDescription = "your_description"; // Descript
const colour = "#0c146e"; // Embed Color (HTML code)
const mention = "your_mention"; // Ping role : <&ID> || Ping user : <@ID>

const form = FormApp.getActiveForm();
const allResponses = form.getResponses();
const latestResponse = allResponses[allResponses.length - 1];
const response = latestResponse.getItemResponses();
var items = [];

if (!webhooks) throw "The link is invalid.";

function embedText(e) {
    for (var i = 0; i < response.length; i++) {
        const question = response[i].getItem().getTitle();
        const answer = response[i].getResponse();
        if (answer == "") continue;
        items.push({ "name": question, "value": answer });
        function data(item) { return [ `__**${item.name} :**__`, `${item.value}` ].join("\n"); }
    }

    try {
        const embed = {
            "method": "post",
            "headers": { "Content-Type": "application/json" },
            "muteHttpExceptions": true,
            "payload": JSON.stringify({
                "content": (mention) ? `${mention}` : " ",
                "embeds": [{
                    "title": (title) ? title : form.getTitle(),
                    "thumbnail": {
                        "url": encodeURI(avatarImage)
                    },
                    "color": (colour) ? parseInt(colour.substr(1), 16) : Math.floor(Math.random() * 16777215),
                    "description": (shortDescription) ? `${shortDescription}\n\n${items.map(data).join('\n\n')}` : items.map(data).join('\n\n'),
                    "timestamp": new Date().toISOString(),
                }]
            })
        };

        for (var i = 0; i < webhooks.length; i++) {
            UrlFetchApp.fetch(webhooks[i], embed);
        }

        form.deleteResponse(latestResponse.getId()); // If you don't want the script to delete the answers from the form, delete this line.
    } catch (error) {
        Logger.log(error);
    }
}

