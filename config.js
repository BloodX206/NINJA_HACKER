const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEtibVJlV2VSeVl6S3JiZzZiUUJmdjV2azA1ZXBpR2l1Zkh0SDFQQ0Mwbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTkFEMTBJa0VTRFp2a0xpUGNMc2owZnFRSHNiUkk0V1VsaGMzMzZwY0J5WT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3R3lKZmdCZkZuVVdTSk4wZktXNW9BS20vVndQaURLUHBSYVQ1eWJXK253PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4RmthVGJxa1J6T0xKbDFudlBtMzNuaDhPZHBXR0FiVDArclJpSVZ1bXdVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFHUWo0dTRSdmRmSHBvSkhyalYxYS90N3drL0dmV1o5WjNuRE5hUEN5WGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtpQi9NbWJIdE5rL2FRU0VYQ0pTbGR5VWpEYTdlT2RzRzloRmNiazd2QVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUFYd0VYMUdsWHhWekZCZFdNTzRpV3VoRmgvMmlXbXBDTWd4YzJraXZGVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUc1MVUyZDRaWjRuOUFkbUpBcDFmajNSTEcybDlvRFlrT1R1cjgvMmNrMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJXWmQ1WFJ6SnVEYXRzb1pvdGdNYVRNam9lQU1GRllpcUJmemdNZ3k4RlFJcVI4QzBQZ0k3OU8zTmphSVprb1pVQkVDTStkc0lCbVROSFl3VWc5YmpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTksImFkdlNlY3JldEtleSI6InJ6SjRCT1Q3dUNuOTQ4dTQ5enozaFFwS1M4K0YwYjAwRU9lcFMrZjNXUDQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjVBTDFNSEdWIiwibWUiOnsiaWQiOiI5MjMwNzM2NjA0Nzk6MjBAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxMTA1MzU3OTg0Njg2MzM6MjBAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNR2szdkVIRUthZHhzWUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJPYlRKUGNmRFFGZzBxOHJhbzNKYURvczZQU2dtd1VuRVBpdm5YQjhubGtRPSIsImFjY291bnRTaWduYXR1cmUiOiJqcjdwVnEyb1YyZ3d1amwzSTNXNmc3VHJNVjViWUE5Q2xzNEp5SElJdzJKUXdzZmdIbGJnZlJnT1VYZWlua29NRkVFazZJalhpeDdsemJzdkw2VVJCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRi9aWkE4WksyMHRELzYyQ0tYOVh0eDY1OTdLQXIzaGs3QWR4TVFORk1aYXpEYkExWHhxV1ZTYVFDUWJwS01oUlQ0UW9HdmlGdkhGS0NZRFN5VkcxaEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMwNzM2NjA0Nzk6MjBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVG0weVQzSHcwQllOS3ZLMnFOeVdnNkxPajBvSnNGSnhENHI1MXdmSjVaRSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU4NTY0MDA5LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUifQ==",
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
