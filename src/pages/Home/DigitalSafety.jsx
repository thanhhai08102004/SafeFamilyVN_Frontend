import React from "react";

function DigitalSafety() {
  return (
    <section className="bg-gray-200 py-24 mt-10">
      <div className="max-w-350 mx-auto bg-blue-50 p-20 rounded-3xl grid grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold leading-tight">
            Dấu vết kỹ thuật số của bạn rất quan trọng
          </h2>

          <p className="mt-6 text-gray-600 leading-7">
            Người gây bạo lực có thể theo dõi thiết bị và hoạt động internet của
            bạn. Để an toàn, hãy sử dụng chế độ ẩn danh hoặc truy cập từ máy
            tính công cộng.
          </p>

          <p className="mt-6 text-blue-600 font-semibold cursor-pointer hover:underline">
            Tìm hiểu thêm về an toàn kỹ thuật số
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="font-semibold text-gray-800">Xóa lịch sử</h3>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              Cách xóa các trang web đã truy cập khỏi lịch sử trình duyệt của
              bạn.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="font-semibold text-gray-800">Chế độ riêng tư</h3>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              Truy cập web mà không lưu lại thông tin đăng nhập hay dữ liệu tạm.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="font-semibold text-gray-800">Quyền riêng tư GPS</h3>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              Tắt theo dõi vị trí trên thiết bị di động của bạn.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="font-semibold text-gray-800">Email an toàn</h3>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              Thiết lập kênh liên lạc bảo mật và riêng tư.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DigitalSafety;
