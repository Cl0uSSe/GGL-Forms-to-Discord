const webhooks = ["discord_webhook"]; // Lien du Webhook discord (Obligatoire)

const title = "your_title"; // Le titre de votre formulaire (Facultatif)
const avatarImage = "your_image"; // Une image pour votre Webhook (Facultatif)
const shortDescription = "your_description"; // Une description selon vos envies (Facultatif)
const colour = "#0c146e"; // Couleur du embed (Obligatoire en code HTML)
const mention = "your_mention"; // Mentionner un rôle : <&ID> || Mentionner un utilisateur : <@ID>

const form = FormApp.getActiveForm();
const allResponses = form.getResponses();
const latestResponse = allResponses[allResponses.length - 1];
const response = latestResponse.getItemResponses();
var items = [];

if (!webhooks) throw "Vous avez oublié le lien du webhook.";

function embedText(e) {
    for (var i = 0; i < response.length; i++) {
        const question = response[i].getItem().getTitle();
        const answer = response[i].getResponse();
        if (answer == "") continue;
        items.push({ "name": question, "value": answer });
        function data(item) { return [ `__**${item.name} :**__`, `${item.value}` ].join("\n"); } // Vous ne voulez pas que les questions soient surlignées et en gras ? Retirez les __ et **
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

        form.deleteResponse(latestResponse.getId()); // Vous ne voulez pas que le formulaire se supprime automatiquement ? Retirez cette ligne
    } catch (error) {
        Logger.log(error);
    }
}

