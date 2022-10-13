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

// Initialize Firebase

var app = firebase.initializeApp(firebaseConfig);
        db = firebase.firestore(app);
        firebase.firestore().settings({
            cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
        });

const analytics = firebase.analytics();

db.collection("players").orderBy("score", "desc").limit(5)
.get()
.then(querySnapshot=>{
        querySnapshot.forEach(doc=>{
            let data = doc.data();
            let row  = `<tr>
                            <td>${data.name}</td>
                            <td>${data.score}</td>
                      </tr>`;
            let table = document.getElementById('myTable')
            table.innerHTML += row
        })
})
.catch(err=>{
    console.log(`Error: ${err}`)
}); 

function display(){
          document.getElementById('table').style.display = "block";
}

window.addEventListener("scroll", (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  });

  