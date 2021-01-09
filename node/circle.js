// 모듈에서만 유효한 private 변수
const { PI } = Math;

// exports 객체의 메소드로 정의
// 외부에 공개됨
exports.area = (r) => PI * r * r;
exports.circumference = (r) => 2 * PI * r;