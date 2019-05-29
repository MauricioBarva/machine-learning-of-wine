import { getData, trainData } from './services/index';
import { send_features, send_quality, train_model } from './forms-send-data/index';
import { sendFeaturesFunction, sendQualityFunction } from './brain-network/index';
import { animatedScroll } from './animated-scroll/index';

//Scroll
animatedScroll();

//By features
send_features.addEventListener('submit', function(e) {
    e.preventDefault();
    getData(function(data) {
        sendFeaturesFunction(data);
    });
});

//By quality
send_quality.addEventListener('submit', function(e) {
    e.preventDefault();
    getData(function(data) {
        sendQualityFunction(data);
    });
});

train_model.addEventListener('submit', function(e) {
    e.preventDefault();
    trainData();
})