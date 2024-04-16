const Words5l3 = {
  id: "words5l3",
  title: "English Galaxy | Урок 3",
  render: (...rest) => {
    return `
      <section class="words">
        <div class="words__container container">
          <a href="#lesson3" class="close"></a>
          <div class="words__content">
            <h2 class="words__content-title">Выберите правильный перевод</h2>
            <div class="words__content-word">daughter</div>
            <button class="word-listen"></button>
            <div class="words__content-answers">
              <fieldset class="checkbox-group">
                <div class="checkbox">
                  <label class="checkbox-wrapper">
                    <input type="radio" class="checkbox-input" />
                    <span class="checkbox-tile">
                      <span class="checkbox-label">сын</span>
                    </span>
                  </label>
                </div>
                <div class="checkbox">
                  <label class="checkbox-wrapper">
                    <input id="checkbox-true" type="radio" class="checkbox-input" />
                    <span class="checkbox-tile">
                      <span class="checkbox-label">дочь</span>
                    </span>
                  </label>
                </div>
                <div class="checkbox">
                  <label class="checkbox-wrapper">
                    <input type="radio" class="checkbox-input" />
                    <span class="checkbox-tile">
                      <span class="checkbox-label">сестра</span>
                    </span>
                  </label>
                </div>
              </fieldset>
            </div>
          </div>
          <a href="#lesson3" class="task__check task__check-disabled">Проверить</a>
        </div>
      </section>
    `;
  }
};

export default Words5l3;