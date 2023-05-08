# CForm.js

## 개요
평상시 Javascript에서 form을 생성하고 submit하는데에는 아래와 같은 과정이 필요합니다.
```
var form = document.createElement('form');
form.setAttribute('action', action);		
form.setAttribute('method', method);

var input = document.createElement('input');
input.setAttribute('name', name);
input.setAttribute('value', value);
form.appendChild(input);

var input = document.createElement('input');
input.setAttribute('name', name);
input.setAttribute('value', value);
form.appendChild(input);

...

document.body.appendChild(form);
form.submit();
```
하지만 위처럼 여러 name을 사용하면 작성하는 양이 과도하게 많아집니다.   
CForm.js는 이 부분을 보안합니다.

## 사용방법
전체적인 사용방법
```
let action = '[주소]'; // form Element의 action
let method = 'GET'; // form Element의 method
let target = '_self'; // form Element의 target

// CForm 생성
const cForm = new CForm(url, method, target);

// cForm에 파라미터 생성
cForm.setData('[파라미터명]','[파라미터값]');
cForm.setData('[파라미터명]','[파라미터값]');
cForm.setData('[파라미터명]','[파라미터값]');
...

// cForm의 Form을 submit동작 수행
cForm.submit();
```

간단한 사용방법
```
new CForm(url)
    .setData('[파라미터명]','[파라미터값]')
    .setData('[파라미터명]','[파라미터값]')
    .setData('[파라미터명]','[파라미터값]')
    .submit();
```