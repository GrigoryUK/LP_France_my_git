# Dev запуск
- Установка
```yarn install```
```bundle install```

- Запуск без БД
```rails server -e test```

- Запуск с БД
```rails server -e dev```

# Боевой запуск
```rails server```

# Деплой на сервер
```cap production deploy```

### Задать репозиторий с которого capistrato будет тянуть деплой
- config/deploy.rb
```set :repo_url, "<репозиторий.git>"```
```set :branch, :<название ветки>```
- В конфиге гита добавить ssh-ключ сервера для деплоя
- Возможно придётся изменить версию ноды 
```set :nvm_node, 'v<версия>'```