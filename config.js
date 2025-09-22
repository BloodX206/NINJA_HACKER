const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUpNQW1HakdVRThRWkNyRzQzcWtwRjVnaHI5d2NheXZaMzF5V3dqQXdFST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiemhPYWpaRmdYYlZNU3h0R3VJbkZkbTBWNnBpamJPejVKTlJiY0MxeElHUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrUDBCbHNDQ0JGaVZpRVU0UFBJZ3BITUY0ckFaTnNEZnRhcDB6cWFlTVZRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4YTF5bWxvdjFlS28xVDU1SG95Y0RrN2xRbWkxU3FKamxSK0tNSzZ2YWw0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNKWS9pOXdVbjRzaXZqZ1ZyZElTV3ZZQy9PMWdhMWxoWno1bmFLbzQzR3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlKUVBDM2Q4M3dYc3JaYUQrNWRkOEVjYVhJNTgvNHFNNVcyMTB6ekszMVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU8rejI3L1dNaDJMVWg0ZVl2bXczSHcyckpaZWtZODlDL0ozcDlLeTZIRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiKy9mUHl0YzhERXJvV3doWTdGWlArazVINkJGaElMeXpBdk5SK2ZnQ0FWbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik00eTZic1hWblhLaTZWMWowdHVQZC9xUiszQ2NSQnhOcTIreEFZaVN1Mm5KN1VIUm5YTmFub3lPS3hrb0EreTk1dXFyZXc3N1M2UHNEbHJWdVRtZGhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI5LCJhZHZTZWNyZXRLZXkiOiJzYnAybzQwR1BKdVJyZE5LTXN0eGQ5RG9QV0tpS2IzWFZFQlhmNUkvcnowPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiIxS0E3WVRXRCIsIm1lIjp7ImlkIjoiOTIzMDczNjYwNDc5OjIxQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTEwNTM1Nzk4NDY4NjMzOjIxQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTUtrM3ZFSEVJSEx4c1lHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiT2JUSlBjZkRRRmcwcThyYW8zSmFEb3M2UFNnbXdVbkVQaXZuWEI4bmxrUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTklrTlNqNEwzUnhnOTd6MEtObkYwczhKU3diRTFDWHdZemVvdXREaVZIQWYxeUJsZWpCZVdRYnNuOGpOVVIrZkYzdUxjd2F2RGNWTkZKdzQxNjltREE9PSIsImRldmljZVNpZ25hdHVyZSI6Ijc5RXhTY2NvUEMvampJYTR4TE9uSmhSRDdRUHB6SjJvTXFpNGV2ODNhNERFMG5rSlFVRG1YcHdrWC9jRzF6MGRibVdHZnNtbkU4QUU5WndVeG5sdGp3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMDczNjYwNDc5OjIxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRtMHlUM0h3MEJZTkt2SzJxTnlXZzZMT2owb0pzRkp4RDRyNTF3Zko1WkUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1ODU2OTg2MCwibGFzdFByb3BIYXNoIjoiMlY3N3FVIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS 5G SPEED BY 𝗳† 𝗦𝘆Ə𝗱💀🥂*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/ccxpv1.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "NINJA_HACKER",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "NINJA_HACKER",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923073660479",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "NINJA_HACKER Official",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©POWERED BY NINJA_HACKER*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/ccxpv1.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive *NINJA_HACKER*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923073660479",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
