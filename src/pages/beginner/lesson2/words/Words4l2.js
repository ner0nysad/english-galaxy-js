const Words4l2 = {
  id: "words4l2",
  title: "English Galaxy | Урок 2",
  render: (...rest) => {
    return `
      <section class="words">
        <div class="words__container container">
          <a href="#lesson2" class="close"></a>
          <div class="words__content">
            <h2 class="words__content-title">Выберите правильный перевод</h2>
            <div class="words__content-word">feel</div>
            <button class="word-listen"></button>
            <div class="words__content-answers">
              <fieldset class="checkbox-group">
                <div class="checkbox">
                  <label class="checkbox-wrapper">
                    <input type="radio" class="checkbox-input" />
                    <span class="checkbox-tile">
                      <span class="checkbox-label">думать</span>
                    </span>
                  </label>
                </div>
                <div class="checkbox">
                  <label class="checkbox-wrapper">
                    <input id="checkbox-true" type="radio" class="checkbox-input" />
                    <span class="checkbox-tile">
                      <span class="checkbox-label">чувствовать себя</span>
                    </span>
                  </label>
                </div>
                <div class="checkbox">
                  <label class="checkbox-wrapper">
                    <input type="radio" class="checkbox-input" />
                    <span class="checkbox-tile">
                      <span class="checkbox-label">соглашаться</span>
                    </span>
                  </label>
                </div>
              </fieldset>
            </div>
          </div>
          <a href="#words5l2" class="task__check task__check-disabled">Проверить</a>
        </div>
      </section>
    `;
  }
};

export default Words4l2;