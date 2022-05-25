const DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
const DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
const DETAIL_DESCRIPTION_SELECTOR = '[data-image-role="description"]';
const DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
const THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
const SMALL_EFFECT_CLASS = 'is-small';

function setDetails(imageUrl, titleText, descriptionText) {
    'use strict';
    let detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', imageUrl);

    let detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContent = titleText;

    let description = document.querySelector(DETAIL_DESCRIPTION_SELECTOR);
    description.textContent = descriptionText;
}

function imageFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-title');
}

function descriptionFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-description');
}

function setDetailsFromThumb(thumbnail) {
    'use strict';
    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail),
    descriptionFromThumb(thumbnail));
}

function getThumbnailsArray() {
    'use strict';
    let thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    let thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

function addThumbClickHandler(thumb) {
    'use strict';
    thumb.addEventListener('click', function(event) {
        event.preventDefault();
        setDetailsFromThumb(thumb);
        showDetails();
    });
}

function showDetails() {
    'use strict';
    let frame = document.querySelector(DETAIL_FRAME_SELECTOR);
    frame.classList.add(SMALL_EFFECT_CLASS);
    setTimeout(function() {
        frame.classList.remove(SMALL_EFFECT_CLASS);
    }, 50);
}

function initializeEvents() {
    'use strict';
    let thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
}

initializeEvents();


