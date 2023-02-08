class Animal {
    constructor(image, nom, couleur, alimentation, taille, poids, habitat, vitesse, dureeDeVie) {
        this.image = image;
        this.nom = nom;
        this.couleur = couleur;
        this.alimentation = alimentation;
        this.taille = taille;
        this.poids = poids;
        this.habitat = habitat;
        this.vitesse = vitesse;
        this.dureeDeVie = dureeDeVie;


    }
    method() {
        let animales = document.getElementById("bigDiv");

        animales.innerHTML = 'caca'
    }

}

// class Animal1 extends Animal {
//     constructor(image, nom, couleur, alimentation, taille, poids, habitat, vitesse, dureeDeVie) {
//         this.image = "https://s2.best-wallpaper.net/wallpaper/1920x1440/1610/White-lion-predator-mane_1920x1440.jpg";
//         this.nom = "lion blanc";
//         this.couleur = "blanc";
//         this.alimentation = "carnivore, viande";
//         this.taille = "1,50 et 1,90 m pour les femelles et jusqu à 2,50 m pour les mâles";
//         this.poids = "80 à 160 kg pour les femelles et 150 à 225 kg pour les mâles";
//         this.habitat = "On trouve le lion du Transvaal dans les environnements semi-arides du désert du Kalahari et les savanes d'Afrique du Sud";
//         this.vitesse = "45 à 65 km/h.";
//         this.dureeDeVie = "14 à 20 ans à l'état sauvage, et jusqu'à 30 ans en captivité.";
//     }
// }

// class Animal2 extends Animal {
//     constructor(image, nom, couleur, alimentation, taille, poids, habitat, vitesse, dureeDeVie) {
//         this.image = "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80";
//         this.nom = "éléphant africain";
//         this.couleur = "gris";
//         this.alimentation = "herbivore, feuilles, branches, écorces d'arbres, fruits et racines";
//         this.taille = "2 à 4 m pour les femelles et 4 à 4,5 m pour les mâles";
//         this.poids = "entre 2 et 4 tonnes";
//         this.habitat = "forêts tropicales et savanes d'Afrique";
//         this.vitesse = "25 à 40 km/h.";
//         this.dureeDeVie = "70 à 80 ans en moyenne.";
//     }
// }

// class Animal3 extends Animal {
//     constructor(image, nom, couleur, alimentation, taille, poids, habitat, vitesse, dureeDeVie) {
//         this.image = "https://w0.peakpx.com/wallpaper/53/759/HD-wallpaper-gorille-beau-enorme-il-fait-peur.jpg";
//         this.nom = "gorille des montagnes";
//         this.couleur = "noir";
//         this.alimentation = "herbivore, feuilles, bourgeons, fruits, racines et insectes";
//         this.taille = "1,5 à 1,8 m pour les femelles et 1,7 à 1,8 m pour les mâles";
//         this.poids = "140 à 250 kg pour les mâles et 90 à 140 kg pour les femelles";
//         this.habitat = "forêts tropicales des montagnes d'Afrique centrale";
//         this.vitesse = "35 à 40 km/h.";
//         this.dureeDeVie = "35 à 40 ans en moyenne.";
//     }
// }

// class Animal4 extends Animal {
//     constructor(image, nom, couleur, alimentation, taille, poids, habitat, vitesse, dureeDeVie) {
//         this.image = "https://images7.alphacoders.com/441/thumb-1920-441761.jpg";
//         this.nom = "Tigre";
//         this.couleur = "orange et noir";
//         this.alimentation = "carnivore, principalement des gros animaux tels que les cerfs et les buffles";
//         this.taille = "1,80 à 2,30 m pour les mâles et 1,60 à 2,00 m pour les femelles";
//         this.poids = "120 à 300 kg pour les mâles et 90 à 200 kg pour les femelles";
//         this.habitat = "Les tigres vivent en Asie, notamment en Inde, en Chine, au Népal et au Bhoutan.";
//         this.vitesse = "80 km/h.";
//         this.dureeDeVie = "10 à 15 ans à l'état sauvage, et jusqu'à 20 ans en captivité.";
//     }
// }

// class Animal5 extends Animal {
//     constructor(image, nom, couleur, alimentation, taille, poids, habitat, vitesse, dureeDeVie) {
//         this.image = "https://images4.alphacoders.com/115/thumb-1920-115368.jpg";
//         this.nom = "girafe";
//         this.couleur = "brun et blanc";
//         this.alimentation = "herbivore, feuilles";
//         this.taille = "5 à 6 mètres";
//         this.poids = "jusqu'à 1 000 kg";
//         this.habitat = "Les girafes vivent dans les savanes d'Afrique orientale et centrale";
//         this.vitesse = "jusqu'à 60 km/h";
//         this.dureeDeVie = "jusqu'à 25 ans à l'état sauvage, jusqu'à 28 ans en captivité.";
//     }
// }

