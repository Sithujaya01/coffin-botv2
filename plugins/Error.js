let handler = async (m, { conn, command, text, usedPrefix }) => {
    
  //  conn.sendMessage(m.chat, { react: { text: `❎`, key: m.key }})
 
    
    const name = m.pushName

     if(!text) return m.reply(`What Product do you going to order ?`)

   conn.sendButton(m.chat, `හිතවත් පාරිභෝගිකය "${name}, 

   අප විසින් ජයරත්න පාරිභෝගික ඔබලාට මේ වනවිට ලබා දී ඇති ᴄᴏꜰꜰɪɴ ʙᴏᴛ මගින් ජයරත්න නිශ්පාද පිලිබඳ විස්තර බලා ගැනීමට, ඒවා මිලදී ගැනීමට හැක. මෙම ʙᴏᴛ මගින් ᴠɪᴅᴇᴏ, ɪᴍᴀɢᴇ, ꜱᴏɴɢ ලබා ගත නොහැකි අතර එම නිසා එම ᴄᴏᴍᴍᴀɴᴅ භාවිතා නොකරන්න. ස්තුතියි !.... 
  
   -ᴊꜰ ᴛᴇᴀᴍ`, `ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ.ᴠ`, null, [['ᴍᴇɴᴜ', `.menu`]], m)


     
     
     }
 
 handler.command = /^(song|video|yt|fb|ig|facebook|play|effectimg|textlogo|)$/i
 export default handler