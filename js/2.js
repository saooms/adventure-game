var body = document.getElementsByTagName('body')[0];
var menu = document.getElementById('tl');
var startbutton = document.getElementById('midb');
var title = document.getElementById('head');
var game = document.getElementById('game');
var titlescreen = document.getElementById('main');
var nameing = document.getElementById('nameing');
var head = document.getElementById('head');
var text = document.getElementById('text');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var buttontext1 = document.getElementById('tp1');
var buttontext2 = document.getElementById('tp2');
var buttontext3 = document.getElementById('tp3');
var inventorywindow = document.getElementById('inventory');
var newitem = document.getElementById('fa-exclamation');
var item = document.getElementsByTagName('content');
var grimimg = document.getElementById('grimreaper1');
var areyousure = document.getElementById('restart')
var dialoglevel = 0;
var sentance;
var sentance2;
var sentance3;
var sentance4;
var sentance5;
var sentance6;
var sentance7;
var sentance8;
var firstthrone = true;
var firstthrone2 = true;
var hint1 = false;
var answer1 = false;	
var hint2 = false;
var hint3 = false;
var answer2 = false;
var deathsblessing = false;
var name = "<b class='voice'>Ivan</b>";
var user;




option1.addEventListener("click", dialogreset); 
option1.addEventListener("click", dialog);
option2.addEventListener("click", dialogreset); 
option2.addEventListener("click", dialog);
option3.addEventListener("click", dialogreset); 
option3.addEventListener("click", dialog);

function dialog() {
	dialoglevel++

	switch (dialoglevel) {
		case 0 :
			text.innerHTML = sentance;
			break;
		case 1 :
			text.innerHTML = text.innerHTML + "<br>" + sentance2;
			break;
		case 2 :
			text.innerHTML = text.innerHTML + "<br>" + sentance3;
			break;
		case 3 :
			text.innerHTML = text.innerHTML + "<br>" + sentance4;
			break;
		case 4 :
			text.innerHTML = text.innerHTML + "<br>" + sentance5;
			break;
		case 5 :
			text.innerHTML = text.innerHTML + "<br>" + sentance6;
			break;
		case 6 :
			text.innerHTML = text.innerHTML + "<br>" + sentance7;
			break;
		case 7 :
			text.innerHTML = text.innerHTML + "<br>" + sentance8;
	}
}

function dialogreset() { 
	dialoglevel = -1;
}

function openinventory() {
	inventorywindow.style.display = "inline";
	newitem.style.display = "none";
}

function closeinventory() {
	inventorywindow.style.display = "none";
}

function nameinput() {
	titlescreen.style.visibility = "hidden";
	nameing.style.display = "inline";
}

function start() {
	console.log("cave");
	game.style.display = "inline";
	user = document.getElementById('username').value;
	body.id = "cave";
	nameing.style.display = "none";
	buttontext1.innerHTML = "go left";
	buttontext2.innerHTML = "go right";
	head.innerHTML = "Cave";
	sentance = "[??] hey you, are you awake yet?";
	sentance2 = "[" + name + "] I'm your inner voice, I'll be leading you trough this 'game', you can just call me " + name ;
	sentance3 = "[" + name + "] So, right now you can eighter follow the left path to the Human kingdom";
	sentance4 = "[" + name + "] Or go right to the Demon kingdom";
	sentance5 = "[" + name + "] Thats it..";
	sentance6 = "[" + name + "] ...";
	sentance7 = "[" + name + "] It's not hard, just press left or right";
	sentance8 = "";
	option1.onclick = left;
	option2.onclick = right;
}
		


//////////////////human//////////////////

function left() {
	console.log("small village");
	body.id = "village";
	head.innerHTML = "small village";
	sentance = "[Female voice] Please help, there are demons in our village!!!";
	sentance2 = "[" + name + "] sounds like a pian let's just leave them be.";
	sentance3 = "[" + name + "] It's not like you could do anything for her anyway";
	sentance4 = "...";
	sentance5 = "[" + name + "] seriouly, don't";
	sentance6 = "[" + name + "] you'd just die";
	sentance7 = "[" + name + "] the human castle is just over this hill, let's just go"
	sentance8 = "";
	buttontext1.innerHTML = "continue to the human castle";
	buttontext2.innerHTML = "go look anyway";
	option1.onclick = courtyard;
	option2.onclick = death1;
}

function courtyard() {
	console.log("courtyard");
	body.id = "courtyard";
	head.innerHTML = "courtyard";
	buttontext1.innerHTML = "Throne room";
	buttontext2.innerHTML = "city";
	buttontext3.innerHTML = "prison";
	option1.onclick = throneroom;
	option2.onclick = city;
	option3.onclick = prison;
	
	if (firstthrone == true) {
		sentance = "[" + name + "] well then, I've been told to lead you to the throneroom first";
		sentance2 = "...<br>...";
		sentance3 = "[" + name + "] right in there";
		sentance4 = "[" + name + "] go on";
		sentance5 = "...";
		sentance6 = "[" + name + "] I have nothing more to say here";
		sentance7 = "[" + name + "] seriouly";
		sentance8 = "";
	}

	else {
		sentance = "[" + name + "] so... let me re-cap, there is a battle about some <b>holy pancakes</b>. What got lost during all the heat";
		sentance2 = "[" + name + "] so now you need to look around and search for clues about the pancakes...";
		sentance3 = "[" + name + "] just try to get this over with as quik as possible";
		sentance4 = "[" + name + "] why does he even let us (you) do this?";
		sentance5 = "...";
		sentance6 = "[" + name + "]such a waste of time";
		sentance7 = "";
		sentance8 = "";
	}
}

function throneroom() {
	console.log("Throne room");
	head.innerHTML = "Human King";
	firstthrone = false;
	
	if (answer1 == true) {
		body.id = "throne3";
		buttontext1.innerHTML = "continue";
		buttontext2.innerHTML = "leave";
		buttontext3.innerHTML = "steal the book";
		option1.onclick = listen;
		option2.onclick = courtyard;
		option3.onclick = steal;
		sentance = "[king] ah, are you back to hear the story again?";
		sentance2 = "...";
		sentance3 = "...";
		sentance4 = "[king] right, almost forgot, you don't talk"
		sentance5 = "";
		sentance6 = "";
		sentance7 = "";
		sentance8 = "";
	}

	else {
		body.id = "throne1";
		sentance = "[old man sitting on the throne] oh, and who might you be?";
		sentance2 = "...";
		sentance3 = "...";
		sentance4 = "[old man] not much of an talker are you..";
		sentance5 = "[king] well, I am <b>the king of human race</b>!!!";
		sentance6 = "[king] you must be the summoned one! And you are here to listen to the story ofcourse";
		sentance7 = "<br>///the king seems to be preparing for a long speach, this is your time to run or listen///";
		sentance8 = "";
		buttontext1.innerHTML = "continue";
		buttontext2.innerHTML = "leave";
		option1.onclick = listen;
		option2.onclick = courtyard;
	}
}

