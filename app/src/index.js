import { getData, trainData } from './services/index';
import { send_features, send_quality, train_model } from './forms-send-data/index';
import { sendFeaturesFunction, sendQualityFunction } from './brain-network/index';
import { animatedScroll, showSpanModelTrained } from './animated-scroll-jquery/index';

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

//Train model
train_model.addEventListener('submit', function(e) {
    e.preventDefault();
    trainData();
    showSpanModelTrained();
    // span model trained
})