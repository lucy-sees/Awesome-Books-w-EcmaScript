const form = document.querySelector('.add-book-form');
const bookList = document.querySelector('.books-list');
const contactInfo = document.querySelector('.contact-info');

const showList = () => {
  if (bookList.classList.contains('d-none')) {
    bookList.classList.remove('d-none');
    form.classList.add('d-none');
    contactInfo.classList.add('d-none');
  }
};

export default showList;
