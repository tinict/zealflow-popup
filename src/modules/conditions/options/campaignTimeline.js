'use strict';

const campaignTimeline = (config) => {
    if (config.enable) {
        var currentTime = new Date();
        var startTime = new Date(config.startTime); 
        var endTime = new Date(config.endTime); 
        if (currentTime >= startTime && currentTime <= endTime)
            return true;
    }
    return false;
}

export default campaignTimeline;