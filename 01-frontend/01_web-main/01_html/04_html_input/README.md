# 폼 데이터 다루기

**1. 디렉터리 구조**
| 파일 | 역할 |
| ------------ | ----------------------------- |
| `index.html` | 구조(HTML) + 동작(JavaScript) |
| `result.html` | `index.html`에서 `submit`한 결과를 확인 |
| `style.css` | 표현(CSS) |

`index.html` 을 브라우저로 열거나 VS Code의 **Live Server** 로 띄우면 됩니다.

**2. 전송되는 값의 규칙 세 가지**

미리보기 문자열을 같이 읽으면 세 가지가 한 번에 보입니다.

- 한글이 `%EA%B9%80` 처럼 바뀌는 것 → **URL 인코딩**
- 체크박스 여러 개는 `avail_language=HTML&avail_language=CSS` 처럼 **같은 이름이 반복**
- **체크 안 한 라디오·체크박스는 아예 안 들어감** (빈 텍스트 칸은 `sex=` 처럼 들어갑니다 — 이 차이를 AI에게 물어보세요)

**3. 값을 꺼내는 방법이 종류마다 다르다**

| 종류                          | 꺼내는 법                              |
| ----------------------------- | -------------------------------------- |
| text, date, color, range, tel | `.value`                               |
| 체크박스 하나                 | `.checked` (true / false)              |
| 라디오 묶음                   | `.value` — 선택된 것의 값이 나옵니다   |
| 체크박스 묶음                 | 반복문으로 `.checked` 인 것만 모읍니다 |
| multiple select               | `.selectedOptions`                     |

**4. 직접 해볼 것**

- `method` 를 `get` → `post` → (속성 삭제) 로 바꿔가며 미리보기 패널이 어떻게 달라지는지 보기
  - `post` 상태에는 개발자도구 -> Network -> Payload 확인
- 체크박스를 하나만 남기고 `getCheckedValues` 가 어떻게 되는지 확인
  (힌트: 같은 `name` 이 하나뿐이면 **목록이 아니라 요소 하나**가 옵니다. 함수 안에 그 처리가 들어 있습니다)
- `style.css` 맨 위 `:root` 의 `--brand` 색을 바꿔 전체 색이 한 번에 바뀌는지 보기
