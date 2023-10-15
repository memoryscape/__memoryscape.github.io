async function signUpUser(email, password) {
    const url = 'http://127.0.0.1:5000/signup';

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('User signed up:', data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

async function logInUser(email, password) {
    const url = 'http://127.0.0.1:5000/login';

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('User logged in:', data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

async function getVaults(email) {
    const url = `http://127.0.0.1:5000/get_vaults/${email}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Vaults for user:', data.result);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

async function shareVault(email, vaultName, vaultUrl, shareEmails) {
    const url = 'http://127.0.0.1:5000/share_vault';

    const formData = new FormData();
    formData.append('email', email);
    formData.append('vault_name', vaultName);
    formData.append('vault_url', vaultUrl);
    formData.append('share_emails', JSON.stringify(shareEmails));
    console.log(shareEmails)
    console.log(typeof(shareEamils))
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: {
                'email':email,
                'vault_name':vaultName,
                'vault_url':vaultUrl,
                'share_emails':shareEmails
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Vault shared successfully:', data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

