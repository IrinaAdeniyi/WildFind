//Store object details to use in the modal
const hiddenObjects = {
    butterfly: {
        name: "Blue Morpho Butterfly",
        image: "assets/images/blue-morpho-butterfly-pop-up.png",
        color: "Brilliant blue on top, brown with eyespots underneath",
        habitat: "This vibrant butterfly lives in the Tropical rainforests of Central and South America",
        funFact: "The wingspan of The Blue Morpho Butterfly is up to 15cm and its vivid color it's created by microscopic scales that reflect light!",
        defenseTrick: "When resting, it folds its wings to show the dull brown underside, hiding from predators."
    },

    frog: {
        name: "Tree Frog",
        image: "assets/images/tree-frog-pop-up.png",
        color: "Bright green or yellow-green with smooth, moist skin",
        habitat: "Found in the humid rainforests of Central and South America, often high up in trees near water sources",            funFact: "Tree frogs have sticky toe pads that allow them to climb vertical surfaces and even hang upside down on leaves.",
        defenseTrick: "They remain motionless to camouflage with leaves, and some species secrete toxins from their skin to deter predators."
    },

    snake: {
        name: "Boa Constrictor",
        image: "assets/images/boa-constrictor-pop-up.png",
        color: "Brown, grey, or cream with darker saddle-like markings",
        habitat: "Inhabits tropical rainforests, savannas, and arid regions throughout Central and South America",
        funFact: "Boas don't use venom—they squeeze their prey until it can't breathe before swallowing it whole.",
        defenseTrick: "Its patterns help it blend in with the forest floor, and it stays hidden until it's ready to strike."
    },

    orchid: {
        name: "Rainforest Orchid",
        image: "assets/images/orchid-pop-up.png",
        color: "Comes in a variety of colors including pink, white, and purple",
        habitat: "Grows on tree branches and trunks in warm, moist rainforest climates",
        funFact: "Orchids are epiphytes, meaning they grow on other plants without taking nutrients from them.",
        defenseTrick: "Their appearance mimics other elements in the forest to attract pollinators and avoid herbivores."
    },

    monkey: {
        name: "Capuchin Monkey",
        image: "assets/images/capuchin-monkey-pop-up.png",
        color: "Cream or white face with dark brown or black body",
        habitat: "Lives in tropical forests across Central and South America, often in the upper canopy",
        funFact: "Capuchins are one of the smartest monkeys—they use tools and have complex social behavior.",
        defenseTrick: "They move quickly through trees, chatter loudly in groups, and use teamwork to scare off predators."
    }
};

// Funtion to update the counter
function updateCounter(){
    let foundCount = 0;
    const allObjects = document.querySelectorAll('.hidden-object');

    for(const object of allObjects){
        if (object.style.display === 'none') {
            foundCount++;
        }
    }

    const totalItems = Object.keys(hiddenObjects).length;

    // Update the counter element on the page
    document.getElementById('found-counter').textContent = `Found: ${foundCount} / ${totalItems}`;
    
    return foundCount;
}

/** Hide the object once it is clicked, 
 * cross the matching name in the footer checklist
 * show the modal pop-up with the info about the object
 * update counter */
document.addEventListener('DOMContentLoaded', function(){

    let foundCount = 0;

    document.querySelectorAll('.hidden-object').forEach(obj => {
        obj.addEventListener('click', function(){
        
            // Hide the clicked object
            this.style.display = 'none'; 

            // Cross off the word matching the found object
            const id = this.id;

            const checkText = document.querySelector(`#${id}-check .cross-text`);
            if (checkText) {
                checkText.style.textDecoration = 'line-through';
            };
        
            // Show the pop-up (modal info)
            const item = hiddenObjects[id];
            if (item) {
                document.getElementById('modal-image').src = item.image;
                document.getElementById('modal-title').textContent = item.name;
                document.getElementById('modal-color').textContent = item.color;
                document.getElementById('modal-habitat').textContent = item.habitat;
                document.getElementById('modal-fun-fact').textContent = item.funFact;
                document.getElementById('modal-defense-trick').textContent = item.defenseTrick;
                document.getElementById('infoModal').style.display = 'flex';
            }
            
            // Update the counter and store it in the modal's dataset
            const foundCount = updateCounter();
            document.getElementById('infoModal').dataset.foundcount = foundCount;
        });
    });
});

//Close pop-up when x is clicked
document.addEventListener('DOMContentLoaded', function(){
    const modal = document.getElementById('infoModal');
    const totalItems = Object.keys(hiddenObjects).length; 

    document.querySelector('.close-btn').addEventListener('click', function () {
        modal.style.display = 'none';

        const foundCount = parseInt(modal.dataset.foundcount || "0");
        if (foundCount === totalItems) {
            setTimeout(() => {
                document.getElementById('congratsModal').style.display = 'flex';
            }, 200);            
        }
    });

// Close pop-up when the background is clicked
    modal.addEventListener('click', function (e) {
        if (e.target.id === 'infoModal') {
            this.style.display = 'none';
        }
    
    const foundCount = parseInt(modal.dataset.foundcount || "0");
    if (foundCount === totalItems) {
        setTimeout(() => {
            document.getElementById('congratsModal').style.display = 'flex';
        }, 200);        
    }
    });

    // Close congratulations modal
    document.querySelector('.congrats-close-btn').addEventListener('click', function () {
    document.getElementById('congratsModal').style.display = 'none';
    });
});

// Background picture responsiveness
function setGameAreaHeight() {
    const gameArea = document.querySelector('.game-area');
    const footer = document.querySelector('.checklist-footer');
    const footerHeight = footer ? footer.offsetHeight : 0;

    // Set game area height to visible viewport height minus footer height
    gameArea.style.height = `${window.innerHeight - footerHeight}px`;

}

// Run on load and resize
window.addEventListener('load', setGameAreaHeight);
window.addEventListener('resize', setGameAreaHeight);




