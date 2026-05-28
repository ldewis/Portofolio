const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.15
});

// observe everything
hiddenElements.forEach(el => observer.observe(el));

window.addEventListener("load", () => {
    document.querySelectorAll(".hidden").forEach((el, index) => {
        setTimeout(() => {
            el.classList.add("show");
        }, index * 80); // stagger effect
    });
});

const blogs = {
   site: {
        title: "Over de site",
        image: "C:\\Users\\Lennert\\Portofolio\\Images\\site.png",
        content: `
            <p>
In deze post geef ik een korte toelichting over hoe deze portfolio website is opgebouwd, welke technologieën er werden gebruikt en hoe de hosting via GitHub Pages werd opgezet. De focus lag hierbij op het bouwen van een overzichtelijke, snelle en onderhoudbare website waarin mijn projecten, ervaringen en interesses duidelijk worden weergegeven.
</p>

<p>
De website werd ontwikkeld in het kader van het vak Professional Networking. Binnen deze opdracht was het de bedoeling om een digitale portfolio te creëren die kan dienen als persoonlijk visitekaartje binnen de IT-wereld. Het doel is om andere IT-professionals, docenten en toekomstige werkgevers een helder beeld te geven van mijn vaardigheden, interesses en motivatie.
</p>

<p>
De portfolio werd volledig opgebouwd met HTML, CSS en JavaScript, met aandacht voor structuur, responsive design en gebruiksvriendelijkheid. Daarnaast werd GitHub Pages gebruikt om de site gratis en eenvoudig online te hosten. Hierdoor is de website op elk moment toegankelijk en kan ze ook gemakkelijk worden aangepast en uitgebreid.
</p>

<p>
Deze website moet niet enkel gezien worden als een schoolopdracht, maar ook als een praktisch hulpmiddel in een professionele context. Het is een levend document dat mee evolueert met mijn groei als IT-student en toekomstige professional.
</p>`
    },


    defensible: {
        title: "The road to a defensible architecture",
        image: "C:\\Users\\Lennert\\Portofolio\\Images\\The Road of Defensive OT Architecture.jpg",
        content: `
            <p>Tijdens de eerste Tech & Meet van het academiejaar heb ik een sessie gevolgd rond “The Road to a Defensible IT/OT Architecture – Bridging OT and IT using NIS2 and IEC 62443”. In deze sessie werd uitgelegd hoe organisaties hun industriële systemen (OT) beter kunnen beveiligen en hoe ze deze kunnen combineren met klassieke IT-omgevingen.</p>

    <p>Wat mij vooral opviel, is dat OT en IT eigenlijk heel verschillend werken. IT gaat meestal over data, gebruikers en software, terwijl OT vooral draait rond machines en systemen in de echte wereld, zoals productie, energie of transport. Wanneer je deze twee met elkaar verbindt, ontstaan er extra veiligheidsrisico’s die je goed moet beheren.</p>

    <p>De spreker legde uit dat er niet zoiets bestaat als een perfect veilig systeem. In plaats daarvan moet je werken aan een defensible architecture. Dat betekent dat je systemen zo ontwerpt dat ze beter bestand zijn tegen aanvallen, dat je risico’s beperkt en dat je problemen sneller kan opmerken en oplossen.</p>

    <p>Een belangrijk idee in de sessie was het gebruik van frameworks zoals NIS2 en IEC 62443. NIS2 verplicht bedrijven niet om één vaste architectuur te gebruiken, maar het vraagt wel dat ze nadenken over risico’s en passende beveiligingsmaatregelen nemen. Dit zorgt er indirect voor dat organisaties beter gestructureerde en veiligere netwerken moeten bouwen.</p>

    <p>Ook het concept van security levels binnen IEC 62443 (SL0 tot SL4) werd uitgelegd. Hiermee wordt aangegeven hoe goed een systeem beschermd moet zijn, afhankelijk van het type risico. Dit maakt het makkelijker om security stap voor stap op te bouwen in plaats van alles in één keer perfect te moeten maken.</p>

    <p>Daarnaast werd network segmentation besproken. Door een netwerk op te delen in verschillende zones en alleen noodzakelijke communicatie toe te laten, kan je de impact van een mogelijke aanval sterk beperken. Dit helpt niet alleen bij beveiliging, maar ook bij monitoring en incident response.</p>

    <p>Voor mij was deze sessie interessant omdat het duidelijk maakte hoe belangrijk de combinatie tussen IT en OT is in moderne organisaties. Het gaf mij ook een beter beeld van hoe security niet alleen technisch is, maar ook sterk afhangt van goede structuur en planning.</p>

        `
    },

    ipv6: {
        title: "Transitioning to IPv6",
        image: "C:\\Users\\Lennert\\Portofolio\\Images\\ipv6.jpg",
        content: `
    <p>IPv6 is onvermijdelijk geworden in de evolutie van moderne netwerken. Tijdens deze gespecialiseerde Tech & Meet sessie werd dieper ingegaan op de essentie van IPv6-adoptie en wat dit concreet betekent voor organisaties vandaag. De focus lag op de kansen, uitdagingen en initiatieven die nu al genomen kunnen worden om de overstap naar IPv6 en een dual-stack omgeving mogelijk te maken.</p>

    <p>De overgang naar IPv6 is al volop bezig bij internetproviders en grote organisaties. Zij hebben de eerste stappen al gezet, terwijl ook kleinere en middelgrote ondernemingen langzaam beginnen te volgen. Dit toont aan dat de verandering niet langer theoretisch is, maar een realiteit waar iedereen mee geconfronteerd zal worden.</p>

    <p>De sessie was opgebouwd uit drie duidelijke delen. Eerst werd uitgelegd waarom IPv6 noodzakelijk is, inclusief de voordelen, beperkingen en de redenen waarom de overstap niet langer kan worden uitgesteld. Dit gaf een goed inzicht in de fundamentele problemen van IPv4 en de nood aan een toekomstgerichte oplossing.</p>

    <p>Daarna werd ingezoomd op een IPv6-only toekomst. Hierbij werden verschillende strategieën besproken, samen met de risico’s en mogelijke scenario’s wanneer IPv4 volledig zou verdwijnen. Dit deel maakte duidelijk dat de overgang niet alleen technisch is, maar ook strategische en organisatorische keuzes vereist.</p>

    <p>Het derde deel ging over dual stack in de praktijk. Hierbij werd uitgelegd hoe IPv6 vandaag al geïmplementeerd kan worden naast IPv4 in bestaande infrastructuren. Onderwerpen zoals routing, firewalls, configuraties en security-overwegingen kwamen uitgebreid aan bod, met nadruk op praktische toepasbaarheid.</p>

    <p>De sessie gaf uiteindelijk een eerste blik op het volledige IPv6-transitiepad en hoe organisaties stap voor stap kunnen evolueren naar een veilige en stabiele dual-stack architectuur. Het doel was niet om alles tot in detail te behandelen, maar om een helder en realistisch overzicht te geven van de overgang.</p>

    <p>Wat uit de sessie vooral bleef hangen, is dat IPv6 vaak complexer lijkt dan het in werkelijkheid is. Veel van die complexiteit komt voort uit misverstanden of een gebrek aan ervaring. Wanneer het correct wordt uitgelegd, wordt duidelijk dat IPv6 net een logische en efficiënte evolutie is van bestaande netwerken.</p>

    <p>De spreker bracht dit alles op een duidelijke en toegankelijke manier, met praktische voorbeelden en een sterke focus op de realiteit binnen IT-omgevingen. Dit maakte het geheel niet alleen informatief, maar ook goed begrijpbaar voor een breed publiek.</p>
    `
    },

    hackathon: {
        title: "Hack The Future",
        image: "C:\\Users\\Lennert\\Portofolio\\Images\\hackathon.jpg",
        content: `
    <p>Hack The Future was voor mij een interessante en uitdagende ervaring waarbij ik samen met een medestudent deelnam aan de challenge “SeaFence Inc.: Rush to the Bottom” (Challenge 116). Het concept van de challenge situeerde zich in een futuristische setting in het jaar 2040, waarin technologische vooruitgang extreem ver doorgedreven is en de mensheid zich richt op de diepste en nog onontdekte delen van de oceaan.</p>

    <p>In deze challenge werden we gevraagd om een team van engineers te simuleren, een duikboot te bouwen en deze zo diep mogelijk te laten afdalen. De opdracht was niet alleen technisch, maar ook strategisch opgebouwd. Het doel was om zo efficiënt mogelijk upgrades en reparaties uit te voeren terwijl we rekening hielden met beperkte resources.</p>

    <p>De uitdaging werd volledig in Java uitgewerkt. We moesten een algoritme ontwikkelen dat beslissingen kon nemen over wanneer we de duikboot moesten verbeteren, herstellen of verder laten afdalen. Dit maakte het vooral interessant omdat er een sterke nadruk lag op optimalisatie en het vinden van de juiste balans tussen risico en progressie.</p>

    <p>Een belangrijk aspect van de challenge was resource management. Niet alleen de staat van de duikboot was van belang, maar ook de levens van de bemanning moesten in rekening gebracht worden. Dit zorgde ervoor dat elke beslissing impact had op meerdere factoren tegelijk, waardoor we voortdurend moesten afwegen wat de beste keuze was op korte en lange termijn.</p>

    <p>Naast de technische uitdaging was het event zelf ook een waardevolle ervaring. Er was gratis eten en drinken voorzien, wat een informele sfeer creëerde waarin je gemakkelijk kon netwerken met andere studenten en deelnemers. Daarnaast kregen we een goodiebag en een gratis toegangsticket voor de dierentuin naast de locatie van de hackathon.</p>

    <p>Hoewel we de challenge uiteindelijk niet gewonnen hebben, was het een zeer leerrijke ervaring. Het gaf me de kans om opnieuw intensief in Java te programmeren en te werken aan een probleem dat zowel logisch denken als strategisch inzicht vereiste. De combinatie van techniek, samenwerking en de competitieve sfeer maakte het een waardevolle hackathon om aan deel te nemen.</p>
    `
    },

     podcast: {
        title: "Podcast Software Engineering Robotica",
        image: "C:\\Users\\Lennert\\Portofolio\\Images\\podcast.jpg",
        content: `
        <p>
    In deze podcast ga ik samen met een medestudent in gesprek met Aaron Vanmaele, een zelfstandige software engineer gespecialiseerd in robotica. We hebben het over zijn job, de rol van AI binnen robotica en hoe deze technologie zowel in de industrie als in het onderwijs wordt toegepast. Daarnaast delen we ook inzichten over hoe AI onze manier van werken en studeren beïnvloedt.
        </p>

        <p>Hieronder vindt u de audio van de podcast:</p>
            <audio controls>
            <source src="C:\\Users\\Lennert\\Portofolio\\Images\\Podcast_Professional_Networking_Lennert-Dewispelaere_Arthur-Holsbeke.mp3" type="audio/mpeg">
            </audio>
        `
    },

    deepseek: {
        title: "Deepseek Uncovered",
        image: "C:\\Users\\Lennert\\Portofolio\\Images\\deepseek.png",
        content: `
    <p>Tijdens deze Tech & Meet sessie met als titel “DeepSeek Uncovered: The Open-Source AI Challenger from the East” kregen we een diepgaand overzicht van DeepSeek, een opkomend AI-model dat zich positioneert als open-source alternatief voor systemen zoals GPT-4 en Claude. De sessie werd gegeven in een periode waarin de AI-sector extreem snel evolueert en nieuwe spelers steeds vaker de gevestigde waarden uitdagen.</p>

    <p>DeepSeek werd in deze presentatie geïntroduceerd als een krachtige reeks modellen die ontwikkeld zijn in China en zich vooral richten op multimodale toepassingen en codegeneratie. Wat vooral benadrukt werd, is dat deze modellen niet alleen competitief zijn op vlak van prestaties, maar ook transparant en toegankelijk blijven, wat hen onderscheidt van veel commerciële AI-systemen.</p>

    <p>De spreker, Dimitri Casier, lector Software Development and AI aan Howest, bracht het onderwerp op een zeer toegankelijke en boeiende manier. Hij slaagde erin om complexe AI-concepten op een duidelijke manier uit te leggen en hield daarbij ook sterk de aandacht van het publiek vast, wat de sessie extra interessant maakte.</p>

    <p>Een belangrijk onderdeel van de sessie was een reeks live demonstraties waarin DeepSeek werd getest op verschillende domeinen zoals redeneren, codegeneratie en multimodale inputverwerking. Deze voorbeelden toonden aan hoe ver AI-modellen ondertussen geëvolueerd zijn en hoe snel ze taken kunnen uitvoeren die vroeger enkel door mensen mogelijk waren.</p>

    <p>Daarnaast werd er dieper ingegaan op de praktische toepassingen van DeepSeek in de echte wereld. Zo werd besproken hoe bedrijven AI kunnen inzetten om processen te automatiseren, hoe het onderwijs kan profiteren van intelligente assistenten en hoe onderzoekers AI gebruiken om sneller inzichten te verkrijgen uit grote hoeveelheden data.</p>

    <p>Naast de technische aspecten was er ook aandacht voor de ethische en geopolitieke impact van open-source AI. Er werd besproken hoe transparantie, controle en internationale concurrentie een steeds grotere rol spelen in de ontwikkeling en verspreiding van AI-technologieën wereldwijd.</p>

    <p>Wat mij vooral bijbleef, is dat DeepSeek niet enkel een alternatief is, maar mogelijk een belangrijke speler kan worden in de toekomstige AI-race. De combinatie van openheid, prestaties en brede toepasbaarheid maakt het een interessant project om verder op te volgen binnen de snel groeiende AI-wereld.</p>
`
    },

    nato: {
        title: "The Birth of NATO’s Cyber Defence",
        image: "C:\\Users\\Lennert\\Portofolio\\Images\\nato.jpg",
        content: `
    <p>Tijdens deze Tech & Meet sessie met als titel “The Birth of NATO’s Cyber Defence” kregen we een unieke inkijk in hoe cyber security binnen NATO is ontstaan en geëvolueerd tot een essentieel onderdeel van de moderne defensiestrategie. De presentatie werd gegeven door ir. Martin De Pauw, die zijn ervaring binnen zowel de militaire wereld als de IT-sector gebruikte om dit verhaal op een toegankelijke manier te brengen.</p>

    <p>In de vroege jaren werd cyber vaak gezien als een niche-domein voor technici en enthousiastelingen. Het was iets experimenteels, bijna een “speelterrein” voor mensen met interesse in computers en netwerken. Tijdens de sessie werd duidelijk hoe sterk dat beeld in de loop der jaren veranderd is, en hoe cyber vandaag een cruciaal onderdeel is geworden van wereldwijde veiligheid.</p>

    <p>Cyber kent namelijk geen grenzen. Het maakt geen onderscheid tussen landen, mensen of organisaties en heeft impact op iedereen die verbonden is met digitale systemen. Door de snelle evolutie van software, hardware, cloudtechnologie en artificiële intelligentie zijn de mogelijkheden enorm toegenomen, maar tegelijk ook de risico’s en kwetsbaarheden.</p>

    <p>Een belangrijk moment in deze evolutie was het jaar 2016, toen NATO cyberspace officieel erkende als een volwaardig operationeel domein, naast land, zee en lucht. Dit betekende een historische verschuiving in hoe digitale veiligheid werd bekeken binnen militaire contexten en internationale samenwerking.</p>

    <p>Vandaag bestaat NATO uit 32 lidstaten en is het uitgegroeid tot een van de sterkste allianties ter wereld. Cyber defense is daarbij een fundamentele pijler geworden binnen de bescherming van deze landen. De samenwerking tussen militaire en civiele experten speelt hierin een cruciale rol.</p>

    <p>De spreker, Martin De Pauw, gaf daarnaast ook inzicht in zijn eigen carrièrepad, van F16 avionica binnen de militaire luchtvaart tot software, hardware en netwerken, en uiteindelijk zijn rol in het mee vormgeven van cyberspace binnen NATO. Zijn ervaring maakte de presentatie niet alleen informatief, maar ook geloofwaardig en inspirerend.</p>

    <p>Wat deze sessie bijzonder maakte, is dat ze minder technisch was dan andere lezingen, maar juist sterk focuste op het grotere geheel: structuur, evolutie en strategie. Het gaf een duidelijk beeld van hoe cyber security niet enkel een technisch domein is, maar een wereldwijd en strategisch vraagstuk dat iedereen raakt.</p>
    `
    },
};

function openBlog(id) {
    const blog = blogs[id];

    document.getElementById("blog-title").innerText = blog.title;
    document.getElementById("blog-image").src = blog.image;
    document.getElementById("blog-content").innerHTML = blog.content;

    document.getElementById("blog-overlay").style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeBlog() {
    document.getElementById("blog-overlay").style.display = "none";
    document.body.style.overflow = "auto";
}