# React Template Typescript

## Скрипты

##### Устанавка зависимостей
```shell script
yarn
```

##### Production сборка
```shell script
yarn build
```
Есть поддержка brotli сжатия.

##### Запуск сервера для разработки
```shell script
yarn dev
```

##### Линтер
```shell script
yarn lint
```

```shell script
yarn lint:fix
```

Для стилей:
```shell script
yarn lint-css
```

```shell script
yarn lint-css:fix
```
##### Запуск анализатора размера бандла (production сборка)
```shell script
yarn analyze
```

## Разработка

#### Создание компонентов (hygen):
Перед использованием необходимо установить hygen глобально
```shell script
yarn global add hygen
npm i -g hygen
```

#### Создание компонентов:
```shell script
hygen shared new
hygen feature new
hygen page new
hygen layout new
```

### Структура папок
* **@types** глобальные (*global.d.ts*) и кастомные (*custom.d.ts*) типы.
* **api** методы, мапперы, ендпоинты API
* **assets** глобальные стили (*scss*), примеси, переменные, шрифты, изображения (*images*), иконки (*images/icons* **только SVG**, используется svgr, оптимизация изображений)
* **components**
Компоненты:
    * shared - переиспользуемые
    * features/{pageName} - компоненты фичей по страницам
* **config** конфигурация (*ссылка на API и прочее*)
* **constants** енумы, словари и константы.
* **hocs** компоненты высшего порядка. Собираются в *hocs/setup*
* **layouts** лейауты
* **pages** страницы
* **store** работа с хранилищем. Разбита на модули. В каждом модуле:
    * actions
    * reducer
    * saga
    * selectors
* **hooks** кастомные хуки, также используется библиотека [ahooks](https://ahooks.js.org/) .
* **utils** хелперы, утилиты, настройки.
* **routes** - роуты (*routes/paths*), кастомные роуты (приватный, защищенный)

#### Создание компонентов
* Создавать компоненты только через **hygen**
* Допускается создание подпапок с другими компонентами в папках компонента
* Только именованные экспорты (основной компонент из index.tsx). Дефолтные экспорты только для React.lazy
* Для стилизации используется css-модули, однако допускается стилизация через классы
* **Внимательно проверяем автоимпорты**<br>
  Список алиасов:
  * api
  * assets
  * components
  * config
  * constants
  * hocs
  * interfaces
  * layouts
  * pages
  * routes
  * store
  * utils

#### Роутинг
Используется **react-router v6**

При указании путей использовать словари из constants/paths

#### Работа со стором
* redux-toolkit
* redux-saga для сайд-эффектов.
* Состояния загрузки и ошибки в *store/loads/reducer*.
#### Работа с api
* axios настраивается в файле *utils/axios*
