import discord
from discord.ext import commands

# Activer les intents membres et messages
intents = discord.Intents.default()
intents.members = True
intents.messages = True

# Initialiser le client
client = commands.Bot(command_prefix='!', intents=intents)

# Envoyer un message de bienvenue aux nouveaux arrivants et leur assigner un rôle
@client.event
async def on_member_join(member):
    channel = client.get_channel(1083900367479242814) # Remplacez le numéro de canal par l'ID du canal où vous souhaitez envoyer le message
    await channel.send(f"Voilà du renfort, {member.mention} est désormais des nôtres !")
    
    role = discord.utils.get(member.guild.roles, name='Membre') # Remplacez "Nom du rôle" par le nom du rôle que vous souhaitez attribuer
    await member.add_roles(role)

# Envoyer un message d'adieu aux utilisateurs qui quittent le serveur
@client.event
async def on_member_remove(member):
    channel = client.get_channel(1085832847669080134) # Remplacez le numéro de canal par l'ID du canal où vous souhaitez envoyer le message
    await channel.send(f"{member.display_name} vient de déserter.")

# Lancer le bot
client.run('NzAyMDc3NTkwNjAwNDE3MzMx.G-ATZk.4NPlAJF03B6wQxYfzeJT7WpJnW9EJ6iY7aV5ug') # Remplacez "TOKEN" par votre token de bot Discord
