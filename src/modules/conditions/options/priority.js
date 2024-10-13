'use strict';

const splitListConfig = (listConfig) => {
    let listAutoPopup = [];
    let listClickPopup = [];

    listConfig.forEach((el) => {
        if (el.priority.priorityNumber == 0) {
            listClickPopup.push(el);
        } else {
            listAutoPopup.push(el);
        }
    });

    return { listClickPopup, listAutoPopup };
}

const priority = (listConfig) => {

    let { listClickPopup, listAutoPopup } = splitListConfig(listConfig);

    let sortedList = listAutoPopup.sort((a, b) => {
        return b.priority.priorityNumber - a.priority.priorityNumber;
    });

    return [[...listClickPopup], [...sortedList]];
}

export default priority;