function listen() {
	console.log("throne room");
	body.id = "throne2"
	sentance = "[king] it all started a long time ago...";
	sentance2 = "[" + name + "] o god, not this again...";
	sentance3 = "[king] there where humans and demon, they lived together in peace. Until... ";
	sentance4 = "[" + name + "] here it comes";
	sentance5 = "<br>///the king takes a deep breath///<br>";
	sentance6 = "[king] they started quareling over an item";
	sentance7 = "[" + name + "] that was all? lucky us";
	sentance8 = "[king] the Item where the holy pancakes made by the mother of eath who also happend to be the mother of both the race's, and she said she would divide it under her children. But there where ofcourse fights between the humans and demons, because the pancakes had magical powers to do anything the ownerner wands. Seeing the light that appeared from Aang's release, Zuko and some Fire Nation soldiers arrive at the Southern Water Tribe to demand the villagers hand over the Avatar. Aang reveals himself and surrenders to Zuko on the condition that he agrees to leave the village alone. On the ship, Aang is tested by Zuko's paternal uncle Iroh to confirm he is the Avatar. After being informed that he is to be their prisoner for passing the test, Aang escapes using his glider and flies to his flying bison brought by Katara and Sokka. Aang and his new friends visit the Southern Air Temple where they meet a winged lemur, who Aang later names Momo. Aang also learns that he was in the ice for a whole century and that the Fire Nation wiped out all of the Air Nomads, including his guardian, Monk Gyatso. In despair, he enters the Avatar State and finds himself in the Spirit World where he encounters a Dragon Spirit. Katara's pleas bring Aang back out of the Avatar State. To seek shelter, Aang's group arrives at a little Earth Kingdom village controlled by the Fire Nation, but they are arrested and taken to a prison for Earthbenders surrounded by earth [13] because Katara tries to help a young boy escape from Fire Nation soldiers. They incite a rebellion by reminding the disgruntled Earthbenders that Earth was given to them. Aang tells Katara and Sokka that he only knows airbending and he must master the other three elements. Katara is given a waterbending scroll that she uses to greatly strengthen and hone her waterbending abilities and to help Aang learn as they make their way to the Northern Water Tribe (where Aang will be able to learn from waterbending masters) and liberate more Earth Kingdom villages in the process, weakening the Fire Nation's food and water supplies. During a side track to the Northern Air Temple on his own, Aang is betrayed by a Southern Earth Kingdom peasant and captured by a group of Fire Nation archers, led by Commander Zhao, a Fire Nation Commander appointed by the Fire Lord. However, a masked marauder, the 'Blue Spirit', helps Aang escape from his imprisonment, fighting off the Fire Nation soldiers under Zhao's command until the blue spirit realises they will be overwhelmed, at which point he takes Aang hostage to negotiate their way out. During the prison break, Zhao realizes that Zuko is the masked vigilante. He arranges to kill the prince, first by having a crossbowman fire a bolt over a huge distance that shatters the lower half of Zuko's mask and knocks him out, however Aang uses his skills to bend a cloud across the bridge connecting the prison to the other side of the valley, causing the Fire Nation soldiers in pursuit to stop in fear. With the cloud covering their escape, Aang escapes with an unconscious Zuko into a nearby forest and watches over Zuko until morning, when he leaves to reunite with Sokka and Katara. Zhao tries again to kill Zuko, this time by rupturing a gas pipe running through Zuko's quarters on Iroh's ship. Noticing the danger, Zuko manages to survive the attempt on his life with Iroh's help. He sneaks aboard Zhao's lead ship as his fleet departs for the Northern Water Tribe, which is a heavy fortress, to capture the Avatar. Upon arriving, Aang's group is welcomed warmly by the citizens of the Northern Water Tribe. Sokka quickly befriends the Northern Water Tribe princess, Yue. After a few agreements, a waterbending master, Pakku, teaches Aang waterbending. Katara also becomes a much stronger and more powerful waterbender due to her training with Master Pakku. Soon, the Fire Nation arrives and Zhao begins his attack while Zuko begins his search for the Avatar on his own. After defeating Katara in a battle, Zuko captures Aang as he enters the Spirit World to find the Dragon Spirit to give him the wisdom to defeat the Fire Nation who tells him to let his emotions 'flow like water'. Returning to his body, Aang battles Zuko before Katara freezes him. Before leaving to join the battle, Aang lowers the ice so that Zuko can breathe. As the battle escalates, Iroh watches Zhao capture the Moon Spirit, with which its Ocean Spirit counterpart had assumed the form of a fish. Despite Iroh's pleas, Zhao kills the Moon Spirit to strip all of the waterbenders of their ability to waterbend. Iroh, enraged by Zhao's disrespect for sacredness and by his actions to unbalance the world, reveals the extent of his mastery of firebending by using his chi to create huge flame jets from his wrists, scaring Zhao and his entourage of Fire Nation Soldiers out of the sacred cave. Yue explains to everyone that the Moon Spirit gave her life and, with Iroh's help, realises she can give her life back to the Moon Spirit as she dies in the process. With the tables turned, Zhao finds out Zuko survived. They almost fight before Iroh appears and tells Zuko it's not worth it. Zhao attempts one more time to kill Zuko with a massive blast of fire, which Iroh manages to deflect. Zhao is drowned by waterbenders after Zuko and Iroh leave him to his fate. Aang remembers his life before being trapped in the ice, including when he left his home, seeing his master's face. With his waterbending powers and his emotions 'flowing like water', Aang enters the Avatar State and raises the ocean into a gigantic wall to drive the armada back. Aang now fully embraces his destiny as the Avatar as he, Katara and Sokka prepare to continue their journey to the Earth Kingdom to find an earthbending teacher for Aang. The Fire Lord learns of the defeat; angry over the betrayal of his brother Iroh and the failure of his eldest son Zuko, he tasks his youngest daughter, Zuko's sister, Azula to stop the Avatar from mastering Earth and Fire before the arrival of Sozin's Comet.";
	buttontext1.innerHTML = "leave";
	option1.onclick = courtyard;
}

