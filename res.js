/* =========================================
   PORTFOLIO WEBSITE - JAVASCRIPT
   ========================================= */


/* =========================================
   1. SMOOTH SCROLLING FOR NAVIGATION
   ========================================= */

document.querySelectorAll('.nav a[href^="#"]').forEach(function (link) {

    link.addEventListener('click', function (event) {

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

    });

});


/* =========================================
   2. TYPING EFFECT
   ========================================= */

const typingElement = document.getElementById("typing-text");

if (typingElement) {

    const words = [
        "Website Developer",
        "Web Designer",
        "BCA Student"
    ];

    let wordIndex = 0;
    let characterIndex = 0;
    let deleting = false;

    function typingEffect() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            typingElement.textContent =
                currentWord.substring(0, characterIndex + 1);

            characterIndex++;

            if (characterIndex === currentWord.length) {

                deleting = true;

                setTimeout(typingEffect, 1500);
                return;
            }

        } else {

            typingElement.textContent =
                currentWord.substring(0, characterIndex - 1);

            characterIndex--;

            if (characterIndex === 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex === words.length) {
                    wordIndex = 0;
                }

            }
        }

        setTimeout(
            typingEffect,
            deleting ? 60 : 100
        );
    }

    typingEffect();
}


/* =========================================
   3. ACTIVE NAVIGATION
   ========================================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {
            link.classList.add("active");
        }

    });

});


/* =========================================
   4. SCROLL REVEAL ANIMATION
   ========================================= */

const revealElements = document.querySelectorAll(
    ".card, .project-card, .skill-card, .education-card, .certificate-card"
);

const revealObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(function (element) {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================================
   5. BACK TO TOP BUTTON
   ========================================= */

const topButton = document.getElementById("topButton");

if (topButton) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            topButton.style.display = "block";

        } else {

            topButton.style.display = "none";

        }

    });


    topButton.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================================
   6. CONTACT FORM VALIDATION
   ========================================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        if (
            !name ||
            !email ||
            !message
        ) {
            return;
        }


        const nameValue = name.value.trim();
        const emailValue = email.value.trim();
        const messageValue = message.value.trim();


        if (nameValue === "") {

            alert("Please enter your name.");
            name.focus();
            return;

        }


        if (emailValue === "") {

            alert("Please enter your email.");
            email.focus();
            return;

        }


        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(emailValue)) {

            alert("Please enter a valid email address.");
            email.focus();
            return;

        }


        if (messageValue === "") {

            alert("Please enter your message.");
            message.focus();
            return;

        }


        alert(
            "Thank you, " +
            nameValue +
            "! Your message has been submitted successfully."
        );


        contactForm.reset();

    });

}


/* =========================================
   7. NAVIGATION SHADOW WHEN SCROLLING
   ========================================= */

const navigation = document.querySelector(".nav");

if (navigation) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 10) {

            navigation.classList.add("nav-scrolled");

        } else {

            navigation.classList.remove("nav-scrolled");

        }

    });

}


/* =========================================
   8. PREVENT EMPTY LINKS
   ========================================= */

document.querySelectorAll('a[href="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

    });

});


/* =========================================
   9. CURRENT YEAR IN FOOTER
   ========================================= */

const yearElement = document.getElementById("currentYear");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


/* =========================================
   10. PAGE LOADED MESSAGE
   ========================================= */

window.addEventListener("load", function () {

    document.body.classList.add("loaded");

});


// ========================================
// HERO BUTTON FUNCTIONS
// ========================================

// CALL BUTTON
const callButton = document.getElementById("callBtn");

if (callButton) {
    callButton.addEventListener("click", function () {
        window.location.href = "tel:+916385666783";
    });
}


// EMAIL BUTTON
const emailButton = document.getElementById("emailBtn");

if (emailButton) {
    emailButton.addEventListener("click", function () {
        window.location.href = "poojasri.v.1423@gmail.com";
    });
}


// LINKEDIN BUTTON
const linkedinButton = document.getElementById("linkedinBtn");

if (linkedinButton) {
    linkedinButton.addEventListener("click", function () {
        window.open(
            "linkedIn.com/in/Poojasri-v",
            "_blank"
        );
    });
}


// GITHUB BUTTON
const githubButton = document.getElementById("githubBtn");

if (githubButton) {
    githubButton.addEventListener("click", function () {
        window.open(
            "https://github.com/PoojasriV2007",
            "_blank"
        );
    });
}


// DOWNLOAD RESUME BUTTON
const resumeButton = document.getElementById("resumeBtn");

if (resumeButton) {
    resumeButton.addEventListener("click", function () {

        const resume = document.createElement("a");

        resume.href = "resume.pdf";
        resume.download = "Poojasri_V_resume.pdf";

        document.body.appendChild(resume);

        resume.click();

        document.body.removeChild(resume);
    });
}
const Contactform = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {

    contactForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const formData = new FormData(contactForm);

        try {

            const response = await fetch(
                "https://formsubmit.co/ajax/poojasri.v.1423@gmail.com",
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        "Accept": "application/json"
                    }
                }
            );

            if (response.ok) {

                formStatus.textContent =
                    "Message sent successfully! ✓";

                contactForm.reset();

            } else {

                formStatus.textContent =
                    "Something went wrong. Please try again.";

            }

        } catch (error) {

            formStatus.textContent =
                "Unable to send the message.";

        }

    });

}