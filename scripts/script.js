// footer content
const year = document.querySelector("#year")

const today = new Date();
const short = document.querySelector("#short");

currentyear.innerHTML = `<span class="highlight">\u00A9${today.getFullYear()}</span>`;

let oLastModif = new Date(document.lastModified);

let nLastModif = Date.parse(document.lastModified);

lastModified.innerHTML = `<p id="lastModified">Last Modified: ${new Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
}).format(nLastModif)}</p>`;

// Hamburger
const mainnav = document.querySelector('#animate-me')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');
});

// Array
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const creditArray = [];

const all = document.querySelector("#all");
const cse = document.querySelector("#cse");
const wdd = document.querySelector("#wdd");

courseCard(courses);


all.addEventListener("click", () => {
    courseCard(courses.filter(course => course))
});

cse.addEventListener("click", () => {
    courseCard(courses.filter(course => course.subject.includes('CSE')));
});

wdd.addEventListener("click", () => {
    courseCard(courses.filter(course => course.subject.includes('WDD')))
});


function courseCard(filteredCourses) {
    document.querySelector(".classes").innerHTML = "";
    filteredCourses.forEach(course => {
        let card = document.createElement("section");
        let name = document.createElement("h3");

        if (course.completed == true) {
            card.style.backgroundColor = "tan";
            name.innerHTML = `<span class="label">✓ ${course.subject} ${course.number}</span>`;
        }
        else {

            name.innerHTML = `<span class="label">${course.subject} ${course.number}</span>`;
        }
        
        card.appendChild(name);

        

        document.querySelector(".classes").appendChild(card);

        creditArray.push(course.credits)
    });
    const sum = creditArray.reduce((accumulator, currentValue) => {
        const num = Number(currentValue);
        return accumulator + (isNaN(num) ? 0 : num);
    }, 0);
    let cardTwo = document.createElement("section");
    let total = document.createElement("h3");
    total.innerHTML = `<span class="label">Credits: ${sum}</span>`;
    cardTwo.appendChild(total);
    document.querySelector(".classes").appendChild(cardTwo);
    while (creditArray.length > 0) {
        creditArray.pop();
    }
}

