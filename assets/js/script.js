// posts データ（記事追加はここにオブジェクトを追加するか、posts フォルダに個別 HTML を置いて参照してください）
const posts = [
  {
    title: "サイト公開",
    date: "2026-02-28",
    excerpt: "このサイトを公開しました。お知らせやアップデート通知などを行います",
    img: "assets/img/koukai.png",
    link: "posts/2026-02-28-koukai.html"
  }
];

// DOM に描画
function renderPosts(){
  const container = document.getElementById('post-list');
  container.innerHTML = '';
  posts.forEach(p => {
    const card = document.createElement('article');
    card.className = 'post-card';
    card.innerHTML = `
      <img src="${escapeHtml(p.img)}" alt="${escapeHtml(p.title)}">
      <h3><a href="${escapeHtml(p.link)}">${escapeHtml(p.title)}</a></h3>
      <div class="post-meta">${escapeHtml(p.date)}</div>
      <p class="post-excerpt">${escapeHtml(p.excerpt)}</p>
      <a class="more" href="${escapeHtml(p.link)}">続きを読む →</a>
    `;
    container.appendChild(card);
  });
}

// 基本的な HTML エスケープ
function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, (m)=>{
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m];
  });
}

// 年を footer に反映
document.getElementById('year').textContent = new Date().getFullYear();

// 初期描画
renderPosts();
