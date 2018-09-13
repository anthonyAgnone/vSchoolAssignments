// Global variables
let navButton = document.getElementById('showNav');
let homeButton = document.getElementById('home');
let portfolioButton = document.getElementById('portfolio');
let aboutButton = document.getElementById('about');
let resumeButton = document.getElementById('resume');
let panels = document.getElementsByClassName('panel');
let portfolioSection = document.getElementById('portfolioSection');
let header = document.querySelector('header');
let aboutSection = document.getElementById('aboutSection');
let currentIndex = 'home';
let selected = [];
const defaultWidth = '25vw';
let isDisabled = false;
let sections = document.querySelectorAll('.section');

let infoContent = [
  {
    title: 'Project 1',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio odio expedita dolorem, doloremque porro voluptatibus cupiditate similique iusto! Laboriosam enim assumenda illo vitae totam quibusdam deserunt fugiat repellat, at dicta?adipisicing elit. Optio odio expedita dolorem, doloremque porro voluptatibus cupiditate similique iusto!',
    publishDate: 'Jan 1 2018',
    images: [
      {
        name: 'Image 1',
        path: './images/info/project1/site1_1.png'
      },
      {
        name: 'Image 2',
        path: './images/info/project1/site1_2.png'
      },
      {
        name: 'Image 3',
        path: './images/info/project1/site1_3.png'
      }
    ]
  },
  {
    title: 'Project 2',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio odio expedita dolorem, doloremque porro voluptatibus cupiditate similique iusto! Laboriosam enim assumenda illo vitae totam quibusdam deserunt adipisicing elit. Optio odio expedita dolorem, doloremque porro voluptatibus cupiditate similique iusto! assumenda illo vitae totam quibusdam deserunt fugiat repellat, at dicta fugiat repellat, at dicta?',
    publishDate: 'Jan 1 2018',
    images: [
      {
        name: 'Image 1',
        path: './images/info/project2/site2_2.png'
      },
      {
        name: 'Image 2',
        path: './images/info/project2/site2_1.png'
      },
      {
        name: 'Image 3',
        path: './images/info/project2/site2_2.png'
      }
    ]
  },
  {
    title: 'Project 3',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio odio expedita dolorem, doloremque porro voluptatibus cupiditate similique iusto! Laboriosam enim assumenda illo vitae totam quibusdam deseruntv adipisicing elit. Optio odio expedita dolorem, doloremque porro voluptatibus cupiditate similique iusto! Laboriosam enim assumenda illo vitae totam quibusdam deserunt fugiat repellat, at dicta fugiat repellat, at dicta?',
    publishDate: 'Jan 1 2018',
    images: [
      {
        name: 'Image 1',
        path: './images/info/project3/one.png'
      },
      {
        name: 'Image 2',
        path: './images/info/project3/two.png'
      },
      {
        name: 'Image 3',
        path: './images/info/project3/three.png'
      }
    ]
  },
  {
    title: 'Project 4',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio odio expedita dolorem, doloremque porro voluptatibus cupiditate similique iusto! Laboriosam enim assumenda illo vitae totam quibusdam deserunt  adipisicing elit. Optio odio expedita dolorem, doloremque porro voluptatibus cupiditate similique iusto! Laboriosam enim assumenda illo vitae totam quibusdam deserunt fugiat repellat, at dictafugiat repellat, at dicta?',
    publishDate: 'Jan 1 2018',
    images: [
      {
        name: 'Image 1',
        path: './images/info/project4/site3_1.png'
      },
      {
        name: 'Image 2',
        path: './images/info/project4/site3_2.png'
      },
      {
        name: 'Image 3',
        path: './images/info/project4/site3_3.png'
      }
    ]
  }
];

/**
 * @desc moves sections into view when selecting in menu
 * @param object $sections pass all sections in
 * @return null
 */
const setDefault = sections => {
  sections.forEach(section => {
    if (section.id === 'main') section.style.transform = 'translateX(0)';
    else if (section.id === 'portfolioSection') section.style.transform = 'translateX(-100%)';
    else if (section.id === 'aboutSection') section.style.transform = 'translateX(100%)';
  });
};