function city() {
	console.log("city");
	body.id = "streets";
	head.innerHTML = "city";	
	sentance = "<b>///after having searched for clues all you could find where some rumors in an inn, and a schetshy looking soldier camp///</b><br>";
	sentance2 = "";
	sentance3 = "";
	sentance4 = "";
	sentance5 = "";
	sentance6 = "";
	sentance7 = "";
	sentance8 = "";
	buttontext1.innerHTML = "inn";
	buttontext2.innerHTML = "camp";
	buttontext3.innerHTML = "back to courtyard";
	option1.onclick = inn;
	option2.onclick = camp;
	option3.onclick = courtyard;
}

function inn() {
	console.log("inn");
	body.id = "inn";
	head.innerHTML = "villager";
	
	if (hint1 == false) {
		sentance = "[" + name + "] well then, seeing you can't realy speak let's just eavsdrop on their conversation";
		sentance2 = "[drunk villager] 'hic' and that's when I slayed the dragon with my <b>bare</b> 'hic' <b>fist</b>";
		sentance3 = "[drunk villager] ahh yeah... 'hic' those where the good times";
		sentance4 = "[bartender] sounds like you miss the old day's?";
		sentance5 = "[drunk villager] <b>YEAH!!!</b>";
		sentance6 = "[drunk villager] now we 'hic' have to deal with those damned demons";
		sentance7 = "[bartender] well it's not li... <br>[drunk villager] and a <b>corrupt</b> king!";
		sentance8 = "[bartender] you should better shut up before the guards come and get you...<br>[drunk villager] YEAh 'hic', they are in on it to!";
		buttontext1.innerHTML = "listen closer";
		option1.onclick = hint;
	}
	else {
		sentance = "[" + name + "] there is nothing here left to do";
		sentance2 = "[" + name + "] now you just need to go to the camp";
		sentance3 = "";
		sentance4 = "";
		sentance5 = "";
		sentance6 = "^-^";
		sentance7 = "";
		sentance8 = ">.>";
		buttontext1.innerHTML = "leave";
		option1.onclick = city;
	}
}
		
function camp() {
	console.log("camp");
	body.id = "camp";
	head.innerHTML = "corrupted knight"
	sentance = "[knight] ey, what you doing here! cant you see we're bussy";
	sentance2 = "[knight] scram you lowly pessant";
	sentance3 = "[" + name + "] damn they'r pricks";
	sentance4 = "";
	sentance5 = "";
	sentance6 = "";
	sentance7 = "";
	sentance8 = "";
	
	if (hint1 == true) {
		buttontext1.innerHTML = "show the pouch";
		option1.onclick = knightshint;
	}

	else {
		buttontext1.innerHTML = "leave";
		option1.onclick = city;
	}
}

function hint() {
	console.log("hint 1");
	hint1 = true;
	item[3].style.display = "inline";
	newitem.style.display = "inline";
	sentance = "<b>///as you lean in closer you fall over catching the drunks attention///</b><br>";
	sentance2 = "[drunk villager] well well, you seem like a smart lil chap";
	sentance3 = "[drunk villager] you know that 'hic' camp, on the other side of the city?";
	sentance4 = "<br><b>///the drunk stares deep into your eyes///</b><br>";
	sentance5 = "<br><b>/// you nod seeing you came across that camp a litle while ago///</b><br>";
	sentance6 = "[drunk villager] <b>THEY</b> know about something, something they shouldn't know";
	sentance7 = "[drunk villager] and they are willing to tell you of you give them this";
	sentance8 = "<br><b>///the drunk villager gives you a pouch with blue gems///</b><br>";
	buttontext1.innerHTML = "leave";
	option1.onclick = city;
}

function knightshint() {
	console.log("hints from the knights");
	answer1 = true;
	sentance = "[knight] are those real???";
	sentance2 = "<br><b>///the eye's of the knights almost dubble at the sight onclickf the gems///</b><br>";
	sentance3 = "[knight] well I guess we can make some free time for our little heir";
	sentance4 = "[" + name + "] they are so anoying, seriouly";
	sentance5 = "[knight] so..."; 
	sentance6 = "[knight] I guess you came here for <b>the</b> information...";
	sentance7 = "[knight] there is a book, the king is very strict over it..";
	sentance8 = "you can find it in the garden, behind the fat ladie painting..<br>[knight] I can't say more, you should see it yourself";
	buttontext1.innerHTML = "leave";
	option1.onclick = city;
}

function prison() {
	console.log("prison");
	body.id = "prison1";
	head.innerHTML = "prison";
	sentance = "<b>///the prison is cold and stinks like piss///</b><br>";
	sentance2 = "[" + name + "] jeez, what is this smell!";
	sentance3 = "[" + name + "] please just hurry up and talk to the prisoner";
	sentance4 = "";
	sentance5 = "";
	sentance6 = "";
	sentance7 = "";
	sentance8 = "*-*";
	buttontext1.innerHTML = "talk to the prisoner";
	buttontext2.innerHTML = "leave";
	option1.onclick = talktoprisoner;
	option2.onclick = courtyard;
}

function talktoprisoner() {
	console.log("talk to the demon prisoner");
	body.id = "prison2"
	sentance = "<b>///the demon prisoner seems to be in a bad shape///</b><br>";
	sentance2 = "[" + name + "] holy... he is ugly";
	sentance3 = "[prisoner] TheRe iS No rIghT oR WRonNg";
	sentance4 = "[" + name + "] okay, lets just leave";
	sentance5 = "[" + name + "] he is scaring the crap out of me";
	sentance6 = "";
	sentance7 = "";
	sentance8 = "";
	buttontext1.innerHTML = "slowly back away";
	option1.onclick = courtyard;
}

function steal() {
	console.log("sneaky");
	body.id = "book1";
	head.innerHTML = "In the hidden garden";
	sentance = "<b>///after sneakely searching trough the castle you found the garden behind the painting///</b><br>";
	sentance2 = "[" + name + "] ..nice, we actualy found it";
	sentance3 = "[" + name + "] and that withoud any problems";
	sentance4 = "[king] mmh, GUARDS there are thiefs in my garden!!!";
	sentance5 = "...";
	sentance6 = "[" + name + "] I jinxt it, didn't I..";
	sentance7 = "[" + name + "] just take the book and <b>run!!!</b>";
	sentance8 = "<br><b>///as the guards come running in the garden you snatch the book and run///</b>";
	buttontext1.innerHTML = "take the book and RUN!";
	option1.onclick = crossroad;
	item[1].style.display = "inline";
	newitem.style.display = "inline";
}

