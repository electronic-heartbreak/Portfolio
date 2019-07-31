"use strict"

let itemheader = document.querySelector("#itemheader");
let itemsubheader = document.querySelector("#itemsubheader");
let itemsmalltext = document.querySelector("#itemsmalltext");
let itemimage = document.querySelector("#itemimage");
let itemlinks = document.querySelector('.footer1');

    const list = [
        {
        Id: 1,
        Name: 'Random Cat Facts',
        Languages: ['C#'],
        desc: 'A simple WPF application that displays (random) cat facts.',
        img: './img/items/catfacts.jpg',
        link: ['https://github.com/bjaeken/CatFactsApp'],
        },
        {
        Id: 2,
        Name: 'RekenGame',
        Languages: ['React Native'],
        desc: 'RekenGame is a mobile application that generates simple<br>' +
        'random maths. It is up to you to give the correct answers<br>' + 
        'to these maths. This is time-bound and the amount of time<br>' +
        'depends on your chosen difficulty.'+
        '<br><br>' +
        'You can also track your scores. If your score is high enough,<br>'+
        'you will be placed in the top 5 at the leaderboard tab.<br>' +
        '<strong>Note:</strong> The game is not playable at IOS devices and all tablets.<br>' +
        'The language in the app is Dutch.',
        img: './img/items/rekengame.jpg',
        link: ['https://expo.io/@bjaeken/rekenspel'],
        },
    ];

    let LoopItems = () => {
        const array = list;
        const container = document.getElementById('blocks');
        array.forEach(co => container.innerHTML +=
            `
            <div class="block">
                <a onclick="GetInfo(${co.Id})">
                    <img src="${co.img}" alt="${co.Name}">
                </a>
            </div>
            `
        );
    }

    const GetInfo = (number) => {
        let queryString = "item=" + number;
        let usp = new URLSearchParams(queryString);
        window.location = location.pathname+"?"+usp;
    }

    if (window.location.href.includes("item=")) {
        const ShowInfo = () => {
            const getusp = new URLSearchParams(window.location.search);
            const number = getusp.get('item');
            const result = list.find(list => list.Id === parseInt(number));
            itemheader.innerHTML = result.Name;
            itemsubheader.innerHTML = result.Languages;
            itemsmalltext.innerHTML = result.desc
            itemimage.src = result.img;
            itemimage.alt = result.Name;
            result.link.forEach(rs => itemlinks.innerHTML +=
                `
                <a href="${rs}" class="icon"><i class="fas fa-external-link-alt"></i></a>
                `
            );
            
        }  
        ShowInfo();
    }
    else {
        LoopItems();
    }
        
    
