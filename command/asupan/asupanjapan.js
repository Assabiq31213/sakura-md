module.exports = {
	name: "asupanjapan",
	alias: ["asupanjapan"],
	category: "asupan",
	isSpam: true,
	async run({ msg, conn }) {
		await msg.reply(response.wait);
		const buttons = [{ buttonId: "#asupanjapan", buttonText: { displayText: "Get Again" }, type: 1 }];
		const buttonMessage = {
			image: { url: 'https://api.zacros.my.id/asupan/japan' },
			caption: "Nih kak",
			footer: "Sakura-Botz - By BiqqTzy",
			buttons: buttons,
			headerType: 4,
		};

		await conn.sendMessage(msg.from, buttonMessage);
	},
};