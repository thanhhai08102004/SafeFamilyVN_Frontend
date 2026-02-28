import { useState } from "react";
import { LuArrowDown, LuArrowUp } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";
import { AiOutlineExclamationCircle } from "react-icons/ai";

export default function LegalInfoSection() {
  const [open, setOpen] = useState(null);

  const accordionData = [
    {
      title: "Các hành vi bị nghiêm cấm",
      contents: [
        {
          label: "Thực hiện hành vi bạo lực gia đình:",
          desc: " Bao gồm bạo lực thể chất (đánh đập, hành hạ), bạo lực tinh thần (lăng mạ, bôi nhọ, kiểm soát), bạo lực tình dục (cưỡng ép quan hệ) và bạo lực kinh tế (chiếm đoạt tài sản, kiểm soát tài chính).",
        },
        {
          label: "Kích động, xúi giục, lôi kéo, dụ dỗ, giúp sức, cưỡng ép:",
          desc: " Người khác thực hiện hành vi bạo lực gia đình.",
        },
        {
          label: "Trả thù, đe dọa trả thù:",
          desc: " Đối với người giúp đỡ nạn nhân, người phát hiện, báo tin, tố giác hành vi bạo lực.",
        },
        {
          label: "Cản trở việc phát hiện, xử lý:",
          desc: " Bao gồm các hành vi bao che, giấu giếm, báo tin giả, cung cấp thông tin sai sự thật hoặc trốn tránh việc xử lý y tế, tư pháp.",
        },
        {
          label: "Lợi dụng việc phòng, chống bạo lực:",
          desc: " Để thực hiện các hành vi trái pháp luật hoặc trục lợi cá nhân.",
        },
      ],
    },

    {
      title: "Biện pháp ngăn chặn khẩn cấp",
      contents: [
        {
          label: "Buộc chấm dứt ngay hành vi bạo lực:",
          desc: " Áp dụng ngay tại chỗ để bảo vệ tính mạng, sức khỏe của nạn nhân.",
        },
        {
          label: "Yêu cầu người có hành vi bạo lực đến trụ sở Công an cấp xã:",
          desc: " Nơi xảy ra hành vi bạo lực để làm rõ sự việc và ngăn chặn rủi ro tiếp diễn.",
        },
        {
          label: "Cấm tiếp xúc (Quyết định cách ly):",
          desc: " Chủ tịch UBND cấp xã hoặc Tòa án có quyền ra quyết định cấm người có hành vi bạo lực đến gần nạn nhân (khoảng cách dưới 50m) hoặc sử dụng phương tiện thông tin để đe dọa, làm phiền.",
        },
        {
          label: "Bố trí nơi tạm lánh và bảo vệ:",
          desc: " Đưa nạn nhân đến cơ sở y tế, nơi tạm lánh an toàn và áp dụng các biện pháp bảo vệ sức khỏe, tính mạng, danh dự.",
        },
        {
          label: "Tạm giữ người:",
          desc: " Áp dụng theo thủ tục hành chính hoặc hình sự đối với người có hành vi bạo lực nếu có dấu hiệu tội phạm hoặc chống người thi hành công vụ.",
        },
      ],
    },

    {
      title: "Trách nhiệm của cộng đồng",
      contents: [
        {
          label: "Phát hiện và báo tin (Tố giác):",
          desc: " Bất kỳ ai khi phát hiện bạo lực gia đình đều có trách nhiệm báo ngay cho cơ quan Công an, UBND cấp xã hoặc Tổng đài điện thoại quốc gia.",
        },
        {
          label: "Can thiệp và ngăn chặn:",
          desc: " Cá nhân có trách nhiệm can thiệp, khuyên ngăn hoặc tìm cách chấm dứt hành vi bạo lực (trong khả năng và phải đảm bảo an toàn cho bản thân).",
        },
        {
          label: "Hỗ trợ nạn nhân:",
          desc: " Cung cấp hoặc hỗ trợ nạn nhân tiếp cận các dịch vụ y tế, nơi tạm lánh, tư vấn tâm lý và trợ giúp pháp lý.",
        },
        {
          label: "Giáo dục và hòa giải:",
          desc: " Tham gia vào các tổ hòa giải ở cơ sở, giáo dục, khuyên răn người có hành vi bạo lực và xây dựng gia đình văn hóa tại khu dân cư.",
        },
        {
          label: "Bảo mật thông tin:",
          desc: " Tôn trọng và bảo vệ bí mật đời tư, thông tin cá nhân của người bị bạo lực gia đình.",
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-16">
          {/* HERO */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              Thông Tin Pháp Luật
            </h1>
            <p className="mt-4 text-gray-600 max-w-2xl text-lg">
              Tìm hiểu về quyền lợi, nghĩa vụ và các quy định pháp luật hiện
              hành về phòng, chống bạo lực gia đình tại Việt Nam.
            </p>
          </div>

          {/* ACCORDION */}
          <div>
            <h2 className="font-semibold mb-6 text-2xl">
              Tóm tắt Luật Phòng, chống bạo lực gia đình (2022)
            </h2>

            <div className="space-y-4">
              {accordionData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setOpen(open === index ? null : index)}
                    className="w-full text-left px-6 py-4 font-medium flex justify-between items-center hover:bg-gray-50 transition"
                  >
                    {item.title}
                    {open === index ? <LuArrowUp /> : <LuArrowDown />}
                  </button>

                  {open === index && (
                    <ul className="list-disc list-inside space-y-3 px-6 pb-5 text-gray-600 text-sm">
                      {item.contents.map((c, i) => (
                        <li key={i}>
                          <span className="font-semibold text-gray-900">
                            {c.label}
                          </span>
                          {c.desc}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHTS & OBLIGATIONS */}
          <div>
            <h2 className="font-semibold text-2xl mb-8">
              Quyền và Nghĩa vụ của Người bị bạo lực
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Quyền lợi */}
              <div className="bg-white p-6 rounded-2xl border shadow-sm">
                <h3 className="font-semibold mb-6 text-blue-600 text-lg">
                  Quyền lợi
                </h3>
                <ul className="space-y-4 text-gray-700 text-sm">
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-1" />
                    <span>Yêu cầu cơ quan bảo vệ an toàn tính mạng.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-1" />
                    <span>Được cung cấp dịch vụ y tế, tư vấn tâm lý.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-1" />
                    <span>Yêu cầu bồi thường thiệt hại.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-1" />
                    <span>Được bảo mật thông tin cá nhân.</span>
                  </li>
                </ul>
              </div>

              {/* Nghĩa vụ */}
              <div className="bg-white p-6 rounded-2xl border shadow-sm">
                <h3 className="font-semibold mb-6 text-blue-600 text-lg">
                  Nghĩa vụ
                </h3>
                <ul className="space-y-4 text-gray-700 text-sm">
                  <li className="flex items-start gap-3">
                    <AiOutlineExclamationCircle className="text-red-500 mt-1" />
                    <span>Cung cấp thông tin trung thực.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AiOutlineExclamationCircle className="text-red-500 mt-1" />
                    <span>Phối hợp với cơ quan chức năng.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AiOutlineExclamationCircle className="text-red-500 mt-1" />
                    <span>Tuân thủ quy định tại nơi tạm lánh.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* REPORT GUIDE */}
          <div>
            <h2 className="font-semibold text-3xl mb-10">
              Hướng dẫn Tố cáo & Phản hồi
            </h2>

            <div className="relative border-l-2 border-blue-500 space-y-12 pl-0 ">
              {[
                {
                  step: "BƯỚC 1",
                  title: "Thu thập bằng chứng",
                  desc: "Lưu giữ hình ảnh vết thương, ghi âm, tin nhắn đe dọa hoặc lời khai từ người chứng kiến xung quanh.",
                },
                {
                  step: "BƯỚC 2",
                  title: "Liên hệ cơ quan chức năng",
                  desc: "Gọi 113, 111 hoặc đến Công an/UBND xã gần nhất. Bạn có thể yêu cầu được bảo vệ bí mật danh tính.",
                },
                {
                  step: "BƯỚC 3",
                  title: "Lập biên bản & Giám định",
                  desc: "Yêu cầu lập biên bản ghi nhận sự việc. Nếu có thương tích, yêu cầu được đi giám định y khoa ngay lập tức.",
                },
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[2px] top-2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>

                  <div className="bg-white rounded-2xl p-6 shadow-md">
                    <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-lg mb-3">
                      {item.step}
                    </span>
                    <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-2xl border shadow-sm">
            <h3 className="font-semibold mb-4">Văn bản Pháp lý liên quan</h3>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>Luật Phòng chống bạo lực gia đình 2022</li>
              <li>Nghị định 76/2023/NĐ-CP</li>
              <li>Thông tư liên tịch bảo vệ nạn nhân</li>
              <li>Quy trình xử lý khẩn cấp cấp xã</li>
            </ul>

            <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Xem tất cả tài liệu
            </button>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-2xl shadow-lg">
            <h3 className="font-semibold text-lg">Cần hỗ trợ tư vấn luật?</h3>
            <button className="mt-20 w-full bg-white text-blue-700 py-2 rounded-lg font-medium hover:bg-gray-100 transition">
              Chat với AI
            </button>
          </div>

          <div className="bg-white p-6 rounded-2xl border shadow-sm">
            <h3 className="font-semibold mb-4">Đường dây nóng</h3>

            <div className="space-y-3 text-sm">
              <div className="bg-gray-100 p-4 rounded-xl flex justify-between">
                <span>Tổng đài quốc gia</span>
                <span className="font-semibold text-blue-600">111</span>
              </div>

              <div className="bg-gray-100 p-4 rounded-xl flex justify-between">
                <span>Công an (Khẩn cấp)</span>
                <span className="font-semibold text-red-600">113</span>
              </div>

              <div className="bg-gray-100 p-4 rounded-xl flex justify-between">
                <span>Ngôi nhà Bình yên</span>
                <span className="font-semibold text-blue-600">
                  1900 96 96 80
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
