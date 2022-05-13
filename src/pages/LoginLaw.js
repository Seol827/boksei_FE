import React from "react";
import styled from "styled-components";
import { Grid } from "../elements";
import { history } from "../redux/configureStore";


const LoginLaw = () => {
return(
    <LawWarp>
    <LawCont>
        <LawTitle>디지털콘텐츠 이용 표준약관</LawTitle>
        <MainTerms>
            <div id="conScroll"> 
            <div className="pgroup"> 
                <p className="gtit">제1장 총칙</p> 
            </div> 
            <div className="pgroup"> 
            <ul className="lawico01"></ul> 
            <div className="lawcon"> 
                <span className="bl">제1조(목적)</span> 
                이 약관은 회사가 온라인으로 제공하는 디지털콘텐츠(이하 "콘텐츠"라고 한다) 및 제반서비스의 이용과 관련하여 회사와 이용자와의 권리, 의무 및 책임사항 등을 규정함을 목적으로 합니다.&nbsp;
                <span className="sfon2"></span> 
            </div> 
            </div> 
            <div className="pgroup"> 
            <div className="lawcon"> 
            <span className="bl"><label htmlFor="Y000200">제2조(정의)</label></span> 이 약관에서 사용하는 용어의 정의는 다음과 같습니다.&nbsp;<span className="sfon2"></span> &nbsp;<span className="sfon2"></span> 
            <p className="pty1_de2h">1. "회사"라 함은 "콘텐츠" 산업과 관련된 경제활동을 영위하는 자로서 콘텐츠 및 제반서비스를 제공하는 자를 말합니다.&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">2. "이용자"라 함은 "회사"의 사이트에 접속하여 이 약관에 따라 "회사"가 제공하는 "콘텐츠" 및 제반서비스를 이용하는 회원 및 비회원을 말합니다.&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">3. "회원"이라 함은 "회사"와 이용계약을 체결하고 "이용자" 아이디(ID)를 부여받은 "이용자"로서 "회사"의 정보를 지속적으로 제공받으며 "회사"가 제공하는 서비스를 지속적으로 이용할 수 있는 자를 말합니다.&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">4. "비회원"이라 함은 "회원"이 아니면서 "회사"가 제공하는 서비스를 이용하는 자를 말합니다.&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">6. "아이디(ID)"라 함은 "회원"의 식별과 서비스이용을 위하여 "회원"이 정하고 "회사"가 승인하는 문자 또는 숫자의 조합을 말합니다.&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">7. "비밀번호(PASSWORD)"라 함은 "회원"이 부여받은 "아이디"와 일치되는 "회원"임을 확인하고 비밀보호를 위해 "회원" 자신이 정한 문자 또는 숫자의 조합을 말합니다.&nbsp;<span className="sfon2"></span></p> 
            </div> 
            </div> 
            <div className="pgroup"> 
            <ul className="lawico01"></ul> 
            <div className="lawcon"> 
            <span className="bl"><label htmlFor="Y000300">제3조(신원정보 등의 제공)</label></span> "회사"는 이 약관의 내용, 상호, 대표자 성명, 영업소 소재지 주소(소비자의 불만을 처리할 수 있는 곳의 주소를 포함), 전화번호, 모사전송번호, 전자우편주소, 사업자등록번호, 통신판매업 신고번호 및 개인정보관리책임자 등을 이용자가 쉽게 알 수 있도록 온라인 서비스초기화면에 게시합니다. 다만, 약관은 이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다.&nbsp;<span className="sfon2"></span> 
            </div> 
            </div> 
            <div className="pgroup"> 
            <ul className="lawico01"></ul> 
            <div className="lawcon"> 
            <span className="bl"><label htmlFor="Y000400">제4조(약관의 게시 등)</label></span> &nbsp;<span className="sfon2"></span> ① "회사"는 이 약관을 "회원"이 그 전부를 인쇄할 수 있고 거래과정에서 해당 약관의 내용을 확인할 수 있도록 기술적 조치를 취합니다.&nbsp;<span className="sfon2"></span> 
            <p className="pty1_de2_1">② "회사"는 "이용자"가 "회사"와 이 약관의 내용에 관하여 질의 및 응답할 수 있도록 기술적 장치를 설치합니다.&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2_1">③ "회사"는 "이용자"가 약관에 동의하기에 앞서 약관에 정하여져 있는 내용 중 청약철회, 환불조건 등과 같은 중요한 내용을 이용자가 쉽게 이해할 수 있도록 별도의 연결화면 또는 팝업화면 등을 제공하여 "이용자"의 확인을 구합니다.&nbsp;<span className="sfon2"></span></p> 
            <p></p> 
            </div> 
            </div> 
            <div className="pgroup"> 
            <ul className="lawico01"></ul> 
            <div className="lawcon"> 
            <span className="bl"><label htmlFor="Y000500">제5조(약관의 개정 등)</label></span> &nbsp;<span className="sfon2"></span> ① "회사"는 온라인 디지털콘텐츠산업 발전법, 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제에 관한 법률 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.&nbsp;<span className="sfon2"></span> 
            <p className="pty1_de2_1">② "회사"가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 서비스초기화면에 그 적용일자 7일 이전부터 적용일 후 상당한 기간동안 공지하고, 기존회원에게는 개정약관을 전자우편주소로 발송합니다.&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2_1">③ "회사"가 약관을 개정할 경우에는 개정약관 공지 후 개정약관의 적용에 대한 "이용자"의 동의 여부를 확인합니다. "이용자"가 개정약관의 적용에 동의하지 않는 경우 "회사" 또는 "이용자"는 콘텐츠 이용계약을 해지할 수 있습니다. 이때, "회사"는 계약해지로 인하여 "이용자"가 입은 손해를 배상합니다.&nbsp;<span className="sfon2"></span></p> 
            <p></p> 
            </div> 
            </div> 
            <div className="pgroup"> 
            <ul className="lawico01"></ul> 
            <div className="lawcon"> 
            <span className="bl"><label htmlFor="Y000600">제6조(약관의 해석)</label></span> 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 온라인 디지털콘텐츠산업 발전법, 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제에 관한 법률, 문화체육관광부장관이 정하는 디지털콘텐츠이용자보호지침, 기타 관계법령 또는 상관례에 따릅니다.&nbsp;<span className="sfon2"></span> 
            </div> 
            </div> 
            <div className="pgroup"> 
            <p className="gtit">제2장 회원가입</p> 
            </div> 
            <div className="pgroup"> 
            <ul className="lawico01"></ul> 
            <div className="lawcon"> 
            <span className="bl"><label htmlFor="Y000700">제7조(회원가입)</label></span> &nbsp;<span className="sfon2"></span> ① 회원가입은 "이용자"가 약관의 내용에 대하여 동의를 하고 회원가입신청을 한 후 "회사"가 이러한 신청에 대하여 승낙함으로써 체결됩니다.&nbsp;<span className="sfon2"></span> 
            <p className="pty1_de2_1">② 회원가입신청서에는 다음 사항을 기재해야 합니다. 1호 내지 3호의 사항은 필수사항이며, 그 외의 사항은 선택사항입니다.&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">1. "회원"의 성명과 주민등록번호 또는 인터넷상 개인식별번호&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">2. "아이디"와 "비밀번호"&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">3. 전자우편주소&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">4. 이용하려는 "콘텐츠"의 종류&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">5. 기타 "회사"가 필요하다고 인정하는 사항&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2_1">③ "회사"는 상기 "이용자"의 신청에 대하여 회원가입을 승낙함을 원칙으로 합니다. 다만, "회사"는 다음 각 호에 해당하는 신청에 대하여는 승낙을 하지 않을 수 있습니다.&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">1. 가입신청자가 이 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">2. 실명이 아니거나 타인의 명의를 이용한 경우&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">3. 허위의 정보를 기재하거나, 회사가 제시하는 내용을 기재하지 않은 경우&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">4. 이용자의 귀책사유로 인하여 승인이 불가능하거나 기타 규정한 제반 사항을 위반하며 신청하는 경우&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2_1">④ "회사"는 서비스 관련 설비의 여유가 없거나, 기술상 또는 업무상 문제가 있는 경우에는 승낙을 유보할 수 있습니다.&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2_1">⑤ 제3항과 제4항에 따라 회원가입신청의 승낙을 하지 아니하거나 유보한 경우, "회사"는 이를 신청자에게 알려야 합니다. "회사"의 귀책사유 없이 신청자에게 통지할 수 없는 경우에는 예외로 합니다.&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2_1">⑥ 회원가입계약의 성립 시기는 "회사"의 승낙이 "이용자"에게 도달한 시점으로 합니다.&nbsp;<span className="sfon2"></span></p> 
            <p></p> 
            </div> 
            </div> 
            <div className="pgroup"> 
            <ul className="lawico01"></ul> 
            <div className="lawcon"> 
            <span className="bl"><label htmlFor="Y000800">제8조(미성년자의 회원가입에 관한 특칙)</label></span> &nbsp;<span className="sfon2"></span> ① 만 14세 미만의 "이용자"는 개인정보의 수집 및 이용목적에 대하여 충분히 숙지하고 부모 등 법정대리인의 동의를 얻은 후에 회원가입을 신청하고 본인의 개인정보를 제공하여야 합니다.&nbsp;<span className="sfon2"></span> 
            <p className="pty1_de2_1">② 회사는 부모 등 법정대리인의 동의에 대한 확인절차를 거치지 않은 14세 미만 이용자에 대하여는 가입을 취소 또는 불허합니다.&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2_1">③ 만 14세 미만 "이용자"의 부모 등 법정대리인은 아동에 대한 개인정보의 열람, 정정, 갱신을 요청하거나 회원가입에 대한 동의를 철회할 수 있으며, 이러한 경우에 "회사"는 지체 없이 필요한 조치를 취해야 합니다.&nbsp;<span className="sfon2"></span></p> 
            <p></p> 
            </div> 
            </div> 
            <div className="pgroup"> 
            <ul className="lawico01"></ul> 
            <div className="lawcon"> 
            <span className="bl"><label htmlFor="Y000900">제9조(회원정보의 변경)</label></span> &nbsp;<span className="sfon2"></span> ① "회원"은 개인정보관리화면을 통하여 언제든지 자신의 개인정보를 열람하고 수정할 수 있습니다.&nbsp;<span className="sfon2"></span> 
            <p className="pty1_de2_1">② "회원"은 회원가입신청 시 기재한 사항이 변경되었을 경우 온라인으로 수정을 하거나 전자우편 기타 방법으로 "회사"에 대하여 그 변경사항을 알려야 합니다.&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2_1">③ 제2항의 변경사항을 "회사"에 알리지 않아 발생한 불이익에 대하여 "회사"는 책임지지 않습니다.&nbsp;<span className="sfon2"></span></p> 
            <p></p> 
            </div> 
            </div> 
            <div className="pgroup"> 
            <ul className="lawico01"></ul> 
            <div className="lawcon"> 
            <span className="bl"><label htmlFor="Y001000">제10조("회원"의 "아이디" 및 "비밀번호"의 관리에 대한 의무)</label></span> &nbsp;<span className="sfon2"></span> ① "회원"의 "아이디"와 "비밀번호"에 관한 관리책임은 "회원"에게 있으며, 이를 제3자가 이용하도록 하여서는 안 됩니다.&nbsp;<span className="sfon2"></span> 
            <p className="pty1_de2_1">② "회원"은 "아이디" 및 "비밀번호"가 도용되거나 제3자에 의해 사용되고 있음을 인지한 경우에는 이를 즉시 "회사"에 통지하고 "회사"의 안내에 따라야 합니다.&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2_1">③ 제2항의 경우에 해당 "회원"이 "회사"에 그 사실을 통지하지 않거나, 통지한 경우에도 "회사"의 안내에 따르지 않아 발생한 불이익에 대하여 "회사"는 책임지지 않습니다.&nbsp;<span className="sfon2"></span></p> 
            <p></p> 
            </div> 
            </div> 
            <div className="pgroup"> 
            <ul className="lawico01"></ul> 
            <div className="lawcon"> 
            <span className="bl"><label htmlFor="Y001100">제11조("회원"에 대한 통지)</label></span> &nbsp;<span className="sfon2"></span> ① "회사"가 "회원"에 대한 통지를 하는 경우 "회원"이 지정한 전자우편주소로 할 수 있습니다.&nbsp;<span className="sfon2"></span> 
            <p className="pty1_de2_1">② "회사"는 "회원" 전체에 대한 통지의 경우 7일 이상 "회사"의 게시판에 게시함으로써 제1항의 통지에 갈음할 수 있습니다. 다만, "회원" 본인의 거래와 관련하여 중대한 영향을 미치는 사항에 대하여는 제1항의 통지를 합니다.&nbsp;<span className="sfon2"></span></p> 
            <p></p> 
            </div> 
            </div> 
            <div className="pgroup"> 
            <ul className="lawico01"></ul> 
            <div className="lawcon"> 
            <span className="bl"><label htmlFor="Y001200">제12조(회원탈퇴 및 자격 상실 등)</label></span> &nbsp;<span className="sfon2"></span> ① "회원"은 "회사"에 언제든지 탈퇴를 요청할 수 있으며 "회사"는 즉시 회원탈퇴를 처리합니다.&nbsp;<span className="sfon2"></span> 
            <p className="pty1_de2_1">② "회원"이 다음 각호의 사유에 해당하는 경우, "회사"는 회원자격을 제한 및 정지시킬 수 있습니다.&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">1. 가입신청 시에 허위내용을 등록한 경우&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">2. "회사"의 서비스이용대금, 기타 "회사"의 서비스이용에 관련하여 회원이 부담하는 채무를 기일에 이행하지 않는 경우&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">3. 다른 사람의 "회사"의 서비스이용을 방해하거나 그 정보를 도용하는 등 전자상거래 질서를 위협하는 경우&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">4. "회사"를 이용하여 법령 또는 이 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2_1">③ "회사"가 회원자격을 제한·정지시킨 후, 동일한 행위가 2회 이상 반복되거나 30일 이내에 그 사유가 시정되지 아니하는 경우 "회사"는 회원자격을 상실시킬 수 있습니다.&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2_1">④ "회사"가 회원자격을 상실시키는 경우에는 회원등록을 말소합니다. 이 경우 "회원"에게 이를 통지하고, 회원등록 말소 전에 최소한 30일 이상의 기간을 정하여 소명할 기회를 부여합니다.&nbsp;<span className="sfon2"></span></p> 
            <p></p> 
            </div> 
            </div> 
            <div className="pgroup"> 
            <p className="gtit">제3장 콘텐츠이용계약</p> 
            </div> 
            <div className="pgroup"> 
            <ul className="lawico01"></ul> 
            <div className="lawcon"> 
            <span className="bl"><label htmlFor="Y001300">제13조("콘텐츠"의 내용 등의 게시)</label></span> &nbsp;<span className="sfon2"></span> ① "회사"는 다음 사항을 해당 "콘텐츠"의 이용초기화면이나 그 포장에 "이용자"가 알기 쉽게 표시합니다.&nbsp;<span className="sfon2"></span> 
            <p className="pty1_de2h">1. "콘텐츠"의 명칭 또는 제호&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">2. "콘텐츠"의 제작 및 표시 연월일&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">3. "콘텐츠" 제작자의 성명(법인인 경우에는 법인의 명칭), 주소, 전화번호&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">4. "콘텐츠"의 내용, 이용방법, 이용료 기타 이용조건&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2_1">② "회사"는 "콘텐츠"별 이용가능기기 및 이용에 필요한 최소한의 기술사양에 관한 정보를 계약체결과정에서 "이용자"에게 제공합니다.&nbsp;<span className="sfon2"></span></p> 
            <p></p> 
            </div> 
            </div> 
            <div className="pgroup"> 
            <ul className="lawico01"></ul> 
            <div className="lawcon"> 
            <span className="bl"><label htmlFor="Y001400">제14조(이용계약의 성립 등)</label></span> &nbsp;<span className="sfon2"></span> ① "이용자"는 "회사"가 제공하는 다음 또는 이와 유사한 절차에 의하여 이용신청을 합니다. "회사"는 계약 체결 전에 각 호의 사항에 관하여 "이용자"가 정확하게 이해하고 실수 또는 착오 없이 거래할 수 있도록 정보를 제공합니다.&nbsp;<span className="sfon2"></span> 
            <p className="pty1_de2h">1. "콘텐츠" 목록의 열람 및 선택&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">2. 성명, 주소, 전화번호(또는 이동전화번호), 전자우편주소 등의 입력&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">3. 약관내용, 청약철회가 불가능한 "콘텐츠"에 대해 "회사"가 취한 조치에 관련한 내용에 대한 확인&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">4. 이 약관에 동의하고 위 제3호의 사항을 확인하거나 거부하는 표시(예, 마우스 클릭)&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">5. "콘텐츠"의 이용신청에 관한 확인 또는 "회사"의 확인에 대한 동의&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">6. 결제방법의 선택&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2_1">② "회사"는 "이용자"의 이용신청이 다음 각 호에 해당하는 경우에는 승낙하지 않거나 승낙을 유보할 수 있습니다.&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">1. 실명이 아니거나 타인의 명의를 이용한 경우&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">2. 허위의 정보를 기재하거나, "회사"가 제시하는 내용을 기재하지 않은 경우&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">3. 미성년자가 청소년보호법에 의해서 이용이 금지되는 "콘텐츠"를 이용하고자 하는 경우&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">4. 서비스 관련 설비의 여유가 없거나, 기술상 또는 업무상 문제가 있는 경우&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2_1">④ "회사"의 승낙의 의사표시에는 "이용자"의 이용신청에 대한 확인 및 서비스제공 가능여부, 이용신청의 정정·취소 등에 관한 정보 등을 포함합니다.&nbsp;<span className="sfon2"></span></p> 
            <p></p> 
            </div> 
            </div> 
            <div className="pgroup"> 
            <ul className="lawico01"></ul> 
            <div className="lawcon"> 
            <span className="bl"><label htmlFor="Y001500">제15조(미성년자 이용계약에 관한 특칙)</label></span> "회사"는 만 20세 미만의 미성년이용자가 유료서비스를 이용하고자 하는 경우에 부모 등 법정 대리인의 동의를 얻거나, 계약체결 후 추인을 얻지 않으면 미성년자 본인 또는 법정대리인이 그 계약을 취소할 수 있다는 내용을 계약체결 전에 고지하는 조치를 취합니다.&nbsp;<span className="sfon2"></span> 
            </div> 
            </div> 
            <div className="pgroup"> 
            <ul className="lawico01"></ul> 
            <div className="lawcon"> 
            <span className="bl"><label htmlFor="Y001600">제16조(수신확인통지·이용신청 변경 및 취소)</label></span> &nbsp;<span className="sfon2"></span> ① "회사"는 "이용자"의 이용신청이 있는 경우 "이용자"에게 수신확인통지를 합니다.&nbsp;<span className="sfon2"></span> 
            <p></p> 
            </div> 
            </div> 
            <div className="pgroup"> 
            <ul className="lawico01"></ul> 
            <div className="lawcon"> 
            <span className="bl"><label htmlFor="Y001700">제17조("회사"의 의무)</label></span> &nbsp;<span className="sfon2"></span> ① "회사"는 법령과 이 약관이 정하는 권리의 행사와 의무의 이행을 신의에 좇아 성실하게 하여야 합니다.&nbsp;<span className="sfon2"></span> 
            <p className="pty1_de2_1">② "회사"는 "이용자"가 안전하게 "콘텐츠"를 이용할 수 있도록 개인정보(신용정보 포함)보호를 위해 보안시스템을 갖추어야 하며 개인정보보호정책을 공시하고 준수합니다.&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2_1">③ "회사"는 "이용자"가 콘텐츠이용 및 그 대금내역을 수시로 확인할 수 있도록 조치합니다.&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2_1">④ "회사"는 콘텐츠이용과 관련하여 "이용자"로부터 제기된 의견이나 불만이 정당하다고 인정할 경우에는 이를 지체없이 처리합니다. 이용자가 제기한 의견이나 불만사항에 대해서는 게시판을 활용하거나 전자우편 등을 통하여 그 처리과정 및 결과를 전달합니다.&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2_1">⑤ "회사"는 이 약관에서 정한 의무 위반으로 인하여 "이용자"가 입은 손해를 배상합니다.&nbsp;<span className="sfon2"></span></p> 
            <p></p> 
            </div> 
            </div> 
            <div className="pgroup"> 
            <ul className="lawico01"></ul> 
            <div className="lawcon"> 
            <span className="bl"><label htmlFor="Y001800">제18조("이용자"의 의무)</label></span> &nbsp;<span className="sfon2"></span> ① "이용자"는 다음 행위를 하여서는 안 됩니다.&nbsp;<span className="sfon2"></span> 
            <p className="pty1_de2h">1. 신청 또는 변경 시 허위내용의 기재&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">2. 타인의 정보도용&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">3. "회사"에 게시된 정보의 변경&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">4. "회사"가 금지한 정보(컴퓨터 프로그램 등)의 송신 또는 게시&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">5. "회사"와 기타 제3자의 저작권 등 지적재산권에 대한 침해&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">6. "회사" 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">7. 외설 또는 폭력적인 말이나 글, 화상, 음향, 기타 공서양속에 반하는 정보를 "회사"의 사이트에 공개 또는 게시하는 행위&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">8. 기타 불법적이거나 부당한 행위&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2_1">② "이용자"는 관계법령, 이 약관의 규정, 이용안내 및 "콘텐츠"와 관련하여 공지한 주의사항, "회사"가 통지하는 사항 등을 준수하여야 하며, 기타 "회사"의 업무에 방해되는 행위를 하여서는 안 됩니다.&nbsp;<span className="sfon2"></span></p> 
            <p></p> 
            </div> 
            </div> 
            <div className="pgroup"> 
            <ul className="lawico01"></ul> 
            <div className="lawcon"> 
            <span className="bl"><label htmlFor="Y001900">제19조(지급방법)</label></span> "콘텐츠"의 이용에 대한 대금지급방법은 다음 각 호의 방법 중 가능한 방법으로 할 수 있습니다. 다만, "회사"는 "이용자"의 지급방법에 대하여 어떠한 명목의 수수료도 추가하여 징수하지 않습니다.&nbsp;<span className="sfon2"></span> &nbsp;<span className="sfon2"></span> 
            <p className="pty1_de2h">1. 폰뱅킹, 인터넷뱅킹, 메일 뱅킹 등의 각종 계좌이체&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">2. 선불카드, 직불카드, 신용카드 등의 각종 카드결제&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">3. 온라인무통장입금&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">4. 전자화폐에 의한 결제&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">5. 마일리지 등 "회사"가 지급한 포인트에 의한 결제&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">6. "회사"와 계약을 맺었거나 "회사"가 인정한 상품권에 의한 결제&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">7. 전화 또는 휴대전화를 이용한 결제&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">8. 기타 전자적 지급방법에 의한 대금지급 등&nbsp;<span className="sfon2"></span></p> 
            <p></p> 
            </div> 
            </div> 
            <div className="pgroup"> 
            <ul className="lawico01"></ul> 
            <div className="lawcon"> 
            <span className="bl"><label htmlFor="Y002000">제20조(콘텐츠서비스의 제공 및 중단)</label></span> &nbsp;<span className="sfon2"></span> ① 콘텐츠서비스는 연중무휴, 1일 24시간 제공함을 원칙으로 합니다.&nbsp;<span className="sfon2"></span> 
            <p className="pty1_de2_1">③ "회사"는 상당한 이유 없이 콘텐츠서비스의 제공이 일시적으로 중단됨으로 인하여 "이용자"가 입은 손해에 대하여 배상합니다. 다만, "회사"가 고의 또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다.&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2_1">④ "회사"는 콘텐츠서비스의 제공에 필요한 경우 정기점검을 실시할 수 있으며, 정기점검시간은 서비스제공화면에 공지한 바에 따릅니다.&nbsp;<span className="sfon2"></span></p> 
            <p></p> 
            </div> 
            </div> 
            <div className="pgroup"> 
            <ul className="lawico01"></ul> 
            <div className="lawcon"> 
            <span className="bl"><label htmlFor="Y002100">제21조(콘텐츠서비스의 변경)</label></span> &nbsp;<span className="sfon2"></span> ① "회사"는 상당한 이유가 있는 경우에 운영상, 기술상의 필요에 따라 제공하고 있는 콘텐츠서비스를 변경할 수 있습니다.&nbsp;<span className="sfon2"></span> 
            <p className="pty1_de2_1">② "회사"는 콘텐츠서비스의 내용, 이용방법, 이용시간을 변경할 경우에 변경사유, 변경될 콘텐츠서비스의 내용 및 제공일자 등을 그 변경 전 7일 이상 해당 콘텐츠초기화면에 게시합니다.&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2_1">④ "회사"는 제1항에 의한 서비스의 변경 및 제3항에 의한 계약의 해지로 인하여 "이용자"가 입은 손해를 배상합니다.&nbsp;<span className="sfon2"></span></p> 
            <p></p> 
            </div> 
            </div> 
            <div className="pgroup"> 
            <ul className="lawico01"></ul> 
            <div className="lawcon"> 
            <span className="bl"><label htmlFor="Y002200">제22조(정보의 제공 및 광고의 게재)</label></span> &nbsp;<span className="sfon2"></span> ① "회사"는 "이용자"가 콘텐츠이용 중 필요하다고 인정되는 다양한 정보를 공지사항이나 전자우편 등의 방법으로 "회원"에게 제공할 수 있습니다. 다만, "회원"은 언제든지 전자우편 등을 통하여 수신 거절을 할 수 있습니다.&nbsp;<span className="sfon2"></span> 
            <p className="pty1_de2_1">② 제1항의 정보를 전화 및 모사전송기기에 의하여 전송하려고 하는 경우에는 "회원"의 사전 동의를 받아서 전송합니다.&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2_1">③ "회사"는 "콘텐츠"서비스 제공과 관련하여 콘텐츠화면, 홈페이지, 전자우편 등에 광고를 게재할 수 있습니다. 광고가 게재된 전자우편 등을 수신한 "회원"은 수신거절을 "회사"에게 할 수 있습니다.&nbsp;<span className="sfon2"></span></p> 
            <p></p> 
            </div> 
            </div> 
            <div className="pgroup"> 
            <ul className="lawico01"></ul> 
            <div className="lawcon"> 
            <span className="bl"><label htmlFor="Y002300">제23조(게시물의 삭제)</label></span> &nbsp;<span className="sfon2"></span> ① "회사"는 게시판에 정보통신망이용촉진 및 정보보호 등에 관한 법률을 위반한 청소년유해매체물이 게시되어 있는 경우에는 이를 지체 없이 삭제 합니다. 다만, 19세 이상의 "이용자"만 이용할 수 있는 게시판은 예외로 합니다.&nbsp;<span className="sfon2"></span> 
            <p className="pty1_de2_1">② "회사"가 운영하는 게시판 등에 게시된 정보로 인하여 법률상 이익이 침해된 자는 "회사"에게 당해 정보의 삭제 또는 반박내용의 게재를 요청할 수 있습니다. 이 경우 "회사"는 지체 없이 필요한 조치를 취하고 이를 즉시 신청인에게 통지합니다.&nbsp;<span className="sfon2"></span></p> 
            <p></p> 
            </div> 
            </div> 
            <div className="pgroup"> 
            <ul className="lawico01"></ul> 
            <div className="lawcon"> 
            <span className="bl"><label htmlFor="Y002400">제24조(저작권 등의 귀속)</label></span> &nbsp;<span className="sfon2"></span> ① "회사"가 작성한 저작물에 대한 저작권 기타 지적재산권은 "회사"에 귀속합니다.&nbsp;<span className="sfon2"></span> 
            <p className="pty1_de2_1">② "회사"가 제공하는 서비스 중 제휴계약에 의해 제공되는 저작물에 대한 저작권 기타 지적재산권은 해당 제공업체에 귀속합니다.&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2_1">③ "이용자"는 "회사"가 제공하는 서비스를 이용함으로써 얻은 정보 중 "회사" 또는 제공업체에 지적재산권이 귀속된 정보를 "회사" 또는 제공업체의 사전승낙 없이 복제, 전송, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2_1">④ "회사"는 약정에 따라 "이용자"의 저작물을 사용하는 경우 당해 "이용자"의 허락을 받습니다..&nbsp;<span className="sfon2"></span></p> 
            <p></p> 
            </div> 
            </div> 
            <div className="pgroup"> 
            <ul className="lawico01"></ul> 
            <div className="lawcon"> 
            <p className="pty1_de2_1">② "회사"가 "이용자"의 개인 식별이 가능한 "개인정보"를 수집하는 때에는 당해 "이용자"의 동의를 받습니다.&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2_1">③ "회사"는 "이용자"가 이용신청 등에서 제공한 정보와 제1항에 의하여 수집한 정보를 당해 "이용자"의 동의 없이 목적 외로 이용하거나 제3자에게 제공할 수 없으며, 이를 위반한 경우에 모든 책임은 "회사"가 집니다. 다만, 다음의 경우에는 예외로 합니다.&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">1. 통계작성, 학술연구 또는 시장조사를 위하여 필요한 경우로서 특정 개인을 식별할 수 없는 형태로 제공하는 경우&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">2. "콘텐츠" 제공에 따른 요금정산을 위하여 필요한 경우&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">3. 도용방지를 위하여 본인확인에 필요한 경우&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">4. 약관의 규정 또는 법령에 의하여 필요한 불가피한 사유가 있는 경우&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2_1">⑤ "이용자"는 언제든지 제3항의 동의를 임의로 철회할 수 있습니다.&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2_1">⑥ "이용자"는 언제든지 "회사"가 가지고 있는 자신의 "개인정보"에 대해 열람 및 오류의 정정을 요구할 수 있으며, "회사"는 이에 대해 지체 없이 필요한 조치를 취할 의무를 집니다. "이용자"가 오류의 정정을 요구한 경우에는 "회사"는 그 오류를 정정할 때까지 당해 "개인정보"를 이용하지 않습니다.&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2_1">⑦ "회사"는 개인정보보호를 위하여 관리자를 한정하여 그 수를 최소화하며, 신용카드, 은행계좌 등을 포함한 "이용자"의 "개인정보"의 분실, 도난, 유출, 변조 등으로 인한 "이용자"의 손해에 대하여 책임을 집니다.&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2_1">⑧ "회사" 또는 그로부터 "개인정보"를 제공받은 자는 "이용자"가 동의한 범위 내에서 "개인정보"를 사용할 수 있으며, 목적이 달성된 경우에는 당해 "개인정보"를 지체 없이 파기합니다.&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2_1">⑨ "회사"는 정보통신망이용촉진 및 정보보호에 관한 법률 등 관계 법령이 정하는 바에 따라 "이용자"의 "개인정보"를 보호하기 위해 노력합니다. "개인정보"의 보호 및 사용에 대해서는 관련법령 및 "회사"의 개인정보보호정책이 적용됩니다.&nbsp;<span className="sfon2"></span></p> 
            <p></p> 
            </div> 
            </div> 
            <div className="pgroup"> 
            <p className="gtit">제4장 콘텐츠이용계약의 청약철회, 계약해제·해지 및 이용제한</p> 
            </div> 
            <div className="pgroup"> 
            <ul className="lawico01"></ul> 
            <div className="lawcon"> 
            <span className="bl"><label htmlFor="Y002600">제26조("이용자"의 청약철회와 계약해제·해지)</label></span> &nbsp;<span className="sfon2"></span> ① "회사"와 "콘텐츠"의 이용에 관한 계약을 체결한 "이용자"는 수신확인의 통지를 받은 날로부터 7일 이내에는 청약의 철회를 할 수 있습니다. 다만, "회사"가 다음 각 호중 하나의 조치를 취한 경우에는 "이용자"의 청약철회권이 제한될 수 있습니다.&nbsp;<span className="sfon2"></span> 
            <p className="pty1_de2h">1. 청약의 철회가 불가능한 "콘텐츠"에 대한 사실을 표시사항에 포함한 경우&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">2. 시용상품을 제공한 경우&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">3. 한시적 또는 일부이용 등의 방법을 제공한 경우&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2_1">② "이용자"는 다음 각 호의 사유가 있을 때에는 당해 "콘텐츠"를 공급받은 날로부터 3월 이내 또는 그 사실을 안 날 또는 알 수 있었던 날부터 30일 이내에 콘텐츠이용계약을 해제·해지할 수 있습니다.&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">1. 이용계약에서 약정한 "콘텐츠"가 제공되지 않는 경우&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">2. 제공되는 "콘텐츠"가 표시·광고 등과 상이하거나 현저한 차이가 있는 경우&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2h">3. 기타 "콘텐츠"의 결함으로 정상적인 이용이 현저히 불가능한 경우&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2_1">③ 제1항의 청약철회와 제2항의 계약해제·해지는 "이용자"가 전화, 전자우편 또는 모사전송으로 "회사"에 그 의사를 표시한 때에 효력이 발생합니다.&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2_1">④ "회사"는 제3항에 따라 "이용자"가 표시한 청약철회 또는 계약해제·해지의 의사표시를 수신한 후 지체 없이 이러한 사실을 "이용자"에게 회신합니다.&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2_1">⑤ "이용자"는 제2항의 사유로 계약해제·해지의 의사표시를 하기 전에 상당한 기간을 정하여 완전한 "콘텐츠" 혹은 서비스이용의 하자에 대한 치유를 요구할 수 있습니다.&nbsp;<span className="sfon2"></span></p> 
            <p></p> 
            </div> 
            </div> 
            <div className="pgroup"> 
            <ul className="lawico01"></ul> 
            <div className="lawcon"> 
            <span className="bl"><label htmlFor="Y002700">제27조("이용자"의 청약철회와 계약해제·해지의 효과)</label></span> &nbsp;<span className="sfon2"></span> ① "회사"는 "이용자"가 청약철회의 의사표시를 한 날로부터 또는 "이용자"에게 계약해제·해지의 의사표시에 대하여 회신한 날로부터 3영업일 이내에 대금의 결제와 동일한 방법으로 이를 환급하여야 하며, 동일한 방법으로 환불이 불가능할 때에는 이를 사전에 고지하여야 합니다. 이 경우 "회사"가 "이용자"에게 환급을 지연한 때에는 그 지연기간에 대하여 공정거래위원회가 정하여 고시하는 지연이자율을 곱하여 산정한 지연이자를 지급합니다.&nbsp;<span className="sfon2"></span> 
            <p className="pty1_de2_1">② "회사"가 제1항에 따라 환급할 경우에 "이용자"가 서비스이용으로부터 얻은 이익에 해당하는 금액을 공제하고 환급할 수 있습니다.&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2_1">③ "회사"는 위 대금을 환급함에 있어서 "이용자"가 신용카드 또는 전자화폐 등의 결제수단으로 재화 등의 대금을 지급한 때에는 지체 없이 당해 결제수단을 제공한 사업자로 하여금 재화 등의 대금의 청구를 정지 또는 취소하도록 요청합니다. 다만, 제2항의 금액공제가 필요한 경우에는 그러하지 아니할 수 있습니다.&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2_1">④ "회사", "콘텐츠 등의 대금을 지급 받은 자" 또는 "이용자와 콘텐츠이용계약을 체결한 자"가 동일인이 아닌 경우에 각자는 청약철회 또는 계약해제·해지로 인한 대금환급과 관련한 의무의 이행에 있어서 연대하여 책임을 집니다.&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2_1">⑤ "회사"는 "이용자"에게 청약철회를 이유로 위약금 또는 손해배상을 청구하지 않습니다. 그러나 "이용자"의 계약해제·해지는 손해배상의 청구에 영향을 미치지 않습니다.&nbsp;<span className="sfon2"></span></p> 
            <p></p> 
            </div> 
            </div> 
            <div className="pgroup"> 
            <ul className="lawico01"></ul> 
            <div className="lawcon"> 
            <p className="pty1_de2_1">② 제1항의 해제·해지는 "회사"가 자신이 정한 통지방법에 따라 "이용자"에게 그 의사를 표시한 때에 효력이 발생합니다.&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2_1">③ "회사"의 해제·해지 및 이용제한에 대하여 "이용자"는 "회사"가 정한 절차에 따라 이의신청을 할 수 있습니다. 이 때 이의가 정당하다고 "회사"가 인정하는 경우, "회사"는 즉시 서비스의 이용을 재개합니다.&nbsp;<span className="sfon2"></span></p> 
            <p></p> 
            </div> 
            </div> 
            <div className="pgroup"> 
            <ul className="lawico01"></ul> 
            <div className="lawcon"> 
            </div> 
            </div> 
            <div className="pgroup"> 
            <p className="gtit">제5장 과오금, 피해보상 등</p> 
            </div> 
            <div className="pgroup"> 
            <ul className="lawico01"></ul> 
            <div className="lawcon"> 
            <span className="bl"><label htmlFor="Y003000">제30조(과오금)</label></span> &nbsp;<span className="sfon2"></span> ① "회사"는 과오금이 발생한 경우 이용대금의 결제와 동일한 방법으로 과오금 전액을 환불하여야 합니다. 다만, 동일한 방법으로 환불이 불가능할 때는 이를 사전에 고지합니다.&nbsp;<span className="sfon2"></span> 
            <p className="pty1_de2_1">② "회사"의 책임 있는 사유로 과오금이 발생한 경우 "회사"는 계약비용, 수수료 등에 관계없이 과오금 전액을 환불합니다. 다만, "이용자"의 책임 있는 사유로 과오금이 발생한 경우, "회사"가 과오금을 환불하는 데 소요되는 비용은 합리적인 범위 내에서 "이용자"가 부담하여야 합니다.&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2_1">③ 회사는 "이용자"가 주장하는 과오금에 대해 환불을 거부할 경우에 정당하게 이용대금이 부과되었음을 입증할 책임을 집니다.&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2_1">④ "회사"는 과오금의 환불절차를 디지털콘텐츠이용자보호지침에 따라 처리합니다.&nbsp;<span className="sfon2"></span></p> 
            <p></p> 
            </div> 
            </div> 
            <div className="pgroup"> 
            <ul className="lawico01"></ul> 
            <div className="lawcon"> 
            <span className="bl"><label htmlFor="Y003100">제31조(콘텐츠하자 등에 의한 이용자피해보상)</label></span> "회사"는 콘텐츠하자 등에 의한 이용자피해보상의 기준·범위·방법 및 절차에 관한 사항을 디지털콘텐츠이용자보호지침에 따라 처리합니다.&nbsp;<span className="sfon2"></span> 
            </div> 
            </div> 
            <div className="pgroup"> 
            <ul className="lawico01"></ul> 
            <div className="lawcon"> 
            <span className="bl"><label htmlFor="Y003200">제32조(면책조항)</label></span> &nbsp;<span className="sfon2"></span> ① "회사"는 천재지변 또는 이에 준하는 불가항력으로 인하여 "콘텐츠"를 제공할 수 없는 경우에는 "콘텐츠" 제공에 관한 책임이 면제됩니다.&nbsp;<span className="sfon2"></span> 
            <p className="pty1_de2_1">② "회사"는 "이용자"의 귀책사유로 인한 콘텐츠이용의 장애에 대하여는 책임을 지지 않습니다.&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2_1">③ "회사"는 "회원"이 "콘텐츠"와 관련하여 게재한 정보, 자료, 사실의 신뢰도, 정확성 등의 내용에 관하여는 책임을 지지 않습니다.&nbsp;<span className="sfon2"></span></p> 
            <p className="pty1_de2_1">④ "회사"는 "이용자" 상호간 또는 "이용자"와 제3자 간에 "콘텐츠"를 매개로 하여 발생한 분쟁 등에 대하여 책임을 지지 않습니다.&nbsp;<span className="sfon2"></span></p> 
            <p></p> 
            </div> 
            </div> 
            <div className="pgroup"> 
            <ul className="lawico01"></ul> 
            <div className="lawcon"> 
            <span className="bl"><label htmlFor="Y003300">제33조(분쟁의 해결)</label></span> "회사"는 분쟁이 발생하였을 경우에 "이용자"가 제기하는 정당한 의견이나 불만을 반영하여 적절하고 신속한 조치를 취합니다. 다만, 신속한 처리가 곤란한 경우에 "회사"는 "이용자"에게 그 사유와 처리일정을 통보합니다.&nbsp;<span className="sfon2"></span> 
            </div> 
            </div> 
            </div>
        </MainTerms>
    </LawCont>
    <LawCont>
        <LawTitle>개인정보 이용약관</LawTitle>
        <MainTerms>
        복세편살('https://www.boksei.com'이하 '복세편살')은(는) 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
        이 개인정보처리방침은 2022년 4월 23부터 적용됩니다.

        <p className="gtit">제1조 (개인정보의 처리 목적)</p>
        복세편살은(는) 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.<br/><br/>
        1. 재화 또는 서비스 제공<br/>
        맞춤서비스 제공을 목적으로 개인정보를 처리합니다.
        복세편살은(는) 이용자의 개인정보 보호를 최우선의 가치로 삼으며 개인정보 보호와 관련한 국내외 모든 법령을 성실히 준수합니다. 또한 회사의 개인정보 보호 정책을 이용자에게 보다 알기 쉽고 상세하게 설명하기 위해 노력하고 있습니다.
        복세편살 '개인정보 처리방침'은 복세편살 서비스를 이용하는 모든 이용자에게 적용됩니다.

        <p className="gtit">제2조 (개인정보의 처리 및 보유 기간)</p>
        ① 복세편살은(는) 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.<br/>
        ② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.<br/><br/>

        재화 또는 서비스 제공<br></br>
        재화 또는 서비스 제공와 관련한 개인정보는 수집.이용에 관한 동의일로부터 탈퇴시까지 위 이용목적을 위하여 보유, 이용됩니다.
        보유근거 : 정보의 따른 서비스 제공
        관련법령 : 「개인정보 보호법」 제15조

        <p className="gtit">제3조 (처리하는 개인정보의 항목)</p>
        ① 복세편살은(는) 다음의 개인정보 항목을 처리하고 있습니다.<br/>
        재화 또는 서비스 제공<br></br>
        필수항목 : 성별, 결혼여부, 신체정보, 연령대


        <p className="gtit">제4조 (개인정보의 파기절차 및 파기방법)</p>
        ① 복세편살은(는) 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.<br/>
        ② 개인정보 파기의 절차 및 방법은 다음과 같습니다.<br/>
        1. 파기절차<br/>
        복세편살은(는) 파기 사유가 발생한 개인정보를 선정하고, 복세편살의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.<br/>


        <p className="gtit">제5조 (정보주체와 법정대리인의 권리·의무 및 그 행사방법에 관한 사항)</p>
        ① 정보주체는 복세편살에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.)<br/>
        ② 제1항에 따른 권리 행사는 복세편살에 대해 「개인정보 보호법」 시행령 제41조제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 복세편살은(는) 이에 대해 지체 없이 조치하겠습니다.)<br/>
        ③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다.이 경우 “개인정보 처리 방법에 관한 고시(제2020-7호)” 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.)<br/>
        ④ 개인정보 열람 및 처리정지 요구는 「개인정보 보호법」 제35조 제4항, 제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.)<br/>
        ⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.)<br/>
        ⑥ 복세편살은(는) 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.)<br/>


        <p className="gtit">제6조 (개인정보의 안전성 확보조치에 관한 사항)</p>
        복세편살은(는) 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.<br/>

        1. 내부관리계획의 수립 및 시행<br/>
        개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고 있습니다.<br/>

        2. 개인정보의 암호화<br/>
        이용자의 개인정보는 비밀번호는 암호화 되어 저장 및 관리되고 있어, 본인만이 알 수 있으며 중요한 데이터는 파일 및 전송 데이터를 암호화 하거나 파일 잠금 기능을 사용하는 등의 별도 보안기능을 사용하고 있습니다.<br/>

        3. 개인정보에 대한 접근 제한<br/>
        개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여,변경,말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다.<br/>



        <p className="gtit">제7조(개인정보를 자동으로 수집하는 장치의 설치·운영 및 그 거부에 관한 사항)</p>
        ① 복세편살은(는) 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다.<br/>
        ② 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의 PC 컴퓨터내의 하드디스크에 저장되기도 합니다.<br/>
        가. 쿠키의 사용 목적 : 이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기 검색어, 보안접속 여부, 등을 파악하여 이용자에게 최적화된 정보 제공을 위해 사용됩니다.<br/>
        나. 쿠키의 설치•운영 및 거부 : 웹브라우저 상단의 도구 - 인터넷 옵션 - 개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할 수 있습니다.<br/>
        다. 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.<br/>

        <p className="gtit">제8조 (개인정보 보호책임자에 관한 사항)</p>

        ① 복세편살은(는) 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.<br/>

        ▶ 개인정보 보호책임자<br/>
        성명 :아무개<br/>
        직책 :팀장<br/>
        직급 :팀장<br/>
        연락처 :010-1234-1234, realwelfare@gmail.com, 010-1234-1234<br/><br/>

        ▶ 개인정보 보호 담당부서<br/>
        부서명 :<br/>
        담당자 :<br/>
        연락처 :, ,<br/>
        ② 정보주체께서는 복세편살의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 복세편살은(는) 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.<br/><br/>

        <p className="gtit">제9조 (개인정보의 열람청구를 접수·처리하는 부서)</p>
        정보주체는 ｢개인정보 보호법｣ 제35조에 따른 개인정보의 열람 청구를 아래의 연락처로 요청할 수 있습니다.<br/>
        복세편살은(는) 정보주체의 개인정보 열람청구가 신속하게 처리되도록 노력하겠습니다.<br/><br/>

        ▶ 개인정보 열람청구 접수·처리 부서<br/>
        부서명 :<br/>
        담당자 :<br/>
        연락처 : , ,<br/><br/>


        <p className="gtit">제10조 (정보주체의 권익침해에 대한 구제방법)</p>
        정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타 개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기 바랍니다.<br/><br/>

        1. 개인정보분쟁조정위원회 : (국번없이) 1833-6972 (www.kopico.go.kr)<br/>
        2. 개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)<br/>
        3. 대검찰청 : (국번없이) 1301 (www.spo.go.kr)<br/>
        4. 경찰청 : (국번없이) 182 (ecrm.cyber.go.kr)<br/><br/>

        「개인정보보호법」제35조(개인정보의 열람), 제36조(개인정보의 정정·삭제), 제37조(개인정보의 처리정지 등)의 규정에 의한 요구에 대 하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익의 침해를 받은 자는 행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다.<br/>

        ※ 행정심판에 대해 자세한 사항은 중앙행정심판위원회(www.simpan.go.kr) 홈페이지를 참고하시기 바랍니다.


        <p className="gtit">제11조(개인정보 처리방침 변경)</p>
        ① 이 개인정보처리방침은 2022년 4월 23부터 적용됩니다.

        </MainTerms>
    </LawCont>

    <Grid is_flex>
        <BackButton onClick={()=>{history.goBack();}}>이전으로</BackButton>
    </Grid>

</LawWarp>
)
}

export default LoginLaw;

const LawWarp = styled.div`
    width : 100vw;
    margin : 0 auto;
    padding: 5rem 0;
    div+div{
        margin: 5rem 0;
    }
`
const LawCont = styled.div`
    margin: 0 auto;
    padding: 0 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 808px) {
        padding: 0 3rem;
    }
`;

const LawTitle = styled.p`
    margin-top : 40px;
    margin-bottom : 20px;
    font-size : 34px;
    font-weight : 700;
`

const MainTerms = styled.div`
    position: static;
    display: inline-block;
    width : 846px;
    height : 280px;
    height: 50vh;
    overflow-y: scroll;
    ::-webkit-scrollbar{
        display : none;
    }

    .gtit{
        margin: 2rem 0;
    }
`;

const BackButton = styled.button`
    width : 100px;
    height : 40px;
    background-color : lightgrey;
    text-align : center;
    border : none;
    border-radius : 5px;
    color : darkgrey;
    font-weight : 700;

    &:hover{
        cursor : pointer;
        background-color : #72A8FE;
        color : #FFFFFF;
        transparent : 80%;
    }

    &:foucs{
        background-color : #0361FB;
        color : #FFFFFF;
    }
`;