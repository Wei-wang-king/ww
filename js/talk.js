new TypeIt("#wwgyn", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("威大哥和妮小猫")
    .pause(3000)
    .delete(null, {
        delay: 400
    })
    .type("写着玩的嘻嘻")
    .pause(3000)
    .go();

new TypeIt('#talkTo', {
    lifeLike: false,
    cursorSpeed: 1000,
    waitUntilVisible: false,
    speed: 100
}).go();