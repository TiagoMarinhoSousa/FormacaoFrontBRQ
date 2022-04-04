"use strict";
function logDetails(uid, item) {
    console.log(`A product with ${uid} has a title as ${item}.`);
}
logDetails(2, "bolacha de chocolate");
logDetails("235", "bolacha de chocolate");
function logInfo(uid, user) {
    console.log(`An user with ${uid} has a name as ${user}.`);
}
logInfo(32, "Marcelo");
logInfo("235", "Marcelo");
function renderPlatform(platform) {
    return platform;
}
//dá erro, pq o tipo Platform não tem 'ios'
//renderPlatform('ios');
renderPlatform('Linux');
