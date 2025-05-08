export const validate = (name, value, values = {}) => {
  switch (name) {
    case "username":
      return /^[a-zA-Z0-9가-힣]{2,8}$/.test(value)
        ? ""
        : "이름은 2~8자의 한글, 영문, 숫자만 사용할 수 있습니다.";
    case "email":
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ? ""
        : "올바른 이메일 형식을 입력하세요.";
    case "password":
      return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{1,}$/.test(value)
        ? ""
        : "비밀번호는 영어 + 숫자 조합이어야 합니다.";
    case "confirmPassword":
      return value === values.password ? "" : "비밀번호가 일치하지 않습니다.";
    default:
      return "";
  }
};
