const tableBtn = document.getElementById('tableBtn');
const boardBtn = document.getElementById('boardBtn');
const tables = document.querySelector('.tables');
const board = document.querySelector('.kanban')
const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');
const emptyDiv = document.createElement('div');
const cog = document.querySelector('.glyphicon-cog');

tableBtn.addEventListener('click', () => {
  tables.classList.toggle('invisible');
  board.classList.add('invisible');
});

boardBtn.addEventListener('click', () => {
  board.classList.toggle('invisible');
  tables.classList.add('invisible');
});

cards.forEach(card => {
  card.addEventListener('dragstart', dragStart);
  card.addEventListener('dragend', dragEnd);
});

dropzones.forEach(zone => {
  zone.addEventListener('dragover', dragOver);
  zone.addEventListener('dragenter', dragEnter);
  zone.addEventListener('dragleave', dragLeave);
  zone.addEventListener('drop', dragDrop);
})

function dragStart() {
  this.classList.add('hold'); 
  setTimeout(() => (this.classList.add('hide')), 0);
}

function dragEnd() {
  this.classList.remove('hold');
  this.classList.remove('hide');
}

function dragOver(e) {
  e.preventDefault();
  
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add('hovered');
}

function dragLeave() {
  this.classList.remove('hovered');

}

function dragDrop() {
  cards.forEach(card => {
    if(card.classList.contains('hold')){
      this.append(card);
      this.classList.remove('hovered');
    }
  })
}

