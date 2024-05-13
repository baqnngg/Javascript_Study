const cards = [
    {
        name: '피카츄',
        img: 'C:\Users\User\Desktop\Javascript_Study\메모리게임\img\피카츄.jpg'
    },
    {
        name: '피카츄',
        img: 'C:\Users\User\Desktop\Javascript_Study\메모리게임\img\피카츄.jpg'
    },
    {
        name: '리자몽',
        img: 'C:\Users\User\Desktop\Javascript_Study\메모리게임\img\피카츄.jpg'
    },
    {
        name: '리자몽',
        img: 'C:\Users\User\Desktop\Javascript_Study\메모리게임\img\피카츄.jpg'
    },
    {
        name: '뮤',
        img: 'C:\Users\User\Desktop\Javascript_Study\메모리게임\img\뮤.jpg'
    },
    {
        name: '뮤',
        img: 'C:\Users\User\Desktop\Javascript_Study\메모리게임\img\뮤.jpg'
    },
    {
        name: '밀로틱',
        img: 'C:\Users\User\Desktop\Javascript_Study\메모리게임\img\뱀같은년.jpg'
    },
    {
        name: '밀로틱',
        img: 'C:\Users\User\Desktop\Javascript_Study\메모리게임\img\뱀같은년.jpg'
    },
    {
        name: '이상한년',
        img: 'C:\Users\User\Desktop\Javascript_Study\메모리게임\img\이상한년.jpg'
    },
    {
        name: '이상한년',
        img: 'C:\Users\User\Desktop\Javascript_Study\메모리게임\img\이상한년.jpg'
    },
    {
        name: '거북왕',
        img: 'C:\Users\User\Desktop\Javascript_Study\메모리게임\img\거북왕.jpg'
    },
    {
        name: '거북왕',
        img: 'C:\Users\User\Desktop\Javascript_Study\메모리게임\img\거북왕.jpg'
    }//,
    // {
    //     name: '뒷면',
    //     img: 'C:\Users\User\Desktop\Javascript_Study\메모리게임\img\back.jpg'
    // },
    // {
    //     name: '하얀카드',
    //     img: 'C:\Users\User\Desktop\Javascript_Study\메모리게임\img\하얀.jpg'
    // }
]

document.addEventListener("DOMContentLoaded", () => {
    cards.sort(() => 0.5 - Math.random())
    const grid = document.querySelector('.grid')
    function createBoard(){
        for(let i=0; i<cards.length; i++){
            const card = document.createElement('img')
            card.setAttribute('src',cards[i].img)
            card.setAttribute('data-id',i)
            grid.setAttribute(card)
        }
    }
    createBoard();
})