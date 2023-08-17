const form = document.querySelector('.add-book-form');
const bookList = document.querySelector('.books-list');
const contactInfo = document.querySelector('.contact-info');

const showContact = () => {
  bookList.classList.add('d-none');
  form.classList.add('d-none');
  contactInfo.classList.remove('d-none');
};

export default showContact;
