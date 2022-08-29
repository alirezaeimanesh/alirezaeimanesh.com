const api = 'https://api.github.com/users/alirezaeimanesh';

async function getAsyncAPI(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}
const data = getAsyncAPI(api);

data.then((response) => {
  document.getElementById('avatar').src = response.avatar_url;
  document.getElementById('name').innerHTML = response.name;
  document.getElementById('bio').innerHTML = response.bio;

  function typewriter(element) {
    let Arraytext = element.innerHTML.split('');
    element.innerHTML = '';
    for (let i = 0; i < Arraytext.length; i++) {
      setTimeout(() => element.innerHTML += Arraytext[i], 200 * i);
    }
  }
  let title = document.querySelector('#typewriter');
  typewriter(title);
  setInterval(() => {
    title.value = ""
    typewriter(title);
  }, 15000);
});

const ulTechFly = document.querySelector("ul.tech-fly");
for (let i = 0; i < 13; i++) {
  const li = document.createElement("li");
  const random = (min, max) => Math.random() * (max - min) + min;
  const size = Math.floor(random(10, 120));
  const position = random(1, 80);
  const delay = random(5, 0.1);
  const duration = random(24, 12);
  const icon = i;
  const faIcon = icon => `<i class="fab fa-${icon} fa-2x"></i>`;
  switch (icon) {
    case 1:
      li.innerHTML = faIcon("react");
      break;
    case 2:
      li.innerHTML = faIcon("html5");
      break;
    case 3:
      li.innerHTML = faIcon("node-js");
      break;
    case 4:
      li.innerHTML = faIcon("sass");
      break;
    case 5:
      li.innerHTML = faIcon("angular");
      break;
    case 6:
      li.innerHTML = faIcon("css3-alt");
      break;
    case 7:
      li.innerHTML = faIcon("vuejs");
      break;
    case 8:
      li.innerHTML = faIcon("bootstrap");
      break;
    case 9:
      li.innerHTML = faIcon("js-square");
      break;
    case 10:
      li.innerHTML = faIcon("npm");
      break;
    case 11:
      li.innerHTML = faIcon("git-alt");
      break;
    case 12:
      li.innerHTML = faIcon("gulp");
      break;
  }
  li.style.bottom = `-${size}px`;
  li.style.left = `${position}%`;
  li.style.animationDelay = `${delay}s`;
  li.style.animationDuration = `${duration}s`;
  li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()},${Math.random()})`;

  ulTechFly.appendChild(li);
}