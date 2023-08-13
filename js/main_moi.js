var scoreList = [];
function themVaoMang() {
    var them = document.getElementById("array1").value;
    var them2 = [them];
    for (var i = 0; i < them2.length; i++) {
        var score = Number(them2[i]);
        //thêm phần tử vào mảng
        scoreList.push(score);
    }

    document.getElementById("txt__thu").innerHTML = scoreList;
}
console.log(scoreList);

// ! tính tổng các số dương trong mảng
function sum(array) {
    var all = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            all += Number(array[i]);
        }
    }
    // trả vè kêt quả sau khi xử lý với tham số array
    return all
}
function congthuc1() {
    //lay mảng
    //tinh toan
    var result = sum(scoreList);
    //out put
    document.getElementById("txt__tong").innerHTML = result;
}

// ! đếm tổng các số dương trong mảng
function demSoDuong(allArray) {
    var count = 0;
    for (var i = 0; i < allArray.length; i++) {
        if (allArray[i] >= 0) {
            count++;
        }
    }
    return count;
}
function congthuc2() {
    // tinh toan
    var demSoLuong = demSoDuong(scoreList);
    document.getElementById("txt__demSoDuong").innerHTML = demSoLuong;
}

// ! tìm Min
function timMin(allArray) {
    var min = allArray[0];
    for (let i = 0; i < allArray.length; i++) {
        if (min > allArray[i]) {
            min = allArray[i];
        }
    }
    return min;
}

function congthuc3() {
    var min = timMin(scoreList)
    document.getElementById("txt__min").innerHTML = min;
}

// ! tìm min dương nhỏ nhất
function timMinDuong(allArray) {
    var minduong = allArray[0];
    for (let i = 0; i < allArray.length; i++) {
        if (minduong > allArray[i] && allArray[i] >= 0) {
            minduong = allArray[i];
        }
    }
    return minduong;
}
function congthuc4() {
    var minduong = timMinDuong(scoreList)
    document.getElementById("txt__minDuong").innerHTML = minduong;
}

// !tìm số chẵn cuối cùng
function timchan(allArray) {
    // Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.
    // mặc định nó không có đã là -1
    // đau đầu
    var chan = -1;
    for (let i = 0; i < allArray.length; i++) {
        if (allArray[i] % 2 == 0) {
            chan = allArray[i];
        }
    }
    return chan;
}
function congthuc5() {
    var sochan = timchan(scoreList)
    document.getElementById("txt__soChan").innerHTML = sochan;
}

// !sắp xếp mảng tăng dần
function sapXepTang() {
    // copy mảng ban đầu => mảng copy => sắp xếp ở mảng copy
    //TODO sort: tăng dần
    //TODO reverse: giảm dần
    var scoreListcopy = scoreList;
    // for (let i = 0; i < scoreList.length; i++) {
    //     scoreListcopy.push(scoreList[i]);

    // }

    scoreListcopy.sort(function (a, b) {
        return a - b;
    })
    return scoreListcopy; // nhớ trả giá trị để lấy chứ ko nó chỉ trả về a,b; chứ ko trả về biến chính

    // console.log(scoreList);
}
function congthuc7() {
    document.getElementById("txt__sapXep").innerHTML = sapXepTang();
}

// ! tìm số nguyên tố
function isprime(n) {
    //flag = 0 => không phải số nguyên tố
    //flag = 1 => số nguyên tố

    let flag = 1;



    if (n < 2) return flag = 0; /*Số nhỏ hơn 2 không phải số nguyên tố => trả về 0*/

    /*Sử dụng vòng lặp while để kiểm tra có tồn tại ước số nào khác không*/
    let i = 2;
    while (i < n) {
        if (n % i == 0) {
            flag = 0;
            break; /*Chỉ cần tìm thấy 1 ước số là đủ và thoát vòng lặp*/
        }
        // else{
        //     flag=-1;
        // }
        i++;
    }

    return flag;
}
function arnho() {
    var scoreList2 = [];
    for (let i = 0; i < scoreList.length; i++) {
        scoreList2.push(scoreList[i]);
    }
    var m = 0;
    var ar = scoreList2;
    /*Tìm và liệt kê các số nguyên tố trong mảng*/
    for (let i = 0; i < ar.length; i++) {
        if (isprime(ar[i]) == 1){
             return m = ar[i]
        }
    }
}
// let array = [0,1,2,3,4,5,6,7,8,9,10];

function congthuc8() {
    var ar = arnho();
    document.getElementById("txt__soNT").innerHTML = ar;
}

function soAm() {
    var index = 0;
    var ar = scoreList;
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] < 0) {
            index++;
        }
    }
    return index;
}
function soDuong() {
    var index = 0;
    var ar = scoreList;
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] >= 0) {
            index++;
        }
    }
    return index;
}

function congthuc10() {
    if (soAm() < soDuong()) {
        document.getElementById("txt__soSanh").innerHTML = "số âm: " + soAm() + "< số dương:" + soDuong();
    }
    else if (soAm() > soDuong()) {
        document.getElementById("txt__soSanh").innerHTML = "số âm: " + soAm() + "> số dương:" + soDuong();
    }
}


//! đổi chổ
/**
 * lấy giá ô đổi 1 và 2
 * cc1 = scoreList[ô1];
 * cc2 = scoreList[ô2];
 * cc1 = aa;
 * aa = cc2;
 * cc2 = cc1;
 */
function hoanDoi() {
    var arraydoi = scoreList;
    // console.log(arraydoi);
    var doi1 = document.getElementById("array2").value;//vị trí
    // console.log(doi1);
    var doi2 = document.getElementById("array3").value;
    // console.log(doi2);
    var cc1 = arraydoi[doi1];//giá trị
    // console.log(cc1);
    var cc2 = arraydoi[doi2];
    // console.log(cc2);
    // var aa;
    // var aa= cc1;
    // console.log("vi tri aa "+aa);
    // var cc1 = cc2;
    // console.log("vi tri1 "+cc1);
    // var cc2 = aa;
    // console.log("vi tri2 " +cc2);
    for (let i = 0; i <= arraydoi.length; i++) {
        // if (arraydoi[i] == doi1) {
            arraydoi[doi1] = cc2;
            arraydoi[doi2] = cc1;
        // }else if (arraydoi[i] == doi2) {
        //     arraydoi[doi1] = cc1;
        //     arraydoi[doi2] = cc2;
        // }
    }
    return arraydoi;
    // console.log(arraydoi)
    // return arraydoi;
    // for (let i = 0; i < arraydoi.length; i++) {
    //     if (arraydoi[doi1] == i) {
    //         cc1 = cc2;
    //     } else if(arraydoi[doi2] == i){
    //         cc2 = cc1
    //     }
    //     return arraydoi;
    // }
    // scoreList.fill(cc1,cc2);
}
function congthuc6() {
    document.getElementById("txt__doi").innerHTML = hoanDoi() ;
}


var scoreList2 = [];
function themVaoMang2() {
    var them = document.getElementById("array4").value;
    var them2 = [them];
    for (var i = 0; i < them2.length; i++) {
        var score = Number(them2[i]);
        //thêm phần tử vào mảng
        scoreList2.push(score);
    }

    document.getElementById("txt__thu1").innerHTML = scoreList2;
}
console.log(scoreList2);
function demSoNguyen(array) {
    var all=0;
    for (let i = 0; i <= array.length; i++) {
        if (Number.isInteger(array[i])) {
            all++;
        }
    }
    console.log(all)
    return all;
}
function congThuc9() {
    var dem = demSoNguyen(scoreList2);
    document.getElementById("txt__demSoNguyen").innerHTML = dem;
}