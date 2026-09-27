/*
PHÂN TÍCH:

1. Duyệt từng ký tự trong chuỗi "MSLXTMM".

2. Nếu gặp "X":
   Dùng continue để bỏ qua món bị hủy và tiếp tục xét món tiếp theo.

3. Nếu món hợp lệ:
   Tính tiền theo size hoặc topping và tăng số món hợp lệ lên 1.

4. Khi số món hợp lệ đạt 4:
   Dùng break để dừng vòng lặp vì khay đã đầy.

5. Sau khi tính tổng tiền:
   Nếu là thành viên Vàng thì giảm 10% trên tổng hóa đơn.
*/

const priceS = 30000;
const priceM = 36000;
const priceL = 40000;
const priceT = 8000;

const order = "MSLXTMM";
const isGoldMember = true;

let totalBill = 0;
let validItemCount = 0;

for (let i = 0; i < order.length; i++) {
  const currentItem = order[i];

  if (currentItem === "X") {
    continue;
  }

  if (currentItem === "S") {
    totalBill += priceS;
  } else if (currentItem === "M") {
    totalBill += priceM;
  } else if (currentItem === "L") {
    totalBill += priceL;
  } else if (currentItem === "T") {
    totalBill += priceT;
  }

  validItemCount++;

  if (validItemCount === 4) {
    break;
  }
}

const discount = isGoldMember ? totalBill * 0.1 : 0;
const finalBill = totalBill - discount;

console.log("=== HÓA ĐƠN HIGHLANDS COFFEE ===");
console.log("Chuỗi gọi món:", order);
console.log("Số món hợp lệ:", validItemCount);
console.log("Tổng tiền trước giảm:", totalBill, "VNĐ");
console.log("Giảm giá:", discount, "VNĐ");
console.log("Tổng thanh toán:", finalBill, "VNĐ");