"use strict";

// run a function when the window has loaded that enables DOM listeners
window.onload = addListners;

function addListners() {
    const firstListener = document.getElementById('note1');
    const secondListener = document.getElementById('note2');
    const thirdListener = document.getElementById('note3');
    const menuListener = document.getElementById('menuFunc');
    // const menuListener = document.getElementById('dropdown-content-id')
    firstListener.addEventListener('click', letterRevealOne);
    secondListener.addEventListener('click', letterRevealTwo);
    thirdListener.addEventListener('click', letterRevealThree);
    menuListener.addEventListener('click', menuLinks);
}


function letterRevealOne() {

    const messageOne = `<p class="letters">I was younger then. Derailed, I emerged with roll of paper in my hand and a sense of disillusionment, I ventured away from elderly adolescence. Repelled by city life and suburban struggles I found myself by the sea. Life ebbs and flows with the tide - we wait on the next swell.  How long has it been ... ?  Days turn to weeks,  weeks into years.  The mind wanders, longing for shores far from here.  Venturing around the coast it seems to stretch on and on.  I found a length of timber about nine feet, roughly 20 inches wide.  Not large enough to find richer lands, but pretty good for catching some waves.  Perhaps I will stay here a while... </p>
	   `;

    const myStoryOne = `<p class="my-story"> I grew up in the suburbs of Glasgow 
    and went on to study at Dundee University where I left with a BSc in Architecture.  
    After working briefly in the field I decided to change direction and move away from construction.  
    I moved to the North coast of Cornwall and for the last ten years Newquay has been my home.  For seven 
    of those I have been a beach lifeguard with the RNLI.   A job that has been a dream. Day to day helping
     people on the beach and in the water is no chore. Times of joy, sadness, heroism and tragedy, the job 
     has given me many memorable times.  As experienced surfers and swimmers we use our knowledge and 
     experience to help those without it. </p>
`;
    let notes = document.getElementById("note1");

    if (notes.classList.item(0) === "class-check") {
        notes.innerHTML = myStoryOne;
        document.getElementById("note1").classList.replace("class-check", "animate");
        console.log(document.getElementById("note1").classList);
    } else {
        notes.innerHTML = messageOne;
        document.getElementById("note1").classList.replace("animate", "class-check");
                console.log(document.getElementById("note1").classList);
    }

}

function letterRevealTwo() {

    const messageTwo = `<p class="letters">… many days and nights at sea, my skin leathered and salty. Not lost, it seems I have found a new world. Alone - I opened my eyes on this wonderful tech world - it’s beautiful!  There is so much to see and so much to learn, but with no guide I feel that I’m staggering through a forest with fresh eyes. Every CSS animation a different flower, every javascript framework a wonderful new animal species. I need an experienced bushman (full stack dev) to show me how to survive. How to get stronger and thrive.
     </p>
     `;

    const myStoryTwo = `<p class="my-story"> In the summer of 2017 I found an
     article on Hacker Noon; “Learn To Code In 2017, Get Hired, And Have Fun Along The Way”.  Coming up
      on a winter hiatus from lifeguarding I thought this would be a fantastic way to upgrade my grey matter. 
      The article promised employment after 5 months of self learning.  However, I now know enough to know 
      how little I really know. I have found that despite learning a great deal since starting my learning,
       I still lack the missing links to make myself useful.  I am sitting on the fence slightly.  One foot
       dangling towards php and wordpress site building for local businesses, and the other wishfully peering
       towards the JAM stack world of PWAs.</p>
	`;

    let notes = document.getElementById("note2");

    if (notes.classList.item(0) === "class-check") {
        notes.innerHTML = myStoryTwo;
        document.getElementById("note2").classList.toggle("class-check");
    } else {
        notes.innerHTML = messageTwo;
        notes.classList.toggle("class-check");
    }
}

function letterRevealThree() {

    const messageThree = ` <p class="letters">So to whoever finds this message in a bottle, hear my plea. 
	I am a castaway on the shores of a wonderful new land, with no knowledge of safe passage, or the skills 
	to survive. I have pulled enough scraps together to write this message, however I don't know how long I 
	can last without guidance! Everyday I venture into this tech jungle, and wander as though blind. Is this 
	php fruit safe to eat? It looks like it’s been there for quite some time. Perhaps a React raft is what I 
	should build…… PLEASE SEND HELP!!</p>
                    `;

    const myStoryThree = `<p class="my-story"> Founders and Coders course would be 
    an amazing opportunity! I absolutely love the challenges that coding offers, and with or without this 
    course, I know that I will continue to learn and progress in this field. However I would relish the 
    opportunity to learn in an environment such as this; surrounded by like minded folk, helping each other
     to solve new challenges, learning from your experienced tutors and immersing ourselves in the technology.
      In a way, like learning a foreign language, I need complete immersion.  Else I remain an outsider 
      looking in, without direction or focus.</p>
`;

    let notes = document.getElementById("note3");

    if (notes.classList.item(0) === "class-check") {
        notes.innerHTML = myStoryThree;
        document.getElementById("note3").classList.toggle("class-check");
    } else {
        notes.innerHTML = messageThree;
        notes.classList.toggle("class-check");
    }
}


// nav bar - show list of links in dropdown menu by toggling class "Show"
function menuLinks() {
  console.log(document.getElementById("dropdown-content-id").classList);
    document.getElementById("dropdown-content-id").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('.dropdown')) {
        var myDropdown = document.getElementById("dropdown-content-id");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* Toggle between adding and removing the "responsive" class to nav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("menu");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}