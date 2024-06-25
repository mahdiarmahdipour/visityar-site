// newFile.js
document.addEventListener('DOMContentLoaded', function() {
    // تابع برای تأیید کد تایید و انجام عملیات مربوطه
    document.getElementById('submitCodeBtn').addEventListener('click', function () {
        var enteredCode = document.getElementById('verificationCodeInput').value;

        // تایید کد تایید با کد پیش‌فرض 56789
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

    const cityInput = document.getElementById('cityInput');
    const cityDropdown = document.getElementById('cityDropdown');
    const cities = ['تهران', 'اصفهان', 'شیراز', 'مشهد', 'تبریز'];

    cityInput.addEventListener('input', function() {
        const filter = cityInput.value.toLowerCase();
        cityDropdown.innerHTML = '';
        const filteredCities = cities.filter(city => city.includes(filter));
        filteredCities.forEach(city => {
            const li = document.createElement('li');
            li.innerHTML = `<a class="dropdown-item" href="#">${city}</a>`;
            cityDropdown.appendChild(li);
            li.addEventListener('click', function() {
                cityInput.value = city;
                cityDropdown.innerHTML = '';
            });
        });
    });

    document.addEventListener('click', function(event) {
        if (!cityInput.contains(event.target) && !cityDropdown.contains(event.target)) {
            cityDropdown.innerHTML = '';
        }
    });
});
