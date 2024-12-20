const movingImgs = function (e) {
  let imgX = e.clientX;
  let imgY = e.clientY;
  // console.log(imgX, imgY);

  $('.book').css({ right: 580 - imgX / -50, bottom: -50 + imgY / -70});

  $('.gl').css({ right: 780 - imgX / 50, bottom: 250 + imgY / 30});

  $('.pan').css({ right: imgX / 60, bottom: 220 - imgY / 30});

  $('.git').css({ right: 900 + imgX / 80, bottom: 400 - imgY / 50});

  $('.html').css({ right: 240 - imgX / 20, bottom: -50 - imgY / 60});


  $('.face').css({ right: 380 - imgX / 20, bottom: 250 + imgY / 200});
  $('.face2').css({ right: 180 - imgX / 70, bottom: 90 + imgY / 500});
  $('.ring1').css({ right: 30 - imgX / 50, bottom: 160 + imgY / 900});
  $('.ring2').css({ right: 30 - imgX / 50, bottom: 160 + imgY / 900});


  requestAnimationFrame(movingImgs);
};

$('.home').on('mousemove', movingImgs);


const movingImg = function (e) {
  let imgX = e.clientX;
  let imgY = e.clientY;
  // console.log(imgX, imgY);

  $('.p1').css({ right: 640 + imgX / 50, bottom: 200 - imgY / 70});
  $('.p2').css({ right: 580 + imgX / 30, bottom: 200 - imgY / 80});



  requestAnimationFrame(movingImg);
};

$('.project').on('mousemove', movingImg);


const circle = document.querySelector('.circleM');

window.addEventListener('scroll', () => {
    // 현재 스크롤 위치를 가져옵니다.
    const scrollY = window.scrollY;

    // 스크롤 위치에 따라 원의 크기를 조정합니다.
    const newSize = 100 + scrollY * 1.2; // 스크롤에 따라 크기 증가
    circle.style.width = `${newSize}px`;
    circle.style.height = `${newSize}px`;
});


document.addEventListener("scroll", () => {
  const section2 = document.getElementById("section2");
  const section3 = document.getElementById("section3");
  const navLinks = document.querySelectorAll(".global-menu a");

  const isVisible = (element) => {
      const rect = element.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
  };

  // Check visibility of section2 and section3
  const isSection2Visible = isVisible(section2);
  const isSection3Visible = isVisible(section3);

  // Apply active class if either section2 or section3 is visible
  if (isSection2Visible || isSection3Visible) {
      navLinks.forEach(link => link.classList.add("active"));
  } else {
      navLinks.forEach(link => link.classList.remove("active"));
  }
});

const links = [

  { link: document.querySelector('.image-link3'), image: document.querySelector('.category3') }
];

links.forEach(item => {
  item.link.addEventListener('mouseover', () => {
      item.image.style.display = 'block';
  });

  item.link.addEventListener('mouseout', () => {
      item.image.style.display = 'none';
  });
});

document.addEventListener("scroll", () => {
  const section2 = document.getElementById("section2");
  const section3 = document.getElementById("section3");
  const logo = document.getElementById("logo1");

  const isVisible = (element) => {
      const rect = element.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
  };

  // Check visibility of section2 and section3
  const isSection2Visible = isVisible(section2);
  const isSection3Visible = isVisible(section3);

  // Change logo src based on visibility
  if (isSection2Visible || isSection3Visible) {
      logo.src = "./assets/images/0.logow.png"; // 흰색 로고
  } else {
      logo.src = "./assets/images/0.logo.png"; // 기본 로고
  }
});