const choosePortfolio = sections => {
  sections.forEach(section => {
    if (section.id === 'main') section.style.transform = 'translateX(100%)';
    else if (section.id === 'portfolioSection') section.style.transform = 'translateX(0)';
  });
};

const chooseAbout = section => {
  sections.forEach(section => {
    if (section.id === 'main') section.style.transform = 'translateX(-100%)';
    else if (section.id === 'portfolioSection') section.style.transform = 'translateX(-200%)';
    else if (section.id === 'aboutSection') section.style.transform = 'translateX(0)';
  });
};

/**
 * @desc toggles whether or not the gallery section is selected
 * to access the menu
 * @param el the element to disable the pointerEvents on
 * @return null
 */

const toggleNoPointer = el => {
  if (!isDisabled && !el.classList.contains('pointerNone')) isDisabled = true;
  else if (isDisabled && !el.classList.contains('pointerNone')) {
    isDisabled = false;
    el.classList.add('pointerNone');
  } else if (!isDisabled && el.classList.contains('pointerNone')) {
    el.classList.remove('pointerNone');
    isDisabled = true;
  }
};

/**
 * @desc handles the sliding events to reveal menu
 * @param none
 * @return null
 */

const handleMainSlide = () => {
  let headerClass = header.classList;
  if (headerClass.contains('slide')) headerClass.replace('slide', 'slideDown');
  else if (headerClass.contains('slideDown')) headerClass.replace('slideDown', 'slide');
  else headerClass.add('slide');
};

const handlePanelSlide = () => {
  toggleNoPointer(portfolioSection);
  Array.from(panels).forEach(panel => {
    if (!panel.classList.contains('slide') && !panel.classList.contains('slideDown'))
      panel.classList.toggle('slideDown');
    else {
      panel.classList.toggle('slide');
      panel.classList.toggle('slideDown');
    }
  });
};

const handleAboutSlide = () => {
  let aboutClass = aboutSection.classList;
  if (!aboutClass.contains('slideRight') && !aboutClass.contains('slideLeft')) {
    aboutClass.toggle('slideLeft');
  } else {
    aboutClass.toggle('slideRight');
    aboutClass.toggle('slideLeft');
  }
};

/**
 * @desc sets widths for panels upon selection
 * @param div $el to set width on browser
 * @return null
 */

const expand = el => {
  // el.style.width = '100vw';
  el.classList.add('expand');
  let childImage = el.querySelector('img');
  childImage.classList.add('expanded');
  el.classList.remove('overflow-hidden');
  el.classList.add('overflowX-hidden');
  el.querySelector('.project-lead').classList.add('opacity-1');
};

const compress = el => {
  el.classList.add('compress');
  // el.style.width = '0';
  el.style.visibility = 'hidden';
};

const setDefaultWidth = el => {
  el.style.visibility = 'visible';
  el.classList.remove('expand');
  el.classList.remove('compress');
  // el.style.width = defaultWidth;
  let childImage = el.querySelector('img');
  let projectLead = el.querySelector('.project-lead');
  childImage.classList.remove('expanded');
  projectLead.classList.remove('opacity-1');
};

/**
 * @desc creates the information box when window is expanded
 * @param panel index $el the element to create box in
 * $selectedIndex the index of the panel being selected
 * @return null
 */

