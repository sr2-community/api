# Entites

## Community (Сообщество)

```text
Options
```

## BuildingGroup (Строения)

```text
ID
Slug
Title
```

## Building (Литеры)

```text
ID
Number
```

## BuildingFloor (Этажи литеров)

```text
ID
Number
BuildingId
```

## ApartmentPlan (Планировки)

```text
ID
TypeName
BuildingId ?
BuildingFloorId ?
```

## Apartment (Квартиры)

```text
ID
Number
PlanTypeId
BuildingId
BuildingFloorId
```

## UsersRoles (Роли)

```text
UserId
RoleId
```

## UsersOwners (Владельцы)

```text
UserId
ApartmentId
```

## UsersResidents (Проживающий)

```text
UserId
ApartmentId
```

## Users (Пользователи)

```text
ID
FirstName
SecondName
LastName
DisplayName
```

## Role (Роли)

Structure

```text
ID
RoleName
```

Predefined Data

```
Root
SuperAdmin
Admin
ApartmentOwner
Resident
Editor
Moderator
Guest
BuildingChairman (Председатель Литера)
ComplexChairman (Представитель Комплекса)
ComplexRepresenative (Представитель УК)
StoreOwner (Владелец магазина)
StoreRepresenative (Представитель магазина)
```

## Documents

## Gallery
