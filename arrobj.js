var man = [
    {
        id: 1,
        name: "Áo Polo Cổ Cao Phối Viền Local Brand Karants",
        code: "k01",
        price: "250.000",
        image: "https://product.hstatic.net/200000654527/product/59__6__7e7722b41b1b441a9376ee7a36610274_master.png",
    },
    {
        id: 2,
        name: "Mũ Lưỡi Trai Nam",
        code: "k02",
        price: "130.000",
        image: "https://product.hstatic.net/200000654527/product/z4433744715082_680d7a15e1d0bbced80bf1f35dfd6581_a57fdd6169934a86ba07377adf0176a0_master.jpg",
    },
    {
        id: 3,
        name: "Quần Jean Dài Ống Suông  ",
        code: "k03",
        price: "190.000",
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lopmjwh58qa349",
    },
    {
        id: 4,
        name: "Áo Polo Karants Form Oversize",
        code: "k04",
        price: "259.000",
        image: "https://product.hstatic.net/200000654527/product/kr55d_eea0832b9d60467fbf486ca145bfe0d4_master.png",
    },
];

var woment = [
    {
        id: 1,
        name: "Hoodie Pink ",
        code: "k05",
        price: "300.000",
        image: "https://product.hstatic.net/200000312481/product/upload_eb47efee7b764439919807c3276c67c2_master.jpg",
    },
    {
        id:2,
        name: "Quần Dài Lưng Cao Ống Rộng Vải chiffon",
        code: "k06",
        price: "299.000",
        image: "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lqbkcoxmomd17b",
    },
    {
        id:3,
        name: "Tất nữ cổ cao trơn  ",
        code: "k07",
        price: "10.000",
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ls3ky8j5nfrt68",
        },
    {
        id:4,
        name: "Mũ xô yeya có vành ngắn vải len",
        code: "k08",
        price: "250.000",
        image: "https://cf.shopee.vn/file/sg-11134201-22110-6sweh4yn2gkv12",
    },
];

function listProducts() {
    for (let i = 0; i <= man.length - 1; i++) {
        var demo = '<div class="col-3">';
        demo += '<div class="card" style="width: 18rem;">';
        demo += '<img src="' + man[i].image + '" class="card-img-top" style="height: 270px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">' + man[i].name + '</h5>';
        demo += '<p class="card-text">' + man[i].price + '</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="order()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("men").innerHTML += demo;
    }

    for (let i = 0; i <= woment.length - 1; i++) {
        var demo = '<div class="col-3">';
        demo += '<div class="card" style="width: 18rem;">';
        demo += '<img src="' + woment[i].image + '" class="card-img-top" style="height: 270px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">' + woment[i].name + '</h5>';
        demo += '<p class="card-text">' + woment[i].price + '</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="order()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("woment").innerHTML += demo;
    }
}