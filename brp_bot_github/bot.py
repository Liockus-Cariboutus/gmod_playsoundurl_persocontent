import discord
import random
from discord.ext import commands

# Activer les intents membres et messages
intents = discord.Intents.default()
intents.members = True
intents.messages = True

# Initialiser le client
client = commands.Bot(command_prefix='!', intents=intents)

# Messages de bienvenue aléatoires
welcome_messages = ["{0.mention} vient de sortir du camion de renforts.",
                    "Voilà du renfort, {0.mention}, est désormais des nôtres !",
                    "Nouvel effectif sur place. {0.mention} vient se joindre au déploiement !",
                    "Bienvenue, {0.mention} !",
                    "{0.mention} apparaît en ces terres d'incertitudes. La seule chose qui est sûre, c'est que sa présence consolidera nos effectifs.",
                    "Enregistrement de {0.mention} sur le front effectif à partir de maintenant.",
                    "Nous ne sommes jamais assez nombreux à vouloir accroître nos effectifs. C'est ce qu'a compris {0.mention} en se joignant à nous !",
                    "Nous avons de la visite, camarades ! {0.mention} est des nôtres !"]

# Messages de départ aléatoires
goodbye_messages = ["{0.display_name} vient de déserter les lieux.",
                    "Porté disparu, {0.display_name} subsiste comme introuvable.",
                    "{0.display_name} a disparu.",
                    "Alors, on déserte, {0.display_name} ?",
                    "C'est fâcheux... {0.display_name} vient de disparaître dans la brume épaisse.",
                    "{0.display_name} a-t-il été aperçu récemment ? Non, alors, nous le considérons comme disparu au combat.",
                    "{0.display_name} s'en est allé. Nous ne connaissons pas encore ses motivations, mais les services secrets auront du travail, c'est certain.",
                    "Nos services de renseignements nous informent que {0.display_name} vient de s'évaporer dans la nature. Est-ce une désertion ?"]

# Envoyer un message de bienvenue aux nouveaux arrivants et leur assigner un rôle
@client.event
async def on_member_join(member):
    channel = client.get_channel(1083900367479242814) # Remplacez le numéro de canal par l'ID du canal où vous souhaitez envoyer le message
    
    # Sélectionner un message de bienvenue aléatoire et l'envoyer
    welcome_message = random.choice(welcome_messages)
    await channel.send(welcome_message.format(member))
    
    role = discord.utils.get(member.guild.roles, name='Membre') # Remplacez "Nom du rôle" par le nom du rôle que vous souhaitez attribuer
    await member.add_roles(role)
    
    # Envoyer un message privé au nouveau membre
    await member.send(f"Bienvenue {member.mention} sur la Dévotion des Nations, nous vous invitons d'abord à lire les #règles et à valider votre arrivée avec la réaction située en bas du message. Que votre séjour soit prospère !")

# Envoyer un message d'adieu aux utilisateurs qui quittent le serveur
@client.event
async def on_member_remove(member):
    channel = client.get_channel(1085832847669080134) # Remplacez le numéro de canal par l'ID du canal où vous souhaitez envoyer le message
    
    # Sélectionner un message de départ aléatoire et l'envoyer
    goodbye_message = random.choice(goodbye_messages)
    await channel.send(goodbye_message.format(member))

# Lancer le bot
client.run(os.getenv('DISCORD_TOKEN'))