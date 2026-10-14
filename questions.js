/* ===== BANQUE DE QUESTIONS =====
   Format : ["Question", ["rép A","rép B","rép C","rép D"], index_bonne_réponse, "Explication"]
   Ajoute-en autant que tu veux : chaque partie en tire 10 au hasard, et les réponses sont mélangées. */
const Q=[
["Vitesse maximale sur une route à double sens sans séparateur central, par temps sec ?",["70 km/h","80 km/h","90 km/h","100 km/h"],1,"80 km/h, sauf limitation locale différente."],
["Vitesse maximale sur autoroute par temps de pluie ?",["90 km/h","100 km/h","110 km/h","130 km/h"],2,"110 km/h sous la pluie, 130 km/h par temps sec."],
["Vitesse maximale en agglomération, sauf indication contraire ?",["30 km/h","50 km/h","60 km/h","70 km/h"],1,"50 km/h en agglomération."],
["Quelle vitesse maximale en zone de rencontre ?",["10 km/h","20 km/h","30 km/h","50 km/h"],1,"20 km/h, et les piétons y sont prioritaires."],
["Taux d'alcool maximal autorisé pour un conducteur en permis probatoire ?",["0,0 g/L","0,2 g/L","0,5 g/L","0,8 g/L"],1,"0,2 g/L de sang en probatoire, contre 0,5 g/L pour les autres."],
["À partir de quel taux d'alcool dans le sang est-ce un délit ?",["0,5 g/L","0,6 g/L","0,8 g/L","1,0 g/L"],2,"0,8 g/L : c'est un délit. Entre 0,5 et 0,8, c'est une contravention."],
["Distance de sécurité minimale entre deux véhicules ?",["1 seconde","2 secondes","4 secondes","6 secondes"],1,"Au moins 2 secondes d'intervalle."],
["La ceinture de sécurité est obligatoire…",["Seulement à l'avant","Hors agglomération","À toutes les places équipées","Sur autoroute seulement"],2,"Toutes les places équipées, avant et arrière."],
["Peut-on conduire avec des écouteurs ou un casque audio ?",["Oui, si le volume est bas","Oui, d'une seule oreille","Non, c'est interdit","Oui, en agglomération"],2,"Interdit, ainsi que le téléphone tenu en main."],
["Dans un tunnel, quels feux doit-on allumer ?",["Aucun si c'est éclairé","Feux de croisement","Feux de route","Feux de détresse"],1,"Les feux de croisement, même si le tunnel est éclairé."],
["Sans panneau ni signalisation à une intersection, qui est prioritaire ?",["Le plus rapide","Le véhicule venant de droite","Le véhicule venant de gauche","Le plus gros véhicule"],1,"Priorité à droite."],
["Devant un panneau STOP, que doit-on faire ?",["Ralentir si la voie est libre","S'arrêter à la ligne, même si la voie est libre","Klaxonner puis passer","S'arrêter seulement s'il y a un véhicule"],1,"Arrêt obligatoire à la ligne d'effet."],
["À quelle distance minimale place-t-on le triangle de présignalisation (hors autoroute) ?",["10 m","20 m","30 m","5 m"],2,"Au moins 30 m en arrière du véhicule (jusqu'à 100 m sur autoroute)."],
["Profondeur minimale légale des sculptures d'un pneu ?",["0,6 mm","1,6 mm","2,6 mm","3 mm"],1,"1,6 mm, repérée par les témoins d'usure."],
["Jusqu'à quel âge un enfant doit-il avoir un dispositif de retenue adapté (siège, rehausseur) ?",["6 ans","8 ans","10 ans","12 ans"],2,"Jusqu'à 10 ans."],
["Peut-on dépasser en franchissant une ligne continue ?",["Oui, si la route est libre","Oui, hors agglomération","Non, jamais","Oui, pour un véhicule lent"],2,"Une ligne continue ne se franchit pas, même pour dépasser."],
["À quelle distance minimale avant un passage piéton l'arrêt et le stationnement sont-ils interdits ?",["2 m","5 m","10 m","15 m"],1,"5 m en amont du passage piéton."],
["Dans un rond-point sans indication contraire, qui est prioritaire ?",["Celui qui entre","Celui qui est déjà engagé","Le plus rapide","Le véhicule de droite à l'entrée"],1,"Priorité aux véhicules déjà engagés dans l'anneau."],
["Quand doit-on passer le premier contrôle technique d'une voiture neuve ?",["2 ans","4 ans","6 ans","10 ans"],1,"4 ans après la première mise en circulation, puis tous les 2 ans."],
["Combien de points a un permis probatoire au départ ?",["6","8","10","12"],0,"6 points, portés à 12 progressivement (3 ans, ou 2 ans en conduite accompagnée)."],
["Quand utiliser le feu antibrouillard arrière ?",["Dès qu'il pleut","La nuit","Quand la visibilité est inférieure à 50 m","En tunnel"],2,"Seulement si la visibilité est inférieure à 50 m."],
["Quelle distance latérale minimale pour dépasser un cycliste hors agglomération ?",["0,5 m","1 m","1,5 m","2 m"],2,"1,5 m hors agglomération, 1 m en agglomération."],
["Feu orange fixe : que faire ?",["Accélérer","S'arrêter, sauf si l'arrêt est dangereux","Passer toujours","Klaxonner"],1,"S'arrêter, sauf si on est trop proche pour freiner en sécurité."],
["Sur autoroute, la voie de gauche est…",["Réservée aux plus rapides","Réservée au dépassement","Libre pour tous si elle est vide","Réservée aux poids lourds"],1,"On ne s'y maintient pas : on y dépasse puis on se rabat."],
["En cas d'aquaplaning, que faut-il faire ?",["Freiner fort","Donner un coup de volant","Lever le pied progressivement","Accélérer"],2,"Lever le pied, tenir le volant droit, éviter les gestes brusques."],
["À quoi sert la bande d'arrêt d'urgence sur autoroute ?",["Dépasser un camion","Se reposer","Uniquement aux arrêts d'urgence","Rouler en cas de bouchon"],2,"Réservée aux arrêts d'urgence."],
["Un panneau rond à bordure rouge indique…",["Un danger","Une interdiction","Une indication","Une obligation"],1,"Rond rouge : interdiction ou limitation. Triangle : danger. Rond bleu : obligation."],
["Un véhicule prioritaire (pompiers, SAMU) arrive avec sirène. Que faire ?",["Rien, continuer","Accélérer","Lui céder le passage et se ranger","S'arrêter au milieu de la route"],2,"Céder le passage en se rangeant sans danger."]
];