// class Animal6 extends Animal {
//     constructor(image, nom, couleur, alimentation, taille, poids, habitat, vitesse, dureeDeVie) {
//         this.image = "https://www.reserveafricainesigean.fr/content/uploads/2017/04/fiche-grant.jpg";
//         this.nom = "zèbre des plaines";
//         this.couleur = "blanc et noir rayé";
//         this.alimentation = "herbivore, herbe, feuilles, buissons";
//         this.taille = "1,30 à 1,50 mètres au garrot";
//         this.poids = "de 250 à 450 kg";
//         this.habitat = "plaines et savanes";
//         this.vitesse = "jusqu'à 65 km/h";
//         this.dureeDeVie = "jusqu'à 20 ans à l'état sauvage et jusqu'à 25 ans en captivité";
//     }
// }

// class Animal7 extends Animal {
//     constructor(image, nom, couleur, alimentation, taille, poids, habitat, vitesse, dureeDeVie) {
//         this.image = "https://images7.alphacoders.com/529/thumb-1920-529288.jpg";
//         this.nom = "koala";
//         this.couleur = "gris";
//         this.alimentation = "feuilles d'eucalyptus";
//         this.taille = "35 à 50 cm";
//         this.poids = "4 à 15 kg";
//         this.habitat = "Forêts d'eucalyptus d'Australie";
//         this.vitesse = "environ 15 km/h";
//         this.dureeDeVie = "jusqu'à 20 ans";
//     }
// }

// class Animal8 extends Animal {
//     constructor(image, nom, couleur, alimentation, taille, poids, habitat, vitesse, dureeDeVie) {
//         this.image = "https://static.nationalgeographic.fr/files/styles/image_3200/public/cheetahs_234_600x450.jpg?w=1600";
//         this.nom = "guépard";
//         this.couleur = "beige tacheté de noir";
//         this.alimentation = "carnivore, viande";
//         this.taille = "0,9 à 1,5 m pour le corps et 0,7 à 1 m pour la queue";
//         this.poids = "45 à 60 kg pour les mâles, et 35 à 45 kg pour les femelles";
//         this.habitat = "Afrique, Inde et Iran";
//         this.vitesse = "120 km/h";
//         this.dureeDeVie = "12 à 15 ans en liberté, et jusqu'à 20 ans en captivité";
//     }
// }

// class Animal9 extends Animal {
//     constructor(image, nom, couleur, alimentation, taille, poids, habitat, vitesse, dureeDeVie) {
//         this.image = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Marsh_Crocodiles_basking_in_the_sun.JPG/1200px-Marsh_Crocodiles_basking_in_the_sun.JPG";
//         this.nom = "Crocodile";
//         this.couleur = "vert";
//         this.alimentation = "Carnivore, poissons, reptiles, oiseaux, mammifères";
//         this.taille = "3 à 6 mètres";
//         this.poids = "200 à 1 000 kg";
//         this.habitat = "Rivières, marécages, mangroves, forêts de bambous";
//         this.vitesse = "45 km/h sur de courtes distances";
//         this.dureeDeVie = "70 ans en moyenne";
//     }
// }

// class Animal10 extends Animal {
//     constructor(image, nom, couleur, alimentation, taille, poids, habitat, vitesse, dureeDeVie) {
//         this.image = "https://www.rts.ch/2019/01/21/11/28/10155321.image?w=1280&h=720";
//         this.nom = "requin blanc";
//         this.couleur = "gris clair";
//         this.alimentation = "carnivore, poissons, mammifères marins";
//         this.taille = "jusqu'à 6,1 mètres pour les mâles et 4,5 mètres pour les femelles";
//         this.poids = "entre 800 et 2 000 kg";
//         this.habitat = "océans tempérés et tropicaux dans le monde entier";
//         this.vitesse = "jusqu'à 70 km/h";
//         this.dureeDeVie = "entre 30 et 35 ans";
//     }
// }

