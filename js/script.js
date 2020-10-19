const searchButton = document.querySelector(".search-button");
const searchField = document.querySelector(".searching-form-wrapper");
const searchForm = searchField.querySelector(".searching-form");
const arrivalDate = searchField.querySelector(".arrival-date");
const departureDate = searchField.querySelector(".departure-date");
let adultsAmmount = searchField.querySelector(".adults-ammount");
let childrenAmmount = searchField.querySelector(".children-ammount");

let isStorageSupport = true;
let storageAdults = "";
let storageChildren = "";

try {
  storageAdults = localStorage.getItem("adults");
  storageChildren = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}

searchButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchField.classList.toggle ("form-show");
  searchForm.classList.toggle ("form-animate-open");
  searchField.classList.remove("form-error");

  if (storageAdults) {
    adultsAmmount.value = storageAdults;
  }

  if(storageChildren) {
    childrenAmmount.value = storageChildren;
  }

  arrivalDate.focus ();
});

searchForm.addEventListener("submit", function (evt) {
  if (!arrivalDate.value || !departureDate.value || !adultsAmmount.value || !childrenAmmount.value) {
    evt.preventDefault ();
    searchForm.classList.remove("form-error");
    searchForm.offsetWidth = searchForm.offsetWidth;
    searchForm.classList.add("form-error");
  } else {
    if (isStorageSupport) {
      searchForm.classList.remove("form-error");
      localStorage.setItem("adults", adultsAmmount.value);
      localStorage.setItem("children", childrenAmmount.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.key === "Escape") {
    if (searchField.classList.contains("form-show")) {
      evt.preventDefault ();
      searchField.classList.remove("form-show");
      searchForm.classList.add("form-error");
    }
  }
});
