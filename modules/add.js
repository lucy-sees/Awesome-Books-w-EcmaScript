const form = document.querySelector('.add-book-form');
const bookList = document.querySelector('.books-list');
const contactInfo = document.querySelector('.contact-info');

const showAdd = () => {
  bookList.classList.add('d-none');
  form.classList.remove('d-none');
  contactInfo.classList.add('d-none');
};

export default showAdd;
