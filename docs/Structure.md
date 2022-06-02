# Структура элементов

## Новости

Схема

```text
slug        :string(256)
title       :string(1024)       Заголовок
date        :date               Дата новости
published   :date               Дата публикации (По умолчанию равна date)
updated     :date:autoupdate    Дата обновления (По умолчанию равна date)
content     :memo
```
