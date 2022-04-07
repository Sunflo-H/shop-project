import React from "react";

const SignUp = () => {
    return (
        <div class="wrapper">
            <header>
                <span>POMODORO</span>
            </header>
            <main>
                <div class="input-container">
                    <label for="input-id">아이디</label>
                    <input type="text" id="input-id" name="id" required />
                        <span class="warning hidden"> 아이디를 입력해주세요</span>
                </div>
                <div class="input-container">
                    <label for="input-password">비밀번호</label>
                    <input type="password" id="input-password" name="password" required />
                        <span class="warning hidden"> 비밀번호를 입력해주세요</span>
                </div>
                <div class="input-container">
                    <label for="input-password-reconfirm">비밀번호 재확인</label>
                    <input type="password" id="input-password-reconfirm" name="password-reconfirm" required />
                        <span class="warning hidden"> 비밀번호가 다릅니다.</span>
                </div>
                <div class="input-container">
                    <label for="input-nickname">닉네임</label>
                    <input type="text" id="input-nickname" name="nickname" required />
                        <span class="warning hidden"> 닉네임을 입력해주세요</span>
                </div>
                <div class="input-container">
                    <label for="input-email">이메일</label>
                    <input type="email" id="input-email" name="email" required />
                        <span class="warning hidden"> 이메일을 입력해주세요</span>
                </div>
                <button>가입하기</button>
            </main>
        </div>
    )
}

export default SignUp;