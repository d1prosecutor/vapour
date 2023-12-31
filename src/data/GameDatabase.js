// function setDb() {
const games = [
    {
        title: 'A Plague Tale: Innocence',
        publisher: 'Focus Home Interactive',
        genre: 'Action',
        description:
            "A Plague Tale: Innocence is an action-adventure survival horror stealth game developed by Asobo Studio and published by Focus Home Interactive. It was released for Windows, PlayStation 4 and Xbox One in May 2019. The PlayStation 5 and Xbox Series X/S versions of the game were released in July 2021, alongside a cloud-based edition for the Nintendo Switch and a release on the Amazon Luna game streaming service. Set in 14th century Aquitaine, France during the Hundred Years' War, the game focuses on the plight of Amicia de Rune and her ill brother Hugo as they flee from soldiers of the French Inquisition and from hordes of rats that are spreading the black plague. The player controls Amicia, using a combination of stealth and limited tools to hide from, distract, or knock out soldiers, evade rat hordes, and solve puzzles, incorporating elements of survival horror games. ",
        image: './images/plaguetale.jpeg',
        ratings: 69,
        price: 80,
        owned: false
    },
    {
        title: 'Battlerite',
        publisher: 'Stunlock Studios',
        genre: 'Action',
        description:
            'Battlerite is a free-to-play team-based action game based on multiplayer online battle arena (MOBA) gameplay[1][2][3][4] developed and published by Stunlock Studios. The game is considered a spiritual successor to Bloodline Champions and is created by the same developers. An early access version of the game was released in September 2016, selling over 440,000 copies within three months, and was officially released on November 7, 2017. ',
        image: './images/battlerite.png',
        ratings: 73,
        price: 85,
        owned: true
    },
    {
        title: 'BlazBlue: Cross Tag Battle',
        publisher: 'Arc System Works',
        genre: 'Action',
        description:
            'An unrivaled clash of explosive proportions! The beloved BlazBlue franchise Crosses universes, Tags in fan favorites, and Battles it out in BlazBlue: Cross Tag Battle! Created through an all-star collaboration between BlazBlue, Atlus’ Persona, French Bread’s Under Night In-Birth, and Rooster Teeth’s hugely popular RWBY web series, Cross Tag Battle celebrates the fighting genre for pros and newcomers alike! Choose your team in fast paced 2v2 team battles filled with the craziness you’ve come to love from BlazBlue, with all the tight mechanics, smooth gameplay, and gorgeous 2D graphics you expect from Arc System Works.',
        image: './images/blazblue.jpg',
        ratings: 55,
        price: 90,
        owned: true
    },
    {
        title: 'Dead by Daylight',
        publisher: 'Starbreeze Studios',
        genre: 'Action',
        description:
            "Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught, tortured and killed.\nSurvivors play in third-person and have the advantage of better situational awareness. The Killer plays in first-person and is more focused on their prey.\nThe Survivors' goal in each encounter is to escape the Killing Ground without getting caught by the Killer - something that sounds easier than it is, especially when the environment changes every time you play.",
        image: './images/deadbydaylight.jpeg',
        ratings: 80,
        price: 70,
        owned: true
    },
    {
        title: 'Dishonored®: Death of the Outsider™',
        publisher: 'Bethesda Softworks',
        genre: 'Action',
        description:
            "From the award-winning developers at Arkane® Studios comes Dishonored®: Death of the Outsider, the next standalone adventure in the critically-acclaimed Dishonored® series. Be a badass supernatural assassin and take on the role of notorious Billie Lurk as she reunites with her mentor Daud in order to pull off the greatest assassination ever conceived. Building upon Dishonored® 2’s signature gameplay and art style, Death of the Outsider features all the series hallmarks, including brutal combat systems, unique level design, and immersive storytelling that responds to your every choice. With compelling characters and exhilarating action, Death of the Outsider is the perfect entry point for those new to the Dishonored series, while delivering a significant expansion of the gameplay and world for longtime fans.",
        image: './images/dishonoreddeathoutsider.jpg',
        ratings: 98,
        price: 40,
        owned: false
    },
    {
        title: "Star Control®: Origins",
        publisher: "Stardock Entertainment",
        genre: "Action",
        description: "Welcome to Star Control, Captain! You’re here because you’ve shown exemplary service, aced all your flight exams, and - most importantly - passed all the sanity tests.\nHumanity has learned that it is not alone in the universe and that we are hopelessly outmatched by alien civilizations seeking to destroy us. You have been selected to command Earth's first and only interstellar starship to accomplish this - try not to break it. It was expensive.\nYour mission: Save humanity, Captain. At all costs and by any means necessary.",
        image: "./images/starcontrol.jpg",
        ratings: 99,
        price: 60,
        owned: false
    },
    {
        title: "Forager",
        publisher: "Humble Bundle",
        genre: "Action",
        description: "Forager is a 2D open world game inspired by exploration, farming and crafting games such as Stardew Valley, Terraria & Zelda.",
        image: "./images/forager.jpg",
        ratings: 49,
        price: 50,
        owned: false
    },
    {
        title: "Project Winter",
        publisher: "Other Ocean",
        genre: "Action",
        description: "Betray your friends in this 8 person multiplayer focused on social deception and survival.\nCommunication and teamwork is essential to the survivors’ ultimate goal of escape. Gather resources, repair structures, and brave the wilderness together. Just beware that there are traitors within the group working to sabotage your chances of getting out alive by any means necessary.",
        image: "./images/projectwinter.jpg",
        ratings: 50,
        price: 60,
        owned: false
    },
    {
        title: "LEGO® Batman: The Videogame",
        publisher: "Warner Bros. Interactive Entertainment",
        genre: "Action",
        description: "When all the villains in Arkham Asylum team up and break loose, only the dynamic duo is bold enough to take them on to save Gotham City. The fun of LEGO, the drama of Batman and the uniqueness of the combination makes for a comical and exciting adventure in LEGO Batman: The Videogame. Play as Batman and his sidekick Robin as you build, drive, swing and fight your way through Gotham City capturing escaped villains including The Joker, Penguin, Scarecrow and more. Then, jump into the story from the other side and play as Batmans foes! Enjoy the power you wield and battle Batman while spreading chaos throughout the city. There is no rest for the good (or evil!). ",
        image: "./images/legobatman.jpg",
        ratings: 74,
        price: 45,
        owned: false
    },
    {
        title: "LEGO® Batman™ 3: Beyond Gotham",
        publisher: "Warner Bros. Interactive Entertainment",
        genre: "Action",
        description: "The best-selling LEGO Batman videogame franchise returns in an out-of-this-world, action-packed adventure! In LEGO Batman™ 3: Beyond Gotham, the Caped Crusader joins forces with the super heroes of the DC Comics universe and blasts off to outer space to stop the evil Brainiac from destroying Earth. Using the power of the Lantern Rings, Brainiac shrinks worlds to add to his twisted collection of miniature cities from across the universe. Now the greatest super heroes and the most cunning villains must unite and journey to different Lantern Worlds to collect the Lantern Rings and stop Brainiac before it’s too late. ",
        image: "./images/legobatman3.jpg",
        ratings: 32,
        price: 55,
        owned: false
    },
    {
        title: 'EARTH DEFENSE FORCE 5',
        publisher: 'D3 PUBLISHER',
        genre: 'Adventure',
        description:
            "Stand and fight for humanity.\nThis arcade shooter takes place in the year 2022, as the Earth Defense Force fends off an all-out attack by unknown life forms. Become an EDF soldier, battle against endless hordes of immense enemies, and restore peace to the earth.\nMake way for the series' first humanoid aliens.\nJust what is this intelligent, extraterrestrial civilization that has attacked our own, known only as the Primers? Matching their intelligence, they bring the series' first humanoid alien foes. Battling against these intelligent foes will bring you to the depths of yet-unknown despair, and the heights of joy.\nFace the enemy with wisdom and courage!",
        image: './images/earthdefence5.jpg',
        ratings: 38,
        price: 60,
        owned: false
    },
    {
        title: 'Factorio',
        publisher: 'Wube Software',
        genre: 'Adventure',
        description:
            "Factorio is a game in which you build and maintain factories. You will be mining resources, researching technologies, building infrastructure, automating production and fighting enemies. In the beginning you will find yourself chopping trees, mining ores and crafting mechanical arms and transport belts by hand, but in short time you can become an industrial powerhouse, with huge solar fields, oil refining and cracking, manufacture and deployment of construction and logistic robots, all for your resource needs. However this heavy exploitation of the planet's resources does not sit nicely with the locals, so you will have to be prepared to defend yourself and your machine empire. ",
        image: './images/factorio.jpg',
        ratings: 58,
        price: 40,
        owned: false
    },
    {
        title: 'Friday the 13th: The Game',
        publisher: 'Gun Media',
        genre: 'Adventure',
        description:
            "Friday the 13th: The Game is a third-person horror, survival game where players take on the role of a teen counselor, or for the first time ever, Jason Voorhees. You and six other unlucky souls will do everything possible to escape and survive while the most well-known killer in the world tracks you down and brutally slaughters you. Friday the 13th: The Game will strive to give every single player the tools to survive, escape or even try to take down the man who cannot be killed. Each and every gameplay session will give you an entirely new chance to prove if you have what it takes not only to survive, but to best the most prolific killer in cinema history, a slasher with more kills than any of his rivals!\nMeanwhile, Jason will be given an array of abilities to track, hunt and kill his prey. Stalk from the shadows, scare your targets and kill them when the time is right in as brutal a fashion as you can imagine. Take control of the legendary killer that is Jason Voorhees and terrify those unfortunate enough to cross your path!",
        image: './images/friday13thgame.jpeg',
        ratings: 92,
        price: 40,
        owned: true
    },
    {
        title: 'GUILTY GEAR Xrd -REVELATOR-',
        publisher: 'Arc System Works',
        genre: 'Adventure',
        description:
            "Get ready to rock again! Guilty Gear Xrd REV 2 includes new fighters, moves, story chapters and more! It’s never been a better time to be a 2.5D brawler in the post apocalypse! Hone your skills with an eclectic cast of 25 insane fighters and prove your mettle as the ultimate fighting master.\nRevolutionary 3D cell-animation graphics further refined, and more game contents added! The next-generation fighting game 'Guilty Gear Xrd REV 2' is now out on Steam!\nCarrying on the legacy from 1998, comes the next addition to the 'Guilty Gear' series! All visuals have been tweaked to the finest detail and hand-polished by the animation masters to produce the top quality hand-drawn anime effect! Game contents revamped to provide for gamers of all skill levels, you cannot miss out on this one!",
        image: './images/guiltygearxrd.jpg',
        ratings: 57,
        price: 75,
        owned: true
    },
    {
        title: 'HITMAN™',
        publisher: 'IO Interactive A/S',
        genre: 'Adventure',
        description:
            "Experiment and have fun in the ultimate playground as Agent 47 to become the master assassin. Travel around the globe to exotic locations and eliminate your targets with everything from a katana or a sniper rifle to an exploding golf ball or some expired spaghetti sauce.",
        image: './images/hitman.jpg',
        ratings: 70,
        price: 75,
        owned: false
    },
    {
        title: "LEGO® DC Super-Villains",
        publisher: "Warner Bros. Interactive Entertainment",
        genre: "Adventure",
        description: "It's good to be bad… Embark on an all-new DC/LEGO® adventure by becoming the best villain the universe has seen. Players will create and play as an all-new super-villain throughout the game, unleashing mischievous antics and wreaking havoc in an action-packed story. Set in an open world experience within the DC universe, the Justice League has disappeared, leaving Earth's protection to their counterparts, who have proclaimed themselves as the 'Justice Syndicate'. It's up to you and a crazy group of misfits to uncover the intentions of Earth's new, strange, wannabe superheroes. Joined by renowned DC Super-Villains: The Joker, Harley Quinn, and countless others from the Injustice League, players will set out on an epic adventure. ",
        image: "./images/legodc.jpg",
        ratings: 37,
        price: 85,
        owned: false
    },
    {
        title: "LEGO® Marvel Super Heroes 2",
        publisher: "Warner Bros. Interactive",
        genre: "Adventure",
        description: "It's about TIME! Join your favorite Super Heroes and Super Villains from different eras and realities as they go head-to-head with the time-traveling Kang the Conqueror in the all-new, original adventure, LEGO® Marvel Super Heroes 2! Play as the Guardians of the Galaxy, Spider-Man, Thor, Hulk, Black Panther, Captain Marvel, Doctor Strange, Green Goblin and dozens of other Marvel Super Heroes and Villains in this cosmic battle across the time-tossed city of Chronopolis! Travel across lands -- from Ancient Egypt to The Old West, Sakaar and New York City in 2099 -- and transport objects or characters through the centuries! And, with new battle modes, friends and family can play against each other in a series of themed challenges and battle arenas! ",
        image: "./images/legomarvel.jpg",
        ratings: 37,
        price: 35,
        owned: false
    },
    {
        title: "LEGO® MARVEL's Avengers",
        publisher: "Warner Bros. Interactive Entertainment",
        genre: "Adventure",
        description: " Avengers Assemble! The best-selling LEGO® MARVEL videogame franchise returns with a new action-packed, Super Hero adventure. Join the LEGO® MARVEL's Avengers team and experience a videogame featuring characters and storylines from the critically-acclaimed films and more. Play as the most powerful Super Heroes in their quest to save the world. ",
        image: "./images/legoavengers.jpg",
        ratings: 64,
        price: 30,
        owned: false
    },
    {
        title: "LEGO® Marvel™ Super Heroes",
        publisher: "Warner Bros. Interactive Entertainment",
        genre: "Adventure",
        description: "LEGO® Marvel™ Super Heroes features an original story crossing the entire Marvel Universe. Players take control of Iron Man, Spider-Man, the Hulk, Captain America, Wolverine and many more Marvel characters as they unite to stop Loki and a host of other Marvel villains from assembling a super-weapon capable of destroying the world. Players will chase down Cosmic Bricks as they travel across LEGO Manhattan and visit key locations from the Marvel Universe, such as Stark Tower, Asteroid M, a Hydra base and the X-Mansion.",
        image: "./images/legosuper.jpg",
        ratings: 38,
        price: 40,
        owned: false
    },
    {
        title: "Minecraft: Java Version",
        publisher: "Microsoft Studios",
        genre: "Adventure",
        description: "Minecraft is a sandbox game developed by Mojang Studios. The game was created by Markus 'Notch' Persson in the Java programming language. Following several early private testing versions, it was first made public in May 2009 before being fully released in November 2011, with Notch stepping down and Jens 'Jeb' Bergensten taking over development. Minecraft is the best-selling video game of all time, with over 238 million copies sold and nearly 140 million monthly active players as of 2021, and has been ported to several platforms.",
        image: "./images/minecraft.jpeg",
        ratings: 40,
        price: 75,
        owned: false
    },
    {
        title: 'HITMAN™2',
        publisher: 'Warner Bros Interactive Entertainment',
        genre: 'Family',
        description:
            "Travel to exotic locations around the world and experience rich and detailed environments that are packed full of opportunities. From a high-powered car race in Miami to the hot streets of Mumbai and the dangerous Colombian rainforests, each HITMAN 2 location has been meticulously crafted with an extremely high level of fidelity.\nYou’re in full control and the world will react to whatever you do. Use stealth techniques, improvisation and all your creativity to take down your targets in spectacular and ingenious ways utilizing an assortment of tools, weapons and unexpected disguises.",
        image: './images/hitman2.jpg',
        ratings: 95,
        price: 60,

        owned: false
    },
    {
        title: 'Injustice™ 2',
        publisher: 'Warner Bros. Interactive Entertainment',
        genre: 'Family',
        description:
            "Power up and build the ultimate version of your favourite DC legends in INJUSTICE 2.\n•EVERY BATTLE DEFINES YOU: With every match you'll earn gear to equip, customise and evolve your roster.\n•A NEW THREAT RISES: Picking up where Injustice left off, Batman struggles against Superman's regime, as a new threat appears that will put Earth's very existence at risk.\n•THE BEST OF DC: Choose from the biggest DC Universe roster ever and battle across iconic locations in epic-scale battles.\n•BUILT BY NETHERREALM: Developers of the best-selling and critically acclaimed MORTAL KOMBAT franchise. ",
        image: './images/injustice2.jpg',
        ratings: 64,
        price: 80,
        owned: false
    },
    {
        title: 'Killing Floor 2',
        publisher: 'Tripwire Interactive',
        genre: 'Family',
        description:
            "In KILLING FLOOR 2, players descend into continental Europe where the outbreak caused by Horzine Biotech’s failed experiment has quickly spread and gained unstoppable momentum, essentially paralyzing the European Union— Just one month after the events in the original KILLING FLOOR, the specimen clones are everywhere and civilization is in disarray; communications have failed, governments have collapsed, and military forces have been systematically eradicated. The people of Europe know survival and self-preservation too well and lucky survivors have gone into hiding.",
        image: './images/killingfloor2.jpg',
        ratings: 57,
        price: 80,
        owned: false
    },
    {
        title: 'Mortal Kombat 11',
        publisher: 'Warner Bros Interactive Entertainment',
        genre: 'Family',
        description:
            "MK is back and better than ever in the next evolution of the iconic franchise.\nThe all new Custom Character Variations give you unprecedented control of your fighters to make them your own. The new graphics engine showcases every skull-shattering, eye-popping moment, bringing you so close to the fight you can feel it. Featuring a roster of new and returning Klassic Fighters, Mortal Kombat's best-in-class cinematic story mode continues the epic saga over 25 years in the making. ",
        image: './images/mortalkombat11.jpg',
        ratings: 78,
        price: 80,
        owned: false
    },
    {
        title: 'Portal™',
        publisher: 'Valve',
        genre: 'Family',
        description:
            "Portal™ is a new single player game from Valve. Set in the mysterious Aperture Science Laboratories, Portal has been called one of the most innovative new games on the horizon and will offer gamers hours of unique gameplay.\nThe game is designed to change the way players approach, manipulate, and surmise the possibilities in a given environment; similar to how Half-Life® 2's Gravity Gun innovated new ways to leverage an object in any given situation.\nPlayers must solve physical puzzles and challenges by opening portals to maneuvering objects, and themselves, through space.",
        image: './images/portal.jpg',
        ratings: 52,
        price: 50,
        owned: true
    },
    {
        title: "Sonic Mania",
        publisher: "SEGA",
        genre: "Family",
        description: "Sonic Mania is a 2017 platform game published by Sega for Nintendo Switch, PlayStation 4, Xbox One, and Windows. Produced in commemoration of the Sonic the Hedgehog series' 25th anniversary, Sonic Mania pays homage to the original Sega Genesis Sonic games, featuring speedy side-scrolling gameplay. It takes place over 13 levels, including several redesigned from past games. The story follows Sonic, Tails and Knuckles as they venture to defeat their nemesis Doctor Eggman and his robotic henchmen, the Hard-Boiled Heavies. ",
        image: "./images/sonicmania.jpg",
        ratings: 84,
        price: 75,
        owned: false
    },
    {
        title: "Yooka-Laylee",
        publisher: "Team17 Digital Ltd",
        genre: "Family",
        description: "Yooka-Laylee is an all-new open-world platformer from genre veterans Playtonic!\nExplore huge, beautiful worlds, meet (and beat) an unforgettable cast of characters and horde a vault-load of shiny collectibles as buddy-duo Yooka (the green one) and Laylee (the wisecracking bat with the big nose) embark on an epic adventure to thwart corporate creep Capital B and his devious scheme to absorb all the world’s books… and convert them into pure profit!\nUsing their arsenal of special moves, our heroes will tackle a huge variety of puzzles and platforming challenges in their search for Pagies, the golden bounty used to unlock — and expand — stunning new worlds, each jammed to the gills with oddball characters, hulking bosses, minecart challenges, arcade games, quiz shows, multiplayer games… and much more!",
        image: "./images/yookalaylee.jpg",
        ratings: 96,
        price: 90,
        owned: false
    },
    {
        title: "Call of Duty®: Infinite Warfare",
        publisher: "Activision",
        genre: "Family",
        description: "Includes the Terminal Bonus Map and Zombies in Spaceland Pack, contains a weapon camo, calling card, and a Fate and Fortune Card Pack.\nInfinite Warfare delivers three unique game modes: Campaign, Multiplayer, and Zombies.\nIn Campaign, players play as Captain Reyes, a pilot turned Commander, who must lead the remaining coalition forces against a relentless, fanatical enemy, while trying to overcome the deadly, extreme environments of space.\nMultiplayer combines a fluid momentum based movement system, player focused map design, deep customization, and a brand new combat rig system to create an intense gameplay experience where every second counts. Combat Rigs (Rigs) are the ultimate combat systems. Each Rig is a cutting-edge, tactical combat suit worn by the player and is built for totally different styles of play. Players will also join one of four brand-new Mission Teams to unlock calling cards, camos, emblems, and weapons unique to that team.\nIn Zombies, go back in time to fight the undead in a 1980s amusement park, complete with a plethora of rides, an awesome arcade, and a funky, functioning rollercoaster. Embrace previously beloved aspects of the mode like easter eggs, power ups, and novel weapons while experiencing innovations like brand-new team mechanics, the After Life Arcade, and Fate and Fortune Cards. ",
        image: "./images/infinitewarfare.jpg",
        ratings: 32,
        price: 70,
        owned: false
    },
    {
        title: "Dishonored",
        publisher: "Bethesda Softworks",
        genre: "Family",
        description: "Dishonored is an immersive first-person action game that casts you as a supernatural assassin driven by revenge. With Dishonored’s flexible combat system, creatively eliminate your targets as you combine the supernatural abilities, weapons and unusual gadgets at your disposal. Pursue your enemies under the cover of darkness or ruthlessly attack them head on with weapons drawn. The outcome of each mission plays out based on the choices you make",
        image: "./images/dishonored.jpg",
        ratings: 89,
        price: 70,
        owned: false
    },
    {
        title: "Call of Duty®: Black Ops III",
        publisher: "Activision",
        genre: "Family",
        description: "Call of Duty®: Black Ops III Zombies Chronicles Edition includes the full base game and the Zombies Chronicles content expansion.\nCall of Duty: Black Ops III combines three unique game modes: Campaign, Multiplayer, and Zombies, providing fans with the deepest and most ambitious Call of Duty ever.\nThe Zombies Chronicles content expansion delivers 8 remastered classic Zombies maps from Call of Duty®: World at War, Call of Duty®: Black Ops and Call of Duty®: Black Ops II. Complete maps from the original saga are fully remastered and HD playable within Call of Duty®: Black Ops III. ",
        image: "./images/blackops3.jpg",
        ratings: 44,
        price: 75,
        owned: false
    },
    {
        title: 'RAD',
        publisher: 'BANDAI NAMCO Entertainment America Inc.',
        genre: 'Shooter',
        description:
            "RAD is a 3D action rogue-like set in a post-post-apocalyptic world, where humanity has faced armageddon not once, but twice.\nPlaying as a teenage protagonist, you must venture into the Fallow — an ever-changing, radioactive wasteland filled with unknown and unspeakable creatures.\nBut humanity’s future comes at great personal cost, as the deeper you journey into unknown lands, the more you will expose yourself to gnarly toxins which will wreak havoc on your fragile human form.\nThe fate of the world depends on you, your trusty bat, and whatever strange new abilities you gain as the world around you ravages your body — twisting and mutating you into something far less than human, but far more powerful.\nBut forget all that — go grab that sweet bat and help save the world…or what’s remaining of it anyway! ",
        image: './images/rad.jpg',
        ratings: 53,
        price: 65,
        owned: true
    },
    {
        title: 'Star Wars: Battlefront 2 (Classic, 2005)',
        publisher: 'Disney Interactive',
        genre: 'Shooter',
        description:
            "With brand new space combat, playable Jedi characters, and over 16 all new battlefronts, Star Wars Battlefront II gives you more ways than ever before to play the classic Star Wars battles any way you want.\nEnhanced Single-Player Experience - Join the rise of Darth Vader’s elite 501st Legion of Stormtroopers as you fight through an all new story-based saga where every action you take impacts the battlefront and, ultimately, the fate of the Star Wars galaxy.\nAll New Classic Trilogy Locations - Fight inside the corridors of the second Death Star, in the marshy swamps of Dagobah, and even aboard the Tantive IV, Princess Leia’s Blockade Runner, as seen at the beginning of Star Wars Episode IV: A New Hope.\nMore Classes and Vehicles - Now choose from six distinct soldier classes, plus bonus hero characters for each of the four factions: Rebels, Imperials, CIS and the Republic. Then jump into more than 30 diverse ground and space vehicles, including the clone BARC speeder, AT-RT and new Jedi Starfighter and ARC 170.\nPLUS Improved Online Features - Engage in massive online battles with multiplayer action for up to 64 players. Play five different online game modes including Conquest, Assault, one-and two-flag Capture the Flag, and Hunt.\nNow for the first time, Star Wars Battlefront II lets you…\nFight as a Jedi - Earn the ability to wield a lightsaber and use Force powers like Yoda, Darth Vader and many other heroes and villains.\nBattle in Space - Dogfight in X-wings, TIE fighters, Jedi starfighters and other classic starcraft, or land your ship on a star destroyer and fight it out on foot aboard enemy ships.\nPlay 16 New Locations - Battle across Star Wars: Episode III environments such as Utapau, Mustafar and the epic space battle above Coruscant.",
        image: './images/starwarsbf2.jpg',
        ratings: 50,
        price: 30,
        owned: true
    },
    {
        title: 'The Surge 2',
        publisher: 'Focus Home Interactive',
        genre: 'Shooter',
        description:
            "On the way to Jericho City, your plane is shot down by a mysterious storm and crash-lands in the outskirts. You wake up weeks later in a derelict detention facility inside the city. Armor-clad soldiers enforce Martial Law, robots are on a rampage, and a dark, expanding nanostorm looms over the cityscape...\nWith an expanded arsenal of weapons, armors, abilities, implants, and drones to build your character, and a bigger, more varied and more ambitious world, The Surge 2 challenges you to survive and unravel its hidden secrets.\nIn a bid to survive, explore the sprawling, devastated city of Jericho. Fight its numerous, ferocious threats in brutal, unforgiving combat, slashing and tearing the limbs off your opponents to steal valuable equipment that will make you stronger - strong enough to face the most fearsome, imposing foes lurking in the city. ",
        image: './images/surge2.jpg',
        ratings: 67,
        price: 50,
        owned: true
    },
    {
        title: 'WARRIORS OROCHI 4',
        publisher: 'KOEI TECMO GAMES CO., LTD.',
        genre: 'Shooter',
        description:
            "The supreme 'WARRIORS OROCHI' experience is here!\nThe definitive installment of the 'WARRIORS OROCHI 4', featuring all the content of the WARRIORS OROCHI 4: The Ultimate Upgrade Pack, is available now.\n■ About WARRIORS OROCHI 4:\n- Dream collaboration between characters of SAMURAI WARRIORS and DYNASTY WARRIORS\n- The largest roster of playable characters: 170 unique characters!\n- New Magic action and powered-up Musou attacks!\n- New unexpected and captivating characters!",
        image: './images/warriorsorochi4.png',
        ratings: 63,
        price: 50,
        owned: true
    },
    {
        title: 'Assassin’s Creed® III Remastered',
        publisher: 'Ubisoft',
        genre: 'Shooter',
        description:
            "Relive the American Revolution or experience it for the first time in Assassin's Creed® III Remastered, with enhanced graphics and improved gameplay mechanics. Also includes Assassin's Creed Liberation remastered and all solo DLC content.\nFIGHT FOR FREEDOM\n1775. The American Colonies are about to revolt. As Connor, a Native American Assassin, secure liberty for your people and your nation. From bustling city streets to the chaotic battlefields, assassinate your foes in a variety of deadly ways with a vast array of weaponry.\nA NEW VISUAL AND GAMEPLAY EXPERIENCE\nPlay the iconic Assassin's Creed III, with enhanced graphics, now featuring: 4K resolution, new character models, polished environment rendering and more. The gameplay mechanics have been revamped as well, improving your experience and your immersion.",
        image: './images/assassinscreed3.jpg',
        ratings: 31,
        price: 50,
        owned: true
    },
    {
        title: "Far Cry® 4",
        publisher: "Ubisoft",
        genre: "Shooter",
        description: "Hidden in the towering Himalayas lies Kyrat, a country steeped in tradition and violence. You are Ajay Ghale. Traveling to Kyrat to fulfill your mother’s dying wish, you find yourself caught up in a civil war to overthrow the oppressive regime of dictator Pagan Min. Explore and navigate this vast open world, where danger and unpredictability lurk around every corner. Here, every decision counts, and every second is a story. Welcome to Kyrat.",
        image: "./images/farcry4.jpg",
        ratings: 82,
        price: 45,
        owned: false
    },
    {
        title: "Far Cry® 5",
        publisher: "Ubisoft",
        genre: "Shooter",
        description: "Far Cry comes to America in the latest installment of the award-winning franchise.\nWelcome to Hope County, Montana, land of the free and the brave but also home to a fanatical doomsday cult known as Eden’s Gate. Stand up to cult leader Joseph Seed, and his siblings, the Heralds, to spark the fires of resistance and liberate the besieged community",
        image: "./images/farcry5.jpg",
        ratings: 76,
        price: 75,
        owned: false
    },
    {
        title: "Far Cry® New Dawn",
        publisher: "Ubisoft",
        genre: "Shooter",
        description: "Dive into a transformed vibrant post-apocalyptic Hope County, Montana, 17 years after a global nuclear catastrophe.\nJoin fellow survivors and lead the fight against the dangerous new threat the Highwaymen, and their ruthless leaders The Twins, as they seek to take over the last remaining resources. ",
        image: "./images/farcrynd.jpg",
        ratings: 73,
        price: 30,
        owned: false
    },
    {
        title: "Far Cry® Primal",
        publisher: "Ubisoft",
        genre: "Shooter",
        description: "The award-winning Far Cry franchise that stormed the tropics and the Himalayas now enters the original fight for humanity’s survival with its innovative open-world sandbox gameplay, bringing together massive beasts, breathtaking environments, and unpredictable savage encounters.\nWelcome to the Stone Age, a time of extreme danger and limitless adventure, when giant mammoths and sabretooth tigers ruled the Earth and humanity is at the bottom of the food chain. As the last survivor of your hunting group, you will learn to craft a deadly arsenal, fend off fierce predators, and outsmart enemy tribes to conquer the land of Oros and become the Apex Predator.",
        image: "./images/farcryp.jpg",
        ratings: 81,
        price: 30,
        owned: false
    },
    {
        title: "Homefront®: The Revolution",
        publisher: "Deep Silver",
        genre: "Shooter",
        description: "Homefront®: The Revolution is an open-world first person shooter where you must lead the Resistance movement in guerrilla warfare against a superior military force.\nA living, breathing, open world responds to your actions - you and your Resistance Cell can inspire a rebellion on the streets and turn Occupation into Revolution, as oppressed civilians take up the fight.\nBut your enemy has the advantage - superior technology, firepower, heavy armour and air support. You must learn the art of guerrilla warfare – ambush, sabotage, infiltration, deception – and fight a running battle through the war-ravaged suburbs of Philadelphia.\nAnd the single player campaign is just the start – in Co-Op you and your friends can form your own Resistance Cell and become renowned as Heroes of the Revolution.",
        image: "./images/homefront.jpg",
        ratings: 49,
        price: 90,
        owned: false
    },
    {
        title: "Black Future '88",
        publisher: 'Ubisoft',
        genre: 'RPG',
        description:
            "Black Future ’88 is a Synth-Punk roguelike 2D action Shooter. Vertically climb an always evolving procedural tower to reach the top and kill its insane owner…before your heart explodes. Shoot, slash, dash and upgrade yourself to survive the endless waves of deadly traps, homicidal AI, crazed junkies and colossal Wardens standing in your way in a stylish alternative version of 1988.",
        image: './images/blackfuture88.jpg',
        ratings: 50,
        price: 45,

        owned: true

    },
    {
        title: 'Assassin’s Creed® IV Black Flag™',
        publisher: 'Ubisoft',
        genre: 'RPG',
        description:
            "The year is 1715. Pirates rule the Caribbean and have established their own lawless Republic where corruption, greediness and cruelty are commonplace.\nAmong these outlaws is a brash young captain named Edward Kenway. His fight for glory has earned him the respect of legends like Blackbeard, but also drawn him into the ancient war between Assassins and Templars, a war that may destroy everything the pirates have built.\nWelcome to the Golden Age of Piracy.",
        image: './images/assassinscreed4.jpg',
        ratings: 78,
        price: 80,

        owned: true

    },
    {
        title: 'Assassin’s Creed® Odyssey',
        publisher: 'Ubisoft',
        genre: 'RPG',
        description:
            "Choose your fate in Assassin's Creed® Odyssey.\nFrom outcast to living legend, embark on an odyssey to uncover the secrets of your past and change the fate of Ancient Greece.\nTRAVEL TO ANCIENT GREECE\nFrom lush vibrant forests to volcanic islands and bustling cities, start a journey of exploration and encounters in a war torn world shaped by gods and men.\nFORGE YOUR LEGEND\nYour decisions will impact how your odyssey unfolds. Play through multiple endings thanks to the new dialogue system and the choices you make. Customize your gear, ship, and special abilities to become a legend.\nFIGHT ON A NEW SCALE\nDemonstrate your warrior's abilities in large scale epic battles between Athens and Sparta featuring hundreds of soldiers, or ram and cleave your way through entire fleets in naval battles across the Aegean Sea.\nGAZE IN WONDER\nExperience the action in a whole new light with Tobii Eye Tracking. The Extended View feature gives you a broader perspective of the environment, and the Dynamic Light and Sun Effects immerse you in the sandy dunes according to where you set your sights. Tagging, aiming and locking on your targets becomes a lot more natural when you can do it by looking at them. Let your vision lead the way and enhance your gameplay. ",
        image: './images/assassinscreedodyssey.jpg',
        ratings: 96,
        price: 50,

        owned: true

    },
    {
        title: 'Assassin’s Creed® Origins',
        publisher: 'Ubisoft',
        genre: 'RPG',
        description:
            "ASSASSIN’S CREED® ORIGINS IS A NEW BEGINNING\n*The Discovery Tour by Assassin’s Creed®: Ancient Egypt is available now as a free update!*\nAncient Egypt, a land of majesty and intrigue, is disappearing in a ruthless fight for power. Unveil dark secrets and forgotten myths as you go back to the one founding moment: The Origins of the Assassin’s Brotherhood.\nA COUNTRY TO DISCOVER\nSail down the Nile, uncover the mysteries of the pyramids or fight your way against dangerous ancient factions and wild beasts as you explore this gigantic and unpredictable land.\nA NEW STORY EVERY TIME YOU PLAY\nEngage into multiple quests and gripping stories as you cross paths with strong and memorable characters, from the wealthiest high-born to the most desperate outcasts.\nEMBRACE ACTION-RPG\nExperience a completely new way to fight. Loot and use dozens of weapons with different characteristics and rarities. Explore deep progression mechanics and challenge your skills against unique and powerful bosses. ",
        image: './images/assassinscreedorigins1.jpg',
        ratings: 100,
        price: 75,

        owned: false

    },
    {
        title: "Prey®",
        publisher: "Bethesda Softworks",
        genre: "RPG",
        description: "In Prey, you awaken aboard Talos I, a space station orbiting the moon in the year 2032. You are the key subject of an experiment meant to alter humanity forever – but things have gone terribly wrong. The space station has been overrun by hostile aliens and you are now being hunted. As you dig into the dark secrets of Talos I and your own past, you must survive using the tools found on the station -- your wits, weapons, and mind-bending abilities. The fate of the Talos I and everyone aboard is in your hands.",
        image: "./images/prey.jpg",
        ratings: 63,
        price: 55,

        owned: false

    },
    {
        title: "Shadow Warrior 2",
        publisher: "Devolver Digital",
        genre: "RPG",
        description: "Shadow Warrior 2 is the stunning evolution of Flying Wild Hog’s offbeat first-person shooter following the further misadventures of former corporate shogun Lo Wang. Now surviving as a reclusive mercenary on the edge of a corrupted world, the formidable warrior must again wield a devastating combination of guns, blades, magic and wit to strike down the demonic legions overwhelming the world. Battle alongside allies online in four-player co-op or go it alone in spectacular procedurally-generated landscapes to complete daring missions and collect powerful new weapons, armor, and arcane relics of legend.",
        image: " ./images/shadowwarrior2.jpg",
        ratings: 42,
        price: 35,

        owned: false

    },
    {
        title: "Destiny 2",
        publisher: "Bungie",
        genre: "RPG",
        description: "Dive into the world of Destiny 2 to explore the mysteries of the solar system and experience responsive first-person shooter combat. Unlock powerful elemental abilities and collect unique gear to customize your Guardian's look and playstyle. Enjoy Destiny 2’s cinematic story, challenging co-op missions, and a variety of PvP modes alone or with friends. Download for free today and write your legend in the stars.",
        image: "./images/destiny2.jpg",
        ratings: 38,
        price: 55,

        owned: false

    },
    {
        title: "PLAYERUNKNOWN'S BATTLEGROUNDS",
        publisher: "PUBG Corporation",
        genre: "RPG",
        description: "LAND, LOOT, SURVIVE!\nPlay PUBG: BATTLEGROUNDS for free.\nLand on strategic locations, loot weapons and supplies, and survive to become the last team standing across various, diverse Battlegrounds.\nSquad up and join the Battlegrounds for the original Battle Royale experience that only PUBG: BATTLEGROUNDS can offer",
        image: "./images/pubg.jpg",
        ratings: 50,
        price: 65,

        owned: false

    },
    {
        title: "DayZ",
        publisher: "Bohemia Interactive",
        genre: "RPG",
        description: "There are no map markers, daily quests, or scoreboards to help you create your story. There is only Chernarus – 230 square kilometers of post-Soviet country that was struck by an unknown virus, which turned the majority of its population into raging infected.\nYour task? To survive the collapse of civilization for as long as you possibly can. Keep in mind that death is permanent in unforgiving Chernarus. All you’ll have when you start over again are the memories of your final mistake.",
        image: "./images/dayz.jpg",
        ratings: 52,
        price: 80,

        owned: false

    },
    {
        title: "Spyro™ Reignited Trilogy",
        publisher: "Activision",
        genre: "RPG",
        description: "The original roast master is back! Same sick burns, same smoldering attitude, now all scaled up in stunning HD. Spyro is bringing the heat like never before in the Spyro™ Reignited Trilogy game collection. Rekindle the fire with the original three games, Spyro™ the Dragon, Spyro™ 2: Ripto's Rage! and Spyro™: Year of the Dragon. Explore the expansive realms, re-encounter the fiery personalities and relive the adventure in fully remastered glory. Because when there’s a realm that needs saving, there’s only one dragon to call. ",
        image: "./images/spyro.jpg",
        ratings: 62,
        price: 75,

        owned: false

    },
    {
        title: 'Assassin’s Creed® Unity',
        publisher: 'Ubisoft',
        genre: 'Strategy',
        description:
            "Assassin’s Creed® Unity is an action/adventure game set in the city of Paris during one of its darkest hours, the French Revolution. Take ownership of the story by customising Arno's equipement to make the experience unique to you, both visually and mechanically. In addition to an epic single-player experience, Assassin’s Creed Unity delivers the excitement of playing with up to three friends through online cooperative gameplay in specific missions. Throughout the game, take part in one of the most pivotal moments of French history in a compelling storyline and a breath-taking playground that brought you the city of lights of today",
        image: './images/assassinscreedunity.jpg',
        ratings: 96,
        price: 35,

        owned: false,

    },
    {
        title: 'Assassin’s Creed®: Syndicate',
        publisher: 'Ubisoft',
        genre: 'Strategy',
        description:
            "London, 1868. In the heart of the Industrial Revolution, lead your underworld organization and grow your influence to fight those who exploit the less privileged in the name of progress:\nChampion justice\nAs Jacob Frye, a young and reckless Assassin, use your skills to help those trampled by the march of progress. From freeing exploited children used as slave labour in factories, to stealing precious assets from enemy boats, you will stop at nothing to bring justice back to London’s streets.\nCommand London’s underworld\nTo reclaim London for the people, you will need an army. As a gang leader, strengthen your stronghold and rally rival gang members to your cause, in order to take back the capital from the Templars’ hold.\nA new dynamic fighting system\nIn Assassin’s Creed Syndicate, action is fast-paced and brutal. As a master of combat, combine powerful multi-kills and countermoves to strike your enemies down.\nA whole new arsenal\nChoose your own way to fight enemies. Take advantage of the Rope Launcher technology to be as stealthy as ever and strike with your Hidden Blade. Or choose the kukri knife and the brass knuckles to get the drop on your enemies.\nA new age of transportation\nIn London, the systemic vehicles offer an ever-changing environment. Drive carriages to chase your target, use your parkour skills to engage in epic fights atop high-speed trains, or make your own way amongst the boats of the River Thames.\nA vast open world\nTravel the city at the height of the Industrial Revolution and meet iconic historical figures. From Westminster to Whitechapel, you will come across Darwin, Dickens, Queen Victoria… and many more.\nA sharper focus\nTake aim, engage in combat or launch a grappling hook by keeping your target in sight with Tobii Eye Tracking. The Clean UI lets you focus on the matter at hand while the Extended View and Dynamic Light features increase your immersion, making you dive even deeper into the thrilling adventure in the streets of London.",
        image: './images/assassinscreedsyndicate.jpg',
        ratings: 64,
        price: 65,

        owned: false

    },
    {
        title: 'Chess',
        publisher: 'Ubisoft',
        genre: 'Strategy',
        description:
            "Chess is a board game between two players. It is sometimes called Western chess or international chess to distinguish it from related games, such as xiangqi (Chinese chess) and shogi (Japanese chess). The current form of the game emerged in Spain and the rest of Southern Europe during the second half of the 15th century after evolving from chaturanga, a similar but much older game of Indian origin. Today, chess is one of the world's most popular games, played by millions of people worldwide. ",
        image: './images/chess.jpg',
        ratings: 37,
        price: 75,

        owned: true

    },
    {
        title: 'Batman™: Arkham Asylum Game of the Year Edition',
        publisher: 'Warner Bros. Interactive Entertainment',
        genre: 'Strategy',
        description:
            "Critically acclaimed Batman: Arkham Asylum returns with a remastered Game of the Year Edition, featuring 4 extra Challenge Maps. The additional Challenge Maps are Crime Alley; Scarecrow Nightmare; Totally Insane and Nocturnal Hunter (both from the Insane Night Map Pack).\nUtilize the unique FreeFlow™ combat system to chain together unlimited combos seamlessly and battle with huge groups of The Joker’s henchmen in brutal melee brawls\nInvestigate as Batman, the WORLD’S GREATEST DETECTIVE, by solving intricate puzzles with the help of cutting edge forensic tools including x-ray scanning, fingerprint scans, ‘Amido Black’ spray and a pheromone tracker\nFace off against Gotham’s greatest villains including The Joker, HARLEY QUINN, POISON IVY and KILLER CROC\nBecome the Invisible Predator™ with Batman’s fear takedowns and unique vantage point system to move without being seen and hunt enemies\nChoose multiple takedown methods, including swooping from the sky and smashing through walls.\nExplore every inch of Arkham Asylum and roam freely on the infamous island, presented for the first time ever in its gritty and realistic entirety\nExperience what it’s like to be BATMAN using BATARANGS, explosive gel aerosol, The Batclaw, sonar resonator and the line launcher\nUnlock more secrets by completing hidden challenges in the world and develop and customize equipment by earning experience points\nEnjoy complete superhero freedom in the environment with the use of Batman’s grapnel gun to get to any place you can see, jump from any height and glide in any direction ",
        image: './images/batmanarkhamasylum.jpg',
        ratings: 44,
        price: 45,

        owned: false

    },
    {
        title: 'Batman™: Arkham City - Game of the Year Edition',
        publisher: 'Warner Bros. Interactive Entertainment',
        genre: 'Strategy',
        description:
            "Batman: Arkham City builds upon the intense, atmospheric foundation of Batman: Arkham Asylum, sending players flying through the expansive Arkham City - five times larger than the game world in Batman: Arkham Asylum - the new maximum security 'home' for all of Gotham City's thugs, gangsters and insane criminal masterminds. Featuring an incredible Rogues Gallery of Gotham City's most dangerous criminals including Catwoman, The Joker, The Riddler, Two-Face, Harley Quinn, The Penguin, Mr. Freeze and many others, the game allows players to genuinely experience what it feels like to be The Dark Knight delivering justice on the streets of Gotham City.",
        image: './images/batmanarkhamcity.jpg',
        ratings: 75,
        price: 90,

        owned: false

    },
    {
        title: "Portal 2",
        publisher: "Valve",
        genre: "Strategy",
        description: "Portal 2 draws from the award-winning formula of innovative gameplay, story, and music that earned the original Portal over 70 industry accolades and created a cult following.\nThe single-player portion of Portal 2 introduces a cast of dynamic new characters, a host of fresh puzzle elements, and a much larger set of devious test chambers. Players will explore never-before-seen areas of the Aperture Science Labs and be reunited with GLaDOS, the occasionally murderous computer companion who guided them through the original game.\nThe game’s two-player cooperative mode features its own entirely separate campaign with a unique story, test chambers, and two new player characters. This new mode forces players to reconsider everything they thought they knew about portals. Success will require them to not just act cooperatively, but to think cooperatively.",
        image: "./images/portal2.jpg",
        ratings: 47,
        price: 75,

        owned: false

    },
    {
        title: "Unturned",
        publisher: "Smartly Dressed Games",
        genre: "Strategy",
        description: "STAY UNTURNED\nYou're one of the few not yet turned zombie. Keeping it that way will be a challenge.\nGo in guns blazing and attract the attention of everything, living and dead.\nTake a subtle approach sneaking around and making use of distractions.\nConfront and learn to counter special abilities ranging from invisibility to fire breathing to lightning attacks.\nSTRUGGLE AGAINST NATURE\nZombies aside nature does plenty to make life hard.\nForage wild fruits and vegetables.\nHunt animals for pelts and meat, or in some hostile environments become the prey.\nFish for food and garbage.\nPlant a crop and make sure it gets rain.\nSeek warmth and take shelter from blizzards.\nDEAL WITH OTHER PLAYERS\nFriend or foe there's a lot of interesting people online.\nArrest bandits with handcuffs and blindfold them as a non-lethal strategy.\nFight with every kind of weapon under the sun - swords, machine guns, snipers, missiles, landmines - you name it.\nRaid enemy encampments using charges and detonators and steal their loot.\nFor pure PvP play arena mode in a last man standing battle to the death, or PvE for peaceful cooperation.\nRoleplay servers encourage everyone to stay in character and tell a story together.",
        image: "./images/unturned.jpg",
        ratings: 43,
        price: 75,

        owned: false

    },
    {
        title: "Z1 Battle Royale",
        publisher: "Daybreak Game Company",
        genre: "Strategy",
        description: "Z1 Battle Royale is a Free to Play, fast-paced, action arcade, competitive Battle Royale. Staying true to its ;King of the Kill' roots, the game has been revamped and restored to the classic feel, look, and gameplay everyone fell in love with. Play solo, duos, or fives and be the last ones standing.\nNew management is in town and restoring the game to it's former glory under a new name, Z1 Battle Royale. Since taking over development of the game in September the team here at NantG has worked with a firey passion to bring back the feel that was lost with the Combat Update. Our first major patch since taking over is coming out today March 6th and we couldn't be more excited for you all to get your hands on it.",
        image: "./images/z1.jpg",
        ratings: 53,
        price: 50,

        owned: false

    },
    {
        title: "TERA",
        publisher: "En Masse Entertainment",
        genre: "Strategy",
        description: "TERA (short for The Exiled Realm of Arborea), also known as TERA Online, was a massively multiplayer online role-playing game (MMORPG) developed by Bluehole Studio, a subsidiary of Krafton. The game was released in South Korea on 25 January 2011, in North America on 1 May 2012, and in Europe on 3 May 2012, with closed and open beta tests taking place before the launch dates. Nexon, Krafton, and Gameforge published the game in these regions, respectively. En Masse Entertainment was the North American publisher, until September 2020, while Atari handled physical distribution.[3] In February 2013 the game was renamed to TERA: Rising concurrently with the game's launch to the free-to-play model. ",
        image: "./images/tera.jpg",
        ratings: 79,
        price: 70,

        owned: false

    },
    {
        title: "7 Days to Die",
        publisher: "The Fun Pimps Entertainment LLC",
        genre: "Strategy",
        description: "With over 14 million copies sold, 7 Days has defined the survival genre, with unrivaled crafting and world-building content. Set in a brutally unforgiving post-apocalyptic world overrun by the undead, 7 Days is an open-world game that is a unique combination of first-person shooter, survival horror, tower defense, and role-playing games. It presents combat, crafting, looting, mining, exploration, and character growth, in a way that has seen a rapturous response from fans worldwide. Play the definitive zombie survival sandbox RPG that came first. Navezgane awaits!",
        image: "./images/7days.jpg",
        ratings: 99,
        price: 55,

        owned: false

    },
    {
        title: 'Batman™: Arkham Knight',
        publisher: 'Warner Bros. Interactive Entertainment',
        genre: 'Sports',
        description:
            "Batman™: Arkham Knight brings the award-winning Arkham trilogy from Rocksteady Studios to its epic conclusion. Developed exclusively for New-Gen platforms, Batman: Arkham Knight introduces Rocksteady's uniquely designed version of the Batmobile. The highly anticipated addition of this legendary vehicle, combined with the acclaimed gameplay of the Arkham series, offers gamers the ultimate and complete Batman experience as they tear through the streets and soar across the skyline of the entirety of Gotham City. In this explosive finale, Batman faces the ultimate threat against the city that he is sworn to protect, as Scarecrow returns to unite the super criminals of Gotham and destroy the Batman forever",
        image: './images/batmanarkhamknight.jpg',
        ratings: 33,
        price: 35,

        owned: false

    },
    {
        title: 'Batman™: Arkham Origins',
        publisher: 'Warner Bros. Interactive Entertainment',
        genre: 'Sports',
        description:
            "Batman™: Arkham Origins is the next installment in the blockbuster Batman: Arkham videogame franchise. Developed by WB Games Montréal, the game features an expanded Gotham City and introduces an original prequel storyline set several years before the events of Batman: Arkham Asylum and Batman: Arkham City, the first two critically acclaimed games of the franchise. Taking place before the rise of Gotham City’s most dangerous criminals, the game showcases a young and unrefined Batman as he faces a defining moment in his early career as a crime fighter that sets his path to becoming the Dark Knight.",
        image: './images/batmanarkhamorigins.jpg',
        ratings: 81,
        price: 55,

        owned: false

    },
    {
        title: 'For Honor™',
        publisher: 'Ubisoft',
        genre: 'Sports',
        description:
            "Enter the chaos of war as a bold Knight, a brutal Viking, or a deadly Samurai. Play the thrilling story campaign or fight in brutal PvP modes, now on new dedicated servers.\nEnjoy an evolved experience with 18 Heroes, 18 maps, new PvP and ranked modes, thousands of gear items, and more since launch.\nDedicated servers provide a stable and seamless experience as you fight to claim victory for your faction.\nMake the fight your own by customizing your Heroes with thousands of different weapons, emblems, and more.\nEarn rewards while you learn the art of combat with a brand-new training mode that takes you from Apprentice to Master.",
        image: './images/forhonor1.jpg',
        ratings: 52,
        price: 30,

        owned: false

    },
    {
        title: 'Generation Zero',
        publisher: 'Avalanche Studios Stockholm',
        genre: 'Sports',
        description:
            "Where did the machines come from? What do they want? How can you survive?\nGeneration Zero is a stealth-action hybrid with a rich and rewarding world to explore and mysteries to uncover. Play alone or with up to three friends in a vast open-world map that will challenge your resourcefulness and ingenuity. Because living is winning.",
        image: './images/generationzero.jpg',
        ratings: 77,
        price: 30,

        owned: true

    },
    {
        title: "Absolver",
        publisher: "Devolver Digital",
        genre: "Sports",
        description: "In the ruins of the fallen Adal Empire, you awaken with a mysterious mask on your face, and faint recollections of an esoteric ceremony. Freeing you from hunger, thirst, and even death, the mask is the creation of the Guides, the rulers of these lands, who have placed you here to determine whether you are worthy of becoming part of the elite corps of Absolvers. As you wander these forsaken lands, encountering other Prospects like you, you will learn new combat styles, acquire weapons, gear and armor, and build a team of warriors with whom to fight side by side in Arenas of combat.",
        image: "./images/absolver.jpg",
        ratings: 99,
        price: 70,

        owned: false

    },
    {
        title: "Albino Lullaby: Episode 1",
        publisher: "Ape Law",
        genre: "Sports",
        description: "Albino Lullaby is a horror adventure game that doesn't rely on jump scares or gore. A Lynchian psychological nightmare where you play as yourself. Escape from a dark and surreal Victorian town that clings to the precipices of underground cliffs. The gamespace dynamically twists and contorts around you in real time, as you unravel an equally twisted narrative. Discover the hidden spaces haunted by 'The Grandchildren' as you uncover clues to understanding just where and what you are. Albino Lullaby is set for initial release on the PC and will be fully VR compatible. ",
        image: "./images/albinolullaby.jpg",
        ratings: 56,
        price: 60,

        owned: false

    },
    {
        title: "Enter the Gungeon",
        publisher: "Devolver Digital",
        genre: "Sports",
        description: "Enter the Gungeon is a bullet hell dungeon crawler following a band of misfits seeking to shoot, loot, dodge roll and table-flip their way to personal absolution by reaching the legendary Gungeon’s ultimate treasure: the gun that can kill the past. Select a hero [or team up in co-op] and battle your way to the bottom of the Gungeon by surviving a challenging and evolving series of floors filled with the dangerously adorable Gundead and fearsome Gungeon bosses armed to the teeth. Gather precious loot, discover hidden secrets, and chat with opportunistic merchants and shopkeepers to purchase powerful items to gain an edge.\nThe Gungeon: Enter the Gungeon – a constantly evolving bullet hell fortress that elegantly blends meticulously hand-designed rooms within a procedurally-generated labyrinth bent on destroying all that enter its walls. But beware – the Gungeon responds to even the most modest victory against its sentries and traps by raising the stakes and the challenges found within!\nThe Cult of the Gundead: The Gungeon isn’t just traps and chasms – calm your nerves and steady your aim as you face down the gun-totting Cult of the Gundead. These disciples of the gun will stop at nothing to put down the heroes in their tracks and employ any tactics necessary to defend their temple.\nThe Gungeoneers: Choose between one of several unlikely heroes, each burdened by a deep regret and in search of a way to change their past, no matter the cost. Filled with equal parts courage and desperation, these adventurers won’t hesitate to dive across flaming walls, roll through a wall of bullets, or take cover behind whatever is around to make it to their goal alive!\nThe Guns: Discover and unlock scores of uniquely fantastic guns to annihilate all that oppose you in the Gungeon – each carrying their own unique tactics and ammunition. Unleash everything from the tried and true medley of missiles, lasers, and cannonballs to the bizarrely effective volley of rainbows, fish, foam darts, and bees! Yep, bees.",
        image: " ./images/etg.jpg",
        ratings: 78,
        price: 80,

        owned: false

    },
    {
        title: 'Mad Max',
        publisher: 'Warner Bros. Interactive Entertainment',
        genre: 'Racing',
        description:
            "Become Mad Max, the lone warrior in a savage post-apocalyptic world where cars are the key to survival. In this action-packed, open world, third person action game, you must fight to stay alive in The Wasteland, using brutal on-ground and vehicular against vicious gangs of bandits. A reluctant hero with an instinct for survival, Max wants nothing more than to leave the madness behind and find solace in the storied “Plains of Silence.” Players are challenged with treacherous missions as they scavenge the dangerous landscape for supplies to build the ultimate combat vehicle. ",
        image: './images/madmax.jpg',
        ratings: 70,
        price: 60,

        owned: true

    },
    {
        title: 'Mafia III',
        publisher: '2K Games',
        genre: 'Racing',
        description:
            "Mafia III: Definitive Edition includes the main game, all Story DLC (Faster, Baby!, Stones Unturned, Sign of the Times) and Bonus Packs (Family Kick-Back Pack and Judge, Jury & Executioner Weapons Pack) bundled in one place for the first time.\nPart three of the Mafia crime saga - 1968, New Bordeaux, LA.\nAfter years of combat in Vietnam, Lincoln Clay knows this truth: family isn’t who you’re born with, it’s who you die for. When his surrogate family is wiped out by the Italian Mafia, Lincoln builds a new family and blazes a path of revenge through the Mafioso responsible.",
        image: './images/mafia3.jpg',
        ratings: 81,
        price: 50,

        owned: false

    },
    {
        title: 'Sekiro™: Shadows Die Twice',
        publisher: 'Activision, Inc',
        genre: 'Racing',
        description:
            "In Sekiro™: Shadows Die Twice you are the 'one-armed wolf', a disgraced and disfigured warrior rescued from the brink of death. Bound to protect a young lord who is the descendant of an ancient bloodline, you become the target of many vicious enemies, including the dangerous Ashina clan. When the young lord is captured, nothing will stop you on a perilous quest to regain your honor, not even death itself.\nExplore late 1500s Sengoku Japan, a brutal period of constant life and death conflict, as you come face to face with larger than life foes in a dark and twisted world. Unleash an arsenal of deadly prosthetic tools and powerful ninja abilities while you blend stealth, vertical traversal, and visceral head to head combat in a bloody confrontation.\nTake Revenge. Restore Your Honor. Kill Ingeniously.",
        image: './images/sekiro.jpg',
        ratings: 95,
        price: 65,

        owned: true

    },
    {
        title: 'Shenmue III',
        publisher: 'Deep Silver',
        genre: 'Racing',
        description:
            "The brainchild of award-winning game director, Yu Suzuki, Shenmue is commonly known as one of the most ambitious game projects in history, which captured the imagination of players from around the world. Shenmue established the open-world format for action RPG games. An awe-inspiring world with an immersive story, featuring cinematic sequences, a realistic fighting system, and entertaining mini-games, Shenmue garnered acclaim and adoration all over the world.\nPlay as Ryo Hazuki, an 18-year-old Japanese martial artist hellbent on avenging his father’s death. In this third installment of the epic Shenmue series, Ryo seeks to solve the mystery behind the Phoenix Mirror, an artifact sought after by his father’s killer. His journey takes him to an immersive representation of rural China, brimming with activity and surrounded by beautiful landscapes. Ryo’s adventure leads him to towns and mountain villages where he can further his training, try his hand at gambling, play arcade games, and work part-time jobs while investigating those who know truth behind the Phoenix Mirror.",
        image: './images/shenmue3.jpg',
        ratings: 54,
        price: 75,

        owned: false

    },
    {
        title: 'Sniper Elite 3',
        publisher: 'Rebellion',
        genre: 'Racing',
        description:
            "The latest chapter in the award-winning series, SNIPER ELITE 3 takes players to the unforgiving yet exotic terrain of North Africa in a savage conflict against Germany’s infamous Afrika Korps.\nStalk your targets through the twisting canyons, lush oases and ancient cities of the Western Desert in the deadly rush to sabotage a Nazi super-weapons programme that could end Allied resistance for good.\nUse stealth, planning and execution to hunt your targets – whether human or machine. From signature long distance kills, to melee takedowns, distractions and explosive traps, you are as deadly up close as you are from afar.\nIt must end here. You are the turning point. Because one bullet can change history...",
        image: './images/sniperelite3.jpg',
        ratings: 67,
        price: 70,

        owned: false

    },
    {
        title: "Fimbul",
        publisher: "Wild River Games",
        genre: "Racing",
        description: "Fimbul combines intense Viking battles with a deep story that unfolds through in-game comics to bring the frozen world of the Norse sagas to life. Immerse yourself in the blistering winter preceding Ragnarok -- The Fimbul Winter!\nUse the time-line-tree at any point to explore the decisions that changed your fate.\nNavigate your choices, go to any intersection, and follow a different path through your story.\nFight the Vikings using a complex but easy-to-learn weapon-based combat system and gather fellow Vikings to help you defeat trolls the size of trees.\nUse items from the distant past to grow and battle the mighty Jutons, a race of giants older than the gods themselves. ",
        image: "./images/fimbul.jpg",
        ratings: 94,
        price: 55,

        owned: false

    },
    {
        title: "Hellblade: Senua's Sacrifice",
        publisher: "Ninja Theory",
        genre: "Racing",
        description: "Return to Helheim and experience Senua’s world through new eyes with enriched visuals and new features. Upgraded materials, particles and LOD, DirectX Raytracing and optimised performance with NVIDIA DLSS and AMD FSR support. We have also used this opportunity to include some key accessibility improvements, including full controller remapping and colour blindness settings.\nSet in the Viking age, a broken Celtic warrior embarks on a haunting vision quest into Viking Hell to fight for the soul of her dead lover.\nCreated in collaboration with neuroscientists and people who experience psychosis, Hellblade: Senua’s Sacrifice will pull you deep into Senua’s mind.",
        image: "./images/hellblade.jpg",
        ratings: 100,
        price: 40,

        owned: false

    },
    {
        title: "Moonlighter",
        publisher: "11 bit studios",
        genre: "Racing",
        description: "Since the release, Moonlighter has been updated with tons of new content. From the smallest changes like key bindings improvements, bug fixes and balance tweaks, to huge innovations that we have promised in our Road Map - current version of Moonlighter delivers the original experience with a range of game-changing enhancements for players old and new.\nConfront unfamiliar mini-bosses using brand-new weapons, armor, rings and amulets. Wander around 100 fresh room patterns, with the help of 9 brave Companions, and discover even more lore and story. Finish the main adventure to unlock New Game+ mode with additional challenges and options.",
        image: "./images/moonlighter.jpg",
        ratings: 42,
        price: 75,

        owned: false

    },
    {
        title: "Owlboy",
        publisher: "D-Pad Studio",
        genre: "Racing",
        description: "Owlboy is a story-driven platform adventure game, where you can fly and explore a brand new world in the clouds! Pick up your friends, and bring them with you as you explore the open skies. Overcome obstacles and greater enemies, in one of the most detailed adventures of this era.\nBeing a mute, Otus struggles living up to the expectations of owl-hood. Things spiral from bad to worse with the sudden appearance of sky pirates.\nWhat follows is a journey through monster infested ruins, with unexpected encounters, well kept secrets, and burdens no one should have to bear.",
        image: "./images/owlboy.jpg",
        ratings: 76,
        price: 75,

        owned: false

    },
    {
        title: "SOMA",
        publisher: "Frictional Games",
        genre: "Racing",
        description: " SOMA is a sci-fi horror game from Frictional Games, the creators of Amnesia: The Dark Descent. It is an unsettling story about identity, consciousness, and what it means to be human.\nThe radio is dead, food is running out, and the machines have started to think they are people. Underwater facility PATHOS-II has suffered an intolerable isolation and we’re going to have to make some tough decisions. What can be done? What makes sense? What is left to fight for?\nEnter the world of SOMA and face horrors buried deep beneath the ocean waves. Delve through locked terminals and secret documents to uncover the truth behind the chaos. Seek out the last remaining inhabitants and take part in the events that will ultimately shape the fate of the station. But be careful, danger lurks in every corner: corrupted humans, twisted creatures, insane robots, and even an inscrutable omnipresent A.I.\nYou will need to figure out how to deal with each one of them. Just remember there’s no fighting back, either you outsmart your enemies or you get ready to run. ",
        image: "./images/soma.jpg",
        ratings: 38,
        price: 50,

        owned: false

    },
    {
        title: 'Sniper Elite 4',
        publisher: 'Rebellion',
        genre: 'Fighting',
        description:
            "Discover unrivalled sniping freedom in the largest and most advanced World War 2 shooter ever built. Experience tactical third-person combat, gameplay choice and epic longshots across gigantic levels as you liberate wartime Italy from the grip of Fascism.\nSet in the aftermath of its award-winning predecessor, Sniper Elite 4 transports players across the beautiful Italian peninsula, from sun-drenched Mediterranean coastal towns, to ancient forests, mountain valleys and colossal Nazi megastructures.\nCovert agent and elite marksman Karl Fairburne must fight alongside the brave men and women of the Italian Resistance and defeat a terrifying new threat with the potential to halt the Allied fightback in Europe before it’s even begun.",
        image: './images/sniperelite4.jpg',
        ratings: 41,
        price: 85,

        owned: true

    },
    {
        title: 'Sonic Forces',
        publisher: 'SEGA',
        genre: 'Fighting',
        description:
            "In SONIC FORCES, the evil Dr. Eggman has conquered much of the world with help from a powerful and mysterious new villain named Infinite. Now, you must assist Sonic and build an army to reclaim the world as they fight against chaos and destruction.\nDefeat enemies with blazing speed as Modern Sonic, catapult past perilous platforms as Classic Sonic, and create your very own Custom Hero Character equipped with a variety of powerful gadgets. Experience fast-paced action with these three unique gameplay styles, explore iconic stages, plus, fight across unique added content with Shadow as a playable character!",
        image: './images/sonicforces.jpg',
        ratings: 35,
        price: 65,

        owned: true

    },
    {
        title: 'Strange Brigade',
        publisher: 'Rebellion',
        genre: 'Fighting',
        description:
            "WILL YOU ANSWER THE CALL TO ADVENTURE?\nEgypt, 1930's. Erased from ancient history and buried in a nameless tomb for 4,000 years, Seteki the Witch Queen has risen once again.\nOnly one troop of daring heroes can stand against the fearsome power of Seteki and her army of mummified monstrosities: The Strange Brigade!\nExplore remarkable ruins, solve perilous puzzles and uncover tantalising treasure while blasting your way through an array of undead enemies in thrilling third-person action that’s certain to bring out your inner adventurer!",
        image: './images/strangebrigade.jpg',
        ratings: 57,
        price: 45,

        owned: false

    },
    {
        title: 'The Evil Within 2',
        publisher: 'Bethesda Softworks',
        genre: 'Fighting',
        description:
            "From mastermind Shinji Mikami, The Evil Within 2 is the latest evolution of survival horror. Detective Sebastian Castellanos has lost it all. But when given a chance to save his daughter, he must descend once more into the nightmarish world of STEM. Horrifying threats emerge from every corner as the world twists and warps around him. Will Sebastian face adversity head on with weapons and traps, or sneak through the shadows to survive.",
        image: './images/evilwithin2.jpg',
        ratings: 39,
        price: 55,

        owned: false

    },
    {
        title: 'Tom Clancy’s Ghost Recon Breakpoint',
        publisher: 'Ubisoft',
        genre: 'Fighting',
        description:
            "Tom Clancy's Ghost Recon Breakpoint is a tactical shooter video game developed by Ubisoft Paris and published by Ubisoft. The game was released worldwide on 4 October 2019 for Microsoft Windows, PlayStation 4 and Xbox One, and on 18 December 2019 for Stadia.[2] The game is the eleventh installment in the Tom Clancy's Ghost Recon franchise and is a narrative sequel to the 2017 video game Tom Clancy's Ghost Recon Wildlands.\nThe game is set in an open world environment called Auroa, a fictional island chain in the Pacific Ocean. The player takes on the role of Lieutenant Colonel Anthony 'Nomad' Perryman[b] a U.S. Special Operation Forces service member sent to the island to investigate a series of disturbances involving Skell Technology, a military contractor based on Auroa. Upon release, Tom Clancy's Ghost Recon Breakpoint received mixed reviews from critics, with criticism for its mechanics and mission design. The game underperformed commercially despite selling 6 million on all platforms, as of 1 January 2020, worldwide. Live service support for the game ended on 5 April 2022 shortly after Ubisoft added non-fungible tokens (NFTs) to the game. ",
        image: './images/ghostreconbreakpoint.jpg',
        ratings: 86,
        price: 70,

        owned: false

    },
    {
        title: "Trover Saves The Universe",
        publisher: "Squanch Games, Inc.",
        genre: "Fighting",
        description: "From the co-creator of Rick and Morty comes Trover Saves the Universe.\nYour dogs have been dognapped by a beaked lunatic named Glorkon who stuffed them into his eye holes and is using their life essence to destroy the universe. You're partnered with Trover, a little purple eye-hole monster who isn’t a huge fan of working or being put in the position of having to save the universe. He’s also not that big a fan of you quite frankly, and neither am I. (Jk, you’re great)\nOnly you and Trover can save everything in this bizarre comedy adventure, created by Justin Roiland!",
        image: "./images/trover.jpg",
        ratings: 100,
        price: 30,

        owned: false

    },
    {
        title: "ARK: Survival Evolved",
        publisher: "Studio Wildcard",
        genre: "Fighting",
        description: "As a man or woman stranded naked, freezing and starving on the shores of a mysterious island called ARK, you must hunt, harvest resources, craft items, grow crops, research technologies, and build shelters to withstand the elements. Use your cunning and resources to kill or tame & breed the leviathan dinosaurs and other primeval creatures roaming the land, and team up with or prey on hundreds of other players to survive, dominate... and escape!\nDinosaurs, Creatures, & Breeding! -- over 100+ creatures can be tamed using a challenging capture-&-affinity process, involving weakening a feral creature to knock it unconscious, and then nursing it back to health with appropriate food. Once tamed, you can issue commands to your tames, which it may follow depending on how well you’ve tamed and trained it. Tames, which can continue to level-up and consume food, can also carry Inventory and Equipment such as Armor, carry prey back to your settlement depending on their strength, and larger tames can be ridden and directly controlled! Fly a Pterodactyl over the snow-capped mountains, lift allies over enemy walls, race through the jungle with a pack of Raptors, tromp through an enemy base along a gigantic brontosaurus, or chase down prey on the back of a raging T-Rex! Take part in a dynamic ecosystem life-cycle with its own predator & prey hierarchies, where you are just one creature among many species struggling for dominance and survival. Tames can also be mated with the opposite gender, to selectively breed successive generations using a trait system based on recombinant genetic inheritance. This process includes both egg-based incubation and mammalian gestation lifecycles! Or put more simply, raise babies!",
        image: "./images/ark.jpg",
        ratings: 33,
        price: 75,

        owned: false

    },
    {
        title: "Rust",
        publisher: "Facepunch Studios",
        genre: "Fighting",
        description: " The only aim in Rust is to survive. Everything wants you to die - the island’s wildlife and other inhabitants, the environment, other survivors. Do whatever it takes to last another night.\nRust is in its 9th year and has now had over 350 content updates, with a guaranteed content patch every month. From regular balance fixes and improvements to AI and graphics updates to adding content like new maps, musical instruments, trains and drones, as well as regular seasons and events, there’s always something interesting or dangerous (or both) happening on the island. Updates to the game include:",
        image: "./images/rust.jpg",
        ratings: 63,
        price: 40,

        owned: false

    },
    {
        title: "ARK: Survival Of The Fittest",
        publisher: "Studio Wildcard",
        genre: "Fighting",
        description: "Welcome to ARK: Survival of the Fittest, the first ever M.O.S.A. - a Multiplayer Online Survival Arena - that Studio Wildcard designed for the burgeoning wild west of eSports. A spin-off from the most popular open-world Early Access game on Steam ARK: Survival Evolved, ARK: Survival of the Fittest (SotF) pits up to 72 combatants in an action-packed struggle for survival where players are ultimately pushed into an epic final showdown where only one “Tribe” will make it out alive.\nSurvivors can form one- to six-person Tribes with the options to choose Unofficial and Official (Ranked) servers, and a variety of game-lengths and sizes in which to play. Players will start in the base forest environment introduced in the original ARK: Survival Evolved, with new environments and creatures introduced as the game evolves. Dedicated eSport ranking, matchmaking, reward, and tournament features make ARK: SotF readily accessible to all players.\nBalanced for intense competition, contestants begin in a neutral staging area where they can communicate pre-game, strategize, or talk trash. After a count-down, they dramatically descend from the sky onto the ARK in a circular formation via beams of light. There is a cache of valuable items in the center – do survivors dash for the goods and fight it out, do they run into the forest and hide, search for Dinosaurs to rapidly build their army, or do they freeze up from the sheer terror of death? A continually shrinking “ring of death” forces contestants ever closer together over time. The hunt is on!",
        image: "./images/arks.jpg",
        ratings: 99,
        price: 80,

        owned: false

    },
    {
        title: "Rend",
        publisher: "Frostkeep Studios",
        genre: "Fighting",
        description: "Epic fantasy adventure meets competitive survival in Rend. Inspired by the fabled universe of Nordic myth, the world of Rend is a harsh domain where the strong ascend as gods. Choose to play solo in Classic and Exploration modes to build your stronghold, tame brutal creatures, and conquer enemy players and play among three rival factions in Faction War mode. Together, players will endure the dangers of Rend’s treacherous landscapes to discover valuable resources and powerful artifacts. With the game’s deep talent trees and skill systems, players have the freedom to choose how they want to play and how they want to fight. Players receive metaprogression and rewards through gameplay as they ascend to legendary heights as heroes. ",
        image: "./images/rend.jpg",
        ratings: 32,
        price: 35,

        owned: false

    },
    {
        title: "Tom Clancy's Ghost Recon® Wildlands",
        publisher: 'Ubisoft',
        genre: 'Simulator',
        description:
            "Create a team with up to 3 friends in Tom Clancy’s Ghost Recon® Wildlands and enjoy the ultimate military shooter experience set in a massive, dangerous, and responsive open world. You can also play PVP in 4v4 class-based, tactical fights: Ghost War.\nTAKE DOWN THE CARTEL\nIn a near future, Bolivia has fallen into the hands of Santa Blanca, a merciless drug cartel who spread injustice and violence. Their objective: to create the biggest Narco-State in history.\nBECOME A GHOST\nCreate and fully customize your Ghost, weapons, and gear. Enjoy a total freedom of playstyle. Lead your team and take down the cartel, either solo or with up to three friends.\nEXPLORE BOLIVIA\nJourney through Ubisoft's largest action-adventure open world. Discover the stunning diverse landscapes of the Wildlands both on and off road, in the air, on land, and at sea with over 60 different vehicles.\nTRUST YOUR EYES\nTaking out the Santa Blanca Cartel becomes an even richer experience with Tobii Eye Tracking. Features like Extended View, Aim at Gaze and Communications Wheel let you use your natural eye movement to interact with the environment – without interrupting or modifying your traditional controls. Now armed with an extensive eye tracking feature set, team communication becomes more seamless, firefights become more intense and exploring your new surroundings becomes an even more immersive adventure.",
        image: './images/ghostreconwildlands2.jpg',
        ratings: 57,
        price: 55,

        owned: false

    },
    {
        title: 'Watch_Dogs® 2',
        publisher: 'Ubisoft',
        genre: 'Simulator',
        description:
            "Play as Marcus Holloway, a brilliant young hacker living in the birthplace of the tech revolution, the San Francisco Bay Area.\nTeam up with Dedsec, a notorious group of hackers, to execute the biggest hack in history; take down ctOS 2.0, an invasive operating system being used by criminal masterminds to monitor and manipulate citizens on a massive scale.\nExplore the dynamic open-world, full of gameplay possibilities\nHack into every connected device and take control of the city infrastructure.\nDevelop different skills to suit your playstyle, and upgrade your hacker tools – RC cars, Quadcopter drone, 3D printed weapons and much more.\nStay seamlessly connected to your friends with a brand new co-op and adversarial multiplayer Watch Dogs experience.\nPUT YOUR EYES IN CTRL\nGet the upper hand with Tobii Eye Tracking. Let your gaze aid you in weaponizing the “internet of things”, aim at enemies and take cover while you naturally explore the environment. Combine the extensive eye tracking feature set to pinpoint enemies, interact with your surroundings, locate shelter points, and rapidly select hackable targets. Let your vision lead the hacking of the city’s digital brain.",
        image: './images/watchdogs2.jpg',
        ratings: 41,
        price: 90,

        owned: true

    },
    {
        title: 'Watch_Dogs™',
        publisher: 'Ubisoft',
        genre: 'Simulator',
        description:
            "All it takes is the swipe of a finger. We connect with friends. We buy the latest gadgets and gear. We find out what’s happening in the world. But with that same simple swipe, we cast an increasingly expansive shadow. With each connection, we leave a digital trail that tracks our every move and milestone, our every like and dislike. And it’s not just people. Today, all major cities are networked. Urban infrastructures are monitored and controlled by complex operating systems.\nIn Watch_Dogs, this system is called the Central Operating System (CTOS) – and it controls almost every piece of the city’s technology and holds key information on all of the city’s residents.\nYou play as Aiden Pearce, a brilliant hacker and former thug, whose criminal past led to a violent family tragedy. Now on the hunt for those who hurt your family, you'll be able to monitor and hack all who surround you by manipulating everything connected to the city’s network. Access omnipresent security cameras, download personal information to locate a target, control traffic lights and public transportation to stop the enemy…and more.\nUse the city of Chicago as your ultimate weapon and exact your own style of revenge",
        image: './images/watchdogs.jpg',
        ratings: 82,
        price: 75,

        owned: true

    },
    {
        title: 'Clicker Heroes 2',
        publisher: 'Playsaurus',
        genre: 'Simulator',
        description:
            "Clicker Heroes 2 is a game about the feeling of getting amazing powerups. You will embark on a never-ending journey to defeat mythical creatures, progressing through an infinite number of worlds. There will always be another upgrade.\n1.52e394+ Hours Of Gameplay!",
        image: './images/clickerheroes2.jpg',
        ratings: 71,
        price: 60,

        owned: false

    },
    {
        title: "Football Manager 2023",
        publisher: "Playsaurus",
        genre: "Simulator",
        description: "Join the managerial elite by writing your own headlines, earning the love of the fans and dominating the competition in Football Manager 2023.\nFootball management is not just about picking tactics or crafting a team. It’s about taking on challenges and breaking new ground.\nGame Description\nFind the club that’s right for you. Meet board and fan expectations before beating the best on your way to winning football’s top prizes.\nDon’t just sign superstars, create them. Level up your recruitment with the help of your backroom staff and provide pathways to the first team for your wonderkids to develop a world-class squad.\nYour team’s playing style is down to you. Create a unique strategy on the tactics board to deliver big wins and memorable matchday moments.",
        image: "./images/football.jpg",
        ratings: 76,
        price: 80,

        owned: false

    },
    {
        title: "Skybolt Zack",
        publisher: "Green Man Gaming",
        genre: "Simulator",
        description: "Skybolt Zack is the result of a unique way of mixing platformer mechanics and colour matching gameplay.\nControls are tight and Zack’s ability to rocket punch, dash, focus, change direction when destroying an enemy and more, offers more depth than what meets the eye - following the “easy to learn, hard to master” mantra.\nIt’s a platformer where you don’t jump, and a music game where you dictate your own rhythm. It feels like no other game!",
        image: "./images/skybolt.jpg",
        ratings: 80,
        price: 70,

        owned: true

    },
    {
        title: "The LEGO® Movie 2 Videogame",
        publisher: "Warner Bros. Interactive Entertainment",
        genre: "Simulator",
        description: "The alien monster invaders have left Bricksburg in ruins and taken Emmet's friends! It is now up to Emmet and a host of heroic characters to go beyond their world and save their friends from the strange inhabitants of the Systar System. Journey into outer space, discover new worlds, and test your Master Building skills. ",
        image: "./images/legomovie2.jpg",
        ratings: 68,
        price: 70,

        owned: false

    },
    {
        title: "Trove",
        publisher: "Trion Worlds",
        genre: "Simulator",
        description: "Grab your friends, hone your blades, and set off for adventure in Trove, the ultimate action MMO! Battle the forces of Shadow in realms filled with incredible dungeons and items created by your fellow players. Whether hunting treasure in far-off lands or building realms of your own, it’s never been this good to be square!",
        image: "./images/trove.jpg",
        ratings: 92,
        price: 55,

        owned: false

    },
    {
        title: "Idle Champions of the Forgotten Realms",
        publisher: "Codename Entertainment Inc.",
        genre: "Simulator",
        description: "Collect Iconic Champions\nUnlock Champions from across the Dungeons & Dragons multiverse including fan-favorites from novels, adventures, and live streams like Force Grey: Lost City of Omu, Acquisitions Incorporated, Black Dice Society, and The Oxventurers Guild.\nDungeons & Dragons Strategy Game\nMaster each Champion's formation abilities to complete adventures based on official Dungeons & Dragons books like Wild Beyond the Witchlight, Waterdeep: Dragon Heist, Baldur's Gate: Descent into Avernus, and Curse of Strahd.\nAdventure in the Forgotten Realms\nJourney throughout the Sword Coast and beyond, visiting cities like Waterdeep, Neverwinter, and Baldur's Gate. Venture to Icewind Dale, Chult, Barovia, the Nine Hells of Baator, and more!\nWeekly Content Updates\nIdle Champions has been actively developed since launching in 2017, releasing new campaigns each year, exciting new Champions every month, and new in-game features frequently.",
        image: "./images/idle.jpg",
        ratings: 65,
        price: 75,

        owned: false

    },
    {
        title: "My Memory of Us",
        publisher: "IMGN.PRO",
        genre: "Simulator",
        description: "The Evil King plunders the city and his robot soldiers appear everywhere. Citizens are segregated, some of them marked and forced to move out of their homes. They are made to live in a place that is sealed off from the rest of the city by a huge wall. Fortunately, the children are not alone – they have each other. Their friendship allows them to stay together, even though fate tries to tear them apart.\nTake control of two characters with different abilities. Connect them into pair and don’t let them be separated! She can run fast and shoot her slingshot, he can sneak in the shadows. When they work together as a team can they overcome all adversities!",
        image: "./images/memory.jpg",
        ratings: 91,
        price: 35,

        owned: false

    },
    {
        title: "PixARK",
        publisher: "Snail Game",
        genre: "Simulator",
        description: "Welcome to PixARK, a vast, wild world filled with vicious dinosaurs, magical creatures and endless adventure! To survive in this mysterious land, you must tame creatures both ferocious and cuddly, craft high tech and magical tools, and build your own base out of cubes.\nWith a robust character creator, an infinite number of voxel based maps and procedurally generated quests, your PixARK adventure will be completely unique. Team up with friends to form a tribe, or play on your own. Spend your time building a towering fortress or go on a quest in a sprawling cavern. Fly on the back of a dragon and smite your enemies with a magic wand, or ride a mighty T-Rex and blast your foes with a rocket launcher. In the world of PixARK, how you play is up to you – as long as you survive!",
        image: "./images/pixark.jpg",
        ratings: 46,
        price: 55,

        owned: false

    }

];
export default games;

//     const recentGames = [games[3], games[13], games[24], games[52], games[1]];
//
//     let max = 1000;
//

//
//
//
//     //Creates an "xDB" item in localStorage containing the games of x genre.
//     //We utilize localStorage because this allows the team global access and control to the game database
//     //in a simple and easy manner.
//     if (JSON.parse(localStorage.getItem('recent')) == null) {
//         localStorage.setItem('recent', JSON.stringify(recentGames));
//     }
//     if (JSON.parse(localStorage.getItem('games')) == null) {
//         localStorage.setItem('games', JSON.stringify(games));
//     }
//
// }
//
// function clearDB() {
//     localStorage.setItem('games', null);
//     localStorage.setItem('recent', null);
//     localStorage.setItem('friends', null);
//     setDb();
// }
//
// setDb();
