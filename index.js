

// 공지사항 3개 가져오기 ///////////////////////////////////////
const notiParent = document.querySelector('.noti_list');
let notiItem = ``;
function notiLoad(type, pagenum) {
    $.ajax({

        type: "get",
        // type 동적으로 처리하기
        url: `/home/notification`,
        dataType: "text",
        success: function (data) {
            let notiListObj = JSON.parse(data);
            notiItem += getnotis(notiListObj);
            notiParent.innerHTML = notiItem;
        },
        error: function () {
            alert('noti 비동기 처리오류');
        }

    });

}
function getnotis(notiList) {
    let notiHtml = ``;
    for (let noti of notiList) {
        notiHtml += `
         <ul class="noti_list_ul">
            <a href="/board/${noti.id}" class="noti_list_sub">
                <li class="noti_list_title">${noti.title}</li>
                <li class="noti_list_location">
                    description
                </li>
                <li class="noti_list_time">
                    ${noit.updatedate}
                </li>
            </a>
        </ul>
      `;

    }
    return notiHtml;
}
// 공지사항 3개 ///////////////////////////////////////

// 베스트 3개 가져오기 ///////////////////////////////////////
const bestParent = document.querySelector('.best_list');
let bestItem = ``;

function bestLoad(type, pagenum) {
    $.ajax({

        type: "get",
        // type 동적으로 처리하기
        url: `/home/bestfication`,
        dataType: "text",
        success: function (data) {
            let bestListObj = JSON.parse(data);
            bestItem += getbests(bestListObj);
            bestParent.innerHTML = bestItem;
        },
        error: function () {
            alert('best 비동기 처리오류');
        }

    });

}
function getbests(bestList) {
    let bestHtml = ``;
    for (let best of bestList) {
        bestHtml += `
         <ul class="best_list_ul">
            <a href="/board/${best.id}" class="best_list_title">
                ${best.title}
            </a>
            <div class="best_list_sub">
                <li class="best_list_heart">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="#F40300"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.9447 3.04697C12.5376 1.65101 10.2563 1.65101 8.84926 3.04697L8 4L7.15074 3.04699C5.74368 1.65102 3.46237 1.65102 2.0553 3.04699C0.648234 4.44295 0.648232 6.70626 2.0553 8.10222L7.99998 14L13.9447 8.10221C15.3518 6.70625 15.3518 4.44294 13.9447 3.04697Z"
                            stroke="none" stroke-width="2" stroke-linejoin="round" />
                    </svg>

                    <div>${best.likecnt}</div>
                </li>
                <li class="best_list_comment">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="#007BF7"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1.21799 2.09202C1 2.51984 1 3.0799 1 4.2V8.3C1 9.42011 1 9.98016 1.21799 10.408C1.40973 10.7843 1.71569 11.0903 2.09202 11.282C2.39717 11.4375 2.7696 11.4821 3.36454 11.4949V15L8.87496 11.5L11.8 11.5C12.9201 11.5 13.4802 11.5 13.908 11.282C14.2843 11.0903 14.5903 10.7843 14.782 10.408C15 9.98016 15 9.42011 15 8.3V4.2C15 3.0799 15 2.51984 14.782 2.09202C14.5903 1.71569 14.2843 1.40973 13.908 1.21799C13.4802 1 12.9201 1 11.8 1H4.2C3.0799 1 2.51984 1 2.09202 1.21799C1.71569 1.40973 1.40973 1.71569 1.21799 2.09202Z"
                            stroke="none" stroke-width="2" stroke-linejoin="round" />
                    </svg>

                    <div>${best.commentcnt}</div>
                </li>
                <li class="best_list_name">
                    익명
                </li>
                <li class="best_list_time">
                    ${best.updatedate}
                </li>
            </div>
        </ul>
      `;

    }
    return bestHtml;
}
// 베스트 3개 ///////////////////////////////////////

// 정보게시판 5개 가져오기 ///////////////////////////////////////
const infoParent = document.querySelector('.main_list');
let infoItem = ``;

