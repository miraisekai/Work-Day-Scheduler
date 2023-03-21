let time = new Date();
const saveBtn = document.querySelectorAll('.saveBtn');
const main = document.querySelector('.container');
currentDay.innerHTML = time.toLocaleString();
let store;

const getStorage = async () => {
  store = localStorage.hours ? JSON.parse(localStorage.hours) : [];
};

getStorage();

const hours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];

hours.forEach((hour, i) => {
  const rH = i + 9;
  const cH = time.getHours();

  const timeBlock = document.createElement('div');
  timeBlock.classList.add('time-block', 'row');
  main.appendChild(timeBlock);

  const hourDiv = document.createElement('div');
  hourDiv.classList.add('hour');
  hourDiv.textContent = hour;
  timeBlock.appendChild(hourDiv);

  const textArea = document.createElement('textarea');
  textArea.classList.add(rH < cH ? 'past' : rH > cH ? 'future' : 'present');
  textArea.value = store[i] || '';
  timeBlock.appendChild(textArea);

  const saveBtnDiv = document.createElement('div');
  saveBtnDiv.classList.add('saveBtn');
  timeBlock.appendChild(saveBtnDiv);

  const saveIcon = document.createElement('i');
  saveIcon.classList.add('fas', 'fa-save');
  saveBtnDiv.appendChild(saveIcon);

  saveBtnDiv.addEventListener('click', () => {
    store[i] = textArea.value;
    localStorage.setItem('hours', JSON.stringify(store));
  });
});
