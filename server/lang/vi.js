export const transValidation = {
  name_incorrect: "Tên như lồn",
  email_incorrect: "Email phải có dạng example@gmail.com!",
  age_incorrect: "Tuổi hơi ảo nhỉ",
  password_incorrect:
    "Mật khẩu phải chứa ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, chữ số và ký tự đặc biệt.",
};

export const transErrors = {
  account_in_use: "Email này đã được sử dụng.",
  account_removed:
    "Tài khoản này đã bị gỡ khỏi hệ thống, vui lòng liên hệ bộ phận hỗ trợ của chúng tôi.",
  account_not_active:
    "Email này đã được đăng ký nhưng chưa được active, vui lòng kiểm tra email của bạn.",
};

export const transSuccess = {
  userCreated: (userEmail) => {
    return `Tài khoản ${userEmail} đã được tạo vui lòng kiểm tra email của bạn để active tài khoản.`;
  },
  account_actived:
    "Kích hoạt tài khoản thành công, bạn đã có thể đăng nhập ứng dụng.",
};

export const transMail = {
  subject: "Vocabb: Xác nhận kích hoạt tài khoản.",
  template: (linkVerify) => {
    return `
    <h2>Bạn nhận được email này vì đã đăng  ký tài khoản trên ứng dụng Vocab.</h2>
    <h3>Vui lòng click vào liên kết bên dưới để xác nhận kích hoạt tài khoản.</h3>
    <h3><a href="${linkVerify}" target="blank">${linkVerify}</a></h3>
    <h4>Nếu tin rằng đây là nhầm lẫn, hãy bỏ qua nó. Trân trọng</h4>`;
  },
  send_failed:
    "Có lỗi trong quá trình gửi email, vui lòng liên hệ bộ phận hỗ trợ.",
};
