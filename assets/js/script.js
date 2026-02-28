// 記事データ
const posts = [
    {
        title: "サーバーアップデート情報",
        date: "2026-02-28",
        img: "assets/img/update1.png",
        link: "posts/2026-02-28-server-update.html"
    },
    {
        title: "イベント開催のお知らせ",
        date: "2026-03-05",
        img: "assets/img/update1.png",
        link: "posts/2026-03-05-event-announcement.html"
    }
];

const postContainer = document.querySelector(".post-list");

posts.forEach(post => {
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `
        <h3><a href="${post.link}">${post.title}</a></h3>
        <small>${post.date}</small>
        <img src="${post.img}" alt="${post.title}">
    `;
    postContainer.appendChild(div);
});
