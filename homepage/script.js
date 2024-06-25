
<<<<<<< HEAD
=======
    document.getElementById('submitCodeBtn').addEventListener('click', function () {
        var enteredCode = document.getElementById('verificationCodeInput').value;
        var defaultCode = '56789';
        
        if (enteredCode === defaultCode) {
            alert('شما با موفقیت وارد شدید');
        } else {
            alert('کد تایید نادرست است! لطفاً دوباره امتحان کنید.');
        }

        var modalElement = document.getElementById('checkCodeModal');
        var modalInstance = bootstrap.Modal.getInstance(modalElement);
        modalInstance.hide();
    });
>>>>>>> 16dd00fc1e6240653ddc70b338ec42ad4b99b2c4
