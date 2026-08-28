# 1교시: 프론트엔드 최소 필수 지식과 AI 연동

## 학습 목표

- 웹 페이지를 구성하는 HTML, CSS, JS의 역할을 이해한다.
- AI Agent(Copilot, ChatGPT 등)가 코드를 작성할 수 있도록 문서의 기본 뼈대를 이해한다.
- 프론트엔드를 '직접 짜는 곳'이 아니라 'AI가 짜준 코드를 조립하는 곳'으로 인식의 전환을 이룬다.

## 1. 웹의 3요소 (간단 요약)

- **HTML (구조)**: 화면의 뼈대 (버튼, 입력창, 박스 등)
- **CSS (스타일)**: 화면의 화장 (색상, 간격, 정렬 등)
- **JavaScript (동작)**: 화면의 근육 (버튼 클릭 시 데이터 전송, 팝업 띄우기 등)

## 2. HTML 문서의 뼈대

AI가 짜준 코드를 어디에 붙여넣어야 하는지 알기 위해 반드시 알아야 하는 기본 구조입니다.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>나의 AI 서비스</title>
    <!-- 여기에 외부 CSS(Bootstrap 등) 링크가 들어갑니다 -->
  </head>
  <body>
    <!-- 여기에 사용자에게 보여지는 화면(UI) 코드가 들어갑니다 -->

    <!-- 여기에 JavaScript 태그가 들어갑니다 (body 맨 끝 권장) -->
  </body>
</html>
```

## 3. DOM (Document Object Model) 이란?

- 브라우저는 HTML 문서를 읽고 **트리 구조(DOM 트리)** 로 만듭니다.
- JavaScript를 통해 이 트리의 특정 요소(예: `id="chat-box"`)를 찾아 그 안의 내용을 바꾸거나 새로 추가할 수 있습니다.
- 백엔드 개발자는 직접 복잡한 DOM 조작을 작성하지 않습니다. AI에게 "id가 chat-box인 곳에 채팅 메시지를 추가하는 함수를 짜줘" 라고 요구합니다.

## 4. Prompting Tip: AI에게 프론트 코드를 요구할 때

**잘못된 예:** "채팅 화면 만들어줘" -> AI가 임의의 프레임워크나 복잡한 CSS로 코드를 던져줍니다. (유지보수 불가)
**좋은 예:** "MUI를 사용해서 단일 HTML 파일로 채팅 화면을 만들어줘. 화면 중앙에 채팅창이 있고, 아래에 입력창과 전송 버튼이 있어야 해. CSS는 MUI 클래스만 최대한 사용하고 최소한의 custom CSS만 `<style>` 태그에 넣어줘."
