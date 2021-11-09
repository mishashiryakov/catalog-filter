Development server - npm run dev
Create build - npm run build
Deploy - https://catalog-filter.vercel.app/

Стек - Next.js, React, TypeScript, SCSS, CSS modules
Сделал:
1) При монтировании компонента из адресной строки берутся URL параметры для запроса (с фильтрами либо без). Делается fetch запрос.
2) При изменении состояния цены или выбранного бренда создается новый URL под выбранные фильтры. Делается запрос.
3) Объединил isLoading, error, products в 1 состояние. Экономит лишний рендер при работе с запросом.
4) LazyLoad на картинки.
5) Адаптивная верстка до 300px.
6) Spinner во время загрузки.
7) Обработка ошибок запроса.
8) Debounce на ввод цены и выбора бренда. Уменьшает частые запросы при вводе текста(420мс).
9) Миксины на типы текста. Переменные цветов.

Не сделал, потому что уже потратил много времени:
1) Не до конца доделал верстку. Бывает 1 картинка не с таким размером как остальные. В целом можно найти проблемы.
2) Для SEO можно добавить мета теги на каждую страницу.
3) Возможно инпут цены стоит сделать строковым. С типом number остается 0 в начале значения.

Делал около 6 часов.
