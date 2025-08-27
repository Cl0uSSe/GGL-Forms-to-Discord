# 📋 GGL-Forms-to-Discord 📨

Google Form → Discord WebHook Embed  

This script was created by **Cl0uSSe**. It takes submissions from a Google Form and posts them as embeds in a Discord channel via a WebHook.  

Ce script a été créé par **Cl0uSSe**. Il permet d’envoyer les réponses d’un Google Form dans un salon Discord via un WebHook.  

---

## 🛠️ Requirements / Prérequis

- A Discord server / Un serveur Discord  
- The **“Manage Webhooks”** permission / La permission **« Gérer les webhooks »**  
- A WebHook URL / Un lien WebHook  
- A Google Form / Un formulaire Google  

---

## 🔧 Installation / Comment l’installer ?

### Step 1 / Étape 1  
EN: Create your Discord channel.  
FR: Crée ton salon Discord.  

### Step 2 / Étape 2  
EN: In your channel settings, go to **Integrations** → **Create WebHook** (customize it as you like).  
FR: Dans les paramètres de ton salon, va dans **Intégrations** → **Créer un WebHook** (modifie-le comme tu veux).  

### Step 3 / Étape 3  
EN: Copy the WebHook URL.  
FR: Copie l’URL du WebHook.  

### Step 4 / Étape 4  
EN: On your Google Form, click the three dots (top-right corner) → **Apps Script**.  
FR: Sur ton formulaire, clique sur les 3 petits points (en haut à droite) → **Apps Script**.  

### Step 5 / Étape 5  
EN: Paste the script into the Apps Script editor and configure it.  
FR: Colle le script dans l’éditeur Apps Script et configure-le.  

### Step 6 / Étape 6  
EN: Replace `"discord_webhook"` in the script with your WebHook URL.  
FR: Remplace `"discord_webhook"` dans le script par ton lien WebHook.  

### Step 7 / Étape 7  
EN: In the left sidebar, go to **Triggers** → **Add Trigger** (bottom-right corner).  
FR: Dans la barre latérale gauche, va dans **Déclencheurs** → **Ajouter un déclencheur** (en bas à droite).  

### Step 8 / Étape 8  
EN:  
- Set **Select event type** → **On form submit**  
- Under **Failure notification settings**, choose **Notify me immediately**  

FR:  
- Mets **Sélectionnez un type d’événement** → **Lors de l’envoi du formulaire**  
- Dans **Paramètres de notification d’échec**, mets **Recevoir une notification immédiatement**  

### Step 9 / Étape 9  
EN: Click **Save**, choose your Google account, then click **Advanced** → **Go to Project** → **Allow**.  
FR: Clique sur **Enregistrer**, choisis ton compte Google, puis clique sur **Avancé** → **Accéder au projet** → **Autoriser**.  

### Step 10 / Étape 10  
EN: Submit a test response — it should work! If not, repeat the steps.  
FR: Fais un essai — ça devrait marcher ! Sinon, refais les étapes.  

---

## 📜 Credits / Crédits  

- Cl0uSSe

---