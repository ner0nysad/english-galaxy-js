const Mistake1l1 = {
  id: "mistake1l1",
  title: "English Galaxy | Урок 1",
  render: (...rest) => {
    return `
      <section class="mistake">
        <div class="mistake__container container">
          <a href="#lesson1" class="close"></a>
          <div class="mistake__content"> 
            <h2 class="mistake__content-title">Отметьте неправильное предложение</h2>
            <div class="mistake__content-answers">
              <fieldset class="checkbox-group">
                <div class="checkbox">
                  <label class="checkbox-wrapper">
                    <input type="radio" class="checkbox-input"/>
                    <span class="checkbox-tile">
                      <span class="checkbox-label">I travel every month</span>
                    </span>
                  </label>
                </div>
                  <div class="checkbox">
                    <label class="checkbox-wrapper">
                      <input id="checkbox-true" type="radio" class="checkbox-input"/>
                      <span class="checkbox-tile">
                        <span class="checkbox-label">I travelling every year</span>
                      </span>
                    </label>
                  </div>
                  <div class="checkbox">
                    <label class="checkbox-wrapper">
                      <input type="radio" class="checkbox-input"/>
                      <span class="checkbox-tile">
                        <span class="checkbox-label">I often travel </span>
                      </span>
                    </label>
                  </div>
              </fieldset>
            </div>
          </div>
          <a href="#mistake2l1" class="task__check task__check-disabled">Проверить</a>
        </div>
      </section>
    `;
  }
};

export default Mistake1l1;