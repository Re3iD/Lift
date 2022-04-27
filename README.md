# lift

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
# Lift


Итоги: Не удалось организовать нормальное наполнение очереди с плавнойанимацией. watcher Vue постоянно наровит обновить данные не обращая внимания на асинхроность. Не знаю как это пофиксить. Последней моей попыткой было ввести дополнительный массив wait из которого бы брался бы этаж по принципу FIFO, тем самым организовав поток вызовов, а массив queue служил бы шлюзом, который давал бы ответ на действия пользоватля. Так же это способствовало решению проблемы лифта по подбору по дороге пассажиров. По-моему мнению с задачей не справился.
