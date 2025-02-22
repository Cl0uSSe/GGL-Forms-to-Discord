# 📋 GGL-Forms-to-Discord 📨

Formulaire Google qui envoie les réponses sur Discord.

Script créé par Cl0uSSe dans le cadre d'une saisie sur un formulaire Google qui envoie un embed dans un salon Discord grâce à un WebHook.

## 🛠️ Prérequis :
- Un serveur Discord
- La permission "Gérer les webhooks" sur Discord
- Un lien WebHook
- Un formulaire Google

## 🔧 Comment l'installer ?

> **Étape N°1** : Crée ton salon Discord
>
> **Étape N°2** : Dans les paramètres de ton salon Discord, va dans "Intégrations" puis crée un WebHook (modifie-le comme tu le souhaites).
>
> **Étape N°3** : Copie l'URL du WebHook
>
> **Étape N°4** : Va sur ton formulaire, dans les 3 petits points en haut à droite, va dans "Apps Script"
>
> **Étape N°5** : Colle le script dans l'éditeur de l'Apps Script puis configure-le comme tu le veux
>
> **Étape N°6** : Mets ton WebHook, le lien de ton WebHook à la place de `"discord_webhook"`
>
> **Étape N°7** : À gauche, tu as une barre latérale, va dans les déclencheurs et fais "Ajouter un déclencheur" en bas à droite
>
> **Étape N°8** : Modifie le "Sélectionnez un type d'événement" et mets en "Lors de l'envoi du formulaire". Pour "Paramètres de notification d'échec", mets "Recevoir une notification immédiatement" (tu n'auras aucun mail à ce propos)
>
> **Étape N°9** : Fais "Enregistrer", choisis ton compte Google (de préférence celui avec lequel tu as créé ton formulaire), fais "Advanced" en bas à gauche de la fenêtre (c'est sécurisé, ne t'en fais pas) et fais "Go to Project" puis "Allow"
>
> **Étape N°10** : Fais un essai, et ça marche ! Sinon, refais toutes les étapes.

## 📜 Crédits :

- > Cl0uSSe

## 🆘 Besoin d'aide ?

Contacte-moi via l'adresse mail suivante :
a.cl0usse@gmail.com
