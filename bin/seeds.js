const mongoose = require("mongoose");
const Cocktail = require("./../models/Cocktail");

const cocktails = [
  {
    Name: "Mojito",
    Tags: "IBA,ContemporaryClassic,Alcoholic,USA,Christmas",
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with cracked ice. Pour the rum and top with soda water. Garnish and serve with straw.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/rxtqps1478251029.jpg",
    Ingredients:[ "Light rum", "Lime", "Sugar","Mint", "Soda water"],
    Measures:[ "2-3 oz ", "Juice of 1 ", "2 tsp ", "2-4 "],
    Date: "2016-11-04 09:17:09",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Old Fashioned",
    Tags: "IBA,Classic",
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "Place sugar cube in old fashioned glass and saturate with bitters, add a dash of plain water. Muddle until dissolved.\r\nFill the glass with ice cubes and add whiskey.\r\n\r\nGarnish with orange twist, and a cocktail cherry.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg",
    Ingredients:[ "Bourbon", "Angostura bitters", "Sugar","Water"],
    Measures:[ "4.5 cL", "2 dashes", "1 cube", "dash"],
    Date: "2016-11-04 09:46:42",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Long Island Tea",
    Tags: "Strong,Asia",
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Combine all ingredients (except cola) and pour over ice in a highball glass. Add the splash of cola for color. Decorate with a slice of lemon and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/ywxwqs1439906072.jpg",
    Ingredients:[ "Vodka", "Light rum", "Gin","Tequila", "Lemon", "Coca-Cola"],
    Measures:[ "1/2 oz ", "1/2 oz ", "1/2 oz ", "1/2 oz ", "Juice of 1/2 ", "1 splash "],
    Date: "2015-08-18 14:54:32",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Negroni",
    Tags: "IBA,Classic",
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions: "Stir into glass over ice, garnish and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/tutwwv1439907127.jpg",
    Ingredients:[ "Gin", "Campari", "Sweet Vermouth",""],
    Measures:[ "1 oz ", "1 oz ", "1 oz "],
    Date: "2015-08-18 15:12:07",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Whiskey Sour",
    Tags: "IBA,Classic,Alcoholic",
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "Shake with ice. Strain into chilled glass, garnish and serve. If served 'On the rocks', strain ingredients into old-fashioned glass filled with ice.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/o56h041504352725.jpg",
    Ingredients:[ "Blended whiskey", "Lemon", "Powdered sugar","Cherry", "Lemon"],
    Measures:[ "2 oz ", "Juice of 1/2 ", "1/2 tsp ", "1 ", "1/2 slice "],
    Date: "2017-09-02 12:45:25",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Dry Martini",
    Tags: "IBA,Classic",
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Straight: Pour all ingredients into mixing glass with ice cubes. Stir well. Strain in chilled martini cocktail glass. Squeeze oil from lemon peel onto the drink, or garnish with olive.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/71t8581504353095.jpg",
    Ingredients:[ "Gin", "Dry Vermouth", "Olive",""],
    Measures:[ "1 2/3 oz ", "1/3 oz ", "1 "],
    Date: "2017-09-02 12:51:35",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Daiquiri",
    Tags: "IBA,Classic,Beach",
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Pour all ingredients into shaker with ice cubes. Shake well. Strain in chilled cocktail glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/usuuur1439906797.jpg",
    Ingredients:[ "Light rum", "Lime", "Powdered sugar",""],
    Measures:[ "1 1/2 oz ", "Juice of 1/2 ", "1 tsp "],
    Date: "2015-08-18 15:06:37",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Margarita",
    Tags: "IBA,ContemporaryClassic",
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg",
    Ingredients:[ "Tequila", "Triple sec", "Lime juice","Salt"],
    Measures:[ "1 1/2 oz ", "1/2 oz ", "1 oz "],
    Date: "2015-08-18 14:42:59",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Manhattan",
    Tags: "IBA,Classic",
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Stirred over ice, strained into a chilled glass, garnished, and served up.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/ec2jtz1504350429.jpg",
    Ingredients:[ "Sweet Vermouth", "Bourbon", "Angostura bitters","Ice", "Maraschino cherry", "Orange peel"],
    Measures:[ "3/4 oz ", "2 1/2 oz Blended ", "dash ", "2 or 3 ", "1 ", "1 twist of "],
    Date: "2017-09-02 12:07:09",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Moscow Mule",

    Tags: "IBA,ContemporaryClassic",
    Alcoholic: true,
    Glass: "Copper Mug",
    Instructions:
      "Combine vodka and ginger beer in a highball glass filled with ice. Add lime juice. Stir gently. Garnish.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg",
    Ingredients:[ "Vodka", "Lime juice", "Ginger ale",""],
    Measures:[ "2 oz ", "2 oz ", "8 oz "],
    Date: "2017-09-02 17:49:48",
    isPublic: true,
    Like: 0
  },
  {
    Name: "After Dinner Cocktail",

    Tags: "DinnerParty",
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Shake all ingredients (except lime wedge) with ice and strain into a cocktail glass. Add the wedge of lime and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vtytxq1483387578.jpg",
    Ingredients:[ "Apricot brandy", "Triple sec", "Lime","Lime"],
    Measures:[ "1 oz ", "1 oz ", "Juice of 1 ", "1 "],
    Date: "2017-01-02 20:06:18",
    isPublic: true,
    Like: 0
  },
  {
    Name: "After Supper Cocktail",

    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/quyxwu1483387610.jpg",
    Ingredients:[ "Triple sec", "Apricot brandy", "Lemon juice",""],
    Measures:[ "1 oz ", "1 oz ", "1/2 tsp "],
    Date: "2017-01-02 20:06:50",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Alabama Slammer",

    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Pour all ingredients (except for lemon juice) over ice in a highball glass. Stir, add a dash of lemon juice, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/qtwxwr1483387647.jpg",
    Ingredients:[ "Southern Comfort", "Amaretto", "Sloe gin","Lemon juice"],
    Measures:[ "1 oz ", "1 oz ", "1/2 oz ", "1 dash "],
    Date: "2017-01-02 20:07:27",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Alaska Cocktail",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Stir all ingredients with ice, strain contents into a cocktail glass. Drop in a twist of lemon and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/wsyryt1483387720.jpg",
    Ingredients:[ "Orange bitters", "Gin", "Yellow Chartreuse","Lemon peel"],
    Measures:[ "2 dashes ", "1 1/2 oz ", "3/4 oz ", "Twist of "],
    Date: "2017-01-02 20:08:40",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Alexander",
    Tags: "IBA,Classic,Dairy",
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Shake all ingredients with ice and strain contents into a cocktail glass. Sprinkle nutmeg on top and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/urystu1478253039.jpg",
    Ingredients:[ "Gin", "Creme de Cacao", "Light cream","Nutmeg"],
    Measures:[ "1/2 oz ", "1/2 oz white ", "2 oz "],
    Date: "2016-11-04 09:50:39",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Brandy Alexander",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Shake all ingredients (except nutmeg) with ice and strain contents into a cocktail glass. Sprinkle nutmeg on top and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/tvqxvr1483387746.jpg",
    Ingredients:[ "Brandy", "Creme de Cacao", "Light cream","Nutmeg"],
    Measures:[ "1 oz ", "1 oz white ", "1 oz "],
    Date: "2017-01-02 20:09:06",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Alfie Cocktail",
    Tags: true,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Combine and shake all ingredients with ice, strain into a cocktail glass, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/ypxsqy1483387829.jpg",
    Ingredients:[ "Lemon vodka", "Triple sec", "Pineapple juice",""],
    Measures:[ "1 1/2 oz ", "1 dash ", "1 tblsp "],
    Date: "2017-01-02 20:10:29",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Algonquin",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Combine and shake all ingredients with ice, strain contents into a cocktail glass, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/uwryxx1483387873.jpg",
    Ingredients:[ "Blended whiskey", "Dry Vermouth", "Pineapple juice",""],
    Measures:[ "1 1/2 oz ", "1 oz ", "1 oz "],
    Date: "2017-01-02 20:11:13",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Allegheny",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Shake all ingredients (except lemon peel) with ice and strain into a cocktail glass. Top with the twist of lemon peel and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/uwvyts1483387934.jpg",
    Ingredients:[ "Dry Vermouth", "Bourbon", "Blackberry brandy","Lemon juice", "Lemon peel"],
    Measures:[ "1 oz ", "1 oz ", "1 1/2 tsp ", "1 1/2 tsp ", "1 twist of "],
    Date: "2017-01-02 20:12:14",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Allies Cocktail",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Stir all ingredients with ice, strain contents into a cocktail glass, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/qvprvp1483388104.jpg",
    Ingredients:[ "Dry Vermouth", "Gin", "Kummel",""],
    Measures:[ "1 oz ", "1 oz ", "1/2 tsp "],
    Date: "2017-01-02 20:15:04",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Almeria",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/rwsyyu1483388181.jpg",
    Ingredients:[ "Dark rum", "Kahlua", "Egg white",""],
    Measures:[ "2 oz ", "1 oz ", "1 "],
    Date: "2017-01-02 20:16:21",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Almond Joy",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/xutuqs1483388296.jpg",
    Ingredients:[ "Amaretto", "Creme de Cacao", "Light cream",""],
    Measures:[ "1/2 oz ", "1/2 oz white ", "2 oz "],
    Date: "2017-01-02 20:18:16",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Amaretto And Cream",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Shake well with cracked ice, strain contents into a cocktail glass, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/dj8n0r1504375018.jpg",
    Ingredients:[ "Amaretto", "Light cream",""],
    Measures:[ "1 1/2 oz ", "1 1/2 oz "],
    Date: "2017-09-02 18:56:58",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Amaretto Mist",
    Tags: null,
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "Pour amaretto in an old-fashioned glass over crushed ice. Add the wedge of lime and serve. (A wedge of lemon may be substituted for lime, if preferred.)",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/utpxxq1483388370.jpg",
    Ingredients:[ "Amaretto", "Lime",""],
    Measures:[ "1 1/2 oz ", "1 "],
    Date: "2017-01-02 20:19:31",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Amaretto Rose",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins glass",
    Instructions:
      "Pour amaretto and lime juice over ice in a collins glass. Fill with club soda and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/3jm41q1493069578.jpg",
    Ingredients:[ "Amaretto", "Lime juice", "Club soda",""],
    Measures:[ "1 1/2 oz ", "1/2 oz "],
    Date: "2017-04-24 22:32:59",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Amaretto Stinger",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Shake ingredients well with cracked ice, strain into a cocktail glass, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vvop4w1493069934.jpg",
    Ingredients:[ "Amaretto", "White Creme de Menthe",""],
    Measures:[ "1 1/2 oz ", "3/4 oz "],
    Date: "2017-04-24 22:38:54",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Amaretto Tea",
    Tags: null,
    Alcoholic: true,
    Glass: "Pousse cafe glass",
    Instructions:
      "Pour hot tea into a pousse-cafe glass, using a spoon in glass to prevent cracking. Add amaretto, but do not stir. Top with chilled whipped cream and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/b7qzo21493070167.jpg",
    Ingredients:[ "Tea", "Amaretto", "Whipped cream",""],
    Measures:[ "6 oz hot ", "2 oz ", "Chilled "],
    Date: "2017-04-24 22:42:47",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Angel Face",
    Tags: "IBA,Classic",
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Shake all ingredients with ice and strain contents into a cocktail glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vqpptp1478253178.jpg",
    Ingredients:[ "Apricot brandy", "Apple brandy", "Gin",""],
    Measures:[ "1/2 oz ", "1/2 oz ", "1 oz "],
    Date: "2016-11-04 09:52:58",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Applecar",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/sbffau1504389764.jpg",
    Ingredients:[ "Applejack", "Triple sec", "Lemon juice",""],
    Measures:[ "1 oz ", "1 oz ", "1 oz "],
    Date: "2017-09-02 23:02:44",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Apricot Lady",
    Tags: "Cold",
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "In a shaker half-filled with ice cubes, combine the rum, apricot brandy, triple sec, lemon juice, and egg white. Shake well. Strain into an old-fashioned glass almost filled with ice cubes. Garnish with the orange slice.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/146f251504389814.jpg",
    Ingredients:[ "Light rum", "Apricot brandy", "Triple sec","Lemon juice", "Egg white", "Orange"],
    Measures:[ "1 1/2 oz ", "1 oz ", "1 tsp ", "1/2 oz ", "1 ", "1 "],
    Date: "2017-09-02 23:03:34",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Archbishop",
    Tags: null,
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "In an old-fashioned glass almost filled with ice cubes, combine all of the ingredients. Stir well.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/xpqwrt1441207307.jpg",
    Ingredients:[ "Gin", "Wine", "Benedictine","Lime"],
    Measures:[ "2 oz ", "1 oz Green Ginger ", "1 tsp ", "1 "],
    Date: "2015-09-02 16:21:47",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Arise My Love",
    Tags: null,
    Alcoholic: true,
    Glass: "Champagne flute",
    Instructions:
      "Put creme de menthe into a champagne flute. Fill with chilled champagne and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/wyrrwv1441207432.jpg",
    Ingredients:[ "Champagne", "Green Creme de Menthe",""],
    Measures:[ "Chilled ", "1 tsp "],
    Date: "2015-09-02 16:23:52",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Arthur Tompkins",
    Tags: null,
    Alcoholic: true,
    Glass: "Whiskey sour glass",
    Instructions:
      "In a shaker half-filled with ice cubes, combine the gin, Grand Marnier, and lemon juice. Shake well. Strain into a sour glass and garnish with the lemon twist.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/7onfhz1493067921.jpg",
    Ingredients:[ "Gin", "Grand Marnier", "Lemon juice","Lemon peel"],
    Measures:[ "2 oz ", "1/2 oz ", "2 tsp ", "1 twist of "],
    Date: "2017-04-24 22:05:21",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Artillery",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/g1vnbe1493067747.jpg",
    Ingredients:[ "Sweet Vermouth", "Gin", "Bitters",""],
    Measures:[ "1 1/2 tsp ", "1 1/2 oz ", "2 dashes "],
    Date: "2017-04-24 22:02:27",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Balmoral",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vysuyq1441206297.jpg",
    Ingredients:[ "Scotch", "Sweet Vermouth", "Dry Vermouth","Bitters"],
    Measures:[ "1 1/2 oz ", "1/2 oz ", "1/2 oz ", "2 dashes "],
    Date: "2015-09-02 16:04:57",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Banana Daiquiri",
    Tags: "Fruity",
    Alcoholic: true,
    Glass: "Champagne flute",
    Instructions:
      "Pour all ingredients into shaker with ice cubes. Shake well. Strain in chilled cocktail glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/k1xatq1504389300.jpg",
    Ingredients:[ "Light rum", "Triple sec", "Banana","Lime juice", "Sugar", "Cherry"],
    Measures:[ "1 1/2 oz ", "1 tblsp ", "1 ", "1 1/2 oz ", "1 tsp ", "1 "],
    Date: "2017-09-02 22:55:01",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Bermuda Highball",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Pour brandy, gin, and dry vermouth into a highball glass over ice cubes. Fill with carbonated water and stir. Add the twist of lemon and serve. (Ginger ale may be substituted for carbonated water, if preferred.)",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/qrvtww1441206528.jpg",
    Ingredients:[ "Brandy", "Gin", "Dry Vermouth","Carbonated water", "Lemon peel"],
    Measures:[ "3/4 oz ", "3/4 oz ", "3/4 oz "],
    Date: "2015-09-02 16:08:48",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Black Russian",
    Tags: "IBA,ContemporaryClassic",
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "Pour the ingredients into an old fashioned glass filled with ice cubes. Stir gently.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/2k5gbb1504367689.jpg",
    Ingredients:[ "Coffee liqueur", "Vodka",""],
    Measures:[ "3/4 oz ", "1 1/2 oz "],
    Date: "2017-09-02 16:54:49",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Blackthorn",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Stir sloe gin and vermouth with ice and strain into a cocktail glass. Add the twist of lemon peel and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/xvswvy1441209430.jpg",
    Ingredients:[ "Sweet Vermouth", "Sloe gin", "Lemon peel",""],
    Measures:[ "1 oz ", "1 1/2 oz ", "1 twist of "],
    Date: "2015-09-02 16:57:10",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Bloody Maria",
    Tags: "Breakfast,Brunch,Hangover",
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "Shake all ingredients (except lemon slice) with cracked ice and strain into an old-fashioned glass over ice cubes. Add the slice of lemon and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/yz0j6z1504389461.jpg",
    Ingredients:[ "Tequila", "Tomato juice", "Lemon juice","Tabasco sauce", "Celery salt", "Lemon"],
    Measures:[ "1 oz ", "2 oz ", "1 dash ", "1 dash ", "1 dash ", "1 slice "],
    Date: "2017-09-02 22:57:41",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Bloody Mary",
    Tags: "IBA,ContemporaryClassic",
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "Stirring gently, pour all ingredients into highball glass. Garnish.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/uyquuu1439906954.jpg",
    Ingredients:[ "Vodka", "Tomato juice", "Lemon juice","Worcestershire sauce", "Tabasco sauce", "Lime"],
    Measures:[ "1 1/2 oz ", "3 oz ", "1 dash ", "1/2 tsp ", "2-3 drops ", "1 wedge "],
    Date: "2015-08-18 15:09:14",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Blue Lagoon",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Pour vodka and curacao over ice in a highball glass. Fill with lemonade, top with the cherry, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vak0e51504389504.jpg",
    Ingredients:[ "Vodka", "Blue Curacao", "Lemonade","Cherry"],
    Measures:[ "1 oz ", "1 oz "],
    Date: "2017-09-02 22:58:25",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Blue Margarita",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Rub rim of cocktail glass with lime juice. Dip rim in coarse salt. Shake tequila, blue curacao, and lime juice with ice, strain into the salt-rimmed glass, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/qtvvyq1439905913.jpg",
    Ingredients:[ "Tequila", "Blue Curacao", "Lime juice","Salt"],
    Measures:[ "1 1/2 oz ", "1 oz ", "1 oz ", "Coarse "],
    Date: "2015-08-18 14:51:53",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Blue Mountain",
    Tags: null,
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into an old-fashioned glass alomst filled with ice cubes.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vsxssp1441209853.jpg",
    Ingredients:[ "A\u00f1ejo rum", "Tia maria", "Vodka","Orange juice", "Lemon juice"],
    Measures:[ "1 1/2 oz ", "1/2 oz ", "1/2 oz ", "1 oz ", "1 tsp "],
    Date: "2015-09-02 17:04:13",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Bluebird",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "In a mixing glass half-filled with crushed ice, combine the gin, triple sec, Curacao, and bitters. Stir well. Strain into a cocktail glass and garnish with the lemon twist and the cherry.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vxypsq1441209971.jpg",
    Ingredients:[ "Gin", "Triple sec", "Blue Curacao","Bitters", "Maraschino cherry", "Lemon peel"],
    Measures:[ "1 1/2 oz ", "1/2 oz ", "1/2 oz ", "2 dashes ", "1 ", "1 twist of "],
    Date: "2015-09-02 17:06:11",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Bobby Burns Cocktail",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Stir all ingredients (except lemon peel) with ice and strain into a cocktail glass. Add the twist of lemon peel and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/km6se51484411608.jpg",
    Ingredients:[ "Sweet Vermouth", "Scotch", "Benedictine","Lemon peel"],
    Measures:[ "1 1/2 oz ", "1 1/2 oz ", "1 1/4 tsp ", "1 twist of "],
    Date: "2017-01-14 16:33:28",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Boomerang",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "In a mixing glass half-filled with ice cubes, combine the gin, vermouth, bitters, and maraschino liqueur. Stir well. Strain into a cocktail glass and garnish with the cherry.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/3m6yz81504389551.jpg",
    Ingredients:[ "Gin", "Dry Vermouth", "Bitters","Maraschino liqueur", "Maraschino cherry"],
    Measures:[ "2 oz ", "1/2 oz ", "2 dashes ", "1/2 tsp ", "1 "],
    Date: "2017-09-02 22:59:12",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Boston Sidecar",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/qzs5d11504365962.jpg",
    Ingredients:[ "Light rum", "Brandy", "Triple sec","Lime"],
    Measures:[ "3/4 oz ", "3/4 oz ", "3/4 oz ", "Juice of 1/2 "],
    Date: "2017-09-02 16:26:02",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Boston Sour",
    Tags: null,
    Alcoholic: true,
    Glass: "Whiskey sour glass",
    Instructions:
      "Shake juice of lemon, powdered sugar, blended whiskey, and egg white with cracked ice and strain into a whiskey sour glass. Add the slice of lemon, top with the cherry, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/kxlgbi1504366100.jpg",
    Ingredients:[ "Blended whiskey", "Lemon", "Powdered sugar","Egg white", "Lemon", "Cherry"],
    Measures:[ "2 oz ", "Juice of 1/2 ", "1 tsp ", "1 ", "1 slice ", "1 "],
    Date: "2017-09-02 16:28:20",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Classic Old-Fashioned",
    Tags: null,
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "In an old-fashioned glass, muddle the bitters and water into the sugar cube, using the back of a teaspoon. Almost fill the glass with ice cubes and add the bourbon. Garnish with the orange slice and the cherry. Serve with a swizzle stick.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/anhof61504366173.jpg",
    Ingredients:[ "Bitters", "Water", "Sugar","Bourbon", "Orange", "Maraschino cherry"],
    Measures:[ "3 dashes ", "1 tsp ", "1 ", "3 oz ", "1 ", "1 "],
    Date: "2017-09-02 16:29:33",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Bourbon Sling",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "In a shaker half-filled with ice cubes, combine the sugar, water, lemon juice, and bourbon. Shake well. Strain well. Strain into a highball glass. Garnish with the lemon twist.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/3s36ql1504366260.jpg",
    Ingredients:[ "Sugar", "Water", "Lemon juice","Bourbon", "Lemon peel"],
    Measures:[ "1 tsp superfine ", "2 tsp ", "1 oz ", "2 oz ", "1 twist of "],
    Date: "2017-09-02 16:31:00",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Bourbon Sour",
    Tags: null,
    Alcoholic: true,
    Glass: "Whiskey sour glass",
    Instructions:
      "In a shaker half-filled with ice cubes, combine the bourbon, lemon juice, and sugar. Shake well. Strain into a whiskey sour glass, garnish with the orange slice and cherry.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/dms3io1504366318.jpg",
    Ingredients:[ "Bourbon", "Lemon juice", "Sugar","Orange", "Maraschino cherry"],
    Measures:[ "2 oz ", "1 oz ", "1/2 tsp superfine ", "1 ", "1 "],
    Date: "2017-09-02 16:31:58",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Boxcar",
    Tags: null,
    Alcoholic: true,
    Glass: "Whiskey sour glass",
    Instructions:
      "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a sour glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/pwgtpa1504366376.jpg",
    Ingredients:[ "Gin", "Triple sec", "Lemon juice","Grenadine", "Egg white"],
    Measures:[ "1 1/2 oz ", "1 oz ", "1 tsp ", "1/2 tsp ", "1 "],
    Date: "2017-09-02 16:32:57",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Brandy Cobbler",
    Tags: null,
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "In an old-fashioned glass, dissolve the sugar in the club soda. Add crushed ice until the glass is almost full. Add the brandy. Stir well. Garnish with the cherry and the orange and lemon slices.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vtvutr1439465836.jpg",
    Ingredients:[ "Sugar", "Club soda", "Lemon","Brandy", "Maraschino cherry", "Orange"],
    Measures:[ "1 tsp superfine ", "3 oz ", "1 ", "2 oz ", "1 ", "1 "],
    Date: "2015-08-13 12:37:16",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Brandy Flip",
    Tags: null,
    Alcoholic: true,
    Glass: "Whiskey sour glass",
    Instructions:
      "In a shaker half-filled with ice cubes, combine the brandy, egg, sugar, and cream. Shake well. Strain into a sour glass and garnish with the nutmeg.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/6ty09d1504366461.jpg",
    Ingredients:[ "Brandy", "Egg", "Sugar","Light cream", "Nutmeg"],
    Measures:[ "2 oz ", "1 whole ", "1 tsp superfine ", "1/2 oz ", "1/8 tsp grated "],
    Date: "2017-09-02 16:34:21",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Brandy Sour",
    Tags: null,
    Alcoholic: true,
    Glass: "Whiskey sour glass",
    Instructions:
      "Shake brandy, juice of lemon, and powdered sugar with ice and strain into a whiskey sour glass. Decorate with the lemon slice, top with the cherry, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/tu0mts1504366540.jpg",
    Ingredients:[ "Brandy", "Lemon", "Powdered sugar","Lemon", "Cherry"],
    Measures:[ "2 oz ", "Juice of 1/2 ", "1/2 tsp ", "1/2 slice ", "1 "],
    Date: "2017-09-02 16:35:40",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Caipirinha",
    Tags: "ContemporaryClassic,IBA",
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "Place lime and sugar into old fashioned glass and muddle (mash the two ingredients together using a muddler or a wooden spoon). Fill the glass with ice and add the Cacha\u00e7a.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/xyrppt1469090521.jpg",
    Ingredients:[ "Sugar", "Lime", "Cachaca",""],
    Measures:[ "2 tsp", "1 ", "2 1/2 oz "],
    Date: "2016-07-21 09:42:01",
    isPublic: true,
    Like: 0
  },
  {
    Name: "California Lemonade",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins glass",
    Instructions:
      "Shake all ingredients (except carbonated water) with ice and strain into a collins glass over shaved ice. Fill with carbonated water and stir. Decorate with slices of orange and lemon. Add the cherry and serve with a straw.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/qvvxwy1472406424.jpg",
    Ingredients:[ "Blended whiskey", "Lemon", "Lime","Powdered sugar", "Grenadine", "Carbonated water"],
    Measures:[ "2 oz ", "Juice of 1 ", "Juice of 1 ", "1 tblsp ", "1/4 tsp "],
    Date: "2016-08-28 18:47:04",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Casa Blanca",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/usspxq1441553762.jpg",
    Ingredients:[ "Light rum", "Triple sec", "Lime juice","Maraschino liqueur"],
    Measures:[ "2 oz ", "1 1/2 tsp ", "1 1/2 tsp ", "1 1/2 tsp "],
    Date: "2015-09-06 16:36:02",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Casino Royale",
    Tags: null,
    Alcoholic: true,
    Glass: "Whiskey sour glass",
    Instructions:
      "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a sour glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/3qpv121504366699.jpg",
    Ingredients:[ "Gin", "Lemon juice", "Maraschino liqueur","Orange bitters", "Egg yolk"],
    Measures:[ "2 oz ", "1/2 oz ", "1 tsp ", "1 dash ", "1 "],
    Date: "2017-09-02 16:38:19",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Champagne Cocktail",
    Tags: "IBA,ContemporaryClassic",
    Alcoholic: true,
    Glass: "Champagne flute",
    Instructions:
      "Add dash of Angostura bitter onto sugar cube and drop it into champagne flute. Add cognac followed by gently pouring chilled champagne. Garnish with orange slice and maraschino cherry.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/ehh5df1504366811.jpg",
    Ingredients:[ "Champagne", "Sugar", "Bitters","Lemon peel", "Cognac"],
    Measures:[ "Chilled ", "1 piece ", "2 dashes ", "1 twist of ", "1 dash"],
    Date: "2017-09-02 16:40:11",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Cherry Rum",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/twsuvr1441554424.jpg",
    Ingredients:[ "Light rum", "Cherry brandy", "Light cream",""],
    Measures:[ "1 1/4 oz ", "1 1/2 tsp ", "1 tblsp "],
    Date: "2015-09-06 16:47:04",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Chicago Fizz",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Shake all ingredients (except carbonated water) with ice and strain into a highball glass over two ice cubes. Fill with carbonated water, stir, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/qwvwqr1441207763.jpg",
    Ingredients:[ "Light rum", "Port", "Lemon","Powdered sugar", "Egg white", "Carbonated water"],
    Measures:[ "1 oz ", "1 oz ", "Juice of 1/2 ", "1 tsp ", "1 "],
    Date: "2015-09-02 16:29:23",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Chocolate Black Russian",
    Tags: null,
    Alcoholic: true,
    Glass: "Champagne flute",
    Instructions:
      "Combine all ingredients in an electric blender and blend at a low speed for a short length of time. Pour into a chilled champagne flute and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/yyvywx1472720879.jpg",
    Ingredients:[ "Kahlua", "Vodka", "Chocolate ice-cream",""],
    Measures:[ "1 oz ", "1/2 oz ", "5 oz "],
    Date: "2016-09-01 10:07:59",
    isPublic: true,
    Like: 0
  },
  {
    Name: "City Slicker",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/dazdlg1504366949.jpg",
    Ingredients:[ "Brandy", "Triple sec", "Lemon juice",""],
    Measures:[ "2 oz ", "1/2 oz ", "1 tblsp "],
    Date: "2017-09-02 16:42:29",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Clove Cocktail",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/qxvtst1461867579.jpg",
    Ingredients:[ "Sweet Vermouth", "Sloe gin", "Wine",""],
    Measures:[ "1 oz ", "1/2 oz ", "1/2 oz Muscatel "],
    Date: "2016-04-28 19:19:39",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Cuba Libre",
    Tags: "IBA,ContemporaryClassic",
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Build all ingredients in a Collins glass filled with ice. Garnish with lime wedge.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/uuxsrr1473201663.jpg",
    Ingredients:[ "Light rum", "Lime", "Coca-Cola",""],
    Measures:[ "2 oz ", "Juice of 1/2 "],
    Date: "2016-09-06 23:41:03",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Dragonfly",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "In a highball glass almost filled with ice cubes, combine the gin and ginger ale. Stir well. Garnish with the lime wedge.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/lnvbip1504389100.jpg",
    Ingredients:[ "Gin", "Ginger ale", "Lime",""],
    Measures:[ "1 1/2 oz ", "4 oz ", "1 "],
    Date: "2017-09-02 22:51:40",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Dry Rob Roy",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "In a mixing glass half-filled with ice cubes, combine the Scotch and vermouth. Stir well. Strain into a cocktail glass. Garnish with the lemon twist.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/typuyq1439456976.jpg",
    Ingredients:[ "Scotch", "Dry Vermouth", "Lemon peel",""],
    Measures:[ "2 1/2 oz ", "1 1/2 tsp ", "1 twist of "],
    Date: null,
    isPublic: true,
    Like: 0
  },
  {
    Name: "Dubonnet Cocktail",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Stir all ingredients (except lemon peel) with ice and strain into a cocktail glass. Add the twist of lemon peel and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/xxsuwr1439457147.jpg",
    Ingredients:[ "Dubonnet Rouge", "Gin", "Bitters","Lemon peel"],
    Measures:[ "1 1/2 oz ", "3/4 oz ", "1 dash ", "1 twist of "],
    Date: "2015-08-13 10:12:27",
    isPublic: true,
    Like: 0
  },
  {
    Name: "English Highball",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Pour brandy, gin, and sweet vermouth into a highball glass over ice cubes. Fill with carbonated water. Add the twist of lemon peel, stir, and serve. (Ginger ale may be substituted for carbonated water, if preferred.)",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/dhvr7d1504519752.jpg",
    Ingredients:[ "Brandy", "Gin", "Sweet Vermouth","Carbonated water", "Lemon peel"],
    Measures:[ "3/4 oz ", "3/4 oz ", "3/4 oz "],
    Date: "2017-09-04 11:09:12",
    isPublic: true,
    Like: 0
  },
  {
    Name: "English Rose Cocktail",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Rub rim of cocktail glass with lemon juice and dip rim of glass in powdered sugar. Shake all ingredients (except cherry) with ice and strain into sugar-rimmed glass. Top with the cherry and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/yxwrpp1441208697.jpg",
    Ingredients:[ "Apricot brandy", "Gin", "Dry Vermouth","Grenadine", "Lemon juice", "Cherry"],
    Measures:[ "3/4 oz ", "1 1/2 oz ", "3/4 oz ", "1 tsp ", "1/4 tsp ", "1 "],
    Date: "2015-09-02 16:44:57",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Flying Dutchman",
    Tags: null,
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "In an old-fashioned glass almost filled with ice cubes, combine the gin and triple sec. Stir well.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/akik8t1504519958.jpg",
    Ingredients:[ "Gin", "Triple sec",""],
    Measures:[ "2 oz ", "1/2 oz "],
    Date: "2017-09-04 11:12:38",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Flying Scotchman",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/glgrix1504520040.jpg",
    Ingredients:[ "Scotch", "Sweet Vermouth", "Bitters","Sugar syrup"],
    Measures:[ "1 oz ", "1 oz ", "1 dash ", "1/4 tsp "],
    Date: "2017-09-04 11:14:00",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Foxy Lady",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Shake all ingredients with ice, strain into a chilled cocktail glass, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/r9cz3q1504519844.jpg",
    Ingredients:[ "Amaretto", "Creme de Cacao", "Light cream",""],
    Measures:[ "1/2 oz ", "1/2 oz ", "2 oz "],
    Date: "2017-09-04 11:10:44",
    isPublic: true,
    Like: 0
  },
  {
    Name: 'French "75"',
    Tags: null,
    Alcoholic: true,
    Glass: "Collins glass",
    Instructions:
      "In a shaker half-filled with ice cubes, combine the gin, sugar, and lemon juice. Shake well. Pour into a collins glass. Top with the Champagne. Stir well and garnish with the orange slice and the cherry.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/qpvxsx1439906903.jpg",
    Ingredients:[ "Gin", "Sugar", "Lemon juice","Champagne", "Orange", "Maraschino cherry"],
    Measures:[ "1 1/2 oz ", "2 tsp superfine ", "1 1/2 oz ", "4 oz Chilled ", "1 ", "1 "],
    Date: "2015-08-18 15:08:23",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Frisco Sour",
    Tags: null,
    Alcoholic: true,
    Glass: "Whiskey sour glass",
    Instructions:
      "Shake all ingredients (except slices of lemon and lime) with ice and strain into a whiskey sour glass. Decorate with the slices of lemon and lime and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/y39l941504884150.jpg",
    Ingredients:[ "Blended whiskey", "Benedictine", "Lemon","Lime", "Lemon", "Lime"],
    Measures:[ "2 oz ", "1/2 oz ", "Juice of 1/4 ", "Juice of 1/2 ", "1 slice ", "1 slice "],
    Date: "2017-09-08 16:22:30",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Frozen Daiquiri",
    Tags: null,
    Alcoholic: true,
    Glass: "Champagne flute",
    Instructions:
      "Combine all ingredients (except for the cherry) in an electric blender and blend at a low speed for five seconds, then blend at a high speed until firm. Pour contents into a champagne flute, top with the cherry, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/7oyrj91504884412.jpg",
    Ingredients:[ "Light rum", "Triple sec", "Lime juice","Sugar", "Cherry", "Ice"],
    Measures:[ "1 1/2 oz ", "1 tblsp ", "1 1/2 oz ", "1 tsp ", "1 ", "1 cup crushed "],
    Date: "2017-09-08 16:26:53",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Frozen Mint Daiquiri",
    Tags: null,
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "Combine all ingredients with 1 cup of crushed ice in an electric blender. Blend at a low speed for a short length of time. Pour into an old-fashioned glass and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/jrhn1q1504884469.jpg",
    Ingredients:[ "Light rum", "Lime juice", "Mint","Sugar"],
    Measures:[ "2 oz ", "1 tblsp ", "6 ", "1 tsp "],
    Date: "2017-09-08 16:27:49",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Frozen Pineapple Daiquiri",
    Tags: null,
    Alcoholic: true,
    Glass: "Champagne flute",
    Instructions:
      "Combine all ingredients with 1 cup of crushed ice in an electric blender. Blend at a low speed for a short length of time. Pour into a champagne flute and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/j2mqsb1504736097.jpg",
    Ingredients:[ "Light rum", "Pineapple", "Lime juice","Sugar"],
    Measures:[ "1 1/2 oz ", "4 chunks ", "1 tblsp ", "1/2 tsp "],
    Date: "2017-09-06 23:14:57",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Gentleman's Club",
    Tags: null,
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "In an old-fashioned glass almost filled with ice cubes, combine all of the ingredients. Stir well.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/ezvy1c1504883335.jpg",
    Ingredients:[ "Gin", "Brandy", "Sweet Vermouth","Club soda"],
    Measures:[ "1 1/2 oz ", "1 oz ", "1 oz ", "1 oz "],
    Date: "2017-09-08 16:08:56",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Gin And Tonic",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Pour the gin and the tonic water into a highball glass almost filled with ice cubes. Stir well. Garnish with the lime wedge.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/wtyxvx1472405831.jpg",
    Ingredients:[ "Gin", "Tonic water", "Lime",""],
    Measures:[ "2 oz ", "5 oz ", "1 "],
    Date: "2016-08-28 18:37:11",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Gin Cooler",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins glass",
    Instructions:
      "Stir powdered sugar and 2 oz. carbonated water in a collins glass. Fill glass with ice and add gin. Fill with carbonated water and stir. Add the lemon peel and the orange spiral so that the end of the orange spiral dangles over rim of glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/wsyrvv1478820109.jpg",
    Ingredients:[ "Gin", "Carbonated water", "Powdered sugar","Orange spiral", "Lemon peel"],
    Measures:[ "2 oz "],
    Date: "2016-11-10 23:21:49",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Gin Daisy",
    Tags: null,
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "In a shaker half-filled with ice cubes, combine the wine, lemon juice, sugar, and grenadine. Shake well. Pour into an old-fashioned glass and garnish with the cherry and the orange slice.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/qwxysv1478819943.jpg",
    Ingredients:[ "Gin", "Lemon juice", "Sugar","Grenadine", "Maraschino cherry", "Orange"],
    Measures:[ "2 oz ", "1 oz ", "1/2 tsp superfine ", "1/2 tsp ", "1 ", "1 "],
    Date: "2016-11-10 23:19:04",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Gin Fizz",
    Tags: "IBA,Classic",
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Shake all ingredients with ice cubes, except soda water. Pour into glass. Top with soda water.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/xhl8q31504351772.jpg",
    Ingredients:[ "Gin", "Lemon", "Powdered sugar","Carbonated water"],
    Measures:[ "2 oz ", "Juice of 1/2 ", "1 tsp "],
    Date: "2017-09-02 12:29:32",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Gin Sling",
    Tags: null,
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "Dissolve powdered sugar in mixture of water and juice of lemon. Add gin. Pour into an old-fashioned glass over ice cubes and stir. Add the twist of orange peel and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/h8wmm41504883440.jpg",
    Ingredients:[ "Gin", "Lemon", "Powdered sugar","Water", "Orange peel"],
    Measures:[ "2 oz ", "Juice of 1/2 ", "1 tsp ", "1 tsp ", "Twist of "],
    Date: "2017-09-08 16:10:40",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Gin Smash",
    Tags: null,
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "Muddle sugar with carbonated water and mint sprigs in an old-fashioned glass. Add gin and 1 ice cube. Stir, add the orange slice and the cherry, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/hp41fi1504883656.jpg",
    Ingredients:[ "Gin", "Carbonated water", "Sugar","Mint", "Orange", "Cherry"],
    Measures:[ "2 oz ", "1 oz ", "1 cube ", "4 ", "1 slice ", "1 "],
    Date: "2017-09-08 16:14:16",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Gin Sour",
    Tags: null,
    Alcoholic: true,
    Glass: "Whiskey sour glass",
    Instructions:
      "In a shaker half-filled with ice cubes, combine the gin, lemon juice, and sugar. Shake well. Strain into a sour glass and garnish with the orange slice and the cherry.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/mt7l7m1504883523.jpg",
    Ingredients:[ "Gin", "Lemon juice", "Sugar","Orange", "Maraschino cherry"],
    Measures:[ "2 oz ", "1 oz ", "1/2 tsp superfine ", "1 ", "1 "],
    Date: "2017-09-08 16:12:03",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Gin Squirt",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Stir gin, grenadine, and powdered sugar with ice and strain into a highball glass over ice cubes. Fill with carbonated water and stir. Decorate with the pineapple chunks and the strawberries and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/xrbhz61504883702.jpg",
    Ingredients:[ "Gin", "Grenadine", "Powdered sugar","Pineapple", "Strawberries", "Carbonated water"],
    Measures:[ "1 1/2 oz ", "1 tsp ", "1 tblsp ", "3 chunks ", "2 "],
    Date: "2017-09-08 16:15:02",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Gin Swizzle",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "In a shaker half-filled with ice cubes, combine the lime juice, sugar, gin, and bitters. Shake well. Almost fill a colling glass with ice cubes. Stir until the glass is frosted. Strain the mixture in the shaker into the glass and add the club soda.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/sybce31504884026.jpg",
    Ingredients:[ "Lime juice", "Sugar", "Gin","Bitters", "Club soda"],
    Measures:[ "1 1/2 oz ", "1 tsp superfine ", "2 oz ", "1 dash ", "3 oz "],
    Date: "2017-09-08 16:20:26",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Gin Toddy",
    Tags: null,
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "Mix powdered sugar and water in an old-fashioned glass. Add gin and one ice cube. Stir, add the twist of lemon peel, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/l9gi5h1504820724.jpg",
    Ingredients:[ "Gin", "Water", "Powdered sugar","Lemon peel"],
    Measures:[ "2 oz ", "2 tsp ", "1/2 tsp ", "1 twist of "],
    Date: "2017-09-07 22:45:24",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Godchild",
    Tags: null,
    Alcoholic: true,
    Glass: "Champagne flute",
    Instructions:
      "Shake all ingredients well with cracked ice, strain into a champagne flute, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/m5nhtr1504820829.jpg",
    Ingredients:[ "Vodka", "Amaretto", "Heavy cream",""],
    Measures:[ "1 oz ", "1 oz ", "1 oz "],
    Date: "2017-09-07 22:47:09",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Godfather",
    Tags: "IBA,ContemporaryClassic",
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "Pour all ingredients directly into old fashioned glass filled with ice cubes. Stir gently.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/r74uz51504368928.jpg",
    Ingredients:[ "Scotch", "Amaretto",""],
    Measures:[ "1 1/2 oz ", "3/4 oz "],
    Date: "2017-09-02 17:15:28",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Godmother",
    Tags: "IBA,ContemporaryClassic",
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "Pour vodka and amaretto into an old-fashioned glass over ice and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/4889up1504368984.jpg",
    Ingredients:[ "Vodka", "Amaretto",""],
    Measures:[ "1 1/2 oz ", "3/4 oz "],
    Date: "2017-09-02 17:16:24",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Grass Skirt",
    Tags: null,
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "In a shaker half-filled with ice cubes, combine the gin, triple sec, pineapple juice, and grenadine. Shake well. Pour into an old-fashioned glass and garnish with the pineapple slice.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/qyvprp1473891585.jpg",
    Ingredients:[ "Gin", "Triple sec", "Pineapple juice","Grenadine", "Pineapple"],
    Measures:[ "1 1/2 oz ", "1 oz ", "1 oz ", "1/2 tsp ", "1 "],
    Date: "2016-09-14 23:19:46",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Harvey Wallbanger",
    Tags: "IBA,ContemporaryClassic",
    Alcoholic: true,
    Glass: "Collins glass",
    Instructions:
      "Stir the vodka and orange juice with ice in the glass, then float the Galliano on top. Garnish and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vg4bva1504369725.jpg",
    Ingredients:[ "Vodka", "Galliano", "Orange juice",""],
    Measures:[ "1 oz ", "1/2 oz ", "4 oz "],
    Date: "2017-09-02 17:28:45",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Havana Cocktail",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/59splc1504882899.jpg",
    Ingredients:[ "Light rum", "Pineapple juice", "Lemon juice",""],
    Measures:[ "1 oz ", "1 oz ", "1 tsp "],
    Date: "2017-09-08 16:01:40",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Hawaiian Cocktail",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/ujoh9x1504882987.jpg",
    Ingredients:[ "Gin", "Triple sec", "Pineapple juice",""],
    Measures:[ "2 oz ", "1/2 oz ", "1 tblsp "],
    Date: "2017-09-08 16:03:07",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Highland Fling Cocktail",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Stir all ingredients (except olive) with ice and strain into a cocktail glass. Add the olive and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/0bkwca1492975553.jpg",
    Ingredients:[ "Scotch", "Sweet Vermouth", "Orange bitters","Olive"],
    Measures:[ "1 1/2 oz ", "3/4 oz ", "2 dashes ", "1 "],
    Date: "2017-04-23 20:25:53",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Imperial Fizz",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Shake all ingredients (except carbonated water) with ice and strain into a highball glass over two ice cubes. Fill with carbonated water, stir, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/zj1usl1504884548.jpg",
    Ingredients:[ "Light rum", "Blended whiskey", "Lemon","Powdered sugar", "Carbonated water"],
    Measures:[ "1/2 oz ", "1 1/2 oz ", "Juice of 1/2 ", "1 tsp "],
    Date: "2017-09-08 16:29:08",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Irish Spring",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins glass",
    Instructions:
      "Pour all ingredients (except orange slice and cherry) into a collins glass over ice cubes. Garnish with the slice of orange, add the cherry on top, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/sot8v41504884783.jpg",
    Ingredients:[ "Irish whiskey", "Peach brandy", "Orange juice","Sweet and sour", "Orange", "Cherry"],
    Measures:[ "1 oz ", "1/2 oz ", "1 oz ", "1 oz ", "1 slice ", "1 "],
    Date: "2017-09-08 16:33:03",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Jack Rose Cocktail",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/uuqqrv1439907068.jpg",
    Ingredients:[ "Apple brandy", "Grenadine", "Lime",""],
    Measures:[ "1 1/2 oz ", "1 tsp ", "Juice of 1/2 "],
    Date: "2015-08-18 15:11:08",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Japanese Fizz",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Shake all ingredients (except carbonated water) with ice and strain into a highball glass over two ice cubes. Fill with carbonated water, stir, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/37vzv11504884831.jpg",
    Ingredients:[ "Blended whiskey", "Lemon", "Powdered sugar","Port", "Egg white", "Carbonated water"],
    Measures:[ "1 1/2 oz ", "Juice of 1/2 ", "1 tsp ", "1 tblsp ", "1 "],
    Date: "2017-09-08 16:33:51",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Jewel Of The Nile",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/hx4nrb1504884947.jpg",
    Ingredients:[ "Gin", "Green Chartreuse", "Yellow Chartreuse",""],
    Measures:[ "1 1/2 oz ", "1/2 oz ", "1/2 oz "],
    Date: "2017-09-08 16:35:48",
    isPublic: true,
    Like: 0
  },
  {
    Name: "John Collins",
    Tags: "IBA",
    Alcoholic: true,
    Glass: "Collins glass",
    Instructions:
      "Pour all ingredients directly into highball glass filled with ice. Stir gently. Garnish. Add a dash of Angostura bitters.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/u5yaxl1504350270.jpg",
    Ingredients:[ "Bourbon", "Lemon juice", "Sugar","Club soda", "Maraschino cherry", "Orange"],
    Measures:[ "2 oz ", "1 oz ", "1 tsp superfine ", "3 oz ", "1 ", "1 "],
    Date: "2017-09-02 12:04:31",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Kamikaze",
    Tags: "IBA,NewEra",
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Shake all ingredients together with ice. Strain into glass, garnish and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/xa58bb1504373204.jpg",
    Ingredients:[ "Vodka", "Triple sec", "Lime juice",""],
    Measures:[ "1 oz ", "1 oz ", "1 oz "],
    Date: "2017-09-02 18:26:44",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Kentucky B And B",
    Tags: null,
    Alcoholic: true,
    Glass: "Brandy snifter",
    Instructions: "Pour the bourbon and Benedictine into a brandy snifter.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/sqxsxp1478820236.jpg",
    Ingredients:[ "Bourbon", "Benedictine",""],
    Measures:[ "2 oz ", "1/2 oz "],
    Date: "2016-11-10 23:23:56",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Kentucky Colonel",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "In a shaker half-filled with ice cubes combine the courbon and Benedictine. Shake and strain into a cocktail glass. Garnish with the lemon twist.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/utqwpu1478820348.jpg",
    Ingredients:[ "Bourbon", "Benedictine", "Lemon peel",""],
    Measures:[ "3 oz ", "1/2 oz ", "1 twist of "],
    Date: "2016-11-10 23:25:48",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Lady Love Fizz",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Shake all ingredients (except carbonated water) with ice and strain into a cocktail glass over two ice cubes. Fill with carbonated water, stir, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/20d63k1504885263.jpg",
    Ingredients:[ "Gin", "Light cream", "Powdered sugar","Lemon", "Egg white", "Carbonated water"],
    Measures:[ "2 oz ", "2 tsp ", "1 tsp ", "Juice of 1/2 ", "1 "],
    Date: "2017-09-08 16:41:03",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Loch Lomond",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "In a mixing glass half-filled with ice cubes, combine the Scotch, Drambuie, and vermouth. Stir well. Strain into a cocktail glass. Garnish with the lemon twist.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/rpvtpr1468923881.jpg",
    Ingredients:[ "Scotch", "Drambuie", "Dry Vermouth","Lemon peel"],
    Measures:[ "2 oz ", "1/2 oz ", "1/2 oz ", "1 twist of "],
    Date: "2016-07-19 11:24:41",
    isPublic: true,
    Like: 0
  },
  {
    Name: "London Town",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/rpsrqv1468923507.jpg",
    Ingredients:[ "Gin", "Maraschino liqueur", "Orange bitters",""],
    Measures:[ "1 1/2 oz ", "1/2 oz ", "2 dashes "],
    Date: "2016-07-19 11:18:27",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Lone Tree Cocktail",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Stir ingredients with ice, strain into a cocktail glass, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/tsxpty1468923417.jpg",
    Ingredients:[ "Sweet Vermouth", "Gin",""],
    Measures:[ "3/4 oz ", "1 1/2 oz "],
    Date: "2016-07-19 11:16:57",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Lone Tree Cooler",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins glass",
    Instructions:
      "Stir powdered sugar and 2 oz. carbonated water in a collins glass. Fill glass with ice, add gin and vermouth, and stir. Fill with carbonated water and stir again. Add the twist of lemon peel and the orange spiral so that the end dangles over rim of glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/wsyqry1479298485.jpg",
    Ingredients:[ "Carbonated water", "Gin", "Dry Vermouth","Powdered sugar", "Orange spiral", "Lemon peel"],
    Measures:[],
    Date: "2016-11-16 12:14:45",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Lord And Lady",
    Tags: null,
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "Pour the rum and Tia Maria into an old-fashioned glass almost filled with ice cubes. Stir well.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/quwrys1468923219.jpg",
    Ingredients:[ "Dark rum", "Tia maria",""],
    Measures:[ "1 1/2 oz ", "1/2 oz "],
    Date: "2016-07-19 11:13:39",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Mai Tai",
    Tags: "IBA,ContemporaryClassic",
    Alcoholic: true,
    Glass: "Collins glass",
    Instructions:
      "Shake all ingredients with ice. Strain into glass. Garnish and serve with straw.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/twyrrp1439907470.jpg",
    Ingredients:[ "Light rum", "Orgeat syrup", "Triple sec","Sweet and sour", "Cherry"],
    Measures:[ "1 oz ", "1/2 oz ", "1/2 oz ", "1 1/2 oz ", "1 "],
    Date: "2015-08-18 15:17:50",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Martinez Cocktail",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Stir all ingredients (except cherry) with ice and strain into a cocktail glass. Top with the cherry and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/wwxwvr1439906452.jpg",
    Ingredients:[ "Gin", "Dry Vermouth", "Triple sec","Orange bitters", "Cherry"],
    Measures:[ "1 oz ", "1 oz ", "1/4 tsp ", "1 dash ", "1 "],
    Date: "2015-08-18 15:00:52",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Martini",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Straight: Pour all ingredients into mixing glass with ice cubes. Stir well. Strain in chilled martini cocktail glass. Squeeze oil from lemon peel onto the drink, or garnish with olive.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/71t8581504353095.jpg",
    Ingredients:[ "Gin", "Dry Vermouth", "Olive",""],
    Measures:[ "1 2/3 oz ", "1/3 oz ", "1 "],
    Date: "2017-09-02 12:51:35",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Midnight Cowboy",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vsxxwy1441208133.jpg",
    Ingredients:[ "Bourbon", "Dark rum", "Heavy cream",""],
    Measures:[ "2 oz ", "1 oz ", "1/2 oz "],
    Date: "2015-09-02 16:35:33",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Mississippi Planters Punch",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins glass",
    Instructions:
      "Shake all ingredients (except carbonated water) with ice and strain into a collins glass over ice cubes. Fill with carbonated water, stir, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/urpyqs1439907531.jpg",
    Ingredients:[ "Brandy", "Light rum", "Bourbon","Lemon", "Powdered sugar", "Carbonated water"],
    Measures:[ "1 oz ", "1/2 oz ", "1/2 oz ", "Juice of 1/2 ", "1 tblsp "],
    Date: "2015-08-18 15:18:51",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Monkey Wrench",
    Tags: null,
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "Pour all of the ingredients into an old-fashioned glass almost filled with ice cubes. Stir well.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/8it05n1504353314.jpg",
    Ingredients:[ "Light rum", "Grapefruit juice", "Bitters",""],
    Measures:[ "1 1/2 oz ", "3 oz ", "1 dash "],
    Date: "2017-09-02 12:55:14",
    isPublic: true,
    Like: 0
  },
  {
    Name: "New York Sour",
    Tags: null,
    Alcoholic: true,
    Glass: "Whiskey sour glass",
    Instructions:
      "Shake blended whiskey, juice of lemon, and powdered sugar with ice and strain into a whiskey sour glass. Float claret on top. Decorate with the half-slice of lemon and the cherry and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/61wgch1504882795.jpg",
    Ingredients:[ "Blended whiskey", "Lemon", "Sugar","Red wine", "Lemon", "Cherry"],
    Measures:[ "2 oz ", "Juice of 1/2 ", "1 tsp ", " (Claret)\n"],
    Date: "2017-09-08 15:59:55",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Orange Oasis",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Shake brandy, gin, and orange juice with ice and strain into a highball glass over ice cubes. Fill with ginger ale, stir, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/xqqytq1441167923.jpg",
    Ingredients:[ "Cherry brandy", "Gin", "Orange juice","Ginger ale"],
    Measures:[ "1/2 oz ", "1 1/2 oz ", "4 oz "],
    Date: "2015-09-02 05:25:23",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Orgasm",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Shake all ingredients with ice, strain into a chilled cocktail glass, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vr6kle1504886114.jpg",
    Ingredients:[ "Creme de Cacao", "Amaretto", "Triple sec","Vodka", "Light cream"],
    Measures:[ "1/2 oz white ", "1/2 oz ", "1/2 oz ", "1/2 oz ", "1 oz "],
    Date: "2017-09-08 16:55:14",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Pink Gin",
    Tags: null,
    Alcoholic: true,
    Glass: "White wine glass",
    Instructions:
      "Pour the bitters into a wine glass. Swirl the glass to coat the inside with the bitters, shake out the excess. Pour the gin into the glass. Do not add ice.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/qyr51e1504888618.jpg",
    Ingredients:[ "Bitters", "Gin",""],
    Measures:[ "3 dashes ", "2 oz "],
    Date: "2017-09-08 17:36:58",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Pink Lady",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/5ia6j21504887829.jpg",
    Ingredients:[ "Gin", "Grenadine", "Light cream","Egg white"],
    Measures:[ "1 1/2 oz ", "1 tsp ", "1 tsp ", "1 "],
    Date: "2017-09-08 17:23:49",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Poppy Cocktail",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Shake ingredients with ice, strain into a cocktail glass, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/cslw1w1504389915.jpg",
    Ingredients:[ "Gin", "Creme de Cacao",""],
    Measures:[ "1 1/2 oz ", "3/4 oz white "],
    Date: "2017-09-02 23:05:15",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Port And Starboard",
    Tags: null,
    Alcoholic: true,
    Glass: "Pousse cafe glass",
    Instructions:
      "Pour carefully into a pousse-cafe glass, so that creme de menthe floats on grenadine. Serve without mixing.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/wxvupx1441553911.jpg",
    Ingredients:[ "Grenadine", "Green Creme de Menthe",""],
    Measures:[ "1 tblsp ", "1/2 oz "],
    Date: "2015-09-06 16:38:31",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Port Wine Cocktail",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Stir ingredients with ice, strain into a cocktail glass, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/qruprq1441553976.jpg",
    Ingredients:[ "Port", "Brandy",""],
    Measures:[ "2 1/2 oz ", "1/2 tsp "],
    Date: "2015-09-06 16:39:36",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Port Wine Flip",
    Tags: null,
    Alcoholic: true,
    Glass: "Whiskey sour glass",
    Instructions:
      "Shake all ingredients (except nutmeg) with ice and strain into a whiskey sour glass. Sprinkle nutmeg on top and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vrprxu1441553844.jpg",
    Ingredients:[ "Port", "Light cream", "Powdered sugar","Egg", "Nutmeg"],
    Measures:[ "1 1/2 oz ", "2 tsp ", "1 tsp ", "1 whole "],
    Date: "2015-09-06 16:37:24",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Quaker's Cocktail",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/yrqppx1478962314.jpg",
    Ingredients:[ "Light rum", "Brandy", "Lemon","Raspberry syrup"],
    Measures:[ "3/4 oz ", "3/4 oz ", "Juice of 1/4 ", "2 tsp "],
    Date: "2016-11-12 14:51:54",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Quarter Deck Cocktail",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/qrwvps1478963017.jpg",
    Ingredients:[ "Light rum", "Sherry", "Lime",""],
    Measures:[ "1 1/2 ", "1/3 oz cream ", "Juice of 1/2 "],
    Date: "2016-11-12 15:03:37",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Queen Bee",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/rvvpxu1478963194.jpg",
    Ingredients:[ "Coffee brandy", "Lime vodka", "Sherry",""],
    Measures:[ "1 oz ", "1 1/2 oz ", "1/2 oz cream "],
    Date: "2016-11-12 15:06:34",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Queen Charlotte",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins glass",
    Instructions:
      "Pour red wine and grenadine into a collins glass over ice cubes. Fill with lemon-lime soda, stir, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vqruyt1478963249.jpg",
    Ingredients:[ "Red wine", "Grenadine", "Lemon-lime soda",""],
    Measures:[ "2 oz ", "1 oz "],
    Date: "2016-11-12 15:07:29",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Queen Elizabeth",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vpqspv1478963339.jpg",
    Ingredients:[ "Dry Vermouth", "Gin", "Benedictine",""],
    Measures:[ "1/2 oz ", "1 1/2 oz ", "1 1/2 tsp "],
    Date: "2016-11-12 15:08:59",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Quentin",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "In a shaker half-filled with ice cubes, combine the rum, Kahlua, and cream. Shake well. Strain into a cocktail glass and garnish with the nutmeg.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/spxtqp1478963398.jpg",
    Ingredients:[ "Dark rum", "Kahlua", "Light cream","Nutmeg"],
    Measures:[ "1 1/2 oz ", "1/2 oz ", "1 oz ", "1/8 tsp grated "],
    Date: "2016-11-12 15:09:58",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Royal Fizz",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins glass",
    Instructions:
      "Shake all ingredients (except cola) with ice and strain into a chilled collins glass. Fill with cola and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/wrh44j1504390609.jpg",
    Ingredients:[ "Gin", "Sweet and sour", "Egg","Coca-Cola"],
    Measures:[ "1 oz ", "2 oz ", "1 whole "],
    Date: "2017-09-02 23:16:49",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Royal Gin Fizz",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Shake all ingredients (except carbonated water) with ice and strain into a highball glass over two ice cubes. Fill with carbonated water, stir, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/pe1x1c1504735672.jpg",
    Ingredients:[ "Gin", "Lemon", "Powdered sugar","Egg", "Carbonated water"],
    Measures:[ "2 oz ", "Juice of 1/2 ", "1 tsp ", "1 whole "],
    Date: "2017-09-06 23:07:52",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Rum Cobbler",
    Tags: null,
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "In an old-fashioned glass, dissolve the sugar in the club soda. Add crushed ice until the glass is almost full. Add the rum. Stir well. Garnish with the cherry and the orange and lemon slices.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/5vh9ld1504390683.jpg",
    Ingredients:[ "Sugar", "Club soda", "Lemon","Dark rum", "Maraschino cherry", "Orange"],
    Measures:[ "1 tsp superfine ", "3 oz ", "1 ", "2 oz ", "1 ", "1 "],
    Date: "2017-09-02 23:18:03",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Rum Cooler",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins glass",
    Instructions:
      "Pour the rum and soda into a collins glass almost filled with ice cubes. Stir well and garnish with the lemon wedge.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/2hgwsb1504888674.jpg",
    Ingredients:[ "Rum", "Lemon-lime soda", "Lemon",""],
    Measures:[ "2 oz light or dark ", "4 oz ", "1 "],
    Date: "2017-09-08 17:37:54",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Rum Milk Punch",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins glass",
    Instructions:
      "Shake all ingredients (except nutmeg) with ice and strain into a collins glass. Sprinkle nutmeg on top and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/w64lqm1504888810.jpg",
    Ingredients:[ "Light rum", "Milk", "Powdered sugar","Nutmeg"],
    Measures:[ "2 oz ", "1 cup ", "1 tsp "],
    Date: "2017-09-08 17:40:10",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Rum Old-fashioned",
    Tags: null,
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "Stir powdered sugar, water, and bitters in an old-fashioned glass. When sugar has dissolved add ice cubes and light rum. Add the twist of lime peel, float 151 proof rum on top, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/otn2011504820649.jpg",
    Ingredients:[ "Light rum", "151 proof rum", "Powdered sugar","Bitters", "Water", "Lime peel"],
    Measures:[ "1 1/2 oz ", "1 tsp ", "1/2 tsp ", "1 dash ", "1 tsp ", "Twist of "],
    Date: "2017-09-07 22:44:09",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Rum Screwdriver",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Pour rum into a highball glass over ice cubes. Add orange juice, stir, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/4c85zq1511782093.jpg",
    Ingredients:[ "Light rum", "Orange juice",""],
    Measures:[ "1 1/2 oz ", "5 oz "],
    Date: "2017-11-27 11:28:14",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Rum Sour",
    Tags: null,
    Alcoholic: true,
    Glass: "Whiskey sour glass",
    Instructions:
      "In a shaker half-filled with ice cubes, combine the rum, lemon juice, and sugar. Shake well. Strain into a sour glass and garnish with the orange slice and the cherry.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/bylfi21504886323.jpg",
    Ingredients:[ "Light rum", "Lemon juice", "Sugar","Orange", "Maraschino cherry"],
    Measures:[ "2 oz ", "1 oz ", "1/2 tsp superfine ", "1 ", "1 "],
    Date: "2017-09-08 16:58:44",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Rum Toddy",
    Tags: null,
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "Dissolve powdered sugar in water in an old-fashioned glass. Add rum and one ice cube and stir. Add the twist of lemon peel and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/athdk71504886286.jpg",
    Ingredients:[ "Rum", "Powdered sugar", "Lemon peel","Water"],
    Measures:[ "2 oz light or dark ", "2 tsp ", "1 twist of ", "2 tsp "],
    Date: "2017-09-08 16:58:06",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Rusty Nail",
    Tags: "IBA,Classic",
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "Pour the Scotch and Drambuie into an old-fashioned glass almost filled with ice cubes. Stir well. Garnish with the lemon twist.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/yqsvtw1478252982.jpg",
    Ingredients:[ "Scotch", "Drambuie", "Lemon peel",""],
    Measures:[ "1 1/2 oz ", "1/2 oz ", "1 twist of "],
    Date: "2016-11-04 09:49:42",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Salty Dog",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Pour all ingredients over ice cubes in a highball glass. Stir well and serve. (Vodka may be substituted for gin, if preferred.)",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/4vfge01504890216.jpg",
    Ingredients:[ "Grapefruit juice", "Gin", "Salt",""],
    Measures:[ "5 oz ", "1 1/2 oz ", "1/4 tsp "],
    Date: "2017-09-08 18:03:36",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Sazerac",
    Tags: "IBA,Classic",
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "Rinse a chilled old-fashioned glass with the absinthe, add crushed ice, and set it aside. Stir the remaining ingredients over ice and set it aside. Discard the ice and any excess absinthe from the prepared glass, and strain the drink into the glass. Add the lemon peel for garnish.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vvpxwy1439907208.jpg",
    Ingredients:[ "Ricard", "Sugar", "Peychaud bitters","Water", "Bourbon", "Lemon peel"],
    Measures:[ "1 tsp ", "1/2 tsp superfine ", "2 dashes ", "1 tsp ", "2 oz ", "1 twist of "],
    Date: "2015-08-18 15:13:28",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Scooter",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Shake all ingredients well with cracked ice, strain into a cocktail glass, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/twuptu1483388307.jpg",
    Ingredients:[ "Brandy", "Amaretto", "Light cream",""],
    Measures:[ "1 oz ", "1 oz ", "1 oz "],
    Date: "2017-01-02 20:18:27",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Scotch Cobbler",
    Tags: null,
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "Pour scotch, brandy, and curacao over ice in an old-fashioned glass. Add the orange slice, top with the mint sprig, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/1q7coh1504736227.jpg",
    Ingredients:[ "Scotch", "Brandy", "Curacao","Orange", "Mint"],
    Measures:[ "2 oz ", "4 dashes ", "4 dashes ", "1 slice ", "1 "],
    Date: "2017-09-06 23:17:07",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Scotch Sour",
    Tags: null,
    Alcoholic: true,
    Glass: "Whiskey sour glass",
    Instructions:
      "Shake scotch, juice of lime, and powdered sugar with ice and strain into a whiskey sour glass. Decorate with 1/2 slice lemon, top with the cherry, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/0dnb6k1504890436.jpg",
    Ingredients:[ "Scotch", "Lime", "Powdered sugar","Lemon", "Cherry"],
    Measures:[ "1 1/2 oz ", "Juice of 1/2 ", "1/2 tsp ", "1/2 slice ", "1 "],
    Date: "2017-09-08 18:07:16",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Screwdriver",
    Tags: "IBA",
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions: "Mix in a highball glass with ice. Garnish and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/8xnyke1504352207.jpg",
    Ingredients:[ "Vodka", "Orange juice",""],
    Measures:[ "2 oz "],
    Date: "2017-09-02 12:36:47",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Shanghai Cocktail",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/ttyrxr1478820678.jpg",
    Ingredients:[ "Light rum", "Anisette", "Grenadine","Lemon"],
    Measures:[ "1 oz Jamaican ", "1 tsp ", "1/2 tsp ", "Juice of 1/4 "],
    Date: "2016-11-10 23:31:18",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Sherry Eggnog",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins glass",
    Instructions:
      "Shake sherry, powdered sugar, and egg with ice and strain into a collins glass. Fill with milk and stir. Sprinkle nutmeg on top and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/xwrpsv1478820541.jpg",
    Ingredients:[ "Sherry", "Powdered sugar", "Egg","Milk", "Nutmeg"],
    Measures:[ "2 oz cream ", "1 tsp ", "1 whole "],
    Date: "2016-11-10 23:29:01",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Sherry Flip",
    Tags: null,
    Alcoholic: true,
    Glass: "Nick and Nora Glass",
    Instructions:
      "Shake all ingredients (except nutmeg) with ice and strain into a whiskey sour glass. Sprinkle nutmeg on top and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/qrryvq1478820428.jpg",
    Ingredients:[ "Sherry", "Light cream", "Powdered sugar","Egg", "Nutmeg"],
    Measures:[ "1 1/2 oz cream ", "2 tsp ", "1 tsp ", "1 whole "],
    Date: "2016-11-10 23:27:08",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Sidecar",
    Tags: "IBA,Classic",
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Pour all ingredients into cocktail shaker filled with ice. Shake well and strain into cocktail glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/stwxuq1439906852.jpg",
    Ingredients:[ "Cognac", "Cointreau", "Lemon juice",""],
    Measures:[ "2 oz ", "1/2 oz ", "1 oz "],
    Date: "2015-08-18 15:07:32",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Sidecar Cocktail",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/ewjxui1504820428.jpg",
    Ingredients:[ "Brandy", "Triple sec", "Lemon",""],
    Measures:[ "1 oz ", "1/2 oz ", "Juice of 1/4 "],
    Date: "2017-09-07 22:40:28",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Singapore Sling",
    Tags: "IBA,ContemporaryClassic",
    Alcoholic: true,
    Glass: "Hurricane glass",
    Instructions:
      "Pour all ingredients into cocktail shaker filled with ice cubes. Shake well. Strain into highball glass. Garnish with pineapple and cocktail cherry.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/tvtrrt1439906288.jpg",
    Ingredients:[ "Cherry brandy", "Grenadine", "Gin","Sweet and sour", "Carbonated water", "Cherry"],
    Measures:[ "1/2 oz ", "1/2 oz ", "1 oz ", "2 oz "],
    Date: "2015-08-18 14:58:08",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Sloe Gin Cocktail",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/d7mo481504889531.jpg",
    Ingredients:[ "Sloe gin", "Dry Vermouth", "Orange bitters",""],
    Measures:[ "2 oz ", "1/4 tsp ", "1 dash "],
    Date: "2017-09-08 17:52:12",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Sol Y Sombra",
    Tags: null,
    Alcoholic: true,
    Glass: "Brandy snifter",
    Instructions:
      'Shake ingredients with ice, strain into a brandy snifter, and serve. (The English translation of the Name: of this drink is "Sun and Shade", and after sampling this drink, you\'ll understand why. Thanks, Kirby.)',
    Image:
      "https://www.thecocktaildb.com/images/media/drink/3gz2vw1503425983.jpg",
    Ingredients:[ "Brandy", "Anisette",""],
    Measures:[ "1 1/2 oz ", "1 1/2 oz "],
    Date: "2017-08-22 19:19:43",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Stone Sour",
    Tags: null,
    Alcoholic: true,
    Glass: "Whiskey sour glass",
    Instructions:
      "Shake all ingredients with ice, strain into a chilled whiskey sour glass, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vruvtp1472719895.jpg",
    Ingredients:[ "Apricot brandy", "Orange juice", "Sweet and sour",""],
    Measures:[ "1 oz ", "1 oz ", "1 oz "],
    Date: "2016-09-01 09:51:35",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Strawberry Daiquiri",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Pour all ingredients into shaker with ice cubes. Shake well. Strain in chilled cocktail glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/deu59m1504736135.jpg",
    Ingredients:[ "Strawberry schnapps", "Light rum", "Lime juice","Powdered sugar", "Strawberries"],
    Measures:[ "1/2 oz ", "1 oz ", "1 oz ", "1 tsp ", "1 oz "],
    Date: "2017-09-06 23:15:36",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Strawberry Margarita",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Rub rim of cocktail glass with lemon juice and dip rim in salt. Shake schnapps, tequila, triple sec, lemon juice, and strawberries with ice, strain into the salt-rimmed glass, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/tqyrpw1439905311.jpg",
    Ingredients:[ "Strawberry schnapps", "Tequila", "Triple sec","Lemon juice", "Strawberries", "Salt"],
    Measures:[ "1/2 oz ", "1 oz ", "1/2 oz ", "1 oz ", "1 oz "],
    Date: "2015-08-18 14:41:51",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Tequila Fizz",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins glass",
    Instructions:
      "Shake all ingredients (except ginger ale) with ice and strain into a collins glass over ice cubes. Fill with ginger ale, stir, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/2bcase1504889637.jpg",
    Ingredients:[ "Tequila", "Lemon juice", "Grenadine","Egg white", "Ginger ale"],
    Measures:[ "2 oz ", "1 tblsp ", "3/4 oz ", "1 "],
    Date: "2017-09-08 17:53:57",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Tequila Sour",
    Tags: null,
    Alcoholic: true,
    Glass: "Whiskey sour glass",
    Instructions:
      "Shake tequila, juice of lemon, and powdered sugar with ice and strain into a whiskey sour glass. Add the half-slice of lemon, top with the cherry, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/ek0mlq1504820601.jpg",
    Ingredients:[ "Tequila", "Lemon", "Powdered sugar","Lemon", "Cherry"],
    Measures:[ "2 oz ", "Juice of 1/2 ", "1 tsp ", "1/2 slice ", "1 "],
    Date: "2017-09-07 22:43:21",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Thriller",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/rvuswq1461867714.jpg",
    Ingredients:[ "Scotch", "Wine", "Orange juice",""],
    Measures:[ "1 1/2 oz ", "1 oz Green Ginger ", "1 oz "],
    Date: "2016-04-28 19:21:54",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Tom Collins",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins glass",
    Instructions:
      "In a shaker half-filled with ice cubes, combine the gin, lemon juice, and sugar. Shake well. Strain into a collins glass alomst filled with ice cubes. Add the club soda. Stir and garnish with the cherry and the orange slice.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/qystvv1439907682.jpg",
    Ingredients:[ "Gin", "Lemon juice", "Sugar","Club soda", "Maraschino cherry", "Orange"],
    Measures:[ "2 oz ", "1 oz ", "1 tsp superfine ", "3 oz ", "1 ", "1 "],
    Date: "2015-08-18 15:21:22",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Turf Cocktail",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Stir all ingredients (except orange peel) with ice and strain into a cocktail glass. Add the twist of orange peel and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/utypqq1441554367.jpg",
    Ingredients:[ "Dry Vermouth", "Gin", "Anis","Bitters", "Orange peel"],
    Measures:[ "1 oz ", "1 oz ", "1/4 tsp ", "2 dashes ", "Twist of "],
    Date: "2015-09-06 16:46:07",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Tuxedo Cocktail",
    Tags: "IBA,Classic",
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Stir all ingredients with ice and strain into a cocktail glass. Garnish with a cherry and a twist of lemon zest.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/4u0nbl1504352551.jpg",
    Ingredients:[ "Dry Vermouth", "Gin", "Maraschino liqueur","Anis", "Orange bitters", "Cherry"],
    Measures:[ "1 1/2 oz ", "1 1/2 oz ", "1/4 tsp ", "1/4 tsp ", "2 dashes ", "1 "],
    Date: "2017-09-02 12:42:31",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Valencia Cocktail",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/9myuc11492975640.jpg",
    Ingredients:[ "Apricot brandy", "Orange juice", "Orange bitters",""],
    Measures:[ "1 1/2 oz ", "1 tblsp ", "2 dashes "],
    Date: "2017-04-23 20:27:20",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Van Vleet",
    Tags: null,
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "Shake all ingredients with ice, strain into an old-fashioned glass over ice cubes, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/fgq2bl1492975771.jpg",
    Ingredients:[ "Light rum", "Maple syrup", "Lemon juice",""],
    Measures:[ "3 oz ", "1 oz ", "1 oz "],
    Date: "2017-04-23 20:29:31",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Vermouth Cassis",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Stir vermouth and creme de cassis in a highball glass with ice cubes. Fill with carbonated water, stir again, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/tswpxx1441554674.jpg",
    Ingredients:[ "Dry Vermouth", "Creme de Cassis", "Carbonated water",""],
    Measures:[ "1 1/2 oz ", "3/4 oz "],
    Date: "2015-09-06 16:51:14",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Vesuvio",
    Tags: null,
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "Shake all ingredients with ice, strain into an old-fashioned glass over ice cubes, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/26cq601492976203.jpg",
    Ingredients:[ "Light rum", "Sweet Vermouth", "Lemon","Powdered sugar", "Egg white"],
    Measures:[ "1 oz ", "1/2 oz ", "Juice of 1/2 ", "1 tsp ", "1 "],
    Date: "2017-04-23 20:36:43",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Veteran",
    Tags: null,
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "Pour the rum and cherry brandy into an old-fashioned glass almost filled with ice cubes. Stir well.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/iwml9t1492976255.jpg",
    Ingredients:[ "Dark rum", "Cherry brandy",""],
    Measures:[ "2 oz ", "1/2 oz "],
    Date: "2017-04-23 20:37:36",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Victor",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/voapgc1492976416.jpg",
    Ingredients:[ "Gin", "Sweet Vermouth", "Brandy",""],
    Measures:[ "1 1/2 oz ", "1/2 oz ", "1/2 oz "],
    Date: "2017-04-23 20:40:16",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Victory Collins",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins glass",
    Instructions:
      "Shake all ingredients (except orange slice) with ice and strain into a collins glass over ice cubes. Add the slice of orange and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/lx0lvs1492976619.jpg",
    Ingredients:[ "Vodka", "Lemon juice", "Grape juice","Powdered sugar", "Orange"],
    Measures:[ "1 1/2 oz ", "3 oz ", "3 oz unsweetened ", "1 tsp ", "1 slice "],
    Date: "2017-04-23 20:43:39",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Vodka And Tonic",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Pour vodka into a highball glass over ice cubes. Fill with tonic water, stir, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/lmj2yt1504820500.jpg",
    Ingredients:[ "Vodka", "Tonic water",""],
    Measures:[ "2 oz "],
    Date: "2017-09-07 22:41:40",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Waikiki Beachcomber",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/ysuqus1441208583.jpg",
    Ingredients:[ "Triple sec", "Gin", "Pineapple juice",""],
    Measures:[ "3/4 oz ", "3/4 oz ", "1 tblsp "],
    Date: "2015-09-02 16:43:03",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Whisky Mac",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions:
      "Pour both of the ingredients into a wine goblet with no ice.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/yvvwys1461867858.jpg",
    Ingredients:[ "Scotch", "Wine",""],
    Measures:[ "1 1/2 oz ", "1 oz Green Ginger "],
    Date: "2016-04-28 19:24:18",
    isPublic: true,
    Like: 0
  },
  {
    Name: "White Russian",
    Tags: null,
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "Pour vodka and coffee liqueur over ice cubes in an old-fashioned glass. Fill with light cream and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vsrupw1472405732.jpg",
    Ingredients:[ "Vodka", "Coffee liqueur", "Light cream",""],
    Measures:[ "2 oz ", "1 oz "],
    Date: "2016-08-28 18:35:32",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Afterglow",
    Tags: null,
    Alcoholic: false,
    Glass: "Highball Glass",
    Instructions: "Mix. Serve over ice.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg",
    Ingredients:[ "Grenadine", "Orange juice", "Pineapple juice",""],
    Measures:[ "1 part ", "4 parts ", "4 parts "],
    Date: "2016-07-18 22:07:32",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Alice Cocktail",
    Tags: null,
    Alcoholic: false,
    Glass: "Cocktail glass",
    Instructions: "Shake well, strain into a large cocktail glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/qyqtpv1468876144.jpg",
    Ingredients:[ "Grenadine", "Orange juice", "Pineapple juice","Cream"],
    Measures:[ "1 cl ", "1 cl ", "2 cl ", "4 cl "],
    Date: "2016-07-18 22:09:04",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Apple Karate",
    Tags: null,
    Alcoholic: false,
    Glass: "Highball Glass",
    Instructions:
      "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/syusvw1468876634.jpg",
    Ingredients:[ "Apple juice", "Carrot",""],
    Measures:[ "2 cups ", "1 large "],
    Date: "2016-07-18 22:17:14",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Bora Bora",
    Tags: null,
    Alcoholic: false,
    Glass: "Highball glass",
    Instructions:
      "Prepare in a blender or shaker, serve in a highball glass on the rocks. Garnish with 1 slice of pineapple and one cherry.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/xwuqvw1473201811.jpg",
    Ingredients:[ "Pineapple juice", "Passion fruit juice", "Lemon juice","Grenadine"],
    Measures:[ "10 cl ", "6 cl ", "1 cl ", "1 cl "],
    Date: "2016-09-06 23:43:31",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Orangeade",
    Tags: null,
    Alcoholic: false,
    Glass: "Highball glass",
    Instructions:
      "Place some ice cubes in a large tumbler or highball glass, add lemon juice, orange juice, sugar syrup, and stir well. Top up with cold soda water, serve with a drinking straw.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/ytsxxw1441167732.jpg",
    Ingredients:[ "Lemon juice", "Orange juice", "Sugar syrup","Soda water"],
    Measures:[ "5 cl ", "15 cl ", "2-3 cl "],
    Date: "2015-09-02 05:22:12",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Rail Splitter",
    Tags: null,
    Alcoholic: false,
    Glass: "Highball glass",
    Instructions:
      "Mix sugar syrup with lemon juice in a tall glass. Fill up with ginger ale.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/stsuqq1441207660.jpg",
    Ingredients:[ "Sugar syrup", "Lemon juice", "Ginger ale",""],
    Measures:[ "2 tsp "],
    Date: "2015-09-02 16:27:40",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Banana Milk Shake",
    Tags: null,
    Alcoholic: false,
    Glass: "White wine glass",
    Instructions:
      "Blend very well, preferably in a household mixer. Serve in a wine glass, garnish with whipped cream and a piece of banana.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/rtwwsx1472720307.jpg",
    Ingredients:[ "Milk", "Orange juice", "Sugar syrup","Banana"],
    Measures:[ "10 cl cold ", "4 cl ", "2 tsp ", "1/2 "],
    Date: "2016-09-01 09:58:27",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Banana Strawberry Shake",
    Tags: null,
    Alcoholic: false,
    Glass: "Highball Glass",
    Instructions: "Blend all together in a blender until smooth.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vqquwx1472720634.jpg",
    Ingredients:[ "Strawberries", "Banana", "Yoghurt","Milk", "Honey"],
    Measures:[ "1/2 lb frozen ", "1 frozen ", "1 cup plain ", "1 cup ", " to taste\n"],
    Date: "2016-09-01 10:03:54",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Banana Strawberry Shake Daiquiri-type",
    Tags: null,
    Alcoholic: false,
    Glass: "Cocktail Glass",
    Instructions: "Blend all together in a blender until smooth.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/uvypss1472720581.jpg",
    Ingredients:[ "Strawberries", "Banana", "Apple juice",""],
    Measures:[ "1/2 lb frozen ", "1 frozen ", "2 cups fresh "],
    Date: "2016-09-01 10:03:01",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Egg Cream",
    Tags: null,
    Alcoholic: false,
    Glass: "Coffee mug",
    Instructions:
      "Mix syrup and milk in a fountain glass. Add soda water, serve with a straw.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/mvis731484430445.jpg",
    Ingredients:[ "Chocolate syrup", "Milk", "Soda water",""],
    Measures:[ "2 tblsp ", "6 oz whole ", "6 oz "],
    Date: "2017-01-14 21:47:26",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Fruit Cooler",
    Tags: null,
    Alcoholic: false,
    Glass: "Highball Glass",
    Instructions:
      "Toss strawberries with sugar, and let sit overnight in refrigerator. Cut lemon, reserve two slices. Juice the rest. Mix together the lemon juice, strawberries, apple juice, and soda water. Add slices of lemon (decor, really). In glasses, put ice cubes, and a slice of apple. Pour drink in, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/i3tfn31484430499.jpg",
    Ingredients:[ "Apple juice", "Strawberries", "Sugar","Lemon", "Apple", "Soda water", "Ice"],
    Measures:[ "1 can frozen ", "1 cup ", "2 tblsp ", "1 ", "1 ", "1 L "],
    Date: "2017-01-14 21:48:19",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Fruit Flip-Flop",
    Tags: null,
    Alcoholic: false,
    Glass: "Highball Glass",
    Instructions:
      "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/nfdx6p1484430633.jpg",
    Ingredients:[ "Yoghurt", "Fruit juice",""],
    Measures:[ "1 cup ", "1 cup "],
    Date: "2017-01-14 21:50:33",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Fruit Shake",
    Tags: null,
    Alcoholic: false,
    Glass: "Highball Glass",
    Instructions: "Blend til smooth.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/q0fg2m1484430704.jpg",
    Ingredients:[ "Yoghurt", "Banana", "Orange juice","Fruit", "Ice"],
    Measures:[ "1 cup fruit ", "1 ", "4 oz frozen ", "1/2 piece textural ", "6 "],
    Date: "2017-01-14 21:51:44",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Just a Moonmint",
    Tags: null,
    Alcoholic: false,
    Glass: "Highball Glass",
    Instructions:
      "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/znald61487604035.jpg",
    Ingredients:[ "Milk", "Chocolate syrup", "Mint syrup",""],
    Measures:[ "2 cups "],
    Date: "2017-02-20 15:20:36",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Lassi - A South Indian Drink",
    Tags: null,
    Alcoholic: false,
    Glass: "Highball Glass",
    Instructions:
      "Blend in a blender for 3 seconds. Lassi is one of the easiest things to make, and there are many ways of making it. Basically, it is buttermilk (yoghurt whisked with water), and you can choose almost any consistency that you Like, from the thinnest to the thickest. Serve cold.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/iq6scx1487603980.jpg",
    Ingredients:[ "Yoghurt", "Water", "Cumin seed","Salt", "Mint"],
    Measures:[ "1/2 cup plain ", "1 1/4 cup cold ", "1/2 tsp ground roasted ", "1/4 tsp ", "1/4 tsp dried "],
    Date: "2017-02-20 15:19:40",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Lassi Khara",
    Tags: null,
    Alcoholic: false,
    Glass: "Highball Glass",
    Instructions:
      "Blend (frappe) in blender until frothy. Add torn curry leaves and serve cold.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/m1suzm1487603970.jpg",
    Ingredients:[ "Yoghurt", "Water", "Salt","Asafoetida"],
    Measures:[ "1 cup ", "2 cups cold ", "1 tsp ", "1 pinch "],
    Date: "2017-02-20 15:19:30",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Lassi Raita",
    Tags: null,
    Alcoholic: false,
    Glass: "Highball Glass",
    Instructions:
      "Blend the yoghurt and ice cubes together, until the yoghurt becomes more liquid. Add sugar to taste. The lemon/lime is optional but it gives it a slightly tart taste. Dash of salt. Raita is also good for the summer. Instead of having a traditional salad you can make raita instead.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/s4x0qj1487603933.jpg",
    Ingredients:[ "Yoghurt", "Ice", "Sugar","Lime", "Salt"],
    Measures:[ "2 cups ", "4-6 "],
    Date: "2017-02-20 15:18:53",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Lassi - Sweet",
    Tags: null,
    Alcoholic: false,
    Glass: "Highball glass",
    Instructions:
      "Put all ingredients into a blender and blend until nice and frothy. Serve chilled.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/9jeifz1487603885.jpg",
    Ingredients:[ "Yoghurt", "Water", "Sugar","Salt", "Lemon juice"],
    Measures:[ "1 cup ", "2 cups cold ", "4 tblsp ", "pinch ", "2 tblsp "],
    Date: "2017-02-20 15:18:05",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Lassi - Mango",
    Tags: null,
    Alcoholic: false,
    Glass: "Highball glass",
    Instructions:
      "Put it all in a blender and pour over crushed ice. You can also use other fruits Like strawberries and bananas.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/1bw6sd1487603816.jpg",
    Ingredients:[ "Mango", "Yoghurt", "Sugar","Water"],
    Measures:[ "2 ", "2 cups ", "1/2 cup ", "1 cup iced "],
    Date: "2017-02-20 15:16:56",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Lemouroudji",
    Tags: null,
    Alcoholic: false,
    Glass: "Highball Glass",
    Instructions:
      "Juice the lemons. Peel and grate the ginger. Place the grated ginger and a liberal dash of the cayenne pepper into a piece of cheesecloth, and tie it into a knot. Let soak in the water. After 15 minutes or so, add the sugar, and the lemon juice. Chill, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/eirmo71487603745.jpg",
    Ingredients:[ "Ginger", "Water", "Lemon","Sugar", "Cayenne pepper"],
    Measures:[ "2 pieces ", "1 gal ", "1 lb ", "1 cup ", "ground "],
    Date: "2017-02-20 15:15:45",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Limeade",
    Tags: null,
    Alcoholic: false,
    Glass: "Highball glass",
    Instructions:
      "In a large glass, put the lime juice and sugar, and stir well. Add cold seltzer water to fill. Put the lime peels in the glass. Drink. Repeat until limes or soda run out.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/5jdp5r1487603680.jpg",
    Ingredients:[ "Lime", "Sugar", "Soda water","Lime peel"],
    Measures:[ "Juice of 1 ", "1 tblsp ", " (seltzer water)\n"],
    Date: "2017-02-20 15:14:40",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Imperial Cocktail",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions: "Shake with ice and strain into cocktail glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/bcsj2e1487603625.jpg",
    Ingredients:[ "Lime juice", "Gin", "Aperol",""],
    Measures:[ "4 cl ", "2 cl ", "4 cl "],
    Date: "2017-02-20 15:13:45",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Banana Cantaloupe Smoothie",
    Tags: null,
    Alcoholic: false,
    Glass: "Highball Glass",
    Instructions:
      "Juice cantaloupe, pour juice into blender, add banana, and liquify.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/uqxqsy1468876703.jpg",
    Ingredients:[ "Cantaloupe", "Banana",""],
    Measures:[ "Juice of 1/2 ", "1 "],
    Date: "2016-07-18 22:18:23",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Apple Berry Smoothie",
    Tags: null,
    Alcoholic: false,
    Glass: "Highball Glass",
    Instructions: "Throw everything into a blender and liquify.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/xwqvur1468876473.jpg",
    Ingredients:[ "Berries", "Apple",""],
    Measures:[ "1 cup ", "2 "],
    Date: "2016-07-18 22:14:33",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Grape lemon pineapple Smoothie",
    Tags: null,
    Alcoholic: false,
    Glass: "Highball glass",
    Instructions: "Throw everything into a blender and liquify.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/54z5h71487603583.jpg",
    Ingredients:[ "Grapes", "Lemon", "Pineapple",""],
    Measures:[ "1 cup ", "1/4 ", "1/2 "],
    Date: "2017-02-20 15:13:03",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Kiwi Papaya Smoothie",
    Tags: null,
    Alcoholic: false,
    Glass: "Highball Glass",
    Instructions: "Throw everything into a blender and liquify.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/jogv4w1487603571.jpg",
    Ingredients:[ "Kiwi", "Papaya",""],
    Measures:[ "3 ", "1/2 "],
    Date: "2017-02-20 15:12:51",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Mango Orange Smoothie",
    Tags: null,
    Alcoholic: false,
    Glass: "Highball Glass",
    Instructions: "Throw everything into a blender and liquify.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vdp2do1487603520.jpg",
    Ingredients:[ "Mango", "Orange",""],
    Measures:[ "1 ", "2 "],
    Date: "2017-02-20 15:12:01",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Pineapple Gingerale Smoothie",
    Tags: null,
    Alcoholic: false,
    Glass: "Highball Glass",
    Instructions: "Throw everything into a blender and liquify.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/eg9i1d1487603469.jpg",
    Ingredients:[ "Ginger", "Pineapple",""],
    Measures:[ "1/4 inch ", "1/2 "],
    Date: "2017-02-20 15:11:09",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Kill the cold Smoothie",
    Tags: null,
    Alcoholic: false,
    Glass: "Highball glass",
    Instructions:
      "Juice ginger and lemon and add it to hot water. You may add cardomom.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/7j1z2e1487603414.jpg",
    Ingredients:[ "Ginger", "Lemon", "Water",""],
    Measures:[ "1 inch ", "1/4 ", "1 cup hot "],
    Date: "2017-02-20 15:10:15",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Strawberry Shivers",
    Tags: null,
    Alcoholic: false,
    Glass: "Highball glass",
    Instructions:
      "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/9h1vvt1487603404.jpg",
    Ingredients:[ "Strawberries", "Honey", "Water",""],
    Measures:[ "1 1/2 cup ", "4 tsp ", "1/2 cup "],
    Date: "2017-02-20 15:10:04",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Sweet Bananas",
    Tags: null,
    Alcoholic: false,
    Glass: "Highball Glass",
    Instructions:
      "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/sxpcj71487603345.jpg",
    Ingredients:[ "Milk", "Banana", "Honey",""],
    Measures:[ "2 cups ", "1 ", "1 tblsp "],
    Date: "2017-02-20 15:09:05",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Tomato Tang",
    Tags: null,
    Alcoholic: false,
    Glass: "Highball glass",
    Instructions:
      "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/869qr81487603278.jpg",
    Ingredients:[ "Tomato juice", "Lemon juice", "Celery salt",""],
    Measures:[ "2 cups ", "1-2 tblsp ", "1 dash "],
    Date: "2017-02-20 15:07:58",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Yoghurt Cooler",
    Tags: null,
    Alcoholic: false,
    Glass: "Highball Glass",
    Instructions:
      "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up. Note: Use lots of ice in this one - great on hot days! To add ice: Remove the center of the cover while the blender is on - drop 3 or 4 ice cubs and blend until they're completely crushed.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/trttrv1441254466.jpg",
    Ingredients:[ "Yoghurt", "Fruit", "Ice",""],
    Measures:[ "1 cup ", "1 cup "],
    Date: "2015-09-03 05:27:46",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Castillian Hot Chocolate",
    Tags: null,
    Alcoholic: false,
    Glass: "Coffee mug",
    Instructions:
      "Shift the cocoa and sugar together into a medium-sized saucepan. Dissolve the cornstarch in the water, and stir into the cocoa and sugar until it is a smooth paste. Begin heating the mixture, stirring it with a whisk, and gradually pour in the milk. Continue stirring with the whisk as you bring the liquid to a simmer. Allow the chocolate to simmer for about 10 minutes, stirring often, until it is thick, glossy and completely smooth. Serve steaming hot in coffee mug. Serves six.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/3nbu4a1487603196.jpg",
    Ingredients:[ "Cocoa powder", "Sugar", "Cornstarch","Water", "Milk"],
    Measures:[ "1/2 cup ", "1 cup ", "7 tsp ", "1/2 cup ", "1 qt "],
    Date: "2017-02-20 15:06:36",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Chocolate Beverage",
    Tags: null,
    Alcoholic: false,
    Glass: "Coffee mug",
    Instructions:
      "Boil milk in the top of a deep double boiler five minutes. Remove from fire and add chocolate, mixed with the cinnamon, a little at a time, beating with molinillo or egg beater after each addition. When the chocolate is thoroughly blended, heat to the boiling point. Place over bottom of double boiler and add eggs, whipping constantly, until they are thoroughly blended and the mixture is frothing. Serve in coffee mug. Serves eight.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/jbqrhv1487603186.jpg",
    Ingredients:[ "Milk", "Chocolate", "Cinnamon","Egg"],
    Measures:[ "6 cups ", "3 oz Mexican ", "1 tsp powdered ", "3 "],
    Date: "2017-02-20 15:06:26",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Chocolate Drink",
    Tags: null,
    Alcoholic: false,
    Glass: "Coffee mug",
    Instructions:
      "Melt the bar in a small amount of boiling water. Add milk. Cook over low heat, whipping gently (with a whisk, i would assume) until heated well. Don't let it boil! Serve in coffee mug.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/q7w4xu1487603180.jpg",
    Ingredients:[ "Chocolate", "Milk", "Water",""],
    Measures:[ "125 gr", "3/4 L "],
    Date: "2017-02-20 15:06:20",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Drinking Chocolate",
    Tags: null,
    Alcoholic: false,
    Glass: "Coffee mug",
    Instructions:
      "Heat the cream and milk with the cinnamon and vanilla bean very slowly for 15-20 minutes. (If you don't have any beans add 1-2 tsp of vanilla after heating). Remove the bean and cinnamon. Add the chocolate. Mix until fully melted. Serve topped with some very dense fresh whipped cream. Serves 1-2 depending upon how much of a glutton you are. For a richer chocolate, use 4 oz of milk, 4 oz of cream, 4 oz of chocolate. Serve in coffee mug.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/u6jrdf1487603173.jpg",
    Ingredients:[ "Heavy cream", "Milk", "Cinnamon","Vanilla", "Chocolate", "Whipped cream"],
    Measures:[ "2 oz ", "6-8 oz ", "1 stick ", "1 ", "2 oz finely chopped dark ", "Fresh "],
    Date: "2017-02-20 15:06:13",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Hot Chocolate to Die for",
    Tags: null,
    Alcoholic: false,
    Glass: "Coffee mug",
    Instructions:
      "Melt the chocolate, butter and vanilla in a double boiler. When just smooth stir in the cream.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/0lrmjp1487603166.jpg",
    Ingredients:[ "Chocolate", "Butter", "Vanilla extract","Half-and-half", "Marshmallows"],
    Measures:[ "12 oz fine ", "1 tsp ", "1/2 tsp ", "1 cup ", "mini "],
    Date: "2017-02-20 15:06:06",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Microwave Hot Cocoa",
    Tags: null,
    Alcoholic: false,
    Glass: "Coffee mug",
    Instructions:
      "Combine sugar, cocoa, salt and hot water in 1-quart micro-proof measuring cup (or coffee mug). Microwave at HIGH (100%) for 1 to 1 1/2 minutes or until boiling. Add milk, sitr and microwave an additonal 1 1/2 to 2 minutes or until hot. Stir in vanilla, blend well.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/8y4x5f1487603151.jpg",
    Ingredients:[ "Sugar", "Cocoa powder", "Salt","Water", "Milk", "Vanilla extract"],
    Measures:[ "5 tblsp ", "3 tblsp ", "1 dash ", "3 tblsp hot ", "2 cups ", "1/4 tsp "],
    Date: "2017-02-20 15:05:51",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Nuked Hot Chocolate",
    Tags: null,
    Alcoholic: false,
    Glass: "Coffee mug",
    Instructions:
      "Mix with a bit of milk (1 oz or so) in coffee mug. Nuke mug for about 30-50 seconds. Stir until the heated cocoa dissolves. Fill mug with milk. Nuke for 1-2 minutes, depending on wattage and preferences as to burnt mouth parts.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/xcu6nb1487603142.jpg",
    Ingredients:[ "Cocoa powder", "Sugar", "Vanilla extract","Milk"],
    Measures:[ "2 tsp ", "1 tsp ", "1/2 tsp ", "12 oz "],
    Date: "2017-02-20 15:05:43",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Orange Scented Hot Chocolate",
    Tags: null,
    Alcoholic: false,
    Glass: "Coffee mug",
    Instructions:
      "Combine all ingredients in heavy medium saucepan. Stir over low heat until chocolate melts. Increase heat and bring just to a boil, stirring often. Remove from heat and whisk untily frothy. Return to heat and bring to boil again. Remove from heat, whisk until frothy. Repeat heating and whisking once again. Discard orange peel. (Can be prepared 2 hours ahead. Let stand at room temperature. Before serving, bring just to boil, remove from heat and whisk until frothy.) Pour hot chocolate into coffee mugs. Makes 2 servings.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/hdzwrh1487603131.jpg",
    Ingredients:[ "Milk", "Chocolate", "Orange peel","Espresso", "Nutmeg"],
    Measures:[ "2 cups ", "4 oz chopped bittersweet or semi-sweet ", "3 2-inch strips ", "1/2 tsp instant ", "1/8 tsp ground "],
    Date: "2017-02-20 15:05:31",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Spanish chocolate",
    Tags: null,
    Alcoholic: false,
    Glass: "Coffee mug",
    Instructions:
      "Stir the milk with the chocolate and the cinnamon over low heat until the chocolate dissolves. Add the eggs and beat the mixture until it becomes thick, taking care not to boil. Serve in coffee mug.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/pra8vt1487603054.jpg",
    Ingredients:[ "Milk", "Chocolate", "Cinnamon","Egg yolk"],
    Measures:[ "2 cups ", "2 oz sweet ", "1/2 tsp ", "2 beaten "],
    Date: "2017-02-20 15:04:14",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Lemon Shot",
    Tags: null,
    Alcoholic: true,
    Glass: "Shot glass",
    Instructions:
      "Mix Galliano and Absolut Citron in a shot glass, lay lemon wedge sprinkled with sugar over glass and pour a rum over wedge and glass. light rum with a lighter and let burn for a second. Do shot quickly and suck on lemon. If it is done correctly, this will taste Like a shot of sweet lemonade.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/mx31hv1487602979.jpg",
    Ingredients:[ "Galliano", "Absolut Citron", "Lemon","Sugar", "151 proof rum"],
    Measures:[ "1/2 oz ", "1/2 oz ", " wedge\n", "Bacardi "],
    Date: "2017-02-20 15:02:59",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Sex on the Beach",
    Tags: "IBA,ContemporaryClassic",
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Build all ingredients in a highball glass filled with ice. Garnish with orange slice.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/lijtw51551455287.jpg",
    Ingredients:[ "Vodka", "Peach schnapps", "Cranberry juice","Grapefruit juice"],
    Measures:[ "1 oz ", "3/4 oz "],
    Date: "2016-07-21 10:12:45",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Autodaf\u00e9",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Mix and fill up with soda water. Drunk by finns on a sunny day any time of the year and day.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/7dkf0i1487602928.jpg",
    Ingredients:[ "Vodka", "Lime juice", "Soda water",""],
    Measures:[ "4 cl ", "1 dash "],
    Date: "2017-02-20 15:02:08",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Gagliardo",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Shake well and serve in a cocktail glass. This is a home cocktail of American/Internet Bar del Pozzo, Pavia, Italy.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/lyloe91487602877.jpg",
    Ingredients:[ "Peach Vodka", "Lemon juice", "Galliano","Sirup of roses"],
    Measures:[ "5 parts ", "3 parts ", "1 part ", "1 part "],
    Date: "2017-02-20 15:01:18",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Surf City Lifesaver",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Lots of ice and soda top up in tall glass with cherry and a grin.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/2rzfer1487602699.jpg",
    Ingredients:[ "Ouzo", "Bailey's irish cream", "Gin","Grand Marnier"],
    Measures:[ "1 part ", "1 part ", "2 parts ", "1/2 part "],
    Date: "2017-02-20 14:58:19",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Grizzly Bear",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions: "Served over ice. Sounds nasty, but tastes great.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/k6v97f1487602550.jpg",
    Ingredients:[ "Amaretto", "J\u00e4germeister", "Kahlua","Milk"],
    Measures:[ "1 part ", "1 part ", "1 part ", "2 1/2 parts "],
    Date: "2017-02-20 14:55:50",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Karsk",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Put a copper coin in a coffe-cup and fill up with coffee until you no longer see the coin, then add alcohol until you see the coin. Norwegian speciality.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/808mxk1487602471.jpg",
    Ingredients:[ "Coffee", "Grain alcohol",""],
    Measures:[ "1 part ", "2 parts "],
    Date: "2017-02-20 14:54:31",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Happy Skipper",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      'Pour Captain Morgan\'s Spiced Rum over ice, fill glass to top with Ginger Ale. Garnish with lime. Tastes Like a cream soda. Name:d for the Gilligan\'s Island reference ("The Captain" *in* "Ginger" is a Happy Skipper!)',
    Image:
      "https://www.thecocktaildb.com/images/media/drink/42w2g41487602448.jpg",
    Ingredients:[ "Spiced rum", "Ginger ale", "Lime","Ice"],
    Measures:[ "1 1/2 cl "],
    Date: "2017-02-20 14:54:09",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Frapp\u00e9",
    Tags: null,
    Alcoholic: false,
    Glass: "Highball Glass",
    Instructions:
      "Mix together. Blend at highest blender speed for about 1 minute. Pour into a glass and drink with a straw. Notes: This works best if everything is cold (if you make fresh coffee, mix it with the milk and let it sit in the fridge for 1/2 hour. If it is not frothy, add more milk, or even just some more milk powder. The froth gradually turns to liquid at the bottom of the glass, so you will find that you can sit and drink this for about 1/2 hour, with more iced coffee continually appearing at the bottom. Very refreshing.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vqwryq1441245927.jpg",
    Ingredients:[ "Coffee", "Milk", "Sugar",""],
    Measures:[ "1/2 cup black ", "1/2 cup ", "1-2 tsp "],
    Date: "2015-09-03 03:05:28",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Iced Coffee",
    Tags: null,
    Alcoholic: false,
    Glass: "Coffee mug",
    Instructions:
      "Mix together until coffee and sugar is dissolved. Add milk. Shake well. Using a blender or milk shake maker produces a very foamy drink. Serve in coffee mug.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/ytprxy1454513855.jpg",
    Ingredients:[ "Coffee", "Sugar", "Water","Milk"],
    Measures:[ "1/4 cup instant ", "1/4 cup ", "1/4 cup hot ", "4 cups cold "],
    Date: "2016-02-03 15:37:35",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Iced Coffee Fillip",
    Tags: null,
    Alcoholic: true,
    Glass: "Coffee mug",
    Instructions: "Mix together in a coffee mug and chill before serving.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/sxtxrp1454514223.jpg",
    Ingredients:[ "Kahlua", "Coffee",""],
    Measures:[ "2 tsp ", "Strong cold "],
    Date: "2016-02-03 15:43:43",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Masala Chai",
    Tags: null,
    Alcoholic: false,
    Glass: "Coffee Mug",
    Instructions:
      "Bring 2 cups of water to boil. Add all the ingredients and boil again for about 15 seconds. Let stand for a minute. Warm milk in a pot. Filter tea into cups. Add milk and sugar. That's IT.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/uyrpww1441246384.jpg",
    Ingredients:[ "Water", "Tea", "Ginger","Cardamom", "Cloves", "Cinnamon", "Black pepper", "Sugar", "Milk"],
    Measures:[ "2 cups ", "3-4 tsp ", "1 chunk dried ", "3-4 crushed ", "3 ", "1 piece ", "1-2 whole ", " to taste\n"],
    Date: "2015-09-03 03:13:04",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Melya",
    Tags: null,
    Alcoholic: false,
    Glass: "Coffee mug",
    Instructions:
      "Brew espresso. In a coffee mug, place 1 teaspoon of unsweetened powdered cocoa, then cover a teaspoon with honey and drizzle it into the cup. Stir while the coffee brews, this is the fun part. The cocoa seems to coat the honey without mixing, so you get a dusty, sticky mass that looks as though it will never mix. Then all at once, presto! It looks Like dark chocolate sauce. Pour hot espresso over the honey, stirring to dissolve. Serve with cream.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/xwtptq1441247579.jpg",
    Ingredients:[ "Espresso", "Honey", "Cocoa powder",""],
    Measures:[ "\n", "Unsweetened "],
    Date: "2015-09-03 03:32:59",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Spiking coffee",
    Tags: null,
    Alcoholic: false,
    Glass: "Coffee mug",
    Instructions:
      "Incidentally, a pinch of cinnamon is indeed a nice addition to coffee but true heaven is a cardamom seed. Of course, you serve it in a coffee mug.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/isql6y1487602375.jpg",
    Ingredients:[ "Coffee", "Cinnamon",""],
    Measures:[],
    Date: "2017-02-20 14:52:55",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Thai Coffee",
    Tags: null,
    Alcoholic: false,
    Glass: "Highball glass",
    Instructions:
      "Place the coffee and spices in the filter cone of your coffee maker. Brew coffee as usual, let it cool. In a tall glass, dissolve 1 or 2 teaspoons of sugar in an ounce of the coffee (it's easier to dissolve than if you put it right over ice). Add 5-6 ice cubes and pour coffee to within about 1 inch of the top of the glass. Rest a spoon on top of the coffee and slowly pour whipping cream into the spoon. This will make the cream float on top of the coffee rather than dispersing into it right away.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/wquwxs1441247025.jpg",
    Ingredients:[ "Coffee", "Coriander", "Cardamom","Sugar", "Whipping cream", "Ice"],
    Measures:[ "6 tblsp ground", "1/4 tsp ", "4-5 whole green "],
    Date: "2015-09-03 03:23:45",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Thai Iced Coffee",
    Tags: null,
    Alcoholic: false,
    Glass: "Highball glass",
    Instructions:
      "Prepare a pot of coffee at a good European strength. In the ground coffee, add 2 or 3 freshly ground cardamom pods. Sweeten while hot, then cool quickly. Serve in highball glass over ice, with cream. To get the layered effect, place a spoon atop the coffee and pour the milk carefully into the spoon so that it floats on the top of the coffee.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/rqpypv1441245650.jpg",
    Ingredients:[ "Coffee", "Sugar", "Cream","Cardamom"],
    Measures:[ "black", " pods\n"],
    Date: "2015-09-03 03:00:50",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Thai Iced Tea",
    Tags: null,
    Alcoholic: false,
    Glass: "Highball glass",
    Instructions:
      "Combine Thai tea (i.e., the powder), boiling water, and sweetened condensed milk, stir until blended. Pour into 2 tall glasses filled with ice cubes. Garnish with mint leaves. Makes 2 servings.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/trvwpu1441245568.jpg",
    Ingredients:[ "Tea", "Water", "Condensed milk","Ice", "Mint"],
    Measures:[ "1/4 cup Thai ", "1/2 cup boiling ", "2 tsp sweetened ", " cubes\n"],
    Date: "2015-09-03 02:59:28",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Absinthe #2",
    Tags: null,
    Alcoholic: true,
    Glass: "Jar",
    Instructions:
      "Mix together and let sit a few days. Strain through a coffee filter. To serve mix 1 part absinthe to 4 parts water, add ice, enjoy.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/uxxtrt1472667197.jpg",
    Ingredients:[ "Vodka", "Sugar", "Anise","Licorice root", "Wormwood"],
    Measures:[ "1 bottle ", "50 gr ", "50 ml pure ", "1 tblsp ", "1 "],
    Date: "2016-08-31 19:13:17",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Amaretto Liqueur",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions:
      "Combine sugar and 3/4 cup water in a small saucepan. Bring to a boil, stirring constantly. Reduce heat and simmer until all sugar is dissolved. Remove from heat and cool. In an aging container, combine apricot halves, almond extract, grain alcohol with 1/2 cup water, and brandy. Stir in cooled sugar syrup mixture. Cap and let age for 2 days. Remove apricot halves. (Save apricot halves, can be used for cooking). Add food coloring and glycerine. Stir, recap and continue aging for 1 to 2 months. Re-bottle as desired. Liqueur is ready to serve but will continue to improve with additional aging.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/swqxuv1472719649.jpg",
    Ingredients:[ "Sugar", "Water", "Apricot","Almond flavoring", "Grain alcohol", "Water", "Brandy", "Food coloring", "Food coloring", "Food coloring", "Glycerine"],
    Measures:[ "1 cup", "3/4 cup ", "2 ", "1 tblsp ", "1/2 cup pure ", "1/2 cup ", "1 cup ", "3 drops yellow ", "6 drops red ", "2 drops blue ", "1/2 tsp ", " "],
    Date: "2016-09-01 09:47:29",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Angelica Liqueur",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions:
      "Combine all herbs, nuts and spices with vodka in a 1 quart or larger aging container. Cap tightly and shake daily for 2 weeks. Strain through a fine muslin cloth or coffee filter, discarding solids. Clean out aging container. Place liquid back in container. Place sugar and water in saucepan and stir to combine over medium heat. When sugar is completely dissolved, set aside and let cool. When cool combine with food coloring and add to liqueur liquid. Cap and allow to age and mellow in a cool, dark place for one month.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/yuurps1472667672.jpg",
    Ingredients:[ "Angelica root", "Almond", "Allspice","Cinnamon", "Anise", "Coriander", "Marjoram leaves", "Vodka", "Sugar", "Water", "Food coloring", "Food coloring"],
    Measures:[ "3 tblsp chopped", "1 tblsp chopped ", "1 cracked ", "1 one-inch ", "3-6 crushed ", "1/8 tsp powdered ", "1 tblsp fresh chopped ", "1.5 cup ", "1/2 cup granulated ", "1/4 cup ", "1 drop yellow ", "1 drop green ", " "],
    Date: "2016-08-31 19:21:12",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Caribbean Orange Liqueur",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions:
      "Pare very thinly the bright-colored rind from the oranges (no white). Blot the peel on paper towels to remove any excess oil. Put peel in a 4 cup screw-top jar. Add 2 cups vodka. Close jar. Store in a cool, dark place for 2 days or until the vodka has absorbed the flavor. Remove peel and add remaining vodka. Close jar and add remaining cup of vodka. Close the jar and store in a cool dark place at least 1 month to age.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/qwxuwy1472667570.jpg",
    Ingredients:[ "Orange", "Vodka", "Sugar",""],
    Measures:[ "3 large ", "3 cups ", "1 1/3 cup superfine "],
    Date: "2016-08-31 19:19:30",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Coffee Liqueur",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions:
      "Combine coffee, sugar and water. Simmer 1 hour and let cool. Add vanilla and vodka. Age in sealed jar 2 to 3 weeks.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/ryvtsu1441253851.jpg",
    Ingredients:[ "Coffee", "Vanilla extract", "Sugar","Vodka", "Water"],
    Measures:[ "10 tblsp instant ", "4 tblsp ", "2 1/2 cups ", "1 qt ", "2 1/2 cups "],
    Date: "2015-09-03 05:17:31",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Coffee-Vodka",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions:
      "Boil water and sugar until dissolved. Turn off heat. Slowly add dry instant coffee and continue stirring. Add a chopped vanilla bean to the vodka, then combine the cooled sugar syrup and coffee solution with the vodka. Cover tightly and shake vigorously each day for 3 weeks. Strain and filter. Its also best to let the sugar mixture cool completely so the vodka won't evaporate when its added. If you Like a smoother feel to the liqueur you can add about 1 teaspoon of glycerine to the finished product.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/qvrrvu1472667494.jpg",
    Ingredients:[ "Water", "Sugar", "Coffee","Vanilla", "Vodka", "Caramel coloring"],
    Measures:[ "2 cups ", "2 cups white ", "1/2 cup instant ", "1/2 ", "1 1/2 cup "],
    Date: "2016-08-31 19:18:14",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Cranberry Cordial",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions:
      "Place the chopped cranberries in a 2 liter jar that has a tight-fitting lid. Add the sugar and rum. Adjust the lid securely and place the jar in a cool, dark place. Invert the jar and shake it every day for six weeks. Strain the cordial into bottles and seal with corks.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/qtspsx1472667392.jpg",
    Ingredients:[ "Cranberries", "Sugar", "Light rum",""],
    Measures:[ "1/2 kg chopped ", "3/4 L ", "1/2 L "],
    Date: "2016-08-31 19:16:32",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Creme de Menthe",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions:
      "Bring sugar and water to a boil and simmer for 10 minutes. Cool. Add the remaining ingredients and stir. Cover and let ripen for 1 month.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/yxswtp1441253918.jpg",
    Ingredients:[ "Sugar", "Water", "Grain alcohol","Peppermint extract", "Food coloring"],
    Measures:[ "8 cups ", "6 cups ", "1 pint ", "1 oz pure ", "1 tblsp green "],
    Date: "2015-09-03 05:18:38",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Irish Cream",
    Tags: null,
    Alcoholic: true,
    Glass: "Irish coffee cup",
    Instructions: "Mix scotch and milk. Add half-and-half. Add rest.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/90etyl1504884699.jpg",
    Ingredients:[ "Scotch", "Half-and-half", "Condensed milk","Coconut syrup", "Chocolate syrup"],
    Measures:[ "1 cup ", "1 1/4 cup ", "1 can sweetened ", "3 drops ", "1 tblsp "],
    Date: "2017-09-08 16:31:39",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Scottish Highland Liqueur",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions:
      "Combine all ingreds in aging container. Cover tightly and shake gently several times during the first 24 hrs. After 24 hrs, remove the lemon zest. Cover again and let stand in a cool, dark place for 2 weeks, shaking gently every other day. Strain through a wire sieve to remove the angelica root and fennel. Return to aging container, cover and let stand undisturbed in a cool dark place for 6 months. Siphon or pour clear liqueur into a sterile bottle. The cloudy dregs may be saved for cooking.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/upqvvp1441253441.jpg",
    Ingredients:[ "Johnnie Walker", "Honey", "Angelica root","Fennel seeds", "Lemon peel"],
    Measures:[ "1 fifth ", "1 1/2 cup mild ", "2 tsp dried and chopped ", "1/4 tsp crushed ", "2 2 inch strips "],
    Date: "2015-09-03 05:10:41",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Tia-Maria",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions:
      "Boil water, sugar and coffe for 10 mins and let cool. Add rum and vanilla. Put in clean bottle(s) and leave for 1 week before using.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/sih81u1504367097.jpg",
    Ingredients:[ "Water", "Brown sugar", "Coffee","Rum", "Vanilla extract"],
    Measures:[ "1 cup ", "3/4-1 cup ", "4 tsp ", "1 cup ", "4 tsp "],
    Date: "2017-09-02 16:44:58",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Aloha Fruit punch",
    Tags: null,
    Alcoholic: false,
    Glass: "Collins Glass",
    Instructions:
      "Add 1/4 cup water to ginger root. Boil 3 minutes. Strain. Add the liquid to the guava, lemon and pineapple juices. Make a syrup of sugar and remaining water. Cool. Combine with juices and pineapple. Chill throroughly.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/wsyvrt1468876267.jpg",
    Ingredients:[ "Water", "Ginger", "Guava juice","Lemon juice", "Pineapple", "Sugar", "Pineapple juice"],
    Measures:[ "3/4 cup ", "2 tsp ", "2 cups ", "1 1/2 tblsp ", "1 1/2 cup ", "1 cup ", "3-4 cups "],
    Date: "2016-07-18 22:11:07",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Apple Cider Punch #1",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions:
      "If you use the whole all spice and cloves, tie them in cheesecloth. Heat the mixture. Stir occasionally. If you want an alcoholic drink, rum would be nice.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/xrqxuv1454513218.jpg",
    Ingredients:[ "Apple cider", "Brown sugar", "Lemonade","Orange juice", "Cloves", "Allspice", "Nutmeg", "Cinnamon"],
    Measures:[ "4 qt ", "1 cup ", "6 oz frozen ", "6 oz frozen ", "6 whole ", "6 whole ", "1 tsp ground ", "3 sticks "],
    Date: "2016-02-03 15:26:58",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Artillery Punch",
    Tags: null,
    Alcoholic: true,
    Glass: "Punch bowl",
    Instructions:
      "Combine all the ingredients in a large punch bowl with a block of ice. If found too dry, sugar syrup may be added. Decorate with twists of lemon peel.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/9a4vqb1493067692.jpg",
    Ingredients:[ "Tea", "Rye whiskey", "Red wine","Rum", "Brandy", "Benedictine", "Orange juice", "Lemon juice"],
    Measures:[ "1 quart black ", "1 quart ", "1 fifth ", "1 pint Jamaican ", "1/2 pint ", "1 1/2 oz ", "1 pint ", "1/2 pint "],
    Date: "2017-04-24 22:01:32",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Berry Deadly",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions:
      "Add all ingredients to large bowl. Stir gently. Serve chilled.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/xqutpr1461867477.jpg",
    Ingredients:[ "Everclear", "Wine", "Orange juice","Kool-Aid"],
    Measures:[ "2 pint ", "1 bottle Boone Strawberry Hill ", "1/2 gal ", "1 gal Tropical Berry "],
    Date: "2016-04-28 19:17:57",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Cranberry Punch",
    Tags: null,
    Alcoholic: false,
    Glass: "Punch Bowl",
    Instructions:
      "Combine first four ingredients. Stir until sugar is dissolved, chill. Then add ginger ale just before serving. Add ice ring to keep punch cold.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/mzgaqu1504389248.jpg",
    Ingredients:[ "Cranberry juice", "Sugar", "Pineapple juice","Almond flavoring", "Ginger ale"],
    Measures:[ "4 cups ", "1 1/2 cup ", "4 cups ", "1 tblsp ", "2 qt "],
    Date: "2017-09-02 22:54:08",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Egg Nog #4",
    Tags: null,
    Alcoholic: true,
    Glass: "Punch bowl",
    Instructions:
      "In a small mixer bowl beat egg yolks till blended. Gradually add 1/4 cup sugar, beating at high speed till thick and lemon colored. Stir in milk, stir in rum, bourbon, vanilla, and salt. Chill thoroughly. Whip cream. Wash beaters well. In a large mixer bowl beat egg whites till soft peaks form. Gradually add remaining 1/4 cup sugar, beating to stiff peaks. Fold yolk mixture and whipped cream into egg whites. Serve immediately. Sprinkle nutmeg over each serving. Serve in a punch bowl or another big bowl. NOTE: For a nonalcoholic eggnog, prepare Eggnog as above, except omit the bourbon and rum and increase the milk to 3 cups.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/wpspsy1468875747.jpg",
    Ingredients:[ "Egg yolk", "Sugar", "Milk","Light rum", "Bourbon", "Vanilla extract", "Salt", "Whipping cream", "Egg white", "Sugar", "Nutmeg"],
    Measures:[ "6 ", "1/4 cup ", "2 cups ", "1/2 cup ", "1/2 cup ", "1 tsp ", "1/4 tsp ", "1 cup ", "6 ", "1/4 cup ", "Ground ", " "],
    Date: "2016-07-18 22:02:27",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Egg-Nog - Classic Cooked",
    Tags: null,
    Alcoholic: true,
    Glass: "Pitcher",
    Instructions:
      "In large saucepan, beat together eggs, sugar and salt, if desired. Stir in 2 cups of the milk. Cook over low heat, stirring constantly, until mixture is thick enough to coat a metal spoon and reaches 160 degrees F. Remove from heat. Stir in remaining 2 cups milk and vanilla. Cover and regfigerate until thoroughly chilled, several hours or overnight. Just before serving, pour into bowl or pitcher. Garnish or add stir-ins, if desired. Choose 1 or several of: Chocolate curls, cinnamon sticks, extracts of flavorings, flavored brandy or liqueur, fruit juice or nectar, ground nutmeg, maraschino cherries, orange slices, peppermint sticks or candy canes, plain brandy, run or whiskey, sherbet or ice-cream, whipping cream, whipped. Serve immediately.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/quxsvt1468875505.jpg",
    Ingredients:[ "Egg", "Sugar", "Salt","Milk", "Vanilla extract"],
    Measures:[ "6 ", "1/4 cup ", "1/4 tsp ", "1 qt ", "1 tsp "],
    Date: "2016-07-18 21:58:25",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Egg Nog - Healthy",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions:
      "Whip egg substitute and sugar together, combine with the two kinds of milk, vanilla, and rum. Mix well. Chill over night. Sprinkle with nutmeg. Makes 6 servings.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/qxuppv1468875308.jpg",
    Ingredients:[ "Egg", "Sugar", "Condensed milk","Milk", "Vanilla extract", "Rum", "Nutmeg"],
    Measures:[ "1/2 cup ", "3 tblsp ", "13 oz skimmed ", "3/4 cup skimmed ", "1 tsp ", "1 tsp "],
    Date: "2016-07-18 21:55:08",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Gluehwein",
    Tags: null,
    Alcoholic: true,
    Glass: "Irish coffee cup",
    Instructions:
      "Boil sugar and spices in water, leave in the water for 30 minutes. Strain the spiced water and mix with the wine. Heat slowly until short of boiling temperature. (To remove alcohol, let it boil for a while.) You may add lemon or orange juice to taste. Serve in irish coffee cup.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vuxwvt1468875418.jpg",
    Ingredients:[ "Red wine", "Water", "Sugar","Cinnamon", "Cloves", "Lemon peel"],
    Measures:[ "1 L ", "125 ml ", "60 gr ", "1 ", "3 ", "1 tblsp "],
    Date: "2016-07-18 21:56:58",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Holloween Punch",
    Tags: null,
    Alcoholic: false,
    Glass: "Punch bowl",
    Instructions:
      'Take a bunch of grape juice and a bunch of fizzy stuff (club soda, ginger ale, lemonlime, whatever). Mix them in a punch bowl. Take orange sherbet and lime sherbet. Scoop out scoops and float them in the punch, let them melt a little so that a nasty film spreads all over the top of the punch but there are still "bubbles" in it in the form of sherbet scoops. Looks horrible, tastes just fine.',
    Image:
      "https://www.thecocktaildb.com/images/media/drink/lfeoe41504888925.jpg",
    Ingredients:[ "Grape juice", "Carbonated soft drink", "Sherbet","Sherbet"],
    Measures:[ "\n", ", orange\n"],
    Date: "2017-09-08 17:42:05",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Mulled Wine",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions:
      'Simmer 3 cups water with, sugar, cloves, cinnamon sticks, and lemon peel in a stainless steel pot for 10 minutes. Add wine heat to a "coffee temperature" (DO NOT BOIL) then add the brandy.',
    Image:
      "https://www.thecocktaildb.com/images/media/drink/iuwi6h1504735724.jpg",
    Ingredients:[ "Water", "Sugar", "Cloves","Cinnamon", "Lemon peel", "Red wine", "Brandy"],
    Measures:[ "3 cups ", "1 cup ", "12 ", "2 ", "1 ", "750 ml ", "1/4 cup "],
    Date: "2017-09-06 23:08:44",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Sangria #1",
    Tags: null,
    Alcoholic: true,
    Glass: "Pitcher",
    Instructions:
      "Mix all together in a pitcher and refrigerate. Add cloves and cinnamon sticks to taste. Serve in wine glasses.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/xrvxpp1441249280.jpg",
    Ingredients:[ "Red wine", "Sugar", "Orange juice","Lemon juice", "Cloves", "Cinnamon"],
    Measures:[ "1 bottle ", "1/2 cup ", "1 cup ", "1 cup "],
    Date: "2015-09-03 04:01:20",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Sweet Sangria",
    Tags: null,
    Alcoholic: true,
    Glass: "Pitcher",
    Instructions:
      "Dissolve the sugar in hot water and cool. Peel the citrus fruits and break into wedges. Mix the wine, sugar syrup, fruit, and Fresca in a pitcher and put in the fridge for a few hours. Serve in tall glasses with a straw.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/uqqvsp1468924228.jpg",
    Ingredients:[ "Red wine", "Sugar", "Water","Apple", "Orange", "Lime", "Lemon", "Fresca"],
    Measures:[ "2 bottles ", "1 cup ", "2 cups hot ", "1 cup ", " wedges\n", " wedges\n"],
    Date: "2016-07-19 11:30:28",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Sangria - The World's Best",
    Tags: null,
    Alcoholic: true,
    Glass: "Pitcher",
    Instructions:
      "Mix wine, sugar and fruit, and let sit in the fridge for 18-24 hours. The mixture will have a somewhat syrupy consistency. Before serving stir in brandy and cut the mixture with soda water until it have a thinner, more wine Like consistency. Serve from a pitcher in wine glasses.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vysywu1468924264.jpg",
    Ingredients:[ "Red wine", "Sugar", "Lemon","Orange", "Apple", "Brandy", "Soda water"],
    Measures:[ "1 1/2 L ", "1 cup ", "1 large ", "1 large ", "1 large ", "3-4 oz plain "],
    Date: "2016-07-19 11:31:04",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Spiced Peach Punch",
    Tags: null,
    Alcoholic: false,
    Glass: "Collins Glass",
    Instructions:
      "Combine peach nectar, orange juice and brown sugar in a large saucepan. Tie cinnamon and cloves in a small cheesecloth bag. Drop into saucepan. Heat slowly, stirring constantly, until sugar dissolves. Simmer 10 minutes. Stir in lime juice. Serve in hot mugs.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/qxvypq1468924331.jpg",
    Ingredients:[ "Peach nectar", "Orange juice", "Brown sugar","Cinnamon", "Cloves", "Lime juice"],
    Measures:[ "46 oz ", "20 oz ", "1/2 cup ", "3 3-inch ", "1/2 tsp ", "2 tblsp "],
    Date: "2016-07-19 11:32:11",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Strawberry Lemonade",
    Tags: null,
    Alcoholic: false,
    Glass: "Collins Glass",
    Instructions:
      "Throw everything into a blender and mix until fairly smooth. Serve over ice.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/spvvxp1468924425.jpg",
    Ingredients:[ "Lemon", "Sugar", "Strawberries","Water"],
    Measures:[ "Juice of 1 ", "1 tblsp ", "8-10 ripe ", "1 cup "],
    Date: "2016-07-19 11:33:45",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Sunny Holiday Punch",
    Tags: null,
    Alcoholic: true,
    Glass: "Punch bowl",
    Instructions: "Combine all ingredients in a punch bowl.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/rywtwy1468924758.jpg",
    Ingredients:[ "Pineapple juice", "Club soda", "Orange juice","Lemon", "Berries", "Champagne"],
    Measures:[ "46 oz chilled ", "28 oz ", "6 oz frozen ", "1 ", "2 cups ", "1 bottle "],
    Date: "2016-07-19 11:39:18",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Wine Cooler",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions: "Mix wine and soft drink. Pour into glass. Add ice.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/yutxtv1473344210.jpg",
    Ingredients:[ "Red wine", "Lemon-lime soda", "Ice",""],
    Measures:[ "2 oz white or ", "5 oz ", " cubes\n"],
    Date: "2016-09-08 15:16:50",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Wine Punch",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions:
      "Combine all of the ingredients and pour over a block of ice.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/txustu1473344310.jpg",
    Ingredients:[ "Red wine", "Lemon", "Orange juice","Orange", "Pineapple juice"],
    Measures:[ "1 bottle ", "2 ", "1 cup ", "3 ", "1 cup "],
    Date: "2016-09-08 15:18:30",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Bruce's Puce",
    Tags: null,
    Alcoholic: true,
    Glass: "Shot glass",
    Instructions:
      "In a regular-sized shot glass, layer, with a spoon or cherry, the grenadine , the Kahlua , then the Bailey's Irish cream in equal portions. It goes down really smooth ,and you don't even need a chaser. It tastes just Like chocolate milk.(Really!)",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/svsvqv1473344558.jpg",
    Ingredients:[ "Grenadine", "Kahlua", "Bailey's irish cream",""],
    Measures:[],
    Date: "2016-09-08 15:22:38",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Brave Bull Shooter",
    Tags: null,
    Alcoholic: true,
    Glass: "Shot glass",
    Instructions:
      "Pour Tabasco into bottom of shot glass and fill with tequila.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/yrtypx1473344625.jpg",
    Ingredients:[ "Tequila", "Tabasco sauce",""],
    Measures:[ "1/2 oz ", "1/2 oz "],
    Date: "2016-09-08 15:23:45",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Fahrenheit 5000",
    Tags: null,
    Alcoholic: true,
    Glass: "Shot glass",
    Instructions:
      "Cover bottom of shot glass with Tabasco Sauce and then fill with half Firewater and half Absolut Peppar.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/tysssx1473344692.jpg",
    Ingredients:[ "Firewater", "Absolut Peppar", "Tabasco sauce",""],
    Measures:[ "1/2 oz ", "1/2 oz ", "1 dash "],
    Date: "2016-09-08 15:24:52",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Popped cherry",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Served over ice in a tall glass with a popped cherry (can add more popped cherries if in the mood)!",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/sxvrwv1473344825.jpg",
    Ingredients:[ "Vodka", "Cherry liqueur", "Cranberry juice","Orange juice"],
    Measures:[ "2 oz ", "2 oz ", "4 oz ", "4 oz "],
    Date: "2016-09-08 15:27:05",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Atomic Lokade",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions:
      "In a shaker, place lemonade, vodka, blue Curacao, and triple sec together. Shake with ice and strain into glass. Add sugar to taste",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/n3zfrh1493067412.jpg",
    Ingredients:[ "Lemonade", "Vodka", "Blue Curacao","Triple sec", "Sugar", "Ice"],
    Measures:[ "5 oz ", "1 oz ", "1/2 oz ", "1/2 oz "],
    Date: "2017-04-24 21:56:52",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Diesel",
    Tags: null,
    Alcoholic: true,
    Glass: "Pint glass",
    Instructions:
      "Pour the lager first then add the blackcurrant cordial. Top up with the cider. The colour sholud be very dark approaching the colour of Guiness.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/sxrrqq1454512852.jpg",
    Ingredients:[ "Lager", "Cider", "Blackcurrant cordial",""],
    Measures:[ "1/2 pint ", "1/2 pint ", "1 dash "],
    Date: "2016-02-03 15:20:52",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Afternoon",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions:
      "Build into a suiting glass, with no ice. Cream on top if wanted. Served directly.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vyrurp1472667777.jpg",
    Ingredients:[ "Kahlua", "Bailey's irish cream", "Frangelico","Coffee", "Cream"],
    Measures:[ "1 cl ", "1 cl ", "1 1/2 ", "4 cl hot "],
    Date: "2016-08-31 19:22:57",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Kool-Aid Shot",
    Tags: null,
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "Pour into a large glass with ice and stir. Add a little cranberry juice to taste.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/fegm621503564966.jpg",
    Ingredients:[ "Vodka", "Amaretto", "Sloe gin","Triple sec", "Cranberry juice"],
    Measures:[ "1 shot ", "1 shot ", "1 shot ", "1 shot "],
    Date: "2017-08-24 09:56:06",
    isPublic: true,
    Like: 0
  },
  {
    Name: "National Aquarium",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions:
      "Pour all ingredients into a shaker of ice. Shake well. Serve on the rocks.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/dlw0om1503565021.jpg",
    Ingredients:[ "Rum", "Vodka", "Gin","Blue Curacao", "Sour mix", "Lemon-lime soda"],
    Measures:[ "1/2 oz ", "1/2 oz ", "1/2 oz ", "1/2 oz ", "2 oz ", "1 splash "],
    Date: "2017-08-24 09:57:01",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Damned if you do",
    Tags: null,
    Alcoholic: true,
    Glass: "Shot glass",
    Instructions:
      "Pour into shot glass. Put in mouth. Repeat as deemed necessary.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/ql7bmx1503565106.jpg",
    Ingredients:[ "Whiskey", "Hot Damn",""],
    Measures:[ "0.75 oz ", "0.25 oz "],
    Date: "2017-08-24 09:58:26",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Long vodka",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Shake a tall glass with ice cubes and Angostura, coating the inside of the glass. Por the vodka onto this, add 1 slice of lime and squeeze juice out of remainder, mix with tonic, stir and voila you have a Long Vodka",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/9179i01503565212.jpg",
    Ingredients:[ "Vodka", "Lime", "Angostura bitters","Tonic water", "Ice"],
    Measures:[ "5 cl ", "1/2 ", "4 dashes ", "1 dl Schweppes ", "4 "],
    Date: "2017-08-24 10:00:12",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Quick F**K",
    Tags: null,
    Alcoholic: true,
    Glass: "Shot glass",
    Instructions:
      "In a shot glass add 1/3 Kahlua first. Then 1/3 Miduri, topping it off with a 1/3 bailey's irish cream",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/wvtwpp1478963454.jpg",
    Ingredients:[ "Kahlua", "Midori melon liqueur", "Bailey's irish cream",""],
    Measures:[ "1 part ", "1 part ", "1 part "],
    Date: "2016-11-12 15:10:54",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Owen's Grandmother's Revenge",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions: "Add ingredients and mix in blender.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/0wt4uo1503565321.jpg",
    Ingredients:[ "Whiskey", "Beer", "Lemonade","Ice"],
    Measures:[ "12 oz ", "12 oz ", "12 oz frozen ", "1 cup crushed "],
    Date: "2017-08-24 10:02:02",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Flaming Dr. Pepper",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions:
      "Add Amaretto, Bacardi, and vodka. Mix in the Dr. Pepper and beer",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/d30z931503565384.jpg",
    Ingredients:[ "Amaretto", "Vodka", "151 proof rum","Dr. Pepper", "Beer"],
    Measures:[ "1 oz ", "1 oz ", "1 oz Bacardi ", "1 oz ", "1 oz "],
    Date: "2017-08-24 10:03:04",
    isPublic: true,
    Like: 0
  },
  {
    Name: "New York Lemonade",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Serve in a chilled cocktail glass. Lemon and sugar the rim. Stir and Strain.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/b3n0ge1503565473.jpg",
    Ingredients:[ "Absolut Citron", "Grand Marnier", "Lemon juice","Club soda"],
    Measures:[ "2 oz ", "1 oz ", "2 oz sweetened ", "1 oz "],
    Date: "2017-08-24 10:04:33",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Caipirissima",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions:
      "Same as Caipirinha but instead of cachaca you add WHITE RUM. It's great!!!!!!!!",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/yd47111503565515.jpg",
    Ingredients:[ "Lime", "Sugar", "White rum","Ice"],
    Measures:[ "2 ", "2 tblsp ", "2-3 oz ", "crushed "],
    Date: "2017-08-24 10:05:15",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Pisco Sour",
    Tags: "IBA,NewEra",
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Vigorously shake and strain contents in a cocktail shaker with ice cubes, then pour into glass and garnish with bitters.[1]",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/tsssur1439907622.jpg",
    Ingredients:[ "Pisco", "Lemon juice", "Sugar","Ice"],
    Measures:[ "2 oz ", "1 oz ", "1-2 tblsp "],
    Date: "2015-08-18 15:20:22",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Big Red",
    Tags: null,
    Alcoholic: true,
    Glass: "Shot glass",
    Instructions: "Pour ingredients into 1 ounce shot glass",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/yqwuwu1441248116.jpg",
    Ingredients:[ "Irish cream", "Goldschlager",""],
    Measures:[ "1/2 oz ", "1/2 oz "],
    Date: "2015-09-03 03:41:56",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Black & Tan",
    Tags: null,
    Alcoholic: true,
    Glass: "Pint glass",
    Instructions:
      "Fill pint glass half full with Bass. Next pour Guiness over a spoon slowly until glass is full. If done correctly the Guiness will stay on top and the Bass on bottom hence the Name: Black & Tan.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/rwpswp1454511017.jpg",
    Ingredients:[ "Ale", "Guinness stout",""],
    Measures:[ "1 part Bass pale ", "1 part "],
    Date: "2016-02-03 14:50:17",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Chocolate Milk",
    Tags: null,
    Alcoholic: true,
    Glass: "Shot Glass",
    Instructions:
      "Put the milk in the bottom, pour the Liquer on top and add the dash of amaretto. Do not mix. SLAM IT!",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/j6q35t1504889399.jpg",
    Ingredients:[ "Chocolate liqueur", "Milk", "Amaretto",""],
    Measures:[ "1/2 shot ", "1/2 shot ", "1 dash "],
    Date: "2017-09-08 17:49:59",
    isPublic: true,
    Like: 0
  },
  {
    Name: "B-53",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions:
      "Layer the Kahlua, Sambucca and Grand Marnier into a shot glas in that order. Better than B-52",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/rwqxrv1461866023.jpg",
    Ingredients:[ "Kahlua", "Sambuca", "Grand Marnier",""],
    Measures:[ "1/3 shot ", "1/3 shot ", "1/3 shot "],
    Date: "2016-04-28 18:53:43",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Sea breeze",
    Tags: "IBA,ContemporaryClassic",
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Build all ingredients in a highball glass filled with ice. Garnish with lime wedge.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/7rfuks1504371562.jpg",
    Ingredients:[ "Vodka", "Cranberry juice", "Grapefruit juice",""],
    Measures:[ "1 1/2 oz ", "4 oz ", "1 oz "],
    Date: "2017-09-02 17:59:22",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Snake Bite (UK)",
    Tags: null,
    Alcoholic: true,
    Glass: "Pint glass",
    Instructions: "Pour ingredients into a pint glass. Drink. Fall over.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/xuwpyu1441248734.jpg",
    Ingredients:[ "Lager", "Cider",""],
    Measures:[ "1/2 pint ", "1/2 pint sweet or dry "],
    Date: "2015-09-03 03:52:14",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Bob Marley",
    Tags: null,
    Alcoholic: true,
    Glass: "Shot glass",
    Instructions: "Layer in a 2 oz shot glass or pony glass",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/rrqrst1477140664.jpg",
    Ingredients:[ "Midori melon liqueur", "J\u00e4germeister", "Goldschlager",""],
    Measures:[ "1/2 oz ", "1/2 oz ", "1/2 oz "],
    Date: "2016-10-22 13:51:04",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Brainteaser",
    Tags: null,
    Alcoholic: true,
    Glass: "Shot Glass",
    Instructions:
      "layered erin first, then sambuca and then avocart(should sit in middle of other two. To drink: use a straw to suck up avocart then shot the rest and then suck fumes up through straw.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/ruywtq1461866066.jpg",
    Ingredients:[ "Sambuca", "Erin Cream", "Advocaat",""],
    Measures:[ "30 ml white ", "30 ml ", "5 ml "],
    Date: "2016-04-28 18:54:26",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Atlantic Sun",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions:
      "Shake all the ingredients, top the drink with soda. Garnish with a slice of orange.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/doyxqb1493067556.jpg",
    Ingredients:[ "Vodka", "Southern Comfort", "Passion fruit syrup","Sweet and sour", "Club soda"],
    Measures:[ "2 cl Smirnoff ", "2 cl ", "2 cl ", "6 cl ", "1 dash "],
    Date: "2017-04-24 21:59:16",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Green Goblin",
    Tags: null,
    Alcoholic: true,
    Glass: "Pint glass",
    Instructions: "Cider First, Lager then Curacao",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/qxprxr1454511520.jpg",
    Ingredients:[ "Cider", "Lager", "Blue Curacao",""],
    Measures:[ "1/2 pint hard ", "1/2 pint ", "1 shot "],
    Date: "2016-02-03 14:58:40",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Oreo Mudslide",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions:
      "Blend Vodka, Kahlua, Bailey's, ice-cream and the Oreo well in a blender. Pour into a large frosted glass. Garnish with whipped cream and a cherry.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/tpwwut1468925017.jpg",
    Ingredients:[ "Vodka", "Kahlua", "Bailey's irish cream","Vanilla ice-cream", "Oreo cookie"],
    Measures:[ "1 oz ", "1 oz ", "1 oz ", "2 scoops ", "1 "],
    Date: "2016-07-19 11:43:37",
    isPublic: true,
    Like: 0
  },
  {
    Name: "ABC",
    Tags: null,
    Alcoholic: true,
    Glass: "Shot glass",
    Instructions: "Layered in a shot glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg",
    Ingredients:[ "Amaretto", "Bailey's irish cream", "Cognac",""],
    Measures:[ "1/3 ", "1/3 ", "1/3 "],
    Date: "2016-08-31 19:32:08",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Pink Panty Pulldowns",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions: "Shake well",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/squsuy1468926657.jpg",
    Ingredients:[ "Sprite", "Pink lemonade", "Vodka",""],
    Measures:[ "1 L ", "2 cups ", "2 cups "],
    Date: "2016-07-19 12:10:57",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Ice Pick #1",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions:
      "Put Vodka in glass fill with iced tea. Stir in lemon to taste.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/ypsrqp1469091726.jpg",
    Ingredients:[ "Vodka", "Iced tea", "Lemon juice",""],
    Measures:[ "1 1/2 oz ", "6 oz ", " to taste\n"],
    Date: "2016-07-21 10:02:06",
    isPublic: true,
    Like: 0
  },
  {
    Name: "410 Gone",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions:
    Image:
      "https://www.thecocktaildb.com/images/media/drink/xtuyqv1472669026.jpg",
    Ingredients:[ "Peach Vodka", "Coca-Cola",""],
    Measures:[ "2-3 oz"],
    Date: "2016-08-31 19:43:46",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Tequila Sunrise",
    Tags: "IBA,ContemporaryClassic",
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Pour the tequila and orange juice into glass over ice. Add the grenadine, which will sink to the bottom. Stir gently to create the sunrise effect. Garnish and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/quqyqp1480879103.jpg",
    Ingredients:[ "Tequila", "Orange juice", "Grenadine",""],
    Measures:[ "2 measures "],
    Date: "2016-12-04 19:18:23",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Screaming Orgasm",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Pour first vodka, then Bailey's, then Kahlua into a cocktail glass over crushed ice. Stir. Caution: use only high quality vodka. Cheap vodka can cause the Bailey's to curdle. Test your brand of vodka by mixing 1 Tsp each of vodka and Bailey's first.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/x894cs1504388670.jpg",
    Ingredients:[ "Vodka", "Bailey's irish cream", "Kahlua",""],
    Measures:[ "1 oz ", "1 1/2 oz ", "1/2 oz "],
    Date: "2017-09-02 22:44:30",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Flander's Flake-Out",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions: "Bang 'em both in.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/sqvqrx1461866705.jpg",
    Ingredients:[ "Sambuca", "Sarsaparilla",""],
    Measures:[ "1/4 glass ", "3/4 glass "],
    Date: "2016-04-28 19:05:05",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Apple Slammer",
    Tags: null,
    Alcoholic: true,
    Glass: "Shot glass",
    Instructions:
      "pour into a shot glass and present to consumer, they are expected to cover the top of the shotglass with thier palm, raise the glass, slam it on the bar and the swallow quickly.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/09yd5f1493069852.jpg",
    Ingredients:[ "7-Up", "Apple schnapps",""],
    Measures:[ "1 part ", "1 part "],
    Date: "2017-04-24 22:37:32",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Amaretto Sour",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions:
      "Shake and strain. Garnish with a cherry and an orange slice.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/xnzc541493070211.jpg",
    Ingredients:[ "Amaretto", "Sour mix",""],
    Measures:[ "1 1/2 oz ", "3 oz "],
    Date: "2017-04-24 22:43:32",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Cuba Libra",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Fill tall glass with ice cubes. Add rum. Rub cut edge of lime on rim of glass then squeeze juice into glass. Fill with Coca-Cola. Garnish with lime slice. Enjoy!",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/ck6d0p1504388696.jpg",
    Ingredients:[ "Dark rum", "Lime", "Coca-Cola","Ice"],
    Measures:[ "1-2 shot ", "Squeeze ", "Fill with "],
    Date: "2017-09-02 22:44:56",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Jelly Bean",
    Tags: null,
    Alcoholic: true,
    Glass: "Cordial glass",
    Instructions:
      "mix equal parts in pony glass-tastes just Like a jelly bean!",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/bglc6y1504388797.jpg",
    Ingredients:[ "Blackberry brandy", "Anis",""],
    Measures:[ "1 oz ", "1 oz "],
    Date: "2017-09-02 22:46:37",
    isPublic: true,
    Like: 0
  },
  {
    Name: "After Five",
    Tags: null,
    Alcoholic: true,
    Glass: "Shot glass",
    Instructions:
      "1. Pour Kahlua into shot glass to about 1/2 full. 2. Using a spoon(inverted), slowly pour in the Peppermint Schnapps until glass is about 3/4 full. Done correctly, the Schnapps will flow under the Kahlua for a clear layer. 3. Again using a spoon, but this time right side up, slowly top off the glass with a layer of Bailey's. Be careful to place the spoon right at the top of the Kahlua layer and to raise it as the glass fills up. Done correctly, this will provide a layer of Bailey's floating over the Kahlua. 4. Toss it down all at once for something Like a Peppermint Pattie, WITH A BANG!!! NOTE: Best if all ingredients are chilled",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/sk3lr91493068595.jpg",
    Ingredients:[ "Peppermint schnapps", "Kahlua", "Bailey's irish cream",""],
    Measures:[],
    Date: "2017-04-24 22:16:35",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Midnight Manx",
    Tags: null,
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "Fill a mixer with ice and add Baileys, Kahlua, Goldshlager, and cream. Shake for 5 seconds and Strain into a double rocks glass filled with ice. Add chilled coffee Stir and enjoy!",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/uqqurp1441208231.jpg",
    Ingredients:[ "Kahlua", "Bailey's irish cream", "Goldschlager","Heavy cream", "Coffee"],
    Measures:[ "1 oz ", "1 oz ", "dash ", "2 oz ", "2 oz Hazlenut "],
    Date: "2015-09-02 16:37:11",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Kir Royale",
    Tags: null,
    Alcoholic: true,
    Glass: "Champagne Flute",
    Instructions: "Pour Creme de cassis in glass, gently pour champagne on top",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/yt9i7n1504370388.jpg",
    Ingredients:[ "Creme de Cassis", "Champagne",""],
    Measures:[ "1 part ", "5 parts "],
    Date: "2017-09-02 17:39:48",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Jackhammer",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions: "Serve over ice- Warning,Deadly!",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/9von5j1504388896.jpg",
    Ingredients:[ "Jack Daniels", "Amaretto",""],
    Measures:[ "1 oz ", "1 oz "],
    Date: "2017-09-02 22:48:16",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Nutty Irishman",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball Glass",
    Instructions: "Serve over ice",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/xspupx1441248014.jpg",
    Ingredients:[ "Bailey's irish cream", "Frangelico", "Milk",""],
    Measures:[ "1 part ", "1 part ", "1 part "],
    Date: "2015-09-03 03:40:14",
    isPublic: true,
    Like: 0
  },
  {
    Name: "3 Wise Men",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins glass",
    Instructions: "put them them in a glass... and slam it to tha head.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/wxqpyw1468877677.jpg",
    Ingredients:[ "Jack Daniels", "Johnnie Walker", "Jim Beam",""],
    Measures:[ "1/3 oz ", "1/3 oz ", "1/3 oz "],
    Date: "2016-07-18 22:34:37",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Miami Vice",
    Tags: "IBA",
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "First: Mix pina colada with 2.5 oz. of rum with ice(set aside). Second: Mix daiquiri with 2.5 oz. of rum with ice. Third: While frozen, add pina colda mix then daiquiri mix in glass (Making sure they do not get mixed together).",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/qvuyqw1441208955.jpg",
    Ingredients:[ "151 proof rum", "Pina colada mix", "Daiquiri mix",""],
    Measures:[ "5 oz Bacardi ", "frozen ", "frozen "],
    Date: "2015-09-02 16:49:15",
    isPublic: true,
    Like: 0
  },
  {
    Name: "AT&T",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball Glass",
    Instructions: "Pour Vodka and Gin over ice, add Tonic and Stir",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/rhhwmp1493067619.jpg",
    Ingredients:[ "Absolut Vodka", "Gin", "Tonic water",""],
    Measures:[ "1 oz ", "1 oz ", "4 oz "],
    Date: "2017-04-24 22:00:19",
    isPublic: true,
    Like: 0
  },
  {
    Name: "69 Special",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions:
      "Pour 2 oz. gin. Add 4 oz. 7-up. Add Lemon Juice for flavor. If you are weak, top up glass with more 7-Up.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vqyxqx1472669095.jpg",
    Ingredients:[ "Gin", "7-Up", "Lemon juice",""],
    Measures:[ "2 oz dry ", "4 oz ", "0.75 oz "],
    Date: "2016-08-31 19:44:55",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Irish Coffee",
    Tags: "IBA,ContemporaryClassic",
    Alcoholic: true,
    Glass: "Irish coffee cup",
    Instructions:
      "Heat the coffee, whiskey and sugar; do not boil. Pour into glass and top with cream; serve hot.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/sywsqw1439906999.jpg",
    Ingredients:[ "Irish whiskey", "Coffee", "Sugar","Whipped cream"],
    Measures:[ "1 1/2 oz ", "8 oz ", "1 tsp ", "1 tblsp "],
    Date: "2015-08-18 15:09:59",
    isPublic: true,
    Like: 0
  },
  {
    Name: "'57 Chevy with a White License Plate",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "1. Fill a rocks glass with ice 2.add white creme de cacao and vodka 3.stir",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/qyyvtu1468878544.jpg",
    Ingredients:[ "Creme de Cacao", "Vodka",""],
    Measures:[ "1 oz white ", "1 oz "],
    Date: "2016-07-18 22:49:04",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Mother's Milk",
    Tags: null,
    Alcoholic: true,
    Glass: "Shot glass",
    Instructions: "Shake over ice, strain. Serves two.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/7stuuh1504885399.jpg",
    Ingredients:[ "Goldschlager", "Butterscotch schnapps", "Milk",""],
    Measures:[ "1 oz ", "1 oz ", "1 oz "],
    Date: "2017-09-08 16:43:19",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Zippy's Revenge",
    Tags: null,
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "Mix Kool-Aid to taste then add Rum and ammaretto. shake well to disolve the sugar in the Kool-Aid... serve cold",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/1sqm7n1485620312.jpg",
    Ingredients:[ "Amaretto", "Rum", "Kool-Aid",""],
    Measures:[ "2 oz ", "2 oz ", "4 oz Grape "],
    Date: "2017-01-28 16:18:33",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Belgian Blue",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions: "Just pour all ingredients in the glass and stir...",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/rttsxw1441245419.jpg",
    Ingredients:[ "Vodka", "Coconut liqueur", "Blue Curacao","Sprite"],
    Measures:[ "2 cl ", "1 cl ", "1 cl ", "Fill with "],
    Date: "2015-09-03 02:56:59",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Red Snapper",
    Tags: null,
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions: "One shot each, shake n shoot",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/7p607y1504735343.jpg",
    Ingredients:[ "Crown Royal", "Amaretto", "Cranberry juice",""],
    Measures:[ "1 shot ", "1 shot ", "1 shot "],
    Date: "2017-09-06 23:02:23",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Jamaica Kiss",
    Tags: null,
    Alcoholic: true,
    Glass: "Hurricane glass",
    Instructions:
      "Fill a tumbler with ice cubes. Add a shot of Tia Maria and a shot of Jamaican light rum. Fill the tumbler with milk. Blend until smooth and serve immediately.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/urpvvv1441249549.jpg",
    Ingredients:[ "Coffee liqueur", "Light rum", "Ice","Milk"],
    Measures:[ "1 shot ", "1 shot Jamaican ", " cubes\n"],
    Date: "2015-09-03 04:05:49",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Absolut Summertime",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins glass",
    Instructions:
      "Add all ingredients except lemon to shaker filled with ice. Cover and shake vigorously. Strain contents into ice filled collins glass. Garnish with lemon.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/trpxxs1472669662.jpg",
    Ingredients:[ "Absolut Citron", "Sweet and sour", "Sprite","Soda water", "Lemon"],
    Measures:[ "1 1/2 oz ", "3/4 oz ", "1/2 oz ", "3 oz ", "1 slice "],
    Date: "2016-08-31 19:54:22",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Cosmopolitan Martini",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail Glass",
    Instructions:
      "Pour all ingredients in mixing glass half filled with ice, shake and strain into chilled Martini glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/upxxpq1439907580.jpg",
    Ingredients:[ "Cointreau", "Vodka", "Lime","Cranberry juice"],
    Measures:[ "1/2 oz ", "1 oz ", "Juice of 1/2 ", "1 splash "],
    Date: "2015-08-18 15:19:40",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Ziemes Martini Apfelsaft",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions:
      "Serve without ice. At least the juice shold have room temperature.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/xnzr2p1485619687.jpg",
    Ingredients:[ "Vermouth", "Apple juice",""],
    Measures:[ "4 cl ", "16 cl "],
    Date: "2017-01-28 16:08:07",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Vodka Martini",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Shake the vodka and vermouth together with a number of ice cubes, strain into a cocktail glass, add the olive and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/qyxrqw1439906528.jpg",
    Ingredients:[ "Vodka", "Dry Vermouth", "Olive",""],
    Measures:[ "1 1/2 oz ", "3/4 oz ", "1 "],
    Date: "2015-08-18 15:02:08",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Cafe Savoy",
    Tags: null,
    Alcoholic: true,
    Glass: "Coffee mug",
    Instructions:
      "Fill mug almost to top with coffee.Add milk, triple sec and brandy. Stir.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vqwptt1441247711.jpg",
    Ingredients:[ "Coffee", "Milk", "Triple sec","Brandy"],
    Measures:[ "\n", "1/2 oz ", "1/2 oz "],
    Date: "2015-09-03 03:35:11",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Snowball",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Place one ice cube in the glass and add 1 1/2 oz of Advocaat. Fill up the glass with lemonade and decorate with a slice of lemon. Serve at once.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/7ibfs61504735416.jpg",
    Ingredients:[ "Advocaat", "Lemonade", "Lemon","Ice"],
    Measures:[ "1 1/2 oz ", "8-10 oz cold ", "1 slice ", " cubes\n"],
    Date: "2017-09-06 23:03:36",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Mocha-Berry",
    Tags: null,
    Alcoholic: true,
    Glass: "Irish coffee cup",
    Instructions:
      "pour 6 oz. of coffee in a mug or Irish coffee cup. add coca mix and chambord, mix well and top off with whipped cream.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vtwyyx1441246448.jpg",
    Ingredients:[ "Coffee", "Chambord raspberry liqueur", "Cocoa powder","Whipped cream"],
    Measures:[ "6 oz ", "2 oz ", "2 tblsp "],
    Date: "2015-09-03 03:14:08",
    isPublic: true,
    Like: 0
  },
  {
    Name: "747",
    Tags: null,
    Alcoholic: true,
    Glass: "Shot glass",
    Instructions:
      "pour kaluha, then Baileys, then Frangelico not chilled and not layered -- SERVE!!!",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/xxsxqy1472668106.jpg",
    Ingredients:[ "Kahlua", "Bailey's irish cream", "Frangelico",""],
    Measures:[ "1/3 part ", "1/3 part ", "1/3 part "],
    Date: "2016-08-31 19:28:26",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Addison Special",
    Tags: null,
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "Combine ingredients in the order listed into a shaker. Fill half full with ice and shake well. Strain into glass with ice and garnish with a cherry and orange wedge.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/4vo5651493068493.jpg",
    Ingredients:[ "Vodka", "Grenadine", "Orange juice",""],
    Measures:[ "1 shot ", "1 tblsp ", "Fill with "],
    Date: "2017-04-24 22:14:53",
    isPublic: true,
    Like: 0
  },
  {
    Name: "California Root Beer",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions: "Put Kahlua and Galliano in highball glass fill with soda",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/rsxuyr1472719526.jpg",
    Ingredients:[ "Kahlua", "Galliano", "Soda water",""],
    Measures:[ "3/4 oz ", "3/4 oz ", "Fill with "],
    Date: "2016-09-01 09:45:26",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Amaretto Stone Sour",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions: "Shake and Serve over ice",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/xwryyx1472719921.jpg",
    Ingredients:[ "Amaretto", "Sour mix", "Orange juice",""],
    Measures:[ "1 part ", "1 part ", "1 part "],
    Date: "2016-09-01 09:52:01",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Blind Russian",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins glass",
    Instructions: "Fill glass with ice. Add all liquers. Add milk. shake.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/wxuqvr1472720408.jpg",
    Ingredients:[ "Bailey's irish cream", "Godiva liqueur", "Kahlua","Butterscotch schnapps", "Milk"],
    Measures:[ "3/4 oz ", "3/4 oz ", "3/4 oz ", "1/2 oz ", " to fill\n"],
    Date: "2016-09-01 10:00:08",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Absolut Sex",
    Tags: null,
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "Shake Absolut Kurant, Midori, and Cranberry juice in shaker with ice: Strain into rocks glass: Splash of seven on top.Absolut Sex.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/xtrvtx1472668436.jpg",
    Ingredients:[ "Absolut Kurant", "Midori melon liqueur", "Cranberry juice","Sprite"],
    Measures:[ "3/4 oz ", "3/4 oz ", "1 oz ", "1 splash "],
    Date: "2016-08-31 19:33:56",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Aztec Punch",
    Tags: null,
    Alcoholic: true,
    Glass: "Punch bowl",
    Instructions:
      "Mix all ingredients in a pitcher. Mix thoroughly and pour into whatever is available, the bigger the better! This drink packs a big punch, so don't over do it.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/uqwuyp1454514591.jpg",
    Ingredients:[ "Lemonade", "Vodka", "Rum","Ginger ale"],
    Measures:[ "1 can ", "5 oz ", "7 oz ", "About 1 bottle "],
    Date: "2016-02-03 15:49:51",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Lemon Drop",
    Tags: "IBA,NewEra",
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Shake and strain into a chilled cocktail glass rimmed with sugar.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/mtpxgk1504373297.jpg",
    Ingredients:[ "Absolut Vodka", "Cointreau", "Lemon",""],
    Measures:[ "1 1/2 shot ", "1 1/2 shot ", "Juice of 1 wedge "],
    Date: "2017-09-02 18:28:17",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Absolut limousine",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions:
      "Fill Absolut into a glass. Add Lime juice. Add Ice and lime wedges.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/ssqpyw1472719844.jpg",
    Ingredients:[ "Absolut Citron", "Lime juice", "Ice","Tonic water"],
    Measures:[ "2/3 ", "1/3 ", "Fill with ", "Top it up with "],
    Date: "2016-09-01 09:50:44",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Absolut Evergreen",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions: "Mix, pour over ice and top up with Bitter Lemon.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/wrxrxp1472812609.jpg",
    Ingredients:[ "Absolut Citron", "Pisang Ambon", "Ice","Bitter lemon"],
    Measures:[ "2/3 part ", "1/3 part ", " cubes\n"],
    Date: "2016-09-02 11:36:49",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Lunch Box",
    Tags: null,
    Alcoholic: true,
    Glass: "Pint glass",
    Instructions:
      "Fill a pint glass almost full with beer. Then fill the rest with orange juice (careful not to fill it to the top). Then take the shot of Amaretto and drop it in.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/qywpvt1454512546.jpg",
    Ingredients:[ "Beer", "Amaretto", "Orange juice",""],
    Measures:[ "3/4 bottle ", "1 shot ", "1 oz "],
    Date: "2016-02-03 15:15:46",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Kool-Aid Slammer",
    Tags: null,
    Alcoholic: true,
    Glass: "Shot glass",
    Instructions:
      "Fill half the shot glass with the kool-aid first. Then put a paper towel over the top of the glass and slowly pour in the vodka. If you do it right, you should be able to see that the two liquids are separated, with the vodka on top. Now slam it! The last thing you'll taste is the kool-aid.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/kugu2m1504735473.jpg",
    Ingredients:[ "Kool-Aid", "Vodka",""],
    Measures:[ "1/2 oz Grape ", "1/2 oz "],
    Date: "2017-09-06 23:04:33",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Kurant Tea",
    Tags: null,
    Alcoholic: true,
    Glass: "Champagne flute",
    Instructions:
      "Pour Absolut Kurant into a comfortably big tea-cup. Add the not too hot(!) apple tea and, if you Like, some sugar. Enjoy!",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/xrsrpr1441247464.jpg",
    Ingredients:[ "Absolut Kurant", "Tea", "Sugar",""],
    Measures:[ "4 cl ", "Turkish apple ", " (if needed)\n"],
    Date: "2015-09-03 03:31:04",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Dirty Nipple",
    Tags: null,
    Alcoholic: true,
    Glass: "Shot glass",
    Instructions: "This is a layered shot - the Bailey's must be on top",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vtyqrt1461866508.jpg",
    Ingredients:[ "Kahlua", "Sambuca", "Bailey's irish cream",""],
    Measures:[],
    Date: "2016-04-28 19:01:49",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Darkwood Sling",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "There are many good cherry liqueurs you can use, but I prefere Heering. Add one share of the liqueur. Then you add one share of Soda. For a sour sling use Tonic (most people prefer the drink without Tonic). Afterwards you fill the glass with Orange Juice and ice cubes.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/sxxsyq1472719303.jpg",
    Ingredients:[ "Cherry Heering", "Soda water", "Orange juice","Ice"],
    Measures:[ "1 part ", "1 part ", "1 part ", " cubes\n"],
    Date: "2016-09-01 09:41:43",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Bailey's Dream Shake",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins glass",
    Instructions:
      "Blend ingredients for 30 seconds. Definitely refreshing for a hot summer's day !",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/qxrvqw1472718959.jpg",
    Ingredients:[ "Bailey's irish cream", "Vanilla ice-cream", "Cream",""],
    Measures:[ "2 oz ", "2 scoops "],
    Date: "2016-09-01 09:35:59",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Bumble Bee #1",
    Tags: null,
    Alcoholic: true,
    Glass: "Shot glass",
    Instructions:
      "This is a layered shot. First pour the Bailey's into the shot glass. Then take an upside down spoon and touch it to the inside wall of the glass. Carefully add the Kahlua. Repeat this process for the Sambuca. If done properly, the alcohol will stay separated and resemble a bumble bee. Enjoy!!!",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/uwqpvv1461866378.jpg",
    Ingredients:[ "Bailey's irish cream", "Kahlua", "Sambuca",""],
    Measures:[ "1/3 oz ", "1/3 oz ", "1/3 oz "],
    Date: "2016-04-28 18:59:38",
    isPublic: true,
    Like: 0
  },
  {
    Name: "A.D.M. (After Dinner Mint)",
    Tags: null,
    Alcoholic: true,
    Glass: "Irish coffee cup",
    Instructions: "shake vigorously",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/ruxuvp1472669600.jpg",
    Ingredients:[ "White Creme de Menthe", "Southern Comfort", "Vodka","Hot chocolate"],
    Measures:[ "1/2 oz ", "3/4 oz ", "1/2 oz ", "Fill with "],
    Date: "2016-08-31 19:53:20",
    isPublic: true,
    Like: 0
  },
  {
    Name: "A Splash of Nash",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Drop shot glass with banana & melon liquers into a 9 oz hi- ball glass containing soda water and cranberry juice. Drink in one shot.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/rsvtrr1472668201.jpg",
    Ingredients:[ "Cranberry juice", "Soda water", "Midori melon liqueur","Creme de Banane"],
    Measures:[ "2 oz ", "2 oz ", "0.5 oz ", "0.5 oz "],
    Date: "2016-08-31 19:30:01",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Amaretto Sunrise",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions:
      "Mix together the amaretto and orange juice. Pour into glass and then add the grenadine untill you see the sunrise.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/akcpsh1493070267.jpg",
    Ingredients:[ "Amaretto", "Orange juice", "Grenadine",""],
    Measures:[ "1 cl ", "4 oz ", "1/4 cl "],
    Date: "2017-04-24 22:44:27",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Arizona Stingers",
    Tags: null,
    Alcoholic: true,
    Glass: "Hurricane glass",
    Instructions:
      "Place ice cubes in the hurricane glass . Add the 2 HEAPING shots of Absolute Vodka (Note: You can add as many shots of Absolute as you want!) Fill the rest of glass with the Arizona Icetea with lemon. Stir to mix using a spoon. Drink up and enjoy!!!!!!!",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/y7w0721493068255.jpg",
    Ingredients:[ "Absolut Vodka", "Iced tea",""],
    Measures:[ "2 shots ", "12 oz lemon "],
    Date: "2017-04-24 22:10:55",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Orange Push-up",
    Tags: null,
    Alcoholic: true,
    Glass: "Hurricane glass",
    Instructions:
      "Combine liquors in a blender. Add a half scoop of ice and blend. Garnish with an orange and cherry flag. So good it will melt in your mouth!!!",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/mgf0y91503565781.jpg",
    Ingredients:[ "Spiced rum", "Grenadine", "Orange juice","Sour mix"],
    Measures:[ "1.5 oz ", "0.5 oz ", "4 oz ", "1 splash "],
    Date: "2017-08-24 10:09:41",
    isPublic: true,
    Like: 0
  },
  {
    Name: "151 Florida Bushwacker",
    Tags: null,
    Alcoholic: true,
    Glass: "Beer mug",
    Instructions:
      "Combine all ingredients. Blend until smooth. Garnish with chocolate shavings if desired.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/rvwrvv1468877323.jpg",
    Ingredients:[ "Malibu rum", "Light rum", "151 proof rum","Dark Creme de Cacao", "Cointreau", "Milk", "Coconut liqueur", "Vanilla ice-cream"],
    Measures:[ "1/2 oz ", "1/2 oz ", "1/2 oz Bacardi ", "1 oz ", "1 oz ", "3 oz ", "1 oz ", "1 cup "],
    Date: "2016-07-18 22:28:43",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Zizi Coin-coin",
    Tags: null,
    Alcoholic: true,
    Glass: "Margarita/Coupette glass",
    Instructions:
      "Pour 5cl of Cointreau on ice, add 2cl of fresh lemon (or lime) juice, stir gently, and finally add slices of lemon/lime in glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/0fbo2t1485620752.jpg",
    Ingredients:[ "Cointreau", "Lemon juice", "Ice","Lemon"],
    Measures:[ "5 cl ", "2 cl ", " cubes\n", " or lime\n"],
    Date: "2017-01-28 16:25:52",
    isPublic: true,
    Like: 0
  },
  {
    Name: "50/50",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions:
      "fill glass with crushed ice. Add vodka. Add a splash of grand-marnier. Fill with o.j.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/wwpyvr1461919316.jpg",
    Ingredients:[ "Vanilla vodka", "Grand Marnier", "Orange juice",""],
    Measures:[ "2 1/2 oz ", "1 splash ", "Fill with "],
    Date: "2016-04-29 09:41:56",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Tequila Surprise",
    Tags: null,
    Alcoholic: true,
    Glass: "Shot glass",
    Instructions: "Fill shot glass with Tequila. Add drops of Tobasco sauce.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/8189p51504735581.jpg",
    Ingredients:[ "Tequila", "Tabasco sauce",""],
    Measures:[ "full glass ", "About 8 drops "],
    Date: "2017-09-06 23:06:21",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Cream Soda",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Pour 1oz of Spiced Rum into a highball glass with ice. Fill with Ginger Ale.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/yqstxr1479209367.jpg",
    Ingredients:[ "Spiced rum", "Ginger ale",""],
    Measures:[ "1 oz "],
    Date: "2016-11-15 11:29:27",
    isPublic: true,
    Like: 0
  },
  {
    Name: "ACID",
    Tags: null,
    Alcoholic: true,
    Glass: "Shot glass",
    Instructions:
      "Poor in the 151 first followed by the 101 served with a Coke or Dr Pepper chaser.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/xuxpxt1479209317.jpg",
    Ingredients:[ "151 proof rum", "Wild Turkey",""],
    Measures:[ "1 oz Bacardi ", "1 oz "],
    Date: "2016-11-15 11:28:37",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Arctic Fish",
    Tags: null,
    Alcoholic: true,
    Glass: "Beer pilsner",
    Instructions:
      "Fill glass with ice and fish, add vodka, grape soda and orange juice. DO NOT STIR!!!!! Serve well chilled.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/ttsvwy1472668781.jpg",
    Ingredients:[ "Vodka", "Grape soda", "Orange juice","Ice", "Candy"],
    Measures:[ "1/3 part ", "1/3 part ", "1/3 part ", "lots ", "1 dash "],
    Date: "2016-08-31 19:39:41",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Grim Reaper",
    Tags: null,
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "Mix Kahlua and 151 in glass. Quickly add ice and pour grenadine over ice to give ice red tint.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/kztu161504883192.jpg",
    Ingredients:[ "Kahlua", "151 proof rum", "Grenadine",""],
    Measures:[ "1 oz ", "1 oz Bacardi ", "1 dash "],
    Date: "2017-09-08 16:06:32",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Freddy Kruger",
    Tags: null,
    Alcoholic: true,
    Glass: "Shot glass",
    Instructions: "make it an ample size shot!!",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/tuppuq1461866798.jpg",
    Ingredients:[ "J\u00e4germeister", "Sambuca", "Vodka",""],
    Measures:[ "1/2 oz ", "1/2 oz ", "1/2 oz "],
    Date: "2016-04-28 19:06:38",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Bubble Gum",
    Tags: null,
    Alcoholic: true,
    Glass: "Shot glass",
    Instructions: "Layer in order into a shot glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/spuurv1468878783.jpg",
    Ingredients:[ "Vodka", "Banana liqueur", "Orange juice","Peach schnapps"],
    Measures:[ "1/4 ", "1/4 ", "1/4 ", "1/4 "],
    Date: "2016-07-18 22:53:03",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Kiwi Lemon",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions: "Mix in highball glass. Stirr. Garnish with slice of kiwi.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/tpupvr1478251697.jpg",
    Ingredients:[ "Kiwi liqueur", "Bitter lemon", "Ice",""],
    Measures:[ "1 part ", "2 parts ", " cubes\n"],
    Date: "2016-11-04 09:28:17",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Hot Creamy Bush",
    Tags: null,
    Alcoholic: true,
    Glass: "Irish coffee cup",
    Instructions: "Combine all ingredients in glass",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/spvrtp1472668037.jpg",
    Ingredients:[ "Irish whiskey", "Bailey's irish cream", "Coffee",""],
    Measures:[ "1 shot ", "3/4 shot ", "6 oz hot "],
    Date: "2016-08-31 19:27:17",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Midnight Mint",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "If available, rim cocktail (Martini) glass with sugar syrup then dip into chocolate flakes or powder. Add ingredients into shaker with ice. Shake well then strain into cocktail glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/svuvrq1441208310.jpg",
    Ingredients:[ "Bailey's irish cream", "White Creme de Menthe", "Cream",""],
    Measures:[ "1 oz ", "3/4 oz ", "3/4 oz double "],
    Date: "2015-09-02 16:38:30",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Talos Coffee",
    Tags: null,
    Alcoholic: true,
    Glass: "Brandy snifter",
    Instructions: "Add your GM and then add your coffee.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/rswqpy1441246518.jpg",
    Ingredients:[ "Grand Marnier", "Coffee",""],
    Measures:[ "3 parts ", "1 part "],
    Date: "2015-09-03 03:15:18",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Zinger",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Get a shot glass and pour in three shots of the schnapps. Do the same with the Surge Cola. Then down it Like Scheetz would.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/iixv4l1485620014.jpg",
    Ingredients:[ "Peachtree schnapps", "Surge",""],
    Measures:[ "4 shots ", "4 shots "],
    Date: "2017-01-28 16:13:34",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Jello shots",
    Tags: null,
    Alcoholic: true,
    Glass: "Shot glass",
    Instructions:
      "Boil 3 cups of water then add jello. Mix jello and water until jello is completely disolved. Add the two cups of vodka and mix together. Pour mixture into plastic shot glasses and chill until firm. Then, eat away...",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/l0smzo1504884904.jpg",
    Ingredients:[ "Vodka", "Jello", "Water",""],
    Measures:[ "2 cups ", "3 packages ", "3 cups "],
    Date: "2017-09-08 16:35:04",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Rum Punch",
    Tags: null,
    Alcoholic: true,
    Glass: "Punch bowl",
    Instructions: "Mix all ingredients in a punch bowl and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/wyrsxu1441554538.jpg",
    Ingredients:[ "Rum", "Ginger ale", "Fruit punch","Orange juice", "Ice"],
    Measures:[ "mikey bottle ", "large bottle ", "355 ml frozen ", "355 ml frozen ", "crushed "],
    Date: "2015-09-06 16:48:58",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Turkeyball",
    Tags: null,
    Alcoholic: true,
    Glass: "Shot glass",
    Instructions: "Shake with ice and strain into a shot glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/rxurpr1441554292.jpg",
    Ingredients:[ "Wild Turkey", "Amaretto", "Pineapple juice",""],
    Measures:[ "1 oz ", "3/4 oz ", "1 splash "],
    Date: "2015-09-06 16:44:53",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Absolutely Cranberry Smash",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions: "Stir ingredients together. Serve over ice.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vqwstv1472811884.jpg",
    Ingredients:[ "Absolut Vodka", "Cranberry juice", "Ginger ale","Ice"],
    Measures:[ "2 oz ", "4 oz ", "2 oz ", "Add "],
    Date: "2016-09-02 11:24:44",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Kiss me Quick",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions: "mix in the glass",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/m7iaxu1504885119.jpg",
    Ingredients:[ "Cranberry vodka", "Apfelkorn", "Schweppes Russchian","Apple juice", "Ice"],
    Measures:[ "4 cl ", "2 cl ", "7 cl ", "8 cl ", " cubes\n"],
    Date: "2017-09-08 16:38:39",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Royal Flush",
    Tags: null,
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "Pour all the ingredients into tumbler over ice. Strain into glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/7rnm8u1504888527.jpg",
    Ingredients:[ "Crown Royal", "Peach schnapps", "Chambord raspberry liqueur","Cranberry juice"],
    Measures:[ "1 1/2 oz ", "1 oz ", "1/2 oz ", "1 oz "],
    Date: "2017-09-08 17:35:27",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Limona Corona",
    Tags: null,
    Alcoholic: true,
    Glass: "Beer Glass",
    Instructions:
      "Open the Corona. Fill the empty space in the neck in the bottle with the rum. The bottle should be filled to the top. Plug the bottle with your thumb or the palm of your hand. Turn the bottle upside-down so the rum and beer mix. Turn the bottle rightside-up, unplug, and drink.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/wwqrsw1441248662.jpg",
    Ingredients:[ "Corona", "Bacardi Limon",""],
    Measures:[ "1 bottle ", "1 oz "],
    Date: "2015-09-03 03:51:02",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Pysch Vitamin Light",
    Tags: null,
    Alcoholic: false,
    Glass: "Collins Glass",
    Instructions: "Shake with ice.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/xsqsxw1441553580.jpg",
    Ingredients:[ "Orange juice", "Apple juice", "Pineapple juice","Ice"],
    Measures:[ "1 part ", "1 part ", "1 part "],
    Date: "2015-09-06 16:33:00",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Apello",
    Tags: null,
    Alcoholic: false,
    Glass: "Collins Glass",
    Instructions: "Stirr. Grnish with maraschino cherry.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/uptxtv1468876415.jpg",
    Ingredients:[ "Orange juice", "Grapefruit juice", "Apple juice","Maraschino cherry"],
    Measures:[ "4 cl ", "3 cl ", "1 cl ", "1 "],
    Date: "2016-07-18 22:13:35",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Texas Rattlesnake",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Mix all ingredients and Shake well. Sweet at first, with a BITE at the end...",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/rtohqp1504889750.jpg",
    Ingredients:[ "Yukon Jack", "Cherry brandy", "Southern Comfort","Sweet and sour"],
    Measures:[ "1 part ", "1/2 part ", "1 part ", "1 splash "],
    Date: "2017-09-08 17:55:50",
    isPublic: true,
    Like: 0
  },
  {
    Name: "After sex",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Pour the vodka and creme over some ice cubes in a tall glass and fill up with juice. to make it beuty full make the top of the glass with a grenadine and sugar",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/xrl66i1493068702.jpg",
    Ingredients:[ "Vodka", "Creme de Banane", "Orange juice",""],
    Measures:[ "2 cl ", "1 cl "],
    Date: "2017-04-24 22:18:22",
    isPublic: true,
    Like: 0
  },
  {
    Name: "San Francisco",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      'Take a tall glass and put in a few ice cubes, fill the vodka over it and fill with juice then the "creme", to end fill in the grenadine but very carefully at the side of the glass so it will lay down in the bottom. garnish with orange and strawberry.',
    Image:
      "https://www.thecocktaildb.com/images/media/drink/szmj2d1504889961.jpg",
    Ingredients:[ "Vodka", "Creme de Banane", "Grenadine","Orange juice"],
    Measures:[ "2 cl ", "2 cl "],
    Date: "2017-09-08 17:59:21",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Amaretto Shake",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions:
      "Combine all ingredients in a blender and blend at high speed until smooth. Serve in chilled glass garnished with bittersweet chocolate shavings.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/xk79al1493069655.jpg",
    Ingredients:[ "Chocolate ice-cream", "Brandy", "Amaretto",""],
    Measures:[ "2 scoops ", "2 oz ", "2 oz "],
    Date: "2017-04-24 22:34:16",
    isPublic: true,
    Like: 0
  },
  {
    Name: "A Day at the Beach",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Shake Rum, Amaretto, and Orange Juice in a shaker filled with ice. Strain over ice into a highball glass. Add Grenadine and garnish with a Pineapple Wedge and a Strawberry.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/trptts1454514474.jpg",
    Ingredients:[ "Coconut rum", "Amaretto", "Orange juice","Grenadine"],
    Measures:[ "1 oz ", "1/2 oz ", "4 oz ", "1/2 oz "],
    Date: "2016-02-03 15:47:54",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Malibu Twister",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions: "Add rum & trister then, add cranberry jucie,stir",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/2dwae41504885321.jpg",
    Ingredients:[ "Malibu rum", "Tropicana", "Cranberry juice",""],
    Measures:[ "2 parts ", "2 parts ", "1 part "],
    Date: "2017-09-08 16:42:01",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Space Odyssey",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Fill glass with ice and add shots of Bacardi and Malibu. Add splash of pineapple juice and top with orange juice. Add grenadine for color and garnish with cherries.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vxtjbx1504817842.jpg",
    Ingredients:[ "151 proof rum", "Malibu rum", "Pineapple juice","Orange juice", "Grenadine", "Cherries"],
    Measures:[ "1 shot Bacardi ", "1 shot ", "1 shot "],
    Date: "2017-09-07 21:57:23",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Zenmeister",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions: "Mix together and enjoy",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/qyuvsu1479209462.jpg",
    Ingredients:[ "J\u00e4germeister", "Root beer",""],
    Measures:[ "1/2 oz ", "1/2 oz "],
    Date: "2016-11-15 11:31:02",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Avalon",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Fill a tall glass with ice. Layer the Finlandia Vodka, lemon and apple juices, Pisang Ambon, and top up with lemonade. Stir slightly and garnish with a spiralled cucumber skin and a red cherry. The cucumber provides zest and looks attractive. This drink, created by Timo Haimi, took first prize in the 1991 Finlandia Vodka Long Drink Competition.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/3k9qic1493068931.jpg",
    Ingredients:[ "Vodka", "Pisang Ambon", "Apple juice","Lemon juice", "Lemonade"],
    Measures:[ "3 parts", "1 part ", "6 parts ", "1 1/2 part "],
    Date: "2017-04-24 22:22:11",
    isPublic: true,
    Like: 0
  },
  {
    Name: "252",
    Tags: null,
    Alcoholic: true,
    Glass: "Shot glass",
    Instructions:
      "Add both ingredients to shot glass, shoot, and get drunk quick",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/rtpxqw1468877562.jpg",
    Ingredients:[ "151 proof rum", "Wild Turkey",""],
    Measures:[ "1/2 shot Bacardi ", "1/2 shot "],
    Date: "2016-07-18 22:32:42",
    isPublic: true,
    Like: 0
  },
  {
    Name: "3-Mile Long Island Iced Tea",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions:
      "Fill 14oz glass with ice and alcohol. Fill 2/3 glass with cola and remainder with sweet & sour. Top with dash of bitters and lemon wedge.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg",
    Ingredients:[ "Gin", "Light rum", "Tequila","Triple sec", "Vodka", "Coca-Cola", "Sweet and sour", "Bitters", "Lemon"],
    Measures:[ "1/2 oz ", "1/2 oz ", "1/2 oz ", "1/2 oz ", "1/2 oz ", "1-2 dash ", "1 wedge "],
    Date: "2016-08-31 19:42:52",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Zorro",
    Tags: null,
    Alcoholic: true,
    Glass: "Coffee Mug",
    Instructions: "add all and pour black coffee and add whipped cream on top.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/kvvd4z1485621283.jpg",
    Ingredients:[ "Sambuca", "Bailey's irish cream", "White Creme de Menthe",""],
    Measures:[ "2 cl ", "2 cl ", "2 cl "],
    Date: "2017-01-28 16:34:43",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Orange Crush",
    Tags: null,
    Alcoholic: true,
    Glass: "Shot glass",
    Instructions: "Add all ingredients to tumbler-Pour as shot",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/zvoics1504885926.jpg",
    Ingredients:[ "Vodka", "Triple sec", "Orange juice",""],
    Measures:[ "1 oz ", "1 oz ", "1 oz "],
    Date: "2017-09-08 16:52:06",
    isPublic: true,
    Like: 0
  },
  {
    Name: "155 Belmont",
    Tags: null,
    Alcoholic: true,
    Glass: "White wine glass",
    Instructions: "Blend with ice. Serve in a wine glass. Garnish with carrot.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
    Ingredients:[ "Dark rum", "Light rum", "Vodka","Orange juice"],
    Measures:[ "1 shot ", "2 shots ", "1 shot ", "1 shot "],
    Date: "2016-10-05 12:36:28",
    isPublic: true,
    Like: 0
  },
  {
    Name: "1-900-FUK-MEUP",
    Tags: null,
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "Shake ingredients in a mixing tin filled with ice cubes. Strain into a rocks glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/uxywyw1468877224.jpg",
    Ingredients:[ "Absolut Kurant", "Grand Marnier", "Chambord raspberry liqueur","Midori melon liqueur", "Malibu rum", "Amaretto", "Cranberry juice", "Pineapple juice"],
    Measures:[ "1/2 oz ", "1/4 oz ", "1/4 oz ", "1/4 oz ", "1/4 oz ", "1/4 oz ", "1/2 oz ", "1/4 oz "],
    Date: "2016-07-18 22:27:04",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Vodka Russian",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions: "Mix it as a ordinary drink .",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/rpttur1454515129.jpg",
    Ingredients:[ "Vodka", "Schweppes Russchian",""],
    Measures:[ "2 oz "],
    Date: "2016-02-03 15:58:49",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Danbooka",
    Tags: null,
    Alcoholic: true,
    Glass: "Coffee Mug",
    Instructions: "pour it in and mix it.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vurrxr1441246074.jpg",
    Ingredients:[ "Coffee", "Everclear",""],
    Measures:[ "3 parts ", "1 part "],
    Date: "2015-09-03 03:07:55",
    isPublic: true,
    Like: 0
  },
  {
    Name: "110 in the shade",
    Tags: null,
    Alcoholic: true,
    Glass: "Beer Glass",
    Instructions: "Drop shooter in glass. Fill with beer",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/xxyywq1454511117.jpg",
    Ingredients:[ "Lager", "Tequila",""],
    Measures:[ "16 oz ", "1.5 oz "],
    Date: "2016-02-03 14:51:57",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Grand Blue",
    Tags: null,
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions: "Serve in an old fashioned glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vsrsqu1472761749.jpg",
    Ingredients:[ "Malibu rum", "Peach schnapps", "Blue Curacao","Sweet and sour"],
    Measures:[ "1 1/2 cl ", "1 1/2 cl ", "1 1/2 cl ", "3 cl "],
    Date: "2016-09-01 21:29:09",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Baby Eskimo",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions:
      "Leave ice-cream out for about 10 minutes. Add ingredients in order, stir with chopstick (butter knife or spoon works too). Consume immediately and often. Nice and light, great for following a heavy drink.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/wywrtw1472720227.jpg",
    Ingredients:[ "Kahlua", "Milk", "Vanilla ice-cream",""],
    Measures:[ "2 oz ", "8 oz ", "2 scoops "],
    Date: "2016-09-01 09:57:07",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Tennesee Mud",
    Tags: null,
    Alcoholic: true,
    Glass: "Coffee Mug",
    Instructions: "Mix Coffee, Jack Daniels and Amaretto. Add Cream on top.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/txruqv1441245770.jpg",
    Ingredients:[ "Coffee", "Jack Daniels", "Amaretto","Whipped cream"],
    Measures:[ "8 oz ", "4 oz ", "4 oz "],
    Date: "2015-09-03 03:02:50",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Swedish Coffee",
    Tags: null,
    Alcoholic: true,
    Glass: "Coffee Mug",
    Instructions:
      "Pour the coffee in an ordinary coffee cup. Add the aquavit. Add sugar by taste. Stir and have a nice evening (morning)",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/ywtrvt1441246783.jpg",
    Ingredients:[ "Coffee", "Aquavit", "Sugar",""],
    Measures:[ "1 cup", "4 cl ", "By taste "],
    Date: "2015-09-03 03:19:43",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Adam Sunrise",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions:
      "Fill blender up with ice. Fill half with Bartons Vodka. Put 10 tsp of sugar, add 1/2 can lemonade concentrate, fill to top with water. Blend for 60 seconds.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vtuyvu1472812112.jpg",
    Ingredients:[ "Vodka", "Lemonade", "Water","Sugar"],
    Measures:[ "1/2 ", "1/2 can ", "1/2 ", "10 tsp "],
    Date: "2016-09-02 11:28:32",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Absolut Stress #2",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions: "Mix well. Garnish with Orange and Cherry. Enjoy",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/xuyqrw1472811825.jpg",
    Ingredients:[ "Absolut Vodka", "Peach schnapps", "Coconut liqueur","Cranberry juice", "Pineapple juice"],
    Measures:[ "1 1/2 oz ", "1/2 oz ", "1/2 oz ", "1 1/2 oz ", "1 1/2 oz "],
    Date: "2016-09-02 11:23:45",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Chocolate Monkey",
    Tags: null,
    Alcoholic: true,
    Glass: "Parfait glass",
    Instructions:
      "blend liqeuors with ice-cream, milk and syrup. pour into parfait glass, top with whipped cream and garnish with banana and cherry.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/tyvpxt1468875212.jpg",
    Ingredients:[ "Banana liqueur", "Creme de Cacao", "Chocolate ice-cream","Chocolate syrup", "Chocolate milk", "Whipped cream", "Cherry", "Banana"],
    Measures:[ "1 shot ", "2 shots ", "2 scoops ", "1 oz ", "4 oz ", "1 ", "1 ", "1 piece "],
    Date: "2016-07-18 21:53:32",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Texas Sling",
    Tags: null,
    Alcoholic: true,
    Glass: "Wine Glass",
    Instructions:
      "Blend with Ice until smooth. Serve in a tulip glass, top with whip cream.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/ypl13s1504890158.jpg",
    Ingredients:[ "Kahlua", "Irish cream", "Amaretto","151 proof rum", "Cream"],
    Measures:[ "1/2 oz ", "1/2 oz ", "1/2 oz ", "1/2 oz Bacardi ", "1 oz "],
    Date: "2017-09-08 18:02:39",
    isPublic: true,
    Like: 0
  },
  {
    Name: "A midsummernight dream",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions:
      "Mix the strawberrys in a blender Pour it together with the vodka,kirch and strawberry liquer over ice in a shaker. Shake well and pour in a highballglass. Fill up with the Russchian water",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/ysqvqp1461867292.jpg",
    Ingredients:[ "Vodka", "Kirschwasser", "Strawberry liqueur","Strawberries", "Schweppes Russchian"],
    Measures:[ "2 oz ", "1 oz ", "1 tsp ", "5 "],
    Date: "2016-04-28 19:14:52",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Zoksel",
    Tags: null,
    Alcoholic: true,
    Glass: "Beer pilsner",
    Instructions:
      "No specific mixinginstructions, just poor every ingredient in one glass. The lemon goes with it.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/ft8ed01485620930.jpg",
    Ingredients:[ "Beer", "Root beer", "Lemonade","Coca-Cola", "7-Up", "Creme de Cassis", "Lemon"],
    Measures:[ "\n", " slice\n"],
    Date: "2017-01-28 16:28:50",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Fuzzy Asshole",
    Tags: null,
    Alcoholic: true,
    Glass: "Coffee mug",
    Instructions:
      "fill coffe mug half full of coffee. Fill the other half full of Peach Schnapps. Stir and drink while hot.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/wrvpuu1472667898.jpg",
    Ingredients:[ "Coffee", "Peach schnapps",""],
    Measures:[ "1/2 ", "1/2 "],
    Date: "2016-08-31 19:24:58",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Quick-sand",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Simply add the orange juice, quite a quick pour in order to mix the sambucca with the orange juice. The juice MUST have fruit pulp!",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vprxqv1478963533.jpg",
    Ingredients:[ "Black Sambuca", "Orange juice",""],
    Measures:[ "25 ml ", "Add 250 ml "],
    Date: "2016-11-12 15:12:13",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Snakebite and Black",
    Tags: null,
    Alcoholic: true,
    Glass: "Pint glass",
    Instructions:
      "Put blackcurrant squash in first up to about 1cm in glass. Then add the larger and cider one after another.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/rssvwv1441248863.jpg",
    Ingredients:[ "Lager", "Cider", "Blackcurrant squash",""],
    Measures:[ "1/2 pint ", "1/2 pint ", "A little bit of "],
    Date: "2015-09-03 03:54:23",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Zimadori Zinger",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins glass",
    Instructions:
      "Pour Zima in a collins glass over ice and then pour the shot of Midori. Don't stir. Garnish with a cherry.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/bw8gzx1485619920.jpg",
    Ingredients:[ "Midori melon liqueur", "Zima",""],
    Measures:[ "1.5 oz ", "12 oz "],
    Date: "2017-01-28 16:12:00",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Herbal flame",
    Tags: null,
    Alcoholic: true,
    Glass: "Mason jar",
    Instructions:
      "Pour Hot Damn 100 in bottom of a jar or regular glass. Fill the rest of the glass with sweet tea. Stir with spoon, straw, or better yet a cinnamon stick and leave it in.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/rrstxv1441246184.jpg",
    Ingredients:[ "Hot Damn", "Tea",""],
    Measures:[ "5 shots ", "very sweet "],
    Date: "2015-09-03 03:09:44",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Jamaican Coffee",
    Tags: null,
    Alcoholic: true,
    Glass: "Champagne flute",
    Instructions:
      "Stir the rum, coffee and water together. Top with the whipped cream. Sprinkle with a pinch of well ground coffee and drink with a straw.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/xqptps1441247257.jpg",
    Ingredients:[ "Rum", "Coffee", "Water","Whipped cream"],
    Measures:[ "1/6 glass ", "1/6 glass strong black ", "1/2 glass cold "],
    Date: "2015-09-03 03:27:37",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Mojito #3",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins glass",
    Instructions:
      "Put mint with lemon juice in a glas, mash the mint with a spoon, ice, rum & fill up with club soda. Top it with Angostura.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vwxrsw1478251483.jpg",
    Ingredients:[ "Mint", "Lemon juice", "Dark rum","Club soda", "Angostura bitters"],
    Measures:[ "1/2 handful ", "3 cl ", "1/8 L Jamaican ", "1/8 L ", "8 drops "],
    Date: "2016-11-04 09:24:43",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Apricot punch",
    Tags: null,
    Alcoholic: true,
    Glass: "Punch bowl",
    Instructions:
      "Pour all ingrediants into a large punch bowl. Add ice and 4 oranges that are peeled and divided.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/tuxxtp1472668667.jpg",
    Ingredients:[ "Apricot brandy", "Champagne", "Vodka","7-Up", "Orange juice"],
    Measures:[ "1 qt ", "4 fifth ", "1 fifth ", "4 L ", "1/2 gal "],
    Date: "2016-08-31 19:37:47",
    isPublic: true,
    Like: 0
  },
  {
    Name: "B-52",
    Tags: "IBA,NewEra",
    Alcoholic: true,
    Glass: "Shot glass",
    Instructions: "Layer ingredients into a shot glass. Serve with a stirrer.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/5a3vg61504372070.jpg",
    Ingredients:[ "Bailey's irish cream", "Grand Marnier", "Kahlua",""],
    Measures:[ "1/3 ", "1/3 ", "1/4 "],
    Date: "2017-09-02 18:07:51",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Zambeer",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions: "Mix sambuca with rootbeer and stir. Add ice",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/bje5401485619578.jpg",
    Ingredients:[ "Sambuca", "Root beer", "Ice",""],
    Measures:[ "1 1/2 oz ", "Add 10 oz ", " cubes\n"],
    Date: "2017-01-28 16:06:18",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Americano",
    Tags: "IBA,Classic",
    Alcoholic: true,
    Glass: "Collins glass",
    Instructions:
      "Pour the Campari and vermouth over ice into glass, add a splash of soda water and garnish with half orange slice.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/trwruu1478253126.jpg",
    Ingredients:[ "Campari", "Sweet Vermouth", "Lemon peel","Orange peel"],
    Measures:[ "1 oz ", "1 oz red ", "Twist of ", "Twist of "],
    Date: "2016-11-04 09:52:06",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Black Forest Shake",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions:
      "In a blender put ice cubes, chocolate syrup, cherry brandy, vodka, and milk. Blend very well.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/xxtxsu1472720505.jpg",
    Ingredients:[ "Ice", "Chocolate syrup", "Cherry brandy","Vodka", "Milk"],
    Measures:[ " cubes\n"],
    Date: "2016-09-01 10:01:45",
    isPublic: true,
    Like: 0
  },
  {
    Name: "GG",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions:
      "Pour the Galliano liqueur over ice. Fill the remainder of the glass with ginger ale and thats all there is to it. You now have a your very own GG.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg",
    Ingredients:[ "Galliano", "Ginger ale", "Ice",""],
    Measures:[ "2 1/2 shots "],
    Date: "2016-07-18 22:06:00",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Radler",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions: "Pour beer into large mug, slowly add the 7-up (or Sprite).",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/xz8igv1504888995.jpg",
    Ingredients:[ "Beer", "7-Up",""],
    Measures:[ "12 oz ", "12 oz "],
    Date: "2017-09-08 17:43:15",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Mudslinger",
    Tags: null,
    Alcoholic: true,
    Glass: "Punch bowl",
    Instructions: "Add all contents to a large jug or punch bowl. Stir well!",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/hepk6h1504885554.jpg",
    Ingredients:[ "Southern Comfort", "Orange juice", "Pepsi Cola",""],
    Measures:[ "750 ml ", "1 L ", "750 ml "],
    Date: "2017-09-08 16:45:55",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Campari Beer",
    Tags: null,
    Alcoholic: true,
    Glass: "Beer mug",
    Instructions: "Use a 15 oz glass. Add Campari first. Fill with beer.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/xsqrup1441249130.jpg",
    Ingredients:[ "Lager", "Campari",""],
    Measures:[ "1 bottle ", "1 1/2 cl "],
    Date: "2015-09-03 03:58:50",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Almond Chocolate Coffee",
    Tags: null,
    Alcoholic: true,
    Glass: "Coffee mug",
    Instructions:
      "Pour in order into coffee cup. Top with whipped creme and chocolate shcvings.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/jls02c1493069441.jpg",
    Ingredients:[ "Amaretto", "Dark Creme de Cacao", "Coffee",""],
    Measures:[ "3/4 oz ", "1/2 oz ", "8 oz "],
    Date: "2017-04-24 22:30:41",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Amaretto Stone Sour #3",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Shake sour mix, tequila and amaretto with ice. Strain into highball glass. Add a splash of OJ. Garnish with orange slice and a cherry.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/wutxqr1472720012.jpg",
    Ingredients:[ "Sour mix", "Amaretto", "Tequila","Orange juice"],
    Measures:[ "2 oz ", "2 oz ", "2 oz ", "Add splash "],
    Date: "2016-09-01 09:53:32",
    isPublic: true,
    Like: 0
  },
  {
    Name: "9 1/2 Weeks",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Combine all ingredients in glass mixer. Chill and strain into Cocktail glass. Garnish with sliced strawberry.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/xvwusr1472669302.jpg",
    Ingredients:[ "Absolut Citron", "Orange Curacao", "Strawberry liqueur","Orange juice"],
    Measures:[ "2 oz ", "1/2 oz ", "1 splash ", "1 oz "],
    Date: "2016-08-31 19:48:22",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Absolutly Screwed Up",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins glass",
    Instructions:
      "Shake it up it tasts better that way, but you can stir it if you want. 6 of those and you will be wasted for the rest of the night.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/yvxrwv1472669728.jpg",
    Ingredients:[ "Absolut Citron", "Orange juice", "Triple sec","Ginger ale"],
    Measures:[ "1 shot ", "1 shot ", "1 shot ", "Fill to top "],
    Date: "2016-08-31 19:55:28",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Whitecap Margarita",
    Tags: null,
    Alcoholic: true,
    Glass: "Margarita/Coupette glass",
    Instructions:
      "Place all ingredients in a blender and blend until smooth. This makes one drink.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/srpxxp1441209622.jpg",
    Ingredients:[ "Ice", "Tequila", "Cream of coconut","Lime juice"],
    Measures:[ "1 cup ", "2 oz ", "1/4 cup ", "3 tblsp fresh "],
    Date: "2015-09-02 17:00:22",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Bellini Martini",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Add ice cubes to shaker.\r\nAdd vodka.\r\nAdd peach schnapps.\r\nAdd peach nectar.\r\nShake.\r\nStrain into glass.\r\nAdd lemon twist peel.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/3h9wv51504389379.jpg",
    Ingredients:[ "Ice", "Vodka", "Peach nectar","Peach schnapps", "Lemon peel"],
    Measures:[ "8 cubes ", "3 oz ", "1.5 oz ", "1.5 oz ", "1 "],
    Date: "2017-09-02 22:56:19",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Jitterbug",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail Glass",
    Instructions:
      "Wet glass, dip rim in sugar. Then add Ice. Then add everything else. It's that simple!",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/wwqvrq1441245318.jpg",
    Ingredients:[ "Gin", "Vodka", "Grenadine","Lime juice", "Sugar", "Sugar syrup", "Soda water"],
    Measures:[ "2 jiggers ", "1 jigger ", "3 dashes ", "1 shot ", "Around rim put 1 pinch ", "3 dashes ", "Fill to top with "],
    Date: "2015-09-03 02:55:18",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Moranguito",
    Tags: null,
    Alcoholic: true,
    Glass: "Shot glass",
    Instructions:
      "first you put rhe absinthe, then put tequila, then put the Granadine syrup.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/urpsyq1475667335.jpg",
    Ingredients:[ "Absinthe", "Tequila", "Grenadine",""],
    Measures:[ "2/5 ", "2/5 ", "1/5 "],
    Date: "2016-10-05 12:35:35",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Amaretto Sweet & Sour",
    Tags: null,
    Alcoholic: true,
    Glass: "Margarita/Coupette glass",
    Instructions:
      'Fill the blender with 3/4 ice. Add sweet & sour mix to the top of the ice. Add about 1" of pineapple juice, 1/2" of melon liqeur, and 1/2 to 1/4" of amaretto. Then blend the mix until it is of margaritta consistency or thinner.',
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vswwus1472668546.jpg",
    Ingredients:[ "Amaretto", "Sweet and sour", "Midori melon liqueur","Pineapple juice"],
    Measures:[],
    Date: "2016-08-31 19:35:46",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Rum Runner",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions: "Mix all ingredients in glass & add ice.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vqws6t1504888857.jpg",
    Ingredients:[ "Malibu rum", "Blackberry brandy", "Orange juice","Pineapple juice", "Cranberry juice"],
    Measures:[ "1 1/2 oz ", "1 oz ", "3-4 oz ", "3-4 oz ", "3-4 oz "],
    Date: "2017-09-08 17:40:57",
    isPublic: true,
    Like: 0
  },
  {
    Name: "H.D.",
    Tags: null,
    Alcoholic: true,
    Glass: "Beer mug",
    Instructions:
      "Mix the whisky and Baileys Cream in a beer-glass (at least 50 cl). Fill the rest of the glass with coffee.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/upusyu1472667977.jpg",
    Ingredients:[ "Whisky", "Bailey's irish cream", "Coffee",""],
    Measures:[ "4 cl ", "8 cl "],
    Date: "2016-08-31 19:26:18",
    isPublic: true,
    Like: 0
  },
  {
    Name: "The Evil Blue Thing",
    Tags: null,
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      'Pour ingredients into glass, and drop in a blue whale! The blue whale isn\'t really necessary, but it makes the drink more "fun".',
    Image:
      "https://www.thecocktaildb.com/images/media/drink/ojnpz71504793059.jpg",
    Ingredients:[ "Creme de Cacao", "Blue Curacao", "Light rum",""],
    Measures:[ "1 1/2 oz ", "1 oz ", "1/2 oz "],
    Date: "2017-09-07 15:04:19",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Shark Attack",
    Tags: null,
    Alcoholic: true,
    Glass: "Pitcher",
    Instructions:
      "Mix lemonade and water according to instructions on back of can. If the instructions say to add 4 1/3 cans of water do so. Mix into pitcher. Add 1 1/2 cup of Vodka (Absolut). Mix well. Pour into glass of crushed ice. Excellent!",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/uv96zr1504793256.jpg",
    Ingredients:[ "Lemonade", "Water", "Vodka",""],
    Measures:[ "1 can ", "3 cans ", "1 1/2 cup "],
    Date: "2017-09-07 15:07:37",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Jack's Vanilla Coke",
    Tags: null,
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "After pouring in your ingredients, and adding 3-5 ice cubes, according to taste. Stir the drink with a stirrer to get the Vanilla off the bottom.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/kjnt7z1504793319.jpg",
    Ingredients:[ "Ice", "Tennessee whiskey", "Vanilla extract","Coca-Cola"],
    Measures:[ "4-5 ", "2 oz ", "1 tsp ", "10-12 oz "],
    Date: "2017-09-07 15:08:39",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Apple Grande",
    Tags: null,
    Alcoholic: true,
    Glass: "Punch Bowl",
    Instructions: "Chill both ingredients!! Mix in a tumbler and enjoy!",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/wqrptx1472668622.jpg",
    Ingredients:[ "Tequila", "Apple cider",""],
    Measures:[ "3 oz ", "12 oz "],
    Date: "2016-08-31 19:37:02",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Bleeding Surgeon",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins glass",
    Instructions:
      "Pour Shot of Rum over slice of orange. Fill the remaining space in glass half way full of surge or similar drink. Finish off glass with cranberry juice. Be carefull, warm surge may foam over the glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/usuvvr1472719118.jpg",
    Ingredients:[ "Dark rum", "Orange", "Surge","Cranberry juice"],
    Measures:[ "1 shot ", "1 slice ", "1/2 glass ", "1/2 glass "],
    Date: "2016-09-01 09:38:38",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Applejack",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Add all ingredients into mixing glass, chill and strain into cocktail glass",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/sutyqp1479209062.jpg",
    Ingredients:[ "Jack Daniels", "Midori melon liqueur", "Sour mix",""],
    Measures:[ "1 oz ", "1/2 oz ", "2 oz "],
    Date: "2016-11-15 11:24:22",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Adam Bomb",
    Tags: null,
    Alcoholic: true,
    Glass: "Margarita/Coupette glass",
    Instructions:
      "Add ice to blender (or to glass if prefer on the rocks) then fruit, and fruite juice depending on personal prefference then add the Rum, Vodka, Tequila, and triple sec. blend till smooth, rim glass with sugar or salt and pour mixture in. garnish with lemon or lime slice.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/tpxurs1454513016.jpg",
    Ingredients:[ "Rum", "Vodka", "Tequila","Triple sec", "Fruit", "Ice", "Salt", "Fruit juice"],
    Measures:[ "1 part ", "1 part ", "1 part ", "1/2 part ", "1-3 pint "],
    Date: "2016-02-03 15:23:36",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Arizona Antifreeze",
    Tags: null,
    Alcoholic: true,
    Glass: "Shot glass",
    Instructions: "Pour all ingredients into shot glass and slam !!!!",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/dbtylp1493067262.jpg",
    Ingredients:[ "Vodka", "Midori melon liqueur", "Sweet and sour",""],
    Measures:[ "1/3 oz ", "1/3 oz ", "1/3 oz "],
    Date: "2017-04-24 21:54:22",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Black and Brown",
    Tags: null,
    Alcoholic: true,
    Glass: "Beer pilsner",
    Instructions:
      "CAREFULLY to avoid explosive head formation: Pour Beer glass half full of favorite rootbeer and top off with Guinness.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/wwuvxv1472668899.jpg",
    Ingredients:[ "Guinness stout", "Root beer",""],
    Measures:[ "1/2 ", "1/2 "],
    Date: "2016-08-31 19:41:39",
    isPublic: true,
    Like: 0
  },
  {
    Name: "A Piece of Ass",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions: "Put ice in glass. Pour in shots. Fill with Sour Mix.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/tqxyxx1472719737.jpg",
    Ingredients:[ "Amaretto", "Southern Comfort", "Ice","Sour mix"],
    Measures:[ "1 shot ", "1 shot ", " cubes\n"],
    Date: "2016-09-01 09:48:57",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Avalanche",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions: "Mix in highball glass over ice, shake well.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/uppqty1472720165.jpg",
    Ingredients:[ "Crown Royal", "Kahlua", "Cream",""],
    Measures:[ "1 shot ", "1 shot ", "Fill with "],
    Date: "2016-09-01 09:56:05",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Brandon and Will's Coke Float",
    Tags: null,
    Alcoholic: true,
    Glass: "Beer mug",
    Instructions:
      "Scoop two large scoops of vanilla ice-cream into frosted beer mug. Next, add 2 ounces Maker's Mark. Then, pour in coke. Gently stir and enjoy.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/xspxyr1472719185.jpg",
    Ingredients:[ "Vanilla ice-cream", "Coca-Cola", "Bourbon",""],
    Measures:[ "2 scoops ", "1 can ", "2 oz "],
    Date: "2016-09-01 09:39:45",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Flaming Lamborghini",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Pour the Sambuca and Kahlua into the Cocktail Glass and give the drinker a straw. Pour the Baileys and Blue Curacao into two sepsrate shot glasses either side of the cocktail glass. Set light the concotion in the cocktail glass and start to drink through the straw (this drink should be drunk in one) , as the bottom of the glass is reached put out the fire by pouring the Baileys and Blue Curacao into the cocktail glass and keep drinking till it's all gone!!",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/yywpss1461866587.jpg",
    Ingredients:[ "Kahlua", "Sambuca", "Blue Curacao","Bailey's irish cream"],
    Measures:[ "1 oz ", "1 oz ", "1 oz ", "1 oz "],
    Date: "2016-04-28 19:03:07",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Zipperhead",
    Tags: null,
    Alcoholic: true,
    Glass: "Whiskey sour glass",
    Instructions:
      "Fill glass with rocks, add straw before putting in liquor. Then add the ingredients in order, trying to keep layered as much as possible (i.e. Chambord on bottom, then Vodka, Then soda on top).",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/r2qzhu1485620235.jpg",
    Ingredients:[ "Chambord raspberry liqueur", "Vodka", "Soda water",""],
    Measures:[ "1 shot ", "1 shot ", "Fill with "],
    Date: "2017-01-28 16:17:15",
    isPublic: true,
    Like: 0
  },
  {
    Name: "A Gilligan's Island",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins glass",
    Instructions: "Shaken, not stirred!",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/wysqut1461867176.jpg",
    Ingredients:[ "Vodka", "Peach schnapps", "Orange juice","Cranberry juice"],
    Measures:[ "1 oz ", "1 oz ", "3 oz ", "3 oz "],
    Date: "2016-04-28 19:12:56",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Kioki Coffee",
    Tags: null,
    Alcoholic: true,
    Glass: "Coffee mug",
    Instructions: "Stir. Add whipped cream to the top.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/uppqty1441247374.jpg",
    Ingredients:[ "Kahlua", "Brandy", "Coffee",""],
    Measures:[ "1 oz ", "1/2 oz "],
    Date: "2015-09-03 03:29:34",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Apple Pie with A Crust",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions:
      "Just mix the two liquids and sprinkle in the cinnamon. Serve either cold or heated.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/qspqxt1472720078.jpg",
    Ingredients:[ "Apple juice", "Malibu rum", "Cinnamon",""],
    Measures:[ "3 parts ", "1 part ", "3 dashes "],
    Date: "2016-09-01 09:54:38",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Zorbatini",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions: "Prepare Like a Martini. Garnish with a green olive.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/wtkqgb1485621155.jpg",
    Ingredients:[ "Vodka", "Ouzo",""],
    Measures:[ "1 1/4 oz Stoli ", "1/4 oz "],
    Date: "2017-01-28 16:32:35",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Vodka Fizz",
    Tags: null,
    Alcoholic: true,
    Glass: "White wine glass",
    Instructions:
      "Blend all ingredients, save nutmeg. Pour into large white wine glass and sprinkle nutmeg on top.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/xwxyux1441254243.jpg",
    Ingredients:[ "Vodka", "Half-and-half", "Limeade","Ice", "Nutmeg"],
    Measures:[ "2 oz ", "2 oz ", "2 oz "],
    Date: "2015-09-03 05:24:03",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Radioactive Long Island Iced Tea",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions:
      "Pour all ingredients over ice in a very tall glass. Sip cautiously.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/rdvqmh1503563512.jpg",
    Ingredients:[ "Rum", "Vodka", "Tequila","Gin", "Triple sec", "Chambord raspberry liqueur", "Midori melon liqueur", "Malibu rum"],
    Measures:[ "1 oz ", "1 oz ", "1 oz ", "1 oz ", "1 oz ", "1 oz ", "1 oz ", "1 oz "],
    Date: "2017-08-24 09:31:52",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Shot-gun",
    Tags: null,
    Alcoholic: true,
    Glass: "Shot glass",
    Instructions:
      "Pour one part Jack Daneils and one part Jim Beam into shot glass then float Wild Turkey on top.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/2j1m881503563583.jpg",
    Ingredients:[ "Jim Beam", "Jack Daniels", "Wild Turkey",""],
    Measures:[ "1 part ", "1 part ", "1 oz "],
    Date: "2017-08-24 09:33:03",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Bible Belt",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions: "Mix all ingredients, and pour over ice.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/6bec6v1503563675.jpg",
    Ingredients:[ "Southern Comfort", "Triple sec", "Lime","Sour mix"],
    Measures:[ "2 oz ", "1/2 oz ", "2 wedges ", "2 oz "],
    Date: "2017-08-24 09:34:35",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Irish Curdling Cow",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Pour Irish Cream, Vodka, and Bourbon in a glass. Add some ice and mix in the orange juice.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/yrhutv1503563730.jpg",
    Ingredients:[ "Bailey's irish cream", "Bourbon", "Vodka","Orange juice"],
    Measures:[ "3/4 oz ", "3/4 oz ", "3/4 oz ", "2-3 oz "],
    Date: "2017-08-24 09:35:30",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Sweet Tooth",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball Glass",
    Instructions:
      "Put 2 shots Godiva Liquour into a glass, add as much or as little milk as you would Like.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/j6rq6h1503563821.jpg",
    Ingredients:[ "Godiva liqueur", "Milk",""],
    Measures:[ "2 shots "],
    Date: "2017-08-24 09:37:01",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Downshift",
    Tags: null,
    Alcoholic: true,
    Glass: "Hurricane glass",
    Instructions:
      "Start with the Sprite. Next comes the tequila. After that, add the Minute Maid Fruit Punch, then float the 151. Rocks optional.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/y36z8c1503563911.jpg",
    Ingredients:[ "Fruit punch", "Sprite", "Tequila","151 proof rum"],
    Measures:[ "2 part ", "1 part ", "2 shots ", "Float Bacardi "],
    Date: "2017-08-24 09:38:31",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Pink Penocha",
    Tags: null,
    Alcoholic: true,
    Glass: "Punch bowl",
    Instructions: "mix all ingredients into bowl keep iced stir frequently",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/6vigjx1503564007.jpg",
    Ingredients:[ "Everclear", "Vodka", "Peach schnapps","Orange juice", "Cranberry juice"],
    Measures:[ "750 ml ", "1750 ml ", "1750 ml ", "1 gal ", "1 gal "],
    Date: "2017-08-24 09:40:07",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Orange Whip",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions: "Pour ingredients over ice and stir.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/ttyrxr1454514759.jpg",
    Ingredients:[ "Orange juice", "Rum", "Vodka","Cream", "Ice"],
    Measures:[ "4 oz ", "1 oz ", "1 oz ", "1 package ", "Over "],
    Date: "2016-02-03 15:52:39",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Bruised Heart",
    Tags: null,
    Alcoholic: true,
    Glass: "Shot glass",
    Instructions:
      "Pour all ingredients in a mixing tin over ice, stir, and strain into shot glass",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/7if5kq1503564209.jpg",
    Ingredients:[ "Vodka", "Chambord raspberry liqueur", "Peachtree schnapps","Cranberry juice"],
    Measures:[ "1/2 oz ", "1/2 oz ", "1/2 oz ", "1/2 oz "],
    Date: "2017-08-24 09:43:29",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Gideon's Green Dinosaur",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins glass",
    Instructions: "Add all ingredients in collins glass with ice and stir.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/p5r0tr1503564636.jpg",
    Ingredients:[ "Dark rum", "Vodka", "Triple sec","Tequila", "Melon liqueur", "Mountain Dew"],
    Measures:[ "1/2 oz ", "1/2 oz ", "1/2 oz ", "1/2 oz ", "1/2 oz ", "Fill with "],
    Date: "2017-08-24 09:50:36",
    isPublic: true,
    Like: 0
  },
  {
    Name: "A true Amaretto Sour",
    Tags: null,
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      'Rub the rim of an old fashioned glass with lemon, and dip repeatedly into granulated sugar until it has a good "frosted" rim. Shake a jigger of Amaretto with the juice of 1/2 a lemon. Strain into glass and add ice. Garnish with a Marachino Cherry.',
    Image:
      "https://www.thecocktaildb.com/images/media/drink/rptuxy1472669372.jpg",
    Ingredients:[ "Amaretto", "Lemon", "Ice","Maraschino cherry"],
    Measures:[ "1 jigger ", "Juice of 1/2 "],
    Date: "2016-08-31 19:49:32",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Kool First Aid",
    Tags: null,
    Alcoholic: true,
    Glass: "Shot glass",
    Instructions:
      "Add Kool Aid to a double shot glass, and top with rum. Slam and shoot.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/hfp6sv1503564824.jpg",
    Ingredients:[ "151 proof rum", "Kool-Aid",""],
    Measures:[ "2 oz light ", "1/2 tsp Tropical "],
    Date: "2017-08-24 09:53:44",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Irish Russian",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Add the ingredients in the order listed in the recipe. Care must be taken when adding the Guinness to prevent an excess of foam. Do Not add ice.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/swqurw1454512730.jpg",
    Ingredients:[ "Vodka", "Kahlua", "Coca-Cola","Guinness stout"],
    Measures:[ "1 shot ", "1 shot ", "1 dash ", "Fill with "],
    Date: "2016-02-03 15:18:50",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Auburn Headbanger",
    Tags: null,
    Alcoholic: true,
    Glass: "Shot glass",
    Instructions:
      "Mix in spread glass over ice. Strain and pour in shot glass. Sit down before shotting. ENJOY!!",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vw7iv91493067320.jpg",
    Ingredients:[ "J\u00e4germeister", "Goldschlager",""],
    Measures:[ "1 oz ", "1 oz "],
    Date: "2017-04-24 21:55:20",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Zima Blaster",
    Tags: null,
    Alcoholic: true,
    Glass: "Hurricane glass",
    Instructions:
      "Fill glass with ice. Pour in Chambord, then fill with Zima. Mix and enjoy.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/1wifuv1485619797.jpg",
    Ingredients:[ "Zima", "Chambord raspberry liqueur",""],
    Measures:[ "12 oz ", "3 oz "],
    Date: "2017-01-28 16:09:57",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Buccaneer",
    Tags: null,
    Alcoholic: true,
    Glass: "Beer pilsner",
    Instructions:
      "Pour the corona into an 18oz beer glass pour the bacardi limon into the beer stir very gently",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/upvtyt1441249023.jpg",
    Ingredients:[ "Corona", "Bacardi Limon",""],
    Measures:[ "1 ", "1 shot "],
    Date: "2015-09-03 03:57:03",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Homemade Kahlua",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions:
      'Dissolve sugar in 2 cups of boiling water and add corn syrup. Dissolve the instant coffee in the remaining water. Pour syrup and coffee in a gallon jug. Let it cool. Add vodka and vanilla when cold. For the best result, let the mixture "mature" for 4-5 weeks.',
    Image:
      "https://www.thecocktaildb.com/images/media/drink/uwtsst1441254025.jpg",
    Ingredients:[ "Sugar", "Corn syrup", "Coffee","Vanilla extract", "Water", "Vodka"],
    Measures:[ "2 1/2 cups ", "1 cup ", "1 1/2 oz instant ", "2 oz ", "3 cups boiling ", "1 fifth "],
    Date: "2015-09-03 05:20:25",
    isPublic: true,
    Like: 0
  },
  {
    Name: "24k nightmare",
    Tags: null,
    Alcoholic: true,
    Glass: "Shot glass",
    Instructions: "Add over ice,shake and pour.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/yyrwty1468877498.jpg",
    Ingredients:[ "Goldschlager", "J\u00e4germeister", "Rumple Minze","151 proof rum"],
    Measures:[ "1/2 oz ", "1/2 oz ", "1/2 oz ", "1/2 oz Bacardi "],
    Date: "2016-07-18 22:31:38",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Caribbean Boilermaker",
    Tags: null,
    Alcoholic: true,
    Glass: "Beer pilsner",
    Instructions:
      "Pour the Corona into an 18oz beer glass pour the rum into the beer.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/svsxsv1454511666.jpg",
    Ingredients:[ "Corona", "Light rum",""],
    Measures:[ "1 bottle ", "1 shot "],
    Date: "2016-02-03 15:01:06",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Army special",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Pour Vodka, Gin and lime cordial into glass, and top up with crushed ice. Wait for ice to melt slightly and sip without a straw.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/55muhh1493068062.jpg",
    Ingredients:[ "Vodka", "Gin", "Lime juice cordial","Ice"],
    Measures:[ "30 ml ", "30 ml ", "45 ml ", "1/2 glass crushed "],
    Date: "2017-04-24 22:07:42",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Arizona Twister",
    Tags: null,
    Alcoholic: true,
    Glass: "Hurricane glass",
    Instructions:
      "Just mix in the shots of rum, vodka, and tequila. Add splashes of the three juices, heavy on the pineapple. Top off with grenadine. Crushed ice should already be in glass. Top off the glass with a pineapple wedge.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/ido1j01493068134.jpg",
    Ingredients:[ "Vodka", "Malibu rum", "Gold tequila","Orange juice", "Pineapple juice", "Cream of coconut", "Grenadine", "Ice", "Pineapple"],
    Measures:[ "1 shot ", "1 shot ", "1 shot ", "1 splash ", "1 splash ", "1 splash ", "1 dash ", "crushed ", "1 wedge "],
    Date: "2017-04-24 22:08:55",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Baby Guinness",
    Tags: null,
    Alcoholic: true,
    Glass: "Shot glass",
    Instructions:
      'Pour Kahlua, almost filling shot glass. Then, carefully pour Baileys, using wall of shot glass. This will give the "Guinness" its "head".',
    Image:
      "https://www.thecocktaildb.com/images/media/drink/rvyvxs1473482359.jpg",
    Ingredients:[ "Kahlua", "Bailey's irish cream",""],
    Measures:[ "2 1/2 oz ", "1/2 oz "],
    Date: "2016-09-10 05:39:19",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Alice in Wonderland",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions: "Just mix the three ingredients one to one to one",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/g12lj41493069391.jpg",
    Ingredients:[ "Amaretto", "Grand Marnier", "Southern Comfort",""],
    Measures:[ "1 shot ", "1 shot ", "1 shot "],
    Date: "2017-04-24 22:29:51",
    isPublic: true,
    Like: 0
  },
  {
    Name: "501 Blue",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions: "Mix equal amounts into a glass with ice.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/ywxwqs1461867097.jpg",
    Ingredients:[ "Blue Curacao", "Blueberry schnapps", "Vodka","Sour mix", "7-Up"],
    Measures:[],
    Date: "2016-04-28 19:11:37",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Coke and Drops",
    Tags: null,
    Alcoholic: false,
    Glass: "Cocktail glass",
    Instructions:
      "Take a glass, pour the Coke in the glass, then you take 7 drops of lemon juice. Granish with a lemon slice on the rim of the glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/yrtxxp1472719367.jpg",
    Ingredients:[ "Coca-Cola", "Lemon juice",""],
    Measures:[ "1 dl ", "7 drops "],
    Date: "2016-09-01 09:42:47",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Ruby Tuesday",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Pour gin and cranberry into a highball filled with ice cubes. Add grenadine and stir.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/qsyqqq1441553437.jpg",
    Ingredients:[ "Gin", "Cranberry juice", "Grenadine",""],
    Measures:[ "2 oz ", "5 oz ", "2 splashes "],
    Date: "2015-09-06 16:30:37",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Arctic Mouthwash",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Blend all ingredients in a blender on high until ice is finely crushed. It should be of a slushy consistency. Pour immediately and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/wqstwv1478963735.jpg",
    Ingredients:[ "Maui", "Mountain Dew", "Ice",""],
    Measures:[ "5 oz blue ", "5 oz ", " cubes\n"],
    Date: "2016-11-12 15:15:35",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Brain Fart",
    Tags: null,
    Alcoholic: true,
    Glass: "Punch bowl",
    Instructions:
      "Mix all ingredients together. Slowly and gently. Works best if ice is added to punch bowl and soda's are very cold.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/rz5aun1504389701.jpg",
    Ingredients:[ "Everclear", "Vodka", "Mountain Dew","Surge", "Lemon juice", "Rum"],
    Measures:[ "1 fifth ", "1 fifth Smirnoff red label ", "2 L ", "2 L ", "1 small bottle ", "1 pint "],
    Date: "2017-09-02 23:01:42",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Royal Bitch",
    Tags: null,
    Alcoholic: true,
    Glass: "Shot glass",
    Instructions:
      "Into a shot glass layer the Crown Royal on top of the Frangelico.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/qupuyr1441210090.jpg",
    Ingredients:[ "Frangelico", "Crown Royal",""],
    Measures:[ "1 part ", "1 part "],
    Date: "2015-09-02 17:08:10",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Citrus Coke",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball Glass",
    Instructions:
      "Pour half of coke in a glass. Then add Bacardi and top it off with the remaining coke. Stir and drink up!",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/uyrvut1479473214.jpg",
    Ingredients:[ "Bacardi Limon", "Coca-Cola",""],
    Measures:[ "1 part ", "2 parts "],
    Date: "2016-11-18 12:46:54",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Smut",
    Tags: null,
    Alcoholic: true,
    Glass: "Beer mug",
    Instructions: "Throw it all together and serve real cold.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/rx8k8e1504365812.jpg",
    Ingredients:[ "Red wine", "Peach schnapps", "Pepsi Cola","Orange juice"],
    Measures:[ "1/3 part ", "1 shot ", "1/3 part ", "1/3 part "],
    Date: "2017-09-02 16:23:32",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Raspberry Cooler",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Pour the raspberry vodka and soda into a highball glass almost filled with ice cubes. Stir well.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/suqyyx1441254346.jpg",
    Ingredients:[ "Raspberry vodka", "Lemon-lime soda", "Ice",""],
    Measures:[ "2 oz ", "4 oz "],
    Date: "2015-09-03 05:25:46",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Amaretto Sunset",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins Glass",
    Instructions:
      "Shake ingredients in bartender's mixer quickly, just 5 shakes. Strain out ice, serve in glass immediately with a slice of orange.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/apictz1493069760.jpg",
    Ingredients:[ "Triple sec", "Amaretto", "Cider","Ice"],
    Measures:[ "1/2 jigger ", "3 shots ", "1/2 cup ", "Add 1/2 cup "],
    Date: "2017-04-24 22:36:00",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Cherry Electric Lemonade",
    Tags: null,
    Alcoholic: null,
    Glass: "Pint glass",
    Instructions:
      "Now stir vigorously and then pour over a large cup of ice. Now drink it with a straw and stir occasionally.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/tquyyt1451299548.jpg",
    Ingredients:[ "Gin", "Tequila", "Vodka","White rum", "Triple Sec", "Cherry Grenadine", "Sweet and sour", "Club soda"],
    Measures:[ "1 oz", "1 oz", "1 oz", "1 oz", "1 oz", "1 oz", "1 oz", "3 oz"],
    Date: "2015-12-28 10:45:48",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Girl From Ipanema",
    Tags: null,
    Alcoholic: true,
    Glass: "Wine Glass",
    Instructions:
      "Add the cachaca, lemon juice and syrup to your boston glass. Add ice and shake until ice cold. Pour into a chilled flute and top-up with Champagne",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/xypspq1469090633.jpg",
    Ingredients:[ "Cachaca", "Lemon Juice", "Agave Syrup","Champagne"],
    Measures:[ "25 ml", "15 ml", "10 ml", "top up with"],
    Date: "2016-07-21 09:43:53",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Ipamena",
    Tags: null,
    Alcoholic: false,
    Glass: "Wine Glass",
    Instructions:
      "Cut half a lime into pieces, place in a shaker, add the sugar and crush. Measure the passion fruit juice, add it to the shaker and fill up with ice cubes. Close the shaker and shake vigorously. Pour the liquid into a glass, top up with ginger ale, stir with a teaspoon and then garnish the rim of the glass with a slice of lime",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/yswuwp1469090992.jpg",
    Ingredients:[ "Lime", "Brown sugar", "Passion fruit juice","Ginger ale", "Ice"],
    Measures:[ "\u00bd", "2 tsp", "4 cl", "top up with", "fill"],
    Date: "2016-07-21 09:49:52",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Dark Caipirinha",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Muddle the sugar into the lime wedges in an old-fashioned glass.\r\nFill the glass with ice cubes.\r\nPour the cachaca into the glass.\r\nStir well.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/uwstrx1472406058.jpg",
    Ingredients:[ "demerara Sugar", "Lime", "Cachaca",""],
    Measures:[ "2 tsp ", "1", "2 1/2 oz"],
    Date: "2016-08-28 18:40:58",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Jam Donut",
    Tags: null,
    Alcoholic: true,
    Glass: "Shot glass",
    Instructions:
      "Coat the rim of a shot glass with sugar using sugar syrup to stick. Add the Chambord raspberry liqueur to the shot glass, and carefully layer the Baileys Irish Cream on top. Serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/uuytrp1474039804.jpg",
    Ingredients:[ "Baileys irish cream", "Chambord raspberry liqueur", "Sugar syrup","Sugar"],
    Measures:[ "2/3 oz", "1/3 oz", "1 tsp", "2 pinches"],
    Date: "2016-09-16 16:30:04",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Aviation",
    Tags: "IBA,Classic",
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Add all ingredients into cocktail shaker filled with ice. Shake well and strain into cocktail glass. Garnish with a cherry.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/ruutxt1478253328.jpg",
    Ingredients:[ "Gin", "lemon juice", "maraschino liqueur",""],
    Measures:[ "4.5 cl", "1.5 cl", "1.5 cl"],
    Date: "2016-11-04 09:55:28",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Dirty Martini",
    Tags: "IBA,NewEra",
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Pour the vodka, dry vermouth and olive brine into a cocktail shaker with a handful of ice and shake well.\r\nRub the rim of a martini glass with the wedge of lemon.\r\nStrain the contents of the cocktail shaker into the glass and add the olive.\r\nA dirty Martini contains a splash of olive brine or olive juice and is typically garnished with an olive.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vcyvpq1485083300.jpg",
    Ingredients:[ "Vodka", "Dry Vermouth", "Olive Brine","Lemon", "Olive"],
    Measures:[ "70ml/2fl oz", "1 tbsp", "2 tbsp", "1 wedge", "1"],
    Date: "2017-01-22 11:08:20",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Duchamp's Punch",
    Tags: null,
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "Shake all ingredients.\r\nDouble strain in a chilled double old fashioned glass with abig ice cube.\r\nGarnish with a couple of lavender sprigs",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/g51naw1485084685.jpg",
    Ingredients:[ "Pisco", "Lime Juice", "Pineapple Syrup","St. Germain", "Angostura Bitters", "Pepper", "Lavender"],
    Measures:[ "5 cl", "2.5 cl", "2.5 cl", "1.5 cl", "2 Dashes", "Pinch", "2 sprigs"],
    Date: "2017-01-22 11:31:25",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Bacardi Cocktail",
    Tags: "IBA,Classic",
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions: "Shake together with ice. Strain into glass and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/n433t21504348259.jpg",
    Ingredients:[ "Light rum", "Lime juice", "Sugar syrup","Grenadine"],
    Measures:[ "1 3/4 oz Bacardi ", "1 oz ", "1/2 tsp ", "1 dash "],
    Date: "2017-09-02 11:30:59",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Between The Sheets",
    Tags: "IBA,Classic",
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Pour all ingredients into shaker with ice cubes, shake, strain into chilled cocktail glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/of1rj41504348346.jpg",
    Ingredients:[ "Brandy", "Light rum", "Triple sec","Lemon juice"],
    Measures:[ "1 oz ", "1 oz ", "1 oz ", "1 oz "],
    Date: "2017-09-02 11:32:26",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Casino",
    Tags: "IBA",
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Pour all ingredients into shaker with ice cubes. Shake well. Strain into chilled cocktail glass. Garnish with a lemon twist and a maraschino cherry. Serve without a straw.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/1mvjxg1504348579.jpg",
    Ingredients:[ "Gin", "Maraschino liqueur", "Lemon juice","Orange bitters", "Cherry"],
    Measures:[ "2 oz ", "1/4 tsp ", "1/4 tsp ", "2 dashes ", "1 "],
    Date: "2017-09-02 11:36:19",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Clover Club",
    Tags: "IBA,Classic",
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Dry shake ingredients to emulsify, add ice, shake and served straight up.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/t0aja61504348715.jpg",
    Ingredients:[ "Gin", "Grenadine", "Lemon","Egg white"],
    Measures:[ "1 1/2 oz ", "2 tsp ", "Juice of 1/2 ", "1 "],
    Date: "2017-09-02 11:38:35",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Derby",
    Tags: "Classic,IBA",
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Pour all ingredients into a mixing glass with ice. Stir. Strain into a cocktail glass. Garnish with a sprig of fresh mint in the drink.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/i502ra1504349156.jpg",
    Ingredients:[ "gin", "Peach Bitters", "Mint",""],
    Measures:[ "6 cl", "2 dashes", "2 Fresh leaves"],
    Date: "2017-09-02 11:45:56",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Mary Pickford",
    Tags: "IBA,Classic",
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions: "Shake and strain into a chilled large cocktail glass",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/f9erqb1504350557.jpg",
    Ingredients:[ "Light rum", "Pineapple juice", "Maraschino liqueur","Grenadine", "Maraschino cherry"],
    Measures:[ "1 1/2 oz ", "1 oz ", "1/2 tsp ", "1/2 tsp ", "1 "],
    Date: "2017-09-02 12:09:17",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Monkey Gland",
    Tags: "IBA,Classic",
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Shake well over ice cubes in a shaker, strain into a chilled cocktail glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/94psp81504350690.jpg",
    Ingredients:[ "Gin", "Benedictine", "Orange juice","Grenadine"],
    Measures:[ "2 oz ", "1 tsp ", "1/2 oz ", "1 tsp "],
    Date: "2017-09-02 12:11:31",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Paradise",
    Tags: "IBA",
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Shake together over ice. Strain into cocktail glass and serve chilled.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/ejozd71504351060.jpg",
    Ingredients:[ "Gin", "Apricot Brandy", "Orange Juice",""],
    Measures:[ "7 parts", "4 parts", "3 parts "],
    Date: "2017-09-02 12:17:40",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Planter's Punch",
    Tags: "IBA,Classic",
    Alcoholic: true,
    Glass: "Collins glass",
    Instructions:
      'Pour all ingredients, except the bitters, into shaker filled with ice. Shake well. Pour into large glass, filled with ice. Add Angostura bitters, "on top". Garnish with cocktail cherry and pineapple.',
    Image:
      "https://www.thecocktaildb.com/images/media/drink/yvos231504351384.jpg",
    Ingredients:[ "Dark rum", "Orgeat syrup", "Orange juice","Pineapple juice"],
    Measures:[ "1 part ", "1/2 part ", "2 parts ", "1 part "],
    Date: "2017-09-02 12:23:04",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Porto flip",
    Tags: "IBA,Classic",
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Shake ingredients together in a mixer with ice. Strain into glass, garnish and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/64x5j41504351518.jpg",
    Ingredients:[ "Brandy", "Port", "Egg Yolk",""],
    Measures:[ "3 parts", "9 parts", "2 parts"],
    Date: "2017-09-02 12:25:18",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Stinger",
    Tags: "IBA,Classic",
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Pour in a mixing glass with ice, stir and strain into a cocktail glass. May also be served on rocks in a rocks glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/2ahv791504352433.jpg",
    Ingredients:[ "Brandy", "White Creme de Menthe",""],
    Measures:[ "1 1/2 oz ", "1/2 oz "],
    Date: "2017-09-02 12:40:33",
    isPublic: true,
    Like: 0
  },
  {
    Name: "White Lady",
    Tags: "IBA,Classic",
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Add all ingredients into cocktail shaker filled with ice. Shake well and strain into large cocktail glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/jofsaz1504352991.jpg",
    Ingredients:[ "Gin", "Triple Sec", "Lemon Juice",""],
    Measures:[ "4cl", "3cl", "2cl"],
    Date: "2017-09-02 12:49:52",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Bellini",
    Tags: "ContemporaryClassic,IBA",
    Alcoholic: true,
    Glass: "Champagne Flute",
    Instructions:
      "Pour peach pur\u00e9e into chilled flute, add sparkling wine. Stir gently.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/eaag491504367543.jpg",
    Ingredients:[ "Champagne", "Peach schnapps",""],
    Measures:[ "6 oz ", "1 oz "],
    Date: "2017-09-02 16:52:23",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Cosmopolitan",
    Tags: "IBA,ContemporaryClassic",
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Add all ingredients into cocktail shaker filled with ice. Shake well and double strain into large cocktail glass. Garnish with lime wheel.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/kpsajh1504368362.jpg",
    Ingredients:[ "Absolut Citron", "Lime juice", "Cointreau","Cranberry juice"],
    Measures:[ "1 1/4 oz ", "1/4 oz ", "1/4 oz ", "1/4 cup "],
    Date: "2017-09-02 17:06:02",
    isPublic: true,
    Like: 0
  },
  {
    Name: "French 75",
    Tags: "IBA,ContemporaryClassic",
    Alcoholic: true,
    Glass: "Collins glass",
    Instructions:
      "Combine gin, sugar, and lemon juice in a cocktail shaker filled with ice. Shake vigorously and strain into a chilled champagne glass. Top up with Champagne. Stir gently.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/4qnyty1504368615.jpg",
    Ingredients:[ "Gin", "Sugar", "Lemon juice","Champagne", "Orange", "Maraschino cherry"],
    Measures:[ "1 1/2 oz ", "2 tsp superfine ", "1 1/2 oz ", "4 oz Chilled ", "1 ", "1 "],
    Date: "2017-09-02 17:10:15",
    isPublic: true,
    Like: 0
  },
  {
    Name: "French Connection",
    Tags: "IBA,ContemporaryClassic",
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "Pour all ingredients directly into old fashioned glass filled with ice cubes. Stir gently.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/zaqa381504368758.jpg",
    Ingredients:[ "Cognac", "Amaretto",""],
    Measures:[ "1 1/2 oz ", "3/4 oz "],
    Date: "2017-09-02 17:12:39",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Golden dream",
    Tags: "IBA,ContemporaryClassic",
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions: "Shake with cracked ice. Strain into glass and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/qrot6j1504369425.jpg",
    Ingredients:[ "Galliano", "Triple Sec", "orange juice","Cream"],
    Measures:[ "2 parts", "2 parts", "2 parts", "1 part"],
    Date: "2017-09-02 17:23:45",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Grasshopper",
    Tags: "IBA,ContemporaryClassic",
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Pour ingredients into a cocktail shaker with ice. Shake briskly and then strain into a chilled cocktail glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/aqm9el1504369613.jpg",
    Ingredients:[ "Green Creme de Menthe", "Creme de Cacao", "Light cream",""],
    Measures:[ "3/4 oz ", "3/4 oz white ", "3/4 oz "],
    Date: "2017-09-02 17:26:53",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Hemingway Special",
    Tags: "IBA,ContemporaryClassic",
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions: "Pour all ingredients into a shaker with ice. Shake.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/jfcvps1504369888.jpg",
    Ingredients:[ "Rum", "Grapefruit Juice", "Maraschino Liqueur","Lime Juice"],
    Measures:[ "12 parts", "8 parts", "3 parts", "3 parts"],
    Date: "2017-09-02 17:31:28",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Horse's Neck",
    Tags: "IBA,ContemporaryClassic",
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Pour brandy and ginger ale directly into highball glass with ice cubes. Stir gently. Garnish with lemon zest. If desired, add dashes of Angostura Bitter.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/006k4e1504370092.jpg",
    Ingredients:[ "Lemon peel", "Brandy", "Ginger ale","Bitters"],
    Measures:[ "1 long strip ", "2 oz ", "5 oz ", "2 dashes "],
    Date: "2017-09-02 17:34:52",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Kir",
    Tags: "IBA,ContemporaryClassic",
    Alcoholic: true,
    Glass: "Wine Glass",
    Instructions:
      "Add the cr\u00e8me de cassis to the bottom of the glass, then top up with wine.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/apneom1504370294.jpg",
    Ingredients:[ "Creme de Cassis", "Champagne",""],
    Measures:[ "1 part ", "5 parts "],
    Date: "2017-09-02 17:38:14",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Long Island Iced Tea",
    Tags: "IBA,ContemporaryClassic",
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Mix all contents in a highball glass and sitr gently. Add dash of Coca-Cola for the coloring and garnish with lemon or lime twist.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/wx7hsg1504370510.jpg",
    Ingredients:[ "Vodka", "Tequila", "Light rum","Gin", "Coca-Cola", "Lemon peel"],
    Measures:[ "1/2 oz ", "1/2 oz ", "1/2 oz ", "1/2 oz ", "1 dash ", "Twist of "],
    Date: "2017-09-02 17:41:50",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Mimosa",
    Tags: "IBA,ContemporaryClassic",
    Alcoholic: true,
    Glass: "Champagne flute",
    Instructions:
      "Ensure both ingredients are well chilled, then mix into the glass. Serve cold.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/juhcuu1504370685.jpg",
    Ingredients:[ "Champagne", "Orange juice",""],
    Measures:[ "Chilled ", "2 oz "],
    Date: "2017-09-02 17:44:45",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Mint Julep",
    Tags: "IBA,ContemporaryClassic",
    Alcoholic: true,
    Glass: "Collins glass",
    Instructions:
      "In a highball glass gently muddle the mint, sugar and water. Fill the glass with cracked ice, add Bourbon and stir well until the glass is well frosted. Garnish with a mint sprig.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/squyyq1439907312.jpg",
    Ingredients:[ "Mint", "Bourbon", "Powdered sugar","Water"],
    Measures:[ "4 fresh ", "2 1/2 oz ", "1 tsp ", "2 tsp "],
    Date: "2015-08-18 15:15:12",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Pina Colada",
    Tags: "IBA,ContemporaryClassic",
    Alcoholic: true,
    Glass: "Collins glass",
    Instructions:
      "Mix with crushed ice in blender until smooth. Pour into chilled glass, garnish and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/cpf4j51504371346.jpg",
    Ingredients:[ "Light rum", "Coconut milk", "Pineapple",""],
    Measures:[ "3 oz ", "3 tblsp ", "3 tblsp "],
    Date: "2017-09-02 17:55:46",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Rose",
    Tags: "IBA,ContemporaryClassic",
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Shake together in a cocktail shaker, then strain into chilled glass. Garnish and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/8kxbvq1504371462.jpg",
    Ingredients:[ "Dry Vermouth", "Gin", "Apricot brandy","Lemon juice", "Grenadine", "Powdered sugar"],
    Measures:[ "1/2 oz ", "1 oz ", "1/2 oz ", "1/2 tsp ", "1 tsp "],
    Date: "2017-09-02 17:57:42",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Barracuda",
    Tags: "IBA,NewEra",
    Alcoholic: true,
    Glass: "Margarita glass",
    Instructions:
      "Shake pour ingredients with ice. Strain into glass, top with Sparkling wine.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/jwmr1x1504372337.jpg",
    Ingredients:[ "Rum", "Galliano", "Pineapple Juice","Lime Juice", "Prosecco"],
    Measures:[ "4.5 cl", "1.5 cl", "6 cl", " 1 dash", "top up "],
    Date: "2017-09-02 18:12:17",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Bramble",
    Tags: "IBA,NewEra",
    Alcoholic: true,
    Glass: "Old-Fashioned glass",
    Instructions:
      "Fill glass with crushed ice. Build gin, lemon juice and simple syrup over. Stir, and then pour blackberry liqueur over in a circular fashion to create marbling effect. Garnish with two blackberries and lemon slice.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/lvzl3r1504372526.jpg",
    Ingredients:[ "Gin", "lemon juice", "Sugar syrup","Creme de Mure"],
    Measures:[ "4 cl", "1.5 cl", "1 cl", "1.5 cl"],
    Date: "2017-09-02 18:15:26",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Dark and Stormy",
    Tags: "IBA,NewEra",
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "In a highball glass filled with ice add 6cl dark rum and top with ginger beer. Garnish with lime wedge.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/t1tn0s1504374905.jpg",
    Ingredients:[ "Dark Rum", "Ginger Beer",""],
    Measures:[ "5 cl", "10 cl"],
    Date: "2017-09-02 18:55:05",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Espresso Martini",
    Tags: "IBA,NewEra",
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Pour ingredients into shaker filled with ice, shake vigorously, and strain into chilled martini glass",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/n0sx531504372951.jpg",
    Ingredients:[ "Vodka", "Kahlua", "Sugar syrup",""],
    Measures:[ "5 cl", "1 cl", "1 dash"],
    Date: "2017-09-02 18:22:31",
    isPublic: true,
    Like: 0
  },
  {
    Name: "French Martini",
    Tags: "NewEra,IBA",
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Pour all ingredients into shaker with ice cubes. Shake well and strain into a chilled cocktail glass. Squeeze oil from lemon peel onto the drink.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/clth721504373134.jpg",
    Ingredients:[ "Vodka", "Raspberry Liqueur", "pineapple juice",""],
    Measures:[ "4.5 cl", "1.5 cl", "1.5 cl"],
    Date: "2017-09-02 18:25:34",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Russian Spring Punch",
    Tags: "IBA,NewEra",
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Pour the ingredients into an highball glass, top with Sparkling wine.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/ctt20s1504373488.jpg",
    Ingredients:[ "Vodka", "Creme de Cassis", "Sugar Syrup","Lemon Juice"],
    Measures:[ "2.5 cl", "1.5 cl", "1 cl", "2.5 cl"],
    Date: "2017-09-02 18:31:28",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Spritz",
    Tags: null,
    Alcoholic: true,
    Glass: "Old-Fashioned glass",
    Instructions: "Build into glass over ice, garnish and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/j9evx11504373665.jpg",
    Ingredients:[ "Prosecco", "Campari", "Soda Water",""],
    Measures:[ "6 cl", "4 cl", "splash"],
    Date: "2017-09-02 18:34:25",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Tommy's Margarita",
    Tags: "IBA,NewEra",
    Alcoholic: true,
    Glass: "Old-Fashioned glass",
    Instructions: "Shake and strain into a chilled cocktail glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/loezxn1504373874.jpg",
    Ingredients:[ "Tequila", "Lime Juice", "Agave syrup",""],
    Measures:[ "4.5 cl", "1.5 cl", "2 spoons"],
    Date: "2017-09-02 18:37:54",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Vampiro",
    Tags: "IBA,NewEra",
    Alcoholic: true,
    Glass: "Old-Fashioned glass",
    Instructions:
      'Vampiros may be made in a tall glass or an old fashioned glass. Bartenders may first "rim" the glass with Kosher Salt, which is done by placing a layer of Kosher Salt on a chopping board, moistening the glass\' rim with lime juice or water, and then placing the upside down glass rim onto the Kosher Salt, so that the salt sticks to the moistened rim. The second step is to fill half the glass with ice and add one or two shooter glasses full of high quality Tequila. The next stage is to add the flavouring elements. This is done by squeezing a fresh lime into the glass, adding a few grains of salt, adding citrus-flavoured soda pop, until the glass is 4/5 full, and then adding spicy Viuda de Sanchez (or orange juice, lime juice and pico de gallo). The final step is to stir the ingredients so that the flavours are properly blended.',
    Image:
      "https://www.thecocktaildb.com/images/media/drink/yfhn371504374246.jpg",
    Ingredients:[ "Tequila", "Tomato Juice", "Orange Juice","Lime Juice", "Sugar Syrup", "Salt"],
    Measures:[ "6 cl", "3 cl", "3 cl", "1.5 cl", "1 dash", "1 pinch"],
    Date: "2017-09-02 18:44:06",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Vesper",
    Tags: "IBA,NewEra",
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Shake over ice until well chilled, then strain into a deep goblet and garnish with a thin slice of lemon peel.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/mtdxpa1504374514.jpg",
    Ingredients:[ "Gin", "Vodka", "Lillet Blanc",""],
    Measures:[ "6 cl", "1.5 cl", "0.75 cl"],
    Date: "2017-09-02 18:48:34",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Yellow Bird",
    Tags: "IBA,NewEra",
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions: "Shake and strain into a chilled cocktail glass",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/2t9r6w1504374811.jpg",
    Ingredients:[ "White Rum", "Galliano", "Triple Sec","Lime Juice"],
    Measures:[ "3 cl", "1.5 cl", "1.5 cl", "1.5 cl"],
    Date: "2017-09-02 18:53:31",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Butter Baby",
    Tags: null,
    Alcoholic: true,
    Glass: "Beer mug",
    Instructions:
      "Blend together in a blender. Serve in a chilled Beer mug with Fresh Blueberries and caramel for topping.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/1xhjk91504783763.jpg",
    Ingredients:[ "Vanilla Ice-Cream", "Butterscotch schnapps", "Milk","Vodka"],
    Measures:[ "2 scoops ", "1 part ", "full glass ", "2 parts ", "\r\n", "\r\n", "\r\n"],
    Date: "2017-09-07 12:29:23",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Boozy Snickers Milkshake",
    Tags: null,
    Alcoholic: true,
    Glass: "Mason jar",
    Instructions:
      "Place the snickers bars in a plastic bag and roll over them with a rolling pin until crushed. Add crushed snickers pieces, ice cream, milk, caramel sauce, chocolate sauce, and chocolate liquor to a blender. Blend until shake is thick and frothy. Pour into glasses and top with chocolate liquor and whip cream.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/861tzm1504784164.jpg",
    Ingredients:[ "Vanilla Ice-Cream", "Milk", "Godiva liqueur","Whipped Cream", "caramel sauce", "chocolate sauce", "Mini-snickers bars"],
    Measures:[ "3 cups ", "1 cup ", "1/2 cup ", "for topping", "4 tablespoons\r\n", "4 tablespoons\r\n", "15\r\n"],
    Date: "2017-09-07 12:36:04",
    isPublic: true,
    Like: 0
  },
  {
    Name: "A1",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg",
    Ingredients:[ "Gin", "Grand Marnier", "Lemon Juice","Grenadine"],
    Measures:[ "1 3/4 shot ", "1 Shot ", "1/4 Shot", "1/8 Shot", "\r\n", "\r\n", "\r\n"],
    Date: "2017-09-07 21:42:09",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Abbey Martini",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Put all ingredients into a shaker and mix, then strain contents into a chilled cocktail glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/2mcozt1504817403.jpg",
    Ingredients:[ "Gin", "Sweet Vermouth", "Orange Juice","Angostura Bitters"],
    Measures:[ "2 shots ", "1 shot ", "1 shot ", "3 dashes ", "\r\n", "\r\n", "\r\n"],
    Date: "2017-09-07 21:50:03",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Absolutely Fabulous",
    Tags: null,
    Alcoholic: true,
    Glass: "Champagne flute",
    Instructions:
      "Mix the Vodka and Cranberry juice together in a shaker and strain into a glass. Top up with Champagne.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/abcpwr1504817734.jpg",
    Ingredients:[ "Vodka", "Cranberry Juice", "Champagne",""],
    Measures:[ "1 shot ", "2 shots ", "Top up with", "\r\n", "\r\n", "\r\n", "\r\n"],
    Date: "2017-09-07 21:55:34",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Ace",
    Tags: null,
    Alcoholic: true,
    Glass: "Martini Glass",
    Instructions:
      "Shake all the ingredients in a cocktail shaker and ice then strain in a cold glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg",
    Ingredients:[ "Gin", "Grenadine", "Heavy cream","Milk", "Egg White"],
    Measures:[ "2 shots ", "1/2 shot ", "1/2 shot ", "1/2 shot ", "1/2 Fresh", "\r\n", "\r\n"],
    Date: "2017-09-07 22:05:06",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Adam & Eve",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Shake together all the ingredients and strain into a cold glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vfeumw1504819077.jpg",
    Ingredients:[ "Gin", "Cognac", "Creme de Cassis","Fresh Lemon Juice"],
    Measures:[ "1 shot ", "1 shot ", "1 shot ", "1/8 shot "],
    Date: "2017-09-07 22:17:58",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Addington",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Mix both the vermouth's in a shaker and strain into a cold glass. Top up with a squirt of Soda Water. ",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/ib0b7g1504818925.jpg",
    Ingredients:[ "Sweet Vermouth", "Dry Vermouth", "Soda Water",""],
    Measures:[ "2 shots ", "1 shot ", "Top up with\r\n", "\r\n", "\r\n", "\r\n", "\r\n"],
    Date: "2017-09-07 22:15:25",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Addison",
    Tags: null,
    Alcoholic: true,
    Glass: "Martini Glass",
    Instructions:
      "Shake together all the ingredients and strain into a cold glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/yzva7x1504820300.jpg",
    Ingredients:[ "Gin", "Vermouth",""],
    Measures:[ "1 1/2 shot ", "1 1/2 shot ", "\r\n", "\r\n", "\r\n", "\r\n", "\r\n"],
    Date: "2017-09-07 22:38:20",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Adios Amigos Cocktail",
    Tags: null,
    Alcoholic: true,
    Glass: "Martini Glass",
    Instructions:
      "Shake together all the ingredients and strain into a cold glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/8nk2mp1504819893.jpg",
    Ingredients:[ "Rum", "Dry Vermouth", "Cognac","Gin", "Fresh Lime Juice", "Sugar Syrup", "Water"],
    Measures:[ "1 shot ", "1/2 shot ", "1/2 shot ", "1/2 shot ", "1/4 shot", "1/4 shot", "1/2 shot "],
    Date: "2017-09-07 22:31:33",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Gin Rickey",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Half-fill a tall glass with ice. Mix the gin and Grenadine together and pour over the ice. Add the lime or lemon juice and top off with soda water. Decorate the glass with lime and/or lemon slices.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/s00d6f1504883945.jpg",
    Ingredients:[ "Gin", "Grenadine", "lemon","Soda Water", "Lime"],
    Measures:[ "2 oz ", "1 tsp ", "Juice of 1/2 ", "Top up with", "Garnish", "\r\n", "\r\n"],
    Date: "2017-09-08 16:19:05",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Salted Toffee Martini",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Add ice, toffee gin, chocolate liqueur and Amaretto to a cocktail shaker and shake vigorously. \r\nPour the chocolate syrup into a saucer and dip the top of a martini glass into the sauce. Grate some of the Willie\\'s sea salt chocolate into another saucer and dip the coated glass, so the flakes stick to the sauce, creating a chocolate rim!\r\nPour the contents of the shaker into your chocolatey glass and sprinkle with more grated chocolate - enjoy!  ",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/3s6mlr1509551211.jpg",
    Ingredients:[ "Gin", "Chocolate liqueur", "Amaretto","Chocolate Sauce", "Salted Chocolate"],
    Measures:[ "50 ml ", "30 ml ", "15 ml", "Garnish", "Grated\r\n", "\r\n", "\r\n"],
    Date: "2017-11-01 15:46:51",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Hunter's Moon",
    Tags: null,
    Alcoholic: true,
    Glass: "Balloon Glass",
    Instructions:
      "Put the Bombay Sapphire, Martini Bianco, sugar syrup & blackberries in a cocktail shaker with lots of ice and shake vigorously before pouring into a balloon glass, topping up with lemonade and garnishing with a wedge of orange.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/t0iugg1509556712.jpg",
    Ingredients:[ "Vermouth", "Maraschino Cherry", "Sugar Syrup","Lemonade", "Blackberries"],
    Measures:[ "25 ml", "15 ml", "10 ml", "100 ml", "2"],
    Date: "2017-11-01 17:18:32",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Zombie",
    Tags: null,
    Alcoholic: true,
    Glass: "Hurricane glass",
    Instructions:
      "\r\nBlend at high speed for no more than 5 seconds.\r\n\r\nPour into a glass, add ice cubes to fill, then add the garnish.\r\n\r\n*Donn\u2019s mix: Bring 3 crushed cinnamon sticks, 1 cup of sugar and 1 cup of water to a boil, stirring until the sugar is dissolved.\r\n\r\nSimmer for 2 minutes, then remove from the heat and let sit for at least 2 hours before straining into a clean glass bottle.\r\n\r\nThen add 1 part of the syrup and 2 parts of fresh grapefruit juice together.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/2en3jk1509557725.jpg",
    Ingredients:[ "Rum", "Gold rum", "151 proof rum","Pernod", "Grenadine", "Lime Juice", "Angostura Bitters"],
    Measures:[ "1 1/2 oz", "1 1/2 oz", "1 oz", "1 tsp", "1 tsp", "1 tsp", "1 drop"],
    Date: "2017-11-01 17:35:26",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Bombay Cassis",
    Tags: null,
    Alcoholic: true,
    Glass: "Balloon Glass",
    Instructions:
      "Add the Bombay Sapphire, Cr\u00e8me de Cassis and lime juice to a balloon glass and swirl well to mix.\r\nFill the glass with good quality cubed ice.\r\nTop up with chilled and freshly opened Fever-Tree Ginger Beer.\r\nGently stir to combine, top with a gently squeezed lime wedge and finish with a fresh ginger slice.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/h1e0e51510136907.jpg",
    Ingredients:[ "Gin", "Creme de Cassis", "Fresh Lime Juice","Ginger beer", "Lime", "Ginger"],
    Measures:[ "50 ml", "20 ml", "15 ml", "75 ml", "1", "1 long strip"],
    Date: "2017-11-08 10:28:28",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Rosemary Blue",
    Tags: null,
    Alcoholic: true,
    Glass: "Balloon Glass",
    Instructions:
      "1) Add the Bombay Sapphire, Blue Curacao, rosemary sprig and gently squeezed lemon wedge to a balloon glass. Swirl well to combine.\r\n2) Fill with cubed ice and top with the Fever-Tree Light Tonic Water.\r\n3) Gently fold with a bar spoon to mix.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/qwc5f91512406543.jpg",
    Ingredients:[ "Gin", "Blue Curacao", "Tonic Water","Rosemary"],
    Measures:[ "50 ml", "15 ml", "100 ml", "Garnish with"],
    Date: "2017-12-04 16:55:43",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Empell\u00f3n Cocina's Fat-Washed Mezcal",
    Tags: null,
    Alcoholic: true,
    Glass: "Beer Glass",
    Instructions:
      'To ensure that your pork fat is just as delicious as theirs, here\u2019s their adobo marinade and what to do with it (you\u2019ll also need a rack of ribs):\r\n\r\n4 ancho chiles, 8 guajillo chiles and 4 chipotle chiles, plus 4 cloves roasted garlic, half a cup of cider vinegar, a quarter teaspoon of Mexican oregano, 1 teaspoon of ground black pepper, a whole clove, a quarter teaspoon of ground cinnamon and a half teaspoon of ground cumin.\r\n\r\nToast the dried chiles and soak in water for at least an hour until they are rehydrated. Drain and discard the soaking liquid. Combine the soaked chiles with the remaining ingredients and pur\u00e9e until smooth.\r\n\r\nCold smoke a rack of baby back pork ribs by taking a large hotel pan with woodchips on one side and charcoal on the other. Place another, smaller, pan with pork ribs, above the charcoal/woodchip pan. Ignite the charcoal, being careful to not ignite the woodchips. Cover both pans with foil and allow to smoke for 10-15 minutes, until desired level of smoke is achieved, then coat with adobo marinade and wrap in tin foil prior to placing ribs in a 300 degree oven for 7 hours. When the ribs have cooled, strain off the fat and use for the infusion.\r\n\r\nIf you\u2019re having a hard time coming up to the same kind of volume of fat, make up the balance with pork lard from a butcher. To get the same depth of flavor without the ribs, heat up the fat in a pot with a few spoons of the marinade.\r\n\r\nOnce you\u2019ve got your tub of seasoned pork fat in cooled liquid form, pour equal amounts of Ilegal Joven mezcal and fat into a sealable container. Seal the container and give it a really good shake, then put it in the freezer overnight. When the whole thing is separated and congealed, pour it through a fine mesh chinoise. If you don\u2019t have a chinoise, try a fine mesh strainer, or if you don\u2019t have one of those, try spooning off most of the fat. There will be some beads of orange fat left in the strained mezcal: run that through a few layers of cheesecloth (or coffee filters in a pinch) to get rid of the last of it.\r\n\r\nThe mezcal is now ready for drinking, straight-up or in a cocktail. \r\n\r\nHabanero tincture\r\n\r\nSlice habaneros and add 2 ounces Ilegal Joven mezcal.\r\nAllow to sit overnight or until desired level of heat is achieved.\r\nCocktail\r\n\r\nCombine mezcal and chocolate liqueur in a mixing glass with ice and stir for 45 seconds.\r\nStrain into chilled coupe.\r\nCarefully "sink" the coffee liqueur down the inside of the coupe over a spoon.\r\nGarnish with 5 drops habanero tincture.',
    Image:
      "https://www.thecocktaildb.com/images/media/drink/osgvxt1513595509.jpg",
    Ingredients:[ "Mezcal", "Chocolate liqueur", "Coffee liqueur",""],
    Measures:[ "2 oz", "3/4 oz", "1/2 oz"],
    Date: "2017-12-18 11:11:49",
    isPublic: true,
    Like: 0
  },
  {
    Name: "The Last Word",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions: "Shake with ice and strain into a cocktail glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/91oule1513702624.jpg",
    Ingredients:[ "Green Chartreuse", "Maraschino Liqueur", "Lime Juice",""],
    Measures:[ "1 oz", "1 oz", "1 oz"],
    Date: "2017-12-19 16:57:04",
    isPublic: true,
    Like: 0
  },
  {
    Name: "French Negroni",
    Tags: null,
    Alcoholic: true,
    Glass: "Martini Glass",
    Instructions:
      "Add ice to a shaker and pour in all ingredients.\nUsing a bar spoon, stir 40 to 45 revolutions or until thoroughly chilled.\nStrain into a martini glass or over ice into a rocks glass. Garnish with orange twist.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/x8lhp41513703167.jpg",
    Ingredients:[ "Gin", "Lillet", "Sweet Vermouth","Orange Peel"],
    Measures:[ "1 oz", "1 oz", "1 oz", "1"],
    Date: "2017-12-19 17:06:07",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Pegu Club",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions: "Shake, strain, up, cocktail glass",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/jfkemm1513703902.jpg",
    Ingredients:[ "Gin", "Orange Curacao", "Lime Juice","Angostura Bitters", "Orange Bitters"],
    Measures:[ "1 1/2 oz", "3/4 oz", "3/4 oz", "1 dash", "1 dash"],
    Date: "2017-12-19 17:18:23",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Corpse Reviver #2",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Shake, strain, straight up, cocktail glass rinsed with absinthe\r\n",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/gifgao1513704334.jpg",
    Ingredients:[ "Gin", "Triple Sec", "Lillet Blanc","Lemon Juice", "Absinthe"],
    Measures:[ "3/4 oz", "3/4 oz", "3/4 oz", "3/4 oz", "1 dash"],
    Date: "2017-12-19 17:25:34",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Boulevardier",
    Tags: null,
    Alcoholic: true,
    Glass: "Martini Glass",
    Instructions: "Stir with ice, strain, garnish and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/km84qi1513705868.jpg",
    Ingredients:[ "Campari", "Sweet Vermouth", "Rye whiskey","Orange Peel"],
    Measures:[ "1 oz", "1 oz", "1 1/4 oz", "1"],
    Date: "2017-12-19 17:51:08",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Greyhound",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins glass",
    Instructions:
      "Add the vodka to a Collins glass filled with ice.\nTop with grapefruit juice and stir.\n\n",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/g5upn41513706732.jpg",
    Ingredients:[ "Vodka", "Grapefruit Juice",""],
    Measures:[ "1 1/2 oz", "3 oz"],
    Date: "2017-12-19 18:05:32",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Paloma",
    Tags: null,
    Alcoholic: true,
    Glass: "Collins glass",
    Instructions: "Stir together and serve over ice.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/samm5j1513706393.jpg",
    Ingredients:[ "Grape Soda", "Tequila",""],
    Measures:[ "3 oz", "1 1/2 oz"],
    Date: "2017-12-19 17:59:53",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Bijou",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions: "Stir in mixing glass with ice and strain\r\n",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/rysb3r1513706985.jpg",
    Ingredients:[ "Orange Bitters", "Green Chartreuse", "Gin","Sweet Vermouth"],
    Measures:[ "1 dash", "1 oz", "1 oz", "1 oz"],
    Date: "2017-12-19 18:09:45",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Gimlet",
    Tags: null,
    Alcoholic: true,
    Glass: "Martini Glass",
    Instructions:
      "Add all the ingredients to a shaker and fill with ice.\r\n\r\nShake, and strain into a chilled cocktail glass or an Old Fashioned glass filled with fresh ice.\r\n\r\nGarnish with a lime wheel.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/3xgldt1513707271.jpg",
    Ingredients:[ "Gin", "Lime Juice", "Sugar Syrup","Lime"],
    Measures:[ "2 1/2 oz", "1/2 oz", "1/2 oz", "1"],
    Date: "2017-12-19 18:14:32",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Martinez 2",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Add all ingredients to a mixing glass and fill with ice.\r\n\r\nStir until chilled, and strain into a chilled coupe glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/fs6kiq1513708455.jpg",
    Ingredients:[ "Gin", "Sweet Vermouth", "Maraschino Liqueur","Angostura Bitters"],
    Measures:[ "1 1/2 oz", "1 1/2 oz", "1 tsp", "2 dashes"],
    Date: "2017-12-19 18:34:15",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Oatmeal Cookie",
    Tags: null,
    Alcoholic: true,
    Glass: "Mason jar",
    Instructions:
      "Just mix it all together.\r\nIt's meant to be a shot, but it works just fine as a proper adult-sized drink over lots of ice.\r\n\r\nTastes Like an oatmeal cookie.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/bsvmlg1515792693.jpg",
    Ingredients:[ "Kahlua", "Bailey", "Butterscotch schnapps","Jagermeister", "Goldschlager"],
    Measures:[ "2 parts", "2 parts", "4 parts", "1 part", "1/2 part"],
    Date: "2018-01-12 21:31:33",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Bahama Mama",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Add 2 parts club soda or more or less to taste.\r\n\r\nMix it all together and pour over a bunch of ice. Drink with a straw.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/tyb4a41515793339.jpg",
    Ingredients:[ "Rum", "Dark Rum", "Banana liqueur","Grenadine", "Pineapple Juice", "Orange Juice", "Sweet and Sour"],
    Measures:[ "3 parts", "1 part", "1 part", "1 part", "2 parts", "2 parts", "1 part"],
    Date: "2018-01-12 21:42:19",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Blue Hurricane",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "If each part is 1/2 oz then use about 2.5 cups of ice.\r\n\r\nBlend it all together. \r\nDrink it with a big straw if you have one.\r\n\r\n",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/nwx02s1515795822.jpg",
    Ingredients:[ "Rum", "Dark Rum", "Passoa","Blue Curacao", "Sweet and Sour", "Ice"],
    Measures:[ "4 parts", "2 parts", "1 part", "1 part", "6 parts", "cubes"],
    Date: "2018-01-12 22:23:42",
    isPublic: true,
    Like: 0
  },
  {
    Name: "The Laverstoke",
    Tags: null,
    Alcoholic: true,
    Glass: "Balloon Glass",
    Instructions:
      "1) Squeeze two lime wedges into a balloon glass then add the cordial, Bombay Sapphire and MARTINI Rosso Vermouth, swirl to mix.\r\n\r\n2) Fully fill the glass with cubed ice and stir to chill.\r\n\r\n3) Top with Fever-Tree Ginger Ale and gently stir again to combine.\r\n\r\n4) Garnish with a snapped ginger slice and an awoken mint sprig.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/6xfj5t1517748412.jpg",
    Ingredients:[ "Gin", "Elderflower cordial", "Rosso Vermouth","Tonic Water", "Lime", "Ginger", "Mint"],
    Measures:[ "50 ml", "15 ml", "15 ml", "75 ml", "2 Wedges", "1 Slice", "1 Large Sprig"],
    Date: "2018-02-04 12:46:52",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Brigadier",
    Tags: null,
    Alcoholic: true,
    Glass: "Coupe Glass",
    Instructions: "Mix ingredients in a warmed mug and stir.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/nl89tf1518947401.jpg",
    Ingredients:[ "Hot Chocolate", "Green Chartreuse", "Cherry Heering",""],
    Measures:[ "4 oz", "1 oz", "1 oz"],
    Date: "2018-02-18 09:50:01",
    isPublic: true,
    Like: 0
  },
  {
    Name: "The Jimmy Conway",
    Tags: null,
    Alcoholic: true,
    Glass: "Whiskey sour glass",
    Instructions:
      "Fill glass with ice\r\nPour in The Irishman and Disaronno\r\nFill to the top with Cranberry Juice\r\nGarnish with a slice of lemon\u2026Enjoy!",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/wbcvyo1535794478.jpg",
    Ingredients:[ "Irish Whiskey", "Amaretto", "Cranberry Juice",""],
    Measures:[ "50 ml", "50 ml", "4 oz"],
    Date: "2018-09-01 10:34:38",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Old Pal",
    Tags: null,
    Alcoholic: true,
    Glass: "Nick and Nora Glass",
    Instructions:
      "Chill cocktail glass. Add ingredients to a mixing glass, and fill 2/3 full with ice. Stir about 20 seconds. Empty cocktail glass and strain into the glass. Garnish with a twist of lemon peel.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/x03td31521761009.jpg",
    Ingredients:[ "Rye whiskey", "Campari", "Dry Vermouth",""],
    Measures:[ "2 oz", "1 oz", "1 oz"],
    Date: "2018-03-22 23:23:30",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Tipperary",
    Tags: null,
    Alcoholic: true,
    Glass: "Nick and Nora Glass",
    Instructions:
      "Stir over ice. Strain into chilled glass. Cut a wide swath of orange peel, and express the orange oils over the drink. Discard orange twist.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/b522ek1521761610.jpg",
    Ingredients:[ "Irish Whiskey", "Sweet Vermouth", "Green Chartreuse",""],
    Measures:[ "2 oz", "1 oz", "1/2 oz"],
    Date: "2018-03-22 23:33:30",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Penicillin",
    Tags: null,
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "Shake blended Scotch, lemon juice, honey syrup and ginger syrup with ice. Strain over large ice in chilled rocks glass. Float smoky Scotch on top (be sure to use a smoky Scotch such as an Islay single malt). Garnish with candied ginger.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/hc9b1a1521853096.jpg",
    Ingredients:[ "Blended Scotch", "Lemon Juice", "Honey syrup","Ginger Syrup", "Islay single malt Scotch"],
    Measures:[ "2 oz", "3/4 oz", "2 tsp", "2 tsp", "1/4 oz"],
    Date: "2018-03-24 00:58:16",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Corn n Oil",
    Tags: null,
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "Cut the half lime in half again. Add the lime, falernum, and bitters to a rocks glass. Muddle. Add the rum. (Aged Barbados rum such as Plantation 5 Year is recommended). Add ice and stir. Float the blackstrap rum on top. Serve with a straw.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/jfvyog1530108909.jpg",
    Ingredients:[ "Lime", "Falernum", "Angostura Bitters","A\u00f1ejo rum", "blackstrap rum"],
    Measures:[ "1/2", "1/3 oz", "2 dashes", "1 oz", "1 oz"],
    Date: "2018-06-27 15:15:09",
    isPublic: true,
    Like: 0
  },
  {
    Name: "A Furlong Too Late",
    strDrinkAlternate: null,
    strDrinkES: "A Furlong Demasiado tarde",
    strDrinkDE: "Eine lange Zeit zu sp\u00e4t",
    strDrinkFR: "Un furlong trop tard",
    "strDrinkZH-HANS": "\u5f17\u9686\u592a\u665a\u4e86",
    test: "\u5f17\u9686\u592a\u665a\u4e86",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Pour the rum and ginger beer into a highball glass almost filled with ice cubes. Stir well. Garnish with the lemon twist.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/ssxvww1472669166.jpg",
    Ingredients:[ "Light rum", "Ginger beer", "Lemon peel",""],
    Measures:[ "2 oz ", "4 oz ", "1 twist of "],
    Date: "2016-08-31 19:46:06",
    isPublic: true,
    Like: 0
  },
  {
    Name: "A Night In Old Mandalay",
    strDrinkAlternate: null,
    strDrinkES: "Una noche en el viejo Mandalay",
    strDrinkDE: "Eine Nacht in altem Mandalay",
    strDrinkFR: "Une nuit dans le vieux Mandalay",
    "strDrinkZH-HANS": "\u5728\u66fc\u5fb7\u52d2\u7684\u591c\u665a",
    test: "\u5728\u66fc\u5fb7\u52d2\u7684\u591c\u665a",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "In a shaker half-filled with ice cubes, combine the light rum, a\u00f1ejo rum, orange juice, and lemon juice. Shake well. Strain into a highball glass almost filled with ice cubes. Top with the ginger ale. Garnish with the lemon twist.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vyrvxt1461919380.jpg",
    Ingredients:[ "Light rum", "A\u00f1ejo rum", "Orange juice","Lemon juice", "Ginger ale", "Lemon peel"],
    Measures:[ "1 oz ", "1 oz ", "1 oz ", "1/2 oz ", "3 oz ", "1 twist of "],
    Date: "2016-04-29 09:43:00",
    isPublic: true,
    Like: 0
  },
  {
    Name: "A. J.",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Shake ingredients with ice, strain into a cocktail glass, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/uryyrr1472811418.jpg",
    Ingredients:[ "Applejack", "Grapefruit juice",""],
    Measures:[ "1 1/2 oz ", "1 oz "],
    Date: "2016-09-02 11:16:58",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Abbey Cocktail",
    strDrinkAlternate: null,
    strDrinkES: "C\u00f3ctel de la abad\u00eda",
    strDrinkDE: "Abtei-Cocktail",
    strDrinkFR: "Cocktail d'Abbaye",
    "strDrinkZH-HANS": "\u4fee\u9053\u9662\u9e21\u5c3e\u9152",
    test: "\u4fee\u9053\u9662\u96de\u5c3e\u9152",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Shake all ingredients (except for the cherry) with ice and strain into a cocktail glass. Top with the cherry and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/quyyuw1472811568.jpg",
    Ingredients:[ "Gin", "Orange bitters", "Orange","Cherry"],
    Measures:[ "1 1/2 oz ", "1 dash ", "Juice of 1/4 ", "1 "],
    Date: "2016-09-02 11:19:28",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Abilene",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Pour all of the ingredients into a highball glass almost filled with ice cubes. Stir well.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/ysqwwt1461919465.jpg",
    Ingredients:[ "Dark rum", "Peach nectar", "Orange juice",""],
    Measures:[ "1 1/2 oz ", "2 oz ", "3 oz "],
    Date: "2016-04-29 09:44:25",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Acapulco",
    strDrinkAlternate: null,
    strDrinkES: "Acapulco",
    strDrinkDE: "Acapulco",
    strDrinkFR: "Acapulco",
    "strDrinkZH-HANS": "\u963f\u5361\u666e\u5c14\u79d1",
    test: "\u963f\u5361\u666e\u723e\u79d1",
    Tags: null,
    Alcoholic: true,
    Glass: "Old-fashioned glass",
    Instructions:
      "Combine and shake all ingredients (except mint) with ice and strain into an old-fashioned glass over ice cubes. Add the sprig of mint and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/vtpsvr1472811976.jpg",
    Ingredients:[ "Light rum", "Triple sec", "Lime juice","Sugar", "Egg white", "Mint"],
    Measures:[ "1 1/2 oz ", "1 1/2 tsp ", "1 tblsp ", "1 tsp ", "1 ", "1 "],
    Date: "2016-09-02 11:26:16",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Adam",
    strDrinkAlternate: null,
    strDrinkES: "Adam",
    strDrinkDE: "Adam",
    strDrinkFR: "Adam",
    "strDrinkZH-HANS": "\u4e9a\u5f53",
    test: "\u4e9e\u7576",
    Tags: "Alcoholic,Holiday",
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/rwuxsv1472812169.jpg",
    Ingredients:[ "Dark rum", "Lemon juice", "Grenadine",""],
    Measures:[ "2 oz ", "1 oz ", "1 tsp "],
    Date: "2016-09-02 11:29:29",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Adonis Cocktail",
    strDrinkAlternate: null,
    strDrinkES: "C\u00f3ctel Adonis",
    strDrinkDE: "Adonis Cocktail",
    strDrinkFR: "Cocktail Adonis",
    "strDrinkZH-HANS": "\u963f\u591a\u5c3c\u65af\u9e21\u5c3e\u9152",
    test: "\u963f\u591a\u5c3c\u65af\u96de\u5c3e\u9152",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "Stir all ingredients with ice, strain contents into a cocktail glass, and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/xrvruq1472812030.jpg",
    Ingredients:[ "Sweet Vermouth", "Sherry", "Orange bitters",""],
    Measures:[ "3/4 oz ", "1 1/2 oz dry ", "1 dash "],
    Date: "2016-09-02 11:27:11",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Affair",
    strDrinkAlternate: null,
    strDrinkES: "Asunto",
    strDrinkDE: "Aff\u00e4re",
    strDrinkFR: "Affaire",
    "strDrinkZH-HANS": "\u4e8b\u52a1",
    test: "\u4e8b\u52d9",
    Tags: null,
    Alcoholic: true,
    Glass: "Highball glass",
    Instructions:
      "Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/wxrsxx1472720734.jpg",
    Ingredients:[ "Strawberry schnapps", "Orange juice", "Cranberry juice","Club soda"],
    Measures:[ "2 oz ", "2 oz ", "2 oz "],
    Date: "2016-09-01 10:05:34",
    isPublic: true,
    Like: 0
  },
  {
    Name: "Affinity",
    strDrinkAlternate: null,
    strDrinkES: "Afinidad",
    strDrinkDE: "Affinit\u00e4t",
    strDrinkFR: "Affinit\u00e9",
    "strDrinkZH-HANS": "\u4eb2\u548c",
    test: "\u89aa\u548c",
    Tags: null,
    Alcoholic: true,
    Glass: "Cocktail glass",
    Instructions:
      "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
    Image:
      "https://www.thecocktaildb.com/images/media/drink/nwatpb1504817045.jpg",
    Ingredients:[ "Scotch", "Sweet Vermouth", "Dry Vermouth","Orange bitters"],
    Measures:[ "1 1/2 oz ", "1 oz ", "1 oz ", "2 dashes "],
    Date: "2017-09-07 21:44:05"
  }
];
mongoose
  .connect("mongodb://localhost:27017/module-3-project", {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Connected to Mongo!");
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

Cocktail.insertMany(cocktails)
  .then(dbresult => {
    console.log("The cocktails have been inserted");
  })
  .catch(dbErr => console.log(dbErr));
