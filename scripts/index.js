// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const profilePopup = document.querySelector('.popup_type_edit');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = profilePopup.querySelector('.popup__close');
const profileFormElement = profilePopup.querySelector('.popup__form');
const nameInput = profileFormElement.querySelector('.popup__input_type_name');
const jobInput = profileFormElement.querySelector('.popup__input_type_description');

const cardPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');


function openModal(popup) {      
    popup.classList.add('popup_is-opened');
}

function closeModal(popup) {      
    popup.classList.remove('popup_is-opened');
}



function openModal(popup) {
    popup.classList.add('popup_is-opened');
}

function closeModal(popup) {
    popup.classList.remove('popup_is-opened');
}

editButton.addEventListener('click', function() {
    nameInput.value = document.querySelector('.profile__title').textContent;
    jobInput.value = document.querySelector('.profile__description').textContent;
    openModal(profilePopup);
});

closeButton.addEventListener('click', function() {
    closeModal(profilePopup);
});

function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    const nameValue = nameInput.value;
    const jobValue = jobInput.value;

    document.querySelector('.profile__title').textContent = nameValue;
    document.querySelector('.profile__description').textContent = jobValue;

    closeModal(profilePopup);
}

profileFormElement.addEventListener('submit', handleProfileFormSubmit);
