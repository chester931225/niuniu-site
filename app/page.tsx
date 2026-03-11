export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white">

      {/* Hero */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold mb-6">
          新牛屋（牛一牛）厚切牛排
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          信義區高 CP 值厚切牛排館
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="https://maps.app.goo.gl/cfE5yWkMuCs25Cpg7"
            className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold"
          >
            查看地圖
          </a>

          <a
            href="tel:0227650821"
            className="border border-white px-6 py-3 rounded-xl"
          >
            電話訂位
          </a>
        </div>
      </section>


      {/* 店家資訊 */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          店家資訊
        </h2>

        <div className="space-y-4 text-lg text-gray-300">
          <p>地址：台北市信義區永吉路30巷157弄12號</p>
          <p>電話：02 2765 0821</p>
          <p>營業時間：11:00 – 21:00</p>
          <p>類型：台式厚切牛排館</p>
        </div>
      </section>


      {/* 推薦菜單 */}
      <section className="bg-neutral-800 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          推薦菜單
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          <div className="bg-neutral-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">
              安格斯黑牛排
            </h3>
            <p className="text-gray-400 mb-3">
              店內人氣第一名
            </p>
            <p className="text-yellow-400 text-xl">$445</p>
          </div>

          <div className="bg-neutral-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">
              雪花沙朗牛排
            </h3>
            <p className="text-gray-400 mb-3">
              經典厚切排餐
            </p>
            <p className="text-yellow-400 text-xl">$320</p>
          </div>

          <div className="bg-neutral-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">
              黃金雞腿排
            </h3>
            <p className="text-gray-400 mb-3">
              外酥內嫩
            </p>
            <p className="text-yellow-400 text-xl">$280</p>
          </div>

        </div>
      </section>


      {/* 客人評價 */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          客人評價
        </h2>

        <div className="space-y-6 text-gray-300">

          <p>
            ⭐⭐⭐⭐⭐  
            「牛排很厚、價格不貴，很適合聚餐。」
          </p>

          <p>
            ⭐⭐⭐⭐⭐  
            「自助吧有湯跟吐司，CP值很高。」
          </p>

          <p>
            ⭐⭐⭐⭐⭐  
            「信義區少數平價牛排店。」
          </p>

        </div>
      </section>


      {/* Footer */}
      <footer className="bg-black text-center py-10 text-gray-400">
        © 2026 新牛屋厚切牛排
      </footer>

    </main>
  )
}