function infoLoad(type, pagenum) {
    $.ajax({

        type: "get",
        // type 동적으로 처리하기
        url: `/home/info`,
        dataType: "text",
        success: function (data) {
            let infoListObj = JSON.parse(data);
            infoItem += getinfos(infoListObj);
            infoParent.innerHTML = infoItem;
        },
        error: function () {
            alert('info 비동기 처리오류');
        }

    });

}
function getinfos(infoList) {
    let infoHtml = ``;
    for (let info of infoList) {
        infoHtml += `
         <ul class="main_list_ul">
            <a href="/board/${info.id}" class="main_list_title">
                ${info.title}
            </a>
            <div class="main_list_sub">
                <li class="main_list_heart">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="#F40300"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.9447 3.04697C12.5376 1.65101 10.2563 1.65101 8.84926 3.04697L8 4L7.15074 3.04699C5.74368 1.65102 3.46237 1.65102 2.0553 3.04699C0.648234 4.44295 0.648232 6.70626 2.0553 8.10222L7.99998 14L13.9447 8.10221C15.3518 6.70625 15.3518 4.44294 13.9447 3.04697Z"
                            stroke="none" stroke-width="2" stroke-linejoin="round" />
                    </svg>

                    <div>${info.likecnt}</div>
                </li>
                <li class="main_list_comment">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="#007BF7"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1.21799 2.09202C1 2.51984 1 3.0799 1 4.2V8.3C1 9.42011 1 9.98016 1.21799 10.408C1.40973 10.7843 1.71569 11.0903 2.09202 11.282C2.39717 11.4375 2.7696 11.4821 3.36454 11.4949V15L8.87496 11.5L11.8 11.5C12.9201 11.5 13.4802 11.5 13.908 11.282C14.2843 11.0903 14.5903 10.7843 14.782 10.408C15 9.98016 15 9.42011 15 8.3V4.2C15 3.0799 15 2.51984 14.782 2.09202C14.5903 1.71569 14.2843 1.40973 13.908 1.21799C13.4802 1 12.9201 1 11.8 1H4.2C3.0799 1 2.51984 1 2.09202 1.21799C1.71569 1.40973 1.40973 1.71569 1.21799 2.09202Z"
                            stroke="none" stroke-width="2" stroke-linejoin="round" />
                    </svg>

                    <div>${info.commentcnt}</div>
                </li>
                <li class="main_list_name">
                    익명
                </li>
                <li class="main_list_time">
                    ${info.updatedate}
                </li>
            </div>
        </ul>
      `;

    }
    return infoHtml;
}
// 정보게시판 5개 ///////////////////////////////////////

// 몰입캠프 14기게시판 5개 가져오기 ///////////////////////////////////////
const generationParent = document.querySelector('.generation_list');
let generationItem = ``;

function generationLoad(type, pagenum) {
    $.ajax({

        type: "get",
        // type 동적으로 처리하기
        url: `/home/generation-14`,
        dataType: "text",
        success: function (data) {
            let generationListObj = JSON.parse(data);
            generationItem += getgenerations(generationListObj);
            generationParent.innerHTML = generationItem;
        },
        error: function () {
            alert('generation 비동기 처리오류');
        }

    });

}
function getgenerations(generationList) {
    let generationHtml = ``;
    for (let generation of generationList) {
        generationHtml += `
        <ul class="generation_list_ul">
            <a href="/board/${generation.id} " class="generation_list_title">
                ${generation.title}
            </a >
            <div class="generation_list_sub">
                <li class="generation_list_heart">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="#F40300"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.9447 3.04697C12.5376 1.65101 10.2563 1.65101 8.84926 3.04697L8 4L7.15074 3.04699C5.74368 1.65102 3.46237 1.65102 2.0553 3.04699C0.648234 4.44295 0.648232 6.70626 2.0553 8.10222L7.99998 14L13.9447 8.10221C15.3518 6.70625 15.3518 4.44294 13.9447 3.04697Z"
                            stroke="none" stroke-width="2" stroke-linejoin="round" />
                    </svg>

                    <div>${generation.likecnt}</div>
                </li>
                <li class="generation_list_comment">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="#007BF7"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1.21799 2.09202C1 2.51984 1 3.0799 1 4.2V8.3C1 9.42011 1 9.98016 1.21799 10.408C1.40973 10.7843 1.71569 11.0903 2.09202 11.282C2.39717 11.4375 2.7696 11.4821 3.36454 11.4949V15L8.87496 11.5L11.8 11.5C12.9201 11.5 13.4802 11.5 13.908 11.282C14.2843 11.0903 14.5903 10.7843 14.782 10.408C15 9.98016 15 9.42011 15 8.3V4.2C15 3.0799 15 2.51984 14.782 2.09202C14.5903 1.71569 14.2843 1.40973 13.908 1.21799C13.4802 1 12.9201 1 11.8 1H4.2C3.0799 1 2.51984 1 2.09202 1.21799C1.71569 1.40973 1.40973 1.71569 1.21799 2.09202Z"
                            stroke="none" stroke-width="2" stroke-linejoin="round" />
                    </svg>

                    <div>${generation.commentcnt}</div>
                </li>
                <li class="generation_list_name">
                    익명
                </li>
                <li class="generation_list_time">
                    ${generation.updatedate}
                </li>
            </div>
        </ul >

      `;

    }
    return generationHtml;
}
// 몰캠14기 게시판 5개 ///////////////////////////////////////