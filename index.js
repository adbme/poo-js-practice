class Animal {
    constructor(numberAnimal, image, nom, couleur, alimentation, taille, poids, habitat, vitesse, dureeDeVie) {
        this.numberAnimal = numberAnimal;
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

    }

}

let Animal1 = new Animal("Animal1", "https://s2.best-wallpaper.net/wallpaper/1920x1440/1610/White-lion-predator-mane_1920x1440.jpg", "lion blanc", "blanc", "carnivore, viande", "1,50 et 1,90 m pour les femelles et jusqu à 2,50 m pour les mâles", "80 à 160 kg pour les femelles et 150 à 225 kg pour les mâles", "On trouve le lion du Transvaal dans les environnements semi-arides du désert du Kalahari et les savanes d'Afrique du Sud", "45 à 65 km/h.", "14 à 20 ans à l'état sauvage, et jusqu'à 30 ans en captivité.");
let Animal2 = new Animal("Animal2", "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80", "éléphant africain", "gris", "herbivore, feuilles, branches, écorces d'arbres, fruits et racines", "2 à 4 m pour les femelles et 4 à 4,5 m pour les mâles", "entre 2 et 4 tonnes", "forêts tropicales et savanes d'Afrique", "25 à 40 km/h.", "70 à 80 ans en moyenne.");
let Animal3 = new Animal("Animal3", "https://w0.peakpx.com/wallpaper/53/759/HD-wallpaper-gorille-beau-enorme-il-fait-peur.jpg", "gorille des montagnes", "noir", "herbivore, feuilles, bourgeons, fruits, racines et insectes", "1,5 à 1,8 m pour les femelles et 1,7 à 1,8 m pour les mâles", "140 à 250 kg pour les mâles et 90 à 140 kg pour les femelles", "forêts tropicales des montagnes d'Afrique centrale", "35 à 40 km/h.", "35 à 40 ans en moyenne.");
let Animal4 = new Animal("Animal4", "https://images7.alphacoders.com/441/thumb-1920-441761.jpg", "Tigre", "orange et noir", "carnivore, principalement des gros animaux tels que les cerfs et les buffles", "1,80 à 2,30 m pour les mâles et 1,60 à 2,00 m pour les femelles", "120 à 300 kg pour les mâles et 90 à 200 kg pour les femelles", "Les tigres vivent en Asie, notamment en Inde, en Chine, au Népal et au Bhoutan.", "80 km/h.", "10 à 15 ans à l'état sauvage, et jusqu'à 20 ans en captivité.");
let Animal5 = new Animal("Animal5", "https://images4.alphacoders.com/115/thumb-1920-115368.jpg", "girafe", "brun et blanc", "herbivore, feuilles", "5 à 6 mètres", "jusqu'à 1 000 kg", "Les girafes vivent dans les savanes d'Afrique orientale et centrale", "jusqu'à 60 km/h", "jusqu'à 25 ans à l'état sauvage, jusqu'à 28 ans en captivité.");
let Animal6 = new Animal("Animal6", "https://images7.alphacoders.com/529/thumb-1920-529288.jpg", "koala", "gris", "feuilles d'eucalyptus", "35 à 50 cm", "4 à 15 kg", "Forêts d'eucalyptus d'Australie", "environ 15 km/h", "jusqu'à 20 ans");
let Animal7 = new Animal("Animal7", "https://www.reserveafricainesigean.fr/content/uploads/2017/04/fiche-grant.jpg", "zèbre des plaines", "blanc et noir rayé", "herbivore, herbe, feuilles, buissons", "1,30 à 1,50 mètres au garrot", "de 250 à 450 kg", "plaines et savanes", "jusqu'à 65 km/h", "jusqu'à 20 ans à l'état sauvage et jusqu'à 25 ans en captivité");
let Animal8 = new Animal("Animal8", "https://static.nationalgeographic.fr/files/styles/image_3200/public/cheetahs_234_600x450.jpg?w=1600", "guépard", "beige tacheté de noir", "carnivore, viande", "0,9 à 1,5 m pour le corps et 0,7 à 1 m pour la queue", "45 à 60 kg pour les mâles, et 35 à 45 kg pour les femelles", "Afrique, Inde et Iran", "120 km/h", "12 à 15 ans en liberté, et jusqu'à 20 ans en captivité");
let Animal9 = new Animal("Animal9", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Marsh_Crocodiles_basking_in_the_sun.JPG/1200px-Marsh_Crocodiles_basking_in_the_sun.JPG", "Crocodile", "vert", "Carnivore, poissons, reptiles, oiseaux, mammifères", "3 à 6 mètres", "200 à 1 000 kg", "Rivières, marécages, mangroves, forêts de bambous", "45 km/h sur de courtes distances", "70 ans en moyenne");
let Animal10 = new Animal("Animal10", "https://www.rts.ch/2019/01/21/11/28/10155321.image?w=1280&h=720", "requin blanc", "gris clair", "carnivore, poissons, mammifères marins", "jusqu'à 6,1 mètres pour les mâles et 4,5 mètres pour les femelles", "entre 800 et 2 000 kg", "océans tempérés et tropicaux dans le monde entier", "jusqu'à 70 km/h", "entre 30 et 35 ans");








let count = 0;

let boutton = document.getElementById("generate");




let nomAnimal = document.getElementById("nomAnimal")
let couleurAnimal = document.getElementById("couleurAnimal")
let alimentationAnimal = document.getElementById("alimentationAnimal")
let tailleAnimal = document.getElementById("tailleAnimal")
let poidsAnimal = document.getElementById("poidsAnimal")
let habitatAnimal = document.getElementById("habitatAnimal")
let vitesseAnimal = document.getElementById("vitesseAnimal")


boutton.onclick = function generateAnimal() {
    count++;
    console.log(count)


    if (count == 1) {
        imageAnimal.src = Animal1.image
        nomAnimal.innerHTML = Animal1.nom
        couleurAnimal.innerHTML = Animal1.couleur
        alimentationAnimal.innerHTML = Animal1.alimentation
        tailleAnimal.innerHTML = Animal1.taille
        poidsAnimal.innerHTML = Animal1.poids
        habitatAnimal.innerHTML = Animal1.habitat
        vitesseAnimal.innerHTML = Animal1.vitesse
    }
    else if (count == 2) {
        imageAnimal.src = Animal2.image
        nomAnimal.innerHTML = Animal2.nom
        couleurAnimal.innerHTML = Animal2.couleur
        alimentationAnimal.innerHTML = Animal2.alimentation
        tailleAnimal.innerHTML = Animal2.taille
        poidsAnimal.innerHTML = Animal2.poids
        habitatAnimal.innerHTML = Animal2.habitat
        vitesseAnimal.innerHTML = Animal2.vitesse
    }


    else if (count == 3) {
        imageAnimal.src = Animal3.image
        nomAnimal.innerHTML = Animal3.nom
        couleurAnimal.innerHTML = Animal3.couleur
        alimentationAnimal.innerHTML = Animal3.alimentation
        tailleAnimal.innerHTML = Animal3.taille
        poidsAnimal.innerHTML = Animal3.poids
        habitatAnimal.innerHTML = Animal3.habitat
        vitesseAnimal.innerHTML = Animal3.vitesse
    }
    else if (count == 4) {
        imageAnimal.src = Animal4.image
        nomAnimal.innerHTML = Animal4.nom
        couleurAnimal.innerHTML = Animal4.couleur
        alimentationAnimal.innerHTML = Animal4.alimentation
        tailleAnimal.innerHTML = Animal4.taille
        poidsAnimal.innerHTML = Animal4.poids
        habitatAnimal.innerHTML = Animal4.habitat
        vitesseAnimal.innerHTML = Animal4.vitesse
    }
}




