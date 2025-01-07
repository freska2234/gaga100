function changeDesign(company) {
    const companyName = document.getElementById('company-name');
    const companyLogo = document.getElementById('company-logo');
    const offerDesc = document.getElementById('offer-desc');
    const buttons = document.querySelectorAll('.company-btn');

    buttons.forEach((btn) => {
        btn.style.backgroundColor = "#333";
        btn.style.color = "#fff";
    });

    if (company === "vodafone") {
        // document.body.style.backgroundColor = "#121212";
        document.body.style.backgroundColor = "#e60000";
        companyName.style.backgroundColor = "#e60000";
        companyName.textContent = "احصل على جيجات من فودافون";
        companyLogo.src = "https://upload.wikimedia.org/wikipedia/en/c/cc/Vodafone_2017_logo.svg";
        offerDesc.textContent = "تفعيل العرض المجاني لزيادة جيجاتك الآن!";
        buttons[0].style.backgroundColor = "#e60000"; // فودافون
    } else if (company === "etisalat") {
        companyName.style.backgroundColor = "#00b140";
        document.body.style.backgroundColor = "#00b140";
        companyName.textContent = "احصل على جيجات من اتصالات";
        companyLogo.src = "https://upload.wikimedia.org/wikipedia/commons/1/19/ET_Logo.png";
        offerDesc.textContent = "ابدأ التفعيل الآن مع اتصالات!";
        buttons[1].style.backgroundColor = "#00b140"; // اتصالات
    } else if (company === "orange") {
        companyName.style.backgroundColor = "#ff6a13";
        document.body.style.backgroundColor = "#ff6a13";
        companyName.textContent = "احصل على جيجات من أورانج";
        companyLogo.src = "https://upload.wikimedia.org/wikipedia/commons/c/c8/Orange_logo.svg";
        offerDesc.textContent = "تفعيل العرض المجاني مع أورانج!";
        buttons[2].style.backgroundColor = "#ff6a13"; // أورانج
    } else if (company === "we") {
        companyName.style.backgroundColor = "#8a4baf";
        document.body.style.backgroundColor = "#8a4baf";
        companyName.textContent = "احصل على جيجات من WE";
        companyLogo.src = "https://upload.wikimedia.org/wikipedia/commons/0/0f/We_logo.svg";
        offerDesc.textContent = "تمتع بالعروض المجانية من WE!";
        buttons[3].style.backgroundColor = "#8a4baf"; // WE
    }
}
