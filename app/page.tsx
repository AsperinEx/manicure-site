export default function Home() {
  return (
    <main className="bg-white text-gray-700">

      {/* Hero */}
      <section className="py-16 md:py-20 flex flex-col items-center justify-center text-center px-4 md:px-6 animate-fade-up">
  <h1 className="text-2xl sm:text-3xl md:text-5xl font-light text-neutral-900 mb-4 leading-snug">
    Мастер по маникюру Вероника
  </h1>

  <p className="text-sm md:text-lg max-w-md md:max-w-xl mb-6 text-gray-600">
    Эстетичный и аккуратный маникюр в уютном собственном кабинете в Минске 💅
  </p>

  <a
    href="https://dikidi.net/#widget=204193"
    data-widget="204193"
    className="w-full sm:w-auto text-center bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-3 rounded-full text-base transition-all duration-300 shadow-sm active:scale-95 inline-block"
  >
    Записаться онлайн
  </a>
</section>



      {/* Services */}
      <section className="py-12 bg-rose-50 px-6 animate-fade-up">
        <h2 className="text-3xl font-light text-rose-400 text-center mb-12">
          Услуги и цены
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

  <div className="bg-white p-6 rounded-2xl shadow-sm text-center hover:shadow-md transition duration-300">
    <h3 className="text-xl mb-2 font-medium">Маникюр</h3>
    <p className="text-gray-500 mb-4 text-sm">Классический / аппаратный</p>
    <p className="text-rose-400 text-2xl font-semibold">
      от 40 BYN
    </p>
  </div>

  <div className="bg-white p-6 rounded-2xl shadow-sm text-center hover:shadow-md transition duration-300 border border-rose-200">
    <h3 className="text-xl mb-2 font-medium">Маникюр + гель-лак</h3>
    <p className="text-gray-500 mb-4 text-sm">Укрепление + покрытие цветом</p>
    <p className="text-rose-400 text-2xl font-semibold">
      от 70 BYN
    </p>
  </div>

  <div className="bg-white p-6 rounded-2xl shadow-sm text-center hover:shadow-md transition duration-300">
    <h3 className="text-xl mb-2 font-medium">Наращивание</h3>
    <p className="text-gray-500 mb-4 text-sm">Придание желаемой длины</p>
    <p className="text-rose-400 text-2xl font-semibold">
      от 100 BYN
    </p>
  </div>

</div>

      </section>


      {/* Portfolio */}
     <section className="py-12 bg-white px-6 animate-fade-up">
        <h2 className="text-3xl font-light text-rose-400 text-center mb-12">
          Портфолио
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="overflow-hidden rounded-2xl shadow-sm group">
              <img
                src={`/portfolio/${num}.jpg`}
                alt="Работа мастера Вероники"
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://instagram.com/v.nails.by"
            target="_blank"
            className="inline-block bg-rose-300 hover:bg-rose-400 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Смотреть больше в Instagram
          </a>
        </div>
      </section>


      {/* Location */}
     <section className="py-12 md:py-16 bg-rose-50 px-4 md:px-6 text-center animate-fade-up">
        <h2 className="text-3xl font-light text-rose-400 mb-6">
          Где меня найти
        </h2>

        <p className="mb-8 text-gray-600">
          Минск, ул. Кирилла Туровского, 16 💅
        </p>

        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-md">
          <iframe
            src="https://yandex.by/map-widget/v1/?ll=27.655187%2C53.930768&mode=whatshere&whatshere%5Bpoint%5D=27.655131%2C53.930652&whatshere%5Bzoom%5D=17&z=20.44"
            width="100%"
            height="350"
            frameBorder="0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

    </main>
  );
}
