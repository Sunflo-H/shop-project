# 쇼핑몰 디자인 클론코딩

## 1. 개요
- React를 공부하면서 만든 프로젝트입니다.
- 쇼핑몰 템플릿을 토대로 웹사이트를 꾸미고 페이지간 이동 및 구현해보고자 하는 기능들을 연습해보았습니다.
- 사용 기술 : HTML, CSS Module, React
- 상태 관리 : useState, useReducer

## 2. 기능
#### 2-1. 카드 컴포넌트


## 3. 알게된 점
#### 3-1. 리렌더링 후 setState가 적용되는 React
#####useState로 상태관리를 하면 setState한 값을 바로 사용할 수 없는 문제가 있었습니다.
- setState 함수를 호출한후 적용되는 것이 아닌 리렌더링 된 후 적용되는 React의 특징 때문이었습니다.  
- useReducer를 이용하여 복잡하게 계산되는 state들을 한번에 다루어 이 문제를 해결할 수 있었습니다.

#### 3-2. CSS module은 class명이 겹치지 않는다.
#####CSS로 작성을 하면 class명 때문에 CSS가 이상하게 적용되는 문제가 있었습니다.
- 이를 해결하기 위해 React에서의 CSS 적용방법들을 찾아보니 CSS Module, Styled-Components 를 알게 되었고 그 중 CSS Module을 사용하여 해결하였습니다.
- CSS Module을 이용하니 웹페이지에서 class명 뒤에 임의의 글자가 붙여지는것을 확인했습니다.
