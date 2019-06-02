export function sendFeaturesFunction(data) {
    const network = new brain.NeuralNetwork();
    let wineArray = [];
    /*
     *Para que no pregunte por la propiedad length de wineData cada vez que itera defini la constante length total
     * de este array y la utilizo, asi se mejora el performance ya que son aproximadamente 1600 elementos.
     */
    const length = data.length;
    for (let i = 1; i < length; i++) {
        //Dividido en 10 para que no redondee los resultados y de un valor mas aproximado
        // Por ejemplo si el resultado es  0.999 lo redondea a 1 (la mayoria)
        wineArray.push({
            input: {
                fa: data[i].fixedAcidity / 10,
                va: data[i].volatileAcidity / 10,
                ca: data[i].citricAcid / 10,
                rs: data[i].residualSugar / 10,
                ch: data[i].chlorides / 10,
                fsd: data[i].freeSulfurDioxide / 10,
                tsd: data[i].totalSulfurDioxide / 10,
                den: data[i].density / 10,
                ph: data[i].pH / 10,
                su: data[i].sulphates / 10,
                al: data[i].alcohol / 10
            },
            output: {
                quality: data[i].quality / 10
            }
        })
    }

    network.train(wineArray, { log: true, iterations: 1000 });


    let result = network.run({
        fa: document.querySelector('input[name="fa"]').value,
        va: document.querySelector('input[name="va"]').value,
        ca: document.querySelector('input[name="ca"]').value,
        rs: document.querySelector('input[name="rs"]').value,
        ch: document.querySelector('input[name="ch"]').value,
        fsd: document.querySelector('input[name="fsd"]').value,
        tsd: document.querySelector('input[name="tsd"]').value,
        den: document.querySelector('input[name="den"]').value,
        ph: document.querySelector('input[name="ph"]').value,
        su: document.querySelector('input[name="su"]').value,
        al: document.querySelector('input[name="al"]').value
    })
    $('#send-features').find('span').css('display', 'block')[0].innerHTML = "Calidad: " + result.quality + "%";
    console.log(result);
}

export function sendQualityFunction(data) {
    const network = new brain.NeuralNetwork();
    let wineArray = [];
    /*
     *Para que no pregunte por la propiedad length de wineData cada vez que itera defini la constante length total
     * de este array y la utilizo, asi se mejora el performance ya que son aproximadamente 1600 elementos.
     */
    const length = data.length;
    for (let i = 1; i < length; i++) {

        //Dividido en 10 para que no redondee los resultados y de un valor mas aproximado
        // Por ejemplo si el resultado es  0.999 lo redondea a 1 (la mayoria)
        wineArray.push({
            output: {
                fa: data[i].fixedAcidity / 10,
                va: data[i].volatileAcidity / 10,
                ca: data[i].citricAcid / 10,
                rs: data[i].residualSugar / 10,
                ch: data[i].chlorides / 10,
                fsd: data[i].freeSulfurDioxide / 10,
                tsd: data[i].totalSulfurDioxide / 10,
                den: data[i].density / 10,
                ph: data[i].pH / 10,
                su: data[i].sulphates / 10,
                al: data[i].alcohol / 10
            },
            input: {
                quality: data[i].quality / 10
            }
        })
    }
    network.train(wineArray, { log: true, iterations: 1000 });


    let result = network.run({
        quality: document.querySelector('input[name="quality"]').value
    })
    document.querySelector('input[name="fa_q"]').value = result.fa;
    document.querySelector('input[name="va_q"]').value = result.va;
    document.querySelector('input[name="ca_q"]').value = result.ca;
    document.querySelector('input[name="rs_q"]').value = result.rs;
    document.querySelector('input[name="ch_q"]').value = result.ch;
    document.querySelector('input[name="fsd_q"]').value = result.fsd;
    document.querySelector('input[name="tsd_q"]').value = result.tsd;
    document.querySelector('input[name="den_q"]').value = result.den;
    document.querySelector('input[name="ph_q"]').value = result.ph;
    document.querySelector('input[name="su_q"]').value = result.su;
    document.querySelector('input[name="al_q"]').value = result.al;
    console.log(result);
}