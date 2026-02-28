// ===== Natsuki Community Blog - script.js =====

// 記事データリスト
// 新しい記事を追加するときはここにオブジェクトを追加
// { title, date, excerpt, img, link } の形式
const posts = [
  {
    title: "サーバーアップデート情報",
    date: "2026-02-28",
    excerpt: "バージョン1.20にアップデートしました。新要素の追加とバグ修正。",
    img: "assets/img/update1.png",
    link: "posts/2026-02-28-server-update.html"
  },
  {
    title: "イベント開催のお知らせ",
    date: "2026-03-05",
    excerpt: "コミュニティイベントを開催します。詳細と参加方法を掲載。",
    img: "assets/img/update1.png",
    link: "posts/2026-03-05-event-announcement.html"
  }
];

// ===== DOMに記事カードを描画 =====
function renderPosts() {
  const container = document.getElementById('post-list');
  container.innerHTML = ''; // 初期化

  posts.sort((a,b) => new Date(b.date) - new Date(a.date)); // 新しい順に表示

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

// ===== 日付を読みやすく変換 =====
function formatDate(dateStr){
  const d = new Date(dateStr);
  if(isNaN(d)) return dateStr;
  return `${d.getFullYear()}-${(d.getMonth()+1).toString().padStart(2,'0')}-${d.getDate().toString().padStart(2,'0')}`;
}

// ===== 基本的なHTMLエスケープ =====
function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, (m)=>{
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m];
  });
}

// ===== フッターに今年を表示 =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== 初期描画 =====
renderPosts();
