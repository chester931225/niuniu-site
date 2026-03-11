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
    { name: '7oz 起司牛', price: '$320', desc: '濃郁起司搭配牛排，口味更厚重。' },
    { name: '起司豬', price: '$290', desc: '起司風味與豬排結合，接受度高。' },
    { name: '香煎起司雞', price: '$290', desc: '不吃牛也能享受起司系排餐。' },
    { name: '7oz 牛排佐松露醬', price: '$320', desc: '多了松露香氣，整體更有層次。' },
    { name: '12oz 黑松露安格斯', price: '$420', desc: '安格斯牛排搭配松露醬，質感升級。' },
    { name: '16oz 厚切松露頂級', price: '$540', desc: '大份量＋松露風味的豪華版。' },
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

  const features = [
    '位於信義區永吉路巷弄，交通方便',
    '主打平價厚切排餐與高飽足感',
    '適合下班晚餐、朋友聚餐、學生聚會',
    '店內資訊清楚，第一次造訪也容易選餐',
  ]

  const reviews = [
    '牛排很厚、價格不貴，很適合聚餐。',
    '自助吧有湯跟吐司，整體 CP 值很高。',
    '在信義區算是少數比較好入手的平價牛排店。',
  ]

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.18),transparent_28%),linear-gradient(135deg,#171717,#0a0a0a_55%,#111827)] px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-yellow-300/25 bg-yellow-300/10 px-4 py-1 text-sm text-yellow-200">
              信義區巷弄排餐推薦
            </div>
            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              新牛屋（牛一牛）
              <span className="mt-2 block text-yellow-300">厚切牛排・永吉店</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
              想找一間價格好入手、份量又夠的排餐店？這裡整理了店家資訊、熱門品項、位置與來店重點，讓客人一頁就看懂。
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://maps.app.goo.gl/cfE5yWkMuCs25Cpg7"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-yellow-300 px-6 py-3 font-semibold text-black transition hover:-translate-y-0.5"
              >
                立即導航
              </a>
              <a
                href="tel:0227650821"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                電話聯絡
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-gray-300">
              <span className="rounded-full border border-white/10 px-3 py-1">11:00 – 21:00</span>
              <span className="rounded-full border border-white/10 px-3 py-1">厚切排餐</span>
              <span className="rounded-full border border-white/10 px-3 py-1">信義區美食</span>
              <span className="rounded-full border border-white/10 px-3 py-1">聚餐推薦</span>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl shadow-black/30">
              <img
                src="\steak.jpg"
                alt="厚切牛排示意圖"
                className="h-[420px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-flex rounded-full bg-yellow-300/15 px-3 py-1 text-xs font-medium text-yellow-200 backdrop-blur">
                  5oz特製牛排
                </div>
                <p className="mt-3 max-w-md text-sm leading-7 text-gray-200">
                
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="text-sm text-gray-400">店家地址</div>
                <div className="mt-3 text-xl font-bold leading-8">台北市信義區永吉路30巷157弄12號</div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="text-sm text-gray-400">聯絡電話</div>
                <div className="mt-3 text-xl font-bold">02 2765 0821</div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:col-span-2">
                <div className="text-sm text-gray-400">適合誰來？</div>
                <p className="mt-3 text-lg leading-8 text-gray-200">
                  很適合下班想快速吃飽的人、學生聚會，或第一次在信義區找平價排餐的客人。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-yellow-300">Why choose us</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">來店前先知道的 4 個重點</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-xl shadow-black/20"
            >
              <div className="mb-4 h-10 w-10 rounded-2xl bg-yellow-300/15" />
              <p className="leading-8 text-gray-200">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-yellow-300">Full menu</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">完整菜單</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-8 text-gray-300">
              實際以店內目前菜單價格為主
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">牛排類</h3>
                  <p className="mt-2 text-gray-400">第一次來店最推薦先從這一區開始選。</p>
                </div>
                <span className="rounded-full border border-yellow-300/20 bg-yellow-300/10 px-4 py-1 text-sm text-yellow-300">
                  熱門主餐
                </span>
              </div>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {steakItems.map((item) => (
                  <div key={item.name} className="rounded-3xl border border-white/10 bg-neutral-900 p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="text-lg font-bold">{item.name}</h4>
                      <div className="text-lg font-black text-yellow-300">{item.price}</div>
                    </div>
                    <p className="mt-3 leading-7 text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">其他排餐</h3>
                  <p className="mt-2 text-gray-400">除了牛排之外，也有雞排、豬排與海鮮選擇。</p>
                </div>
                <span className="rounded-full border border-white/10 px-4 py-1 text-sm text-gray-300">
                  多元搭配
                </span>
              </div>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {mixedItems.map((item) => (
                  <div key={item.name} className="rounded-3xl border border-white/10 bg-neutral-900 p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="text-lg font-bold">{item.name}</h4>
                      <div className="text-lg font-black text-yellow-300">{item.price}</div>
                    </div>
                    <p className="mt-3 leading-7 text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">雙拼／套餐</h3>
                  <p className="mt-2 text-gray-400">適合想吃更豐富、或兩個人一起參考點餐的區塊。</p>
                </div>
                <span className="rounded-full border border-yellow-300/20 bg-yellow-300/10 px-4 py-1 text-sm text-yellow-300">
                  飽足推薦
                </span>
              </div>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-2">
                {comboItems.map((item) => (
                  <div key={item.name} className="rounded-3xl border border-white/10 bg-neutral-900 p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="text-lg font-bold">{item.name}</h4>
                      <div className="text-lg font-black text-yellow-300">{item.price}</div>
                    </div>
                    <p className="mt-3 leading-7 text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">限量版</h3>
                  <p className="mt-2 text-gray-400">起司與松露系列，適合想吃特別一點的客人。</p>
                </div>
                <span className="rounded-full border border-white/10 px-4 py-1 text-sm text-gray-300">
                  特色口味
                </span>
              </div>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {limitedItems.map((item) => (
                  <div key={item.name} className="rounded-3xl border border-white/10 bg-neutral-900 p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="text-lg font-bold">{item.name}</h4>
                      <div className="text-lg font-black text-yellow-300">{item.price}</div>
                    </div>
                    <p className="mt-3 leading-7 text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">單點類</h3>
                  <p className="mt-2 text-gray-400">想另外加點配料或炸物時可從這裡挑選。</p>
                </div>
                <span className="rounded-full border border-white/10 px-4 py-1 text-sm text-gray-300">
                  加點選擇
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {sideItems.map((item) => (
                  <div key={item.name} className="rounded-2xl border border-white/10 bg-neutral-900 px-5 py-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="font-medium text-gray-200">{item.name}</div>
                      <div className="font-bold text-yellow-300">{item.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-yellow-300">Location</p>
            <h2 className="mt-3 text-3xl font-bold">店家資訊</h2>
            <div className="mt-8 space-y-4 text-gray-300">
              <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
                地址：台北市信義區永吉路30巷157弄12號
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
                電話：02 2765 0821
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
                營業時間：11:00 – 21:00
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
                類型：台式厚切牛排館
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://maps.app.goo.gl/cfE5yWkMuCs25Cpg7"
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-2xl bg-yellow-300 px-6 py-3 font-semibold text-black"
              >
                開啟 Google 地圖
              </a>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-yellow-300/10 to-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-yellow-300">Reviews</p>
            <h2 className="mt-3 text-3xl font-bold">客人常見評價</h2>
            <div className="mt-8 space-y-5">
              {reviews.map((review) => (
                <div key={review} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <div className="mb-2 text-yellow-300">★★★★★</div>
                  <p className="leading-8 text-gray-200">{review}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black px-6 py-16">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(250,204,21,0.12),rgba(255,255,255,0.03))] p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-yellow-300">Call to action</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">準備好安排下一餐了嗎？</h2>
              <p className="mt-4 max-w-2xl leading-8 text-gray-300">
                不管是平日晚餐、朋友聚會，還是想找一間份量夠又不會太貴的排餐店，這裡都是很容易下決定的選擇。
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="https://maps.app.goo.gl/cfE5yWkMuCs25Cpg7"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-yellow-300 px-6 py-3 text-center font-semibold text-black"
              >
                立即導航
              </a>
              <a
                href="tel:0227650821"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-center font-semibold text-white"
              >
                撥打電話
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-neutral-950 px-6 py-8 text-center text-sm text-gray-500">
        © 2026 新牛屋（牛一牛）厚切牛排・永吉店
      </footer>
    </main>
  )
}
