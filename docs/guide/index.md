---
lastUpdate: true
---

# Getting started
<br/>
<br/>

<div style="display: flex; justify-content: center">
  <img style="width: 200px" src="/icon.png" alt="H5assembler logo" >
</div>
<br/>

H5assembler is an open source software under MIT license which allows html developers to no longer repeat their codes,
it was designed to help html developers to easily integrate their html code into web frameworks such as laravel, vue js,
django ,and others ... ,
easy to learn, and with its wide range of commands, it is the ideal tool for all developers who are embarking on large
projects using only html and css.
with H5assembler you will never need to repeat the same line of code several times.

## Installation

::: warning 
Unfortunately, only a windows version of [H5assembler](https://github.com/ngdream/H5assembler) is available. Feel free to contribute to this project by making a simple pull request.
:::  
- ### Windows

```bash
Lorem ipsum Lorem ipsum
```


## Usage

h5assembler offers you a technology allowing you to reduce your html code and guarantees you an easy integration in
frameworks such as (laravel, django)

- ### @include function

Assuming we want to use a navbar in multiple html file, the simplest to do that will be to create a `navbar.html` file containing the code of the navbar and include that file in the file which require it, in our case, `index.html`.

### navbar.html

```html

<nav>
    <a href="">mikle</a>
    <a href="">jordan</a>
    <a href="">taba</a>
</nav>
```

### index.html

```html

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css">

    <title>simple include H5assembler</title>
</head>
<body>
@include("navbar.html")

</body>
</html>
```

### Generate file: 
In the same directory than `index.html`, <br/>
**Run :**  **`H5A index.html output.html`**.<br/> this command will generate
an `output.html` file with the following content:

::: info
You can give more than one file as argument to the `h5a` command
:::

#### Generated file

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css">

    <title>simple include H5assembler</title>
</head>
<body>
<nav>
    <a href="">mikle</a>
    <a href="">jordan</a>
    <a href="">taba</a>
</nav>

</body>
</html>
```

- ### @repeat function

The repeat function allow us to generate multiple identical lines in a simple way.

### index.html

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css">

    <title>simple include H5assembler</title>
</head>
<body>
@repeat("3"){
<h5>this is h5 assembler</h5>
}
</body>
</html>
```

### output.html

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css">

    <title>simple include H5assembler</title>
</head>
<body>
<h5>this is h5 assembler</h5>
<h5>this is h5 assembler</h5>
<h5>this is h5 assembler</h5>
</body>
</html>
```
## H5maker language

H5MAKER language is the most powerful functionality of H5 by default when you use h5A you can just build one file but with h5maker its possible to build many files and deploy your project for every one


## Bugs
H5 assembler is a new software so you might encounter some problem while using it. You will find the current bugs or problem in the [issues](https://github.com/ngdream/H5assembler/issues) section of the official repository. You can also add those that you have encounter"