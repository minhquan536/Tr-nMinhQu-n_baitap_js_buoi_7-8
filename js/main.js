
//get input
function getArray() {
    var array1 = Number(document.getElementById("array1").value);
    var array2 = Number(document.getElementById("array2").value);
    var array3 = Number(document.getElementById("array3").value);
    var array4 = Number(document.getElementById("array4").value);
    var array5 = Number(document.getElementById("array5").value);
    var array6 = Number(document.getElementById("array6").value);


    var allArray = [array1, array2, array3, array4, array5, array6];
    return allArray;
    // document.getElementById("txt__thu").innerHTML = congthuc1(allArray);
    // document.getElementById("txt__demsoduong").innerHTML = demSoDuong(allArray);
}
console.log(getArray);
//tinh tong
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
    var ar = getArray();
    //tinh toan
    var result = sum(ar);
    //out put
    document.getElementById("txt__thu").innerHTML = result;
}

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
    // lay mang
    var ar = getArray();
    // tinh toan
    var demSoLuong = demSoDuong(ar);
    document.getElementById("txt__demsoduong").innerHTML = demSoLuong;
}

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
    var ar = getArray();
    var min = timMin(ar)
    document.getElementById("txt__min").innerHTML = min;
}


function timMinDuong(allArray) {
    var minduong = allArray[0];
    for (let i = 0; i < allArray.length; i++) {
        if (minduong > allArray[i] && allArray > 0) {
            minduong = allArray[i];
        }
    }
    return minduong;
}
function congthuc4() {
    var ar = getArray();
    var minduong = timMinDuong(ar)
    document.getElementById("txt__minduong").innerHTML = minduong;
}

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
    // !sai
    // if (allArray[] % 2 == 0) {
    //     for (let i = 0; i < allArray.length; i++) {
    //         if (allArray[i] % 2 == 0) {
    //             chan = allArray[i];
    //         }
    //     }
    // } else {
    //     for (let i = 0; i < allArray.length; i++) {
    //         if (allArray[i] % 2 != 0) {
    //             chan = -1;
    //         }
    //     }
    // }

    return chan;
}
function congthuc5() {
    var ar = getArray();
    var sochan = timchan(ar)
    document.getElementById("txt__sochan").innerHTML = sochan;
}

function sapXepTang() {
    // copy mảng ban đầu => mảng copy => sắp xếp ở mảng copy
    //TODO sort: tăng dần
    //TODO reverse: giảm dần
    var scoreListcopy = getArray();
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
    document.getElementById("txt__sapxep").innerHTML = sapXepTang();
}


// function soNguyenTo(allArray) {
//     var soNT = allArray[0];
//     for (let i = 0; i < allArray.length; i++) {
//         if (allArray[i]%allArray[i] == 0 && allArray[i] > 1) {
//             soNT = 0;
//         }
//         soNT++
//         return soNT;
//     } 
// }
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
        i++;
    }

    return flag;
}
function arnho() {
    var m = 0;
    var ar = getArray();
    /*Tìm và liệt kê các số nguyên tố trong mảng*/
    for (let i = 0; i < ar.length; i++) {
        if (isprime(ar[i]) == 1){return m=ar[i]} ;
    }
}
// let array = [0,1,2,3,4,5,6,7,8,9,10];



function congthuc8() {
    var ar = arnho();
    var sochan = isprime(ar)
    document.getElementById("txt__soNT").innerHTML = ar;
}


function soAm() {

    var index = 0;
    var ar = getArray();
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] < 0) {
            index++;
        }
    }
    return index;
    
}
function soDuong() {
    var index = 0;
    var ar = getArray();
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] >= 0) {
            index++;
        }
    }
    return index;
}

function congthuc10() {
    if (soAm() < soDuong()) {
        document.getElementById("txt__sosanh").innerHTML = "số âm: " + soAm() + "< số dương:" + soDuong();
    }
    else if (soAm() > soDuong()) {
        document.getElementById("txt__sosanh").innerHTML = "số âm: " + soAm() + "> số dương:" + soDuong();
    }
}


