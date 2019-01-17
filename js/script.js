let modalBtn = document.getElementById("modal-btn"),
    closeBtn = document.getElementById("close-btn"),
    modal    = document.getElementById("container");

modalBtn.addEventListener("click",openModal);
closeBtn.addEventListener("click",closeModal);
window.addEventListener("click",outsideCloseModal);

function openModal(){
    modal.style.display = 'block';
 }

function closeModal(){
  modal.style.display = 'none';
}

function outsideCloseModal(e){
  if(e.target === modal){
    modal.style.display = 'none';
  }
}




