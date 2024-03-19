const title = document.querySelector(".title-container > img");
const secondtitle = document.querySelector(".second-title-container > img");
const secondcontainer = document.querySelector(".second-container");
const secondcontainerimg1 = document.getElementById("img1");
const secondcontainerimg2 = document.getElementById("img2");
const secondcontainerimg3 = document.getElementById("img3");
const secondcontainertext1 = document.getElementById("text1");
const secondcontainertext2 = document.getElementById("text2");
const secondcontainertext3 = document.getElementById("text3");
const animationimg1 = document.getElementById("animationimg1");
const animationimg2 = document.getElementById("animationimg2");
const animationimg3 = document.getElementById("animationimg3");
const animationimg4 = document.getElementById("animationimg4");
const fixedimg1 = document.getElementById("fixedimg1");
const fixedimg2 = document.getElementById("fixedimg2");
const fixedimg3 = document.getElementById("fixedimg3");
const fixedimg4 = document.getElementById("fixedimg4");
const fixedimg5 = document.getElementById("fixedimg5");
const fixedimg6 = document.getElementById("fixedimg6");
const fixedimg7 = document.getElementById("fixedimg7");
const fixedimg8 = document.getElementById("fixedimg8");
const fixedimg9 = document.getElementById("fixedimg9");
const fixedimg10 = document.getElementById("fixedimg10");
const fixedimg11 = document.getElementById("fixedimg11");
const suggestion = document.querySelector(".suggestion-container > span");
const textarea = document.querySelector(".second-container-textarea > span");
const textarea2 = document.querySelector(".second-container-textarea > p");

