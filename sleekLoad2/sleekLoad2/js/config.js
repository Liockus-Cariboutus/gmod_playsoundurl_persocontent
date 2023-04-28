//       _           _    _                     _ 
//      | |         | |  | |                   | |
//   ___| | ___  ___| | _| |     ___   __ _  __| |
//  / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
//  \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
//  |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
//     version 2.16

// URL for the server logo
// Leave it blank to use text instead
// (Put the files in the images folder)
// (You can also use external URL)
var l_serverImage = "eagle.png";

// Center logo?
// 'true' or 'false'
var l_centerLogo = true;

// Display current map and gamemode?
// 'true' or 'false'
var l_displayMapGamemode = false;

// Custom server name configuration
// Leave it blank for automatic server name
var l_serverName = "La Dévotion des Nations";

// Use a video for the background?
// Otherwise it will use images
// 'true' or 'false'
var l_bgVideo = false;

// Default available videos:
// "aurora.webm"
// "bluefall.webm"
// "bluetilefloor.webm"
// "bluewhitecircles.webm"
// "bokehlens.webm"
// "cleanbokeh.webm"
// "coldnight.webm"
// "colorfulburst.webm"
// "dancingstars.webm"
// "dropsflares.webm"
// "focusorangebokeh.webm"
// "glimmering.webm"
// "glowingrings.webm"
// "greencircles.webm"
// "hues.webm"
// "inthedeep.webm"
// "modernflourish.webm"
// "orangeaura.webm"
// "warminside.webm"
// "yellowgreen.webm"
//
// You can add your own video backgrounds
// Just make sure they are using webm VP8 format 
// (Place the videos in the backgrounds/videos folder)
// (You can also use external URL)
var l_background = "bluefall.webm";

// (Image-background only)
// Enable map-based background image?
// If enabled, the background will be an image based on the server current map
// You need to have a background image with the same name as the map
// Also, the image needs to be in .jpg format
// E.g: gm_flatgrass.jpg, gm_construct.jpg, rp_downtown_v4c_v2.jpg
// 'true' or 'false'
var l_bgImageMapBased = false;

// (Image-background only)
// Place one or more images
// Multiple images will automatically shuffle between them
// (Place the files in the backgrounds/images folder)
// (You can also use external URL)
var l_bgImages = [
	"background1.jpg",
	"background2.jpg",
	"background3.jpg",
	"background4.jpg",
	"background5.jpg",
	"background6.jpg",
	"background7.jpg",
	"background8.jpg",
	"background9.jpg",
	"background10.jpg",
	"background11.jpg",
	"background12.jpg",
	"background13.jpg",
	"background14.jpg",
	"background15.jpg",
];

// (Image-background only)
// Random background images order?
// 'true' or 'false'
var l_bgImagesRandom = true;

// (Image-background only)
// Delay between background images changes
// in milliseconds
var l_bgImageDuration = 10000;

// (Image-background only)
// Image background fade velocity
// in milliseconds
var l_bgImageFadeVelocity = 5000;

// Enable background overlay?
// 'true' or 'false'
var l_bgOverlay = true;

// Background darkening amount
// 0 for none (0%), 100 for pitch black (100%)
var l_bgDarkening = 50;

// Play music during the loading screen?
// 'true' or 'false'
var l_music = true;

// Display current music name?
// 'true' or 'false'
var l_musicDisplay = false;

// Music playlist
// Add as many youtube ids/urls or ogg files you want
// (Place the ogg files in the music folder)
// (You can also use external URL for the ogg files)
var l_musicPlaylist = [
	// {ogg: "lullaby.ogg", name: "Lullaby of Deserted Hell"},
	// {ogg: "falls_in_fall.ogg", name: "秋に舞う椛と滝飛沫"},
	// {youtube: "https://www.youtube.com/watch?v=3VTwbEWW2W8", name: "Tea for Two"},
	// {youtube: "https://www.youtube.com/watch?v=VaDN_19rPyw", name: "Voile, the Magic Library"},
	{ogg: "long_note_one.ogg", name: ""},
	{ogg: "long_note_two.ogg", name: ""},
];

// Random music order?
// 'true' or 'false'
var l_musicRandom = true;

// Music volume
// Choose a value between 0 (quietest) and 100 (loudest)
var l_musicVolume = 15;

// Enable custom messages?
// 'true' or 'false'
var l_messagesEnabled = true;

// Enter your custom messages below
var l_messages = [
	"La mine de Sobruk est un endroit mystérieux, situé à la frontière entre la Belgique et l'Allemagne.",
	"Après les attentats du 20 juillet, les troupes allemandes furent obligées d'employer le salut du parti.",
	"Observer son environnement peut faire la différence entre un homme vivant, ou mort.",
	"L'initiative Vindicta regroupe des résistants français et allemands, ils œuvrent dans l'ombre.",
	"La logistique américaine est une force de frappe redoutable, leur engagement en 1941 fera pencher le conflit.",
	"Il vaut mieux éviter d'être fait prisonnier par les soviétiques, partez vers l'Ouest, si possible.",
	"Des fusillades entre la SS et la Wehrmacht ont pu s'occasionner au vu de certains... désaccords.",
	"Les bombardements sont à l'origine d'une grande partie des morts occasionnées durant le conflit, surveillez le ciel.",
	"Si vous entendez une sirène de Stuka, et que vous n'êtes pas allemand : courez.",
	"Un char sans escorte se condamne à être mis en péril dans les minutes qui suivent son déploiement.",
	"Il rôde...",
	"De nombreux mystères entourent le conflit, certains plus profonds que d'autres.",
	"Vous pourrez occasionnellement trouver des documents, ces derniers peuvent dévoiler des informations utiles.",
	"Nous espérons que vous passerez un bon moment sur le serveur.",
	"Il est recommandé de rejoindre notre serveur Discord (lien disponible en jeu).",
];

// Random message order?
// 'true' or 'false'
var l_messagesRandom = true;

// Delay between message changes
// in milliseconds
var l_messagesDelay = 5000;

// Messages fade time
// in milliseconds
var l_messagesFade = 1000;

// Show errors inside Garry's Mod?
// Can be useful for finding errors
// 'true' or 'false'
var l_showErrorsIngame = true;

//==============================================================
//========================== WARNING ===========================
//==============================================================
//============ Do not edit anything below this line ============
//==============================================================
var checkConfigFile = function() {
	return true;
};