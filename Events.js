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
});
