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
        "The Online Fast Food Ordering Application is built using React JS for the frontend and Express JS with Mongoose for the backend. Users can log in to view a menu created by the admin, add items to their cart, and place orders. The application also features an admin dashboard accessible only with admin credentials. Through this dashboard, admins can manage the menu by adding, updating, or deleting items, as well as manage individual products. Additionally, admins can view and update the status of customer orders. A REST API was developed to support the backend functionality of the application, enabling smooth interaction between the frontend and backend.",
      german:
        "Die Online-Fast-Food-Bestell-App wurde mit React JS für das Frontend und Express JS mit Mongoose für das Backend entwickelt. Nutzer können sich anmelden, das vom Administrator erstellte Menü einsehen, Artikel in den Warenkorb legen und Bestellungen aufgeben. Die Anwendung bietet auch ein Admin-Dashboard, das nur mit Administrator-Anmeldeinformationen zugänglich ist. Über dieses Dashboard können Administratoren das Menü verwalten, indem sie neue Menüeinträge hinzufügen, bestehende aktualisieren oder löschen, sowie einzelne Produkte innerhalb des Menüs verwalten. Zusätzlich können Administratoren die Bestellungen der Kunden einsehen und deren Status aktualisieren. Für das Backend wurde eine REST-API entwickelt, um eine nahtlose Kommunikation zwischen Frontend und Backend zu ermöglichen.",
    },

    warning: [
      {
        english:
          "⛔ I am currently using the free tier of Render.com to host this project. As a result, it may take a few minutes to load data from the database on your first visit or first login. Please be patient while the site initializes. Thank you for your understanding! ",
        german:
          "⛔ Ich benutze derzeit das kostenlose Angebot von Render.com, um dieses Projekt zu hosten. Daher kann es einige Minuten dauern, bis die Daten aus der Datenbank bei Ihrem ersten Besuch oder bei Ihrer ersten Anmeldung geladen sind. Bitte haben Sie etwas Geduld, während die Seite initialisiert wird. Vielen Dank für Ihr Verständnis!",
      },
    ],
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
        "This is an anime application developed with React JS for the frontend and Express JS with Mongoose for the backend, utilizing the Jikan REST API. Users can search for anime movies and series and apply filters to refine their search based on various criteria. The application provides detailed information about anime, including character profiles, voice actors, reviews, episodes, and summaries. Additionally, once logged in, users can add any anime they wish to their watchlist. For the backend, I created a custom REST API to support these features.",
      german:
        "Dies ist eine Anime-Anwendung, die mit React JS für das Frontend und Express JS mit Mongoose für das Backend entwickelt wurde und die Jikan REST API nutzt. Benutzer können nach Anime-Filmen und -Serien suchen und die Suche anhand verschiedener Kriterien filtern. Die Anwendung bietet detaillierte Informationen über Anime, einschließlich Charakterprofile, Synchronsprecher, Bewertungen, Episoden und Zusammenfassungen. Zusätzlich können Benutzer nach der Anmeldung beliebige Anime zu ihrer Watchlist hinzufügen. Für das Backend habe ich eine benutzerdefinierte REST-API erstellt, um diese Funktionen zu unterstützen.",
    },
    warning: [
      {
        english:
          "⚠️ Jikan API let me to send 3 request per second. Therefore please wait for at least 1 second or the page upload before refreshing the page or navigating other page.",
        german:
          "⚠️ Die Jikan-API erlaubt es mir, 3 request pro Sekunde zu senden. Bitte warten Sie daher mindestens 1 Sekunde oder den Upload der Seite ab, bevor Sie die Seite aktualisieren oder zu einer anderen Seite navigieren.",
      },
      {
        english:
          "⛔ I am currently using the free tier of Render.com to host this project. As a result, it may take a few minutes to load data from the database on your first visit or first login. Please be patient while the site initializes. Thank you for your understanding! ",
        german:
          "⛔ Ich benutze derzeit das kostenlose Angebot von Render.com, um dieses Projekt zu hosten. Daher kann es einige Minuten dauern, bis die Daten aus der Datenbank bei Ihrem ersten Besuch oder bei Ihrer ersten Anmeldung geladen sind. Bitte haben Sie etwas Geduld, während die Seite initialisiert wird. Vielen Dank für Ihr Verständnis!",
      },
    ],
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
        "R-Map is a map application built with React JS and Leaflet for the frontend and Express JS with Mongoose for the backend, using the Restcountries and Geoapify REST APIs. The application allows users to plan their travels on the map. I developed a custom REST API to support the backend functionality of this application.",
      german:
        "R-Map ist eine Kartenanwendung, die mit React JS und Leaflet für das Frontend sowie Express JS und Mongoose für das Backend entwickelt wurde, wobei die Restcountries- und Geoapify-REST-APIs verwendet werden. Die Anwendung ermöglicht es den Benutzern, ihre Reisen auf der Karte zu planen. Für das Backend dieser Anwendung habe ich eine benutzerdefinierte REST-API erstellt.",
    },
    warning: [
      {
        english:
          "⛔ I am currently using the free tier of Render.com to host this project. As a result, it may take a few minutes to load data from the database on your first visit or first login. Please be patient while the site initializes. Thank you for your understanding! ",
        german:
          "⛔ Ich benutze derzeit das kostenlose Angebot von Render.com, um dieses Projekt zu hosten. Daher kann es einige Minuten dauern, bis die Daten aus der Datenbank bei Ihrem ersten Besuch oder bei Ihrer ersten Anmeldung geladen sind. Bitte haben Sie etwas Geduld, während die Seite initialisiert wird. Vielen Dank für Ihr Verständnis!",
      },
    ],
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
        "Recipe App is built with React JS for the frontend and Express JS with Mongoose for the backend, utilizing the Spoonacular REST API. Users can search for recipes and filter results based on various criteria. The application provides detailed information about each recipe, including the recipe summary, ingredients, equipment, instructions, and similar recipes. Additionally, after logging in, users can add their favorite recipes to their personal recipe list by clicking the heart icon. I developed a custom REST API to support the backend functionality of this application.",
      german:
        "Recipe App wurde mit React JS für das Frontend und Express JS mit Mongoose für das Backend entwickelt, unter Verwendung der Spoonacular-REST-API. Benutzer können nach Rezepten suchen und die Ergebnisse nach verschiedenen Kriterien filtern. Die Anwendung bietet detaillierte Informationen zu jedem Rezept, einschließlich der Rezeptzusammenfassung, Zutaten, Ausrüstung, Anweisungen und ähnlichen Rezepten. Zusätzlich können Benutzer nach der Anmeldung ihre Lieblingsrezepte zu ihrer persönlichen Rezeptliste hinzufügen, indem sie auf das Herzsymbol klicken. Für das Backend dieser Anwendung habe ich eine benutzerdefinierte REST-API entwickelt.",
    },
    warning: [
      {
        english:
          "⛔ I am currently using the free tier of Render.com to host this project. As a result, it may take a few minutes to load data from the database on your first visit or first login. Please be patient while the site initializes. Thank you for your understanding! ",
        german:
          "⛔ Ich benutze derzeit das kostenlose Angebot von Render.com, um dieses Projekt zu hosten. Daher kann es einige Minuten dauern, bis die Daten aus der Datenbank bei Ihrem ersten Besuch oder bei Ihrer ersten Anmeldung geladen sind. Bitte haben Sie etwas Geduld, während die Seite initialisiert wird. Vielen Dank für Ihr Verständnis!",
      },
    ],
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
        "Game App is developed with React JS for the frontend and Express JS with Mongoose for the backend. I created this application to practice my knowledge of useContext and useReducer. A custom REST API supports the backend functionality of this app. The first game is the Pig Game. Inspired by Jonas Schmedtmann's pig game from his JavaScript course on Udemy, I created my own version by modifying the game rules and the number of players. Users can choose between 2 and 6 players. For two players, the game follows the classic rules, but I adjusted the rules for 3 or more players to add variety. The game rules are explained within the app. The second game is a classic Guessing Game. Players try to guess a secret number between 1 and 20, with a higher score awarded for quicker correct guesses. The highest score achieved by each player is saved in the database. I also added animations to make the game more engaging. Have fun playing the games!",
      german:
        "Game App wurde mit React JS für das Frontend und Express JS mit Mongoose für das Backend entwickelt. Diese Anwendung habe ich erstellt, um meine Kenntnisse in useContext und useReducer zu üben. Eine benutzerdefinierte REST-API unterstützt die Backend-Funktionalität dieser App. Das erste Spiel ist das Pig Game. Inspiriert von Jonas Schmedtmanns Pig Game aus seinem JavaScript-Kurs auf Udemy habe ich meine eigene Version erstellt, indem ich die Spielregeln und die Anzahl der Spieler geändert habe. Die Benutzer können zwischen 2 und 6 Spielern wählen. Bei zwei Spielern folgen die Regeln dem klassischen Pig Game, aber ich habe die Regeln für 3 oder mehr Spieler leicht angepasst, um Abwechslung zu bieten. Die Spielregeln sind in der App erklärt. Das zweite Spiel ist ein klassisches Ratespiel. Die Spieler versuchen, eine geheime Zahl zwischen 1 und 20 zu erraten. Je schneller die richtige Antwort gegeben wird, desto höher ist die Punktzahl. Die höchste Punktzahl eines Spielers wird in der Datenbank gespeichert. Außerdem habe ich Animationen hinzugefügt, um das Spiel etwas unterhaltsamer zu gestalten. Viel Spaß beim Spielen!",
    },
    warning: [
      {
        english:
          "⚠️ I’m not expecting the use case for smaller screens, such as mobile devices, so please use this app on your laptop or tablet.",
        german:
          "⚠️ Ich gehe nicht davon aus, dass die Anwendung für kleinere Bildschirme, wie z. B. mobile Geräte, geeignet ist. Bitte verwenden Sie die App daher auf Ihrem Laptop oder Tablet.",
      },
      {
        english:
          "⛔ I am currently using the free tier of Render.com to host this project. As a result, it may take a few minutes to load data from the database on your first visit or first login. Please be patient while the site initializes. Thank you for your understanding! ",
        german:
          "⛔ Ich benutze derzeit das kostenlose Angebot von Render.com, um dieses Projekt zu hosten. Daher kann es einige Minuten dauern, bis die Daten aus der Datenbank bei Ihrem ersten Besuch oder bei Ihrer ersten Anmeldung geladen sind. Bitte haben Sie etwas Geduld, während die Seite initialisiert wird. Vielen Dank für Ihr Verständnis!",
      },
    ],
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
        "Movie App is built with React JS for the frontend and Express JS with Mongoose for the backend. Users can search for movies and view detailed information, including actors and summaries. After logging in, users can add movies to their watchlist and write reviews. I developed a custom REST API to handle the backend functionality of this application.",
      german:
        "Movie App wurde mit React JS für das Frontend und Express JS mit Mongoose für das Backend entwickelt. Benutzer können nach Filmen suchen und detaillierte Informationen einsehen, einschließlich der Schauspieler und Zusammenfassungen. Nach der Anmeldung können Benutzer Filme zu ihrer Watchlist hinzufügen und Bewertungen schreiben. Für das Backend dieser Anwendung habe ich eine benutzerdefinierte REST-API erstellt.",
    },
    warning: [
      {
        english:
          "⛔ I am currently using the free tier of Render.com to host this project. As a result, it may take a few minutes to load data from the database on your first visit or first login. Please be patient while the site initializes. Thank you for your understanding! ",
        german:
          "⛔ Ich benutze derzeit das kostenlose Angebot von Render.com, um dieses Projekt zu hosten. Daher kann es einige Minuten dauern, bis die Daten aus der Datenbank bei Ihrem ersten Besuch oder bei Ihrer ersten Anmeldung geladen sind. Bitte haben Sie etwas Geduld, während die Seite initialisiert wird. Vielen Dank für Ihr Verständnis!",
      },
    ],
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
    english: "Literature lover, anime fan, chess enthusiast",
    german: "Literaturliebhaber, Anime-Fan, Schachbegeisterter",
  },
  text: {
    english:
      "I'm Tanju, a passionate self-taught web developer based in Kaiserslautern, Germany. I've dedicated myself to mastering web development and have been actively working on my own projects to refine my skills.",
    german:
      "Ich bin Tanju, ein leidenschaftlicher autodidaktischer Webentwickler aus Kaiserslautern, Deutschland. Ich habe mich der Webentwicklung verschrieben und arbeite aktiv an eigenen Projekten, um meine Fähigkeiten weiter zu verfeinern.",
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
      "Despite coming from a different background, my passion for software development drove me into this field. I specialize in modern web technologies and have strong skills in HTML, CSS, JavaScript, React, Node.js, and MongoDB.",
    german:
      "Trotz meines unterschiedlichen Hintergrunds hat mich meine Leidenschaft für die Softwareentwicklung in dieses Feld geführt. Ich spezialisiere mich auf moderne Webtechnologien und habe starke Fähigkeiten in HTML, CSS, JavaScript, React, Node.js und MongoDB.",
  },
  p2: {
    english:
      "Over the past two years, I’ve taught myself programming through Udemy courses and YouTube tutorials. I actively use documentation and tackle problems by researching solutions on Google, which has greatly enhanced my learning process. In the past six months, I’ve been working on my own projects, and I find immense satisfaction in overcoming challenges and completing each one. ",
    german:
      "In den letzten zwei Jahren habe ich mir Programmieren selbst beigebracht, indem ich Udemy-Kurse und YouTube-Tutorials genutzt habe. Ich nutze aktiv Dokumentationen und suche bei Problemen Lösungen über Google, was meinen Lernprozess erheblich verbessert hat. In den letzten sechs Monaten habe ich an meinen eigenen Projekten gearbeitet und empfinde große Zufriedenheit, wenn ich Herausforderungen überwinde und jedes Projekt abschließe.",
  },
  p3: {
    english:
      "I focus on creating innovative solutions, engaging web design, performance optimization, responsive design, and improving user experience. I’m dedicated, friendly, and a strong team player with excellent problem-solving skills. Staying up-to-date with the latest technologies is a priority for me to ensure high-quality code. I’m currently learning TypeScript and plan to expand my skills with Java and SQL for backend development next year.",
    german:
      "Ich konzentriere mich auf die Entwicklung innovativer Lösungen, ansprechendes Webdesign, Leistungsoptimierung, responsives Design und die Verbesserung der Benutzererfahrung. Ich bin engagiert, freundlich und ein starker Teamplayer mit ausgezeichneten Problemlösungsfähigkeiten. Es ist mir wichtig, immer auf dem neuesten Stand der Technologien zu bleiben, um hochwertigen Code zu liefern. Derzeit lerne ich TypeScript und plane, meine Fähigkeiten im nächsten Jahr mit Java und SQL für die Backend-Entwicklung zu erweitern.",
  },

  p4: {
    english:
      "Please take a look at my personal projects and feel free to reach out. I’m excited to connect and explore new opportunities!",
    german:
      "Schauen Sie sich bitte meine persönlichen Projekte an und zögern Sie nicht, mich zu kontaktieren. Ich freue mich darauf, neue Möglichkeiten zu erkunden und in Kontakt zu treten!",
  },

  title: {
    english: `I'm Tanju, a Passionate Self-Taught Web Developer in Germany`,
    german:
      "Ich bin Tanju, ein leidenschaftlicher autodidaktischer Webentwickler in Deutschland.",
  },
};