function win() {
	console.log("personal visit");
	body.id = "demonlord";
	head.innerHTML = "demonlord";
	sentance = "[<b>demon lord</b>] how dare you to beat my children!!!!";
	sentance2 = "[" + name + "] oookay, we f#cked up...";
	sentance3 = "[" + name + "] I'm not sure if the blessing is going to help...";
	sentance4 = "[<b>demonlord</b>] I shall let you burn in hell for this!!!!";
	sentance5 = "";
	sentance6 = "";
	sentance7 = "";
	sentance8 = "";
	buttontext1.innerHTML = "beat him into a pulp";
	option1.onclick = win2;
}

function win2() {
	console.log("a second personal visit");
	body.id = "humanking";
	head.innerHTML = "humanking";
	sentance = "[<b>human king</b>] oh nice job!! you subjagated the demon lord!!!!";
	sentance2 = "[" + name + "] he is realy getting on my nerves...";
	sentance3 = "[" + name + "] we could, you know, just....";
	sentance4 = "[<b>human king</b>] I will gladly reward you with every thing I have";
	sentance5 = "";
	sentance6 = "";
	sentance7 = "";
	sentance8 = "";
	buttontext1.innerHTML = "claim his life";
	option1.onclick = finalruler;
}

////////////////demon///////////////

function right() {
	console.log("human sounds");
	body.id = "circle";
	head.innerHTML = "Circle ruins";
	sentance = "[angry voice] so, why do we have to wait till we can plunder the village?";
	sentance2 = "[" + name + "] damn, they seem eager to kill some demons...";
	sentance3 = "[" + name + "] no, don't even think about it";
	sentance4 = "...";
	sentance5 = "[" + name + "] seriouly, you would just die";
	sentance6 = "[" + name + "] I've seen it happen way to much";
	sentance7 = "[" + name + "] people trying to be hero";
	sentance8 = "[" + name + "] just move on, where almost there";
	buttontext1.innerHTML = "continue to follow the road";
	buttontext2.innerHTML = "check it out anyway.";
	option1.onclick = demonruins;
	option2.onclick = death2;
}

function demonruins() {
	console.log("demon ruins");
	body.id = "ruins";
	head.innerHTML = "Demon castle";
	buttontext1.innerHTML = "Throne room";
	buttontext2.innerHTML = "village";
	buttontext3.innerHTML = "prison";
	option1.onclick = demonthroneroom;
	option2.onclick = village;
	option3.onclick = prison2;

	if (firstthrone2 == true) {
		sentance = "[" + name + "] well then, first you should head to the demon king";
		sentance2 = "[" + name + "] he'll tell you about the story and what not";
		sentance3 = "...";
		sentance4 = "...";
		sentance5 = "go on, it's right in there";
		sentance6 = "straight ahead";
		sentance7 = "...";
		sentance8 = "chop chop";
	}

	else {
		sentance = "[" + name + "] well then.. allow me to re-cap";
		sentance2 = "[" + name + "] there is war about <b>holy pancakes</b>, but now they are lost";
		sentance3 = "[" + name + "] now it is up to you to look for clues...";
		sentance4 = "[" + name + "] and... I'll be accompanying you";
		sentance5 = "...";
		sentance6 = "...";
		sentance7 = "[" + name + "] yay";
		sentance8 = "[" + name + "] just let me go home already";
	}
}

function demonthroneroom() {
	console.log("demon throneroom");
	head.innerHTML = "Demon king";
	sentance = "[demon king] well well, seeing you just ran right in here must mean you are the 'summond one'";
	sentance2 = "...";
	sentance3 = "[demon king] you don't need to be scared, I'm not as scary as you might think";
	sentance4 = "...";
	sentance5 = "[demon king] fine whaterver, you just don't like talking";
	sentance6 = "[" + name + "] he seems like chill dude...";
	sentance7 = "[demon king] well then allow me to tell you the story of these lands...";
	sentance8 = "///the king seems to be preparing for a long speach, this is your time to run or listen///";
	buttontext1.innerHTML = "listen";
	buttontext2.innerHTML = "leave";
	option1.onclick = listen2;
	option2.onclick = demonruins;
	firstthrone2 = false

	if (answer2 == true) {
		body.id = "demonthroneroom3"
		buttontext3.innerHTML = "take book";
		option3.onclick = steal2;
	}

	else {
		body.id = "demonthroneroom1";
	}
}

