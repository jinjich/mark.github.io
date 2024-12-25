function saveProfile() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;

    localStorage.setItem('name', name);
    localStorage.setItem('age', age);
    localStorage.setItem('email', email);

    document.getElementById('profileForm').classList.add('hidden');
    document.getElementById('profileInfo').classList.remove('hidden');

    document.getElementById('nameInfo').textContent = `姓名: ${name}`;
    document.getElementById('ageInfo').textContent = `年龄: ${age}`;
    document.getElementById('emailInfo').textContent = `电子邮件: ${email}`;
}

function showForm() {
    document.getElementById('profileForm').classList.remove('hidden');
    document.getElementById('profileInfo').classList.add('hidden');
}

// 尝试从localStorage加载已保存的信息
window.onload = function() {
    const name = localStorage.getItem('name');
    const age = localStorage.getItem('age');
    const email = localStorage.getItem('email');

    if (name && age && email) {
        document.getElementById('name').value = name;
        document.getElementById('age').value = age;
        document.getElementById('email').value = email;

        document.getElementById('profileForm').classList.add('hidden');
        document.getElementById('profileInfo').classList.remove('hidden');

        document.getElementById('nameInfo').textContent = `姓名: ${name}`;
        document.getElementById('ageInfo').textContent = `年龄: ${age}`;
        document.getElementById('emailInfo').textContent = `电子邮件: ${email}`;
    }
};
