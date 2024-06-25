// تابع برای تأیید کد تایید و انجام عملیات مربوطه
document.getElementById('submitCodeBtn').addEventListener('click', function () {
    var enteredCode = document.getElementById('verificationCodeInput').value;

    // تایید کد تایید با کد پیش‌فرض ۵۴۶۷۸
    var defaultCode = '56789';

    if (enteredCode === defaultCode) {
        alert('شما با موفقیت وارد شدید');
        // اینجا می‌توانید عملیات مورد نظر را انجام دهید، مانند ارسال فرم، ورود کاربر، و غیره
    } else {
        alert('کد تایید نادرست است! لطفاً دوباره امتحان کنید.');
    }

    // بستن مدال
    var modalElement = document.getElementById('checkCodeModal');
    var modalInstance = bootstrap.Modal.getInstance(modalElement);
    modalInstance.hide();
});
function toggleReviewSection() {
    var section = document.getElementById('reviewSection');
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
    } else {
        section.style.display = 'none';
    }
}

function submitReview() {
    // Logic for submitting the review
    alert('نظر شما ثبت شد.');
    toggleReviewSection();
}
