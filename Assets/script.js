$(document).ready(function() {
    // There are multiple - so this would return an array
    const parallaxEls = $('div.parallax');
    parallaxEls.parallax();

    // Variables for DOM elements
    const portfolioContainerEl = $('section.portfolio-container');
    const portfolioCardEl = $('div.portfolio-card');

    const populatePortfolio = (portfolioObj) => {
        // INside the template to be cloned
        const $portfolioTemplate = $(document.getElementById('portfolio-template').innerHTML);
        // Create a temporary holder
        const $fragContainer = $(document.createDocumentFragment());

        for (key in portfolioObj) {
            const $clone = $portfolioTemplate.clone();
            const objKey =portfolioObj[key];
            console.log(objKey);

            // Insert the correct image, the project title, the links and the description
            $clone.find('img.card-img').attr('src', objKey.image).attr('alt', `${objKey.name} gif`);
            $clone.find('span.title').html(`<i class="material-icons right">more_vert</i>${objKey.name}`);
            $clone.find('a.deployed').attr('href', objKey.deployed);
            $clone.find('a.repo').attr('href', objKey.repo);
            $clone.find('p.description').text(objKey.description);
            $clone.find('p.tech-used').text(`Tech Used: ${objKey.techUsed}`);

            // Append the clone to the frag container and then append that to the portfolio container
            $fragContainer.append($clone);
            portfolioContainerEl.append($fragContainer);
        }
    };


    populatePortfolio(portfolioMaterials);

    // Materialize Side Nav Menu for Mobile
    $('.sidenav').sidenav();

});