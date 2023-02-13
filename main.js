function tambah() {
  //ambil value text baru
  let newText = document.getElementById("new_text");

  //menambah list
  let newTodo =
    "<li class='list-group-item list-group-item-success d-flex justify-content-between'><span class='' onclick='toggle(this)'>" +
    newText.value +
    "</span>" +
    "<i class='fa-solid fa-trash-can' onclick='hapusItem(this)'></i>" +
    "</li>";
  todo.insertAdjacentHTML("afterbegin", newTodo);

  //mengosongkan filed input setelah diisi
  newText.value = "";
}

//mencoret list
function toggle(el) {
  el.classList.toggle("coret");
}

//menghapus item dengan clik x
function hapusItem(el) {
  el.parentElement.remove();
}
