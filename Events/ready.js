module.exports = async (client) => {
  
  console.log(`
Aplication is ready!
Name: ${client.user.tag}
Server: ${client.guilds.cache.size}
Members: ${client.guilds.cache.map((g) => g.memberCount || 0).reduce((x, y) => x + y, 0)}
`);
  
}
