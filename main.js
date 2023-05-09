// cmt 1 dòng 
/* cmt 1 đoạn OR bôi đen dùng ctr + / */
// var fullName = 'Doan Thi Diem';
// var age = 20; 
// alert(fullName); 
// alert(age); 
// console.log(fullName); 
// confirm('Xác nhận bạn đủ tuổi!'); 
// promp('Xác nhận đủ tuổi');  
// setTimeout(function(){  // chỉ chạy 1 lần 
//     alert('Thông báo!')
// }, 5000) // Khoảng time để thực thi 
// setInterval(function(){ // cách 1s lại chạy 1 lần 
//     console.log('Thông báo!')
// }, 1000)
// var a = 3;
// var b = 4;
// if ( a > b ){
//    console.log('Đúng'); 
// }
// else
//    console.log('sai'); 
// var ham = {
//    nam: "Diem",
//    age: 21,
//    address: 'Nam Định'
// };
// console.log('Information',ham);
// function getIt(){
//    var mystring='';
//    for ( var i of arguments){
//       mystring += `${i}-`
//    }
//    console.log(mystring);
// }
// getIt('Diem','Ha','Linh'); 
// In ra các số từ 100 về 0 , mỗi số cách nhau 5 đơn vị 
// document.write('Hello world');
// var heading_Node = document.getElementsByClassName("job");
// console.log(heading_Node); 
// var change_heading = document.querySelector('h1');
// change_heading.id = ("head"); 
// change_heading.setAttribute("class","head-test"); 
// console.log(change_heading.getAttribute("class")); 
// change_heading.title = "head-test";
// alert(change_heading.setAttribute());

//                                                    Hỏi anh Phúc 
// var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']
// function render(courses) {
//     var newCourse = courses.map(function(course){
//         return `<li>${course}</li>`
//     });
//     var insert_Course = document.querySelector("ul");
//     insert_Course.innerHTML = newCourse.join('');
// }
// console.log(render(courses))
//                                                    Hỏi anh phúc 
// var box_element = document.querySelector('h2');
// setInterval(() => {
//     box_element.classList.toggle('red'); // Sao red k hiện màu lên vì toggle chỉ làm nhiệm vụ thêm or bỏ class 
// }, 1000); 
//                       JSON 
// var json = '["Bem","Bum"]';
// var json1 = '{"name":"Mickey","age":9}';
// console.log(typeof JSON.parse(json1));
// console.log(typeof JSON.stringify("MinhHee"));
//             Promise 
/* var p = new Promise(
    function(resolve, reject){
       //resolve('Sucessfully!-!');
       reject('Not sucessfully!-!')
    }
);
p 
   .then(function(value){
       console.log(value)
   })
   .catch(function(value){
       console.log("Fail : ", value)
   })
   .finally(function(value){
       console.log("Ending!")
   }) */
//              Promise ( chain )
/* function notHell(value) {
    return new Promise(function (resolve) {
        resolve(value);
    });
}
notHell(1)
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        console.log(value + 1);
    }); */ 
//          Example Promise 
var users = [
    {
        id: 1,
        name: "Halen"
    },
    {
        id: 2,
        name: "Michanel"
    },
    {
        id: 3,
        name: "Laken"
    }
    ,{
        id: 4,
        name: "k"
    }
]
var comments = [
    {
        id: 1,
        user_id: 2,
        content: "Hey, are you going to go shopping with me tonight?"
    },
    {
        id: 3,
        user_id: 4,
        content: "I am not sure that." 
    }
]
// Lấy comments
// Từ comments lấy ra user_id 
// Từ user_id lấy ra user tương ứng 
function getComments() {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(comments); 
        }, 1000); 
    })
}
getComments() // Chỉ lấy những ai có comment 
   .then(function(comments){
        var list_user_id = comments.map(function(p){ // map => lọc ra mảng 
            return p.user_id;
        });
        return getUsersByIds(list_user_id)
            .then(function(users){
                    return {
                        users: users,
                        comments: comments  
                    }; 
            })
   })
   .then(function(data){
       var comment_box = document.getElementById('comment-box');
       var html = ' ';
       data.comments.forEach(function(comment){
           var user = data.users.find(function(user){
               return user.id === comment.user_id; 
           });
           if(user){
               html += `<li>${user.name}: ${comment.content}</li>`;
            }
       });
       comment_box.innerHTML = html; 
   });
function getUsersByIds(u){
    return new Promise (function(resolve){
        var result = users.filter(function(user){
            return u.includes(user.id);
        });
        setTimeout(function(){
            resolve(result);
        }, 1000); 
    })
}
//           Fetch()
/* var postAPI = "https://jsonplaceholder.typicode.com/posts";
fetch(postAPI)
    .then(function(respond){
        return respond.json(); // chuyển từ json ( JSON.Parse) sang javascript types 
    })
    .then(function(post){
        var htmls = post.map(function(value){
            return `
                <h2>${value.title}</h2>
                <p>${value.body}</p> 
            `;
        });
        var html = htmls.join('');
        document.getElementById('comment-box').innerHTML = html;
    })
    .catch(function(err){
        alert('Error!!')
    })*/
//         Tagged template literals => Hỏi anh P về hàm reduce 
function hightLight([first,...strings], ...value){
    return value.reduce(
        (accumulator, currentValue, index) => [...accumulator,`<span>${currentValue}</span>`,strings.shift()],
        [first] 
    )
    .join('');
}
var brand = 'MindX';
var course = 'PHP';
const html = hightLight`Học lập trình ${course} tại ${brand} !!`;
console.log(html);

