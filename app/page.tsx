export default function Page() {

  const steakItems = [
    { name: '5oz 特製牛排', price: '$240', desc: '入門份量，適合想簡單吃排餐的客人。' },
    { name: '7oz 雪花沙朗', price: '$300', desc: '經典人氣選擇，油花與口感較均衡。' },
    { name: '9oz 霜降沙朗', price: '$350', desc: '肉感更明顯，適合想吃得更滿足。' },
    { name: '12oz 安格斯黑牛', price: '$400', desc: '招牌熱門品項，第一次來很適合點。' },
    { name: '16oz 限量厚片頂級', price: '$519', desc: '厚切口感更紮實，適合大食量。' },
    { name: '32oz 限量厚片頂級', price: '$819', desc: '超大份量，適合想挑戰份量的客人。' },
  ]

  const mixedItems = [
    { name: '帶骨牛小排 2片', price: '$420', desc: '喜歡啃骨邊香氣的人會很愛。' },
    { name: '7oz 菲力牛排', price: '$420', desc: '肉質較嫩，口感細緻。' },
    { name: '里肌豬排', price: '$260', desc: '不吃牛時的經典排餐選擇。' },
    { name: '黃金雞腿排', price: '$260', desc: '外酥內嫩，接受度很高。' },
    { name: '茴香羊小排 2支', price: '$370', desc: '羊排香氣明顯，適合想換口味。' },
    { name: '比目魚排', price: '$260', desc: '清爽海鮮選項。' },
    { name: '香煎鮭魚', price: '$360', desc: '魚肉口感較厚實。' },
    { name: '好吃魷魚排', price: '$310', desc: '海鮮控可選的特色品項。' },
  ]

  const comboItems = [
    { name: '特選雙拼 5選2', price: '$370', desc: '牛／豬／比目魚／雞／蝦，自由搭配。' },
    { name: '7oz 雙拼 + 選1', price: '$420', desc: '比目魚／豬／雞／蝦／羊，多一種更豐盛。' },
    { name: '海陸空全餐', price: '$470', desc: '雞＋比目魚＋蝦／豬／牛／羊，豐盛首選。' },
    { name: '海鮮雙拼 1+1', price: '$440', desc: '比目魚／蝦／鮭魚／魷魚／干貝，海鮮愛好者推薦。' },
  ]

  const limitedItems = [
    { name: '7oz 起司牛', price: '$320', desc: '濃郁起司搭配牛排。' },
    { name: '起司豬', price: '$290', desc: '起司風味與豬排結合。' },
    { name: '香煎起司雞', price: '$290', desc: '不吃牛也能享受起司系排餐。' },
    { name: '7oz 牛排佐松露醬', price: '$320', desc: '松露香氣更有層次。' },
    { name: '12oz 黑松露安格斯', price: '$420', desc: '安格斯牛排搭配松露醬。' },
    { name: '16oz 厚切松露頂級', price: '$540', desc: '豪華大份量。' },
  ]

  const sideItems = [
    { name: '脆炸薯條', price: '$80' },
    { name: '雞塊', price: '$80' },
    { name: '洋蔥圈', price: '$80' },
    { name: '炸物拼盤', price: '$180' },
    { name: '干貝 2顆', price: '$180' },
    { name: '草蝦 1隻', price: '$60' },
    { name: '花椰菜', price: '$60' },
  ]

  const reviews = [
    '牛排很厚、價格不貴，很適合聚餐。',
    '自助吧有湯跟吐司，整體 CP 值很高。',
    '在信義區算是少數比較好入手的平價牛排店。',
  ]

  return (
    <main className="min-h-screen bg-neutral-950 text-white">

      {/* HERO */}

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">

          <div>
            <h1 className="text-4xl font-black md:text-6xl">
              新牛屋（牛一牛）
              <span className="block text-yellow-300">厚切牛排・永吉店</span>
            </h1>

            <p className="mt-6 text-gray-300">
              信義區平價厚切排餐，份量足、價格好入手。
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="https://maps.app.goo.gl/cfE5yWkMuCs25Cpg7"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-yellow-300 px-6 py-3 text-black"
              >
                立即導航
              </a>

              <a
                href="tel:0227650821"
                className="rounded-xl border border-white px-6 py-3"
              >
                電話聯絡
              </a>

            </div>
          </div>

          <img
            src="/steak.jpg"
            alt="牛排"
            className="rounded-3xl"
          />

        </div>
      </section>

      {/* MENU */}

      <section className="mx-auto max-w-6xl px-6 py-16">

        <h2 className="mb-10 text-center text-3xl font-bold">
          完整菜單
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {steakItems.map(item => (
            <div key={item.name} className="rounded-2xl border border-white/10 p-6">
              <div className="flex justify-between">
                <h4>{item.name}</h4>
                <div className="text-yellow-300">{item.price}</div>
              </div>
              <p className="text-gray-400 mt-2">{item.desc}</p>
            </div>
          ))}

        </div>

      </section>

      {/* LOCATION */}

      <section className="mx-auto max-w-6xl px-6 py-16">

        <h2 className="text-3xl font-bold mb-8">
          店家資訊
        </h2>

        <div className="space-y-4 text-gray-300">

          <div>地址：台北市信義區永吉路30巷157弄12號</div>

          <div>電話：02 2765 0821</div>

          <div>營業時間：11:00 – 21:00</div>

        </div>

        <div className="mt-8 overflow-hidden rounded-3xl">

          <iframe
            src="https://www.google.com/maps?q=台北市信義區永吉路30巷157弄12號&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
          />

        </div>

      </section>

      {/* REVIEWS */}

      <section className="mx-auto max-w-6xl px-6 py-16">

        <h2 className="text-3xl font-bold mb-8">
          客人評價
        </h2>

        <div className="space-y-4">

          {reviews.map(r => (
            <div key={r} className="border border-white/10 p-6 rounded-xl">
              ⭐⭐⭐⭐⭐ {r}
            </div>
          ))}

        </div>

      </section>

    </main>
  )
}