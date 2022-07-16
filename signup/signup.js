var email = document.querySelector('#email').value;
const signupBtn = document.querySelector('#signup');

const emailCheckContainer = document.querySelector('.email_check');

const topSignInBtn = document.querySelector('#top_signin');
const topSignUpBtn = document.querySelector('#top_signun');

topSignInBtn.onclick = () => {
    window.location.href = '/login';
}
topSignUpBtn.onclick = () => {
    window.location.href = '/signup';
}

var emailCheckFlag = true;
signupBtn.onclick = () => {
    alert(email);

}
function emailCheck(email) {
    alert(nickname + " " + email + " " + password);
    $.ajax({

        type: "post",
        // type 동적으로 처리하기
        url: `/emailcheck?email=${email}`,
        dataType: "text",
        success: function (data) {
            alert(data);
            emailCheckFlag = JSON.parse(data);
            isMadCamp(emailCheckFlag);
        },
        error: function () {
            alert('board 비동기 처리오류');
        }

    });

}
function isMadCamp(flag) {
    if (flag) {
        emailCheckContainer.style.display = 'block';
    }
    else {
        alert("이메일이 유효하지 않습니다.");
    }
}


const commitBtn = document.querySelector('#signupBtn');

commitBtn.onclick = () => {
    const nickname1 = document.querySelector('#nickname').value;
    const email1 = document.querySelector('#email').value;
    const password1 = document.querySelector('#password').value;
    const checkNum1 = document.querySelector('#email_check_text').value;
    SignUpCommit(nickname1, email1, password1, checkNum1);
}
function SignUpCommit(nickname, email, password, checkNum) {
    alert(nickname + " " + email + " " + password + " " + checkNum);
    $.ajax({

        type: "post",
        // type 동적으로 처리하기
        url: `/auth/emailcheck/key?username=${email}&password=${password}&nickname=${nickname}&inputCode=${checkNum}`,
        dataType: "text",
        success: function (data) {
            alert("회원가입 결과 : " + data);
            signupCheck = JSON.parse(data);
            if (signupCheck) {
                alert("회원가입에 성공하였습니다.");
                window.location.href = '/login';
            } else {
                alert("인증번호가 틀렸습니다.");
            }
        },
        error: function () {
            alert('board 비동기 처리오류');
        }

    });

}