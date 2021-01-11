# express

## 1
- routing: 클라이언트 요청에 응답하는 방법을 결정
  - 각 라우터는 하나이상의 핸들러 함수를 가질수있다
  - app.method(path, handler)
  - route path에는 문자열 또는 정규표현식을 사용할 수 있음
- next()를 사용하면 후속 route handler로 제어를 전달할 수 있음

## response method
- `res.download()` 다운로드될 파일을 전송
- `res.end()` 응답 프로세스를 종료
- `res.json()` json 응답을 전송
- `res.jsonp()` jsonp지원을 통해 json응답을 전송
- `res.redirect()` 요청 경로를 재지정
- `res.render()` view template을 렌더링
- `res.send()` 다양한 유형의 응답을 전송
- `res.sendFile()` 파일을 전송
- `res.sendStatus()` 응답 상태 코드를 응답 본문으로 전송