window.addEventListener("scroll", (e) => {
  let scroll = window.scrollY;
  console.log(window.scrollY);
  if (scroll >= 100) {
    secondcontainerimg2.style.display = "none";
    secondcontainertext2.style.display = "none";
    title.style.width = "650px";
  }
  if (scroll > 200) {
    title.style.width = "600px";
  }
  if (scroll > 300) {
    title.style.width = "500px";
  }
  if (scroll > 400) {
    title.style.width = "500px";
  }
  if (scroll > 500) {
    title.style.width = "450px";
  }
  if (scroll > 600) {
    title.style.width = "400px";
  }
  if (scroll > 700) {
    title.style.width = "350px";
  }
  if (scroll > 800) {
    title.style.width = "300px";
  }

  if (scroll > 900) {
    title.style.top = "130px";
  }
  if (scroll > 1000) {
    title.style.top = "110px";
  }
  if (scroll > 1100) {
    title.style.top = "90px";
  }
  if (scroll > 1200) {
    title.style.top = "70px";
  }
  if (scroll > 1300) {
    title.style.top = "50px";
  }
  if (scroll > 1400) {
    title.style.top = "30px";
  }
  if (scroll > 1500) {
    title.style.top = "0px";
  }
  if (scroll > 1600) {
    title.style.top = "-30px";
  }

  if (scroll > 1800) {
    title.style.top = "-300px";
  }

  if (scroll < 1940) {
    secondcontainerimg1.style.position = "relative";
    secondcontainertext1.style.position = "relative";
    secondtitle.style.position = "relative";
    secondcontainerimg1.style.top = "";
    secondcontainertext1.style.top = "";
    secondtitle.style.top = "";
  }
  if (scroll > 1950) {
    secondcontainerimg1.style.position = "fixed";
    secondcontainertext1.style.position = "fixed";
    secondtitle.style.position = "fixed";
    secondcontainerimg1.style.top = "100px";
    secondcontainertext1.style.top = "550px";
    secondtitle.style.top = "50px";
  }
  if (scroll < 2000) {
    secondcontainerimg1.style.right = "";
    secondcontainertext1.style.right = "";
  }
  if (scroll > 2000) {
    secondcontainerimg1.style.right = "66px";
    secondcontainertext1.style.right = "66px";
  }
  if (scroll > 2100) {
    secondcontainerimg1.style.right = "122px";
    secondcontainertext1.style.right = "122px";
  }
  if (scroll > 2200) {
    secondcontainerimg1.style.right = "188px";
    secondcontainertext1.style.right = "188px";
  }
  if (scroll > 2300) {
    secondcontainerimg1.style.right = "254px";
    secondcontainertext1.style.right = "254px";
  }
  if (scroll > 2400) {
    secondcontainerimg1.style.right = "310px";
    secondcontainertext1.style.right = "310px";
  }
  if (scroll > 2500) {
    secondcontainerimg1.style.right = "376px";
    secondcontainertext1.style.right = "376px";
    textarea.innerHTML = ``;
  }
  if (scroll > 2800) {
    textarea.innerHTML = `<h1>X</h1>`;
  }
  if (scroll > 2810) {
    textarea.innerHTML = `<h1>A</h1>`;
  }
  if (scroll > 2820) {
    textarea.innerHTML = `<h1>D</h1>`;
  }
  if (scroll > 2830) {
    textarea.innerHTML = `<h1>DJ</h1>`;
  }
  if (scroll > 2840) {
    textarea.innerHTML = `<h1>DI</h1>`;
  }
  if (scroll > 2850) {
    textarea.innerHTML = `<h1>Da</h1>`;
  }
  if (scroll > 2860) {
    textarea.innerHTML = `<h1>DaY </h1>`;
  }
  if (scroll > 2865) {
    textarea.innerHTML = `<h1>DaP</h1>`;
  }
  if (scroll > 2870) {
    textarea.innerHTML = `<h1>Dan</h1>`;
  }
  if (scroll > 2875) {
    textarea.innerHTML = `<h1>DanZ</h1>`;
  }

  if (scroll > 2880) {
    textarea.innerHTML = `<h1>Dans </h1>`;
  }

  if (scroll > 2900) {
    textarea.innerHTML = `<h1>Dans G</h1>`;
  }
  if (scroll > 2905) {
    textarea.innerHTML = `<h1>Dans P</h1>`;
  }
  if (scroll > 2907) {
    textarea.innerHTML = `<h1>Dans M</h1>`;
  }
  if (scroll > 2910) {
    textarea.innerHTML = `<h1>Dans MT</h1>`;
  }
  if (scroll > 2915) {
    textarea.innerHTML = `<h1>Dans ME</h1>`;
  }
  if (scroll > 2917) {
    textarea.innerHTML = `<h1>Dans Mi</h1>`;
  }
  if (scroll > 2920) {
    textarea.innerHTML = `<h1>Dans MiR</h1>`;
  }
  if (scroll > 2925) {
    textarea.innerHTML = `<h1>Dans MiY</h1>`;
  }
  if (scroll > 2927) {
    textarea.innerHTML = `<h1>Dans Min</h1>`;
  }
  if (scroll > 2930) {
    textarea.innerHTML = `<h1>Dans MinD</h1>`;
  }
  if (scroll > 2935) {
    textarea.innerHTML = `<h1>Dans MinW</h1>`;
  }
  if (scroll > 2937) {
    textarea.innerHTML = `<h1>Dans Mine</h1>`;
  }
  if (scroll > 2940) {
    textarea.innerHTML = `<h1>Dans MineD</h1>`;
  }
  if (scroll > 2945) {
    textarea.innerHTML = `<h1>Dans MineY</h1>`;
  }
  if (scroll > 2947) {
    textarea.innerHTML = `<h1>Dans Minec</h1>`;
  }
  if (scroll > 2950) {
    textarea.innerHTML = `<h1>Dans MinecP</h1>`;
  }
  if (scroll > 2955) {
    textarea.innerHTML = `<h1>Dans MinecO</h1>`;
  }
  if (scroll > 2957) {
    textarea.innerHTML = `<h1>Dans Minecr</h1>`;
  }
  if (scroll > 2960) {
    textarea.innerHTML = `<h1>Dans MinecrE</h1>`;
  }
  if (scroll > 2965) {
    textarea.innerHTML = `<h1>Dans MinecrR</h1>`;
  }
  if (scroll > 2967) {
    textarea.innerHTML = `<h1>Dans Minecra</h1>`;
  }
  if (scroll > 2970) {
    textarea.innerHTML = `<h1>Dans MinecraC</h1>`;
  }
  if (scroll > 2975) {
    textarea.innerHTML = `<h1>Dans MinecraA</h1>`;
  }
  if (scroll > 2977) {
    textarea.innerHTML = `<h1>Dans Minecraf</h1>`;
  }
  if (scroll > 2980) {
    textarea.innerHTML = `<h1>Dans MinecrafA</h1>`;
  }
  if (scroll > 2985) {
    textarea.innerHTML = `<h1>Dans MinecrafB</h1>`;
  }
  if (scroll > 2990) {
    textarea.innerHTML = `<h1>Dans Minecraft, </h1>`;
  }
  if (scroll > 3000) {
    textarea.innerHTML = `<h1>Dans Minecraft, O</h1>`;
  }
  if (scroll > 3005) {
    textarea.innerHTML = `<h1>Dans Minecraft, P</h1>`;
  }
  if (scroll > 3007) {
    textarea.innerHTML = `<h1>Dans Minecraft, L</h1>`;
  }
  if (scroll > 3010) {
    textarea.innerHTML = `<h1>Dans Minecraft, LR</h1>`;
  }
  if (scroll > 3015) {
    textarea.innerHTML = `<h1>Dans Minecraft, LI</h1>`;
  }
  if (scroll > 3017) {
    textarea.innerHTML = `<h1>Dans Minecraft, le</h1>`;
  }
  if (scroll > 3020) {
    textarea.innerHTML = `<h1>Dans Minecraft, leX</h1>`;
  }
  if (scroll > 3025) {
    textarea.innerHTML = `<h1>Dans Minecraft, leW</h1>`;
  }
  if (scroll > 3027) {
    textarea.innerHTML = `<h1>Dans Minecraft, le </h1>`;
  }
  if (scroll > 3030) {
    textarea.innerHTML = `<h1>Dans Minecraft, le E</h1>`;
  }
  if (scroll > 3035) {
    textarea.innerHTML = `<h1>Dans Minecraft, le P</h1>`;
  }
  if (scroll > 3037) {
    textarea.innerHTML = `<h1>Dans Minecraft, le j</h1>`;
  }
  if (scroll > 3040) {
    textarea.innerHTML = `<h1>Dans Minecraft, le jE</h1>`;
  }
  if (scroll > 3045) {
    textarea.innerHTML = `<h1>Dans Minecraft, le LH</h1>`;
  }
  if (scroll > 3047) {
    textarea.innerHTML = `<h1>Dans Minecraft, le jo</h1>`;
  }
  if (scroll > 3050) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joG</h1>`;
  }
  if (scroll > 3055) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joF</h1>`;
  }
  if (scroll > 3057) {
    textarea.innerHTML = `<h1>Dans Minecraft, le jou</h1>`;
  }
  if (scroll > 3060) {
    textarea.innerHTML = `<h1>Dans Minecraft, le jouX</h1>`;
  }
  if (scroll > 3065) {
    textarea.innerHTML = `<h1>Dans Minecraft, le jouS</h1>`;
  }
  if (scroll > 3067) {
    textarea.innerHTML = `<h1>Dans Minecraft, le jou</h1>`;
  }
  if (scroll > 3070) {
    textarea.innerHTML = `<h1>Dans Minecraft, le jouD</h1>`;
  }
  if (scroll > 3075) {
    textarea.innerHTML = `<h1>Dans Minecraft, le jouY</h1>`;
  }
  if (scroll > 3077) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joue</h1>`;
  }
  if (scroll > 3080) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueA</h1>`;
  }
  if (scroll > 3085) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueF</h1>`;
  }
  if (scroll > 3087) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueu</h1>`;
  }
  if (scroll > 3090) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueuX</h1>`;
  }
  if (scroll > 3095) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueuW</h1>`;
  }
  if (scroll > 3097) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur </h1>`;
  }

  if (scroll > 3100) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur R</h1>`;
  }
  if (scroll > 3105) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur A</h1>`;
  }
  if (scroll > 3107) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur d</h1>`;
  }
  if (scroll > 3110) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dF</h1>`;
  }
  if (scroll > 3115) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dS</h1>`;
  }
  if (scroll > 3117) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur di</h1>`;
  }
  if (scroll > 3120) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur diP</h1>`;
  }
  if (scroll > 3125) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur diM</h1>`;
  }
  if (scroll > 3127) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dis</h1>`;
  }
  if (scroll > 3130) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur disG</h1>`;
  }
  if (scroll > 3135) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur disD</h1>`;
  }
  if (scroll > 3137) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur disp</h1>`;
  }
  if (scroll > 3140) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispL</h1>`;
  }
  if (scroll > 3145) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispG</h1>`;
  }
  if (scroll > 3147) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispo</h1>`;
  }
  if (scroll > 3150) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispoT</h1>`;
  }
  if (scroll > 3155) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispoQ</h1>`;
  }
  if (scroll > 3157) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispos</h1>`;
  }
  if (scroll > 3160) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur disposT</h1>`;
  }
  if (scroll > 3165) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur disposA</h1>`;
  }
  if (scroll > 3167) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1></h1>`;
  }
  if (scroll > 3200) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>R</h1>`;
  }
  if (scroll > 3205) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>Y</h1>`;
  }
  if (scroll > 3207) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>d</h1>`;
  }
  if (scroll > 3210) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>dF</h1>`;
  }
  if (scroll > 3215) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>dV</h1>`;
  }
  if (scroll > 3217) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de</h1>`;
  }
  if (scroll > 3220) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>deA</h1>`;
  }
  if (scroll > 3225) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>deZ</h1>`;
  }
  if (scroll > 3227) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de </h1>`;
  }
  if (scroll > 3230) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de T</h1>`;
  }
  if (scroll > 3235) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de A</h1>`;
  }
  if (scroll > 3237) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de d</h1>`;
  }
  if (scroll > 3240) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de dT</h1>`;
  }
  if (scroll > 3245) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de dA</h1>`;
  }
  if (scroll > 3247) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de de</h1>`;
  }
  if (scroll > 3250) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de deO</h1>`;
  }
  if (scroll > 3255) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de deA</h1>`;
  }
  if (scroll > 3257) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de deu</h1>`;
  }
  if (scroll > 3260) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de deuA</h1>`;
  }
  if (scroll > 3265) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de deuR</h1>`;
  }
  if (scroll > 3267) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de deux </h1>`;
  }
  if (scroll > 3300) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de deux R</h1>`;
  }
  if (scroll > 3305) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de deux T</h1>`;
  }
  if (scroll > 3307) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de deux m</h1>`;
  }
  if (scroll > 3310) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de deux mP</h1>`;
  }
  if (scroll > 3315) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de deux mC</h1>`;
  }
  if (scroll > 3317) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de deux me</h1>`;
  }
  if (scroll > 3320) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de deux meA</h1>`;
  }
  if (scroll > 3323) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de deux met</h1>`;
  }
  if (scroll > 3325) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de deux mec</h1>`;
  }
  if (scroll > 3327) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de deux mecA</h1>`;
  }
  if (scroll > 3330) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de deux mecR</h1>`;
  }
  if (scroll > 3333) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de deux mec</h1>`;
  }
  if (scroll > 3335) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de deux mecY</h1>`;
  }
  if (scroll > 3337) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de deux mecP</h1>`;
  }
  if (scroll > 3360) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de deux meca</h1>`;
  }
  if (scroll > 3365) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de deux mecaA</h1>`;
  }
  if (scroll > 3350) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de deux mecaY</h1>`;
  }
  if (scroll > 3355) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de deux mecan</h1>`;
  }
  if (scroll > 3358) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de deux mecanS</h1>`;
  }
  if (scroll > 3360) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de deux mecanX</h1>`;
  }
  if (scroll > 33663) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de deux mecani</h1>`;
  }
  if (scroll > 3355) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de deux mecaniQ</h1>`;
  }
  if (scroll > 3368) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de deux mecaniW</h1>`;
  }
  if (scroll > 3370) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de deux mecaniq</h1>`;
  }
  if (scroll > 3375) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de deux mecaniqA</h1>`;
  }
  if (scroll > 3378) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de deux mecaniqd</h1>`;
  }
  if (scroll > 3380) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de deux mecaniqu</h1>`;
  }
  if (scroll > 3383) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de deux mecaniquA</h1>`;
  }
  if (scroll > 3385) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de deux mecaniquX</h1>`;
  }
  if (scroll > 3387) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de deux mecanique</h1>`;
  }
  if (scroll > 3390) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de deux mecaniqueT</h1>`;
  }
  if (scroll > 3395) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de deux mecaniqueR</h1>`;
  }
  if (scroll > 3399) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispose </h1> </br> <h1>de deux mecaniques :</h1>`;
  }
  if (scroll > 3600) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispos </h1> </br> <h1>de deux mecaniques :</h1>`;
  }
  if (scroll > 3610) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dispo</h1> </br> <h1>de deux mecaniques :</h1>`;
  }
  if (scroll > 3620) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur disp</h1> </br> <h1>de deux mecaniques :</h1>`;
  }
  if (scroll > 3630) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur dis</h1> </br> <h1>de deux mecaniques :</h1>`;
  }
  if (scroll > 3640) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur di</h1> </br> <h1>de deux mecaniques :</h1>`;
  }
  if (scroll > 3650) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueur d</h1> </br> <h1>de deux mecaniques :</h1>`;
  }
  if (scroll > 3660) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joueu</h1> </br> <h1>de deux mecaniques :</h1>`;
  }
  if (scroll > 3670) {
    textarea.innerHTML = `<h1>Dans Minecraft, le joue</h1> </br> <h1>de deux mecaniques :</h1>`;
  }
  if (scroll > 3680) {
    textarea.innerHTML = `<h1>Dans Minecraft, le jou</h1> </br> <h1>de deux mecaniques :</h1>`;
  }
  if (scroll > 3690) {
    textarea.innerHTML = `<h1>Dans Minecraft, le jo</h1> </br> <h1>de deux mecaniques</h1>`;
  }
  if (scroll > 3700) {
    textarea.innerHTML = `<h1>Dans Minecraft, le j</h1> </br> <h1>de deux mecaniqu</h1>`;
  }
  if (scroll > 3710) {
    textarea.innerHTML = `<h1>Dans Minecraft, le</h1> </br> <h1>de deux mecaniq</h1>`;
  }
  if (scroll > 3720) {
    textarea.innerHTML = `<h1>Dans Minecraft, l</h1> </br> <h1>de deux mecaniq</h1>`;
  }
  if (scroll > 3730) {
    textarea.innerHTML = `<h1>Dans Minecraft,</h1> </br> <h1>de deux mecani</h1>`;
  }
  if (scroll > 3740) {
    textarea.innerHTML = `<h1>Dans Minecraft</h1> </br> <h1>de deux mecan</h1>`;
  }
  if (scroll > 3750) {
    textarea.innerHTML = `<h1>Dans Minecraf</h1> </br> <h1>de deux mec</h1>`;
  }
  if (scroll > 3760) {
    textarea.innerHTML = `<h1>Dans Minecra</h1> </br> <h1>de deux mec</h1>`;
  }
  if (scroll > 3770) {
    textarea.innerHTML = `<h1>Dans Minecr</h1> </br> <h1>de deux me</h1>`;
  }
  if (scroll > 3780) {
    textarea.innerHTML = `<h1>Dans Minec</h1> </br> <h1>de deux m</h1>`;
  }
  if (scroll > 3790) {
    textarea.innerHTML = `<h1>Dans Mine</h1> </br> <h1>de deux</h1>`;
  }
  if (scroll > 3800) {
    textarea.innerHTML = `<h1>Dans Min</h1> </br> <h1>de deu</h1>`;
  }
  if (scroll > 3810) {
    textarea.innerHTML = `<h1>Dans Mi</h1> </br> <h1>de de</h1>`;
  }
  if (scroll > 3820) {
    textarea.innerHTML = `<h1>Dans M</h1> </br> <h1>de d</h1>`;
  }
  if (scroll > 3830) {
    textarea.innerHTML = `<h1>Dans</h1> </br> <h1>de</h1>`;
  }
  if (scroll > 3840) {
    textarea.innerHTML = `<h1>Dan</h1> </br> <h1>d</h1>`;
  }
  if (scroll > 3850) {
    textarea.innerHTML = `<h1>Da</h1> </br> <h1></h1>`;
  }
  if (scroll > 3860) {
    textarea.innerHTML = `<h1>D</h1> </br> <h1></h1>`;
  }
  if (scroll > 3870) {
    textarea.innerHTML = `<h1></h1> </br> <h1></h1>`;
  }
  if (scroll < 4000) {
    animationimg1.style.position = "";
    animationimg1.style.display = "none";
    animationimg2.style.position = "";
    animationimg2.style.display = "none";
    fixedimg1.style.display = "none";
    fixedimg2.style.display = "none";
    fixedimg3.style.display = "none";
  }
  if (scroll > 4000) {
    textarea.innerHTML = `<h1>Il peut casser des blocs :</h1> `;
    animationimg1.style.position = "fixed";
    animationimg1.style.display = "block";
    animationimg2.style.position = "fixed";
    animationimg2.style.display = "block";
    animationimg1.style.right = "550px";
    animationimg1.style.top = "300px";
    animationimg2.style.right = "500px";
    animationimg2.style.top = "270px";
    animationimg2.style.rotate = "";
    fixedimg1.style.display = "block";
    fixedimg2.style.display = "block";
    fixedimg3.style.display = "block";
  }
  if (scroll > 4300) {
    animationimg2.style.rotate = "30deg";
  }
  if (scroll > 4400) {
    animationimg2.style.rotate = "60deg";
  }
  if (scroll > 4500) {
    animationimg2.style.rotate = "30deg";
  }
  if (scroll > 4600) {
    animationimg2.style.rotate = "0deg";
  }
  if (scroll > 4700) {
    animationimg2.style.rotate = "30deg";
  }
  if (scroll > 4800) {
    animationimg2.style.rotate = "60deg";
  }
  if (scroll > 4900) {
    animationimg2.style.rotate = "30deg";
  }
  if (scroll > 5000) {
    animationimg2.style.rotate = "0deg";
  }
  if (scroll < 5100) {
    animationimg1.style.width = "150px";
    animationimg1.style.left = "";
    animationimg3.style.display = "";
    animationimg4.style.display = "";
  }
  if (scroll > 5100) {
    animationimg1.style.width = "60px";
    animationimg1.style.top = "380px";
    animationimg1.style.left = "785px";
    animationimg3.style.display = "block";
    animationimg4.style.display = "block";
  }
  if (scroll < 5500) {
    fixedimg4.style.top = "0";
    fixedimg4.style.position = "";
    fixedimg4.style.display = "none";
    textarea2.innerHTML = ``;
  }
  if (scroll >= 5500) {
    animationimg3.style.display = "";
    animationimg4.style.display = "";
    animationimg1.style.display = "none";
    animationimg2.style.display = "none";
    fixedimg1.style.display = "none";
    fixedimg2.style.display = "none";
    fixedimg3.style.display = "none";
    textarea.innerHTML = `<h1>Il peut egalement assembler des objets pour en obtenir d'autres :</h1>`;
    fixedimg4.style.top = "300px";
    fixedimg4.style.right = "300px";
    fixedimg4.style.position = "fixed";
    fixedimg4.style.display = "block";
    textarea2.innerHTML = `Ici, le joueur construit une porte`;
  }
  if (scroll < 5700) {
    fixedimg5.style.display = "";
  }
  if (scroll > 5700) {
    fixedimg5.style.display = "block";
    fixedimg6.style.display = "";
  }
  if (scroll > 5800) {
    fixedimg6.style.display = "block";
    fixedimg7.style.display = "";
  }
  if (scroll > 5900) {
    fixedimg7.style.display = "block";
    fixedimg8.style.display = "";
  }
  if (scroll > 6000) {
    fixedimg8.style.display = "block";
    fixedimg9.style.display = "";
  }
  if (scroll > 6100) {
    fixedimg9.style.display = "block";
    fixedimg10.style.display = "";
    fixedimg11.style.display = "";
  }
  if (scroll > 6200) {
    fixedimg10.style.display = "block";
    fixedimg11.style.display = "block";
  }
  if (scroll < 6700) {
    textarea.style.display = "block";
    textarea2.style.display = "block";
  }

  if (scroll > 6700) {
    fixedimg4.style.display = "none";
    fixedimg5.style.display = "none";
    fixedimg6.style.display = "none";
    fixedimg7.style.display = "none";
    fixedimg8.style.display = "none";
    fixedimg9.style.display = "none";
    fixedimg10.style.display = "none";
    fixedimg11.style.display = "none";
    textarea.style.display = "none";
    textarea2.style.display = "none";
  }
  if (scroll > 6800) {
    secondcontainerimg1.style.right = "310px";
    secondcontainertext1.style.right = "310px";
  }
  if (scroll > 6900) {
    secondcontainerimg1.style.right = "254px";
    secondcontainertext1.style.right = "254px";
  }
  if (scroll > 7000) {
    secondcontainerimg1.style.right = "188px";
    secondcontainertext1.style.right = "188px";
  }
  if (scroll > 7100) {
    secondcontainerimg1.style.right = "122px";
    secondcontainertext1.style.right = "122px";
  }
  if (scroll > 7200) {
    secondcontainerimg1.style.right = "66px";
    secondcontainertext1.style.right = "66px";
  }
  if (scroll <= 7400) {
    secondcontainerimg1.style.marginTop = "0";
  }
  if (scroll > 7300) {
    secondcontainerimg1.style.right = "0";
    secondcontainertext1.style.right = "0";
  }
  if (scroll > 7400) {
    secondcontainerimg1.style.position = "relative";
    secondcontainertext1.style.position = "relative";
    secondcontainerimg1.style.zIndex = "-1";
    secondcontainertext1.style.zIndex = "-1";
    secondcontainerimg1.style.top = "";
    secondcontainertext1.style.top = "";
    secondcontainerimg1.style.marginTop = "5500px";
    secondcontainerimg2.style.display = "";
    secondcontainertext2.style.display = "";
  }
  if (scroll < 8040) {
    secondcontainerimg2.style.position = "";
    secondcontainertext2.style.position = "";
    secondcontainerimg2.style.top = "";
    secondcontainertext2.style.top = "";
  }
  if (scroll > 8040) {
    secondcontainerimg2.style.position = "fixed";
    secondcontainertext2.style.position = "fixed";
    secondtitle.style.position = "fixed";
    secondcontainerimg2.style.top = "100px";
    secondcontainertext2.style.top = "550px";
    secondtitle.style.top = "50px";
  }
  if (scroll < 8200) {
    secondcontainerimg2.style.right = "";
    secondcontainertext2.style.right = "";
  }
  if (scroll > 8200) {
    secondcontainerimg2.style.right = "66px";
    secondcontainertext2.style.right = "66px";
  }
});
console.log(secondcontainerimg2);
console.log(title);
