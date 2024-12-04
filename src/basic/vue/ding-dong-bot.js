import Wechaty, { ScanStatus, log } from "wechaty";
import qrcodeTerminal from "qrcode-terminal";

const botName = "DingDongBot";

function onScan(qrcode, status) {
  if (status === ScanStatus.Waiting || status === ScanStatus.Timeout) {
    qrcodeTerminal.generate(qrcode, { small: true });
  }
}

function onLogin(user) {
  log.info(botName, "%s login", user);
}

function onLogout(user) {
  log.info(botName, "%s logout", user);
}

async function onMessage(message) {
  log.info(botName, message.toString());

  if (message.text() === "ding") {
    await message.say("dong");
  }
}

// initializing the bot

const bot = new Wechaty({
  name: botName,
});

bot
  .on("scan", onScan)
  .on("login", onLogin)
  .on("logout", onLogout)
  .on("message", onMessage);

bot
  .start()
  .then(() => log.info(botName, "Bot startd!"))
  .catch((e) => log.error(botName, e));
