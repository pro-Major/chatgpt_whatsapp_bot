import { oraPromise as spinner } from "ora";
import { ChatGPTAPIBrowser } from "chatgpt";
import whatsapp_web from "whatsapp-web.js";
const { Client } = whatsapp_web;
import qr_code from "qrcode-terminal";
// config.js
import dotenv from "dotenv";
dotenv.config();

async function main() {
  //--------------------ChatGpt Configuration--------------------//
  const api = new ChatGPTAPIBrowser({
    email: process.env.OPEN_AI_EMAIL,
    password: process.env.OPEN_AI_PASSWORD,
    isGoogleLogin: true,
    debug: false,
    minimize: false,
  });
  api.initSession();
  //--------------------ChatGpt Configuration Ends--------------------//

  //--------------------Whatsapp configuration--------------------//
  //Whatsapp Web client configuration
  const client = new Client();

  //When QR Code is Generated
  client.on("qr", (qr) => {
    qr_code.generate(qr, { small: true });
    console.log("QR Code Generated Successfully");
  });
  //when QR Code Scanned Successfully
  client.on("ready", () => {
    console.log("Client is ready!");
  });
  //When A Message Received
  client.on("message", async (message) => {
    //Any message received with first word # will be sent to the Chat GPT.
    if (message.body.startsWith("#")) {
      await sendMessageToGPT(message.body)
        .then((result) => message.reply(result))
        .catch(() =>
          message.reply("Something went wrong❗️, please try again later.⏰")
        );
    }
  });
  //Initialize
  client.initialize();
  //--------------------Whatsapp configuration Ends--------------------//

  const sendMessageToGPT = async (message) => {
    try {
      const res = await spinner(api.sendMessage(message), {
        text: message,
      });
      return res.response;
    } catch (error) {
      return error;
    }
  };
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
