const posts = [
  {
    title: "サイト公開",
    date: "2026-02-28",
    excerpt: "このブログサイトを公開しました。お知らせやアップデート通知などを行います。",
    img: "assets/img/Erbo5 (3).png",
    link: "posts/2026-02-28-site-publish.html"
  },
  {
    title: "利用規約改正のお知らせ",
    date: "2026-02-28",
    excerpt: "利用規約を一部改正しました。",
    img: "assets/img/Erbo5 (3).png",
    link: "posts/2026-02-28-rules-change.html"
  }
];

function renderPosts() {
  const container = document.getElementById('post-list');
  container.innerHTML = ''; 

  posts.sort((a,b) => new Date(b.date) - new Date(a.date));

  posts.forEach(post => {
    const card = document.createElement('article');
    card.className = 'post-card';
    card.innerHTML = `
      <img src="${escapeHtml(post.img)}" alt="${escapeHtml(post.title)}">
      <h3><a href="${escapeHtml(post.link)}">${escapeHtml(post.title)}</a></h3>
      <div class="post-meta">${formatDate(post.date)}</div>
      <p class="post-excerpt">${escapeHtml(post.excerpt)}</p>
      <a class="more" href="${escapeHtml(post.link)}">続きを読む →</a>
    `;
    container.appendChild(card);
  });
}

function formatDate(dateStr){
  const d = new Date(dateStr);
  if(isNaN(d)) return dateStr;
  return `${d.getFullYear()}-${(d.getMonth()+1).toString().padStart(2,'0')}-${d.getDate().toString().padStart(2,'0')}`;
}

function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, (m)=>{
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m];
  });
}

document.getElementById('year').textContent = new Date().getFullYear();

renderPosts();
