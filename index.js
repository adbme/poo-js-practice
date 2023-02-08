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





