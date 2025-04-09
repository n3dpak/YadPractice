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

const addButton = document.querySelector('.profile__add-button');
const closeButtonCard = cardPopup.querySelector('.popup__close');
const cardsContainer = document.querySelector('.places__item');
const cardFormElement = cardPopup.querySelector('.popup__form');
const cardNameInput = cardFormElement.querySelector('.popup__input_type_card-name');
const cardLinkInput = cardFormElement.querySelector('.popup__input_type_url');

const imagePopup = document.querySelector('.popup_type_image');

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

function clearCardForm() {
    cardNameInput.value = '';
    cardLinkInput.value = '';
}

addButton.addEventListener('click', function() {
    clearCardForm();
    openModal(cardPopup);
});

closeButtonCard.addEventListener('click', function() {
    closeModal(cardPopup);
});

function createCard(name, link) {
    const template = document.getElementById('card-template');
      
    const cardElement = template.content.cloneNode(true);
    
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    
    cardImage.src = link;
    cardImage.alt = name;
    cardTitle.textContent = name;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('card__delete-button');
    deleteButton.addEventListener('click', function() {
        cardElement.remove();
    });

    const likeButton = document.createElement('button');
    likeButton.classList.add('card__like-button');
    likeButton.addEventListener('click', function() {
        
    });
    
    return cardElement;

}

function handleCardFormSubmit(evt) {
    evt.preventDefault();

    const nameValue = cardNameInput.value;
    const linkValue = cardLinkInput.value;

    const newCard = createCard(nameValue, linkValue);
    cardsContainer.prepend(newCard);

    closeModal(cardPopup);
}

cardFormElement.addEventListener('submit', handleCardFormSubmit);