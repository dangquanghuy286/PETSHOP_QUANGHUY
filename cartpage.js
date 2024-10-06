const product =[
    // Danh sách sản phẩm với ảnh, tên và giá bằng VND
    {
        image: '/Img/latest_product-1.webp',
        title: 'Lồng Chim Trắng/Đen',
        price: 270000
    },
    {
        image: '/Img/latest_product-2.webp',
        title: 'Thực Phẩm Cho Chim',
        price: 180000
    },
    {
        image: '/Img/latest_product-3.webp',
        title: 'Thực Phẩm Cho Mèo',
        price: 250000
    },
    {
        image: '/Img/latest_product-4.webp',
        title: 'Thực Phẩm Cho Chim',
        price: 135000
    },
]

// Tạo mảng categories không trùng lặp các sản phẩm
const categories = [...new Set(product.map((item)=>{return item}))];

// Hàm xóa sản phẩm khỏi giỏ hàng
function delElement(a){
    categories.splice(a, 1); // Xóa sản phẩm tại vị trí 'a'
    displaycart(); // Cập nhật lại giỏ hàng sau khi xóa
}


// Hàm hiển thị giỏ hàng và tính tổng tiền
function displaycart(c){
    let j = 0, total = 0; // Khởi tạo biến đếm và biến tổng tiền
    // Hiển thị số lượng sản phẩm trong giỏ
    document.getElementById("itemA").innerHTML = categories.length + " sản phẩm";
    document.getElementById("itemB").innerHTML = categories.length + " sản phẩm";

    // Nếu giỏ hàng trống, hiển thị thông báo
    if(categories.length == 0){
        document.getElementById("root").innerHTML = "Giỏ hàng của bạn đang trống";
        document.getElementById("totalA").innerHTML = "0 VND"; // Đặt tổng tiền bằng 0
        document.getElementById("totalB").innerHTML = "0 VND";
    } 
    else {
        // Hiển thị danh sách sản phẩm trong giỏ hàng
        document.getElementById("root").innerHTML = categories.map((items)=>{
            let {image, title, price} = items; // Lấy dữ liệu sản phẩm
            total = total + price; // Cộng dồn giá trị sản phẩm vào tổng tiền
            document.getElementById("totalA").innerHTML = total.toLocaleString('vi-VN') + " VND"; // Hiển thị tổng tiền

            // Kiểm tra xem có áp dụng mã giảm giá hay không
            if(c == 50000){
                document.getElementById("totalB").innerHTML = (total - c).toLocaleString('vi-VN') + " VND"; // Hiển thị tổng tiền sau khi giảm giá
            } else {
                document.getElementById("totalB").innerHTML = total.toLocaleString('vi-VN') + " VND"; // Hiển thị tổng tiền mà không giảm giá
            }

            // Trả về HTML để hiển thị từng sản phẩm trong giỏ hàng
            return (
                `<tr>
                    <td width="150"><div class="img-box"><img class="img" src=${image}></div></td>
                    <td width="360"><p style='font-size:15px;'>${title}</p></td>
                    <td width="150"><h2 style='font-size:15px; color:red;'>${price.toLocaleString('vi-VN')} VND</h2></td>
                    <td width="70">` + "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></td>" +
                `</tr>`
            );
        }).join(''); // Kết hợp các chuỗi HTML của sản phẩm lại với nhau
    }
}

displaycart(); // Gọi hàm hiển thị giỏ hàng khi trang được tải