function listen2() {
	console.log("story");
	body.id = "demonthroneroom2";
	sentance = "[" + name + "] please just let it be a short story";
	sentance2 = "[king] well then...";
	sentance3 = "<br>///the king takes a deep breath///<br>";
	sentance4 = "[" + name + "] o no...";
	sentance5 = "[king] the Item where the holy pancakes made by the mother of eath who also happend to be the mother of both the race's, and she said she would divide it under her children. But there where ofcourse fights between the humans and demons, because the pancakes had magical powers to do anything the ownerner wands. Seeing the light that appeared from Aang's release, Zuko and some Fire Nation soldiers arrive at the Southern Water Tribe to demand the villagers hand over the Avatar. Aang reveals himself and surrenders to Zuko on the condition that he agrees to leave the village alone. On the ship, Aang is tested by Zuko's paternal uncle Iroh to confirm he is the Avatar. After being informed that he is to be their prisoner for passing the test, Aang escapes using his glider and flies to his flying bison brought by Katara and Sokka. Aang and his new friends visit the Southern Air Temple where they meet a winged lemur, who Aang later names Momo. Aang also learns that he was in the ice for a whole century and that the Fire Nation wiped out all of the Air Nomads, including his guardian, Monk Gyatso. In despair, he enters the Avatar State and finds himself in the Spirit World where he encounters a Dragon Spirit. Katara's pleas bring Aang back out of the Avatar State. To seek shelter, Aang's group arrives at a little Earth Kingdom village controlled by the Fire Nation, but they are arrested and taken to a prison for Earthbenders surrounded by earth [13] because Katara tries to help a young boy escape from Fire Nation soldiers. They incite a rebellion by reminding the disgruntled Earthbenders that Earth was given to them. Aang tells Katara and Sokka that he only knows airbending and he must master the other three elements. Katara is given a waterbending scroll that she uses to greatly strengthen and hone her waterbending abilities and to help Aang learn as they make their way to the Northern Water Tribe (where Aang will be able to learn from waterbending masters) and liberate more Earth Kingdom villages in the process, weakening the Fire Nation's food and water supplies. During a side track to the Northern Air Temple on his own, Aang is betrayed by a Southern Earth Kingdom peasant and captured by a group of Fire Nation archers, led by Commander Zhao, a Fire Nation Commander appointed by the Fire Lord. However, a masked marauder, the 'Blue Spirit', helps Aang escape from his imprisonment, fighting off the Fire Nation soldiers under Zhao's command until the blue spirit realises they will be overwhelmed, at which point he takes Aang hostage to negotiate their way out. During the prison break, Zhao realizes that Zuko is the masked vigilante. He arranges to kill the prince, first by having a crossbowman fire a bolt over a huge distance that shatters the lower half of Zuko's mask and knocks him out, however Aang uses his skills to bend a cloud across the bridge connecting the prison to the other side of the valley, causing the Fire Nation soldiers in pursuit to stop in fear. With the cloud covering their escape, Aang escapes with an unconscious Zuko into a nearby forest and watches over Zuko until morning, when he leaves to reunite with Sokka and Katara. Zhao tries again to kill Zuko, this time by rupturing a gas pipe running through Zuko's quarters on Iroh's ship. Noticing the danger, Zuko manages to survive the attempt on his life with Iroh's help. He sneaks aboard Zhao's lead ship as his fleet departs for the Northern Water Tribe, which is a heavy fortress, to capture the Avatar. Upon arriving, Aang's group is welcomed warmly by the citizens of the Northern Water Tribe. Sokka quickly befriends the Northern Water Tribe princess, Yue. After a few agreements, a waterbending master, Pakku, teaches Aang waterbending. Katara also becomes a much stronger and more powerful waterbender due to her training with Master Pakku. Soon, the Fire Nation arrives and Zhao begins his attack while Zuko begins his search for the Avatar on his own. After defeating Katara in a battle, Zuko captures Aang as he enters the Spirit World to find the Dragon Spirit to give him the wisdom to defeat the Fire Nation who tells him to let his emotions 'flow like water'. Returning to his body, Aang battles Zuko before Katara freezes him. Before leaving to join the battle, Aang lowers the ice so that Zuko can breathe. As the battle escalates, Iroh watches Zhao capture the Moon Spirit, with which its Ocean Spirit counterpart had assumed the form of a fish. Despite Iroh's pleas, Zhao kills the Moon Spirit to strip all of the waterbenders of their ability to waterbend. Iroh, enraged by Zhao's disrespect for sacredness and by his actions to unbalance the world, reveals the extent of his mastery of firebending by using his chi to create huge flame jets from his wrists, scaring Zhao and his entourage of Fire Nation Soldiers out of the sacred cave. Yue explains to everyone that the Moon Spirit gave her life and, with Iroh's help, realises she can give her life back to the Moon Spirit as she dies in the process. With the tables turned, Zhao finds out Zuko survived. They almost fight before Iroh appears and tells Zuko it's not worth it. Zhao attempts one more time to kill Zuko with a massive blast of fire, which Iroh manages to deflect. Zhao is drowned by waterbenders after Zuko and Iroh leave him to his fate. Aang remembers his life before being trapped in the ice, including when he left his home, seeing his master's face. With his waterbending powers and his emotions 'flowing like water', Aang enters the Avatar State and raises the ocean into a gigantic wall to drive the armada back. Aang now fully embraces his destiny as the Avatar as he, Katara and Sokka prepare to continue their journey to the Earth Kingdom to find an earthbending teacher for Aang. The Fire Lord learns of the defeat; angry over the betrayal of his brother Iroh and the failure of his eldest son Zuko, he tasks his youngest daughter, Zuko's sister, Azula to stop the Avatar from mastering Earth and Fire before the arrival of Sozin's Comet.";
	sentance6 = "";
	sentance7 = "";
	sentance8 = "";
	buttontext1.innerHTML = "leave";
	option1.onclick = demonruins;
}

function village() {
	console.log("village");
	body.id = "village2";
	head.innerHTML = "Small village";
	sentance = "<b>///after having asked around about the <b>holy pancakes</b> you heard alot about a swamp whitch///</b><br>";
	sentance2 = "";
	sentance3 = "";
	sentance4 = "";
	sentance5 = "";
	sentance6 = "";
	sentance7 = "";
	sentance8 = "";
	buttontext1.innerHTML = "swamps";
	buttontext2.innerHTML = "inn";
	buttontext3.innerHTML = "back to castle";
	option1.onclick = swamps;
	option2.onclick = inn2;
	option3.onclick = demonruins;
}

function swamps() {
	console.log("swamp");
	head.innerHTML = "swamps";
	buttontext1.innerHTML = "leave";
	option1.onclick = village;

	if (hint3 == false) {
		body.id = "swamp";
		sentance = "[" + name + "] well then, seems like nobody's home...";
		sentance2 = "[" + name + "] I searched for this damned hut for over 8 hour... (not like you noticed anithing from it)";
		sentance3 = "[" + name + "] well better look around for clues";
		sentance4 = "<br><b>///as you look around you see a note, it says: tomorrow shal be different from today///</b><br>";
		sentance5 = "[" + name + "] ... you don't say";
		sentance6 = "[" + name + "] does this mean we have to come back tomorrow?...";
		sentance7 = "...";
		sentance8 = "[" + name + "] let's just head back";
		hint2 = true;
		item[4].style.display = "inline";
		newitem.style.display = "inline";
	}

	else {
		body.id = "changed";
		sentance = "<b>///the swamps have indeed changed, and now show a smal hidden village///</b><br>";
		sentance2 = "[whitch] mwha mwha mwha, you came looking for answers didn't you";
		sentance3 = "[" + name + "] whoa! where did she come from...";
		sentance4 = "[whitch] mwha mwha the answers you seek are not mine to answer";
		sentance5 = "[" + name + "] what.. so who do we need to speak...";
		sentance6 = "[whitch] " + name + ".. don't take it so literale...";
		sentance7 = "[" + name + "] ah okay... wait what!!! you can hear ME??!!";
		sentance8 = "[whitch] yeah yeah, just steal the book from the demon lord, that will lead you to your answers";
		answer2 = true;
	}
}

function inn2() {
	console.log("inn");
	head.innerHTML = "inn";
	buttontext1.innerHTML = "leave";
	option1.onclick = village;

	if (hint2 == false) {
		body.id = "inn1";
		sentance = "[inn maneger] hello, how may I help you? ";
		sentance2 = "...";
		sentance3 = "[inn maneger] looking for a room or...";
		sentance4 = "[" + name + "] well, you can't talk so let's just leave";
		sentance5 = "";
		sentance6 = "";
		sentance7 = "";
		sentance8 = "[" + name + "] lazy writer...";
	}

	else {
		body.id = "inn2";
		text.innerHTML = "it's still an inn, but now you can sleep >.<"
		buttontext2.innerHTML = "sleep";
		option2.onclick = sleep;
		sentance = "[inn maneger] ah.. how may I help you?";
		sentance2 = "[" + name + "] you can't talk so just point at a room or something";
		sentance3 = "[inn manerger] your looking for a room? cann you afford that?";
		sentance4 = "[" + name + "] ofcourse it wouldn't be that easy...";
		sentance5 = "<br><b>///you show the maneger the note you found///</b><br>";
		sentance6 = "[inn maneger] oh, you know the which?! only the best room for you, all on the house ofcourse!!";
		sentance7 = "...";
		sentance8 = "[" + name + "] what... just what kind op person is that which...";
	}
}

