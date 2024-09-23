document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const addMoney = getInputFieldValueById('input-add-money');
        const pinNumber = getInputFieldValueById('input-pin-number');

        // console.log('add money inside addMoney2.js', addMoney, pinNumber);

        // wrong way to verify. do not try it at your serious website
        if (pinNumber === 1234) {
            const balance = getTextFieldValueById('account-balance');
            // console.log(balance, addMoney);
            const newBalance = balance + addMoney;
            document.getElementById('account-balance').innerText = newBalance;

            // add to transaction history
            const p = document.createElement('p');
            p.innerText = `Added: ${addMoney} Tk. New Balance: ${newBalance}`;
            console.log(p);

            // should be a common function
            document.getElementById('transaction-container').appendChild(p);

        }
        else {
            alert('Failed to add the money.');
        }

    });