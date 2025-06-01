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

/** Hide the object once it is clicked, 
 * cross the matching name in the footer checklist
 * show the modal pop-up with the info about the object */
document.addEventListener('DOMContentLoade', function(){
    document.querySelectorAll('.hidden-object').forEach(obj => {
        obj.addEventListener('click', function(){
        
            this.style.display = 'none'; //hide the clicked object

            const id = this.id;

            const checkText = document.querySelector(`#${id}-check .cross-text`);
            if (checkText) {
                checkText.style.textDecoration = 'line-through';
            };
        
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
        });
    });
});

// document.querySelector('.close-btn').addEventListener('click', function () {
//     document.getElementById('infoModal').style.display = 'none';
// });

