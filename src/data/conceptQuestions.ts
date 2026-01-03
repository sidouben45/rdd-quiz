export interface Question {
  id: string;
  question: string;
  options: { label: string; text: string }[];
  correctAnswers: string[];
  justification?: string;
  isMultipleChoice: boolean;
  category: "concept" | "cli";
}

export const conceptQuestions: Question[] = [
  {
    id: "c1",
    question: "Que pouvez-vous filtrer avec une ACL standard?",
    options: [
      { label: "A", text: "Numéro de Port" },
      { label: "B", text: "Protocol" },
      { label: "C", text: "Hôte" },
      { label: "D", text: "Adresse IP Source" },
    ],
    correctAnswers: ["D"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c2",
    question:
      "Quel est le PREMIER état transitoire d'un port STP lors d'une modification de topologie?",
    options: [
      { label: "A", text: "Blocking" },
      { label: "B", text: "Forwarding" },
      { label: "C", text: "Learning" },
      { label: "D", text: "Listening" },
    ],
    correctAnswers: ["D"],
    justification:
      "Listening est le premier état transitoire lors d'un changement de topologie STP. Le port écoute les BPDU sans transférer de trames. Il passe ensuite à Learning (apprentissage des adresses MAC) puis à Forwarding.",
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c3",
    question:
      "Quelle est la PRINCIPALE fonction du Bridge ID dans le protocole STP?",
    options: [
      {
        label: "A",
        text: "Identifier chaque switch de manière unique dans le réseau",
      },
      { label: "B", text: "Servir de critère pour l'élection du Root Bridge" },
      { label: "C", text: "Déterminer l'adresse IP de chaque switch" },
      { label: "D", text: "Configurer les VLAN sur chaque switch" },
    ],
    correctAnswers: ["B"],
    justification:
      "Le Bridge ID sert à identifier chaque switch (A), mais sa fonction PRINCIPALE dans STP est l'élection du Root Bridge (B). L'élection se base sur la priorité et l'adresse MAC contenues dans le Bridge ID.",
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c4",
    question:
      "Un réseau utilise le VLAN 10 pour le trafic administratif et le VLAN 20 pour le trafic utilisateur. Un commutateur doit être configuré pour permettre à tous les ordinateurs du VLAN 10 d'accéder à tous les ordinateurs du VLAN 20. Quelle est la meilleure solution?",
    options: [
      { label: "A", text: "Configurer un routeur entre les deux VLAN" },
      { label: "B", text: "Configurer un pont sur le switch" },
      { label: "C", text: "Configurer un VLAN privé sur le switch" },
      { label: "D", text: "Configurer un Trunk VLAN sur le switch" },
    ],
    correctAnswers: ["A"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c5",
    question: "À quoi sert le port SPAN?",
    options: [
      { label: "A", text: "Il permet la mise à jour du firmware du switch" },
      { label: "B", text: "Il permet de connecter des périphériques USB" },
      { label: "C", text: "Il est utilisé pour configurer les VLANs" },
      { label: "D", text: "Il est utilisé pour analyser le trafic réseau" },
    ],
    correctAnswers: ["D"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c6",
    question:
      "Si une interface de routeur est encombrée, quel protocole est utilisé pour informer les routeurs voisins?",
    options: [
      { label: "A", text: "IP" },
      { label: "B", text: "ARP" },
      { label: "C", text: "IGMP" },
      { label: "D", text: "ICMP" },
    ],
    correctAnswers: ["D"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c7",
    question: "Quand est-ce que les messages d'erreurs ICMP sont-ils accusés?",
    options: [
      { label: "A", text: "Cela dépend du TTL" },
      { label: "B", text: "Lorsqu'il y a une redirection" },
      { label: "C", text: "Jamais" },
      {
        label: "D",
        text: "Lorsque le routeur n'arrive pas à atteindre le destinataire",
      },
    ],
    correctAnswers: ["C"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c8",
    question: "Dans un modèle TCP/IP (Choix multiple)",
    options: [
      {
        label: "A",
        text: "Une couche N peut communiquer avec la couche N-1 de la même machine",
      },
      {
        label: "B",
        text: "Une couche N peut communiquer avec la couche N+1 d'une autre machine",
      },
      {
        label: "C",
        text: "Le 1er en-tête à interpréter à la réception correspond à celui créé par la couche application",
      },
      {
        label: "D",
        text: "Le 1er en-tête à interpréter à la réception correspond à celui créé par la couche physique",
      },
    ],
    correctAnswers: ["A", "D"],
    isMultipleChoice: true,
    category: "concept",
  },
  {
    id: "c9",
    question:
      "Quels sont les avantages de l'utilisation des VLAN? (Choix multiple)",
    options: [
      { label: "A", text: "Améliorer la sécurité du réseau" },
      { label: "B", text: "Améliorer les performances du réseau" },
      { label: "C", text: "Simplifier la gestion du réseau" },
      { label: "D", text: "Éviter les boucles" },
    ],
    correctAnswers: ["A", "B", "C"],
    isMultipleChoice: true,
    category: "concept",
  },
  {
    id: "c10",
    question:
      "Parmi les propositions suivantes quelles sont celles qui sont fausses? (Choix multiple)",
    options: [
      { label: "A", text: "Les routeurs de niveau 2 fonctionnent en switch" },
      { label: "B", text: "Les routeurs transmettent les broadcasts" },
      { label: "C", text: "Les routeurs sont plus sécurisés que les switch" },
      { label: "D", text: "Les routeurs sont plus rapides que les switch" },
    ],
    correctAnswers: ["A", "B", "D"],
    isMultipleChoice: true,
    category: "concept",
  },
  {
    id: "c11",
    question:
      "Le protocole IP assure les fonctions suivantes? (Choix multiple)",
    options: [
      { label: "A", text: "le routage" },
      { label: "B", text: "l'affectation des numéros de port" },
      { label: "C", text: "le contrôle de flux" },
      { label: "D", text: "la fragmentation" },
    ],
    correctAnswers: ["A", "D"],
    isMultipleChoice: true,
    category: "concept",
  },
  {
    id: "c12",
    question:
      "L'architecture TCP/IP a été développée dans le but: (Choix multiple)",
    options: [
      { label: "A", text: "De normaliser les réseaux locaux" },
      {
        label: "B",
        text: "De favoriser des réseaux qui utilisent des systèmes d'exploitation différents",
      },
      { label: "C", text: "D'interconnecter des réseaux hétérogènes" },
      { label: "D", text: "D'augmenter l'étendue d'un réseau" },
    ],
    correctAnswers: ["B", "C"],
    isMultipleChoice: true,
    category: "concept",
  },
  {
    id: "c13",
    question:
      "Quelles sont les caractéristiques du protocole UDP? (Choix multiple)",
    options: [
      { label: "A", text: "Il est orienté connexion" },
      { label: "B", text: "La fiabilité fournie par la couche application" },
      { label: "C", text: "Aucune livraison garantie des datagrammes" },
      {
        label: "D",
        text: "La transmission des données en mode full duplex fiable",
      },
    ],
    correctAnswers: ["B", "C"],
    isMultipleChoice: true,
    category: "concept",
  },
  {
    id: "c14",
    question:
      "Lors du transfert des segments de données, quelles sont les principales fonctions assurées par le récepteur? (Choix multiple)",
    options: [
      { label: "A", text: "La segmentation" },
      { label: "B", text: "L'encapsulation" },
      { label: "C", text: "Le réassemblage" },
      { label: "D", text: "L'accusé de réception" },
    ],
    correctAnswers: ["C", "D"],
    isMultipleChoice: true,
    category: "concept",
  },
  {
    id: "c15",
    question:
      "Quel protocole permettrait de résoudre l'adresse 132.148.0.1 en 00-a0-00-12-26-1F?",
    options: [
      { label: "A", text: "DHCP" },
      { label: "B", text: "ARP" },
      { label: "C", text: "WINS" },
      { label: "D", text: "R-ARP" },
    ],
    correctAnswers: ["B"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c16",
    question: "Une carte réseau Ethernet 10 base 2, dispose:",
    options: [
      { label: "A", text: "Débit de 10 Gb/s" },
      { label: "B", text: "D'une portée de 500m" },
      { label: "C", text: "Connecteur BNC" },
      { label: "D", text: "D'un connecteur RJ45" },
    ],
    correctAnswers: ["C"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c17",
    question:
      "Lesquelles des caractéristiques suivantes s'appliquent à l'adresse IP?",
    options: [
      { label: "A", text: "Elle n'a pas besoin d'être unique sur le réseau" },
      {
        label: "B",
        text: "Elle peut être attribuée de manière statique ou dynamique",
      },
      {
        label: "C",
        text: "Elle utilise un format binaire de 32 bits pour IPv4",
      },
      {
        label: "D",
        text: "Elle est toujours fournie par le fournisseur d'accès Internet",
      },
    ],
    correctAnswers: ["B"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c18",
    question: "Quel énoncé décrit correctement les répéteurs?",
    options: [
      { label: "A", text: "Ils peuvent réguler le trafic dans un réseau" },
      {
        label: "B",
        text: "Ils permettent aux réseaux de s'étendre sur de plus longues distances",
      },
      {
        label: "C",
        text: "Ils filtrent les paquets de données en fonction des adresses MAC de destination",
      },
      {
        label: "D",
        text: "Ils permettent aux administrateurs réseau d'isoler le trafic",
      },
    ],
    correctAnswers: ["B"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c19",
    question: "Quel adressage s'effectue au niveau de la couche 2?",
    options: [
      { label: "A", text: "Adressage logique" },
      { label: "B", text: "Adressage physique" },
      { label: "C", text: "Adressage IP" },
      { label: "D", text: "Adresse MAC" },
    ],
    correctAnswers: ["B"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c20",
    question: "Qu'est qu'un VLAN?",
    options: [
      { label: "A", text: "Réseau local" },
      {
        label: "B",
        text: "Segmentation d'un support physique en segments logiques",
      },
      { label: "C", text: "Réseau local virtuel" },
      {
        label: "D",
        text: "Segmentation d'un support logique en segments physiques",
      },
    ],
    correctAnswers: ["C"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c21",
    question:
      "Quels sont les intérêts de la création d'un VLAN? (Choix multiple)",
    options: [
      { label: "A", text: "Limitation de la diffusion des broadcasts" },
      {
        label: "B",
        text: "Plus grande flexibilité de la segmentation du réseau (indépendance géographique)",
      },
      { label: "C", text: "Amélioration de la sécurité" },
      { label: "D", text: "Filtrage des paquets au niveau 3" },
    ],
    correctAnswers: ["A", "B", "C"],
    justification:
      "Les VLANs offrent plusieurs avantages: isolation des broadcasts (A), flexibilité organisationnelle (B), et amélioration de la sécurité par segmentation (C)",
    isMultipleChoice: true,
    category: "concept",
  },
  {
    id: "c22",
    question: "La technologie VLANs se situe au niveau de la:",
    options: [
      { label: "A", text: "Couche 1" },
      { label: "B", text: "Couche 2" },
      { label: "C", text: "Couche 3" },
      { label: "D", text: "Couche 4" },
    ],
    correctAnswers: ["B"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c23",
    question:
      "Un administrateur réseau utilise un PC pour accéder à un routeur via le port console du routeur. Le PC et le routeur, reliés par un câble, sont sous tension. Il est, toutefois, impossible d'établir une session. Quelles sont les actions à effectuer pour résoudre ce problème? (Choisissez deux réponses.)",
    options: [
      {
        label: "A",
        text: "Vérifier que le câble est correctement branché à chaque extrémité",
      },
      { label: "B", text: "Replacer la carte réseau du PC" },
      {
        label: "C",
        text: "Vérifier les voyants de liaison de l'émetteur-récepteur",
      },
      {
        label: "D",
        text: "Vérifier qu'un mot de passe a été configuré au niveau de la ligne de console",
      },
      { label: "E", text: "Vérifier que le câble est du type approprié" },
      { label: "F", text: "Replacer la carte de la console sur le routeur" },
    ],
    correctAnswers: ["A", "E"],
    isMultipleChoice: true,
    category: "concept",
  },
  {
    id: "c24",
    question:
      "Quelle est la fonction du masque par défaut utilisant un réseau TCP/IP?",
    options: [
      { label: "A", text: "Identifie le routeur nécessaire" },
      { label: "B", text: "Attribuer l'adresse IP au Hostes locaux" },
      { label: "C", text: "Permet aux machines locales de se communiquer" },
      { label: "D", text: "Permet de distinguer le Net Id du Host Id" },
    ],
    correctAnswers: ["D"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c25",
    question:
      "Quel protocole permet de créer une topologie commutée sans boucle?",
    options: [
      { label: "A", text: "TCSBP" },
      { label: "B", text: "SMTP" },
      { label: "C", text: "Spanning Tree" },
      { label: "D", text: "Rapid Tree" },
      { label: "E", text: "VLAN" },
    ],
    correctAnswers: ["C"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c26",
    question:
      "Que signifie pour le routeur une distance administrative de route égale à 1?",
    options: [
      { label: "A", text: "Le paquet doit être éliminé" },
      { label: "B", text: "La destination est inaccessible" },
      { label: "C", text: "La destination est un réseau directement connecté" },
      { label: "D", text: "Aucune réponse appropriée" },
    ],
    correctAnswers: ["C"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c27",
    question: "Pourquoi un routeur crée-t-il une table de routage?",
    options: [
      {
        label: "A",
        text: "Pour répertorier les routes disponibles pour l'envoi de données",
      },
      {
        label: "B",
        text: "Pour mettre en correspondance les adresses locales de couche 2 avec l'adresse de destination de couche 3",
      },
      {
        label: "C",
        text: "Pour envoyer dynamiquement les mises à jour périodiques relatives à l'état des routeurs",
      },
      {
        label: "D",
        text: "Pour éviter les boucles de routage lorsque des liaisons redondantes sont ajoutées au réseau",
      },
      {
        label: "E",
        text: "Pour sélectionner le meilleur chemin vers une destination",
      },
    ],
    correctAnswers: ["A"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c28",
    question:
      "Qu'arrive-t-il aux ports appartenant à un VLAN lorsque ce dernier est supprimé?",
    options: [
      { label: "A", text: "Ils deviennent inactifs" },
      { label: "B", text: "Ils sont renvoyés par défaut au VLAN de gestion" },
      {
        label: "C",
        text: "Ils deviennent automatiquement des membres du VLAN1",
      },
      {
        label: "D",
        text: "Ils doivent être affectés à un autre VLAN avant la suppression de ce VLAN",
      },
      {
        label: "E",
        text: "Ils continuent d'appartenir à ce VLAN jusqu'au redémarrage du commutateur, puis ils deviennent membres du VLAN de gestion",
      },
    ],
    correctAnswers: ["A"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c29",
    question:
      "Qu'est-ce qui décrit le mieux une collision dans un réseau Ethernet?",
    options: [
      {
        label: "A",
        text: "Conséquence d'un trop grand nombre de répéteurs dans un réseau",
      },
      { label: "B", text: "Deux nœuds ayant la même adresse MAC" },
      {
        label: "C",
        text: "Conséquence de la transmission simultanée par deux nœuds",
      },
      {
        label: "D",
        text: "Conséquence de l'utilisation dans un réseau de protocoles non conformes au modèle OSI",
      },
    ],
    correctAnswers: ["C"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c30",
    question:
      "Lesquels des énoncés suivants sont vrais à propos de la méthode permettant d'identifier l'appartenance aux LAN virtuels dans des trames Ethernet?",
    options: [
      {
        label: "A",
        text: "L'en-tête de la trame conserve son format d'origine lorsqu'elle atteint sa destination",
      },
      {
        label: "B",
        text: "Il n'est pas nécessaire d'identifier l'appartenance aux VLANs des trames, sauf en présence d'une liaison ISL",
      },
      {
        label: "C",
        text: "La trame Ethernet est encapsulée ou modifiée avec les informations d'identification des LAN virtuels",
      },
      {
        label: "D",
        text: "L'ID du LAN virtuel est supprimé par l'unité d'extrémité lors de la livraison de la trame",
      },
    ],
    correctAnswers: ["C"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c31",
    question:
      "Quels sont les avantages des LAN virtuels pour une entreprise? (Choix multiple)",
    options: [
      {
        label: "A",
        text: "Ils centralisent le personnel des services et les ressources réseau en une zone physique unique",
      },
      {
        label: "B",
        text: "Ils offrent une grande souplesse d'organisation en regroupant les utilisateurs par fonction et non par lieu physique",
      },
      {
        label: "C",
        text: "Ils simplifient l'ajout et le déplacement des ressources réseau et des utilisateurs en cas de croissance",
      },
      {
        label: "D",
        text: "Ils réduisent le nombre de domaines de broadcast dans un réseau d'entreprise",
      },
      { label: "E", text: "Ils réduisent les coûts de gestion de réseau" },
      {
        label: "F",
        text: "Ils éliminent le routage du trafic sur les grands réseaux",
      },
    ],
    correctAnswers: ["B", "C", "D", "E"],
    isMultipleChoice: true,
    category: "concept",
  },
  {
    id: "c32",
    question:
      "Quelles informations la fonction d'étiquetage ajoute-t-elle à chacune des trames pour permettre leur acheminement sur une liaison agrégée commutée?",
    options: [
      { label: "A", text: "L'adresse MAC de destination" },
      { label: "B", text: "L'adresse MAC du commutateur" },
      { label: "C", text: "L'ID du port" },
      { label: "D", text: "Le VID" },
    ],
    correctAnswers: ["D"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c33",
    question:
      "À quelle fréquence le protocole RIP v2 envoie-t-il par défaut les mises à jour de table de routage?",
    options: [
      { label: "A", text: "Toutes les 30 secondes" },
      { label: "B", text: "Toutes les 45 secondes" },
      { label: "C", text: "Toutes les 60 secondes" },
      { label: "D", text: "Toutes les 90 secondes" },
    ],
    correctAnswers: ["A"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c34",
    question:
      "Quel serveur permettant la traduction d'adresses IP sous forme de noms (et inversement):",
    options: [
      { label: "A", text: "DHCP" },
      { label: "B", text: "DNS" },
      { label: "C", text: "Proxy" },
      { label: "D", text: "Serveur dédié" },
    ],
    correctAnswers: ["B"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c35",
    question:
      "Lesquelles des propositions suivantes décrivent le protocole RIP v1?",
    options: [
      { label: "A", text: "La valeur métrique maximum correspond à 255 sauts" },
      { label: "B", text: "La valeur métrique maximum correspond à 15 sauts" },
      {
        label: "C",
        text: "Prend en considération le subnetting à masque différent",
      },
      {
        label: "D",
        text: "Les mises à jour de routage interviennent toutes les 60 secondes",
      },
    ],
    correctAnswers: ["B"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c36",
    question:
      "Quelles adresses IPv4 correspondent à des adresses réseau pour un sous-réseau? (Choix multiple)",
    options: [
      { label: "A", text: "172.16.4.63/26" },
      { label: "B", text: "172.16.4.128/26" },
      { label: "C", text: "172.16.4.191/26" },
      { label: "D", text: "172.16.4.64/27" },
      { label: "E", text: "172.16.4.95/27" },
      { label: "F", text: "172.16.4.160/27" },
    ],
    correctAnswers: ["B", "D", "F"],
    justification:
      "B: réseau: .128, hôtes: .129-.190, broadcast: .191 | D: réseau: .64, hôtes: .65-.94, broadcast: .95 | F: réseau: .160, hôtes: .161-.190, broadcast: .191",
    isMultipleChoice: true,
    category: "concept",
  },
  {
    id: "c37",
    question:
      "Vous devez modifier les mots de passe du routeur en raison d'une violation de sécurité. Quelles informations donnent les entrées de configuration suivantes?\n\nRouter(config)# line vty 0 3\nRouter(config-line)# password c13c0\nRouter(config-line)# login",
    options: [
      {
        label: "A",
        text: "Ces entrées spécifient trois lignes Telnet pour l'accès à distance",
      },
      {
        label: "B",
        text: "Ces entrées spécifient quatre lignes Telnet pour l'accès à distance",
      },
      {
        label: "C",
        text: "Ces entrées définissent les mots de passe console et Telnet sur « c13c0 »",
      },
      {
        label: "D",
        text: "L'accès Telnet sera refusé parce que la configuration Telnet est incomplète",
      },
      {
        label: "E",
        text: "L'accès sera autorisé via Telnet si vous utilisez « c13c0 » comme mot de passe",
      },
    ],
    correctAnswers: ["B"],
    justification: "vty 0 3 = 4 lignes: 0,1,2,3",
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c38",
    question:
      "Lequel des protocoles suivants est utilisé pour accéder à des e-mails tout en les laissant sur le serveur?",
    options: [
      { label: "A", text: "SMTP" },
      { label: "B", text: "POP" },
      { label: "C", text: "IMAP" },
      { label: "D", text: "HTTP" },
    ],
    correctAnswers: ["C"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c39",
    question:
      "Sur quelle interface de commutateur l'administrateur devrait configurer une adresse IP pour que le commutateur puisse être géré à distance?",
    options: [
      { label: "A", text: "FastEthernet0/1" },
      { label: "B", text: "VLAN 1" },
      { label: "C", text: "Console 0" },
      { label: "D", text: "Vty 0" },
    ],
    correctAnswers: ["B"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c40",
    question: "Qu'est-ce qu'un VLAN de niveau 1?",
    options: [
      { label: "A", text: "Vlan par authentification" },
      { label: "B", text: "Vlan par adresse MAC" },
      { label: "C", text: "Vlan par adresse IP" },
      { label: "D", text: "Aucune réponse appropriée" },
    ],
    correctAnswers: ["B"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c41",
    question: "Un port d’accès peut-il appartenir à deux VLANs en même temps ?",
    options: [
      { label: "A", text: "Vrai" },
      { label: "B", text: "Faux" },
    ],
    correctAnswers: ["B"],
    justification:
      "Un port d’accès ne peut appartenir qu’à un VLAN ; seuls les ports trunk peuvent transporter plusieurs VLANs.",
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c42",
    question: "Le VID est représenté sur:",
    options: [
      { label: "A", text: "8 bits" },
      { label: "B", text: "12 bits" },
      { label: "C", text: "16 bits" },
      { label: "D", text: "3 bits" },
    ],
    correctAnswers: ["B"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c43",
    question: "Les ACLs sont faites pour:",
    options: [
      { label: "A", text: "Limiter le trafic réseau" },
      {
        label: "B",
        text: "Fournir un niveau de sécurité de base pour l'accès réseau",
      },
      { label: "C", text: "Elles filtrent le trafic en fonction de son type" },
      { label: "D", text: "Définir de nouveaux domaines de broadcast" },
    ],
    correctAnswers: ["B"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c44",
    question:
      "Pour évaluer le trafic réseau, quelles sont les informations extraites qu'utilise une ACL standard parmi les suivantes:",
    options: [
      { label: "A", text: "Adresse IP source" },
      { label: "B", text: "TTL" },
      { label: "C", text: "Adresse IP de destination" },
      { label: "D", text: "Mac destination" },
      { label: "E", text: "Port de destination" },
    ],
    correctAnswers: ["A"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c45",
    question:
      "Parmi les points suivants, quelle définition correspond correctement au masque générique (wildcard mask) IPv4?",
    options: [
      {
        label: "A",
        text: "Il utilise des 0 pour indiquer 'doit correspondre' et des 1 pour 'peut varier'",
      },
      {
        label: "B",
        text: "Il permet de distinguer l'adresse réseau de l'adresse machine",
      },
      {
        label: "C",
        text: "Il est principalement utilisé dans les ACL pour spécifier quels bits doivent être vérifiés",
      },
      {
        label: "D",
        text: "Il est toujours l'inverse du masque de sous-réseau",
      },
    ],
    correctAnswers: ["A", "C"],
    justification:
      "Le masque générique (wildcard mask) utilise 0=doit correspondre, 1=peut varier (A) et est utilisé dans les ACL (C). Option B décrit un masque de sous-réseau",
    isMultipleChoice: true,
    category: "concept",
  },
  {
    id: "c46",
    question:
      "Quel protocole est utilisé pour transférer une image entre un client et un serveur?",
    options: [
      { label: "A", text: "SMTP" },
      { label: "B", text: "FTP" },
      { label: "C", text: "SNMP" },
      { label: "D", text: "TFTP" },
    ],
    correctAnswers: ["B"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c47",
    question: "Quelle définition est correcte qui concerne le PAT?",
    options: [
      {
        label: "A",
        text: "Une adresse publique correspond à une adresse privée",
      },
      {
        label: "B",
        text: "Une adresse publique correspond à des adresses privées",
      },
      {
        label: "C",
        text: "Des adresses privées correspondent à une plage d'adresses publiques",
      },
      { label: "D", text: "Peu importe" },
    ],
    correctAnswers: ["B"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c48",
    question:
      "Laquelle de ces instructions est une ACL étendue qui spécifie EXPLICITEMENT un protocole de transport (comme TCP ou UDP) ?",
    options: [
      { label: "A", text: "access-list 110 permit any any" },
      { label: "B", text: "access-list 50 deny 192.168.1.1 0.0.0.255" },
      { label: "C", text: "access-list 101 deny tcp any host 192.168.1.1" },
      {
        label: "D",
        text: "access-list 2500 deny tcp any host 192.168.1.1 eq 22",
      },
    ],
    correctAnswers: ["C", "D"],
    justification:
      "C et D spécifient explicitement le protocole TCP. A est une ACL étendue mais utilise 'any' pour le protocole. B est une ACL standard (numéro 50).",
    isMultipleChoice: true,
    category: "concept",
  },
  {
    id: "c49",
    question:
      "Quelles affirmations concernant les ACL Cisco sont vraies? (Choix multiple)",
    options: [
      {
        label: "A",
        text: "On ne peut appliquer qu'une seule ACL par direction, interface et protocole",
      },
      {
        label: "B",
        text: "Toute ACL IP se termine implicitement par 'deny any'",
      },
      {
        label: "C",
        text: "Les ACL IP standard utilisent les numéros 1-99 et les ACL étendues 100-199",
      },
      {
        label: "D",
        text: "Par défaut, une ACL non spécifiée s'applique en sortie (outbound)",
      },
    ],
    correctAnswers: ["A", "B", "C"],
    justification:
      "A: Vrai - une seule ACL par direction/interface/protocole. B: Vrai - 'deny any' implicite. C: Vrai - plages standard. D: Faux - aucune ACL par défaut",
    isMultipleChoice: true,
    category: "concept",
  },
  {
    id: "c50",
    question:
      "Host is able to ping a web server but it is not able to do HTTPS request.",
    options: [
      { label: "A", text: "ACL blocking port 23" },
      { label: "B", text: "ACL blocking All ports" },
      { label: "C", text: "ACL blocking port 80" },
      { label: "D", text: "ACL blocking port 443" },
    ],
    correctAnswers: ["D"],
    justification: "HTTPS utilise le port 443",
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c51",
    question: "Which of the following are the valid numbers of standard ACL?",
    options: [
      { label: "A", text: "60" },
      { label: "B", text: "151" },
      { label: "C", text: "1350" },
      { label: "D", text: "2050" },
    ],
    correctAnswers: ["A"],
    justification:
      "Standard ACL: 1-99. 151 est Extended ACL (100-199), 1350 est Extended ACL étendue (1300-1999)",
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c52",
    question:
      "Which configuration can be used with PAT to allow multiple inside addresses to be translated to a single outside address?",
    options: [
      { label: "A", text: "Dynamic Routing" },
      { label: "B", text: "DNS" },
      { label: "C", text: "Preempt" },
      { label: "D", text: "Overload" },
    ],
    correctAnswers: ["D"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c53",
    question:
      "Quelle est la distance administrative par défaut d'une route IP obtenue dynamiquement via RIP?",
    options: [
      { label: "A", text: "0" },
      { label: "B", text: "1" },
      { label: "C", text: "5" },
      { label: "D", text: "120" },
    ],
    correctAnswers: ["D"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c54",
    question: "Comment placer une ACL standard?",
    options: [
      { label: "A", text: "Plus près de la source" },
      { label: "B", text: "Plus près de la destination" },
      { label: "C", text: "Ça dépend du type de l'ACL" },
      { label: "D", text: "Aucune importance" },
    ],
    correctAnswers: ["B"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c55",
    question:
      "Lequel des protocoles suivants est utilisé pour envoyer des e-mails?",
    options: [
      { label: "A", text: "POP" },
      { label: "B", text: "IMAP" },
      { label: "C", text: "SMTP" },
      { label: "D", text: "FTP" },
    ],
    correctAnswers: ["C"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c56",
    question:
      "Lesquelles des propositions suivantes sont des plages d'adresses IP privées? (Choix multiple)",
    options: [
      { label: "A", text: "10.0.0.0 à 10.255.255.255" },
      { label: "B", text: "200.100.50.0 à 200.100.25.255" },
      { label: "C", text: "172.16.0.0 à 172.31.255.255" },
      { label: "D", text: "150.150.0.0 à 150.150.255.255" },
      { label: "E", text: "192.168.0.0 à 192.168.255.255" },
      { label: "F", text: "127.16.0.0 à 127.31.255.255" },
    ],
    correctAnswers: ["A", "C", "E"],
    justification: "A: Classe A privée, C: Classe B privée, E: Classe C privée",
    isMultipleChoice: true,
    category: "concept",
  },
  {
    id: "c57",
    question: "Que signifie le protocole DHCP?",
    options: [
      { label: "A", text: "Domain Host Connection Protocol" },
      { label: "B", text: "Data Handling Control Protocol" },
      { label: "C", text: "Dynamic Host Configuration Protocol" },
      { label: "D", text: "Device Host Configuration Protocol" },
    ],
    correctAnswers: ["C"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c58",
    question: "Quels sont les ports standards pour POP3 et IMAP?",
    options: [
      { label: "A", text: "25 et 110" },
      { label: "B", text: "110 et 143" },
      { label: "C", text: "143 et 443" },
      { label: "D", text: "101 et 134" },
    ],
    correctAnswers: ["B"],
    justification: "POP3=110, IMAP=143",
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c59",
    question: "Quel est le port standard pour DHCP (serveur)?",
    options: [
      { label: "A", text: "66" },
      { label: "B", text: "67" },
      { label: "C", text: "68" },
      { label: "D", text: "69" },
    ],
    correctAnswers: ["B"],
    justification: "Serveur DHCP=67, Client DHCP=68",
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c60",
    question: "Quel est l'objectif principal du subnetting?",
    options: [
      { label: "A", text: "Maximiser les adresses disponibles" },
      { label: "B", text: "Réduire la taille des paquets" },
      {
        label: "C",
        text: "Créer des sous-réseaux pour respecter les besoins en hôtes",
      },
      { label: "D", text: "Activer le routage dynamique" },
    ],
    correctAnswers: ["C"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c61",
    question:
      "Que faut-il configurer pour garantir la communication entre des sous-réseaux différents?",
    options: [
      { label: "A", text: "Une route statique ou un protocole de routage" },
      { label: "B", text: "Une adresse IP sur les hôtes" },
      { label: "C", text: "Un VLAN sur le switch" },
      { label: "D", text: "Une connexion Wi-Fi" },
    ],
    correctAnswers: ["A"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c62",
    question:
      "Combien d'adresses IP sont disponibles dans un sous-réseau avec un masque de /28?",
    options: [
      { label: "A", text: "16 (total)" },
      { label: "B", text: "14" },
      { label: "C", text: "30" },
      { label: "D", text: "32" },
    ],
    correctAnswers: ["B"],
    justification: "utilisables: 2^4 - 2 = 14",
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c63",
    question: "Quel est le rôle de l'adresse IP du VLAN 1 sur un switch?",
    options: [
      { label: "A", text: "Gérer le routage entre les VLANs" },
      { label: "B", text: "Permettre la gestion du switch via le réseau" },
      { label: "C", text: "Fournir des adresses IP aux hôtes connectés" },
      { label: "D", text: "Activer les fonctionnalités de sécurité du switch" },
    ],
    correctAnswers: ["B"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c64",
    question: "Quel masque de sous-réseau convient pour supporter 110 hôtes?",
    options: [
      { label: "A", text: "/25" },
      { label: "B", text: "/26" },
      { label: "C", text: "/27" },
      { label: "D", text: "/24" },
    ],
    correctAnswers: ["A"],
    justification:
      "/25 = 126 hôtes utilisables (2^7 - 2 = 126). /26 = 62 hôtes (insuffisant), /27 = 30 hôtes (insuffisant), /24 = 254 hôtes (fonctionne mais gaspille des adresses)",
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c65",
    question:
      "Peut-on utiliser le même masque de sous-réseau (par exemple, /27) pour chaque sous-réseau dans un réseau avec des tailles de sous-réseaux différentes?",
    options: [
      { label: "A", text: "Oui, pour simplifier la gestion" },
      {
        label: "B",
        text: "Non, car cela ne permet pas d'optimiser les adresses IP",
      },
      {
        label: "C",
        text: "Oui, si tous les sous-réseaux ont le même nombre d'hôtes",
      },
      { label: "D", text: "Non, car cela ne permet pas un routage dynamique" },
    ],
    correctAnswers: ["C"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c66",
    question:
      "Que se passe-t-il si une interface du switch est désactivée (shutdown)?",
    options: [
      { label: "A", text: "L'interface ne transmet ni ne reçoit de données" },
      {
        label: "B",
        text: "L'interface redémarre automatiquement après quelques minutes",
      },
      { label: "C", text: "Cela provoque une panne réseau" },
      { label: "D", text: "Rien, elle reste active" },
    ],
    correctAnswers: ["A"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c67",
    question: "Quel est l'objectif principal du VLSM?",
    options: [
      { label: "A", text: "Maximiser le nombre de routeurs dans un réseau" },
      {
        label: "B",
        text: "Permettre un adressage IP optimisé et réduire le gaspillage d'adresses",
      },
      { label: "C", text: "Simplifier la configuration des routeurs avec RIP" },
      {
        label: "D",
        text: "Assigner automatiquement les adresses IP aux hôtes",
      },
    ],
    correctAnswers: ["B"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c68",
    question:
      "Lors de l'utilisation de Telnet, pourquoi est-il nécessaire d'activer l'encryption des mots de passe?",
    options: [
      { label: "A", text: "Pour éviter les conflits de mot de passe" },
      {
        label: "B",
        text: "Pour protéger les mots de passe contre les attaques réseau",
      },
      { label: "C", text: "Pour accélérer l'accès au switch via Telnet" },
      {
        label: "D",
        text: "Pour utiliser les commandes SSH à la place de Telnet",
      },
    ],
    correctAnswers: ["B"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c69",
    question:
      "Lorsque vous tapez arp -a sur un PC, quelles informations sont affichées?",
    options: [
      { label: "A", text: "La table d'adresses MAC du switch" },
      { label: "B", text: "Les connexions actives du PC" },
      {
        label: "C",
        text: "La correspondance entre les adresses IP et les adresses MAC",
      },
      { label: "D", text: "Les routes définies sur le PC" },
    ],
    correctAnswers: ["C"],
    isMultipleChoice: false,
    category: "concept",
  },
  // ===== NEW QUESTIONS (48 additional) =====
  {
    id: "c70",
    question:
      "Parmi ces topologies Ethernet existantes, quelle est celle qui n'est plus utilisée?",
    options: [
      { label: "A", text: "Réseau maillé" },
      { label: "B", text: "Réseau en anneau" },
      { label: "C", text: "Réseau en bus" },
      { label: "D", text: "Réseau étoile" },
    ],
    correctAnswers: ["C"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c71",
    question:
      "Parmi les éléments suivants, quel périphérique réseau est utilisé pour connecter deux types de réseaux différents?",
    options: [
      { label: "A", text: "Switch" },
      { label: "B", text: "Hub" },
      { label: "C", text: "Bridge" },
      { label: "D", text: "Passerelle (Gateway)" },
    ],
    correctAnswers: ["D"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c72",
    question: "Quel est le masque de sous-réseau pour un CIDR de /17?",
    options: [
      { label: "A", text: "255.128.0.0" },
      { label: "B", text: "255.255.128.0" },
      { label: "C", text: "255.255.192.0" },
      { label: "D", text: "255.255.64.0" },
    ],
    correctAnswers: ["B"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c73",
    question:
      "Quelle couche du modèle OSI est responsable du contrôle des erreurs?",
    options: [
      { label: "A", text: "La couche liaison de données" },
      { label: "B", text: "La couche transport" },
      { label: "C", text: "La couche réseau" },
      { label: "D", text: "La couche physique" },
    ],
    correctAnswers: ["A"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c74",
    question:
      "Qu'est-ce que l'unité de données (PDU) utilisée à la couche Internet du modèle TCP/IP?",
    options: [
      { label: "A", text: "Segments" },
      { label: "B", text: "Trames" },
      { label: "C", text: "Datagramme" },
      { label: "D", text: "Messages" },
    ],
    correctAnswers: ["C"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c75",
    question:
      "Quelle technique de commutation permet la meilleure fiabilité contre les erreurs?",
    options: [
      { label: "A", text: "Fragment-Free" },
      { label: "B", text: "Cut-Through" },
      { label: "C", text: "Store-and-Forward" },
    ],
    correctAnswers: ["C"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c76",
    question: "Dans quelle structure sont définis les noms DNS?",
    options: [
      { label: "A", text: "Linéaire" },
      { label: "B", text: "Arborescence inversée" },
      { label: "C", text: "Maillée" },
      { label: "D", text: "Arborescence directe" },
    ],
    correctAnswers: ["B"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c77",
    question: "Le service DHCP est une extension de quel protocole?",
    options: [
      { label: "A", text: "Bootp" },
      { label: "B", text: "Isc-dhcp-server" },
      { label: "C", text: "Net-bios" },
      { label: "D", text: "Bind10" },
    ],
    correctAnswers: ["A"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c78",
    question: "Quelle phrase caractérise le mieux la topologie en étoile?",
    options: [
      {
        label: "A",
        text: "Chaque équipement est relié à un câble commun à tous",
      },
      {
        label: "B",
        text: "Tous les équipements sont reliés directement à un serveur central par lequel transitent toutes les transmissions",
      },
      {
        label: "C",
        text: "Chaque équipement est relié à deux équipements voisins formant une boucle fermée",
      },
      {
        label: "D",
        text: "Les équipements sont connectés de manière aléatoire",
      },
    ],
    correctAnswers: ["B"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c79",
    question: "Quelle définition décrit le mieux un protocole réseau?",
    options: [
      {
        label: "A",
        text: "C'est une proposition de fonctionnement imposée par un fabricant",
      },
      {
        label: "B",
        text: "C'est un ensemble de règles qui augmentent l'efficacité des communications au sein d'un réseau",
      },
      {
        label: "C",
        text: "C'est un ensemble de règles qui restreint la possibilité de formats propriétaires",
      },
      { label: "D", text: "Aucune de ces réponses" },
    ],
    correctAnswers: ["B"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c80",
    question:
      "Parmi les protocoles suivants, lesquels sont des exemples de protocoles de la couche réseau TCP/IP?",
    options: [
      { label: "A", text: "IP" },
      { label: "B", text: "HTTP" },
      { label: "C", text: "ICMP" },
      { label: "D", text: "PPP" },
      { label: "E", text: "UDP" },
    ],
    correctAnswers: ["A", "C"],
    isMultipleChoice: true,
    category: "concept",
  },
  {
    id: "c81",
    question: "Quelles affirmations sont FAUSSES concernant les adresses IPv4?",
    options: [
      {
        label: "A",
        text: "Une adresse IPv4 est constituée uniquement de l'adresse de l'hôte",
      },
      {
        label: "B",
        text: "Une adresse IPv4 est constituée de l'adresse du réseau et de l'hôte",
      },
      {
        label: "C",
        text: "Une adresse IPv4 est constituée de l'adresse réseau et du masque de sous-réseau",
      },
      { label: "D", text: "Toutes les affirmations sont fausses" },
    ],
    correctAnswers: ["A", "C"],
    isMultipleChoice: true,
    category: "concept",
  },
  {
    id: "c82",
    question: "Quel est le port standard utilisé par SSH?",
    options: [
      { label: "A", text: "Port 21" },
      { label: "B", text: "Port 22" },
      { label: "C", text: "Port 23" },
      { label: "D", text: "Port 25" },
    ],
    correctAnswers: ["B"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c83",
    question:
      "Quels sont les avantages de l'utilisation d'un modèle de réseau en couches?",
    options: [
      { label: "A", text: "Il facilite le dépannage" },
      {
        label: "B",
        text: "Il divise le processus complexe de la mise en réseau en parties plus faciles à gérer",
      },
      {
        label: "C",
        text: "Il se concentre plus sur les détails que sur les fonctions générales",
      },
      {
        label: "D",
        text: "Il précise comment les modifications apportées à une couche doivent être propagées aux autres couches",
      },
    ],
    correctAnswers: ["A", "B"],
    isMultipleChoice: true,
    category: "concept",
  },
  {
    id: "c84",
    question: "En quoi les modèles TCP/IP et OSI se ressemblent-ils?",
    options: [
      { label: "A", text: "Tous deux comportent une couche application" },
      { label: "B", text: "Tous deux comportent une couche physique séparée" },
      {
        label: "C",
        text: "Tous deux gèrent les réseaux à commutation de circuits",
      },
      {
        label: "D",
        text: "Tous deux comportent des couches d'accès au réseau et liaison de données",
      },
      {
        label: "E",
        text: "Tous deux comportent des couches réseau et transport similaires",
      },
      {
        label: "F",
        text: "Tous deux gèrent les réseaux à commutation de paquets",
      },
    ],
    correctAnswers: ["A", "D", "E", "F"],
    isMultipleChoice: true,
    category: "concept",
  },
  {
    id: "c85",
    question:
      "Quels protocoles appartiennent à la couche Accès réseau de TCP/IP?",
    options: [
      { label: "A", text: "Ethernet" },
      { label: "B", text: "HTTP" },
      { label: "C", text: "IP" },
      { label: "D", text: "UDP" },
      { label: "E", text: "SMTP" },
      { label: "F", text: "TCP" },
      { label: "G", text: "PPP" },
    ],
    correctAnswers: ["A", "G"],
    isMultipleChoice: true,
    category: "concept",
  },
  {
    id: "c86",
    question:
      "Quel protocole est le plus souvent utilisé pour une application temps réel?",
    options: [
      { label: "A", text: "ICMP" },
      { label: "B", text: "IP" },
      { label: "C", text: "TCP" },
      { label: "D", text: "UDP" },
    ],
    correctAnswers: ["D"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c87",
    question: "IP est un protocole qui fonctionne en quel mode?",
    options: [
      { label: "A", text: "Mode connecté" },
      { label: "B", text: "Mode datagramme (non connecté)" },
      { label: "C", text: "Mode circuit virtuel" },
      { label: "D", text: "Mode hybride" },
    ],
    correctAnswers: ["B"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c88",
    question:
      "À quel processus les routeurs font-ils appel pour déterminer l'adresse réseau du sous-réseau d'après une adresse IP et un masque de sous-réseau donnés?",
    options: [
      { label: "A", text: "À l'addition binaire" },
      { label: "B", text: "À l'opération AND hexadécimale" },
      { label: "C", text: "À la division binaire" },
      { label: "D", text: "À la multiplication binaire" },
      { label: "E", text: "À l'opération AND binaire" },
    ],
    correctAnswers: ["E"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c89",
    question:
      "Quel masque de sous-réseau un administrateur doit-il attribuer à l'adresse réseau 172.30.1.0, sachant que le sous-réseau doit pouvoir héberger jusqu'à 254 hôtes?",
    options: [
      { label: "A", text: "255.255.0.0" },
      { label: "B", text: "255.255.255.0" },
      { label: "C", text: "255.255.254.0" },
      { label: "D", text: "255.255.248.0" },
    ],
    correctAnswers: ["B"],
    justification: "256 - 2 = 254 hôtes utilisables",
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c90",
    question: "Quelles affirmations définissent correctement l'adresse MAC?",
    options: [
      {
        label: "A",
        text: "Les adresses MAC servent à identifier une carte réseau spécifique",
      },
      {
        label: "B",
        text: "Les adresses MAC contiennent un numéro de réseau et une identification d'hôte unique",
      },
      { label: "C", text: "Les adresses MAC sont des adresses physiques" },
      {
        label: "D",
        text: "Les adresses MAC sont toujours attribuées par un administrateur réseau",
      },
      { label: "E", text: "Les adresses MAC sont des adresses de la couche 3" },
    ],
    correctAnswers: ["A", "C"],
    isMultipleChoice: true,
    category: "concept",
  },
  {
    id: "c91",
    question:
      "Quelles sont les trois informations minimales à configurer sur un ordinateur pour qu'il puisse communiquer sur un réseau TCP/IP?",
    options: [
      { label: "A", text: "L'adresse IP" },
      { label: "B", text: "Un masque de sous-réseau" },
      { label: "C", text: "Le serveur DNS" },
      { label: "D", text: "La passerelle par défaut" },
      { label: "E", text: "Le système d'exploitation" },
      { label: "F", text: "Le fabricant de la carte réseau" },
    ],
    correctAnswers: ["A", "B", "D"],
    isMultipleChoice: true,
    category: "concept",
  },
  {
    id: "c92",
    question:
      "Combien d'hôtes maximum peuvent être adressés dans un réseau avec le masque 255.255.255.224?",
    options: [
      { label: "A", text: "32 hôtes" },
      { label: "B", text: "30 hôtes" },
      { label: "C", text: "62 hôtes" },
      { label: "D", text: "64 hôtes" },
    ],
    correctAnswers: ["B"],
    justification: "2^5 - 2 = 30 hôtes utilisables",
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c93",
    question: "Que signifie l'acronyme TTL dans un paquet IP?",
    options: [
      { label: "A", text: "Total Transfer Length" },
      { label: "B", text: "Time To Live" },
      { label: "C", text: "Transmission Time Limit" },
      { label: "D", text: "Transport Layer Length" },
    ],
    correctAnswers: ["B"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c94",
    question:
      "À quel niveau de la modélisation OSI se situent les couches LLC et MAC?",
    options: [
      { label: "A", text: "Niveau 1 (Physique)" },
      { label: "B", text: "Niveau 2 (Liaison de données)" },
      { label: "C", text: "Niveau 3 (Réseau)" },
      { label: "D", text: "Niveau 7 (Application)" },
    ],
    correctAnswers: ["B"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c95",
    question:
      "Quelle couche du modèle TCP/IP prend en charge les technologies LAN et WAN?",
    options: [
      { label: "A", text: "La couche d'accès au réseau" },
      { label: "B", text: "La couche Internet" },
      { label: "C", text: "La couche transport" },
      { label: "D", text: "La couche application" },
    ],
    correctAnswers: ["A"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c96",
    question:
      "Le dialogue entre couches adjacentes dans le modèle OSI est défini par:",
    options: [
      { label: "A", text: "Les protocoles" },
      { label: "B", text: "Les services" },
      { label: "C", text: "Les primitives de service" },
      { label: "D", text: "Les adresses MAC" },
    ],
    correctAnswers: ["B"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c97",
    question: "Que vérifie la commande Ping 127.0.0.1?",
    options: [
      {
        label: "A",
        text: "La configuration TCP/IP locale (test de bouclage interne)",
      },
      { label: "B", text: "La connexion à un hôte distant" },
      { label: "C", text: "La route que les paquets prennent vers Internet" },
      { label: "D", text: "La configuration du serveur DNS" },
    ],
    correctAnswers: ["A"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c98",
    question: "À quoi sert principalement une carte réseau (NIC)?",
    options: [
      {
        label: "A",
        text: "Établit, gère et ferme les sessions entre des applications",
      },
      { label: "B", text: "Donne à l'hôte l'accès au média physique" },
      { label: "C", text: "Fournit des services aux processus d'applications" },
      { label: "D", text: "Gère le routage des paquets" },
    ],
    correctAnswers: ["B"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c99",
    question:
      "Quel est l'ordre exact des couches dans le modèle OSI (de bas en haut)?",
    options: [
      {
        label: "A",
        text: "Physique, réseau, transport, liaison de données, présentation, session, application",
      },
      {
        label: "B",
        text: "Physique, liaison de données, réseau, transport, session, présentation, application",
      },
      {
        label: "C",
        text: "Physique, liaison de données, transport, réseau, session, présentation, application",
      },
      {
        label: "D",
        text: "Liaison de données, physique, réseau, transport, session, présentation, application",
      },
    ],
    correctAnswers: ["B"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c100",
    question:
      "Quelle couche est le premier point d'entrée d'un hôte sur le réseau dans l'architecture en trois niveaux?",
    options: [
      { label: "A", text: "La couche cœur de réseau" },
      { label: "B", text: "La couche d'accès" },
      { label: "C", text: "La couche réseau" },
      { label: "D", text: "La couche de distribution" },
    ],
    correctAnswers: ["B"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c101",
    question:
      "Quel est l'ordre d'encapsulation des données lors de l'envoi (de haut en bas)?",
    options: [
      { label: "A", text: "Bits, Trames, Paquets, Segments, Données" },
      { label: "B", text: "Trames, Paquets, Segments, Données, Bits" },
      { label: "C", text: "Données, Segments, Paquets, Trames, Bits" },
      { label: "D", text: "Segments, Données, Paquets, Trames, Bits" },
    ],
    correctAnswers: ["C"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c102",
    question: "Quel est le rôle du Designated Port dans le protocole STP?",
    options: [
      { label: "A", text: "Il bloque le trafic pour éviter les boucles" },
      {
        label: "B",
        text: "Il est le seul port d'un segment qui peut transférer le trafic vers le pont racine",
      },
      { label: "C", text: "Il est le port avec la priorité la plus élevée" },
      { label: "D", text: "Il connecte directement au routeur" },
    ],
    correctAnswers: ["B"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c103",
    question: 'À quoi sert le champ "Type" dans l\'en-tête Ethernet?',
    options: [
      {
        label: "A",
        text: "Identifier le protocole encapsulé dans la trame (ex: 0x0800 pour IP)",
      },
      { label: "B", text: "Indiquer la longueur de la trame" },
      { label: "C", text: "Spécifier l'adresse MAC de destination" },
      { label: "D", text: "Définir la priorité de la trame" },
    ],
    correctAnswers: ["A"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c104",
    question:
      "Quelle est la différence principale entre segmentation et fragmentation?",
    options: [
      {
        label: "A",
        text: "Segmentation: effectuée par TCP avant envoi; Fragmentation: effectuée par les routeurs en transit",
      },
      {
        label: "B",
        text: "Segmentation: effectuée par UDP; Fragmentation: effectuée par TCP",
      },
      {
        label: "C",
        text: "Segmentation: au niveau liaison; Fragmentation: au niveau transport",
      },
      { label: "D", text: "Il n'y a pas de différence, ce sont des synonymes" },
    ],
    correctAnswers: ["A"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c105",
    question:
      "Dans quel cas peut-on recevoir des données dupliquées avec le protocole TCP?",
    options: [
      { label: "A", text: "Lorsque le réseau est surchargé" },
      {
        label: "B",
        text: "Lorsqu'un ACK n'arrive pas avant l'expiration du Timeout, causant une retransmission",
      },
      { label: "C", text: "Lorsque le MTU est trop petit" },
      { label: "D", text: "Lorsque la fenêtre TCP est trop grande" },
    ],
    correctAnswers: ["B"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c106",
    question:
      "Comment vérifie-t-on qu'une trame Ethernet a été correctement reçue?",
    options: [
      { label: "A", text: "En vérifiant l'adresse MAC source" },
      {
        label: "B",
        text: "En calculant le CRC et en le comparant au CRC reçu",
      },
      { label: "C", text: "En envoyant un ACK immédiatement" },
      { label: "D", text: "En vérifiant le champ Type" },
    ],
    correctAnswers: ["B"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c107",
    question: "À quoi sert un agent relais DHCP?",
    options: [
      {
        label: "A",
        text: "Permet à un serveur DHCP d'attribuer des adresses IP à des clients sur des réseaux différents",
      },
      { label: "B", text: "Sert de serveur DHCP de secours" },
      { label: "C", text: "Crypte les communications DHCP" },
      { label: "D", text: "Attribue automatiquement des noms DNS" },
    ],
    correctAnswers: ["A"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c108",
    question: "Dans quel cas un routeur IPv4 effectue-t-il une fragmentation?",
    options: [
      { label: "A", text: "Quand le TTL expire" },
      {
        label: "B",
        text: "Lors du passage d'un réseau à fort MTU vers un réseau à faible MTU",
      },
      { label: "C", text: "Quand la table de routage est pleine" },
      { label: "D", text: "Quand le paquet contient des options IP" },
    ],
    correctAnswers: ["B"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c109",
    question:
      "Qu'utilise principalement un routeur pour prendre une décision de routage des paquets TCP/IP?",
    options: [
      { label: "A", text: "L'adresse MAC de destination" },
      { label: "B", text: "L'adresse IP de destination" },
      { label: "C", text: "Le numéro de port source" },
      { label: "D", text: "Le champ TTL" },
    ],
    correctAnswers: ["B"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c110",
    question: "Que signifie l'acronyme IETF?",
    options: [
      { label: "A", text: "International Ethernet Task Force" },
      { label: "B", text: "Internet Engineering Task Force" },
      { label: "C", text: "Internet Enterprise Technology Forum" },
      { label: "D", text: "International Engineering Technology Foundation" },
    ],
    correctAnswers: ["B"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c111",
    question: "Que signifie l'acronyme SPAN dans les switches?",
    options: [
      { label: "A", text: "Switch Port Automatic Network" },
      { label: "B", text: "Switched Port Analyzer" },
      { label: "C", text: "Secure Port Access Network" },
      { label: "D", text: "System Port Analysis Node" },
    ],
    correctAnswers: ["B"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c112",
    question: "Que signifie l'acronyme MTU?",
    options: [
      { label: "A", text: "Maximum Transfer Unit" },
      { label: "B", text: "Maximum Transmission Unit" },
      { label: "C", text: "Media Type Unit" },
      { label: "D", text: "Minimum Transmission Unit" },
    ],
    correctAnswers: ["B"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c113",
    question: "Que signifie l'acronyme CRC dans les trames Ethernet?",
    options: [
      { label: "A", text: "Cable Redundancy Check" },
      { label: "B", text: "Central Router Configuration" },
      {
        label: "C",
        text: "Cyclic Redundancy Check (Contrôle de Redondance Cyclique)",
      },
      { label: "D", text: "Circuit Reliability Control" },
    ],
    correctAnswers: ["C"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c114",
    question:
      "Quel est le numéro de port standard utilisé par FTP pour les commandes de contrôle?",
    options: [
      { label: "A", text: "Port 20" },
      { label: "B", text: "Port 21" },
      { label: "C", text: "Port 22" },
      { label: "D", text: "Port 23" },
    ],
    correctAnswers: ["B"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c115",
    question: "Quels sont les états possibles d'un port dans le protocole STP?",
    options: [
      { label: "A", text: "Blocking" },
      { label: "B", text: "Listening" },
      { label: "C", text: "Learning" },
      { label: "D", text: "Forwarding" },
      { label: "E", text: "Disabled" },
      { label: "F", text: "Monitoring" },
    ],
    correctAnswers: ["A", "B", "C", "D", "E"],
    isMultipleChoice: true,
    category: "concept",
  },
  {
    id: "c116",
    question: "Que signifie l'acronyme LLC dans le modèle OSI?",
    options: [
      { label: "A", text: "Link Layer Control" },
      { label: "B", text: "Logical Link Control" },
      { label: "C", text: "Local Link Connection" },
      { label: "D", text: "Layer Link Configuration" },
    ],
    correctAnswers: ["B"],
    isMultipleChoice: false,
    category: "concept",
  },
  {
    id: "c117",
    question: "Quel est le port utilisé par le protocole HTTPS?",
    options: [
      { label: "A", text: "Port 80" },
      { label: "B", text: "Port 8080" },
      { label: "C", text: "Port 23" },
      { label: "D", text: "Port 443" },
    ],
    correctAnswers: ["D"],
    isMultipleChoice: false,
    category: "concept",
  },
];
