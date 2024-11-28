export interface Location {
  province: string;
  communes: string[];
}

export const locations: Location[] = [
  {
    province: "Hainaut",
    communes: [
      "aiseau-presles", "anderlues", "antoing", "ath", "beaumont", "beloeil", 
      "bernissart", "binche", "boussu", "braine-le-comte", "brugelette", 
      "brunehaut", "celles", "chapelle-lez-herlaimont", "charleroi", "chatelet", 
      "chievres", "chimay", "colfontaine", "comines-warneton", "courcelles", 
      "dour", "ecaussinnes", "ellezelles", "enghien", "erquelinnes", "estaimpuis", 
      "estinnes", "farciennes", "fleurus", "flobecq", "fontaine-leveque", 
      "frameries", "frasnes-lez-anvaing", "froidchapelle", "gerpinnes", 
      "ham-sur-heure-nalinnes", "hensies", "honnelles", "jurbise", "lens", 
      "le-roeulx", "les-bons-villers", "lessines", "leuze-en-hainaut", "lobbes", 
      "la-louviere", "manage", "merbes-le-chateau", "momignies", "mons", 
      "mont-de-lenclus", "montigny-le-tilleul", "morlanwelz", "mouscron", "pecq", 
      "peruwelz", "pont-a-celles", "quaregnon", "quevy", "quievrain", "rumes", 
      "saint-ghislain", "seneffe", "silly", "sivry-rance", "soignies", "thuin", 
      "tournai"
    ]
  },
  {
    province: "Liège",
    communes: [
      "amay", "ambleve", "ans", "anthisnes", "aubel", "awans", "aywaille", 
      "baelen", "bassenge", "berloz", "beyne-heusay", "blegny", "braives", 
      "bullange", "burdinne", "burg-reuland", "butgenbach", "chaudfontaine", 
      "clavier", "comblain-au-pont", "crisnee", "dalhem", "dison", "donceel", 
      "engis", "esneux", "eupen", "faimes", "ferrieres", "fexhe-le-haut-clocher", 
      "flemalle", "fleron", "geer", "grace-hollogne", "hamoir", "hannut", "heron", 
      "herstal", "herve", "huy", "jalhay", "juprelle", "la-calamine", "liege", 
      "lierneux", "limbourg", "lincent", "lontzen", "malmedy", "marchin", 
      "modave", "nandrin", "neupre", "olne", "oreye", "ouffet", "oupeye", 
      "pepinster", "plombieres", "raeren", "remicourt", "saint-georges-sur-meuse", 
      "saint-nicolas", "saint-vith", "seraing", "soumagne", "spa", "sprimont", 
      "stavelot", "stoumont", "theux", "thimister-clermont", "tinlot", 
      "trois-ponts", "trooz", "verlaine", "verviers", "villers-le-bouillet", 
      "vise", "waimes", "wanze", "waremme", "wasseiges", "welkenraedt"
    ]
  },
  {
    province: "Luxembourg",
    communes: [
      "arlon", "attert", "aubange", "bastogne", "bertogne", "bertrix", "bouillon", 
      "chiny", "daverdisse", "durbuy", "erezee", "etalle", "fauvillers", 
      "florenville", "gouvy", "habay", "herbeumont", "hotton", "houffalize", 
      "la-roche-en-ardenne", "leglise", "libin", "libramont-chevigny", "manhay", 
      "marche-en-famenne", "martelange", "meix-devant-virton", "messancy", 
      "musson", "nassogne", "neufchateau", "paliseul", "rendeux", "rouvroy", 
      "sainte-ode", "saint-hubert", "saint-leger", "tellin", "tenneville", 
      "tintigny", "vaux-sur-sure", "vielsalm", "virton", "wellin"
    ]
  },
  {
    province: "Namur",
    communes: [
      "andenne", "anhee", "assesse", "beauraing", "bievre", "cerfontaine", 
      "ciney", "couvin", "dinant", "doische", "eghezee", "fernelmont", "floreffe", 
      "florennes", "fosses-la-ville", "gedinne", "gembloux", "gesves", "hamois", 
      "hastiere", "havelange", "houyet", "jemeppe-sur-sambre", "la-bruyere", 
      "mettet", "namur", "ohey", "onhaye", "philippeville", "profondeville", 
      "rochefort", "sambreville", "sombreffe", "somme-leuze", "viroinval", 
      "vresse-sur-semois", "walcourt", "yvoir"
    ]
  },
  {
    province: "Brabant wallon",
    communes: [
      "beauvechain", "braine-lalleud", "braine-le-chateau", "chastre", 
      "chaumont-gistoux", "court-saint-etienne", "genappe", "grez-doiceau", 
      "helecine", "incourt", "ittre", "jodoigne", "la-hulpe", "lasne", 
      "mont-saint-guibert", "nivelles", "orp-jauche", "ottignies-louvain-la-neuve", 
      "perwez", "ramillies", "rebecq", "rixensart", "tubize", "villers-la-ville", 
      "walhain", "waterloo", "wavre"
    ]
  },
  {
    province: "Brabant flamand",
    communes: [
      "aarschot", "affligem", "asse", "beersel", "begijnendijk", "bekkevoort", "bertem",
      "bever", "bierbeek", "boortmeerbeek", "boutersem", "diest", "dilbeek", "drogenbos",
      "galmaarden", "geetbets", "glabbeek", "gooik", "grimbergen", "haacht", "halle",
      "herent", "herne", "hoegaarden", "hoeilaart", "holsbeek", "huldenberg", "kampenhout",
      "kapelle-op-den-bos", "keerbergen", "kortenaken", "kortenberg", "kraainem", "landen",
      "lennik", "leuven", "liedekerke", "linkebeek", "linter", "londerzeel", "lubbeek",
      "machelen", "meise", "merchtem", "opwijk", "oud-heverlee", "overijse", "pepingen",
      "roosdaal", "rotselaar", "scherpenheuvel-zichem", "sint-genesius-rode",
      "sint-pieters-leeuw", "steenokkerzeel", "ternat", "tervuren", "tielt-winge", "tienen",
      "tremelo", "vilvoorde", "wemmel", "wezembeek-oppem", "zaventem", "zemst", "zoutleeuw"
    ]
  }
];