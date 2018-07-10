class UI {
    constructor() {
        this.container = document.getElementById('error_container');
    }

    clearContainer() {
        this.container.innerHTML = "";
    }

    showError(err) {
        this.clearContainer();
        const title = err.code.split('/')[1];

        const template = `
       
            <div class="card-image">
                <img class="err-img" src="img/bender.png">
            </div>
            <div class="card-content">
                <span class="card-title">Oops, ${title.replace( /-/g, ' ' )}!</span>
            </div>
                
        `;

        this.container.insertAdjacentHTML("afterbegin", template);
    }

    validate(input) {
        const label = input.closest('.input-field').lastElementChild;

        if (!input.value) {
            input.style.borderBottom = '1px solid #ff7043';
            label.textContent = input.form.name === 'login-form' ? `Please, fill in ${input.id}` : `Please, set up ${input.id}`;
            label.classList.add('invalid');
        }
    }
}