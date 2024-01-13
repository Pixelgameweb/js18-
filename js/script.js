let poems = [
  {
      poemText: `
      
      <p>
          С Новым годом! Волшебства,  <br>
          Смеха, счастья и тепла,<br>
          Мира, радостей, достатка<br>
          И во всех делах порядка!<br>
      </p>
      <p>
          Пусть все серое, плохое<br>
          Старый год возьмет с собою.<br>
          Впредь лишь светлые мгновенья<br>
          Создают пусть настроенье!<br>
    </p>`,
    bg : `url(../img/a.jpg);`
  },
  {
    poemText: `
    <p>
        С Новым годом! Волшебства,  <br>
        Смеха, счастья и тепла,<br>
        Мира, радостей, достатка<br>
        И во всех делах порядка!<br>
    </p>
    <p>
        Пусть все серое, плохое<br>
        Старый год возьмет с собою.<br>
        Впредь лишь светлые мгновенья<br>
        Создают пусть настроенье!<br>
  </p>`,
  bg : `url(../img/b.jpg);`
  },
  {
  poemText: `
  {
  <p>
      С Новым годом! Волшебства,  <br>
      Смеха, счастья и тепла,<br>
      Мира, радостей, достатка<br>
      И во всех делах порядка!<br>
  </p>
  <p>
      Пусть все серое, плохое<br>
      Старый год возьмет с собою.<br>
      Впредь лишь светлые мгновенья<br>
      Создают пусть настроенье!<br>
  </p>`,
  bg : `url(../img/c.jpg);`
  } ,
]

let wrapper = document.qwerySelector(".wrapper");
let btn = document.getElementById("btn");
let poem = document.qwerySelector(".contect__poem");
btn.addEventListener("click" , function( ) {
  let randomIndex;

  randomIndex= Math.floor(Math.random( ) * poems.length);
  console.log(randomIndex);
  poem.innerHTML = " ";
  poem.innerHTML = poems[randomIndex].poemText;

})