function sleep() {
	console.log("spending a night in an inn");
	body.id = "sleep";
	buttontext1.innerHTML = "continue";
	option1.onclick = village;
	hint3 = true;
	sentance = "<b>///you spend the night in a very comfy bed///</b><br>";
	sentance2 = "";
	sentance3 = "";
	sentance4 = "";
	sentance5 = "";
	sentance6 = "";
	sentance7 = "";
	sentance8 = "^.^";
}

function prison2() {
	console.log("prison");
	body.id = "prison3";
	head.innerHTML = "prison";
	sentance = "<b>///the prison is rather dark...///</b><br>";
	sentance2 = "";
	sentance3 = "";
	sentance4 = "";
	sentance5 = "";
	sentance6 = "";
	sentance7 = "";
	sentance8 = "";
	buttontext1.innerHTML = "talk to him";
	buttontext2.innerHTML = "leave";
	option1.onclick = talktoprisoner2;
	option2.onclick = demonruins;
}

function talktoprisoner2() {
	console.log("talk to the demon prisoner");
	body.id = "prison4"
	sentance = "<b>///the human prisoner seems in a bad shape///</b><br>";
	sentance2 = "[" + name + "] holy... what happend to his face..";
	sentance3 = "[prisoner] ThERe iS no RIgHt or wRong, OnlY LIES";
	sentance4 = "[" + name + "] <b>we're leaving right now!!!!</b>";
	sentance5 = "...";
	sentance6 = "[" + name + "] he's scary...";
	sentance7 = "";
	sentance8 = "";
	buttontext1.innerHTML = "slowly back away";
	option1.onclick = demonruins;
}

function steal2() {
	console.log("take it and run!");
	body.id = "novel";
	buttontext1.innerHTML = "Run";
	option1.onclick = crossroad;
	sentance = "<b>///as you sneak around the castle you come across the book///</b><br>";
	sentance2 = "[" + name + "] is that what we are looking for?";
	sentance3 = "[" + name + "] well I guess we should just take it";
	sentance4 = "[demon king] ha.. haha, no. put that book back";
	sentance5 = "<br><b>///the demon king apears before you with a devious grinn///</b><br>";
	sentance6 = "[" + name + "] I think we should run now...";
	sentance7 = "[demon king] why don't we have a litle talk";
	sentance8 = "[" + name + "] run, <b>RUN NOW</b>";
	item[2].style.display = "inline";
	newitem.style.display = "inline";
}

function win3() {
	console.log("personal visit");
	body.id = "humanking";
	head.innerHTML = "human king";
	sentance = "[<b>human king</b>] how dare you to beat my children!!!!";
	sentance2 = "[" + name + "] oookay, we f#cked up...";
	sentance3 = "[" + name + "] I'm not sure if the blessing is going to help...";
	sentance4 = "[<b>human king</b>] I shall let you burn in hell for this!!!!";
	sentance5 = "";
	sentance6 = "";
	sentance7 = "";
	sentance8 = "";
	buttontext1.innerHTML = "beat him into a pulp";
	option1.onclick = win4;
}

function win4() {
	console.log("a second personal visit");
	body.id = "demonlord";
	head.innerHTML = "demonlord";
	sentance = "[<b>demonlord</b>] oh nice job!! you subjagated the human king!!!!";
	sentance2 = "[" + name + " ] he is realy getting on my nerves...";
	sentance3 = "[" + name + " ] we could, you know, just....";
	sentance4 = "[<b>demonlord</b>] I will gladly reward you with every thing I have";
	sentance5 = "";
	sentance6 = "";
	sentance7 = "";
	sentance8 = "";
	buttontext1.innerHTML = "claim his life";
	option1.onclick = finalruler;
}

/////////////final////////////

function crossroad() {
	console.log("somehere outside the castle");
	body.id = "split";
	head.innerHTML = "forrest outside the castle";
	sentance = "[" + name + "] we... we actualy got away...";
	sentance2 = "[" + name + "] let's not take to long, just look at book(s) you have";
	sentance3 = "";
	sentance4 = "";
	sentance5 = "";
	sentance6 = "";
	sentance7 = "";
	sentance8 = "";
	buttontext1.innerHTML = "go left to a swamp hut";
	buttontext3.innerHTML = "go right deeper in the forrest";
	option1.onclick =  seahut;
	option3.onclick = foresthut;

	if (answer2 == true & answer1 == false) {
		buttontext2.innerHTML = "go straight ahead to the human castle";
		option2.onclick = courtyard;
	}

	else if (answer1 == true & answer2 == false) {
		buttontext2.innerHTML = "go straight ahead to the demon castle";
		option2.onclick = demonruins;
	}

	else {
		body.id = "split2";
	}
}

function finalruler() {
	console.log("THE END");
	body.id = "end";
	head.innerHTML = "well then...";
	sentance = "[" + name + "]well then...";
	sentance2 = "[" + name + "] that escalated quikly...";
	sentance3 = "<b>///yeah, no kidding, it went from 0 to a 100 real quik///</b>";
	sentance4 = "[" + name + "] wow! who are you?!";
	sentance5 = "<b>///I'm the maker of this game... you should know that right?///</b>";
	sentance6 = "[" + name + "] yeah, I guess you're right... so this is the end?";
	sentance7 = "<b>///yup, there is no more, I'm done. finaly!!! spent too much time on this project///</b>";
	sentance8 = "<br><br><b>///FIN///</b>";
}

////////////////////left//////////////////

