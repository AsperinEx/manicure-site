import Image from "next/image";
export const metadata = {
  title: "О мастере маникюра Веронике | Минск | метро Восток",
  description:
    "Вероника — мастер маникюра в Минске (метро Восток). Отдельный уютный кабинет, сертификаты, аккуратная работа и индивидуальный подход.",
};

export default function AboutPage() {
  return (
    <div className="about">

      {/* HERO */}
      <section className="about-hero premium-hero">

  <div className="hero-left">
    <span className="hero-badge">С 2020 года в профессии</span>

    <h1>
      Привет, я Вероника —
      <br />
      мастер маникюра в Минске 💅
    </h1>

    <p className="hero-subtext">
      Работаю в отдельном уютном кабинете рядом с метро Восток.
      Делаю аккуратный, прочный и эстетичный маникюр,
      который подчёркивает ваши руки.
    </p>
        <a href="https://dikidi.net/#widget=204193" 
                target="_blank"
rel="noopener noreferrer"
        className="primary-button hero-cta">
  Записаться онлайн
</a>
  </div>

  <div className="hero-right">
  <Image
    src="/master.jpg"
    alt="Вероника — мастер маникюра"
    width={380}
    height={480}
    className="hero-image"
    priority
  />
</div>

</section>

      {/* ИСТОРИЯ */}
      <section className="about-section accent-warm">
        <h2>Почему я выбрала маникюр</h2>
        <p>
          В маникюр я пришла потому, что мне это искренне нравится.
          Мне всегда была близка аккуратность, эстетика и внимание к деталям.
          Со временем хобби превратилось в профессию, а профессия — в дело,
          в которое я вкладываю душу.
        </p>
      </section>

      {/* АТМОСФЕРА */}
      <section className="about-section accent-soft">
        <h2>Как проходит приём</h2>
        <p>
          Я работаю одна, в отдельном уютном кабинете.
          Никакой спешки, лишнего шума или ощущения потока —
          только спокойная атмосфера и внимание к вам.
        </p>
        <p>
          Я общительная, но всегда чувствую настроение клиентки:
          можно поговорить, можно спокойно отдохнуть —
          как вам комфортнее.
        </p>
      </section>

      {/* ПОДХОД */}
      <section className="about-section accent-purple">
        <h2>Мой подход к работе</h2>
        <ul className="about-list">
          <li>✔ Аккуратность и внимание к деталям</li>
          <li>✔ Работаю с любыми ручками</li>
          <li>✔ Сертификаты и постоянное развитие</li>
          <li>✔ Стерильность инструментов</li>
          <li>✔ Могу работать быстро, если это важно</li>
        </ul>
        <p>
          Основной акцент — на качестве. Но если вам нужно быстрее —
          я подстроюсь под ваш ритм без потери аккуратности.
        </p>
      </section>

      {/* ФИНАЛ */}
      <section className="about-final">

  <h2>
    Буду рада знакомству <span className="red-heart">❤</span>
  </h2>

  <p className="final-text">
    Принимаю в Минске, рядом со станцией метро Восток
    (район Маяк Минска).
  </p>

  <p className="final-text">
    Если вы ищете аккуратный, качественный и долговечный маникюр —
    буду рада видеть вас.
  </p>
    <p className="final-signature">
    До встречи на маникюре ✨
  </p>
  <div className="page-end-line-full"></div>

</section>

    </div>
  );
}