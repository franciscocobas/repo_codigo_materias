
let datosDeTwitter = `[{"imagenPerfil":"https://pbs.twimg.com/profile_images/557236382003769344/0rfiwIMP_bigger.jpeg","nombrePerfil":"Sport 890","usuario":"Sport890","tweetBody":"Hoy hablamos del mundial sub 20 con la gente la selección de Uruguay."},{"imagenPerfil":"https://pbs.twimg.com/profile_images/707194558350811136/vngGeFIu_bigger.jpg","nombrePerfil":"ÁNIMA Bachillerato Tecnológico","usuario":"ANIMA_educa","tweetBody":"En el marco del proyecto \\"Un día de cine\\", los alumnos de 1ero de administración atendieron una función de cine en @MovieUy, Empresa Formadora de ÁNIMA, encargándose de todas las secciones necesarias para recibir al equipo de ÁNIMA y disfrutar juntos de la película."},{"imagenPerfil":"https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_bigger.png","nombrePerfil":"React","usuario":"reactjs","tweetBody":"We’ve just released React 16.8 with a stable version of Hooks. React Hooks let you use features like local state and lifecycle without writing a class. They’re fully backwards-compatible and you can start using them today."}]`;

let datosParseados = JSON.parse(datosDeTwitter);

let htmlTweets = ``;

datosParseados.map((tweet) => {
  htmlTweets += `
    <div class="tweet mb-2">
      <div class="row mt-3">

        <div class="col-2">
          <div class="profile-img">
            <img src="${tweet.imagenPerfil}"
              alt="Profile Image">
          </div>
        </div>

        <div class="col-9">
          <div class="title-container">
            <p><b>${tweet.nombrePerfil}</b> @${tweet.usuario}</p>
          </div>
          <div class="tweetbody">
            ${tweet.tweetBody}
          </div>
          <div class="icons-container my-2">
            <a href="#">
              <i class="far fa-comment"></i>
            </a>
            <a href="#"><i class="fas fa-retweet"></i></a>
            <a href="#"><i class="far fa-heart"></i></a>
            <a href="#"><i class="far fa-envelope"></i></a>
          </div>
        </div>

      </div>
    </div>
  `
});

let app = document.querySelector('#app');

app.innerHTML = htmlTweets;