const { cmd } = require('../command');

cmd({
    pattern: "kick",
    alias: ["remove", "k"],
    desc: "Instantly remove any member (even admins)",
    category: "admin",
    react: "🗑️",
    filename: __filename
},
async (Void, citel, text) => {
    try {
        if (!citel.isGroup) return citel.reply("❌ BETA TO ADMIN NHI HA TO APNI OKkAT MN REH🤫!");

        // Get target user (quoted/mentioned)
        const target = citel.quoted?.sender || citel.mentionedJid?.[0];
        if (!target) return citel.reply("❌ Reply to a message or mention a user!");

        // Force remove (no admin checks)
        await Void.groupParticipantsUpdate(citel.chat, [target], "remove");

        // Success message
        await citel.reply(`🚫 @${target.split('@')[0]} has been kicked!`, {
            mentions: [target]
        });

    } catch (error) {
        console.error("[KICK ERROR]", error);
        citel.reply("❌ Failed to kick. Maybe user is a super-admin?");
    }
});
