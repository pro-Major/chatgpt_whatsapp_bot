<h1> Whatsapp Integration with Chat Gpt AI </h1>
<p> 
This script is a simple chatbot that uses the ChatGPTAPI and WhatsApp Web.js library to create a bot that can respond to messages sent in WhatsApp.

The script first imports the necessary modules, including the "ora" module for creating spinners, the ChatGPTAPIBrowser for connecting to the ChatGPT API, and the "whatsapp-web.js" library for connecting to WhatsApp Web.

It then sets up the ChatGPT API by initializing a new instance of the ChatGPTAPIBrowser class and passing in the email, password, and other configuration options. It also starts a session with the API.

Next, it sets up the WhatsApp Web client by initializing a new instance of the Client class and defining event handlers for QR code generation, successful scanning, and incoming messages. It also initializes the client.

Finally, the script defines a function "sendMessageToGPT" that takes in a message, sends it to the ChatGPT API, and returns the response. This function is called when a message is received that starts with "#".

The main function calls this and catches any errors that occur.

The script requires the following environment variables to be set:

OPEN_AI_EMAIL
OPEN_AI_PASSWORD
It requires that the user first scan a QR code to connect to their WhatsApp account, and will respond to messages sent in WhatsApp that start with "#" by sending the message to the ChatGPT API and sending the response back as a reply to the original message.</p>

<ul> 
<li> Create a .env file add credential of Google or Chat gpt for OPEN_AI_EMAIL and OPEN_AI_PASSWORD </li>
<li> Need Node Js v18 or higher </li>
<li> If you face any problem like this<span >  TypeError: Cannot read properties of undefined (reading 'LegacyPhoneFeatures') </span> Go to node_modules/whatsapp-web.js/src/utils/Injected.js and comment this line <span> window.Store.Features = window.mR.findModule('FEATURE_CHANGE_EVENT')[0].LegacyPhoneFeatures; </span> </li>
<li> To send a message to Chat Gpt use '#' as first word in whatsapp follow by the question.</li>
</ul>
