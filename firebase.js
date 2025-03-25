//firebase needs thses to figure out on how we r connecting to database
//configuring the app on the front end to link with our firebase which we created on website
var firebaseConfig = {
  apiKey: "AIzaSyAmIN1c6Pq_XtudGypeqs8hATMST5b1lcM",
  authDomain: "acidman-e8e44.firebaseapp.com",
  projectId: "acidman-e8e44",
  storageBucket: "acidman-e8e44.appspot.com",
  messagingSenderId: "232466403645",
  appId: "1:232466403645:web:fdcf6dc54d14c1cf253554",
  measurementId: "G-C6VT9P3C21"
};

// Inizializza Firebase
var app = firebase.initializeApp(firebaseConfig);

// Inizializza Firestore e applica le impostazioni
var db = firebase.firestore(app);
db.settings({
    cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
});

// Inizializza Analytics (se necessario)
const analytics = firebase.analytics();

// Imposta un listener in tempo reale per aggiornare la classifica
db.collection("players2")
  .orderBy("score", "desc")
  .limit(5)
  .onSnapshot(querySnapshot => {
      // Assicurati che l'elemento con id "myTable" esista nel DOM
      let table = document.getElementById('myTable');
      if (!table) {
          console.error('Elemento con id "myTable" non trovato.');
          return;
      }
      // Resetta il contenuto per evitare duplicati
      table.innerHTML = "";
      
      querySnapshot.forEach(doc => {
          let data = doc.data();
          let row  = `<tr>
                          <td>${data.name}</td>
                          <td>${data.score}</td>
                        </tr>`;
          table.innerHTML += row;
      });
  }, err => {
      console.error(`Error: ${err}`);
  });

// Funzione per mostrare la classifica
function display() {
    document.getElementById('table').style.display = "block";
}

// Impedisci lo scroll della pagina
window.addEventListener("scroll", (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
});
