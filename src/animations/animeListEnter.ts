import anime from "animejs"

const animeListEnter = (item: any) => {
    anime({
        targets: item,
        easing: 'spring(1, 100, 10, 0)',
        translateX: [200, 0],
        delay: 100
    })
}

export default animeListEnter
