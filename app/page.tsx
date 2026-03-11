export default function Page() {
  const menuItems = [
    {
      name: '安格斯黑牛排',
      desc: '厚切口感紮實，適合第一次來店的客人。',
      price: '$445',
      tag: '人氣招牌',
    },
    {
      name: '雪花沙朗牛排',
      desc: '經典排餐選擇，肉感與油花較均衡。',
      price: '$320',
      tag: '經典必點',
    },
    {
      name: '黃金雞腿排',
      desc: '外皮香酥、肉質多汁，不吃牛也很適合。',
      price: '$280',
      tag: '首次推薦',
    },
    {
      name: '雙拼套餐',
      desc: '一次吃到兩種主餐，份量感更足。',
      price: '$380',
      tag: '飽足首選',
    },
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
              <span className="rounded-full border border-white/10 px-3 py-1">周一到周日 11:00 – 21:00</span>
              <span className="rounded-full border border-white/10 px-3 py-1">厚切排餐</span>
              <span className="rounded-full border border-white/10 px-3 py-1">信義區美食</span>
              <span className="rounded-full border border-white/10 px-3 py-1">聚餐推薦</span>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl shadow-black/30">
              <img
                src="/steak.jpg"
                alt="厚切牛排示意圖"
                className="h-[420px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-flex rounded-full bg-yellow-300/15 px-3 py-1 text-xs font-medium text-yellow-200 backdrop-blur">
                  首頁示意大圖
                </div>
                <p className="mt-3 max-w-md text-sm leading-7 text-gray-200">
                  目前先使用風格示意圖片，之後你可以再換成店家真實餐點照或門面照。
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
            <p className="text-sm uppercase tracking-[0.3em] text-yellow-300">Popular menu</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">熱門推薦菜單</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-8 text-gray-300">
              先從熱門品項開始選最不容易踩雷，第一次來店也能快速決定。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="rounded-3xl border border-white/10 bg-neutral-900 p-6 transition hover:-translate-y-1 hover:border-yellow-300/40"
              >
                <div className="inline-flex rounded-full bg-yellow-300/10 px-3 py-1 text-xs font-medium text-yellow-300">
                  {item.tag}
                </div>
                <h3 className="mt-4 text-xl font-bold">{item.name}</h3>
                <p className="mt-3 min-h-[72px] leading-7 text-gray-400">{item.desc}</p>
                <div className="mt-6 text-2xl font-black text-yellow-300">{item.price}</div>
              </div>
            ))}
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
                營業時間：周一到周日 11:00 – 21:00
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
