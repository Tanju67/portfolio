import burger from "../assets/burger.png";
import anime from "../assets/anime.png";
import map from "../assets/map.png";
import recipe from "../assets/recipe.png";
import game from "../assets/game.png";
import movie from "../assets/movie.png";
import vegi from "../assets/cuisine.png";
import task from "../assets/task-manager.png";
import trip from "../assets/trip.png";

export const projects = [
  {
    id: "p1",
    title: "R-Burger",
    image: burger,
    websiteLink: "https://r-burger-restaurant-aagc.onrender.com",
    githubLink: "https://github.com/Tanju67/react-burger-frontend",
    detay: {
      english:
        "Online fast food ordering application built with React JS for the frontend and Express JS and Mongoose for the backend. After logging in, the user can order the food he wants from the menu created by the admin by adding it to his cart. Additionally, there is an admin dashboard in the application that can only be accessed with the admin login. After logging in, the admin can add a new menu, update or delete the existing menu using the dashboard. Likewise, the admin can add a new product to the menu, update or delete the existing product. Finally, the admin can see the orders placed by customers and update the status of the orders. I created a REST API for the backend of this application.",
      german:
        "Online-Fastfood-Bestellanwendung, die mit React JS für das Frontend und Express JS und Mongoose für das Backend entwickelt wurde. Nach dem Einloggen kann der Benutzer das gewünschte Essen aus dem vom Administrator erstellten Menü bestellen, indem er es in seinen Warenkorb legt. Außerdem gibt es in der Anwendung ein Admin-Dashboard, auf das nur mit dem Admin-Login zugegriffen werden kann. Nach dem Einloggen kann der Administrator über das Dashboard ein neues Menü hinzufügen, ein bestehendes Menü aktualisieren oder löschen. Ebenso kann der Administrator ein neues Produkt zum Menü hinzufügen, ein bestehendes Produkt aktualisieren oder löschen. Schließlich kann der Administrator die von Kunden aufgegebenen Bestellungen einsehen und den Status der Bestellungen aktualisieren. Ich habe eine REST-API für das Backend dieser Anwendung erstellt.",
    },

    warning: null,
    stack:
      "React, Redux Tool Kit, React Router Dom, CSS Modules, Express, MongoDB, Cloudinary",
  },
  {
    id: "p2",
    title: "R-Anime",
    image: anime,
    websiteLink: "https://r-anime.onrender.com",
    githubLink: "https://github.com/Tanju67/react-anime-frontend",
    detay: {
      english:
        "An anime application built with React JS for the frontend and Express JS and Mongoose for the backend by using Jikan REST API.The user can search for anime movies and series and filter the search based on certain values. The user can also see details about the anime, such as anime characters, voice actors, anime reviews, anime episodes and summaries. Additionally, after logging in, the user can add any anime they want to the watchlist. I created a REST API for the backend of this application.",
      german:
        "Eine Anime-Anwendung, die mit React JS für das Frontend und Express JS und Mongoose für das Backend unter Verwendung der Jikan REST API erstellt wurde. Der Benutzer kann nach Anime-Filmen und -Serien suchen und die Suche anhand bestimmter Werte filtern. Der Benutzer kann auch Details über den Anime sehen, wie z.B. Anime-Charaktere, Synchronsprecher, Anime-Rezensionen, Anime-Episoden und Zusammenfassungen. Außerdem kann der Benutzer nach der Anmeldung jeden Anime, den er möchte, zur Beobachtungsliste hinzufügen. Ich habe eine REST-API für das Backend dieser Anwendung erstellt.",
    },
    warning: {
      english:
        "⛔ Jikan API let me to send 3 request per second. Therefore please wait for at least 1 second or the page upload before refreshing the page or navigating other page.",
      german:
        "⛔ Die Jikan-API erlaubt es mir, 3 request pro Sekunde zu senden. Bitte warten Sie daher mindestens 1 Sekunde oder den Upload der Seite ab, bevor Sie die Seite aktualisieren oder zu einer anderen Seite navigieren.",
    },
    stack:
      "React, Redux Tool Kit, React Router Dom, CSS Modules, Express, MongoDB",
  },
  {
    id: "p3",
    title: "R-Map",
    image: map,
    websiteLink: "https://r-map.onrender.com",
    githubLink: "https://github.com/Tanju67/react-map-frontend",
    detay: {
      english:
        "An map application built with React JS and Leaflet for the frontend and Express JS and Mongoose for the backend by using Restcountries REST API and Geoapify REST API.R-Map is an application where the user can plan their travel on the map. I created a REST API for the backend of this application.",
      german:
        "Eine Kartenanwendung, die mit React JS und Leaflet für das Frontend und Express JS und Mongoose für das Backend unter Verwendung von Restcountries REST API und Geoapify REST API erstellt wurde. R-Map ist eine Anwendung, bei der der Benutzer seine Reise auf der Karte planen kann. Ich habe eine REST-API für das Backend dieser Anwendung erstellt.",
    },
    warning: null,
    stack:
      "React, Framer Motion, React Router Dom, CSS Modules, Express, MongoDB, React Leaflet",
  },
  {
    id: "p4",
    title: "R-Recipe",
    image: recipe,
    websiteLink: "https://r-recipe.onrender.com",
    githubLink: "https://github.com/Tanju67/React-Recipe-frontend",
    detay: {
      english:
        "An recipe application built with React JS for the frontend and Express JS and Mongoose for the backend by using spoonacular REST API.The user can search for recipe and filter the search based on certain values. The user can also see details about the recipe, such as recipe summary, ingredients, equipments, instructions and similar recipes. Additionally, after logging in, the user can add the favorite recipe to the her/his recipe list by clicking heart icon. I created a REST API for the backend of this application.",
      german:
        "Eine Rezeptanwendung, die mit React JS für das Frontend und Express JS und Mongoose für das Backend unter Verwendung von spoonacular REST API erstellt wurde. Der Benutzer kann nach Rezepten suchen und die Suche anhand bestimmter Werte filtern. Der Benutzer kann auch Details über das Rezept sehen, wie z.B. die Rezeptzusammenfassung, Zutaten, Geräte, Anweisungen und ähnliche Rezepte. Außerdem kann der Benutzer nach der Anmeldung sein Lieblingsrezept zu seiner Rezeptliste hinzufügen, indem er auf das Herzsymbol klickt. Ich habe eine REST-API für das Backend dieser Anwendung erstellt.",
    },
    warning: null,
    stack: "React, React Router Dom, CSS Modules, Express, MongoDB",
  },
  {
    id: "p5",
    title: "R-Games",
    image: game,
    websiteLink: "https://r-games.onrender.com",
    githubLink: "https://github.com/Tanju67/react-games-frontend",
    detay: {
      english:
        "An game application built with React JS for the frontend and Express JS and Mongoose for the backend.I made this application in order to practice my useContext and useReducer knowledge. I created a REST API for the backend of this application. First game is the Pig Game. Jonas Schmedtmann made a pig game in his javascript course on Udemy. Instead of rewriting the codes by making the same game, I made my own version by changing the game rules and the number of players. The user can choose the number of players between 2 and 6. The game for two players has the same rules as the classic pig game, but I wrote the codes so that the game rules for 3 or more players are slightly different. You can find the game rules in the game. Second game is a classic guess game.The player tries to guess the secret number between 1 and 20. If you guess correctly at the earliest, your score will be higher. The player's highest score is saved in the database. I added animation to make the game a little more fun. Have fun with the games.",
      german:
        "Eine Spielanwendung, die mit React JS für das Frontend und Express JS und Mongoose für das Backend gebaut wurde. Ich habe diese Anwendung erstellt, um meine Kenntnisse über useContext und useReducer zu üben. Ich habe eine REST-API für das Backend dieser Anwendung erstellt. Das erste Spiel ist das Pig Game. Jonas Schmedtmann hat in seinem Javascript-Kurs auf Udemy ein Schweinespiel erstellt. Anstatt die Codes neu zu schreiben und das gleiche Spiel zu machen, habe ich meine eigene Version gemacht, indem ich die Spielregeln und die Anzahl der Spieler geändert habe. Der Benutzer kann die Anzahl der Spieler zwischen 2 und 6 wählen. Das Spiel für zwei Spieler hat die gleichen Regeln wie das klassische Schweinespiel, aber ich habe die Codes so geschrieben, dass die Spielregeln für 3 oder mehr Spieler etwas anders sind. Die Spielregeln findest du im Spiel selbst. Das zweite Spiel ist ein klassisches Ratespiel: Der Spieler versucht, die geheime Zahl zwischen 1 und 20 zu erraten. Wer die Zahl am frühesten richtig errät, bekommt mehr Punkte. Die höchste Punktzahl des Spielers wird in der Datenbank gespeichert. Ich habe Animationen hinzugefügt, um das Spiel ein wenig lustiger zu machen. Viel Spaß mit den Spielen.",
    },
    warning: {
      english:
        "⚠️ I’m not expecting the use case for smaller screens, such as mobile devices, so please use this app on your laptop or tablet.",
      german:
        "⚠️ Ich gehe nicht davon aus, dass die Anwendung für kleinere Bildschirme, wie z. B. mobile Geräte, geeignet ist. Bitte verwenden Sie die App daher auf Ihrem Laptop oder Tablet.",
    },
    stack: "React, React Router Dom, CSS Modules, Express, MongoDB",
  },
  {
    id: "p6",
    title: "R-Movie",
    image: movie,
    websiteLink: "https://r-movie.onrender.com",
    githubLink: "https://github.com/Tanju67/react-movie-frontend",
    detay: {
      english:
        "A movie application built with React JS for the frontend and Express JS and Mongoose for the backend.The user can search for movies. The user can also see details about the movie, such as actors and summaries. Additionally, after logging in, the user can add any movie they want to the watchlist and write a review for movies. I created a REST API for the backend of this application.",
      german:
        "Eine Filmanwendung, die mit React JS für das Frontend und Express JS und Mongoose für das Backend erstellt wurde. Der Benutzer kann nach Filmen suchen. Der Benutzer kann auch Details über den Film sehen, wie Schauspieler und Zusammenfassungen. Außerdem kann der Benutzer nach dem Einloggen jeden beliebigen Film zur Merkliste hinzufügen und eine Bewertung für Filme schreiben. Ich habe eine REST-API für das Backend dieser Anwendung erstellt.",
    },
    warning: null,
    stack: "React, React Router Dom, CSS Modules, Express, MongoDB",
  },
  {
    id: "p7",
    title: "Vegi-Vega-Cuisine",
    image: vegi,
    websiteLink: "https://vegi-vaga-cuisine.onrender.com",
    githubLink: "https://github.com/Tanju67/vegi-vaga-cuisine",
    detay: {
      english:
        "It is a static website. I made this app in order to practice my CSS skills.",
      german:
        "Es ist eine statische Website. Ich habe diese App gemacht, um meine CSS-Fähigkeiten zu üben.",
    },
    warning: null,
    stack: "React, CSS Modules",
  },
  {
    id: "p8",
    title: "Task Manager",
    image: task,
    websiteLink: null,
    githubLink: "https://github.com/Tanju67/Task-Manager",
    detay: {
      english:
        "A task manager application built with React JS for the frontend and Express JS and Mongoose for the backend. After logging in, the user can add task categories and tasks for these categories, update the status of these tasks, or delete tasks.",
      german:
        "Eine Aufgabenmanager-Anwendung, die mit React JS für das Frontend und Express JS und Mongoose für das Backend erstellt wurde. Nach dem Einloggen kann der Benutzer Aufgabenkategorien und Aufgaben für diese Kategorien hinzufügen, den Status dieser Aufgaben aktualisieren oder Aufgaben löschen.",
    },
    warning: null,
    stack: "React, CSS Modules, Express, MongoDB",
  },
  {
    id: "p9",
    title: "Trip Share",
    image: trip,
    websiteLink: null,
    githubLink: "https://github.com/Tanju67/First-mern-project",
    detay: {
      english:
        "A trip share application built with React JS for the frontend and Express JS and Mongoose for the backend.In this application, the user can create a profile for himself and share photos of the places he has visited and his comments about that place. The user can also see photos and comments shared by other users.",
      german:
        "Eine Anwendung zum Teilen von Reisen, die mit React JS für das Frontend und Express JS und Mongoose für das Backend erstellt wurde. In dieser Anwendung kann der Benutzer ein Profil für sich selbst erstellen und Fotos von den Orten, die er besucht hat, sowie seine Kommentare zu diesem Ort teilen. Der Benutzer kann auch Fotos und Kommentare sehen, die von anderen Benutzern freigegeben wurden.",
    },
    warning: null,
    stack: "React, React Router Dom, CSS Modules, Express, MongoDB",
  },
];

