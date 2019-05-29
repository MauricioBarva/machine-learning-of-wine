export function getData(fn) {
    return fetch('http://localhost:3333/get-data')
        .then(data => {
            return data.json();
        }).then(processed_data => {
            fn(processed_data.data);
        })
        .catch(error => console.log(error));
}

export function trainData() {
    var wine = {
        fixedAcidity: document.querySelector('input[name="fa_train"]').value,
        volatileAcidity: document.querySelector('input[name="va_train"]').value,
        citricAcid: document.querySelector('input[name="ca_train"]').value,
        residualSugar: document.querySelector('input[name="rs_train"]').value,
        chlorides: document.querySelector('input[name="ch_train"]').value,
        freeSulfurDioxide: document.querySelector('input[name="fsd_train"]').value,
        totalSulfurDioxide: document.querySelector('input[name="tsd_train"]').value,
        density: document.querySelector('input[name="den_train"]').value,
        pH: document.querySelector('input[name="ph_train"]').value,
        sulphates: document.querySelector('input[name="su_train"]').value,
        alcohol: document.querySelector('input[name="al_train"]').value,
        quality: document.querySelector('input[name="ql_train"]').value,
    }
    return fetch('http://localhost:3333/create-data', {
            method: 'POST',
            body: JSON.stringify(wine),
            headers: { 'Content-Type': 'application/json' }
        }).then(data => data.json())
        .then(dataUpdated => {
            console.log(dataUpdated.data);
        })
        .catch(error => console.log(error));
}