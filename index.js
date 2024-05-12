const clientsReviews = [
    {
      id: 1,
      name: "Ալեքսանդր Պետրով",
      image:
        "https://citap.unc.edu/wp-content/uploads/2022/07/Daniel-1-500x500.jpg",
      reviev:
        "Մենք Եվրոպայից բեռնատար ենք գնել ձեր ընկերությունից: Մենք շատ գոհ ենք որակից և սպասարկումից։ Գնումների գործընթացը հարթ և արագ էր, իսկ անձնակազմը բանիմաց և քաղաքավարի: Ես առաջարկում եմ ձեր ընկերությունը որպես վստահելի գործընկեր բեռնատար մեքենաների գնման համար:",
      rate: 10,
    },
    {
      id: 2,
      name: "Ելենա Կոզլովա",
      image:
        "https://otvet.co/media/CACHE/images/specialists/FI0A7878/998f457c24b0a72b93968c7a4cac1b81.jpg",
      reviev:
        "Ձեր ընկերության հետ համագործակցությունը ստացվեց հաճելի և արդյունավետ։ Մենք Եվրոպայից ստացանք բեռնատար գերազանց վիճակում։ Պատվերների արագ և պրոֆեսիոնալ մշակում։ Շատ շնորհակալ ենք գերազանց սպասարկման համար։",
      rate: 9,
    },
    {
      id: 3,
      name: "Դմիտրի Միխայլով",
      image:
        "https://colibrident.ru/upload/resize_cache/webp/iblock/383/Zyubin_1.webp",
      reviev:
        "Ձեր ընկերությունը տրամադրել է հիանալի առաջարկ Եվրոպայից բեռնատարներ գնելու համար: Գնման գործընթացը հեշտ և թափանցիկ էր: Բեռնատարը ժամանել է ժամանակին և գտնվում է անթերի վիճակում։ Ես խորհուրդ կտամ ձեր ընկերությունը իմ գործընկերներին:",
      rate: 10,
    },
    {
      id: 4,
      name: "Նատալյա Սմիրնովա",
      image:
        "https://csis-website-prod.s3.amazonaws.com/s3fs-public/styles/224_x_224/s3/2022-09/5Welsh.jpg?VersionId=k0RVk6BbBsFwgLfGVKOEP0T3ESy2fmU.&itok=R3BBILIT",
      reviev:
        "Ես շատ գոհ եմ ձեր ընկերության հետ գործարքից: Եվրոպայից բարձրորակ բեռնատար եմ ստացել շատ լավ գնով։ Սպասարկումը բարձրակարգ է, անձնակազմը ուշադիր է մանրուքների նկատմամբ։ Շնորհակալություն մեծ փորձի համար:",
      rate: 8,
    },
    {
      id: 5,
      name: "Անդրեյ Նիկոլաև",
      image:
        "https://media.licdn.com/dms/image/C4E03AQFdZwSFsxAtDw/profile-displayphoto-shrink_800_800-alternative/0/1529613222331?e=2147483647&v=beta&t=QcQergZMQzUgEegDej-3bblPiIEm5oC7sgGNZMIj3MM",
      reviev:
        "Մենք Եվրոպայից բեռնատար ենք գնել ձեր ընկերության միջոցով: Գործընթացը արագ էր և անթերի։ Բեռնատարը ժամանեց ժամանակին, ինչպես խոստացել էիք, գերազանց վիճակում։ Շատ գոհ եմ գործարքից:",
      rate: 9,
    },
    {
      id: 6,
      name: "Մարինա Իվանովա",
      image:
        "https://www.worldwomanfoundation.com/wp-content/uploads/2022/06/Untitled-design-9-500x500.png",
      reviev:
        "Ես շատ գոհ եմ ձեր ընկերության միջոցով Եվրոպայից բեռնատարի գնումից: Գործընթացը պարզ էր և արդյունավետ: Բեռնատարը եկավ գերազանց վիճակում, և ձեր թիմը շատ քաղաքավարի էր և արձագանքում բոլոր հարցերին: խորհուրդ եմ տալիս!",
      rate: 9,
    },
    {
      id: 7,
      name: "Վլադիմիր Սոկոլով",
      image:
        "https://lh5.googleusercontent.com/proxy/Z1nExSEqCNATVpmSr8yr_-Xl2qiEN-3gYdaP-Wt_x02W-FCkqnO5Asc6WHTgX--kftoiG1pYRF3FuU6b_bwLI_MeciAYEYK-iWi6H_HHOYGCKYqQbICHiBYglfLu8a64yQ",
      reviev:
        "Ձեր ընկերության հետ համագործակցությունը հաճելի տպավորություն թողեց։ Բեռնատարը ստացել ենք Եվրոպայից ժամանակին և գերազանց վիճակում։ Գերազանց սպասարկում և պրոֆեսիոնալ անձնակազմ։ Մենք նորից կկապվենք ձեզ հետ:",
      rate: 10,
    },
];
  

const review = document.querySelector('.review');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let counter = 1;

function printReview(array = clientsReviews) {
    let clientData = [];
    let client = array.find((review) => review.id === counter);
    clientData.push(client);    
    clientData.forEach(reviews => {
        review.insertAdjacentHTML('beforeend', `
        <img src="${reviews.image}" alt=""> 
        <h2>${reviews.name}</h2>
        <span class="reviewText">"${reviews.reviev}"</span> <br>
        <p class="rate">Գնահատում: ${reviews.rate}/10</p>
        `);
    });
}

printReview();

next.addEventListener('click', function () {
    if (counter === clientsReviews.length) {
        counter = 0;
    }
    counter += 1;
    review.innerHTML = '';
    let clientData = []
    let client = clientsReviews.find((review) => review.id === counter);
    clientData.push(client)
    printReview(clientData)

})

prev.addEventListener('click', function () {
    if (counter === 1) {
        counter = clientsReviews.length + 1;
    }
    counter -= 1;
    review.innerHTML = '';
    let clientData = []
    let client = clientsReviews.find((review) => review.id === counter);
    clientData.push(client)
    printReview(clientData)
})
