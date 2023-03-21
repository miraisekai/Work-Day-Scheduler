let time = new Date();
const saveBtn = document.querySelectorAll('.saveBtn');
const main = document.querySelector('.container');
currentDay.innerHTML = time.toLocaleString();
let store;

const getStorage = async() => {
    store = localStorage.hours ? JSON.parse(localStorage.hours) : [];
};

getStorage();

let hours = ['9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM'];

hours.forEach((hour,i) => {
    let rH = i+9;
    let cH = time.getHours();

    main.innerHTML += `
        <div class="time-block row">
            <div class="hour">${hour}</div>
            <textarea class=${rH<cH ? 'past' : rH>cH ? 'future' : 'present'}></textarea>
            <div class="saveBtn">
            <i class="fas fa-save" aria-hidden='true'></i>
            </div>
        </div>
    `;
});

const handleSave = () => {
    
}

saveBtn.onclick = handleSave;