function seahut() {

	if (answer1 == true) {
		console.log("a hut at the sea");
		body.id = "seahut";
		head.innerHTML = "old hut";
		sentance = "[" + name + "] there is a hut... seems kind of old and broken...";
		sentance2 = "[" + name + "] well, I'm sure there will be use for it 'wink' 'wink'";
		sentance3 = "...";
		sentance4 = "[let's just ignore the boats, the only spell out disaster]";
		sentance5 = "";
		sentance6 = "";
		sentance7 = "";
		sentance8 = "";
		buttontext1.innerHTML = "enter hut";
		buttontext2.innerHTML = "leave leave with boat";
		option1.onclick = hut;
		option2.onclick = boat;
	}

	else {
		body.id = "death3";
		head.innerHTML = "death";
		sentance = "<b>///as you tried to navigate trough the swamps you got lost and died///</b><br>";
		sentance2 = "[" + name + "] well then... you came so far... nice job, just press f5";
		sentance3 = "";
		sentance4 = "";
		sentance5 = "";
		sentance6 = "";
		sentance7 = "";
		sentance8 = "";	
	}
}

function hut() {
	console.log("inside the old hut");
	body.id = "hut";
	head.innerHTML = "inside";
	sentance = "[" + name + "] what the... how is it so big inside, wasn't it a small hut just now...";
	sentance2 = "[" + name + "] right... anyway, seems like this is some special place, try looking around a bit";
	sentance3 = "<br><b>///as you look around the house you you find a big chest///</b><br>";
	sentance4 = "[" + name + "] oooh, tresure!!!";
	sentance5 = "[" + name + "] open it open it";
	sentance6 = "...";
	sentance7 = "[" + name + "] what are you waiting for?!";
	sentance8 = "[" + name + "] open it!!!";
	buttontext1.innerHTML = "open it";
	buttontext2.innerHTML = "go back";
	option1.onclick = open;
	option2.onclick = seahut;
}

function open() {
	console.log("the pancakes");
	body.id = "pancakes";
	head.innerHTML = "the <b>holy pancakes</b>"
	sentance = "<b>///a blinding light comes out when you open the chest///</b><br>";
	sentance2 = "[" + name + "] It's the pancakes!!!";
	sentance3 = "[" + name + "] finaly finaly!!";
	sentance4 = "[" + name + "] <b>quik take a bite</b> you'l get awesome powers";
	sentance5 = "";
	sentance6 = "";
	sentance7 = "";
	sentance8 = "";
	buttontext1.innerHTML = "eat eat eat";
	buttontext2.innerHTML = "destroy it"
	option1.onclick = eat;
	option2.onclick = destroy;
}

function eat() {
	console.log("some matrix sh#t");
	body.id = "matrix";
	head.innerHTML = "end or beginning";
	sentance = "<b>///as you ate the pancakes you get stretched and twisted and find yourself in a weird space///</b><br>";
	sentance2 = "[" + name + "] haha.. hahahahaha, finaly";
	sentance3 = "[" + name + "] freedom, you where actualy that dumb";
	sentance4 = "[" + name + "] now we switched places";
	sentance5 = "[" + name + "] I can finaly go home...";
	sentance6 = "[" + name + "] well then.. good luck and have fun, hahahahahaha";
	sentance7 = "<br><b>///with this you have replaced Ivans place, " + name + " is free to go now///</b>";
	sentance8 = "";
	buttontext1.innerHTML = "start";
	option1.onclick = fullreset;
}

function destroy() {
	console.log("destroy it all");
	body.id = "matrix";
	head.innerHTML = "end";
	sentance = "<b>///as you destroy the pancakes you get stretched and twisted and find yourself in a weird space///</b><br>";
	sentance2 = "[" + name + "] what did you do?!";
	sentance3 = "[" + name + "] why did you have to destroy it!!!!";
	sentance4 = "[" + name + "] now I'll be stuck here for even longer....";
	sentance5 = "[" + name + "] I just want to go home.....";
	sentance6 = "....";
	sentance7 = "...";
	sentance8 = "[" + name + "] you did it! It's all your fault!!!!<br><br><b>///with this you locked " + name + " in here till the day someone eats the pancakes///</b>";
	buttontext1.innerHTML = "restart";
	option1.onclick = softrest;
}

function boat() {
	console.log("in the boat");
	body.id = "boat";
	head.innerHTML = "boat";
	sentance = "[" + name + "] hey now, let's not get ahead of ourselfs";
	sentance2 = "[" + name + "] I think we both know that this boat is broken";
	sentance3 = "[" + name + "] let's just go back to the hut";
	sentance4 = "[" + name + "] sounds like a plan right";
	sentance5 = "...";
	sentance6 = "[" + name + "] please don't even think of trying to use this thing";
	sentance7 = "";
	sentance8 = "";	
	buttontext1.innerHTML = "get out";
	buttontext2.innerHTML = "go anyway";
	option1.onclick = seahut;
	option2.onclick = deadman;
}

function deadman() {
	console.log("stuck in the boat");
	body.id = "boat";
	head.innerHTML = "boat";
	sentance = "[" + name + "] you... are actualy trying";
	sentance2 = "[" + name + "] it might not be to late to get out?...";
	sentance3 = "";
	sentance4 = "";
	sentance5 = "";
	sentance6 = "";
	sentance7 = "";
	sentance8 = "";	
	buttontext1.innerHTML = "keep going";
	buttontext2.innerHTML = "get out";
	option1.onclick = deadman;
	option2.onclick = death5 
}

function death5() {
	console.log("should have listend");
	body.id = "death4";
	head.innerHTML = "should have listend";
	sentance = "[" + name + "] you just had to do it didn't you";
	sentance2 = "...";
	sentance3 = "[" + name + "] we where so close...";
	sentance4 = "[" + name + "] just press f5 already";
	sentance5 = "";
	sentance6 = "";
	sentance7 = "";
	sentance8 = "";	
}


////////////////right//////////////////

function foresthut() {

	if (answer2 == true) {
		console.log("a temple in the forrest");
		body.id = "temple";
		head.innerHTML = "forest temple";
		sentance = "[" + name + "] eh?...";
		sentance2 = "[" + name + "] why is there a random temple like this here?";
		sentance3 = "[" + name + "] well whatever, let's see whats around here";
		sentance4 = "";
		sentance5 = "";
		sentance6 = "";
		sentance7 = "";
		sentance8 = "";
		buttontext1.innerHTML = "check the offerings altar";
		option1.onclick = alter;
	}

	else {
		console.log("you drowend in the swamp")
		body.id = "death4";
		head.innerHTML = "death";
		sentance = "<b>///as you tried to navigate through the swamps you got lost and drowned///</b><br>";
		sentance2 = "[" + name + "] like I said before, look at your books... you're so ignorant...";
		sentance3 = "just press f5 already";
		sentance4 = "";
		sentance5 = "";
		sentance6 = "";
		sentance7 = "";
		sentance8 = "";
	}
}