let Animal2 = new Animal("https://www.rts.ch/2019/01/21/11/28/10155321.image?w=1280&h=720", "requin blanc", "gris clair", "carnivore, poissons, mammifères marins", "jusqu'à 6,1 mètres pour les mâles et 4,5 mètres pour les femelles", "entre 800 et 2 000 kg", "océans tempérés et tropicaux dans le monde entier", "jusqu'à 70 km/h", "entre 30 et 35 ans");
let Animal3 = new Animal("https://s2.best-wallpaper.net/wallpaper/1920x1440/1610/White-lion-predator-mane_1920x1440.jpg", "lion blanc", "blanc", "carnivore, viande", "1,50 et 1,90 m pour les femelles et jusqu à 2,50 m pour les mâles", "80 à 160 kg pour les femelles et 150 à 225 kg pour les mâles", "On trouve le lion du Transvaal dans les environnements semi-arides du désert du Kalahari et les savanes d'Afrique du Sud", "45 à 65 km/h.", "14 à 20 ans à l'état sauvage, et jusqu'à 30 ans en captivité.");
let Animal4 = new Animal("https://www.rts.ch/2019/01/21/11/28/10155321.image?w=1280&h=720", "requin blanc", "gris clair", "carnivore, poissons, mammifères marins", "jusqu'à 6,1 mètres pour les mâles et 4,5 mètres pour les femelles", "entre 800 et 2 000 kg", "océans tempérés et tropicaux dans le monde entier", "jusqu'à 70 km/h", "entre 30 et 35 ans");
let Animal5 = new Animal("https://www.rts.ch/2019/01/21/11/28/10155321.image?w=1280&h=720", "requin blanc", "gris clair", "carnivore, poissons, mammifères marins", "jusqu'à 6,1 mètres pour les mâles et 4,5 mètres pour les femelles", "entre 800 et 2 000 kg", "océans tempérés et tropicaux dans le monde entier", "jusqu'à 70 km/h", "entre 30 et 35 ans");
let Animal6 = new Animal("https://www.rts.ch/2019/01/21/11/28/10155321.image?w=1280&h=720", "requin blanc", "gris clair", "carnivore, poissons, mammifères marins", "jusqu'à 6,1 mètres pour les mâles et 4,5 mètres pour les femelles", "entre 800 et 2 000 kg", "océans tempérés et tropicaux dans le monde entier", "jusqu'à 70 km/h", "entre 30 et 35 ans");
let Animal7 = new Animal("https://www.rts.ch/2019/01/21/11/28/10155321.image?w=1280&h=720", "requin blanc", "gris clair", "carnivore, poissons, mammifères marins", "jusqu'à 6,1 mètres pour les mâles et 4,5 mètres pour les femelles", "entre 800 et 2 000 kg", "océans tempérés et tropicaux dans le monde entier", "jusqu'à 70 km/h", "entre 30 et 35 ans");
let Animal8 = new Animal("https://www.rts.ch/2019/01/21/11/28/10155321.image?w=1280&h=720", "requin blanc", "gris clair", "carnivore, poissons, mammifères marins", "jusqu'à 6,1 mètres pour les mâles et 4,5 mètres pour les femelles", "entre 800 et 2 000 kg", "océans tempérés et tropicaux dans le monde entier", "jusqu'à 70 km/h", "entre 30 et 35 ans");
let Animal9 = new Animal("https://www.rts.ch/2019/01/21/11/28/10155321.image?w=1280&h=720", "requin blanc", "gris clair", "carnivore, poissons, mammifères marins", "jusqu'à 6,1 mètres pour les mâles et 4,5 mètres pour les femelles", "entre 800 et 2 000 kg", "océans tempérés et tropicaux dans le monde entier", "jusqu'à 70 km/h", "entre 30 et 35 ans");
let Animal10 = new Animal("https://www.rts.ch/2019/01/21/11/28/10155321.image?w=1280&h=720", "requin blanc", "gris clair", "carnivore, poissons, mammifères marins", "jusqu'à 6,1 mètres pour les mâles et 4,5 mètres pour les femelles", "entre 800 et 2 000 kg", "océans tempérés et tropicaux dans le monde entier", "jusqu'à 70 km/h", "entre 30 et 35 ans");
let Animal11 = new Animal("https://www.rts.ch/2019/01/21/11/28/10155321.image?w=1280&h=720", "requin blanc", "gris clair", "carnivore, poissons, mammifères marins", "jusqu'à 6,1 mètres pour les mâles et 4,5 mètres pour les femelles", "entre 800 et 2 000 kg", "océans tempérés et tropicaux dans le monde entier", "jusqu'à 70 km/h", "entre 30 et 35 ans");








let boutton = document.getElementById("generate");

boutton.onclick = function generateAnimal() {
    let animales = document.getElementById("bigDiv");

    animales.innerHTML =

        "<img src='" + Animal2.image + "'>" +
        Animal2.image + "<br>" + "<br>" +
        "Nom :" + Animal3.nom + "<br>" + "<br>" +
        "Couleur :" + Animal3.couleur + "<br>" + "<br>" +
        "Alimentation :" + Animal3.alimentation + "<br>" + "<br>" +
        "Taille :" + Animal3.taille + "<br>" + "<br>" +
        "Poids:" + Animal3.poids + "<br>" + "<br>" +
        "Habitat :" + Animal3.habitat + "<br>" +
        "Vitesse :" + Animal3.vitesse + "<br>" + "<br>" +
        "Durée de vie :" + Animal3.dureeDeVie
}


// function imageeee() {
//     let bigContainer = document.getElementById("bigDiv");
//     let imageContainer = document.createElement("img");
//     imageContainer.src = Animal2.image;

//     bigContainer.appendChild(imageContainer);


// }

// let imageVar = imageeee();