export const navData = {
  german: ["Über mich", "Projekte", "Kontakt"],
  english: ["About", "Projects", "Contact"],
};

export const homeData = {
  title: {
    english: "Literature lover, anime watcher, chess fan",
    german: "Literaturliebhaber,  Anime-Gucker, Schachfan",
  },
  text: {
    english:
      "I'm Tanju, a passionate self-taught web developer based in Kaiserslautern, Germany. I have been learning web development intensively for two years and have been working on my own projects for six months.",
    german:
      "Ich bin Tanju, ein leidenschaftlicher autodidaktischer Webentwickler mit Wohnsitz in Kaiserslautern, Deutschland. Ich lerne seit zwei Jahren intensiv Webentwicklung und arbeite seit einem halben Jahr an eigenen Projekten.",
  },
};

export const projectPageData = {
  title: {
    english: "Please take a look at my projects!",
    german: "Bitte sehen Sie sich meine Projekte an!",
  },
};

export const aboutPageData = {
  p1: {
    english:
      "After 12 years as a petty officer in the Turkish Navy, I have made discipline, perseverance and determination my way of life. However, the desire to open a new page in my career led me to move to Germany and step into the world of software, which I have recently been intensely interested in.",
    german:
      "Nach 12 Jahren als Unteroffizier in der türkischen Marine habe ich Disziplin, Ausdauer und Entschlossenheit zu meiner Lebensweise gemacht. Der Wunsch, eine neue Seite in meiner Karriere aufzuschlagen, hat mich jedoch dazu veranlasst, nach Deutschland zu ziehen und in die Welt der Software einzusteigen, für die ich mich in letzter Zeit intensiv interessiert habe.",
  },
  p2: {
    english:
      "Although I had no background in programming, my passion for the field drove me to learn with determination. In the last two years, I have learnt programming myself, using many great Udemy courses and watching videos on YouTube. In the last six months, I have been implementing my own projects and I must admit that it is hard to describe the happiness that comes with the completion of each project. ",
    german:
      "Obwohl ich keine Vorkenntnisse in der Programmierung hatte, trieb mich meine Leidenschaft für diesen Bereich dazu, entschlossen zu lernen. In den letzten zwei Jahren habe ich mir das Programmieren selbst beigebracht, indem ich viele tolle Udemy-Kurse genutzt und Videos auf YouTube angeschaut habe. In den letzten sechs Monaten habe ich meine eigenen Projekte umgesetzt, und ich muss zugeben, dass es schwer ist, das Glücksgefühl zu beschreiben, das mit der Fertigstellung eines jeden Projekts einhergeht.",
  },
  p3: {
    english:
      "I am hardworking, determined and disciplined. I have good communication with people. I am always eager to learn more and I work hard to realise this. After learning HTML, CSS and Javascript, I learnt React for frontend and Nodejs and MongoDB for backend. I am currently learning Typescript. My plan for next year is to learn Java and SQL for backend.",
    german:
      "Ich bin fleißig, entschlossen und diszipliniert. Ich habe eine gute Kommunikation mit Menschen. Ich bin immer begierig, mehr zu lernen und arbeite hart daran, dies zu verwirklichen. Nachdem ich HTML, CSS und Javascript gelernt habe, habe ich React für das Frontend und Nodejs und MongoDB für das Backend gelernt. Derzeit lerne ich Typescript. Mein Plan für das nächste Jahr ist es, Java und SQL für das Backend zu lernen.",
  },

  p4: {
    english:
      "Please take a look at my personal projects and get in touch with me. I am looking forward to exploring new opportunities!",
    german:
      "Bitte schauen Sie sich meine persönlichen Projekte an und nehmen Sie Kontakt mit mir auf. Ich freue mich darauf, neue Möglichkeiten zu erkunden!",
  },

  title: {
    english: `I'm Tanju, a self-taught web developer who is currently living in Germany.`,
    german:
      "Ich bin Tanju, ein autodidaktischer Webentwickler, der derzeit in Deutschland lebt.",
  },
};