const createInfo = (el, selectedIndex) => {
  let infoScreen = document.createElement('div');
  infoScreen.classList.add('newInfo', 'fadeIn', 'w-100vw', 'p-absolute', 'darkShades-text');
  infoScreen.id = 'info' + selectedIndex;
  infoScreen.innerHTML = `
		<span class="scroll-btn">
			<a href="#">
				<span class="mouse">
					<span>
					</span>
				</span>
			</a>
			<p>scroll me</p>
		</span>
		<div class="container w-100vw">
			<div class="info-grid">
				<p class="info-counter">01</p>
				<div class="image-container">
				  <img class="info-image" src="${infoContent[selectedIndex].images[0].path}" />
        </div>
				<p class="info-content opacity-0">${infoContent[selectedIndex].content}</p>
				<h1 class="image-name">${infoContent[selectedIndex].images[0].name}</h1>
			</div>		
			<div class="info-grid">
				<p class="info-counter">02</p>
				<div class="image-container">
				  <img class="info-image" src="${infoContent[selectedIndex].images[1].path}" />
        </div>
				<p class="info-content opacity-0">${infoContent[selectedIndex].content}</p>
				<h1 class="image-name">${infoContent[selectedIndex].images[1].name}</h1>
			</div>
			<div class="info-grid">
        <p class="info-counter">03</p>
        <div class="image-container">
				  <img class="info-image" src="${infoContent[selectedIndex].images[2].path}" />
        </div>
				<p class="info-content opacity-0">${infoContent[selectedIndex].content}</p>
				<h1 class="image-name">${infoContent[selectedIndex].images[2].name}</h1>
			</div>				
		</div>
	`;
  el.appendChild(infoScreen);
  let infoGrid = el.querySelector('.container .info-grid');
  let infoParagraph = el.querySelector('.container .info-grid .info-content');
};

/**
 * @desc kills the information box on the page
 * @param infoBox $el element to be removed
 * @return null
 */
const removeInfo = el => {
  let toRemove = document.querySelector('.newInfo');
  toRemove.remove();
};

/**
 * @desc state machine to return if a panel is selected
 * @param boolean panel index $isSelected @el @i
 * @return boolean is the panel selected
 */

const handleSelect = (isSelected, el, i) => {
  if (!isSelected) {
    selected = selected.map((sel, selectedIndex) => {
      if (i === selectedIndex) {
        expand(el);
        setTimeout(function() {
          createInfo(el, selectedIndex);
        }, 500);
        return true;
      } else {
        compress(panels[selectedIndex]);
        return false;
      }
    });
  } else {
    selected = selected.map((sel, selectedIndex) => {
      setDefaultWidth(panels[selectedIndex]);
      return false;
    });
    removeInfo(el);
  }
};

/**
 * @desc Event Handler Section
 */

navButton.addEventListener('click', function() {
  if (currentIndex === 'home') handleMainSlide();
  else if (currentIndex === 'portfolio') handlePanelSlide();
  else if (currentIndex === 'about') handleAboutSlide();
});

Array.from(panels).forEach((panel, i) => {
  selected.push(false);
  panel.addEventListener('click', e => {
    handleSelect(selected[i], e.target, i);
  });
});

document.querySelector('.hidden-nav ul').addEventListener(
  'click',
  e => {
    let target = e.target;
    if (target.id === 'home') {
      setDefault(sections);
      handleMainSlide();
      currentIndex = 'home';
    } else if (target.id === 'portfolio') {
      currentIndex = 'portfolio';
      choosePortfolio(sections);
      handlePanelSlide();
    } else if (target.id === 'about') {
      currentIndex = 'about';
      chooseAbout(sections);
      handleAboutSlide();
    }
  },
  false
);

document.addEventListener('mousemove', event => {
  let homeImg = document.getElementById('homeImg');
  let aboutOne = document.getElementById('aboutOne');
  let aboutTwo = document.getElementById('aboutTwo');
  let w = window.innerWidth;
  let offsetX = 0.5 - event.pageX / w;
  let offsetY = 0.5 - event.pageY / w;
  let translateImg = `translate(${offsetX * 5.6 - 50}%, ${Math.round(offsetY * 30)}px)`;
  let translateOne = `translate(${offsetX * 5.2 - 30}%, ${offsetY - 25}%)`;
  let translateTwo = `translate(${offsetX * -5.2 + 20}%, ${offsetY - 35}%)`;
  homeImg.style.transform = translateImg;
  aboutOne.style.transform = translateOne;
  aboutTwo.style.transform = translateTwo;
});

// Set default positions for the sections
setDefault(sections);
