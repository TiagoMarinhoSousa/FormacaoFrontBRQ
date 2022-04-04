//type alias
type Uid = number | string | undefined;

function logDetails (uid: number | string, item: string){
    console.log(`A product with ${uid} has a title as ${item}.`);
}

logDetails (2, "bolacha de chocolate");
logDetails ("235", "bolacha de chocolate");


function logInfo (uid: Uid, user: string){
    console.log(`An user with ${uid} has a name as ${user}.`);
}

logInfo (32, "Marcelo");
logInfo ("235", "Marcelo");

//

type Platform = 'Windows' | 'Linux' | 'Mac Os';

function renderPlatform(platform: Platform){
    return platform;
}

//dá erro, pq o tipo Platform não tem 'ios'
//renderPlatform('ios');
renderPlatform('Linux');