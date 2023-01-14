<h1> Whatsapp Integration with Chat Gpt AI </h1>

<ul> 
<li> Create a .env file add credential of Google or Chat gpt for OPEN_AI_EMAIL and OPEN_AI_PASSWORD </li>
<li> Need Node Js v18 or higher </li>
<li> If you face any problem like this<span >  TypeError: Cannot read properties of undefined (reading 'LegacyPhoneFeatures') </span> Go to node_modules/whatsapp-web.js/src/utils/Injected.js and comment this line <span> window.Store.Features = window.mR.findModule('FEATURE_CHANGE_EVENT')[0].LegacyPhoneFeatures; </span> </li>
<li> To send a message to Chat Gpt use '#' as first word in whatsapp follow by the question.</li>
</ul>