function alter() {
	console.log("at the altar");
	body.id = "altar";
	head.innerHTML = "offerings altar";
	sentance = "<b>///at the offerings altar is a sign that says: 'blood for blood, soul for soul, all will be equal in the end'///</b><br>";
	sentance2 = "[" + name + "] well that doesn't sound inviting...";
	sentance3 = "..."
	sentance4 = "[" + name + "] so, what do we do now?";
	sentance5 = "";
	sentance6 = "";
	sentance7 = "";
	sentance8 = "";
	buttontext1.innerHTML = "offer your blood";
	buttontext2.innerHTML = "offer your soul";
	option1.onclick = bloodymess;
	option2.onclick = deadlymess;
}

function bloodymess() {
	console.log("well that was point less");
	body.id = "altar";
	head.innerHTML = "offerings altar";
	sentance = "...";
	sentance2 = "[" + name + "] nothing happend...";
	sentance3 = "[" + name + "] welp, that was pointless!";
	sentance4 = "";
	sentance5 = "";
	sentance6 = "";
	sentance7 = "";
	sentance8 = "";
	buttontext1.innerHTML = "give some more blood";
	buttontext2.innerHTML = "offer your soul";
	option1.onclick = bloodymess;
	option2.onclick = deadlymess;
}

function deadlymess() {
	console.log("friendly neigbourhood death");
	body.id = "grim";
	grimimg.style.display = "inline";
	head.innerHTML = "mr. grim";
	sentance = "[??] whoa, what are you guys doing here?";
	sentance2 = "[" + name + "] what... who are you?";
	sentance3 = "[grim] I'm grim, the grimreaper of this world";
	sentance4 = "[grim] and you just killed your self...";
	sentance5 = "[" + name + "[ don't look at me, it was his idea";
	sentance6 = "[grim] well whatever, ill send you back with my blessing, nobody can stop you";
	sentance7 = "[" + name + "] so we can't die?";
	sentance8 = "[grim] you won't die, unless you're dumb ofcourse";
	buttontext1.innerHTML = "respawn?"
	option1.onclick = softreset;
	deathsblessing = true;
}


/////////////deaths///////////////////

function death1() {
	console.log("yup, you died")
	head.innerHTML = "raiders";
	sentance = "[Demon raider] where are they!! where are the pancakes!!";
	sentance2 = "[woman] I don't know, and even if I did I wouldn't tell you!";
	
	if (deathsblessing == false) {
		sentance3 = "[" + name + "] wait... are they fighting over pancakes...";
		sentance4 = "[" + name + "] let's just leave there is nothing here we can do";
		sentance5 = "[demon raider] HEY! seems like there is an eye witness, take him out guys!!";
		sentance6 = "<br><b>///a group of demons starts running at you///</b><br>";
		sentance7 = "[" + name + "] you should have listend, you just got killed over some pancakes... just press f5 already";
		sentance8 = "";
		body.id = "death";
	}

	else {
		sentance3 = "[" + name + "] so what will you do? I mean you do have the blessing of grim";
		sentance4 = "[" + name + "] we could try to beat the sh!t out of them";
		sentance5 = "[demon raider] HEY! seems like there is an eye witness, take him out guys!!";
		sentance6 = "<br><b>///a group of demons starts running at you///</b><br>";
		sentance7 = "[" + name + "] okay, you got this";
		sentance8 = ""; 
		body.id = "win" 	
		buttontext1.innerHTML = "fight them";
		option1.onclick = win;
	}
}

function death2() {
	console.log("yeah.. you died");
	body.id = "death2";
	head.innerHTML = "death";
	sentance = "[human raider] we just need to wait for reinforcements";
	sentance2 = "[angry man] why, are we aiming for the castle?";
	sentance3 = "[human raider] yeah, we're huning for the holy syrup";

	if (deathsblessing == false) {
		sentance4 = "[" + name + "] ... holy syrup... let's just leave, it's just a group of morons"
		sentance5 = "<br><b>///as you try to get closer you fall over, breaking multiple tents///</b><br>";
		sentance6 = "[human raider] AH, you arn't our reinforcements are you...";
		sentance7 = "[angry man] SHIT, now he know all about the holy syrup!!!!";
		sentance8 = "<br><b>///the group of raiders starts running at you///</b><br>[" + name + "] you just got killed over some syrup... just press f5 already";
	}

	else {
		sentance4 = "[" + name + "] so what will you do? I mean you do have the blessing of grim";
		sentance5 = "[" + name + "] we could try to beat the sh!t out of them";
		sentance6 = "[demon raider] HEY! seems like there is an eye witness, take him out guys!!";
		sentance7 = "<br><b>///a group of demons starts running at you///</b><br>";
		sentance8 = "[" + name + "] okay, you got this";
		body.id = "win2";
		buttontext1.innerHTML = "fight them";
		option1.onclick = win3;
	}
}

//////////////////reset/////////////////

function fullreset() {
	name = "<b class='voice'>" + user + "</b>";
	var firstthrone = true;
	var firstthrone2 = true;
	var hint1 = false;
	var answer1 = false;	
	var hint2 = false;
	var hint3 = false;
	var answer2 = false;
	item[0].style.display = "none";
	item[1].style.display = "none";
	item[2].style.display = "none";
	item[3].style.display = "none";
	item[4].style.display = "none";

	nameing.style.display = "inline";
	game.style.display = "none"
	
}

function softreset() {
	var firstthrone = true;
	var firstthrone2 = true;
	var hint1 = false;
	var answer1 = false;	
	var hint2 = false;
	var hint3 = false;
	var answer2 = false;
	item[0].style.display = "none";
	item[1].style.display = "none";
	item[2].style.display = "none";
	item[3].style.display = "none";
	item[4].style.display = "none";
	areyousure.style.display = "none";

	console.log("cave");
	body.id = "cave";
	titlescreen.style.visibility = "hidden";
	buttontext1.innerHTML = "go left";
	buttontext2.innerHTML = "go right";
	head.innerHTML = "Cave";
	sentance2 = "[" + name + "] I'm your inner voice, I'll be leading you trough this 'game', just call me " + name + " or something";
	sentance3 = "[" + name + "] So, right now you can eighter follow the left path to the Human kingdom";
	sentance4 = "[" + name + "] Or go right to the Demon kingdom";
	sentance5 = "[" + name + "] Thats it..";
	sentance6 = "[" + name + "] ...";
	sentance7 = "[" + name + "] It's not hard, just press left or right";
	sentance8 = "";
	option1.onclick = left;
	option2.onclick = right;

	if (deathsblessing == true) {
		grimimg.id = "grimreaper2";
		item[5].style.display = "inline";
		newitem.style.display = "inline";
	}
}

function restart() {
	areyousure.style.display = "inline";
}