const faqData = [
    { question: "What is the BUSD Crops Farmers", answer: "The BUSD Crops Farmer is a decentralized application built on the Binance Smart Chain(BSC). The object of the game is to hire more farmers to help you mine BUSD. These Farmers work for you tirelessly, giving you a daily average of 8% of your farmers' value. The more farmers you hire, the more crops you will get , the more BUSD you will gain" },
    { question: "how to start mine BUSD and how to withdraw?", answer: `Open busdtminer.info at wallet browser ,choose binance smart chain, Input how much busd you wanna appove, click Appove BUSD, finish the transation (Here gas fee 0.00002BNB about 0.2$), Input how much busd you wanna deposit into contract ,click Hire Farmers.(Here gas fee 0.00002BNB about 0.2$), Wait for farmers working for you ,and you can drink a coffee ,get the Crops after the timer cool down, Click Harverst Crops after 4 hours. BUSD will auto sending to your wallet, you can choose Hire more farmers compound or harvest to withdraw by yourself.` },
    { question: "what to mention?", answer: "Open the platform at wallet brower (such as trust wallet, metamask), or you can click connect at the corner of website when you connet it at PC browser. Choose binance smart chain(BSC ,BEP20) only . Firstly appove busd then hire farmers." },
    // Add more FAQ items as needed
];

document.addEventListener("DOMContentLoaded", function () {
    // Set the initial background position to center for the Introduction section
    document.querySelectorAll(".Introduction").forEach(function (element) {
        element.style.backgroundPosition = "center";
    });

    // Add scroll event listener for the parallax effect in the Introduction section
    document.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;
        var parallaxValue = scrollPosition * 0.3;
        document.querySelectorAll(".Introduction").forEach(function (element) {
            element.style.backgroundPosition = "center " + (parallaxValue - (window.innerHeight + 1800) * 0.3) + "px";
        });
    });

    // Define the elements you want to observe
    const section = document.querySelector('.section');
    const userWallet = document.querySelector('.User-Wallet');
    const faqSection = document.querySelector(".faq-section");
    const faqItems = document.querySelectorAll(".faq-item");

    // Options for the Intersection Observer
    const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin
        threshold: 0.5 // Trigger when 50% of the element is visible
    };

    // Callback function to handle the intersection changes
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the class to animate the element
                entry.target.classList.add('is-visible');
                // Unobserve the target to stop observing once it's visible
                observer.unobserve(entry.target);
            }
        });
    };

    // Create an Intersection Observer with the callback and options for the 'section' element
    const observerSection = new IntersectionObserver(callback, options);
    // Observe the 'section' element
    observerSection.observe(section);

    // Create an Intersection Observer with the callback and options for the 'userWallet' element
    const observerUserWallet = new IntersectionObserver(callback, options);
    // Observe the 'userWallet' element
    observerUserWallet.observe(userWallet);

    // Create an Intersection Observer with the callback and options for the FAQ section
    const observerFaqSection = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add the class to animate the FAQ section
                faqSection.classList.add("is-visible");
                // Unobserve the target to stop observing once it's visible
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // Observe the FAQ section
    observerFaqSection.observe(faqSection);

    // Create an Intersection Observer with the callback and options for each FAQ item
    const observerFaqItems = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add the class to animate the FAQ item
                entry.target.classList.add("is-visible");
                // Unobserve the target to stop observing once it's visible
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // Observe each FAQ item
    faqItems.forEach((item) => {
        observerFaqItems.observe(item);
    });

    const faqCarousel = document.querySelector(".faq-carousel");
    const faqPrevBtn = document.querySelector(".faq-prev-btn");
    const faqNextBtn = document.querySelector(".faq-next-btn");

    let currentIndex = 0;

    function showFaqItem(index) {
        const currentFaq = faqData[index];

        // Create a new FAQ item element
        const faqItem = document.createElement("div");
        faqItem.classList.add("faq-item", "is-visible"); // Add is-visible class to the new item

        // Populate the HTML content dynamically
        faqItem.innerHTML = `
            <h3>${currentFaq.question}</h3>
            <p>${currentFaq.answer}</p>
        `;

        // Insert the new FAQ item into the faq-carousel
        faqCarousel.innerHTML = '';
        faqCarousel.appendChild(faqItem);
    }

    function nextFaqItem() {
        currentIndex = (currentIndex + 1) % faqData.length;
        showFaqItem(currentIndex);
    }

    function prevFaqItem() {
        currentIndex = (currentIndex - 1 + faqData.length) % faqData.length;
        showFaqItem(currentIndex);
    }

    faqPrevBtn.addEventListener("click", prevFaqItem);
    faqNextBtn.addEventListener("click", nextFaqItem);

    // Initial display
    showFaqItem(currentIndex);

    setInterval(nextFaqItem, 5000); // Change slide every 5 seconds
});